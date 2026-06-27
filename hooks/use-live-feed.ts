import { useState, useEffect } from 'react';
import { Cliente } from '../types/app-types';

export function useLiveFeed() {
  // 1. Cria uma lista vazia de clientes na memória
  const [clientes, setClientes] = useState<Cliente[]>([]);

  // 2. O useEffect executa essa lógica assim que a aplicação inicia
  useEffect(function inicializarSistema() {
    function criarClienteFalso() {
      const numeroAleatorio = Math.floor(Math.random() * 1000);
      
      const novoCliente: Cliente = {
        id: String(numeroAleatorio),
        nome: "Visitante " + numeroAleatorio,
        idade: 20 + (numeroAleatorio % 30), // Idade entre 20 e 50
        isVip: numeroAleatorio % 2 === 0,   // Se for par, é VIP
        horarioEntrada: new Date().toLocaleTimeString(),
      };

      // Pega a lista de clientes atual e adiciona o novo no topo
      setClientes(function atualizarLista(listaAnterior) {
        return [novoCliente, ...listaAnterior];
      });
    }

    // 3. Cria um loop (Thread em background) que roda a cada 30 segundos
    const temporizador = setInterval(criarClienteFalso, 30000);
    return function limparMemoria() {
      clearInterval(temporizador);
    };

  }, []); 

  return { clientes };
}