import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode: String = 'list'
  public todos: Todo[] = []
  public title: String = 'Minha Lista de Tarefas'
  public form: FormGroup | any


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.required,
      ]
      )]
    })
    this.load();
  }

  add(){
    const title = this.form.controls['title'].value
    const id = this.todos.length +1
    this.todos.push(new Todo(id, title, false))
    this.save()
    this.clearForm()
  }

  clearForm(){
    this.form.reset()
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo)
    if (index !== -1) {
      this.todos.splice(index, 1)
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true
    this.save();  
  }

  markAsUndone(todo: Todo) {
    todo.done = false
    this.save();
  }

  save(){
    const dataToString = JSON.stringify(this.todos)
    localStorage.setItem('todos', dataToString)
  }

  load() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }
  changeMode(mode: String) {
    this.mode = mode;
  }
}
