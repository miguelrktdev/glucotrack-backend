# Requirements - Diabetes Tracker Web App

## Requisitos Funcionais

- [ ] O usuário deve poder criar uma conta informando nome, email e senha
- [ ] O usuário deve poder realizar login utilizando email e senha
- [ ] O sistema deve permitir recuperação de senha por email
- [ ] O usuário poderá adicionar uma foto de perfil
- [ ] O usuário deve poder registrar medições de glicemia
- [ ] Cada registro de glicemia deve conter valor da glicemia, data, hora e observação opcional
- [ ] O usuário deve poder visualizar o histórico de medições de glicemia
- [ ] O usuário deve poder registrar refeições
- [ ] Cada refeição deve conter descrição e quantidade de carboidratos
- [ ] O sistema deve disponibilizar uma calculadora de dose de insulina
- [ ] O cálculo deve considerar glicemia atual e quantidade de carboidratos ingeridos
- [ ] O usuário deve poder configurar seus parâmetros pessoais de diabetes
- [ ] Os parâmetros incluem fator insulina/carboidrato, fator de sensibilidade e glicemia alvo
- [ ] O sistema deve calcular automaticamente a dose recomendada de insulina
- [ ] O sistema deve apresentar um dashboard com resumo das informações do usuário
- [ ] O dashboard deve exibir gráficos de glicemia ao longo do tempo
- [ ] O usuário deve poder visualizar histórico de glicemia, refeições e doses de insulina
- [ ] O sistema deve alertar quando a glicemia estiver em níveis críticos

---

## Regras de Negócio

- [ ] Cada usuário pode acessar apenas seus próprios dados
- [ ] O valor de glicemia deve ser registrado em mg/dL
- [ ] Valores de glicemia abaixo de 70 mg/dL devem ser considerados hipoglicemia
- [ ] Valores de glicemia acima de 250 mg/dL devem ser considerados hiperglicemia
- [ ] O cálculo da dose de insulina deve seguir a fórmula:
      dose = (carboidratos / fator_insulina_carboidrato) +
      (glicemia_atual - glicemia_alvo) / fator_sensibilidade
- [ ] Os parâmetros de cálculo de insulina devem ser configuráveis por usuário
- [ ] O sistema não deve permitir valores negativos para glicemia ou carboidratos
- [ ] Cada registro deve possuir data e hora de criação
- [ ] O sistema deve registrar histórico das medições realizadas pelo usuário

---

## Requisitos Não Funcionais

- [ ] A aplicação deve possuir autenticação baseada em JWT
- [ ] As senhas dos usuários devem ser armazenadas utilizando hash seguro (bcrypt)
- [ ] O sistema deve validar dados de entrada utilizando schema validation
- [ ] A API deve seguir padrão REST
- [ ] A aplicação deve possuir arquitetura modular e organizada
- [ ] O backend deve ser desenvolvido utilizando Node.js
- [ ] O sistema deve utilizar banco de dados relacional para persistência de dados
- [ ] O sistema deve possuir tratamento adequado de erros
- [ ] O sistema deve garantir isolamento de dados entre usuários
