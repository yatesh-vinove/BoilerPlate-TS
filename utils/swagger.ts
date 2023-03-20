import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BoilerPlate for Node JS",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Development server",
      },
    ],
  },
  // Path to the API docs
  apis: ["./routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
