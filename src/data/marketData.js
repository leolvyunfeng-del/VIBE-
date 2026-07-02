import { Globe2, Handshake, MessageCircle, TrendingUp } from "lucide-react";

export const marketOpportunities = [
  {
    slug: "ecommerce",
    path: "/market/ecommerce",
    icon: TrendingUp,
    title: "电商与消费需求增长",
    short: "俄罗斯线上消费基础持续扩大，跨境品牌有机会通过内容种草、搜索广告与平台投放快速触达目标用户。",
    conclusion: "俄罗斯电商增长为中国品牌提供了从内容认知到搜索转化的完整增长空间。",
    metrics: [
      { value: "2.8万亿卢布", label: "Ozon 2024 平台成交额", source: "来源：Ozon 2024 公开业绩报道" },
      { value: "1.4B", label: "Ozon 2024 订单量", source: "来源：Ozon 2024 公开业绩报道" },
      { value: "56.5M", label: "Ozon 2024 买家规模", source: "来源：Ozon 2024 公开业绩报道" }
    ],
    trends: [
      "用户对线上购物、平台评价和达人内容的依赖度持续提升。",
      "搜索、内容和电商站内资源的组合影响购买决策。",
      "3C、家电、美妆、游戏周边和消费品类更适合用内容先建立信任。"
    ],
    insights: [
      "不要只做单次曝光，应设计内容种草、搜索承接和平台转化的链路。",
      "进入市场初期建议先验证品类关键词、竞品价格带和核心卖点表达。",
      "用本地化测评内容降低用户对新品牌的决策成本。"
    ],
    channels: ["KOL/KOC 测评", "Yandex 搜索", "VK Ads", "Telegram 社群", "电商站外导流"],
    sources: ["Ozon：2024 年平台成交额约 2.8 万亿卢布，全年订单量约 14 亿，买家规模约 5650 万。", "AKIT：持续发布俄罗斯互联网贸易市场与品类结构数据，可作为后续深度方案的数据入口。"]
  },
  {
    slug: "social-content",
    path: "/market/social-content",
    icon: MessageCircle,
    title: "社媒内容高度活跃",
    short: "VK、Telegram、YouTube、TikTok 等平台形成多层触点，适合品牌做口碑传播、达人合作与私域沉淀。",
    conclusion: "俄罗斯社媒生态适合用达人内容建立第一层信任，再用社群和广告放大传播。",
    metrics: [
      { value: "106M", label: "2025 年社媒用户身份量", source: "来源：DataReportal Digital 2025 Russia" },
      { value: "133M", label: "2025 年互联网用户", source: "来源：DataReportal Digital 2025 Russia" },
      { value: "92.2%", label: "互联网渗透率约值", source: "来源：DataReportal Digital 2025 Russia" }
    ],
    trends: [
      "用户更愿意相信本地创作者的真实使用体验。",
      "Telegram 适合承接深度讨论和活动信息，VK 适合广泛分发。",
      "YouTube 长视频和 Shorts 可以同时承担解释与种草。"
    ],
    insights: [
      "品牌内容需要先适应平台语境，再表达产品卖点。",
      "达人筛选不只看粉丝数，更要看受众结构、评论质量和内容稳定性。",
      "建议把内容资产复用到广告素材、PR 传播和销售沟通中。"
    ],
    channels: ["VK", "Telegram", "YouTube", "YouTube Shorts", "TikTok", "本地 KOL/KOC"],
    sources: ["DataReportal：2025 年俄罗斯互联网用户约 1.33 亿，社媒用户身份量约 1.06 亿。"]
  },
  {
    slug: "local-platforms",
    path: "/market/local-platforms",
    icon: Globe2,
    title: "平台集中度高",
    short: "俄罗斯核心流量集中在 Yandex、VK、Telegram 等本土平台，品牌需要理解平台规则、广告机制与用户触点，否则容易出现渠道选择失焦、投放效率低等问题。",
    conclusion: "本土平台不是备用渠道，而是俄罗斯市场增长系统的核心组成。",
    metrics: [
      { value: "70.57%", label: "Yandex 搜索份额", source: "来源：StatCounter 2026 年 5 月俄罗斯搜索市场" },
      { value: "93.8M", label: "VK 俄罗斯活跃用户", source: "来源：DataReportal / Mediascope 2025" },
      { value: "多城市", label: "户外与商圈媒体覆盖", source: "来源：俄罗斯本地媒体采购资源整理" }
    ],
    trends: [
      "Yandex 承担大量主动搜索需求，适合承接明确意图。",
      "VK Ads 可用于兴趣人群、相似人群和内容放大。",
      "线下媒体在新品发布、大促节点和招商场景中仍具备强存在感。"
    ],
    insights: [
      "中国品牌需要建立俄罗斯本地投放账户、素材规范和数据复盘体系。",
      "广告投放应与 KOL 内容节奏配合，而不是孤立投放。",
      "线下曝光更适合承担品牌信任和招商背书。"
    ],
    channels: ["Yandex", "VK Ads", "本地行业媒体", "户外媒体", "商圈广告"],
    sources: ["StatCounter：2026 年 5 月，Yandex 在俄罗斯搜索引擎市场份额约 70.57%。", "DataReportal / Mediascope：2025 年初 VK 在俄罗斯活跃用户约 9380 万。"]
  },
  {
    slug: "chinese-brands",
    path: "/market/chinese-brands",
    icon: Handshake,
    title: "轻工业品类市场缺口释放",
    short: "3C、游戏、消费品、汽车配件等品类在俄罗斯市场认知提升，品牌需要更系统地建立信任与差异化。",
    conclusion: "俄罗斯用户对中国品牌的认知正在从价格导向转向品质、体验和信任判断。",
    metrics: [
      { value: "60%+", label: "中国乘用车新车销量占比", source: "来源：Autostat 2024/2025 俄罗斯汽车市场数据" },
      { value: "Top 品类", label: "3C、家电、汽车与游戏机会", source: "来源：公开市场观察与平台品类趋势" },
      { value: "持续提升", label: "中国品牌本地认知", source: "来源：本地平台内容与搜索趋势观察" }
    ],
    trends: [
      "中国品牌在 3C、游戏、家电、美妆和快消领域具备更高讨论度。",
      "用户对产品性能、售后、真实评价和本地案例更加敏感。",
      "市场竞争从铺货转向品牌表达、渠道效率和长期信任。"
    ],
    insights: [
      "品牌需要用本地语言解释产品价值，而不是直译国内卖点。",
      "真实场景内容和本地媒体背书能显著降低认知门槛。",
      "建议围绕品类教育、竞品对比和达人证言建立内容矩阵。"
    ],
    channels: ["KOL 测评", "PR 背书", "搜索广告", "线下广告", "社群运营"],
    sources: ["Autostat：2024 年中国品牌在俄罗斯新车销售中占据主要份额，显示中国品牌接受度持续提升。", "平台观察：3C、家电、美妆、游戏等品类适合用本地内容与搜索承接建立信任。"]
  }
];
