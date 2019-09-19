import React, {Component} from 'react';

class IceAndFire extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      characterNumber: '584',
      data: {},
    };
    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  submitForm = async () => {
    const {name, gender} = await window.getGotCharacter(
      this.state.characterNumber,
    );
    this.setState({data: {name, gender}});
    this.props.handleSubmit(this.state.data);
  };

  render() {
    const {characterNumber} = this.state;

    return (
      <section>
        <h1>API of Ice and Fire</h1>
        <form>
          <label>Character Number</label>
          <input
            type="number"
            name="characterNumber"
            value={characterNumber}
            onChange={this.handleChange}
          />
          <input
            className="submitBtn"
            type="button"
            value="Submit"
            onClick={this.submitForm}
          />
          <br />
        </form>
      </section>
    );
  }
}

export default IceAndFire;
