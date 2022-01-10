import { Injectable, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import rooms from '../data/room.json';
import roomcategory from '../data/roomcategory.json';
import authors from '../data/authors.json';

@Injectable({
  providedIn: 'root'
})
export class RoomHelperService implements AfterContentInit {
  // pagination
  page: number = 1;
  public rooms = rooms;
  public roomdetails = rooms;
  public roomcategory = roomcategory;
  public author = authors;
  constructor(private route: ActivatedRoute) { }
  // Get Category
  public getCategories(items: string | any[]) {
    var elems = roomcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Get Author
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Offers
  public getOffer() {
    var elems = rooms.filter((item: { offer: boolean; }) => {
      return item.offer === true;
    });
    return elems;
  }
  // Related Room
  public getRoomByCategory(items: string | any[]) {
    var elems = rooms.filter((room: { id: string; category: any[]; }) => { return parseInt(room.id) !== parseInt(this.route.snapshot.params.id) && room.category.some(r => items.includes(r)) });
    return elems;
  }
  // Single Room
  public setRoom(id: any) {
    this.roomdetails = rooms.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setRoom(this.route.snapshot.params.id);
  }
}
