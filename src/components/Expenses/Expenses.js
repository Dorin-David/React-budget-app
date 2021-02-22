import React from 'react';
import classes from './Expenses.module.css'

const expenses = props => (<div className={classes.Container}>
                            <h3>Please insert your expense</h3>
                            <input type='number' onChange={props.updateExpense} step='100' value={props.currentExpense}/>
                            <h3>Please insert your expense description</h3>
                            <input type='text' onChange={props.updateExpenseVoice}step='100' value={props.currentExpenseVoice}/>
                            <button onClick={props.passExpense}>Add Expense</button>
                        </div>)


export default expenses