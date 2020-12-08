import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
// import fs from "fs";
// import router from "./router";
import { home, postFile, read } from "./controller";
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", router);

app.get("/", home);
app.post("/", upload.single("txtFile"), postFile);
app.get("/read", read);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
