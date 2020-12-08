import fs from "fs";



export const home = (req, res) => {
  res.render("home", { pageTitle: "TXT2HTML!" });
};

export const postFile = (req, res) => {
  const = {
    body: { file }
  } = req;
  try {
    const data = fs.readFileSync("file", "utf8");
  } catch(e) {
    console.log(e);
  }
  
  console.log(data.toString());
  res.render("/read", { pageTitle: "Convert", data });
};

export const read = (req, res) => {
  res.render("read", { pageTitle: "Convert" });
};
