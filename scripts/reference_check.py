"""Independent numerical oracle: Python stdlib statistics, math, csv.
No application logic is imported. Seed and all expected results are reproducible.
"""
import csv, io, json, math, random, statistics, subprocess
rng=random.Random(20260920)
cases=[]
for trial in range(80):
    rows=[(rng.choice(['A','B','C']),round(rng.uniform(-10000,10000),4)) for _ in range(rng.randint(5,100))]
    stream=io.StringIO(); writer=csv.writer(stream); writer.writerow(['group','value']); writer.writerows(rows)
    for operation in ['sum','mean','median','min','max','stddev','count']:
        threshold=-2000 if trial%2 else None
        plan={'schema_version':1,'metric':'value','group_by':'group','operation':operation,'filters':[]}
        if threshold is not None:plan['filters']=[{'column':'value','op':'gte','value':str(threshold)}]
        groups={};ids={}
        for index,(group,value) in enumerate(rows,1):
            if threshold is not None and value<threshold:continue
            groups.setdefault(group,[]).append(value);ids.setdefault(group,[]).append(index)
        expected={}
        for group,values in groups.items():
            functions={'sum':math.fsum,'mean':statistics.mean,'median':statistics.median,'min':min,'max':max,'count':len}
            expected[group]=(statistics.stdev(values) if len(values)>1 else None) if operation=='stddev' else functions[operation](values)
        cases.append(({'csv':stream.getvalue(),'plan':plan},expected,ids))
proc=subprocess.run(['node','scripts/reference_worker.mjs'],input='\n'.join(json.dumps(c[0]) for c in cases)+'\n',text=True,capture_output=True,check=True)
outputs=proc.stdout.splitlines();assert len(outputs)==len(cases)
comparisons=0
for output,(_,expected,ids) in zip(outputs,cases):
    result=json.loads(output);assert result['ok'],result
    evidence=result['report']['evidence'];assert [e['group'] for e in evidence]==list(expected)
    for e in evidence:
        target=expected[e['group']]
        assert (e['value'] is None and target is None) or (e['value'] is not None and target is not None and math.isclose(e['value'],target,rel_tol=1e-11,abs_tol=1e-9)),(e,target)
        assert e['row_ids']==ids[e['group']]
        comparisons+=1
print(f'PASS: {len(cases)} seeded Python-reference scenarios, {comparisons} aggregate and provenance comparisons.')
