import React, {Component} from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons :[
      {
        firstName: "Peter",
        lastName: "Parker",
        age: 25,
        hairColor: "brown"
      },
      {
        firstName: "Dead",
        lastName: "Pool",
        age: 30,
        hairColor: "black"
      },
      {
        firstName: "Doctor",
        lastName: "Doom",
        age: 38,
        hairColor: "brown"
      },
      {
        firstName: "Venom",
        lastName:"....",
        age: "?",
        hairColor: "Unknown"

      }
    ]}
    this.handleAgeClick = this.handleAgeClick.bind(this);
  }

  handleAgeClick(e,idx){
    e.preventDefault();
    console.log(idx);
    this.setState(prevState => {
      return {
        age: prevState.persons[idx]. age ++
      }
    })

  }

  render(){
    return (
      <div className="App">
        {
          this.state.persons.map((p, idx) => { 
            return <PersonCard
                      firstName={p.firstName}
                      lastName={p.lastName}
                      age={p.age}
                      hairColor={p.hairColor}
                      key={idx}
                      idx={idx}
                      handleAgeClick={this.handleAgeClick}
            />

          })
        }
        
      </div>
    );

  }
}

export default App;
