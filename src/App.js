import body from './assets/img/body.png';
import part1 from './assets/img/image_part_001.png';
import part2 from './assets/img/image_part_002.png';
import part3 from './assets/img/image_part_003.png';
import part4 from './assets/img/image_part_004.png';
import part5 from './assets/img/image_part_005.png';
import part6 from './assets/img/image_part_006.png';
import part7 from './assets/img/image_part_007.png';
import part8 from './assets/img/image_part_008.png';

import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    show: true,
    partDescription: "lama"
  }

  toggle = (msg) => this.setState((currentState) => ({show: !currentState.show, partDescription: msg}));

  showExercise(e) {
    console.log(e.target.className)
  }

  render (){
    return (
    <div className="App">

      {this.state.show && <div>{ this.state.partDescription }</div>}

      <img className="part1" src={part1} onMouseOver={this.toggle("sara")} onClick={this.showExercise} alt="body" />
      <img className="part2" src={part2} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />
      <img className="part3" src={part3} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />
      <img className="part4" src={part4} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />      
      <br/>
      <img className="part5" src={part5} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />
      <img className="part6" src={part6} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />
      <img className="part7" src={part7} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />
      <img className="part8" src={part8} onMouseOver={this.toggle} onClick={this.showExercise} alt="body" />
    </div>
    );
  }
}

export default App;
