import React, { Component } from 'react';
import './login.scss';
import GenericInput from '../GenericInput/GenericInput';
import services from '../../services';

class Login extends Component{

    constructor(props){
       super(props)
        this.state = {
            username:"",
            password:""
        }
    }


    chekInput = (event)=> {
        let { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
      }

    formSubmit = (e)=>{
        e.preventDefault();
        services.loginUser(this.state).then((resp)=>{
            localStorage.setItem('token',resp.data.token);
            this.props.history.push('/');
        }).catch((err)=>{
            console.log(err.response.data)
        });
        console.log(this.state);
    }


    render(){
        return(
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 col-lg-8">
                    <form action="" onSubmit={this.formSubmit}>
                        <GenericInput type={"text"} name={"username"} value={this.state.username} change={this.chekInput} />

                        <GenericInput type={"password"} name={"password"} value={this.state.password} change={this.chekInput} />

                        <div className="text-center">
                            <button type="submit" className="btn btn-login mx-auto">Empezar</button>
                        </div>    
                    </form>
                </div>
            </div>
        )
    }


}

export default Login