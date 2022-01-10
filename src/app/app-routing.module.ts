import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home-v2/home-v2.module').then(m => m.HomeV2Module), data: { breadcrumb: 'Homepage' } },
  // Rooms
  { path: 'room-grid', loadChildren: () => import('./components/pages/room-grid/room-grid.module').then(m => m.RoomGridModule), data: { breadcrumb: 'Room Grid' } },
  { path: 'room-list', loadChildren: () => import('./components/pages/room-list/room-list.module').then(m => m.RoomListModule), data: { breadcrumb: 'Accommodation' } },
  { path: 'room-details/:id', loadChildren: () => import('./components/pages/room-details/room-details.module').then(m => m.RoomDetailsModule), data: { breadcrumb: 'Room Details' } },
  // Blogs
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/user/:userId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: 'Blog Grid' } },
  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: 'Blog Standard' } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: 'Blog Details' } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: 'Contact Us' } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: 'About Us' } },
  // Gallery
  { path: 'gallery', loadChildren: () => import('./components/pages/gallery/gallery.module').then(m => m.GalleryModule), data: { breadcrumb: 'Gallery' } },
  // Restaurant
  { path: 'restaurant', loadChildren: () => import('./components/pages/restaurant/restaurant.module').then(m => m.RestaurantModule), data: { breadcrumb: 'Restaurant' } },
  // Places
  { path: 'places', loadChildren: () => import('./components/pages/places/places.module').then(m => m.PlacesModule), data: { breadcrumb: 'Homepage' } },
  { path: 'places-details/:id', loadChildren: () => import('./components/pages/places-details/places-details.module').then(m => m.PlacesDetailsModule), data: { breadcrumb: 'Places Details' } },
  // offers
  { path: 'offers', loadChildren: () => import('./components/pages/offers/offers.module').then(m => m.OffersModule), data: { breadcrumb: 'Offers' } },
  // Menu
  { path: 'menu', loadChildren: () => import('./components/pages/menu/menu.module').then(m => m.MenuModule), data: { breadcrumb: 'Menu' } },
  { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: 'Error 404' } },
  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: 'Error 404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
