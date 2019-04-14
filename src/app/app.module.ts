import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { SearchComponent } from './components/product/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderFormComponent,
    ListProductComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
