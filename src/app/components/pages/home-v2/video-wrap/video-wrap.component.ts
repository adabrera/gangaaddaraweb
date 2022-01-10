import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../services/helper.service'

@Component({
  selector: 'app-video-wrap',
  templateUrl: './video-wrap.component.html',
  styleUrls: ['./video-wrap.component.css']
})
export class VideoWrapComponent extends HelperService implements OnInit {

  constructor(public helperService: HelperService) {
    super()
  }

  ngOnInit(): void {
  }

}
