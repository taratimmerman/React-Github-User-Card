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

  handleClick = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.searchee}`)
      .then((res1) => {
        this.setState({
          searchee: res1.data
        })
      })
      .catch(err => {
        console.log(err);
      });

    axios.get(`https://api.github.com/users/${this.state.searchee}/followers`)
      .then((res2) => {
        this.setState({
          followers: res2.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form className='top-area'>
          <h1>React GitHub User Card</h1>
          <div className='search-area'>
            <input
              onChange={this.handleChange}
              type='text'
              placeholder='Enter a GitHub username'
            />
            <button
              onClick={this.handleClick}
            >Search</button>
          </div>
        </form>
        <Searchee searchee={this.state.searchee} />
        <Followers followers={this.state.followers} searchee={this.state.searchee} />
      </div>
    );
  }
}

export default App;
