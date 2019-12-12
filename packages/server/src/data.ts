import { Ticket } from "./models";

export const events = [
  {
    id: 1,
    name: "Taylor Swift World Tour",
    imageSrc: "https://picsum.photos/id/237/500/500"
  },
  {
    id: 2,
    name: "Berlin Rave Party",
    imageSrc: "https://picsum.photos/id/237/500/500"
  },
  {
    id: 3,
    name: "Pepa Pig - the awakening",
    imageSrc: "https://picsum.photos/id/237/500/500"
  },
  {
    id: 4,
    name: "TechCrunch Berlin",
    imageSrc: "https://picsum.photos/id/237/500/500"
  },
  {
    id: 5,
    name: "Some nice concert",
    imageSrc: "https://picsum.photos/id/237/500/500"
  },
  {
    id: 6,
    name: "Another nice concert",
    imageSrc: "https://picsum.photos/id/237/500/500"
  }
];
export const tickets: Ticket[] = [
  { id: 1, ownerId: 1, event: events[0], price: 20 },
  { id: 2, ownerId: 1, event: events[1], price: 30 },
  { id: 3, ownerId: 1, event: events[2], price: 30 }
];
export const users = [
  {
    name: "John Cena",
    avatar:
      "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
    userid: "2",
    email: "antdesign@alipay.com",
    signature: "海纳百川，有容乃大",
    title: "交互专家",
    group: "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
    notifyCount: 12,
    unreadCount: 11,
    country: "China",
    geographic: {
      province: {
        label: "浙江省",
        key: "330000"
      },
      city: {
        label: "杭州市",
        key: "330100"
      }
    },
    address: "西湖区工专路 77 号",
    phone: "0752-268888888"
  },
  {
    name: "Tomas Eglinskas",
    avatar:
      "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
    userid: "1",
    email: "antdesign@alipay.com",
    signature: "海纳百川，有容乃大",
    title: "交互专家",
    group: "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
    notifyCount: 12,
    unreadCount: 11,
    country: "China",
    geographic: {
      province: {
        label: "浙江省",
        key: "330000"
      },
      city: {
        label: "杭州市",
        key: "330100"
      }
    },
    address: "西湖区工专路 77 号",
    phone: "0752-268888888"
  }
];
