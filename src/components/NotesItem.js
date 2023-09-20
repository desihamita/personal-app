import React from 'react';
import NotesItemBody from './NotesItemBody';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
 
function NotesItem({ id, title, body, createdAt }) {
 return (
    <div className="note-item">
        <h2 className="note-item__title"><Link to={`/notes/${id}`}>{title} </Link></h2>
        <NotesItemBody title={title} body={body} createdAt={createdAt} />
    </div>
 );
}

NotesItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}
 
export default NotesItem;