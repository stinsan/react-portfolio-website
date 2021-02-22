import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");

export default function Thumbnail(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return(
    <>
    <div onClick={ toggleModal } className={ props.className }>
      <img className="thumbnail-img" alt="alt" src={ props.gif }></img>
      <p> {props.name} </p>
    </div>
    <Modal
      isOpen = { isOpen }
      onRequestClose = { toggleModal }
      contentLabel = "My dialog"
      className = "modal"
      overlayClassName = "overlay"
      closeTimeoutMS = { 400 }
    >
      <div className="modal-header">
        <div className="modal-title">{props.name}</div>
        <i className="fas fa-times" onClick={ toggleModal }></i>
      </div>
      <div className="modal-body">
        <div className="modal-icons">
          { props.icons.map((value, index) => (<i key={index} className={value}></i>)) }
        </div>
        <div className="modal-description">{props.description}</div>
        <div className="modal-buttons">
          { props.links.map((link, index) =>
            (<a key={index} href={link.href} target="_blank">
              <button>{ link.name }</button>
            </a>))}
        </div>
      </div>
    </Modal>
    </>
  )
}
