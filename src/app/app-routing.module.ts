import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artista/:id', component: ArtistaComponent },
  { path: 'search', component: SearchComponent },
  { path: '', pathMatch:'full', redirectTo:'home' },
  { path: '**', pathMatch:'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }