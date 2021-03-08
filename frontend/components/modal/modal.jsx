import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="modal-background">
        <div className="modal">
          <p>hello modal!</p>
        </div>
      </div>
    );
  }
}

export default Modal;
