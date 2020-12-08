import fs from "fs";

export const home = (req, res) => {
  res.render("home", { pageTitle: "TXT2HTML!" });
};

export const postFile = (req, res) => {
  // const { file } = req;
  fs.readFile(req.file, "utf8", function (err, data) {
    if (err) {
      console.log("error: ", err);
    }
    console.log(data);
    res.render("/read", { pageTitle: "Convert", data });
  });
};

export const read = (req, res) => {
  res.render("read", { pageTitle: "Convert" });
};
