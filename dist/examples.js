export const examples = {
  sales: {
    name: '销售业绩', category: '业务分析', file: 'sales.csv',
    description: '按区域复核销售额，查看每个结果对应的订单记录。',
    csv: '月份,区域,产品,销售额,成本\n2026-07,华东,专业版,42000,24500\n2026-07,华南,专业版,31000,18100\n2026-07,华北,团队版,28000,16400\n2026-08,华东,团队版,56000,32000\n2026-08,华南,专业版,38000,21700\n2026-08,华北,团队版,35000,20200\n2026-09,华东,专业版,68000,38500\n2026-09,华南,团队版,47000,26300\n2026-09,华北,专业版,43000,24500\n',
    plan: {schema_version:1,title:'区域销售表现',metric:'销售额',operation:'sum',group_by:'区域',unit:'元',missing:'error',filters:[],derived:[]}
  },
  lab: {
    name: '实验测量', category: '研究分析', file: 'laboratory.csv',
    description: '比较三组实验的测量均值，缺失值需要显式处理。',
    csv:'样本,实验组,测量值,批次\nS01,对照组,12.4,A\nS02,方案 A,15.2,A\nS03,方案 B,17.8,A\nS04,对照组,12.8,B\nS05,方案 A,15.9,B\nS06,方案 B,18.1,B\nS07,对照组,12.1,C\nS08,方案 A,,C\nS09,方案 B,17.5,C\n',
    plan:{schema_version:1,title:'实验测量结果复核',metric:'测量值',operation:'mean',group_by:'实验组',unit:'mg/L',missing:'skip',filters:[],derived:[]}
  },
  motor: {
    name:'电机温升', category:'工程分析',file:'motor.csv',
    description:'从绕组温度减去环境温度，得到可逐条复算的温升结果。',
    csv:'时刻,设备,绕组温度,环境温度,负载率\n09:00,M-01,48,24,60\n09:00,M-02,51,24,60\n09:30,M-01,57,25,75\n09:30,M-02,63,25,75\n10:00,M-01,66,25,90\n10:00,M-02,75,26,90\n10:30,M-01,71,26,100\n10:30,M-02,82,26,100\n',
    plan:{schema_version:1,title:'电机温升对比',metric:'温升',operation:'max',group_by:'设备',unit:'K',missing:'error',filters:[],derived:[{name:'温升',op:'subtract',left:'绕组温度',right:'环境温度'}]}
  }
};
