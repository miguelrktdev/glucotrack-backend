# 🩸 GlucoTrack - Backend

API do **GlucoTrack**, responsável pelo gerenciamento de usuários, registros de glicemia, refeições e cálculo de insulina.

Este backend foi desenvolvido seguindo boas práticas de arquitetura e organização, com foco em **escalabilidade, segurança e performance**.

---

## 🚀 Sobre o projeto

O backend do **GlucoTrack** fornece uma API REST completa para:

- Autenticação de usuários
- Registro de glicemia
- Registro de refeições
- Cálculo de insulina
- Histórico de dados
- Configurações personalizadas do usuário

---

## � Funcionalidades

- ✅ O usuário deve poder criar uma conta informando nome, email e senha
- ✅ O usuário deve poder realizar login utilizando email e senha
- ✅ O sistema deve permitir recuperação de senha por email
- ✅ O usuário poderá adicionar uma foto de perfil
- ✅ O usuário deve poder registrar medições de glicemia
- ✅ Cada registro de glicemia deve conter valor da glicemia, data, hora e observação opcional
- ✅ O usuário deve poder visualizar o histórico de medições de glicemia
- ✅ O usuário deve poder registrar refeições
- ✅ Cada refeição deve conter descrição e quantidade de carboidratos
- ✅ O sistema deve disponibilizar uma calculadora de dose de insulina
- ✅ O cálculo deve considerar glicemia atual e quantidade de carboidratos ingeridos
- ✅ O usuário deve poder configurar seus parâmetros pessoais de diabetes
- ✅ Os parâmetros incluem fator insulina/carboidrato, fator de sensibilidade e glicemia alvo
- ✅ O sistema deve calcular automaticamente a dose recomendada de insulina
- ✅ O sistema deve apresentar um dashboard com resumo das informações do usuário
- ✅ O dashboard deve exibir gráficos de glicemia ao longo do tempo
- ✅ O usuário deve poder visualizar histórico de glicemia, refeições e doses de insulina
- ✅ O sistema deve alertar quando a glicemia estiver em níveis críticos

---

## �️ Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Prisma ORM**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **Zod**

---

## 🧱 Arquitetura

O projeto segue princípios de:

- **Clean Architecture**
- **Separation of Concerns**
- **Repository Pattern**
- **Service Layer**

---

## 📁 Estrutura do projeto

```
src
 ├ controllers
 ├ services
 ├ repositories
 ├ tests
 ├ factories
 ├ dtos
 ├ middlewares
 ├ routes
 ├ lib
 ├ config
 ├ utils
 │
 └ server.ts
 └ app.ts
```

---

### 📌 Organização da arquitetura

O projeto segue uma arquitetura baseada em **camadas**, separando responsabilidades:

- **controllers** → recebem e respondem requisições HTTP
- **services** → regras de negócio da aplicação
- **repositories** → acesso ao banco de dados
- **dtos** → tipagem e validação de dados
- **middlewares** → autenticação e tratamento de erros
- **lib** → integrações externas (Prisma, Redis)
- **utils** → funções auxiliares

---

## ⚙️ Como executar o projeto

### 1️⃣ Clonar o repositório

```

git clone https://github.com/seu-usuario/glucotrack.git

```

---

### 2️⃣ Entrar na pasta do backend

```

cd glucotrack/backend

```

---

### 3️⃣ Instalar dependências

Com **pnpm**:

```

pnpm install

```

ou com **npm**:

```

npm install

```

---

### 4️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env`:

```

PORT=3333

DATABASE_URL="postgresql://user:password@localhost:5432/glucotrack"
JWT_SECRET=jwt-secret-key

```

---

### 5️⃣ Rodar migrations

```

npx prisma migrate dev

```

---

### 6️⃣ Iniciar servidor

```

pnpm dev

```

---

## 🔐 Autenticação

A autenticação é baseada em **JWT**:

- Login retorna um token
- Token deve ser enviado no header:

```

Authorization: Bearer <token>

```

---

## 📌 Principais rotas

### Auth

```

POST /auth/register
POST /auth/sessions
POST /auth/forgot-password
POST /auth/reset-password
POST /auth/verify-email

```

---

### Glucose

```

POST /glucose
GET /glucose

```

---

### Meals

```

POST /meals
GET /meals

```

---

### Insulin

```

POST /insulin/calculate

```

---

## 🧠 Regras de negócio

- Cada usuário pode acessar apenas seus próprios dados
- O valor de glicemia deve ser registrado em mg/dL
- Valores de glicemia abaixo de 70 mg/dL devem ser considerados hipoglicemia
- Valores de glicemia acima de 250 mg/dL devem ser considerados hiperglicemia
- O cálculo da dose de insulina deve seguir a fórmula:
  ```
  dose = (carboidratos / fator_insulina_carboidrato) +
  (glicemia_atual - glicemia_alvo) / fator_sensibilidade
  ```
- Os parâmetros de cálculo de insulina devem ser configuráveis por usuário
- O sistema não deve permitir valores negativos para glicemia ou carboidratos
- Cada registro deve possuir data e hora de criação
- O sistema deve registrar histórico das medições realizadas pelo usuário

---



## 🧪 Testes (planejado)

- Testes unitários
- Testes de integração
- Testes de autenticação

---

## 🧠 Motivação

Este projeto foi desenvolvido para praticar:

- Criação de APIs escaláveis
- Boas práticas com Node.js
- Integração com banco de dados
- Sistemas de autenticação

---

## 👨‍💻 Autor

Desenvolvido por @migueldev__
