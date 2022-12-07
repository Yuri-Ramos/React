import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    nome:"Yurii",
    email:"Yurii@gmail.com",

  }
  this.changeState =this.changeState.bind(this);
  this.reseteState =this.reseteState.bind(this);
  this.changeInput =this.changeInput.bind(this);


  }

  changeState() {
    this.setState({
      nome: "Yuri Ramos"
    })
  }
   reseteState(){
  this.setState({
  nome: "Yurii"
  })
}
changeInput(event){
  let target = event.target;
  let index = target.name
  this.setState({
    [index]: target.value
  });
}
  render() {
  return (
    <div className="App">
      <div>
        <form>
            <label>
              Nome: <input type="text"
                             name='nome' 
                             value={this.state.name}> 
                             
                             </input>
            </label>
            <label>
              Nome: <input type="text"
                             name='nome' 
                             value={this.state.name}> </input>
            </label>

        </form>

     {this.state.nome} - {this.state.email}

      </div>

      <div>
        <button onClick={this.changeState}> Mudar estato</button>
        <button onClick={this.reseteState}> Resetar estato</button>

      </div>
    </div>
  );
}
}

export default App;
