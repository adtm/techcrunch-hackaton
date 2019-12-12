import { tickets } from "../data";
class TicketService {
  constructor() {}

  getUserTicketsById(userId: number) {
    return tickets.filter(ticket => ticket.ownerId == userId);
  }

  getTicketById(ticketId: number) {
    return tickets.find(ticket => ticket.id == ticketId);
  }

  updateTicketOwner(ticketId: number, newOwnerId: number) {
    let ticket = tickets.find(ticket => ticket.id == ticketId);
    console.log("WOU")
    console.log(ticketId, newOwnerId)
    ticket.ownerId = newOwnerId;
    return ticket;
  }
}

export default TicketService;
