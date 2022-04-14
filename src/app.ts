import express from "express";
import bodyParser from "body-parser";
import { router } from "bull-board";
const app = express();

app.use(bodyParser.json());

app.use("/admin/queues", router);

app.post("/send-email", async (req, res) => {
  res.send({ status: "ok" });
});

app.listen(5000, () => console.log("App running on port 5000"));
