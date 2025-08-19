import express from "express";
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);  // <- corrected name
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
