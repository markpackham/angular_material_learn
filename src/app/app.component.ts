import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar){

  }

  openSnackBar(message: any, action: any){
    let snackBarRef = this.snackBar.open(message, action, {duration: 3000});

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar action was triggered')
    })
  }
}
