import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div  className="modalbox"   onClick={(e) => e.stopPropagation()} >  {children}  </div>   </div>  );};
const Header = ({ children }) => {
  return <div className="modal-header">{children}</div>;};
const Body = ({ children }) => {
  return <div className="modal-body">{children}</div>;};
const Footer = ({ children }) => {
  return <div className="modal-footer">{children}</div>;};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;

