import { Application } from "express";
import usersRouter from "./api/controllers/users/router";
import nftsRouter from "./api/controllers/nfts/router";
import categoriesRouter from "./api/controllers/categories/router";
import followRouter from "./api/controllers/follows/router";

export default function routes(app: Application): void {
  app.use("/api/users", usersRouter);
  app.use("/api/NFTs", nftsRouter);
  app.use("/api/categories", categoriesRouter);
  app.use("/api/follow", followRouter)
}
