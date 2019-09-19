import React, {Component} from 'react';
import Table from './Table';
// import Form from './Form';
import IceAndFire from './IceAndFireApi';

class App extends Component {
  state = {
    characters: [],
  };
  removeCharacter = index => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((_, i) => i !== index),
    });
  };
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  };
  render() {
    const {characters} = this.state;
    return (
      <div className="container">
        <IceAndFire handleSubmit={this.handleSubmit} />
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;
