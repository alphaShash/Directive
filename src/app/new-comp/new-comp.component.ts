import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FRUITS } from '../fruit-list';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCOmpComponent implements OnInit {

  fruits =  FRUITS;
  selectedFruit!: Fruit;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(fruit: Fruit): void{
    this.selectedFruit=fruit;
  }

}
