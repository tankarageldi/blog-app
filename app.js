import dotenv from "dotenv";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import mainRoutes from "./server/routes/main.js";
import connectDB from "./server/config/db.js";

dotenv.config();

const app = express();
const expressLayout = expressEjsLayouts;
const PORT = 3000 || process.env.PORT;

// connect to database
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
