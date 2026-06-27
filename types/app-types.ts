// poo para definir tipos de dados
export type Cliente = {
  id: string;
  nome: string;
  idade: number;
  isVip: boolean;
  horarioEntrada: string;
};

export type Produto = {
  id: string;
  nome: string;
  quantidade: number;
  precoUnitario: number;
};