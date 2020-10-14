import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fbfh2-1.fna.fbcdn.net/v/t1.0-9/89867969_3347519295263810_3208763023095234560_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeF1DeJXSfOlz1bkaNye1iNsK_2dASrdbdUr_Z0BKt1t1ec_HjIWQOgpbc3FvqQohdWtleNX_hFA_Tt9s3UM9kXe&_nc_ohc=V0nkPgOuj3YAX8LgH28&_nc_ht=scontent.fbfh2-1.fna&oh=1791b88d013c79c80030a01b9c01d398&oe=5FAC6D14" 
          nome="Douglas Willian" 
          descricao=" Oi, meu nome é Douglas sou aluno de engenharia eletrica na Universidade tecnologica federal do parana,
          trabalhava com analista de redes/infra, atualmente estou mudando de area e migrando para desenvolvedor web full stack,
          sou aluno da LABENU "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
    
      <div className="page-section-container">
        <CardPequeno 
        imagem="https://png.pngtree.com/png-clipart/20190516/original/pngtree-email--envelope-icon-png-image_3566081.jpg"
        titulo="Email:"
        conteudo="Doug.willlian@gmail.com"

        />
          <CardPequeno 
        imagem="https://w7.pngwing.com/pngs/30/177/png-transparent-ip-address-computer-icons-encapsulated-postscript-address-miscellaneous-logo-video-player.png"
        titulo="Endereco:"
        conteudo="rua santa maria 624 ap 7"

        />

       
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://recursos.bps.com.es/files/674/77_300x199.jpg" 
          nome="Alhambra-Eidos" 
          descricao="Analista de redes/ infra Senior" 
        />
        
        <CardGrande 
          imagem="data:image/jpeg;base64,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" 
          nome="Bradesco" 
          descricao="Analista de redes Pleno" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
