import { Component, OnInit } from '@angular/core';
import counter from '../../data/counter.json';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter = counter;
  constructor() { }

  ngOnInit(): void {
  }

}
