import express from "express";
import { 
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    getNoteById 
    } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);  // <- corrected name
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
