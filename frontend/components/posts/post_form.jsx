import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state["body"] = props.body || "";
    this.state["id"] = props.id;
    this._input = this._input.bind(this);
    this._file_update = this._file_update.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    [
      "id",
      "body",
      "photo",
    ].map( key =>
      formData.append(`post[${key}]`, this.state[key])
    );

    this.props.action(formData)
      .then( () => {
        if(this.props.errors.length === 0) {
          this.props.closeModal();
        }
      });
  }

  _input(event) {
    this.setState( { body: event.currentTarget.textContent } );
  }

  _file_update(event) {
    this.setState( { photo: event.currentTarget.files[0] } );
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
                 contentEditable
                 suppressContentEditableWarning
                 onInput={this._input}>
              { this.props.body || null }
            </div>
          </div>
          <footer className="post-properties">
            <div>
              { this.props.formType === "Create Post" ?
                (<input type="file"
                   accept="image/*"
                   name="imageAttachment"
                   className="imageAttachment"
                   onChange={this._file_update} /> ) : null }
            </div>
            <div>
              <input type="submit"
                     value={this.props.formType} />
            </div>
          </footer>
        </div>
      </form>
    );
  }
}

export default PostForm;
