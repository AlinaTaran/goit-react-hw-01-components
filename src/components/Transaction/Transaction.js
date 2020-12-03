import PropTypes from 'prop-types';
import s from '../Transaction/Transaction.module.css'
export default function Transaction({items}) {
  return (
    <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
    {items.map(({id,type,amount,currency}) => (
      <tr key={id} >
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ))
      }
    </tbody>
  </table>
  )
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
 
}