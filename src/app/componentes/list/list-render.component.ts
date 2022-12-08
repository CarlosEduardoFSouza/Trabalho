import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private listService: ListService) {
    this.getContatos();
  }
  ngOnInit(): void {
  }

  removeContato(contato: Contato) {
    this.contatos = this.contatos.filter((a) => contato.id !== a.id);
    this.listService.removeContato(contato.id).subscribe();
  }
  getContatos() {
    this.listService.getAll().subscribe((contatos) => (this.contatos = contatos));
  }
}
