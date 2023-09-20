import React from 'react';
import NotesItem from './NotesItem';
import PropTypes from "prop-types";
 
function NotesList({ notes, onActive, onArchive }) {
 return (
    <div className="notes-list">
      {notes.length
        ? notes.map((note) => 
        <NotesItem 
          key={note.id} 
          {...note} 
          id={note.id}
          onActive={onActive}
          onArchive={onArchive}
          isArchive={note.archived}/>)
        : "Tidak ada catatan"}
    </div>
 );
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}
 
export default NotesList;