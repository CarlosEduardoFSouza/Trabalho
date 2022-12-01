import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrls: ['./two-way-biding.component.css']
})
export class TwoWayBidingComponent implements OnInit {

  nome: string = '';
  telefone: string = '';
  email: string = '';
  empresa: string = '';

  contato: Contato = {
    id: 0,
    nome: this.nome,
    telefone: this.telefone,
    email: this.email,
    empresa: this.empresa
  }
  
  constructor(private listService: ListService, private router: Router) {
  

   }

  ngOnInit(): void {
  }

  incluiContato(nome: string, telefone: string, email: string, empresa: string ) {
    this.contato.nome = nome;
    this.contato.telefone = telefone;
    this.contato.email = email;
    this.contato.empresa = empresa;
    this.listService.setItem(this.contato).subscribe();
    this.router.navigate(['/list']);  
  }

}
