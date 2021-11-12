import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state["body"] = props.body || '';
    this._update = this._update.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

   _handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state)
      .then( () => {
        if(this.props.errors.length === 0) {
          this.props.closeModal();
        }
      })
  }

  _update(event) {
    console.log("form updated!");
    this.setState( { body: event.currentTarget.value } );
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="form-input-container post-display">
          <header className="post-header">
              <h3 className="author-name">{this.props.formType}</h3>
              <div></div>
          </header>
          <div className="post-content" id="post-form-content-field">
            <div className="post-text post-form-input-field"
                 contentEditable="true">
            </div>
          </div>
          <footer className="post-properties">
            <div></div>
            <div>
              <p>submit button goes here</p>
            </div>
          </footer>
        </div>
      </form>
    )
  }
}

export default PostForm
