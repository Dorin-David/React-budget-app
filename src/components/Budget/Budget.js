import React from 'react';
import classes from './Budget.module.css';

const budget = props => (<div className={classes.Container}>
                            <h2>Please insert your budget</h2>
                            <input type='number'onChange={props.updateBudget} value={props.budget}/>
                            <button onClick={props.passBudget}>Add Budget</button>
                        </div>)


export default budget