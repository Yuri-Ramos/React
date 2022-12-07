import { Component } from "react";

class User extends Component {
    render() {



        return (
            <div className="App">
    
          
          <p>
           Nome: {this.props.nome}
          </p>
        <div>

            Foto: <img src={this.props.photo} alt=".."/>
        </div>
        
      </div>
    );
}
  }
  
  export default User;