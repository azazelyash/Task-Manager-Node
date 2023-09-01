const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

/* ------------------------------- MiddileWare ------------------------------ */
app.use(express.json());

// app.get("/hello", (req, res) => {
//   res.send("Task Manager");
// });

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
