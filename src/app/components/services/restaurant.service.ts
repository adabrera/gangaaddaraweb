import { Injectable } from '@angular/core';
import products from '../data/restaurant.json';
import productcategory from '../data/category.json';
import { Category } from './filter/category';
import { Item } from './filter/item';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public products = products;
  public productcategory = productcategory;
  constructor() { }
  // category
  public getCategories(items: string | any[]) {
    var elems = productcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // Filter
  items: Item[] = products;
  categories: Category[] = productcategory;
  filteredItems: Item[] | Item[] = [] = [...this.items];
  filterItemsByCategory(category: Category) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(parseInt(category.id));
    })
  }
  reset() {
    this.filteredItems = [...this.items];
  }
}
