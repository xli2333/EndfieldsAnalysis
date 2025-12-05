
import { PageData, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 1, label: '执行摘要', subLabel: 'EXEC' },
  { id: 2, label: '行业全景', subLabel: 'MKT' },
  { id: 4, label: '公司剖析', subLabel: 'CORP' },
  { id: 6, label: '核心资产', subLabel: 'PROD' },
  { id: 10, label: '投资逻辑', subLabel: 'THESIS' },
  { id: 13, label: '财务估值', subLabel: 'VAL' },
  { id: 14, label: '风险结语', subLabel: 'RISK' },
];

export const REPORT_PAGES: PageData[] = [
  // 第 01 页：封面 (Cover)
  {
    id: 0,
    type: 'COVER',
    section: '深度研究报告',
    title: '鹰角网络：\n价值重构',
    subTitle: '从“单品独角兽”到“工业化平台”的代际跃迁',
    content: {
      heading: '项目代号：终末地',
      bullets: [
        '日期：2025.11.30'
      ]
    }
  },

  // 第 02 页：核心决策摘要 (Executive Summary)
  {
    id: 1,
    type: 'CHART',
    section: '第一部分：执行摘要',
    title: '核心决策：增持',
    subTitle: '点击卡片查看深度尽调数据',
    layout: 'FULL_WIDTH',
    content: {
      chart: {
        type: 'CARDS_EXPANDABLE',
        data: [
          { 
            label: '错位竞争 Alpha',
            group: 'MARKET POSITION',
            iconName: 'Pickaxe',
            details: '市场误读为原神挑战者，实为异星工厂3D化垄断者。',
            color: '#00b2d6',
            expandedContent: {
              title: '赛道重定义：从内容消耗到规则涌现',
              description: '针对近一万条评论的BERT深度语义分析显示，《终末地》中“工业/自动化”关键词权重是“战斗”的 4.2 倍。鹰角提供的是一套“自动化工厂”的规则，而非一次性消耗的内容。',
              bullets: [
                '垄断性：目前市场上不存在第二款高品质二次元 3D 自动化建造游戏。',
                '高门槛：AIC (The Automated Industry Complex），是《明日方舟：终末地》中的核心玩法之一。玩法构筑了极高的认知壁垒，一旦学会，玩家很难回流到传统RPG。',
                '长尾效应：UGC蓝图分享机制将带来类似Minecraft的超长生命周期。'
              ],
              dataPoints: [
                { label: '关键词权重差', value: '4.2x' },
                { label: '蓝海竞品数', value: '0' },
                { label: '目标用户占比', value: '15%' }
              ]
            }
          },
          { 
            label: '体验安全边际',
            group: 'TECHNICAL AUDIT',
            iconName: 'Zap',
            details: '审美、叙事与工业级稳定性，共同构建了不可复制的体验护城河。',
            color: '#22c55e',
            expandedContent: {
              title: '体验即资产：从美学表现到工程底座',
              description: '鹰角以独特的工业废土美学确立品牌辨识度，并以远超行业的工程稳定性，为复杂的自动化基建玩法提供了坚实的底层保障。',
              bullets: [
                '美术叙事：冷峻的现代机能风与碎片化叙事结合，筛选出高净值核心用户，不仅是审美标签，更是忠诚度锚点。',
                '动作体验：战斗深度服务于基建逻辑，拒绝无脑数值比拼。引入Offset机制（闪避不中断连招）保证连招流畅性，兼顾了操作上限与策略深度。',
                '技术底座：采取理性的性能取舍策略，根据对近五万条评价的横向对比，终末地以0.57%的极低崩溃率（远优于竞品首发期），确保了高负载工业模拟玩法的极致流畅。'
              ],
              dataPoints: [
                { label: '核心情感分', value: '0.76' },
                { label: '崩溃率', value: '0.57%' },
                { label: '叙事粘性', value: 'High' }
              ]
            }
          },
          { 
            label: '估值模型跃迁',
            group: 'FINANCIAL UPSIDE',
            iconName: 'TrendingUp',
            details: '从单一CP向平台型公司重估，目标估值120亿。',
            color: '#f59e0b',
            expandedContent: {
              title: '估值逻辑',
              description: '虽然二游行业面临着整体的β风险，但《终末地》具备一些独特优势，应享受一定的抗风险乐观预期。我认为给予3倍P/S是一个比较安全的估值。',
              bullets: [
                '存量业务：明日方舟2D本传提供稳定的20亿+年应收，作为现金奶牛。',
                '增量业务：终末地2026年预计贡献20亿营收，整体给予3倍P/S。',
                '对比案例：参照腾讯收购库洛游戏（大概在4倍P/S）作为参考系。'
              ],
              dataPoints: [
                { label: '2026E 营收', value: '40亿' },
                { label: '目标 P/S', value: '3x' },
                { label: '目标市值', value: '120亿' }
              ]
            }
          }
        ]
      }
    }
  },

  // 第 03 页：行业宏观 (Industry Overview)
  {
    id: 2,
    type: 'CHART',
    section: '第二部分：行业全景分析',
    title: 'Gacha 4.0 时代',
    subTitle: '从“内容消耗”到“系统驱动”',
    layout: 'SPLIT_RIGHT',
    content: {
      heading: '存量博弈下的结构性机会',
      bullets: [
        '内容跑步机效应：传统RPG依赖堆砌美术资源，资本支出(CAPEX)激增但边际效用递减。2024年市场萎缩7.44%。',
        '规则涌现机制：《终末地》通过 AIC 玩法，将内容生产权下放给玩家，随着游玩时间增加，系统乐趣呈指数级增长。',
        '资本审美切换：市场不再为梦想买单，而是追逐高复用性资产与稳定现金流。鹰角完美契合这一新审美。'
      ],
      chart: {
        type: 'INDUSTRY_EVOLUTION',
        xAxisLabel: '时间轴 / 版本迭代',
        yAxisLabel: '用户效用 / 边际回报',
        highlight: '剪刀差：传统模式效用衰减 vs 系统模式效用复利',
        data: [
          { label: 'Gacha 3.0 (内容消耗)', group: 'Legacy', color: '#f472b6', details: '高开低走，依赖不断更新' },
          { label: 'Gacha 4.0 (系统驱动)', group: 'Future', color: '#00b2d6', details: '指数增长，UGC生态复利' }
        ]
      },
      deepDive: {
          title: "深度分析",
          text: [
              "2024年二次元赛道投融资事件同比下降60%，资金向头部集中。",
              "玩家平均留存成本 (CPI)上升至200元/人，唯有高自然流量产品能生存。",
              "鹰角并未进行大规模买量，依靠1000万+ 的私域流量池完成了冷启动。"
          ]
      }
    }
  },

  // 第 04 页：赛道机会 (Market Opportunity)
  {
    id: 3,
    type: 'CHART',
    section: '第二部分：行业全景分析',
    title: '蓝海战略定位',
    subTitle: '填补“重度策略 x 二次元”的真空',
    layout: 'SPLIT_LEFT',
    content: {
      heading: '竞品详细分析',
      bullets: [
        '卡牌养成类：同质化严重，玩家审美疲劳，主要依赖 IP 换皮。',
        '开放世界动作：研发成本极高（1亿美元起步），且米哈游护城河极深。',
        '自动化建造：门槛极高（算法优化难），但用户忠诚度极高，属于“难而正确”的赛道。'
      ],
      chart: {
        type: 'PIE',
        data: [
          { label: '卡牌养成', value: 25, color: '#ef4444', group: '红海市场', details: '获客成本 > $50' },
          { label: '开放世界动作', value: 12, color: '#f59e0b', group: '极度拥挤', details: '直接竞对' },
          { label: '回合制策略', value: 8, color: '#3b82f6', group: '存量博弈', details: '增长停滞' },
          { label: '自动化建造', value: 2, color: '#00b2d6', group: '鹰角垄断', highlight: '当前位置', details: '无直接竞品' },
          { label: '其他', value: 53, color: '#4b5563', group: '长尾市场', details: '低质/换皮' }
        ],
        highlight: '供给侧真空：在50款新游中，唯有《终末地》切入工业建造赛道'
      }
    }
  },

  // 第 05 页：公司基本面 (Company Profile)
  {
    id: 4,
    type: 'TEXT_SPLIT',
    section: '第三部分：公司深度剖析',
    title: '非典型进化',
    subTitle: '从“同人社团”到“工业化舰队”',
    layout: 'SPLIT_LEFT',
    content: {
      heading: '组织架构与基因解析',
      bullets: [
        '作者性护城河：创始人持股>60%。海猫络合物（制作人）的“独裁”审美确立了视觉霸权，不迎合市场最大公约数，而是筛选高净值用户。',
        '三驾马车架构：蒙塔山(现金牛，年净利15亿+)+峘形山(增长极，3A管线)+觉醒波(创新实验室)。核心技术团队均持有期权，利益深度绑定。',
        '反脆弱性：无息负债，现金储备35亿+。CEO黄一峰拒绝了多次激进扩张建议，在行业裁员潮中保持极低离职率，具备穿越周期的战略定力。'
      ]
    }
  },

  // 第 06 页：IP 宇宙飞轮 (Synergy)
  {
    id: 5,
    type: 'DIAGRAM',
    section: '第三部分：公司深度剖析',
    title: 'IP 宇宙飞轮',
    subTitle: 'LTV 的全生命周期管理',
    layout: 'CENTER_TOP',
    content: {
      heading: '泰拉宇宙增益回路',
      chart: {
        type: 'DIAGRAM',
        diagramType: 'FLYWHEEL',
        data: [
          { 
              label: '流量基石', 
              group: '明日方舟 2D', 
              details: '每年20亿+稳定营收提供安全垫。\n沉淀千万级核心私域用户，获客成本接近于零。', 
              color: '#2dd4bf', 
              iconName: 'Users' 
          },
          { 
              label: '文化锚点', 
              group: '塞壬唱片&动画', 
              details: '通过高品质音乐与动画实现破圈。\n年播放量超5亿，将玩家转化为"信徒"。', 
              color: '#f472b6', 
              iconName: 'Music' 
          },
          { 
              label: '价值放大', 
              group: '终末地 3D', 
              details: '基于成熟IP的高ARPU变现终端。\n工业化3D玩法承接流量，实现LTV的指数级跃升。', 
              color: '#00b2d6', 
              iconName: 'TrendingUp' 
          }
        ],
        highlight: '飞轮效应：流量 -> 文化 -> 价值 -> 流量，形成闭环垄断'
      }
    }
  },

  // 第 07 页：产品定义 (Product Definition)
  {
    id: 6,
    type: 'CHART',
    section: '第四部分：游戏核心',
    title: '定义 Next-Gen',
    subTitle: '3D即时战术 + 工业模拟：从内容消耗到规则涌现',
    layout: 'CENTER_TOP',
    content: {
      chart: {
        type: 'CARDS_EXPANDABLE',
        data: [
          { 
            label: '玩法基因组测序',
            group: 'GAMEPLAY DNA',
            iconName: 'Activity',
            details: '4.2:1 降维打击，重构 RPG 底层逻辑。',
            color: '#00b2d6',
            expandedContent: {
              title: '异星工厂的 3D 化继承者',
              description: '评论数据分析显示，“基建/流水线/电力”等模拟类关键词权重是“战斗/连招”类的 4.2 倍。',
              bullets: [
                '蓝海基因：彻底证伪“换皮论”，将战场转移到了“模拟经营 + 自动化”这一无人区。',
                '核心循环重构：玩家角色从“打工者”（刷素材）转变为“资本家”（设计自动化产线），内驱力从数值焦虑转变为效率焦虑。',
                '认知壁垒：一旦玩家掌握了这套复杂的工业规则，其大脑即被格式化，形成极高的转换成本。'
              ],
              dataPoints: [
                { label: '基因权重比', value: '1:4.2' },
                { label: '平均时长', value: '55min' },
                { label: '竞品数量', value: '0' }
              ]
            }
          },
          { 
            label: '无切换战斗',
            group: 'NO-SWITCH COMBAT',
            iconName: 'Layers',
            details: '策略 > 操作。4人同屏，去轮切化，强调资源管理与时机判断。',
            color: '#22c55e',
            expandedContent: {
              title: '无切换即时战术体系',
              description: '告别传统二游的“前后台切换”。通过连携技和技能打断机制，构建了宏观指挥的爽快感。',
              bullets: [
                '设计哲学：这是对手残玩家的尊重，也是对脑力玩家的褒奖。',
                '资源管理：强调在有限的Cost限制下进行技能释放的时机判断，而非单纯的反应速度。',
                '视觉呈现：4名角色同时在场作战，展现出真正的团队配合感。'
              ],
              dataPoints: [
                { label: '技能联动率', value: 'High' },
                { label: '操作门槛', value: 'Low' },
                { label: '同屏角色', value: '4' }
              ]
            }
          },
          { 
            label: '资产效能分析',
            group: 'ASSET EFFICIENCY',
            iconName: 'Factory',
            details: '工业化管线带来的边际成本递减。',
            color: '#f59e0b',
            expandedContent: {
              title: '工业废土美学与复用性',
              description: '相比于竞品每开新地图需重新制作海量一次性资产，《终末地》的核心资产是通用的“工厂组件”（传送带、发电机）。',
              bullets: [
                '风格化渲染 (NPR)：独特的工业废土美学规避了与虚幻5引擎的写实画质军备竞赛。',
                '资产复用：核心玩法组件在所有地图通用，极大地降低了长线运营的内容生产压力。',
                '商业化潜力：不仅售卖角色，更售卖基建外观和功能模组，边际成本为零但需求巨大。'
              ],
              dataPoints: [
                { label: '资产复用率', value: 'High' },
                { label: '内容成本', value: 'Low' },
                { label: '美术风格', value: 'NPR' }
              ]
            }
          }
        ]
      }
    }
  },

  // 第 08 页：美术护城河 (Art & Competitors)
  {
    id: 7,
    type: 'CHART',
    section: '第四部分：游戏核心',
    title: '六维能力雷达对比',
    subTitle: '差异化生存策略：基于评论情感分析的非对称优势构建',
    layout: 'SPLIT_LEFT', 
    content: {
      heading: '终末地 vs 原神 vs 鸣潮',
      bullets: [], 
      chart: {
        type: 'RADAR',
        // Pink (Endfield), Cyan (Genshin), Green (Wuthering)
        seriesNames: ['终末地', '原神', '鸣潮'],
                  data: [
                    { label: '美术表现', value: 5.09, value2: 5.75, value3: 5.73 },
                    { label: '剧情叙事', value: 5.08, value2: 5.60, value3: 5.57 },
                    { label: '核心玩法', value: 5.09, value2: 4.69, value3: 5.18 },
                    { label: '商业化', value: 4.95, value2: 4.75, value3: 4.72 },
                    { label: '技术优化', value: 4.99, value2: 4.92, value3: 4.74 },
                    { label: '运营服务', value: 4.87, value2: 4.87, value3: 4.97 }
                  ],        highlight: '在商业化与核心玩法维度建立非对称优势，规避美术内卷'
      },
      deepDive: {
          title: "深度数据解读",
          text: [
              "商业化：表现优于原神与鸣潮。引入基建外观付费点，构建了比传统抽卡更健康的 LTV 模型，变现效率更高。",
              "核心玩法：显著优于原神，与鸣潮处于同一高位梯队。证明了工业建造的系统深度足以抗衡顶尖动作游戏，有效规避了红海内卷。",
              "技术优化：略优于原神，并显著领先于鸣潮。Beta 测试严重崩溃率仅 0.57%，优于竞品首发，证明了Unity源码级改造的成功，在移动端建立了稳固的体验壁垒。",
              "美术表现：策略性让步，略逊于鸣潮。不与头部竞品进行无上限的资产军备竞赛，而是专注于风格化渲染以换取更高的 ROI。"
          ]
      }
    }
  },

  // 第 09 页：核心玩法循环 (Core Loop)
  {
    id: 8,
    type: 'DIAGRAM',
    section: '第四部分：游戏核心',
    title: '沉没成本设计',
    subTitle: '集成工业系统 (AIC) 的留存逻辑',
    layout: 'VERTICAL_INVERTED', // Chain on Top, Explanation Below
    content: {
      heading: '核心循环：工业化工程蓝图',
      bullets: [
        "熵减快感：看着杂乱的资源被传送带整齐地运输、加工，产生极强的“秩序感”与多巴胺分泌。",
        "背包难题：在有限的负载（电力/算力）和空间内进行最优解配置，这种“戴着镣铐跳舞”的体验构成了极高的可玩性。",
        "壁垒锁定：适应工业逻辑后，迁移到其他游戏成本极高。"
      ],
      chart: {
        type: 'DIAGRAM',
        diagramType: 'CORE_LOOP',
        data: [
          { label: '资源采集', details: '获取原始资源\n沉没成本: 低', iconName: 'Pickaxe' },
          { label: '设施建设', details: '搭建物流管线\n沉没成本: 中', iconName: 'Hammer' },
          { label: '自动化配平', details: '电力逻辑优化\n沉没成本: 高', iconName: 'Zap' },
          { label: '规模扩张', details: '产能指数增长\n沉没成本: 极高', iconName: 'Factory' }
        ],
        highlight: '沉没成本锁定：一旦玩家完成“自动化”改造，其迁移成本将呈指数级上升'
      }
    }
  },

  // 第 11 页：投资逻辑一 (Investment Thesis 1)
  {
    id: 10,
    type: 'CHART',
    section: '第五部分：投资要点详述',
    title: '基因组测序',
    subTitle: '认知门槛构建的护城河：基于评论数据的基因验证',
    layout: 'SPLIT_RIGHT',
    content: {
      heading: '蓝海基因验证：从内容消耗到规则涌现',
      bullets: [
        '**排他性竞争**: 目前2025-2026年待发布的50款二次元新游中，自动化建造类为0款。鹰角拥有对该品类的绝对定价权。',
        '**认知门槛**: AIC玩法的高上手难度并非缺点，而是极深的护城河。一旦玩家掌握了这套复杂的工业逻辑，其大脑即被格式化，极难迁移至其他“无脑点点点”的游戏，转换成本极高。',
        '**错位竞争**: 避开了与米哈游在开放世界动作红海中的正面硬刚，而是在精致的箱庭世界中去激活潜藏的模拟经营爱好者。',
        '**基因图谱**: 评论数据深度分析显示，“工业/自动化”关键词权重是“动作/战斗”的 4.2 倍，彻底证伪了换皮论。',
      ],
      chart: {
        type: 'BAR_HORIZONTAL',
        xAxisLabel: '词频权重',
        data: [
          { label: '基建/流水线 (模拟)', value: 135, color: '#00b2d6' },
          { label: '自动化/电力 (模拟)', value: 98, color: '#00b2d6' },
          { label: '闪避/弹反 (动作)', value: 45, color: '#f472b6' },
          { label: '打击感/连招 (动作)', value: 32, color: '#f472b6' }
        ],
        highlight: '模拟类权重是动作类的 4.2倍，鹰角实际上垄断了“二次元异星工厂”这一细分赛道'
      },
    }
  },

  // 第 12 页：投资逻辑二 (Investment Thesis 2)
  {
    id: 11,
    type: 'CHART',
    section: '第五部分：投资要点详述',
    title: '文化区隔与社群壁垒',
    subTitle: 'IP、审美与剧情作为一种筛选机制',
    layout: 'SPLIT_LEFT',
    content: {
      heading: '高净值用户的良性筛选与运营挑战',
      chart: {
        type: 'SCATTER',
        xAxisLabel: '游玩时长 (小时)',
        yAxisLabel: '综合满意度 (-1 to 1)',
        data: [
          { label: '筛选期 (<5h)', x: 10, y: 20, color: '#ef4444', value: 0.2, group: '高流失' },
          { label: '沉浸期 (5-20h)', x: 45, y: 35, color: '#facc15', value: 0.5, group: '学习中' },
          { label: '死忠期 (20h+)', x: 90, y: 95, color: '#00b2d6', value: 0.95, group: '核心锁定' },
        ],
        highlight: '良性筛选：熬过新手期的20%用户，展现出惊人的粘性 (D30 > 15%)'
      },
      bullets: [
        '**良性筛选**: Beta测试中的劝退实质上是一次高效的圈层清洗。留下的核心用户展现出极高的二创热情与付费意愿，构成了类似“宗教”的品牌忠诚度。',
        '**审美即定价权**: 鹰角独特的“冷峻、工业、机能风”不迎合大众，而是通过极致的风格化筛选高净值用户。这种基于品味的壁垒，比基于画质的技术壁垒更难被复制。',
        '**运营信任危机**: 这是一个经典的“好资产，坏情绪”时刻。数据表明产品力本身（美术、剧情）处于安全区，但发行侧（测试资格、黄牛）处于危险区（相关评论情感得分仅-0.49）。如果能在公测前修复运营信任，当前的估值折扣将转化为巨大的上行空间，毕竟本质是大家想玩。'
      ],
      riskDebate: {
        title: '玩法核心风险debate',
        content: '核心风险在于自动化工厂玩法的高耗时与高上手门槛，难以适配目标玩家中占比30%的上班族（24-29岁）的碎片化时间，虽鹰角通过资源副本保障基础日活，但仍面临玩家负担重的问题。主要痛点包括专有名词多、搭建繁琐及新地图（如武陵城水体工业）带来的持续学习成本。对此，鹰角采用了箱庭地图和蓝图系统来控制信息密度与降低难度。游戏的成败取决于社区运营能力及市场对新玩法的接受度，虽前期劝退率高，但一旦留存，用户粘性极强。'
      }
    }
  },

  // 第 13 页：投资逻辑三 (Investment Thesis 3)
  {
    id: 12,
    type: 'CHART',
    section: '第五部分：投资要点详述',
    title: '工业化杠杆',
    subTitle: '破解“内容跑步机”困境',
    layout: 'SPLIT_RIGHT',
    content: {
      heading: '资产复用率与边际成本分析',
      chart: {
        type: 'BAR_VERTICAL',
        xAxisLabel: '资产类型',
        yAxisLabel: '复用率 / 边际收益',
        data: [
          { label: '传统 RPG (地图/剧情)', value: 20, color: '#ef4444', group: '高 CapEx, 低复用', details: '一次性消耗品' },
          { label: '终末地 (工厂/蓝图)', value: 95, color: '#00b2d6', highlight: 'High Efficiency', group: '低 CapEx, 极高复用', details: '平台化资产' }
        ],
        highlight: '工业组件的无限复用 vs 角色地图的一次性消耗'
      },
      bullets: [
        '**UGC 平台化**: 引入蓝图分享系统，将游戏从单纯的内容生产提供者转型为平台。玩家自主生产内容（产线设计），极大地降低了长线运营的各种成本。同时搭建好蓝图的玩家又会积极的投身到分享当中，从而完成好内容的正向循环。如同明日方舟的b站教程一样，创造非常积极的玩家生态。',
        '**商业化效率**: 售卖基建外观和功能模组的边际成本为零，但需求随着游戏时长指数级增长。这是一种比卖数值更健康、更可持续的商业模式。',
        '**利润率修复**: 这种结构性的成本优势，将有利于支撑鹰角在成熟期获得高于行业平均的净利率。'
      ]
    }
  },

  // 第 14 页：财务模型 (Financials)
  {
    id: 13,
    type: 'CHART',
    section: '第六部分：财务模型与估值',
    title: '估值矩阵',
    subTitle: '基于 2026E 营收预测的敏感性分析 (2x - 4x)',
    layout: 'SPLIT_RIGHT',
    content: {
      heading: '2026E 营收预测与目标市值 (人民币 亿元)',
      bullets: [
        '**保守基石**: 将存量业务（明日方舟）的预期下调至 **20亿 RMB**，确认其作为现金奶牛而非增长引擎的定位，为新业务提供容错空间。',
        '**理性增长**: 对于《终末地》，我认为可以将中性预期设定为 **20亿 RMB**。这并非看衰，而是基于二次元游戏赛道整体退火的现实情况，以及源自AIC玩法的高门槛筛选机制——不指望它成为大众化的《原神》，但确信它能垄断高净值的“工业党”用户。',
        '**安全边际**: 尽管库洛游戏的交易对价大约 **4x P/S（预测）**，我仍认为 **3x P/S** 是一个比较安全的定价。这 1.0x 的折价是对当前行业负β的充分避险。**120亿**不是一个激进的赌注，而是一个在红海中寻找确定性的**防御性报价**'
      ],
      chart: {
        type: 'FINANCIAL_TABLE',
        seriesNames: ['悲观 (Bear)', '中性 (Base)', '乐观 (Bull)'],
        data: [
          { label: '总营收', value: 30, value2: 40, value3: 55, details: '亿 RMB' },
          { label: 'P/S 倍数', value: 2.0, value2: 3.0, value3: 4.0, details: 'x' },
          { label: '目标市值', value: 60, value2: 120, value3: 220, details: '亿 RMB' },
        ],
        highlight: '**3倍 P/S** 的保守定价，锁定 **120亿 RMB** 的安全边际。'
      },

    }
  },

  // 第 15 页：风险与结论 (Risk & Conclusion)
  {
    id: 14,
    type: 'CHART',
    section: '第七部分：风险评估与最终决议',
    title: '',
    subTitle: '',
    layout: 'GRID_2X2',
    content: {
      chart: {
        type: 'QUAD_GRID',
        data: [
          {
            label: '赛道退潮：马尔萨斯陷阱',
            subtitle: '当潮水退去时...',
            color: '#ef4444',
            bullets: [
              '估值逻辑重塑: 市场不再为梦想买单，只为利润买单。赛道估值中枢下移。',
              '存量博弈: 增量红利消失，每一款新游的成功都意味着另一款旧游的死亡。',
              '策略: 不赌赛道反转，只赌个体穿越。'
            ]
          },
          {
            label: '财务避险：零杠杆结构',
            subtitle: '乱世中的现金堡垒...',
            color: '#22c55e',
            bullets: [
              '无有息负债: 鹰角不依赖外部融资，完全规避了高息环境下的债务风险。',
              '现金牛输血: 存量业务每年提供15亿以上流水，造血能力极强。',
              '结论: 这是一个不需要输血也能活的标的。'
            ]
          },
          {
            label: '产品避险：口红效应',
            subtitle: '经济下行期的廉价娱乐...',
            color: '#f59e0b',
            bullets: [
              '时间杀手: 模拟经营玩法是公认的时间黑洞，提供极高的“时长/金钱”性价比。',
              '错位竞争: 不去抢夺用户缩水的钱包，而是抢夺用户过剩的闲暇时间。',
              '结论: 越是萧条，杀时间的需求越旺盛。'
            ]
          },
          {
            label: '核心决策：确信买入',
            subtitle: '在恐慌中买入确定性...',
            color: '#00b2d6',
            bullets: [
              '估值锚点: *120亿* 人民币 (3倍P/S)',
              '安全边际: 这一价格已充分计入了赛道退潮的风险折价。',
              '行动建议: 建议立即启动谈判，锁定这一稀缺的现金流资产。'
            ]
          }
        ]
      }
    }
  }
];
