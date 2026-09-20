import { canonical } from "./bundle.js";

const fields = [
  ["title", "标题"],
  ["metric", "指标"],
  ["operation", "计算方式"],
  ["group_by", "分组"],
  ["unit", "单位"],
  ["missing", "缺失值策略"],
  ["filters", "筛选条件"],
  ["derived", "派生指标"],
];

function setting(analysis, field) {
  if (field === "filters" || field === "derived")
    return analysis.plan[field] || [];
  return analysis.report[field];
}

function difference(before, after) {
  const old = new Set(before);
  const next = new Set(after);
  return {
    added: after.filter((id) => !old.has(id)),
    removed: before.filter((id) => !next.has(id)),
  };
}

/** Compare two independently computed MoonBit reports; never infer causality. */
export function compareAnalyses(before, after) {
  const inputChanged = before.csv !== after.csv;
  const derivedChanged =
    canonical(before.plan.derived || []) !== canonical(after.plan.derived || []);
  const settings = fields.flatMap(([field, label]) => {
    const old = setting(before, field);
    const next = setting(after, field);
    return canonical(old) === canonical(next)
      ? []
      : [{ field, label, before: old, after: next }];
  });
  const groupBy = before.report.group_by;
  const derivedGrouping = [before, after].some((analysis) =>
    (analysis.plan.derived || []).some((d) => d.name === groupBy),
  );
  const groupsAligned =
    groupBy === after.report.group_by && !(derivedChanged && derivedGrouping);
  const valuesComparable =
    groupsAligned &&
    !derivedChanged &&
    ["metric", "operation", "unit"].every(
      (field) => before.report[field] === after.report[field],
    );
  const recordsComparable = groupsAligned && !inputChanged;
  const oldGroups = new Map(before.report.evidence.map((e) => [e.group, e]));
  const newGroups = new Map(after.report.evidence.map((e) => [e.group, e]));
  const groupChanges = groupsAligned
    ? [...new Set([...oldGroups.keys(), ...newGroups.keys()])].map((group) => {
        const old = oldGroups.get(group);
        const next = newGroups.get(group);
        const included = recordsComparable
          ? difference(old?.row_ids || [], next?.row_ids || [])
          : null;
        const excluded = recordsComparable
          ? difference(
              old?.excluded_row_ids || [],
              next?.excluded_row_ids || [],
            )
          : null;
        return {
          group,
          before_present: Boolean(old),
          after_present: Boolean(next),
          before_value: old?.value ?? null,
          after_value: next?.value ?? null,
          before_count: old?.count ?? 0,
          after_count: next?.count ?? 0,
          value_changed: !old || !next || old.value !== next.value,
          included,
          excluded,
        };
      })
    : [];
  const changedGroups = groupChanges.filter(
    (g) =>
      g.value_changed ||
      g.included?.added.length ||
      g.included?.removed.length ||
      g.excluded?.added.length ||
      g.excluded?.removed.length,
  );
  return {
    input_changed: inputChanged,
    setting_changes: settings,
    groups_aligned: groupsAligned,
    values_comparable: valuesComparable,
    record_ids_comparable: recordsComparable,
    before: {
      source_rows: before.report.source_rows,
      matched_rows: before.report.matched_rows,
      groups: before.report.evidence.map((e) => ({
        group: e.group,
        value: e.value,
      })),
    },
    after: {
      source_rows: after.report.source_rows,
      matched_rows: after.report.matched_rows,
      groups: after.report.evidence.map((e) => ({
        group: e.group,
        value: e.value,
      })),
    },
    changed_groups: changedGroups,
  };
}
