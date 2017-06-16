import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { HomeLinkComponent } from './components/home-link.component';
import { CarouselComponent } from './components/carousel.component';
import { TimelineComponent } from './components/timeline.component';
import { EventDetailsComponent } from './components/event-details.component';
import { AppDataService } from './service/app-data.service';
import { ImageService } from './service/image.service';
import { CoverComponent } from './components/cover.component';



const appRoutes: Routes = [
  { path: 'invite', component: EventDetailsComponent },
  { path: 'story/:type', component: TimelineComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    TimelineComponent,
    EventDetailsComponent,
    CoverComponent,
    HomeLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppDataService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
