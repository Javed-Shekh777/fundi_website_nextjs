const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/userRoute");

// All headers that are allowed to request to this  server
const allHeader = [process.env.FRONTEND_URL, "http://127.0.0.0:3000"];

// Configuration of  the server CORS
app.use(
  cors({
    credentials: true,
    origin: allHeader,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Other server configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan(process.env.ENV === "development" && "dev"));

// User Defined Routes
app.use("/api/v1/user", userRoute);

// Root Level API
app.get("/", (req, res) => {
  res.json({
    message: "Fundi API IS RUNNING",
    status: 200,
  });
  res.end();
});

// Global Error handler middleware
app.use(errorMiddleware);

// exporting the current code (file)
module.exports = app;
