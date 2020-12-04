import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AnimeListComponent } from '../anime-list/anime-list.component';

const routes: Routes = [
  {    path: 'home',    component: HomeComponent  },
  { path: 'anime-list', component: AnimeListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
