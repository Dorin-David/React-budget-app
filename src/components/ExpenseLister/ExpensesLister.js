import ExpenseCard from './ExpenseCard';
import classes from './ExpenseList.module.css';

const expensesLister = props => {
  let list = props.expensesList;
  return (
      <div className={classes.List}>
          <div className={classes.Title}>
          <p>Voice</p>
          <p>Expense</p>
          <div></div>
          </div>
          {list.map((element, index) => <ExpenseCard  expenseVoice={element.info} expense={element.cost} 
                                            edit={() => props.editExpense(element.info)} 
                                            delete={() => props.deleteExpense(element.info)} key={element.info + index}/>)}
      </div>
  )

}

export default expensesLister