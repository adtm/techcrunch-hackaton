import * as dotenv from "dotenv";
import Koa from "koa";
import koaBody from "koa-body";
import Router from "koa-router";
import { Ticket } from "./models";
import EventService from "./services/event.service";
import TicketService from "./services/ticket.service";
import UserService from "./services/user.service";

dotenv.config();

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

//User

router.get("/user", async ctx => {
  //Username
  ctx.body = new UserService().getUser(ctx.query.username);
});

//Events

router.get("/event", async ctx => {
  ctx.body = new EventService().getAllEvents();
});

//Tickets

const event = {
  id: 1,
  name: "Taylor Swift World Tour",
  imageSrc: "https://picsum.photos/id/237/200/300"
};

router.get("/user/tickets", async ctx => {
  const userId = ctx.query.userId;
  return new TicketService().getUserTicketsById(userId);
});

router.get("/ticket", async ctx => {
  ctx.body = new TicketService().getTicketById(ctx.query.ticketId);
});

router.put("/ticket", async ctx => {
  const newOwnerId = ctx.request.body.newOwnerId;
  const ticketId = ctx.request.body.ticketId;
  ctx.body = new TicketService().updateTicketOwner(ticketId, newOwnerId);
});

router.post("/ticket", async ctx => {
  const newOwner = ctx.request.body.newOwner;
  //Create a new ticket (or take from existing pool)
  const ticket: Ticket = {
    id: 1,
    ownerId: newOwner,
    event: event,
    price: 20
  };
  ctx.body = ticket;
});

app.use(koaBody());
app.use(router.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
