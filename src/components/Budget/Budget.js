import React from 'react';
import classes from './Budget.module.css';

const budget = props => (<div className={classes.Container}>
                            <h3>Please insert your budget</h3>
                            <input type='number'onChange={props.updateBudget} step='100' value={props.budget}/>
                            <button onClick={props.passBudget}>Add Budget</button>
                        </div>)


export default budget