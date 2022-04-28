import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const app = express();

express.json();
express.urlencoded();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// ROUTES
app.get("/api/health", (req, res) => {
  try {
    return res.json({ status: true, message: "api is running fine!!" });
  } catch (error) {
    return res.json(error);
  }
});

routes(app);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`sever is listening on ${PORT}`));
