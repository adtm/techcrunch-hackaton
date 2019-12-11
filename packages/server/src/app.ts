import * as dotenv from "dotenv";
import Koa from "koa";
import koaBody from "koa-body";
import Router from "koa-router";
import { Ticket, User } from "./models";
import EventService from "./services/event.service";

dotenv.config();

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

//User

router.get("/user", async ctx => {
  const user: User = {
    id: 1,
    name: "John Cena"
  };
  ctx.body = user;
});

//Events

router.get("/event", async ctx => {
  ctx.body = new EventService().getAllEvents();
});

//Tickets

router.get("/ticket", async ctx => {
  const ticket: Ticket = {
    id: 1,
    owner: 1
  };
  ctx.body = ticket;
});

router.put("/ticket", async ctx => {
  const newOwner = ctx.request.body.newOwner;
  const ticket: Ticket = {
    id: 1,
    owner: newOwner
  };
  ctx.body = ticket;
});

router.post("/ticket", async ctx => {
  const newOwner = ctx.request.body.newOwner;
  //Create a new ticket (or take from existing pool)
  const ticket: Ticket = {
    id: 1,
    owner: newOwner
  };
  ctx.body = ticket;
});

app.use(koaBody());
app.use(router.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
