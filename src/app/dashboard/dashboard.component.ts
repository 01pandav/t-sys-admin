import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  designation:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',designation:'abc'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',designation:'abc'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',designation:'abc'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',designation:'abc'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',designation:'abc'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',designation:'abc'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',designation:'abc'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',designation:'abc'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',designation:'abc'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',designation:'abc'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'designation'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
