# Cadastro de Usuários - API REST com Node.js

Esta API foi desenvolvida com foco na aplicação de boas práticas como modularização, uso de middlewares personalizados e controle de requisições (Rate Limiting).

---

## 🚀 Funcionalidades

- ✅ Cadastro de novos usuários
- ✅ Listagem de usuários cadastrados
- ✅ Middleware inteligente para log de requisições (data, método, rota)
- ✅ Middleware de limitação de requisições por IP (Rate Limiter)

---

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Malvino30-06/cadastro-usuario-node.git
```

2. Acesse a pasta do projeto:

```bash
cd cadastro-usuario-node
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
node server.js
```

A API estará rodando em: `http://localhost:3000`

---

## 📫 Testando com Insomnia

### 📍 Rota: Cadastrar usuário

- Método: `POST`
- URL: `http://localhost:3000/api/usuarios`
- Body (JSON):

```json
{
  "nome": "Kaique",
  "email": "kaique@example.com"
}
```

### 📍 Rota: Listar usuários

- Método: `GET`
- URL: `http://localhost:3000/api/usuarios`

### 📍 Rota: Atualizar usuários

- Método: `PUT`
- URL: `http://localhost:3000/api/usuarios/:id`

### 📍 Rota: Deletar usuários

- Método: `DELETE`
- URL: `http://localhost:3000/api/usuarios/:id`

---

## 📁 Estrutura de Pastas

```
src/
├── controllers/
│   └── userController.js        # Controlador para gerenciar a lógica de usuários
|
├── middleware/
│   ├── rateLimiter.js           # Middleware para limitar requisições por IP
│   └── requestLogger.js         # Middleware para log inteligente de requisições
├── routes/
│   └── userRoutes.js        # Rotas de usuário (cadastro e listagem)
├── app.js                   # Configuração do app e middlewares
└── server.js                # Ponto de entrada da aplicação
```

---

## ⚠️ Observação

Este projeto utiliza dados mockados em memória para simular um banco de dados, com o objetivo de facilitar a execução e o deploy.

Os dados são armazenados temporariamente e são resetados ao reiniciar o servidor.

---

## 📄 Licença

Este projeto está sob a licença MIT.
