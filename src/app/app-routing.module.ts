import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';


const routes: Routes = [
  {path: 'budget-planner',
  loadChildren: () => import('./budget-planner/budget-planner.module').then(m => m.BudgetPlannerModule)},
  {path: 'login',  component: LoginComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
