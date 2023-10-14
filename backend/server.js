import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/connect_DB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js'
import {v2 as cloudinary} from "cloudinary"


dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()
connectDB()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
app.use(cors({
  origin: "https://iiitu-sm-connect.vercel.app/",  // Allow requests from this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(express.json({limit :'50mb'})); // To parse Json data in req.body
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.listen(PORT, ()=> console.log(`Server is started at https://localhost:${PORT}`))
