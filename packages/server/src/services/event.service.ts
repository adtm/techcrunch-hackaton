import { Event } from "../models";

class EventService {
  constructor() {}

  getAllEvents() {
    const events: Event[] = [
      {
        id: 1,
        name: "Taylor Swift World Tour",
        imageSrc: "https://picsum.photos/id/237/200/300"
      },
      {
        id: 2,
        name: "Berlin Rave Party",
        imageSrc: "https://picsum.photos/id/237/200/300"
      },
      {
        id: 3,
        name: "Pepa Pig - the awakening",
        imageSrc: "https://picsum.photos/id/237/200/300"
      },
      {
        id: 4,
        name: "TechCrunch Berlin",
        imageSrc: "https://picsum.photos/id/237/200/300"
      },
      {
        id: 5,
        name: "Some nice concert",
        imageSrc: "https://picsum.photos/id/237/200/300"
      },
      {
        id: 6,
        name: "Another nice concert",
        imageSrc: "https://picsum.photos/id/237/200/300"
      }
    ];

    return events;
  }
}

export default EventService;
