import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { StarshipsComponent } from './pages/starships/starships.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'planets', component: PlanetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
