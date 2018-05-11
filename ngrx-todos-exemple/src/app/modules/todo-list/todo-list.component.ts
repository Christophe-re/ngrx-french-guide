import {Component} from '@angular/core';

@Component({
  template: `
	  <header>
		  <nav>
			  <a routerLink="all-todos">all todos</a>
			  <a routerLink="select-todo">select todo</a>
		  </nav>
	  </header>
	  <router-outlet></router-outlet>
  `
})
export class TodoListComponent {}

