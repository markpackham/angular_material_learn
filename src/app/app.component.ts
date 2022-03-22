import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate = new Date();
  maxDate = new Date(2025, 3, 10);

  dateFilter = (date: any) => {
    const day = date.getDay();
    // prevent Saturdays and Sundays from being selected
    return day != 0 && day != 6
  }
}
