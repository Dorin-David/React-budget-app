import React from 'react';
import {FaMoneyBillWave} from 'react-icons/fa';
import {FaDollarSign} from 'react-icons/fa';
import {BsCreditCard} from 'react-icons/bs';
import classes from './Balance.module.css'

const balance = props => {
     //set logic for balance color
     let color = classes.positiveCounter;
     //right now, if it's less than half, it becomes red
     if(props.balance > 0 && props.balance === props.expenses) {
         color = classes.evenCounter
        } else if(props.balance < props.expenses) {
            color = classes.negativeCounter
        }

    return (
        <div className={classes.Container}>
            <div>
            <h2>Budget</h2>
            <FaMoneyBillWave className={classes.Icons}/>
            <p className={classes.positiveCounter}>{props.budget}</p>
            </div>
            <div>
            <h2>Expenses</h2>
            <BsCreditCard className={classes.Icons}/>
            <p className={classes.negativeCounter}>{props.expenses}</p>
            </div>
            <div>
            <h2>Balance</h2>
            <FaDollarSign className={classes.Icons}/>
            <p className={color}>{props.balance}</p>
            </div>
        </div>
    )
}

export default balance