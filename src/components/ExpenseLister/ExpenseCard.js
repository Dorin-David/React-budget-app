import React from 'react';
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import classes from './ExpenseList.module.css';


const expenseCard = props => (
    <div className={classes.Card}>
        <p>{props.expenseVoice}</p>
        <p>{props.expense}</p>
        <div className={classes.ButtonWrapper}>
        <FaEdit onClick={props.edit} className={classes.editBtn} title='edit expense'/>
        <MdDelete onClick={props.delete} className={classes.deleteBtn} title='delete expense'/>
        </div>
    </div>)

export default expenseCard