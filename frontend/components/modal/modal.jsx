import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.closeModal();
  }

  render() {
    if(!this.props.modal) return null;
    return (
      <div id="modal-background"
           onClick={this.onClick} >
        <div className="modal"
             onClick={event => event.stopPropagation()}>
          <p>hello modal!</p>
        </div>
      </div>
    );
  }
}

export default Modal;
