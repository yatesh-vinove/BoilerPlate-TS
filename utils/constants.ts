interface IConfig{
  PORT:number;
  SALT_ROUNDS: number;
  ROUTES: {
    USER: string;
    LOGIN: string;
    SIGNUP: string;
  },
}

export const config:IConfig = {
  PORT:3000,
  SALT_ROUNDS: 10,
  ROUTES: {
    USER: "/user",
    LOGIN: "/login",
    SIGNUP: "/signup",
  },
};