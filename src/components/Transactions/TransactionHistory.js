import PropTypes from 'prop-types';



export const TransactionHistory = ({ items}) => {
    return <div>
        <h2>TransactionHistory</h2>
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
                {items.map((item, idx) =>{
                    return (
                        <TableRow
                            id={item.id}
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                            index={idx}
                        />
                    )
         })}       

  </tbody>
</table>
    </div>
};

const TableRow = ({ type, amount, currency, index }) => {
    return (<tr idx={index}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
  } 