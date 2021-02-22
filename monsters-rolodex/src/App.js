import React from 'react';
import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({users: data}))
        .catch((error) => {
          console.error('Error:', error)})
  };

  render(){
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className='App'>
      <h1> My Friends </h1>
        <SearchBox 
          placeholder='Search'
          handleChange={event => this.setState({ searchField: event.target.value})}
        />
        <CardList users={filteredUsers}/>
      </div>
    )};
}

export default App;
