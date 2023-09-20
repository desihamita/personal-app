import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NotesInput";
import { addNote } from "../utils/local-data";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <div>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

export default AddPage;