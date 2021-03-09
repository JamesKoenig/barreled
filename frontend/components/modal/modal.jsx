import React from 'react';

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
    const { Component } = this.props;

    if(!Component)
      return null;

    return (
      <div id="modal-background"
           onClick={this.onClick} >
        <div className="modal"
             onClick={event => event.stopPropagation()}>
          <Component />
        </div>
      </div>
    );
  }
}

export default Modal;
