import casesHome from "../assets/cases/cases-home.png";
import case3cRu from "../assets/cases/case-3c-ru.png";
import caseBeauty from "../assets/cases/case-beauty.png";
import caseGameIp from "../assets/cases/case-game-ip.png";
import caseGameMmorpg from "../assets/cases/case-game-mmorpg.png";
import caseGameSlg from "../assets/cases/case-game-slg.png";
import caseOohCleaning from "../assets/cases/case-ooh-cleaning.png";
import caseOohFmcg from "../assets/cases/case-ooh-fmcg.png";
import caseOta from "../assets/cases/case-ota.png";

export const casePreviewImage = casesHome;

export const caseSummaries = [
  {
    slug: "consumer-electronics",
    path: "/cases/consumer-electronics",
    eyebrow: "3C 消费电子",
    title: "3C消费电子品牌俄罗斯推广",
    text: "以达人测评、短视频种草和本地平台传播组合，帮助消费电子品牌提升目标市场认知。",
    tags: ["KOL测评", "社媒传播", "内容种草"]
  },
  {
    slug: "game-kol",
    path: "/cases/game-kol",
    eyebrow: "游戏出海",
    title: "游戏产品俄罗斯KOL投放",
    text: "围绕 IP、MMORPG、SLG 等不同游戏类型，组合垂类达人、泛娱乐内容和 PR 传播。",
    tags: ["游戏达人", "直播合作", "内容植入"]
  },
  {
    slug: "ooh-advertising",
    path: "/cases/ooh-advertising",
    eyebrow: "线下曝光",
    title: "中国品牌俄罗斯线下广告曝光",
    text: "结合商圈、户外大屏、交通媒体和社媒传播，为品牌建立线下存在感与招商背书。",
    tags: ["户外媒体", "PR传播", "品牌背书"]
  },
  {
    slug: "ota-kol",
    path: "/cases/ota-kol",
    eyebrow: "OTA 平台",
    title: "OTA平台俄罗斯KOL合作",
    text: "邀请俄罗斯旅行与生活方式博主深度体验中国城市路线，塑造真实旅行认知。",
    tags: ["旅行博主", "本地化内容", "路线体验"]
  },
  {
    slug: "beauty-kol",
    path: "/cases/beauty-kol",
    eyebrow: "美妆种草",
    title: "美妆品牌俄罗斯KOL合作",
    text: "围绕彩妆和护肤产品，筛选本地美妆达人进行多平台短内容传播。",
    tags: ["美妆达人", "短视频", "多平台曝光"]
  }
];

