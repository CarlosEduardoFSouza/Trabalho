import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private listService: ListService, private router: Router) {
    this.getAnimais();
  }
  ngOnInit(): void {
  }

  removeAnimal(contato: Contato) {
    // Remove o Animal do front-end
    this.contatos = this.contatos.filter((a) => contato.id !== a.id);
    // Remove efetivamente do banco
    this.listService.remove(contato.id).subscribe();
  }
  getAnimais() {
    this.listService.getAll().subscribe((contatos) => (this.contatos = contatos));
  }
}
