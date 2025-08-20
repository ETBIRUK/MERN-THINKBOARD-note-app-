import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


dotenv.config();

const port = process.env.PORT || 5001;

const app = express();



connectDB();

 
//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log('Req method is ${req.method} & req url is ${req.url}');
    next();
});

app.use("/api/notes", notesRoutes);


app.listen(port, () => {
    console.log("server is running on PORT:", port);
}); 


