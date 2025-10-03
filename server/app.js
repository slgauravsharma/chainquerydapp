// server/app.js
const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const productRoutes = require("./routers/productRoutes");
const authRoutes = require("./routers/authRoutes");
const sellerRoutes = require("./routers/sellerRoutes");

require("dotenv").config();

const app = express();
const server = http.createServer(app);


const corsOptions = {
  origin: "http://localhost:5173", // Vite default dev server
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (cookies, HTTP authentication) cross-origin
  optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests
};



// Middleware
app.use(express.json());

//use cors
app.use(cors(corsOptions));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/seller", sellerRoutes);

const PORT = process.env.PORT || 5050;
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New socket connection");

  // Listen for incoming messages and broadcast them to other clients
  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
