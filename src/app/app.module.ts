import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { WeeklyExpenseComponent } from './weekly-expense/weekly-expense.component';
import { ChatZoneComponent } from './chat-zone/chat-zone.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    WeeklyExpenseComponent,
    ChatZoneComponent,
    HomeComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
