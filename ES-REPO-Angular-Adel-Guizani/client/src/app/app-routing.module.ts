import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatieresComponent } from './matieres/matieres.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", data: { breadcrumb: 'home' }, component: HomeComponent },

  { path: "matieres/:id", data: { breadcrumb: 'home' }, component: MatieresComponent },

  { path: "matieres/:id/:name", component: MatiereComponent },

  { path: "apropos", component: AproposComponent },

  { path: "**", component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
