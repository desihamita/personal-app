import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";


function NoteDetail ({id, title, body, createdAt, onDelete}) {
    return (
        <div className="detail-page">
            <h2 className="detail-page__title">{title}</h2>
            <p className="detail-page__createdAt">Created At: {showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{body}</p>
            <div className="detail-page__action">
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NoteDetail;