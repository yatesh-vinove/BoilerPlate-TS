import express from "express";
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import { i18next, middleware } from "./utils/translation";
import { errors } from "celebrate";
import cors from "cors";
import morgan from "morgan";
import { routes } from "./routes";
import { swaggerUi, swaggerSpec } from "./utils/swagger";
import { config } from './utils/constants';

dotenv.config();
const port =  process.env.PORT || config.PORT;

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  app: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }
  // Configure Express middleware.
  middleware(): void {
    this.app.use(cors());
    this.app.use(middleware.handle(i18next));
    this.app.use(morgan("tiny"));
    this.app.use("/", routes);
    
    // Swagger
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // support application/json type post data
    this.app.use(express.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(errors());
  }

  // Configure API endpoints.
  routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    // let router = express.Router();
    // console.log("Inside Routes ");

    this.app.get("/", (req:any, res:any) => {
      console.log("request ", req);
      res.json({
        message: "Hello World!",
      });
    });
  }
  
}
export default new App().app;

