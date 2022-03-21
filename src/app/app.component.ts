import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  options: string[] = ['Angular','React','Vue'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'Angular Material'},
    {name: 'React'},
    {name: 'Vue'}
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }




  displayFunction(subject: { name: any; }){
    return subject ? subject.name : undefined
  }
}
