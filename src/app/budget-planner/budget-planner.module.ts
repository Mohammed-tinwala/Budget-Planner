import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { LastProfileComponent } from './last-profile/last-profile.component';




@NgModule({
  declarations: [
    LoginComponent,
    SideNavComponent,
    DashboardComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoComponent,
    HistoryComponent,
    LastProfileComponent,

  ],
  imports: [
    CommonModule,
    BudgetPlannerRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    
  ]
})
export class BudgetPlannerModule { }
