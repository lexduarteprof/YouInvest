import { Component, OnInit } from '@angular/core';
import { fundoModel } from 'src/app/models/fundo-model';

@Component({
  selector: 'app-fundos-list',
  templateUrl: './fundos-list.component.html',
  styleUrls: ['./fundos-list.component.css']
})
export class FundosListComponent implements OnInit {

  fundos: Array<fundoModel> = [];
  
  constructor() { }

  ngOnInit(): void {

    this.fundos = [
    {
      nome: 'Infraestrutura Inflação',
      descricao: 'O fundo atua para obter ganhos com investimentos em infraestrutura ligado a inflação.',
      perfilInvestidor: 'Conservador',
      rentDia: 0.03/100,
      rentMes: 0.56/100,
      rentAno: 5.42/100,
      ISharp: 1.3,
      ITreynor: 1.7,
      volDia: 0.04/100,
      logoURL:'Santander.jpg'
    },
  
    {
      nome: 'FI E-SIMPLES RENDA FIXA LP',
      descricao: 'Produto ideal para investidores que buscam simplicidade na escolha de seus investimentos. O Fundo conta com carteira simplificada e com performance atrelada à SELIC, com baixa exposição a risco de crédito e à volatilidade.',
      perfilInvestidor: 'Conservador',
      rentDia: 0.02/100,
      rentMes: 0.67/100,
      rentAno: 7.42/100,
      ISharp: 1.6,
      ITreynor: 1.9,
      volDia: 0.05/100,
      logoURL:'Caixa.jpg'
    },
    {
      nome: 'Itaú Ações Olimpo',
      descricao: 'Foco em empresas de qualidade e flexibilidade para capturar oportunidades em momentos de mais otimismo.',
      perfilInvestidor: 'Arrojado',
      rentDia: 0.12/100,
      rentMes: -2.23/100,
      rentAno: -7.40/100,
      ISharp: 2.4,
      ITreynor: 3.7,
      volDia: 1.4/100,
      logoURL:'Itau.jpg'
    },
    {
      nome: 'Multimercado Equity Hedge',
      descricao: 'Fundo possibilita acesso a diversas estratégias de mercado, porém é focado em operações no mercado acionário com combinações de compra e venda de ativos, lucrando na diferença de rentabilidade entre eles.',
      perfilInvestidor: 'Moderado',
      rentDia: 0.05/100,
      rentMes: 1.35/100,
      rentAno: 6.56/100,
      ISharp: 1.3,
      ITreynor: 1.7,
      volDia: 0.06/100,
      logoURL:'bradesco.jpg'
    },
  
  ]
  }

}
