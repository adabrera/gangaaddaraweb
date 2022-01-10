import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import places from '../data/places.json';

@Injectable({
  providedIn: 'root'
})
export class PlacesHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  public places = places;
  public placedetails = places;
  constructor(private router: ActivatedRoute) { }

  public setPost(id: any) {
    this.placedetails = places.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }
}
