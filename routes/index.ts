import express from 'express';
import { LoginRoute, SignUpRoute} from './user';


export const routes = express.Router();

routes.use(LoginRoute);
routes.use(SignUpRoute);