import express from "express";
import connectDB from "./lib/db.js";
import { contactSchema } from "./validators/contactSchema.js";
import { contactController } from "./controllers/contactController.js";
import { validateData } from "./middlewares/validateData.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/contact", validateData(contactSchema), contactController);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
