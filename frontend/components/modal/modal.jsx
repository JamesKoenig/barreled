import React from 'react';
import { Route } from 'react-router-dom'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onClick() {
    this.props.closeModal();
  }

  handleKeyPress(event) {
    if(event.key === "Escape")
      this.props.closeModal();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    this.props.closeModal();
  }

  render() {
    const { Component,misc } = this.props;

    if(!Component)
      return null;

    return (
      <div id="modal-background"
           onClick={this.onClick} >
        <div className="modal"
             onClick={event => event.stopPropagation()}>
          <Component misc={misc} />
        </div>
      </div>
    );
  }
}

export default Modal;
