// default-data.js
// DH1项目HelpMe索引表 - 默认数据

const DEFAULT_TABLE_DATA = [
    {
        "id": 1,
        "category": "开发计划",
        "title": "DH1项目主计划",
        "path": "https://dongfengyipai.feishu.cn/slides/PpvuslOTblanEOd3FbKcUuHonve",
        "type": "url",
        "note": "【飞书】DH1项目主计划\n1月6日版本"
    },
           {
        "id": 2,
        "category": "整车配置",
        "title": "DH1整车配置清单",
        "path": "https://acndoaymjsa1.feishu.cn/file/DcMPbNUlAoIJ1QxhfFscwleJnid",
        "type": "url",
        "note": "【飞书】DH1整车配置表\n1月4日版本"
    },
        {
        "id":3,
        "category": "联系信息",
        "title": "DH项目整体联系人清单",
        "path": "https://dongfengyipai.feishu.cn/wiki/S4ZFw6mnfiG56NkuYsccRFUrnNd?table=tblCQ7798eaHKM2n&view=vew5Qwimte",
        "type": "url",
        "note": "【飞书】DH1各业务板块联系人信息"
    },
    {
        "id": 4,
        "category": "设计评审",
        "title": "DH1电子电气拓扑图",
        "path": "p:\\DH系列\\130-智能软件\\03-正式方案网络设计\\网络拓扑",
        "type": "folder",
        "note": "【内网】\n请确保你的账号已经切换到内网"
    },
    {
        "id": 5,
        "category": "阶段评审",
        "title": "DH1项目J5阶段评审材料归档路径",
        "path": "\\\\10.4.9.25\\Project\\DH系列\\130-智能软件\\DH1\\05-J5评审材料及会议纪要",
        "type": "folder",
        "note": "【外网】请大家把J5材料及会议纪要放入此文件夹"
    },
    {
        "id": 6,
        "category": "责任分工",
        "title": "DH1项目研发总院智软内部责任分工",
        "path": "https://acndoaymjsa1.feishu.cn/wiki/F5JbwGoz1iI0eVk7SNZcMyetnDd?table=tblL7GTSCJjWcVnU",
        "type": "url",
        "note": "【飞书】仅包含东风研发总院智软内部相关责任人分工，仅智软群成员可访问"
    },
    {
        "id": 7,
        "category": "再发防止",
        "title": "DH1设计类故障再发防止",
        "path": "https://dongfengyipai.feishu.cn/sheets/RqFFsAkeRhPgSutRG0tczl1NnPf?from=from_copylink&sheet=1cmpLH",
        "type": "url",
        "note": "【飞书】设计类故障再发防止"
    },
];

const DEFAULT_CATEGORY_LIST = [
    { id: "category1", name: "开发计划" },
    { id: "category2", name: "设计评审" },
    { id: "category3", name: "阶段评审" },
    { id: "category4", name: "联系信息" },
    { id: "category5", name: "再发防止" },
    { id: "category6", name: "整车配置" },
    { id: "category7", name: "责任分工" },
    { id: "category8", name: "其他" }
];

const DEFAULT_CATEGORY_MAP = {
    "category1": "开发计划",
    "category2": "设计评审",
    "category3": "阶段评审",
    "category4": "联系信息",
    "category5": "再发防止",
    "category6": "整车配置",
    "category7": "责任分工",
    "category8": "其他"
};

const DEFAULT_ADMIN_ACCOUNTS = [
    { 
        username: 'admin', 
        passwordHash: 'b107fce20b89ab22f4eb72843df4acc2628c88d38c54f56bdf3767f53238274f',
        name: '管理员',
        permissions: ['read', 'write', 'delete', 'export', 'config']
    },
    { 
        username: 'editor', 
        passwordHash: 'b107fce20b89ab22f4eb72843df4acc2628c88d38c54f56bdf3767f53238274f',
        name: '编辑员',
        permissions: ['read', 'write', 'export']
    }
];

const DEFAULT_APP_CONFIG = {
    autoLogout: 60,
    maxLoginAttempts: 5,
    version: 'Default',
    source: 'Builtin',
    lastUpdated: new Date().toISOString().split('T')[0]
};
