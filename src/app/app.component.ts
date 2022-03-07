import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minha Lista de Tarefas'

  constructor(){
    this.todos.push('Passear com o cachorro.')
    this.todos.push('Comprar alimento.')
    this.todos.push('Não ser calvo.')
  }
}
