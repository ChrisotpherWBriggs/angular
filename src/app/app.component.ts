import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
  title: 'Angular Course Deep Dive'
  };

  onClicked() {
      alert('Hello World!');
    }
  
  
  onKeyUp(newTitle:string) {
    this.data.title = newTitle;

  }




}