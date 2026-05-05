îimport React from "react";
const Card = ({children}) => {
  return (
    <div className="card">{children}</div>)}
const Header = ({children}) => {
  return(<div className="card-header">{children}</div>)}
const Body = ({children}) => {
  return(<div className="card-body">{children}</div>)}
const Footer = ({children}) => {
  return(<div className="card-footer">{children}</div>)}
  
  Card.Header= Header;
  Card.Body =Body;
  Card.Footer= Footer;

export default Card;
