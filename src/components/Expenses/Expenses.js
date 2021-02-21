import React from 'react';
import classes from './Expenses.module.css'

const expenses = props => (<div className={classes.Container}>
                            <h2>Please insert your expense description</h2>
                            <input type='number' onChange={props.updateExpense} value={props.currentExpense}/>
                            <h2>Please insert your expense</h2>
                            <input type='text' onChange={props.updateExpenseVoice} value={props.currentExpenseVoice}/>
                            <button onClick={props.passExpense}>Add Expense</button>
                        </div>)


export default expenses