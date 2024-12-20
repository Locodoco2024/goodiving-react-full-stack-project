import express from "express";
import cors from "cors";
import products from "./routes/products.js";
import db from "./utils/connect-sql.js";
import authRoutes from "./routes/auth.js";
import memberProfile from "./routes/profile.js";
import jwt from "jsonwebtoken";
import cart from "./routes/cart.js";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { Server } from "socket.io";
import chat from "./routes/chat.js";
import lesson from "./routes/lesson.js";
import ecpayTestOnly from "./routes/ecpay-test-only.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://192.168.37.187:3000"],
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
});

// 取得檔案URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ************* 頂層的 middlewares *************
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // console.log({ origin });
    callback(null, true);
  },
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ************* 自訂的頂層 middleware *************
app.use((req, res, next) => {
  let auth = req.get("Authorization");
  if (auth && auth.indexOf("Bearer " === 0)) {
    let token = auth.slice(7);
    try {
      req.user_jwt = jwt.verify(token, process.env.JWT_KEY);
    } catch (ex) {
      console.log(ex);
    }
  }
  next();
});

// app.use自己import的檔案跟導入的變數名
app.use("/products", products);
app.use("/auth", authRoutes);
app.use("/profile", memberProfile);
app.use("/cart", cart);
app.use("/chat", chat);
app.use("/lesson", lesson);
app.use("/ecpay-test-only", ecpayTestOnly);

// socket.io
const users = {};

io.on("connection", (socket) => {
  console.log("A user connected: " + socket.id);

  // 註冊用戶
  socket.on("register", (user_id) => {
    users[user_id] = socket.id;
    console.log(`User ${user_id} connected with socket ID: ${socket.id}`);

    // 廣播當前在線用戶列表
    io.emit("online_users", Object.keys(users));
  });

  // 發送訊息
  socket.on("send_message", async (data) => {
    const { sender_user_id, receiver_user_id, message, conversation_id } = data;

    // 傳送訊息給接收者
    const receiverSocketId = users[receiver_user_id];
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receive_message", {
        sender_user_id,
        message,
        sent_at: new Date(),
      });
    } else {
      console.log(`User ${receiver_user_id} is not online.`);
    }
  });

  // 當用戶斷線時，移除對應的 user_id
  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
    for (const [user_id, socketId] of Object.entries(users)) {
      if (socketId === socket.id) {
        delete users[user_id];
        console.log(`User ${user_id} has been removed.`);
        break;
      }
    }
    // 廣播最新的在線用戶列表
    io.emit("online_users", Object.keys(users));
  });
});

// 測試路由
app.get("/test", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 as test");
    res.json({
      message: "資料庫連線成功",
      data: rows,
    });
  } catch (error) {
    console.error("資料庫連線錯誤：", error);
    return res.status(500).json({ error: "資料庫連線失敗" });
  }
});

//************放靜態內容資料夾的位置************
app.use(express.static("public"));
app.use("/img", express.static("public/img"));
//*************  404 頁面要在所有的路由後面  *************
app.use((req, res) => {
  //   res.status(404).send("<h1>走錯路了</h1>");
  res.status(404).json({ msg: "走錯路了" });
});

// 監聽server 放在最尾部
const port = process.env.WEB_PORT || 3002;
server.listen(port, () => {
  console.log(`server正在監聽port ${port}`);
});
