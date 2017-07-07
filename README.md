# Exemplo de Carrossel de Imagens - React JS

Este exemplo faz parte de um tutorial de instalação e primeiros passos com a tecnologia React JS. O público alvo
deste tutorial são estudantes com conhecimento básico de JavaScript e com interesse na tecnologia de JavaScript do Facebook.
Ao longo deste tutorial, é apresentado o passo-a-passo para instalação do React, são listados alguns comandos básicos e é detalhado
o processo de implementação do componente de carrossel de imagens.

## Instalação

Primeiramente (fora temer), para instalação do React JS, deve-se instalar o [Node.js](https://nodejs.org/en/), ganhando acesso ao gerenciador
de pacotes [npm](https://www.npmjs.com/). A partir deste gerenciador de pacotes, é possível instalar o React JS com facilidade, basta digitar no
terminal:

```{r, engine='bash'}
  $ npm install -g create-react-app
```

Feito isto, já é possível criar seus primeiros componentes.

## Utilização

Para criar um projeto, basta executar:

```{r, engine='bash'}
  $ create-react-app nomeDoApp
```

Este comando instala algumas dependências iniciais e cria o App dentro de uma pasta com o mesmo nome do App. Dentro desta pasta, diversos comandos
se tornam disponíveis, como:

- ```npm start```: Usado para iniciar o servidor, executando o aplicativo em modo de desenvolvedor.
- ```npm test```: Usado para executar todos os testes do App.
- ```npm run ios```: Usado para executar em um emulador de celular IOS (Necessita do XCode Instalado).
- ```npm run android```: Usado para executar em um emulador de Android (Necessita do Android Build Tools instalado)

Para implementação do Carrossel de Imagens, utilizou-se a ferramenta React Slick. Para instalá-la, basta digitar:

```{r, engine='bash'}
$ npm install react-slick
```

## Implementação

Para implementar o componente de Carrossel de Imagens
