import { i18next, middleware } from "./utils/translation";
import { errors } from "celebrate";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { config } from "./utils/constants";
import { logger } from "./utils/logger";
import { jwtOps } from "./utils/jwt";
import { routes } from "./routes";
import { swaggerUi, swaggerSpec } from "./utils/swagger";

const app = express();

// Read Environment Variables from .env file
dotenv.config();

const port = process.env.PORT || config.PORT;

// Translation of Messages to Native Language
app.use(middleware.handle(i18next));

//  Resource Sharing to Domains
app.use(cors());

// Serve Static File
app.use(express.static("./public"));

// For Query Param or Body Parameters
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Http Request Logger
app.use(morgan("tiny"));

app.use('/', routes);

// Swagger
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// Server Listening
app.listen(port, function () {
  logger.info(`Web Server Listening on ${port} port`);
});

// celebrate error handler
app.use(errors());