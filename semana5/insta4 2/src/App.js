import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import logo from './'
import styled from "styled-components"


const InputForm = styled.input`
    background-color: #F1F1F3;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    border: none;
    width: 300px;
    height: 35px;
    margin-top: 30px;
    outline: none;`

    const ButtonForm = styled.button`
    background-color: #A020F0;
    margin: 20px 0;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    transition: all 400ms ease;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);`
class App extends React.Component {

  state = {
    posts: [{
          nomeUsuario: 'Douglas',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/50/50'
    },
    {
          nomeUsuario: 'fernando',
          fotoUsuario:'https://picsum.photos/200/300',
          fotoPost: 'https://picsum.photos/id/1/200/150'
    },
    {
          nomeUsuario: 'maria',
          fotoUsuario:'https://picsum.photos/id/2/200/1500',
          fotoPost: 'https://picsum.photos/id/2/200/150'
    }
  ],
    valorInputUser: "",
    valorInputUserPhoto: "",
    valorInputPostPhoto: ""
  }

  adicionaPost = () => {


    const novoPost = {
      nomeUsuario: this.state.valorInputUser,
      fotoUsuario: this.state.valorInputUserPhoto,
      fotoPost: this.state.valorInputPostPhoto
    }

    const novoArrayPost = [novoPost,...this.state.posts]

    this.setState({
      posts: novoArrayPost,
      valorInputUser: "",
      valorInputUserPhoto: "",
      valorInputPostPhoto: ""

    })
  }


  onChangeInputUser = (event) => {
    this.setState({valorInputUser: event.target.value})
  }

  onChangeInputUserPhoto = (event) => {
    this.setState({valorInputUserPhoto: event.target.value})
  }

  onChangeInputPostPhoto = (event) => {
    this.setState({valorInputPostPhoto: event.target.value})
    console.log(event.target.value)
  }

  

  render() {

    const listaPost = this.state.posts.map((post) => {
      
      return(

      <div>
        <Post 
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      </div>
      )

    })
    return (
      <div className={'app-container'}>
        <InputForm
        value={this.state.valorInputUser}
        onChange={this.onChangeInputUser}
        placeholder={"Insira o nome de usuário"}
        />
        <InputForm
        value={this.state.valorInputUserPhoto}
        onChange={this.onChangeInputUserPhoto}
        placeholder={"Insira o link da sua foto de usuário"}
        />
        <InputForm
        value={this.state.valorInputPostPhoto}
        onChange={this.onChangeInputPostPhoto}
        placeholder={"Insira o link da foto do seu post"}
        />
        <ButtonForm onClick={this.adicionaPost}>Adicionar Post</ButtonForm>
        <div>{listaPost}</div>

      </div>
    );
  }
}

export default App;
