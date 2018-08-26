import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    // onRequestClose to exit modal with click/esc key
    // Could use implicit return
    return (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.clearSelectedOption}>OK!</button>
        </Modal>
    );  
};

export default OptionModal;