import dummy from "./dummy.js";

export default function (app) {
  app.use("/api/dummy", dummy);
}
