import React from "react";
import "./Restaurante.css";

class Restaurante extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
        //this.handlerLike = this.handlerLike.bind(this);
    }

    /*handlerLike(){
        this.setState({likes: this.state.likes+1});

    }*/
    handlerLike = () =>{
        this.setState({likes: this.state.likes+1});
    }

    render (){
        const{nombre, direccion, tipo, imagen } = this.props;
        return(
        <div>
            <h1>{nombre}</h1>
            <h3>{direccion}</h3>
            <h4>{tipo}</h4>
            <img src={imagen}/>
            <h4>{this.state.likes}</h4>
            <button onClick={this.handlerLike}>Like</button>
        </div>);
    }
}
//no olvidarse es para exportar y este disponible desde otros archivos
export default Restaurante;