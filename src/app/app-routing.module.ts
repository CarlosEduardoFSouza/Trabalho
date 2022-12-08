import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './componentes/list/list-render.component';
import { TwoWayBidingComponent } from './componentes/create/two-way-biding.component';
import { UpdateComponent } from './componentes/update/update.component';

const routes: Routes = [
  {path: 'list', component: ListRenderComponent},
  {path: 'two-way-biding', component: TwoWayBidingComponent},
  {path: 'updateContatos/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
