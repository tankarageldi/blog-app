import dotenv from "dotenv";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import mainRoutes from "./server/routes/main.js";
import adminRoute from "./server/routes/admin.js";
import connectDB from "./server/config/db.js";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import session from "express-session";
dotenv.config();

const app = express();
const expressLayout = expressEjsLayouts;

const PORT = 3000 || process.env.PORT;

// connect to database
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
app.use(express.static("public"));

// templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use("/", adminRoute);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
