import React, {Component} from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     monsters: [
      {
        name:'Ankush Dutta',
        email:'duttaankushkumar.infoviz@gmail.com',
        id:"name1"
      },
       {
        name:'Aparna Raypitam',
        email:'aparnaraypitam.infoviz@gmail.com',
        id: "name2"
      },
      {
        name:'Arupamayee Swain',
        email:'arupaswain.infoviz@gmail.com',
        id:"name3"
      },
      {
        name:'Debashis Mahanty',
        email:'debashismahanty.infoviz@gmail.com',
        id:"name4"
      },
      {
        name:'Lipina Samantaray',
        email:'lipinasamantaray.infoviz@gmail.com',
        id:"name5"
      },
      {
        name:'Nabin Sahoo',
        email:'nabinsahoo.infoviz@gmail.com',
        id:"name6"
      },
      {
        name:'Smitarani Sahoo',
        email:'smitasahoo.infoviz@gmail.com',
        id:"name7"
      },
      {
        name:'Snigdharani Dash',
        email:'snigdhadash78.infoviz@gmail.com',
        id:"name8"
      },
      {
        name:'Subhrajit Pattnayak',
        email:'subhrajitpattnayak.infoviz@gmail.com',
        id:"name9"
      },
     ],
     searchField:''
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(responce => responce.json())
  //   .then(users => this.setState({ monsters: users }));

  // }
  render () {
    // search and filter monsters
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters of InfoViz</h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({ searchField: e.target.value})}
          />
        <CardList monsters={filteredMonsters} />
     </div>
  );
}
}

export default App;
