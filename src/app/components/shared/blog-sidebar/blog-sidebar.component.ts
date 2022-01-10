import { Component } from '@angular/core';
import { BlogHelperService } from '../../services/blog-helper.service';
import instaposts from '../../data/instaposts.json';
import twitterpost from '../../data/twitterpost.json'

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent extends BlogHelperService {
  public instagram = instaposts;
  public twitterpost = twitterpost;

}
