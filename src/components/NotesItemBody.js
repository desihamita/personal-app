import React from 'react';
import { showFormattedDate } from '../utils';
import PropTypes from "prop-types";
 
function NotesItemBody({ body, createdAt }) {
 return (
   <div className="note-item__content">
     <p className="note-item__date">{showFormattedDate(createdAt)}</p>
     <p className="note-item__body">{body}</p>
   </div>
 );
}

NotesItemBody.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}
 
export default NotesItemBody;