import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
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
  
  id!: any;
  constructor(private listService: ListService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listService.getItem(this.id).subscribe(res => {
      
    });
  }

  updateContatos() {
    this.listService.updateUser(this.contato.id, this.contato).subscribe( res => {

    })
  }

}
