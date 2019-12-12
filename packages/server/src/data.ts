import { Ticket } from "./models";

export const events = [
  {
    id: 1,
    name: "Taylor Swift World Tour",
    imageSrc: "https://picsum.photos/id/117/200/300"
  },
  {
    id: 2,
    name: "Berlin Rave Party",
    imageSrc: "https://picsum.photos/id/117/200/300"
  },
  {
    id: 3,
    name: "Pepa Pig - the awakening",
    imageSrc: "https://picsum.photos/id/117/200/300"
  },
  {
    id: 4,
    name: "TechCrunch Berlin",
    imageSrc: "https://picsum.photos/id/117/200/300"
  },
  {
    id: 5,
    name: "Some nice concert",
    imageSrc: "https://picsum.photos/id/117/200/300"
  },
  {
    id: 6,
    name: "Another nice concert",
    imageSrc: "https://picsum.photos/id/117/200/300"
  }
];
export const tickets: Ticket[] = [
  { id: 1, ownerId: 1, event: events[0], price: 20 },
  { id: 2, ownerId: 1, event: events[1], price: 30 },
  { id: 3, ownerId: 1, event: events[2], price: 30 }
];
export const users = [
  { id: 1, name: "John Cena", username: "user2" },
  { id: 1, name: "Tomas Eglinskas", username: "user1" }
];
