import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayfinderComponent } from './components/playfinder/playfinder.component';

const routes: Routes = [
  { path: '', redirectTo: 'playfinder', pathMatch: 'full' },
  { path: 'playfinder', component: PlayfinderComponent },
  { path: 'playfinder/:pitchId/:starts/:ends', component: PlayfinderComponent },
  { path: '**', redirectTo: 'playfinder', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {

}