import path from "path";
import i18next from "i18next";
import backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";

const filePath = path.join(__dirname, "/../locales/{{lng}}/translation.json");

i18next
  .use(backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: filePath,
    },
  });

export { i18next, middleware, backend };
