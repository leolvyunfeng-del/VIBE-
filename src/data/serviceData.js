import { Building2, CircleDollarSign, Newspaper, Search, Share2, Users } from "lucide-react";

export const services = [
  {
    slug: "market-strategy",
    path: "/services/market-strategy",
    icon: Search,
    title: "市场调研与本地化策略",
    short: "研究竞品、用户、渠道和价格带，输出品牌定位、内容方向与进入市场路径。",
    clients: "适合首次进入俄罗斯市场、准备新品上市、需要验证品类机会或调整本地化定位的品牌。",
    work: ["市场与竞品研究", "用户画像分析", "渠道组合建议", "本地化卖点和内容策略"],
    process: ["问题定义", "资料收集", "竞品拆解", "用户洞察", "策略输出", "落地计划"],
    deliverables: ["市场研究报告", "竞品矩阵", "用户画像", "渠道建议", "进入市场路线图"],
    metrics: ["品类机会", "价格带", "渠道优先级", "内容主题", "风险清单"],
    relatedCases: ["consumer-electronics", "ooh-advertising", "ota-kol"]
  },
  {
    slug: "kol-koc",
    path: "/services/kol-koc",
    icon: Users,
    title: "俄罗斯 KOL/KOC 营销",
    short: "达人筛选、报价谈判、内容共创、发布执行与效果复盘，匹配品牌品类和目标客群。",
    clients: "适合新品上市、品类教育、口碑种草、游戏上线、消费品试用和需要快速建立本地信任的品牌。",
    work: ["达人池筛选与分级", "报价谈判与排期管理", "内容脚本方向与卖点本地化", "发布执行、数据追踪与复盘"],
    process: ["需求诊断", "达人画像定义", "名单筛选", "内容共创", "发布执行", "数据复盘"],
    deliverables: ["达人名单与推荐理由", "内容方向建议", "排期表", "发布链接汇总", "投放复盘报告"],
    metrics: ["曝光量", "互动率", "CPM", "评论情绪", "点击或线索"],
    relatedCases: ["consumer-electronics", "game-kol", "beauty-kol"]
  },
  {
    slug: "social-media",
    path: "/services/social-media",
    icon: Share2,
    title: "VK / Telegram / YouTube / TikTok 社媒传播",
    short: "围绕平台内容语境制定传播计划，覆盖账号运营、社群扩散、短视频内容与互动增长。",
    clients: "适合需要持续内容声量、社群沉淀、活动传播和品牌日常运营的出海团队。",
    work: ["社媒内容策略", "VK / Telegram 内容分发", "YouTube 长短视频传播", "社群扩散与互动管理"],
    process: ["平台诊断", "内容日历", "素材本地化", "发布管理", "互动维护", "月度复盘"],
    deliverables: ["平台内容规划", "本地化发布文案", "素材建议", "社群传播计划", "运营数据报告"],
    metrics: ["触达量", "互动率", "粉丝增长", "内容保存/转发", "社群活跃度"],
    relatedCases: ["consumer-electronics", "ota-kol", "beauty-kol"]
  },
  {
    slug: "performance-ads",
    path: "/services/performance-ads",
    icon: CircleDollarSign,
    title: "Yandex / VK Ads 广告投放",
    short: "从关键词、受众、素材到数据追踪，帮助品牌构建俄罗斯本土效果广告体系。",
    clients: "适合需要线索获取、站外导流、电商转化、活动报名或达人内容二次放大的品牌。",
    work: ["账户与投放结构搭建", "关键词和受众策略", "素材 A/B 测试", "数据看板与优化建议"],
    process: ["目标确认", "账户搭建", "素材准备", "上线测试", "预算优化", "复盘迭代"],
    deliverables: ["投放计划", "广告结构", "素材建议", "周报/月报", "优化清单"],
    metrics: ["CPC", "CPM", "CTR", "转化成本", "线索量"],
    relatedCases: ["consumer-electronics", "ooh-advertising"]
  },
  {
    slug: "ooh-media",
    path: "/services/ooh-media",
    icon: Building2,
    title: "俄罗斯线下广告与户外媒体",
    short: "覆盖户外大牌、商圈媒体、交通媒体与城市曝光资源，适合新品上市与品牌背书。",
    clients: "适合大促节点、招商、品牌背书、渠道拓展和需要强线下存在感的品牌。",
    work: ["城市与点位规划", "户外媒体采买", "视觉素材适配", "上刊监测与效果复盘"],
    process: ["目标城市选择", "媒体点位筛选", "预算排期", "素材落地", "上刊执行", "证明与复盘"],
    deliverables: ["点位推荐表", "媒体报价", "上刊排期", "现场照片", "结案报告"],
    metrics: ["OTS", "覆盖城市", "上刊周期", "估算 CPM", "话题浏览量"],
    relatedCases: ["ooh-advertising"]
  },
  {
    slug: "pr-branding",
    path: "/services/pr-branding",
    icon: Newspaper,
    title: "PR传播与品牌背书",
    short: "连接本地媒体、行业社群与内容渠道，提升品牌可信度和俄罗斯市场声量。",
    clients: "适合融资/上市背书、新品发布、行业声量建立、线下活动传播和危机沟通准备。",
    work: ["媒体名单与选题策划", "新闻稿本地化", "媒体发布与跟进", "传播复盘"],
    process: ["传播目标", "选题包装", "稿件本地化", "媒体沟通", "发布监测", "声量复盘"],
    deliverables: ["PR 策略", "本地化新闻稿", "媒体发布链接", "传播截图", "结案报告"],
    metrics: ["媒体发布量", "阅读/浏览量", "转载量", "品牌提及", "行业背书质量"],
    relatedCases: ["game-kol", "ooh-advertising", "ota-kol"]
  }
];
