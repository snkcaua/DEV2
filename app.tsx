import React from 'react';
import { useLiveFeed } from './hooks/use-live-feed';
import { TabelaClientes } from './componentes/tabela-clientes/tabela-clientes';

export function App() {
  // Instancia o hook que gera um cliente novo a cada 30 segundos
  const { clientes } = useLiveFeed();

  return (
    <div className="min-h-screen bg-gray-200 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">Drzyy - Gestão Administrativa</h1>
          <p className="text-gray-600">Monitoramento em tempo real</p>
        </header>
        
        {/* Renderiza a tabela passando a lista atualizada */}
        <TabelaClientes clientes={clientes} />
      </div>
    </div>
  );
}