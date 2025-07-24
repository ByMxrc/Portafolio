import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

const routes: Routes = [
  { path: 'estudiantes', component: EstudianteComponent },
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }