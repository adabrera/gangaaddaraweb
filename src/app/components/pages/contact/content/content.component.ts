import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { Contact } from '../../../models/contact';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  model = new Contact;
  submitted = false;
  error: {} | undefined;
  constructor(private contactService: ContactService) { }
  onSubmit() {
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }; 
  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
  };
  zoom: number = 16;
  lat: number = 7.274535069372065;
  lng: number = 80.60696093246507;

 
  ngOnInit(): void {
  }

}
