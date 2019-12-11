import * as dotenv from "dotenv";
import Koa from "koa";
import koaBody from "koa-body";
import Router from "koa-router";
import EventService from "./services/event.service";

dotenv.config();

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

router.get("/event", async ctx => {
  ctx.body = new EventService().getAllEvents();
});

app.use(koaBody());
app.use(router.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
