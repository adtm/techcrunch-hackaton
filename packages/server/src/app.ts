import * as dotenv from "dotenv";
import Koa from "koa";
import koaBody from "koa-body";
import cors from "koa-cors";
import Router from "koa-router";
import EventService from "./services/event.service";
import TicketService from "./services/ticket.service";
import UserService from "./services/user.service";

dotenv.config();

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 1001;

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

//User

router.get("/user", async ctx => {
  //Username
  ctx.body = new UserService().getUser(ctx.query.userId);
});

//Events

router.get("/event", async ctx => {
  ctx.body = new EventService().getAllEvents();
});

//Tickets

router.get("/user/tickets", async ctx => {
  const userId = ctx.query.userId;
  ctx.body = new TicketService().getUserTicketsById(userId);
});

//Get a single ticket
router.get("/ticket", async ctx => {
  ctx.body = new TicketService().getTicketById(ctx.query.ticketId);
});

//Update ticket info - owner in this case
router.put("/ticket", async ctx => {
  const newOwnerId = ctx.request.body.newOwnerId;
  const ticketId = ctx.request.body.ticketId;
  ctx.body = new TicketService().updateTicketOwner(ticketId, newOwnerId);
});

//Create a new ticket
router.post("/ticket", async ctx => {
  const newOwner = ctx.request.body.newOwner;
  //Create a new ticket (or take from existing pool)

  ctx.body = {};
});

router.post('/login', async ctx => {
  const password = ctx.request.body.password
  const userName = ctx.request.body.userName
  if (password === 'secret' && userName === 'john') {
    ctx.body = {
      status: 'ok',
      userId: "2"
    };
  }

  else if (password === 'secret' && userName === 'tom') {
    ctx.body = {
      status: 'ok',
      currentAuthority: 'user',
      userId: "1"
    } 
  }

  else {
    ctx.body = {
      status: 'error',
      currentAuthority: 'guest',
      userId: "1"
    } 
  }
})

app.use(koaBody());
app.use(cors({ origin: "*" }));
app.use(router.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
