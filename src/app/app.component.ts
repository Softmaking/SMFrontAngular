import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Softmaking';

  menuActivo = false;

  toggleMenu() {
    this.menuActivo = !this.menuActivo;
  }
  
}
