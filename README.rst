Exemplo de Carrossel de Imagens - React JS
==========================================

Este exemplo faz parte de um tutorial de instalação e primeiros passos com a tecnologia React JS. O público alvo
deste tutorial são estudantes com conhecimento básico de JavaScript e com interesse na tecnologia de JavaScript do Facebook.
Ao longo deste tutorial, é apresentado o passo-a-passo para instalação do React, são listados alguns comandos básicos e é detalhado
o processo de implementação do componente de carrossel de imagens.

Instalação
==========

Primeiramente (fora temer), para instalação do React JS, deve-se instalar o `Node.js <http://nodejs.org>`_, ganhando acesso ao gerenciador
de pacotes `npm <https://www.npmjs.com/>`_. A partir deste gerenciador de pacotes, é possível instalar o React JS com facilidade, basta digitar no
terminal:


:code:`$ npm install -g create-react-app`

Feito isto, já é possível criar seus primeiros componentes.

Utilização
=========

Para criar um projeto, basta executar:

:code:`$ create-react-app nomeDoApp`


Este comando instala algumas dependências iniciais e cria o App dentro de uma pasta com o mesmo nome do App. Dentro desta pasta, diversos comandos
se tornam disponíveis, como:

- :code:`npm start`: Usado para iniciar o servidor, executando o aplicativo em modo de desenvolvedor.
- :code:`npm test`: Usado para executar todos os testes do App.
- :code:`npm run ios`: Usado para executar em um emulador de celular IOS (Necessita do XCode Instalado).
- :code:`npm run android`: Usado para executar em um emulador de Android (Necessita do Android Build Tools instalado)

Para implementação do Carrossel de Imagens, utilizou-se a ferramenta React Slick. Para instalá-la, basta digitar:


:code:`$ npm install react-slick`

Implementação
=============

Para implementar o componente de Carrossel de Imagens, basta criar o componente e chamá-lo na página principal. Para isto, crie um arquivo
chamado ```slider.js``` e adicione o seguinte conteúdo:

.. code-block:: js

    import Slider from 'react-slick';
    import React from "react";

    const sliderStyle = {
      "text-align": "center",
      "align-content": "center",
    };

    const imageStyle = {
      "margin-left": "16%",
    }
    export default class SimpleSlider extends React.Component {
      render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        };
        return (
          <div style={sliderStyle}>
            <Slider {...settings}>
              <div>
              <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/></div>
                  <p>Primeira Imagem</p>
              </div>
              <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/> </div>
                <p>Segunda Imagem</p>
              </div>
              <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/> </div>
                <p>Terceira</p>
                <p>Imagem</p>
              </div>
              <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/> </div>
                <p>Terceira</p>
                <p>Imagem</p>
                <p>Bonita</p>
              </div>

              <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/></div>
                <p>Quarta Imagem</p>
              </div>
              <div> <div style={imageStyle}><img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/> </div>
                <p>Quinta</p>
                <p>Imagem</p>
                <p>Bonita</p>
              </div>
            </Slider>
          </div>
        );
      }
    }

Este código cria o componente SimpleSlider e detalha o estilo deste componente. Para definição do estilo, foram usadas duas variáveis de estilo: ```sliderStyle``` e ```imageStyle```, a primeira cuida do estilo do Slider em si, e a segunda cuida do estilo das imagens apresentadas.

Para este tutorial foram utilizadas imagens genéricas, disponíveis em [placehold](http://placehold.it), apenas como exemplo. Entretanto, é possível
utilizar qualquer imagem para isto, basta obtê-las da forma desejada, seja da base de dados ou de um servidor remoto.

Uma configuração importante é o campo ```adaptiveHeight: true```, que define que a altura do slider se adapta de acordo com a necessidade. Buscando validar esta configuração, cada imagem possui um número de linhas na legenda, que aumenta ou não o tamanho do slider.

Após a criação deste componente, basta chamá-lo no arquivo App.js, o qual renderiza a página principal do App. Para isto, basta importar o componente no arquivo App.js, da seguinte forma:


:code:`import SimpleSlider from './slider';`

Com o arquivo já importado, basta chamá-lo onde desejar em forma de tag, da seguinte maneira:


:code:`<SimpleSlider/>`


Pronto, feito isto seu componente já se encontra disponível para utilização. Basta executar o comando :code:`npm start` e acessar a url :code:`localhost:3000`.
