import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    props.fields.forEach( ({ label }) => this.state[label] = '');
    this.fields       = this._mapPropsToFields(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let submitVersion = {}
    Object.keys(this.state).forEach( capitalizedField => {
      let field = capitalizedField.toLowerCase();
      submitVersion[field] = this.state[capitalizedField]
    });
    this.props.action(submitVersion);
  }

  _mapPropsToFields(props) {
    return props.fields.map( ({ label, type }) =>
      this._renderField(label,type) 
    );
  }

  _update(label) {
    return e => this.setState({ [label]: e.currentTarget.value });
  }

  _renderField(label, type='text') {
    return (
      <input key={label}
             type={type}
             placeholder={label}
             value={this.state.label}
             onChange={this._update(label)} />
    )
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.fields}
        <button type='submit'>{this.props.formType}</button> 
      </form>
    )
  }
}

export default AuthForm

