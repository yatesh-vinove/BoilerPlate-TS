export const utils = {
  res: {
    success: (response: any, message: string, data?: any) => {
      response.json({ message, code: 200, success: true, data });
    },
    fail: (response: any, message: string, data?: any) => {
      response.json({ message, code: 500, success: false, data });
    },
    unauthorized: (response: any, message: string, data?: any) => {
      message = message || "Access Denied";
      response.json({ message, code: 401, success: false, data });
    },
    taken: (response: any, message: string, data?: any) => {
      response.json({ message, code: 422, success: false, data });
    },
    unknown: (response: any, message: string, data?: any) => {
      // Invalid Parameters
      response.json({ message, code: 400, success: false, data });
    },
    notfound: (response: any, message: string, data?: any) => {
      response.json({ message, code: 404, success: false, data });
    },
  },
};
