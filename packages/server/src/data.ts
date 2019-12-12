import { Ticket } from "./models";

export const events = [
  {
    id: 1,
    rating: 5,
    name: "WWE - World Wrestling Entertainment",
    imageSrc:
      "https://s1.ticketm.net/dam/a/3b3/e00e8717-4f6f-49bc-98dc-3687d30863b3_1206851_RETINA_PORTRAIT_16_9.jpg"
  },
  {
    id: 2,
    rating: 2.5,
    name: "Jurassic World Live Tour",
    imageSrc:
      "https://s1.ticketm.net/dam/a/b2d/0302d669-070a-4c5f-8306-edb459373b2d_1006711_RETINA_PORTRAIT_16_9.jpg"
  },
  {
    id: 3,
    rating: 4,
    name: "Trans-Siberian Orchestra",
    imageSrc:
      "https://s1.ticketm.net/dam/a/0cf/6e15e047-e2cb-44bc-9e67-80109b78b0cf_1131491_RETINA_PORTRAIT_16_9.jpg"
  },
  {
    id: 5,
    rating: 3.5,
    name: "Gabriel Iglesias",
    imageSrc:
      "https://s1.ticketm.net/dam/a/706/9ad987c8-c952-4930-bf5f-9aa8eef98706_996041_RETINA_PORTRAIT_16_9.jpg"
  },
  {
    id: 6,
    rating: 5,
    name: "The Doobie Brothers",
    imageSrc:
      "https://s1.ticketm.net/dam/a/ccd/987e19d1-13dd-4b2b-871c-99f512876ccd_487991_RETINA_PORTRAIT_16_9.jpg"
  },
  {
    id: 7,
    rating: 4,
    name: "Cirque du Soleil: AXEL",
    imageSrc:
      "https://s1.ticketm.net/dam/a/b74/387403d3-731d-460a-8105-fa294a8deb74_1181741_RETINA_PORTRAIT_16_9.jpg"
  }
];

export const tickets: Ticket[] = events.map(e => ({
  id: e.id,
  ownerId: 1,
  rating: e.rating,
  event: e,
  price: 20
}))

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
