export interface Ticket {
  id: number;
  event: Event;
  owner: number; //User ID
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
