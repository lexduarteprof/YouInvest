import { Component, Input, OnInit } from '@angular/core';
import { fundoModel } from 'src/app/models/fundo-model';

@Component({
  selector: 'app-fundo-item',
  templateUrl: './fundo-item.component.html',
  styleUrls: ['./fundo-item.component.css']
})

export class FundoItemComponent implements OnInit {

  @Input() fundoItem: fundoModel = 
  {
    nome: '',
    descricao: '',
    perfilInvestidor: '',
    rentDia: 0,
    rentMes: 0,
    rentAno: 0,
    ISharp: 0,
    ITreynor: 0,
    volDia: 0,
    logoURL:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
