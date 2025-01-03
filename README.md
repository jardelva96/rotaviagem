# RotaViagem Frontend

![React](https://img.shields.io/badge/React-19.0.0-blue)
![Axios](https://img.shields.io/badge/Axios-1.7.9-blueviolet)

## Sobre o Projeto

RotaViagem é um sistema para gerenciar rotas de viagem, onde é possível adicionar, consultar e editar rotas utilizando um frontend desenvolvido em React e comunicação com uma API REST.

## Funcionalidades

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

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/rotaviagem-frontend.git
   cd rotaviagem-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a API Base URL:
   Edite o arquivo `src/services/api.js` e ajuste a URL base para a API backend:
   ```javascript
   import axios from 'axios';

   const api = axios.create({
       baseURL: 'http://localhost:5000/api', // Altere conforme necessário
   });

   export default api;
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse o aplicativo no navegador em [http://localhost:3000](http://localhost:3000).

## Testes


3. Acesse o aplicativo em [http://localhost:3000](http://localhost:3000).



## Estrutura de Diretórios

```
rotaviagem-frontend/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas principais do aplicativo
│   ├── services/       # Configurações de API e utilitários
│   ├── App.js          # Componente principal
│   └── index.js        # Ponto de entrada
├── public/             # Arquivos públicos
├── .env                # Variáveis de ambiente
├── Dockerfile          # Configuração para container
├── package.json        # Dependências e scripts do projeto
└── README.md           # Documentação do projeto
```
