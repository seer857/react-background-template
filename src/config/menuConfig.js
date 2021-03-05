import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'

const menuList = [
  {
    title: "控制台",
    key: "/home",
    icon: <AppstoreOutlined />
  },
  {
    title: "分类列表",
    key: "/category",
    icon: <PieChartOutlined />
  },
  {
    title: "商品列表",
    key: "/product",
    icon: <DesktopOutlined />
  },
  {
    title: "用户管理",
    key: "/userAdmin",
    icon: <ContainerOutlined />,
    children: [
      {
        title: "人员管理",
        key: "/user",
      },
      {
        title: "角色管理",
        key: "/role",
      }
    ]
  },
  {
    title: "图表管理",
    key: "/charts",
    icon: <MailOutlined />,
    children: [
      {
        title: "柱状图",
        key: "/charts/bar",
      },
      {
        title: "折线图",
        key: "/charts/line",
      },
      {
        title: "饼状图",
        key: "/charts/pie",
      },
    ]
  }
]

export default menuList