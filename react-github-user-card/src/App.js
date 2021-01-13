import React from 'react';
import axios from 'axios';
import './App.css';
import Followers from './components/Followers';
import Searchee from './components/Searchee';

class App extends React.Component {
  state = {
    followers: [],
    searchee: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/taratimmerman')
    .then((res1) => {
      this.setState({
        searchee: res1.data
      })
    })
    .catch(err => {
      console.log(err);
    });

    axios.get('https://api.github.com/users/taratimmerman/followers')
      .then((res2) => {
        this.setState({
          followers: res2.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({
      searchee: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>React Github User Card</h1>
        {/* <form>
          <input
            onChange={this.handleChange}
            type='text'
          />
          <button
            onClick={this.handleClick}
          >Search GitHub User</button>
        </form> */}
        <Searchee searchee={this.state.searchee} />
        <Followers followers={this.state.followers} searchee={this.state.searchee} />
      </div>
    );
  }
}

export default App;
