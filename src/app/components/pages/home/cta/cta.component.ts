import { Component, OnInit } from '@angular/core';
import cta from '../../../data/ctafeatures.json';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
public cta = cta;
  constructor() { }

  ngOnInit(): void {
  }

}