export const caseDetails = [
  {
    slug: "consumer-electronics",
    path: "/cases/consumer-electronics",
    title: "3C消费电子品牌俄罗斯推广",
    description: "通过达人测评、内容种草和本地平台传播，帮助消费电子品牌在目标市场建立认知和信任。",
    relatedServices: ["kol-koc", "social-media", "performance-ads"],
    sections: [
      {
        title: "某知名耳机麦克风品牌 RU 红人推广",
        label: "RU-红人推广",
        image: case3cRu,
        background: "通过 YouTube 与 VK 本地达人合作，提升品牌在俄罗斯市场的产品曝光、用户互动与内容信任度。",
        work: [
          "合作 5 位俄罗斯 KOL，覆盖 YouTube、YouTube Shorts 与 VK 平台。",
          "围绕产品使用场景完成长视频植入、短视频内容和 VK 推广帖发布。",
          "从播放量、互动率、CPM、评论情绪等维度评估效果，并提出优化方向。"
        ],
        metrics: [
          { value: "100w", label: "曝光量" },
          { value: "$10.35", label: "平均 CPM" },
          { value: "$0.92", label: "最低 CPM" }
        ],
        result: "用中腰部科技 / 生活方式达人精准触达核心用户，整体互动表现良好。"
      }
    ]
  },
  {
    slug: "game-kol",
    path: "/cases/game-kol",
    title: "游戏产品俄罗斯KOL投放",
    description: "针对不同游戏类型和上线阶段，组合垂类 KOL、泛娱乐创作者、社群互动和 PR 内容。",
    relatedServices: ["kol-koc", "social-media", "pr-branding"],
    sections: [
      {
        title: "某知名 IP 游戏 RU 红人推广",
        label: "RU-红人推广",
        image: caseGameIp,
        background: "为经典动漫 IP 在俄罗斯市场进行全新推广，激活核心粉丝并破圈触达潜在年轻受众。",
        work: [
          "围绕 IP 内核，联动调酒、健身、音乐等多领域 KOL。",
          "将 IP 符号自然融入本地化生活场景与情感表达。",
          "提升 IP 在俄语区的话题热度与粉丝黏性。"
        ],
        metrics: [
          { value: "4%", label: "冷启动 ROI" },
          { value: "$8.6", label: "KOL CPM" },
          { value: "3.1%", label: "互动率" }
        ],
        result: "内容从核心粉丝圈层扩散到泛娱乐人群，强化游戏 IP 的社交讨论。"
      },
      {
        title: "某 MMORPG 游戏 RU 红人推广",
        label: "RU-红人推广",
        image: caseGameMmorpg,
        background: "某国产 MMORPG 游戏计划在俄罗斯市场启动全新 OB 公开测试，需要在短期内凝聚核心玩家期待。",
        work: [
          "以“分层内容预热 + 垂类 KOL 矩阵”为策略。",
          "策划并执行玩法解析、公会招募、OB 倒计时系列线上活动。",
          "联动 10 余位俄罗斯本地 MMO 垂类头部 KOL，并配合游戏头部 PR 媒体发稿。"
        ],
        metrics: [
          { value: "$79", label: "CPM" },
          { value: "3.6%", label: "互动率" }
        ],
        result: "在核心玩家圈层形成上线前讨论，为公开测试建立声量基础。"
      },
      {
        title: "某知名 SLG 游戏 RU 红人推广",
        label: "RU-红人推广",
        image: caseGameSlg,
        background: "以 YouTube 泛娱乐 KOL 合作为切入点，通过内容植入形式在非纯游戏垂类博主中传播。",
        work: [
          "围绕生存、建造、策略等核心玩法特征进行内容方向匹配。",
          "筛选具备本地用户影响力的 YouTube 内容创作者。",
          "完成中插广告 / 内容植入执行，并进行投放后数据复盘。"
        ],
        metrics: [
          { value: "140K", label: "累计播放量" },
          { value: "$13.5", label: "KOL CPM" },
          { value: "10K+", label: "互动量" }
        ],
        result: "在泛娱乐内容场景中完成游戏曝光，扩大非核心游戏人群触达。"
      }
    ]
  },
  {
    slug: "ooh-advertising",
    path: "/cases/ooh-advertising",
    title: "中国品牌俄罗斯线下广告曝光",
    description: "通过线下媒体、户外场景、商圈曝光与社媒传播，帮助品牌建立可见的市场存在感。",
    relatedServices: ["ooh-media", "market-strategy", "pr-branding"],
    sections: [
      {
        title: "某家清行业冠军品牌 RU 数码家电全案营销",
        label: "RU-数码家电全案营销",
        image: caseOohCleaning,
        background: "某中国知名家清品牌为提升在俄罗斯市场的渗透率与知名度，计划通过系统性的市场洞察与高势能曝光打开增长局面。",
        work: [
          "覆盖受众、产品与竞品的深度市场调研，并制定线下整合营销规划。",
          "在大促核心节点，于重点城市高端商圈集中投放裸眼 3D 大屏广告。",
          "用强冲击视觉内容，将品牌与前沿科技、高端品质强关联。"
        ],
        metrics: [
          { value: "31.5M", label: "总触达人次（OTS）" },
          { value: "$3.3", label: "CPM" },
          { value: "+38%", label: "Google Trends 同比增长" }
        ],
        result: "四个月 Campaign 全网曝光量超 2 亿，社媒粉丝增长 8 万+，品牌搜索指数提升 50%+。"
      },
      {
        title: "某头部快消品牌 RU 户外广告",
        label: "RU-快消品牌广告",
        image: caseOohFmcg,
        background: "某中国头部快消品牌计划在俄罗斯市场深度发展本地分销网络，需要高效触达潜在经销商伙伴。",
        work: [
          "在核心城市环线主干道及关键出入口，布局高频次户外广告。",
          "采用 DSP 模式覆盖黄金时段投放，以最小预算获取最大曝光效益。",
          "辅助品牌社媒宣发，积累市场推广素材。"
        ],
        metrics: [
          { value: "500w+", label: "VK总曝光" },
          { value: "2.5w+", label: "内容互动量" },
          { value: "550w+", label: "相关话题浏览量" }
        ],
        result: "在通勤和生活场景中建立品牌认知，并辅助招商沟通。"
      }
    ]
  },
  {
    slug: "ota-kol",
    path: "/cases/ota-kol",
    title: "某知名 OTA 平台 RU 红人推广",
    description: "通过本地化内容营销提升中国目的地吸引力与品牌信任度。",
    relatedServices: ["kol-koc", "social-media", "market-strategy"],
    sections: [
      {
        title: "某知名 OTA 平台俄罗斯 KOL 合作",
        label: "RU-OTA红人推广",
        image: caseOta,
        background: "某国际 OTA 平台为开拓 2026 年俄罗斯游客赴华旅游市场，计划通过本地化内容营销提升中国目的地吸引力。",
        work: [
          "精准筛选 5 位具有强个人风格与影响力的俄罗斯旅行 / 生活方式博主。",
          "定制武汉、广州、深圳、三亚四大城市的深度体验路线。",
          "通过 VK、Telegram、YouTube 进行本地化传播，塑造真实、生动的中国旅行认知。"
        ],
        metrics: [
          { value: "1.5M", label: "总曝光" },
          { value: "4.6%", label: "互动率" },
          { value: "4", label: "YouTube旅游区站内排名" }
        ],
        result: "以真实体验内容提升目的地信任度，形成旅游兴趣与品牌联想。"
      }
    ]
  },
  {
    slug: "beauty-kol",
    path: "/cases/beauty-kol",
    title: "某知名美妆品牌 RU 红人推广",
    description: "围绕彩妆与护肤产品进行本地美妆达人合作，提升年轻女性用户中的曝光和购买兴趣。",
    relatedServices: ["kol-koc", "social-media", "pr-branding"],
    sections: [
      {
        title: "某知名美妆品牌俄罗斯 KOL 合作",
        label: "RU-红人推广",
        image: caseBeauty,
        background: "本次市场推广主要围绕彩妆及护肤品种草展开，通过本地美妆 / 活动 KOL 发布俄罗斯短内容。",
        work: [
          "筛选俄罗斯美妆 / 艺术达人，完成合作沟通、报价确认、样品寄送及排期行动。",
          "围绕眼影、口红、护肤等产品，推动达人制作试色、妆容展示、使用体验类短视频内容。",
          "部分达人除 TikTok 外，同步发布至 YouTube、Instagram、Likee 等平台。"
        ],
        metrics: [
          { value: "30w", label: "总曝光" },
          { value: "8%", label: "平均互动率" },
          { value: "$11", label: "平均 CPM" }
        ],
        result: "内容互动表现稳定，在年轻女性用户中提升品牌曝光和产品兴趣。"
      }
    ]
  }
];
