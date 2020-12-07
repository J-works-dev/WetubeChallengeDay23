export const home = (req, res) => {
  res.render("home", { pageTitle: "TXT2HTML!" });
};

export const postFile = (req, res) => {
  res.redirect("/read");
};

export const read = (req, res) => {
  res.render("read", { pageTitle: "Convert" });
};
