export interface Ticket {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  owner: number; //User ID
}

export interface Event {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
}

export interface User {
  id: number;
  name: string;
}
