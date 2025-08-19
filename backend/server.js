import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    //delete a note 
    res.send("you got 5 notes");
});


app.listen(5001, () => {
    console.log("server is running on port 5001");
});