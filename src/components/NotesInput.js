import React from "react";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";

class NotesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        const charCount = event.target.value.length;
        const maxChar = this.state.maxChar;
        const charLength = maxChar - charCount;
        this.setState(() => {
            return {
                title: event.target.value,
                charsLeft: charLength
            }
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler} className="add-new-page__input">
                <input type="text" placeholder="Ini adalah judul" value={this.state.title} onChange={this.onTitleChangeHandler} className="add-new-page__input__title" />
                
                <textarea className="add-new-page__input__body" type="text" placeholder="Tulisakan catatanmu disini"  value={this.state.body} onChange={this.onBodyChangeHandler} />

                <div className="add-new-page__action">
                    <button type="submit" className="action" title="simpan"><FiCheck/></button>
                </div>
            </form>
        )
    }
}   

NotesInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NotesInput;