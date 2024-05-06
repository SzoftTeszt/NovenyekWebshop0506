import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovenyekComponent } from './novenyek/novenyek.component';
import { PlantsAdminComponent } from './plants-admin/plants-admin.component';

const routes: Routes = [
  {path:"Plants", component:NovenyekComponent},
  {path:"AdminPlants", component:PlantsAdminComponent},
  {path:"", component:NovenyekComponent},
  {path:"**", component:NovenyekComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
