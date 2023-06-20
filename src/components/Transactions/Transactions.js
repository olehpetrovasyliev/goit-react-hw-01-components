import { TransactionMarkup } from 'components/TransactionTableMarkup/TransactionTableMarkup';

export const Transactions = ({ transactionsArr }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionsArr.map(transaction => TransactionMarkup(transaction))}
      </tbody>
    </table>
  );
};
