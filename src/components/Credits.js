/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      return <li key={credit.id}>{credit.amount} {credit.description} {new Date(credit.date).toISOString().split('T')[0]}</li>
    });
  }


  let updateEntry = (event) => {
    event.preventDefault();
    const roundedAmount = Number(event.target.amount.value).toFixed(2);
    const newBalance = Number(props.accountBalance) + Number(roundedAmount);
    props.updateBalance([newBalance.toFixed(2)]);


    const credit = {
      id: props.credits.length + 1,
      description: event.target.description.value,
      amount: roundedAmount,
      date: new Date()
    }

    props.addCredit(credit);
  }
  return (
    <div>
      <h1>Credits</h1>
      <AccountBalance accountBalance={props.accountBalance}/>
      {creditsView()}

      <form onSubmit={updateEntry}>
        <input type="text" name="description" />
        <input type="number" min="0"  step="any" name="amount" />
        <button type="submit">Add Credit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits; 
