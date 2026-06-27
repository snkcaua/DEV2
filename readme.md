# Drzyy - Gestão Administrativa Real-Time

## 1. Contextualização e Interpretação do Desafio
Este projeto foi desenvolvido como solução para o Desafio DEV2 da CODE Jr. O objetivo principal foi construir uma Single Page Application (SPA) para a casa de shows Drzyy, capaz de lidar com a entrada de clientes simulada em tempo real e permitir o gerenciamento de filas e status VIP, mantendo a performance da interface sem recarregamentos desnecessários.

## 2. Arquitetura e Abordagem Escolhida
A aplicação foi construída utilizando:
* **React** com **Vite** para garantir um ambiente de desenvolvimento rápido e otimizado.
* **TypeScript** para tipagem forte, garantindo a integridade dos dados transitados no frontend.
* **Tailwind CSS** injetado via CDN (devido ao escopo de tempo da sprint) para estilização ágil e responsiva.

A arquitetura de pastas seguiu estritamente o padrão `kebab-case`, dividindo o projeto em módulos lógicos (`componentes`, `hooks`, `tipagens`) para separar a regra de negócio da camada visual.

## 3. Principais Decisões Técnicas
* **Motor de Tempo Real (Hook Customizado):** A simulação do Live Feed foi isolada em um hook customizado (`use-live-feed`). Isso manteve o componente principal limpo, delegando a injeção de clientes falsos a cada 3 segundos a uma rotina assíncrona.
* **Gestão de Estado:** A tabela foi estruturada para derivar seus dados de filtros locais (buscas de texto e checkbox VIP), evitando mutações diretas no array original de clientes e prevenindo falhas de renderização.

## 4. Dificuldades Encontradas
Meu ecossistema natural de desenvolvimento é fortemente ancorado em lógicas de backend, bancos de dados relacionais e forte orientação a objetos. O maior desafio desta sprint de 48 horas foi mapear esses conceitos estruturais para o ciclo de vida dinâmico do React e a sintaxe do TypeScript. 
Para acelerar a curva de aprendizado na configuração do Vite e no boilerplate dos Hooks de estado, utilizei assistência de IA atuando estritamente como mentoria técnica, enquanto a implementação do raciocínio lógico e estruturação de interfaces responsivas foram aplicadas com base nos meus estudos práticos recentes de desenvolvimento web full-stack.

## 5. Possíveis Melhorias Futuras
* Implementação do Módulo de Comandas (Painel sobreposto) com cálculo de total.
* Integração com uma API real via WebSockets para substituir o temporizador local.
* Configuração do Tailwind via PostCSS para otimização de build em produção.

## 6. Conclusão
O desafio foi uma excelente oportunidade para vivenciar a pressão de uma entrega ágil e forçar a adaptação rápida a um novo framework. Focar na solidez do MVP (Motor de tempo real e Tabela Reativa) garantiu uma entrega funcional dentro do tempo estimado.

---

## Como rodar o projeto localmente

1. Certifique-se de ter o **Node.js** instalado na sua máquina.
2. Clone este repositório.
3. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install