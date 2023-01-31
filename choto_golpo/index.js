const express = require("express");
const mongoose = require("mongoose");

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost/todos", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Connection successfull"))
  .catch((err) => console.log(err.message));

// application route
app.use("/todo", todoHandler);

app.listen(5000, () => {
  console.log(`Server running on port ${5000}`);
});
