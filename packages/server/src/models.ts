export interface Ticket {
  id: number;
  event: Event;
  ownerId: number;
  price: number;
}

export interface Event {
  id: number;
  name: string;
  imageSrc: string;
}

export interface User {
  id: number;
  name: string;
}
