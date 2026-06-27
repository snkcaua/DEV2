# Drzyy - Gestão Administrativa Real-Time

## 1. Contextualização e Interpretação do Desafio
Este projeto foi desenvolvido como solução para o Desafio DEV2 da CODE Jr. O objetivo principal era construir uma Single Page Application (SPA) para a casa de shows Drzyy, capaz de lidar com a entrada de clientes simulada em tempo real e permitir o gerenciamento de filas e status VIP, mantendo a performance da interface sem recarregamentos desnecessários.

## 2. Arquitetura e Abordagem Escolhida
A aplicação foi construída utilizando:
* **React** com **Vite** para garantir um ambiente de desenvolvimento rápido e otimizado.
* **TypeScript** para tipagem forte, garantindo a integridade dos dados transitados no frontend.
* **Tailwind CSS** injetado via CDN (devido ao escopo de tempo da sprint) para estilização ágil e responsiva.

A arquitetura de pastas seguiu estritamente o padrão `kebab-case`, dividindo o projeto em módulos lógicos (`componentes`, `hooks`, `tipagens`) para separar a regra de negócio da camada visual.

## 3. Principais Decisões Técnicas
* **Gestão de Estado:** A tabela foi estruturada para derivar seus dados de filtros locais (buscas de texto e checkbox VIP), evitando mutações diretas no array original de clientes e prevenindo falhas de renderização.
A falta de tempo e conhecimento na maioria das tecnologias requisitadas na 
task influenciaram a escolha de um código mais simples e direto. 

## 4. Dificuldades Encontradas
 Meu ecossistema natural de desenvolvimento é fortemente ancorado em lógicas de backend, bancos de dados relacionais e forte orientação a objetos. O maior desafio desta sprint foi organizar as ideias e se atentar aos requisitos técnicos exigidos. A falta de conhecimento nas tecnologias typescript tornaram a dificuldade elevada. 
 Utilizei assistência de IA atuando estritamente como mentoria técnica e estrutural, enquanto a implementação do raciocínio lógico e estruturação de interfaces foram aplicadas com base nos meus estudos práticos recentes de desenvolvimento web full-stack. A lógica foi implementada e depois foi utilizada a IA para adaptar a sintaxe correta.
 A falta de tempo não permitiu completar o projeto por inteiro.

## 5. Possíveis Melhorias Futuras
* Implementação do Módulo de Comandas (Painel sobreposto) com cálculo de total.
* Integração com uma API real via WebSockets para substituir o temporizador local.
* Configuração do Tailwind via PostCSS para otimização de build em produção.

## 6. Conclusão
O desafio foi um tanto quanto elevado relacionado ao meu conhecimento atual nas tecnologias requisitadas, a estruturação e uso do kebab-case se mostrou algo que faz sentido pramim, vou aderir mais no meus projetos pessoais. 

---

## Como rodar o projeto localmente

1. Certifique-se de ter o **Node.js** instalado na sua máquina.
2. Clone este repositório.
3. Abra o terminal na pasta do projeto e instale as dependências:
   > npm install
   > npm run dev 
   > abra o local host no navegador 