/**
 * @swagger
 * /login:
 *   post:
 *     summary: User Login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: It can be emailId or userId
 *                 example: yatesh
 *               password:
 *                 type: string
 *                 description: It is the password of user  affilated to that account
 *                 example: 123456@qwerty.
 *     responses:
 *       200:
 *         description: user is able to login
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                      type: string
 *                      description: Api Message
 *                      example: Success
 *                   code:
 *                      type: number
 *                      description: OK
 *                      example: 200
 *                   success:
 *                      type: boolean
 *                      description: whether api works or not
 *                      example: true
 *                   data:
 *                      type: object
 *                      properties:
 *                        fname:
 *                          type: string
 *                          description: first name
 *                          example: John
 *       404:
 *         description: user is not authorized to login
 *         content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                      type: string
 *                      description: Api Message
 *                      example: Invalid Email or Password
 *                   code:
 *                      type: number
 *                      description: Not Found
 *                      example: 404
 *                   success:
 *                      type: boolean
 *                      description: whether api works or not
 *                      example: false
 * 
 *
 */

import { Router } from "express";
import { logger } from "../utils/logger";
import { config } from "../utils/constants";
import { celebrate, Joi, Segments } from "celebrate";
import { User } from "../controllers/user";

const user = new User();
const { LOGIN, SIGNUP } = config.ROUTES;

const router = Router();
const LoginRoute = router.post(
  LOGIN,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  async (req: any, res: any) => {
    logger.debug("route > login");
    user.doLogin(req, res);
  }
);

const SignUpRoute = router.post(
  SIGNUP,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(8),
    }),
  }),
  async (req: any, res: any) => {
    logger.debug("route > register");
    user.doSignUp(req, res);
  }
);

export { LoginRoute, SignUpRoute };
