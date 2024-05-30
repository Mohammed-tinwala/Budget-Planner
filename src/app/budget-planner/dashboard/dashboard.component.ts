import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Income Data
  lastMonthIncome = ['January: $1000', 'Febuarary: $1500', 'March: $1200'];
  currentMonthIncome = '$2000';

  // Expense
  lastMonthExpense = ['January: $800', 'Febuarary: $1000', 'March: $1200'];
  currentMonthExpense = '$1500';

  //ToDo Trans
  todotransactions = [
    { description: 'Pay Electricity bill' },
    { description: 'Submit monthly report' },
    { description: 'Buy groceries' },
    { description: 'Call insurance company' },
  ]

  totalCurrentMonthIncome = 2000;
  totalCurrentMonthExpense = 1500;

  constructor(public router: Router) { }

  onIncome() {
    this.router.navigate(['/budget-planner/income'])
  }

  onExpense() {
    this.router.navigate(['/budget-planner/expense'])
  }

  onTodo() {
    this.router.navigate(['/budget-planner/todo'])
  }

  get CurrentMonthSavings():number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }


 
}
