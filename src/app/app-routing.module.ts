import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrackerComponent } from './tracker/tracker.component';
import { WeeklyExpenseComponent } from './weekly-expense/weekly-expense.component';
import { ChatZoneComponent } from './chat-zone/chat-zone.component';

const routes:Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component:AppComponent}, 
  {path: 'home', component: HomeComponent},
  {path: 'weekly-expense', component:WeeklyExpenseComponent},
  {path: 'chat', component:ChatZoneComponent},
  {path: 'track', component:TrackerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
