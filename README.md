# RotaViagem

![React](https://img.shields.io/badge/React-19.0.0-blue)
![Axios](https://img.shields.io/badge/Axios-1.7.9-blueviolet)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15.x-blue)  
![HTML](https://img.shields.io/badge/HTML-5.0-red)  
![CSS](https://img.shields.io/badge/CSS-3.0-blue)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)  
![React Router](https://img.shields.io/badge/React%20Router-6.28.1-orange)  
![VS Code](https://img.shields.io/badge/VS%20Code-1.80.x-purple)  
![C#](https://img.shields.io/badge/C%23-10.0-blue)  
![.NET](https://img.shields.io/badge/.NET-7.0-purple)  

## Sobre o Projeto
RotaViagem é um sistema para gerenciar rotas de viagem, onde é possível adicionar, consultar e editar rotas utilizando um frontend desenvolvido em React e comunicação com uma API REST.

## Funcionalidades
- Se todos os arquivos já estão configurados e as instalações necessárias foram realizadas, você só precisará executar os comandos no PowerShell para iniciar o projeto.

- Adicionar novas rotas com origem, destino e valor.
- Consultar a melhor rota com base em origem e destino.
- Editar e excluir rotas existentes.
- Integração com API REST para gerenciamento de dados.

## Tecnologias Utilizadas

### Frontend:
- React 19.0.0
- React Router DOM 6.28.1
- Axios 1.7.9

### Backend (Exemplo):
- .NET Core com Entity Framework para API REST
- PostgreSQL como banco de dados relacional


## Requisitos
- Node.js 16 ou superior
- npm ou yarn

## Instalação FRONT E BACK

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/rotaviagem.git
   cd rotaviagem
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   cd frontend
   npm start
   ```

3. Acesse o aplicativo no navegador em [http://localhost:3000](http://localhost:3000).
----------------------------------------------
4. Inicie o Backend:
   ```bash
   cd rotaviagem
   cd backend
   dotnet run
   ```

5. Acesse o aplicativo no navegador em [http://localhost:5283](http://localhost:5283).

## Testes


1. Acesse o Swagger em [http://localhost:5283/swagger/index.html](http://localhost:5283).

2. a um arquivo com nome RotaViagem.postman_collection para que seja testado os endpoints. 

## Estrutura de Diretórios

```
rotaviagem
├── .gitignore
├── README.md
├── backend
│   │   ├── Controllers
│   │   │   └── RotasController.cs
│   │   ├── Models
│   │   │   └── Rota.cs
│   │   ├── Migrations
│   │   │   └── <migrations_files>.cs
│   │   ├── Data
│   │   │   └── AppDbContext.cs
│   │   ├── Program.cs
│   │   ├── Startup.cs
│   │   ├── appsettings.json
│   │   ├── appsettings.Development.json
│   │   └── RotaViagem.Api.csproj
│   ├── RotaViagem.sln
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src
│   │   ├── assets
│   │   │   └── logo.png
│   │   ├── components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navigation.js
│   │   ├── pages
│   │   │   ├── Home.js
│   │   │   ├── AddRota.js
│   │   │   ├── ConsultaRotas.js
│   │   │   └── NotFound.js
│   │   ├── services
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       ├── App.css
│   │       ├── Header.css
│   │       ├── Footer.css
│   │       └── Navigation.css
│   ├── package.json
│   ├── package-lock.json
│── README.md (opcional)
├── swagger.json
└── RotaViagem.postman_collection.json

```
