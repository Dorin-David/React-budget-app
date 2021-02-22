import React, {Component} from 'react';
import Budget from '../../components/Budget/Budget';
import Expenses from '../../components/Expenses/Expenses';
import ExpensesLister from '../../components/ExpenseLister/ExpensesLister';
import Balance from '../../components/Balance/Balance';
import classes from './BudgetManager.module.css';

class BudgetManager extends Component {
    state = {
        budget: '',
        passedBudget: 0,
        currentExpense: '',
        currentExpenseVoice: '',
        totalExpenses: 0,
        expensesList: []
    }  
    updateBudget = (budget) => {
        this.setState({budget: budget.target.value})
    }

    passBudget = (budget) => {
        this.setState(state => ({
            passedBudget: state.budget,
            budget: ''
        }))
   }

    updateCurrentExpense = (expense) => {
        this.setState({currentExpense: expense.target.value});
    }
   
    updateCurrentExpenseVoice = (voice) => {
        // handle case where input is empty
        this.setState({currentExpenseVoice: voice.target.value});
    }

    passCurrentExpense = () => {
        let currentExpenseItem = {
            info: this.state.currentExpenseVoice,
            cost: this.state.currentExpense
        }
        if(currentExpenseItem.info === '' 
          || this.state.expensesList.find(item => item.info === currentExpenseItem.info)){

              return
          }
        this.setState(state => ({
            expensesList: [...state.expensesList, currentExpenseItem],
            totalExpenses: state.totalExpenses + +state.currentExpense,
            currentExpense: '',
            currentExpenseVoice: '', 
        }))
    }

    deleteExpense = expense => {
        let target = this.state.expensesList.find(element => element.info === expense);
        this.setState(state => ({
            expensesList: [...state.expensesList].filter(item => item.info !== expense),
            totalExpenses: state.totalExpenses - target.cost
        }))
    }

    editExpense = expense => {
        let target = this.state.expensesList.find(element => element.info === expense);
        this.setState(state => ({
            currentExpenseVoice: target.info,
            currentExpense: target.cost,
            expensesList: [...state.expensesList].filter(item => item.info !== expense),
            totalExpenses: state.totalExpenses - target.cost
        }))
    }

    render(){
       
        return(
             <div className={classes.MainWrapper}>
                 <Budget updateBudget={this.updateBudget} passBudget={this.passBudget} budget={this.state.budget}/>
                 <Balance budget={this.state.passedBudget} expenses={this.state.totalExpenses} 
                          balance={this.state.passedBudget - this.state.totalExpenses}/>
                 <Expenses updateExpense={this.updateCurrentExpense} 
                           updateExpenseVoice={this.updateCurrentExpenseVoice}
                           passExpense={this.passCurrentExpense}
                           currentExpense={this.state.currentExpense}
                           currentExpenseVoice={this.state.currentExpenseVoice}
                 />  
                  <ExpensesLister expensesList={this.state.expensesList} editExpense={this.editExpense} deleteExpense={this.deleteExpense}/>
                 
             </div>
        )
    }
}


export default BudgetManager