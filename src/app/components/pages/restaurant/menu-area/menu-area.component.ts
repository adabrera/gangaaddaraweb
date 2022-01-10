import { Component, OnInit } from '@angular/core';
import menublock from '../../../data/menu.json';

@Component({
  selector: 'app-menu-area',
  templateUrl: './menu-area.component.html',
  styleUrls: ['./menu-area.component.css']
})
export class MenuAreaComponent implements OnInit {
  public menublock = menublock;
  constructor() { 
    this.menuslidepost = [];
  }
  public menuslidepost: any[];
  splitArr(arr: string | any[], size: number) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  };
  ngOnInit(): void {
    this.menuslidepost = this.splitArr(this.menublock, 5);
  }

}
