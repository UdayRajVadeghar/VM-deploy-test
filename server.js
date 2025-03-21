const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Fucking fixed it , because github is connected to non interactive shell , we can access the global installs directly , instead we need to load the complete path in the deploy.sh file . lmao this was frustating. But finally done mfs"
  );
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
