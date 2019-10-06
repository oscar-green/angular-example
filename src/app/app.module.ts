import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImageComponent } from './components/image/image.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImageComponent,
    ImageContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
