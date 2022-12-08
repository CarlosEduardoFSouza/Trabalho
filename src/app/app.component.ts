import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Carlos Souza';
  userData = {
    email: 'carloseduardofernandes10@live.com',
    funcao: 'Admin'
  }
  title = 'Trabalho-Angular';
}
