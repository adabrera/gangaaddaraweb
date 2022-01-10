import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../services/helper.service'

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent extends HelperService implements OnInit {

  constructor(public helperService: HelperService) {
    super()
  }

  ngOnInit(): void {
  }

}
