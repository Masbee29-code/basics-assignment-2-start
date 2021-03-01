import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  isValid: boolean = false;

  validate() {
    if (this.username !== '')
      this.isValid = true;
  }
  submitName() {
    this.username = '';
    this.isValid = false;
  }
}
