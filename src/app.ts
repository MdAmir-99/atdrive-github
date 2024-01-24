import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middleware/error";
import thirdPartyRoutes from "./routes/thirdParty.route";
import userRoutes from "./routes/user.route";
import { setHeaders } from "./middleware/setHeaders";
import notFound from "./controller/notFound";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

app.use(setHeaders);

app.use("/api", thirdPartyRoutes);
app.use("/api", userRoutes);
app.use("*", notFound);

app.use(errorMiddleware);

export default app;
