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
  
  contato: Contato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    empresa: ''
  }
  
  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
  
  }

  updateContatos() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.updateUser(id, this.contato).subscribe(res => {
      this.contato.nome = res.nome;
      this.contato.telefone = res.telefone;
      this.contato.email = res.email;
      this.contato.empresa = res.empresa;
      
    })
    this.router.navigate(['/list']);
  }
}
