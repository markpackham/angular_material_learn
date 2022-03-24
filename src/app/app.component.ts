import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog){

  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
 
}
