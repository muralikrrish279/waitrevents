import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { CarouselComponent } from './components/carousel.component';
import { TimelineComponent } from './components/timeline.component';
import { AppDataService } from './service/app-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
