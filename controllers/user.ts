import { logger } from "../utils/logger";
import { utils } from "../utils/utils";
import { config } from "../utils/constants";
import bcrypt from "bcrypt";

export class User {
  constructor() {
    this.doLogin = this.doLogin.bind(this);
    this.doSignUp = this.doSignUp.bind(this);
  }

  async doLogin(req: any, res: any) {
    logger.debug("controller > doLogin");
    try {
      // const { username, password } = req.body;

      // Database Call
      // const user = await User.findOne({
      //   username,
      // });

      // if (!user) {
      //   return utils.res.notfound(res, req.t("invalid_email_password"));
      // }

      // const match = await bcrypt.compare(password, user.password);

      // if (match) {
      //    return utils.res.success(res, req.t("user_login_success"), user);
      // }
      return utils.res.notfound(res, req.t("invalid_email_password"));
    } catch (e) {
      logger.error(e);
      return utils.res.fail(res, req.t("something_went_wrong"));
    }
  }

  async doSignUp(req: any, res: any) {
    logger.debug("controller > doSignUp");
    try {
      // let { fname, lname, email, password } = req.body;

      // Database Call
      // const user = await User.findOne({
      //   username,
      // });

      // if (user) {
        return utils.res.taken(res, req.t("data_already_exist"));
      // }
      // const { SALT_ROUNDS } = config;
      // const salt = bcrypt.genSaltSync(SALT_ROUNDS);
      // const hash = bcrypt.hashSync(password, salt);
      // password = hash;
      // Database Call for Inserting Record
      // const newUser = await User.insertOne({fname, lname, email, password});
      // return utils.res.success(res, req.t("user_register_success"), newUser);
    } catch (e) {
      logger.error(e);
      return utils.res.fail(res, req.t("something_went_wrong"));
    }
  }
}
