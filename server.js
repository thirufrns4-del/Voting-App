const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample candidates
let votes = {
  "TVK": 5286,
  "DMK": 185,
  "NTK": 130,
  "AIADMK": 100,
  "BJP": 42
};

// Get results
app.get("/results", (req, res) => {
  res.json(votes);
});

// Vote API
app.post("/vote", (req, res) => {
  const { party } = req.body;

  if (votes[party] !== undefined) {
    votes[party]++;
    res.json({ message: "Vote counted!" });
  } else {
    res.status(400).json({ message: "Invalid party" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));