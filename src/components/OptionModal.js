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
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearSelectedOption}>OK!</button>
        </Modal>
    );  
};

export default OptionModal;