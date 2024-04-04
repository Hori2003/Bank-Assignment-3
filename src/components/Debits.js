/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      return <li key={debit.id}>{debit.amount} {debit.description} {new Date(debit.date).toISOString().split('T')[0]}</li>
    });
  }


  let updateEntry = (event) => {
    event.preventDefault();
    props.updateBalance([props.accountBalance - event.target.amount.value]);

    const debit = {
      id: props.debits.length + 1,
      description: event.target.description.value,
      amount: event.target.amount.value,
      date: new Date()
    }

    props.addDebit(debit);
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      <AccountBalance accountBalance={props.accountBalance}/>
      {debitsView()}

      <form onSubmit={updateEntry}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;