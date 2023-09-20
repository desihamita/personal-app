import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { deleteNote, getNote, archiveNote } from "../utils/local-data";
import PropTypes from "prop-types";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteHandler(id) {
        deleteNote(id);
        navigate("/");
    }

    function onArchiveHandler(id) {
        archiveNote(id);
        navigate('/');
    }
    
    return <DetailPage id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNote(props.id),
        }
    }
    
    
    render() {
        return (
            <section>
                <NoteDetail 
                    {...this.state.notes} 
                    onDelete={deleteNote}
                    onArchive={archiveNote}
                />
            </section>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper;