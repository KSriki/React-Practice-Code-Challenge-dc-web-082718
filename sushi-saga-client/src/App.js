import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    constructor(){
        super()
        //get the specific sushis by keeping a counter then slice(counter,4)
        this.state = {
            sushis: [],
            platter: 0,
            wallet: 100,
            eatenSushis: []
        }
    }

componentDidMount(){

    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis
    }))

}

nextFour = (event) => {
    if(this.state.platter >= this.state.sushis.length){
        this.setState({platter: 0})
    }
    else{
        this.setState({platter: this.state.platter += 4});
    }
}

eatSushi = (sushi) => {
    console.log("eat sushi");
    //want to not destructively change state with .push directly
    //dont use .push etc. inside of here its still destructive

    if(!this.state.eatenSushis.includes(sushi.id)){
        if(sushi.price > this.state.wallet){
            alert("You cant afford to eat that!");
        }
        else{
            this.setState({eatenSushis: [...this.state.eatenSushis,sushi.id], wallet: this.state.wallet - sushi.price})
        }

    }
    //add empty plate to table
    //remove image
    //add id of sushi to eatenSushis

}

  render() {
    return (
      <div className="app">
        <SushiContainer platter={this.state.sushis.slice(this.state.platter,this.state.platter + 4)} eaten={this.state.eatenSushis} eatSushi={this.eatSushi} nextFour={this.nextFour} />
        <Table wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
