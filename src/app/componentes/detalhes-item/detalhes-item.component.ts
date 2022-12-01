import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contato } from 'src/app/Contato';
import { ListService } from 'src/app/servicos/list.service';

@Component({
  selector: 'app-detalhes-item',
  templateUrl: './detalhes-item.component.html',
  styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnInit {
  contato?: Contato;

  constructor(private listService: ListService,
    private route: ActivatedRoute) {
      this.getAnimal();
     }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((contato) => (this.contato = contato));
  }
}
