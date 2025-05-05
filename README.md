# Cardápio App

Este é um projeto simples de um **cardápio digital** feito com **Spring Boot** no backend e **React** no frontend.

## 📦 Backend

- Desenvolvido com **Java** e **Spring Boot**.
- Disponibiliza uma API REST para gerenciar os itens do cardápio.
- Endpoints disponíveis:
  - `GET /food` – Retorna todos os itens do cardápio.
  - `POST /food` – Cadastra um novo item no cardápio.

## 💻 Frontend

- Desenvolvido com **React** e **TypeScript**.
- Exibe os itens do cardápio em formato de cards.
- Permite adicionar novos itens ao cardápio.
- Todos os itens novos permitem personalização:
  - Nome do produto
  - Preço do produto
  - Imagem do produto (url)

## 🛠️ Tecnologias Utilizadas

- **Backend**:  
  - Java  
  - Spring Boot  
  - Spring Data JPA  

- **Frontend**:  
  - React  
  - TypeScript  
  - Vite (para desenvolvimento)

## 🚀 Como Rodar o Projeto

### Backend

1. Navegue até a pasta do backend.
2. Execute o projeto com o Spring Boot:
   ```bash
   mvn spring-boot:run
   ```
   ou execute o programa na classe CardapioApplication.java (recomendado utilizar uma IDE como IntelliJ ou Eclipse)

### Frontend

1. Navegue até a pasta do frontend.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o projeto:
   ```bash
   npm run dev
   ```

O frontend estará disponível geralmente em [http://localhost:5173](http://localhost:5173) e fará chamadas para o backend na porta padrão do Spring Boot ([http://localhost:8080/food](http://localhost:8080/food)).
  - /food está na url devido a forma de desenvolvimento da aplicação

---
 
