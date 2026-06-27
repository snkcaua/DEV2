import React from 'react';
import { useState } from 'react';
import { Cliente } from '../../types/app-types'; 

// Aqui dizemos que a Tabela precisa receber uma lista de Clientes para funcionar
type TabelaClientesProps = {
  clientes: Cliente[];
};

export function TabelaClientes({ clientes }: TabelaClientesProps) {
  // Estados para controlar os filtros da tabela
  const [busca, setBusca] = useState('');
  const [mostrarVip, setMostrarVip] = useState(false);

  // Lógica de filtragem: roda automaticamente sempre que você digita algo ou marca o checkbox 
  const clientesFiltrados = clientes.filter((cliente) => {
    const bateComBusca = cliente.nome.toLowerCase().includes(busca.toLowerCase());
    const bateComVip = mostrarVip ? cliente.isVip : true;
    return bateComBusca && bateComVip;
  });

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Fila de Portaria</h2>
      
      {/* Controles de Filtro */}
      <div className="flex gap-4 mb-4">
        <input 
          type="text" 
          placeholder="Buscar por nome..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="flex items-center gap-2 whitespace-nowrap cursor-pointer text-gray-700 font-semibold">
          <input 
            type="checkbox" 
            checked={mostrarVip}
            onChange={(e) => setMostrarVip(e.target.checked)}
            className="w-5 h-5 accent-blue-600"
          />
          Apenas VIP
        </label>
      </div>

      {/* Tabela de Dados */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-3 border-b">Nome</th>
              <th className="p-3 border-b">Idade</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Horário</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente) => (
              <tr key={cliente.id} className="hover:bg-gray-50 cursor-pointer transition-colors">
                <td className="p-3 border-b">{cliente.nome}</td>
                <td className="p-3 border-b">{cliente.idade}</td>
                <td className="p-3 border-b">
                  {cliente.isVip ? (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">VIP</span>
                  ) : (
                    <span className="text-gray-500 text-sm">Normal</span>
                  )}
                </td>
                <td className="p-3 border-b text-gray-500">{cliente.horarioEntrada}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}