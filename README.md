<h1 align="center">
  <img alt="Ecoleta" title="Ecoleta" src="./assets/logo.png" width="400px" />
</h1>

<p align="center">
  <img alt="Developer" src="https://img.shields.io/badge/developer-jfilipedias-blue">
  <img alt="GitHub" src="https://img.shields.io/github/license/jfilipedias/podcastr">
</p>
<br>

O Ecoleta é um projeto criado para ajudar as pessoas a encontrar pontos de coleta para reciclagem.

O projeto foi desenvolvido durante a **Next Level Week #01** ministrada pela [Rocketseat](https://rocketseat.com.br/).
Desse modo, foi desenvolvido um back end em **Node**, uma aplicação web em **ReactJS** e um app em **React Native**.

## Como utilizar

Para utilizar a aplicação é preciso ter o Node instalado na sua maquina.

```sh
  # Instale as dependências
  $ yarn

  # Crie o banco de dados
  $ cd server
  $ yarn knex:migrate
  $ yarn knex:seed

  # Inicie o back end
  $ yarn dev

  # Inicie o front end
  $ cd web
  $ yarn start

  # Inicie a aplicação mobile
  $ cd mobile
  $ yarn start
```


## Telas

O layout da aplicação foi desenvolvido pela **Rocketseat** e está disponível no [Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=0%3A1): 

<table cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="3"><img alt="Front End Home" src="assets/home.png" /></td>
    <td rowspan="2"><img alt="Front End Cadastro" src="assets/register.png" /></td>
  </tr>
  <tr>
    <td><img alt="Mobile Início" src="assets/mobile-start.png" /></td>
    <td><img alt="Mobile Home" src="assets/mobile-home.png" /></td>
    <td><img alt="Mbile Detalhes" src="assets/mobile-details.png" /></td>
  </tr>
</table>

## Tecnologias

Algumas das tecnologias utilizadas são:

- [Node](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [SQLite3](https://sqlite.org/index.html)
- [Knex](http://knexjs.org/)
- [Expo](https://expo.io/)
- [Express](https://github.com/expressjs/express)
- [CORS](https://github.com/expressjs/cors)
- [Axios](https://github.com/axios/axios)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- [React Dropzone](https://react-dropzone.js.org/)
- [Multer](https://github.com/expressjs/multer)
- [celebrate](https://github.com/arb/celebrate)


## Licença

Esse projeto está sob a licença MIT. Consulte [LICENSE](LICENSE) para mais informações.
