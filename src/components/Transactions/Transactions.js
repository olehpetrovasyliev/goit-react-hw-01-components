import { TransactionMarkup } from 'components/TransactionTableMarkup/TransactionTableMarkup';
import { TransactionsComp } from './transactionsStyled';

export const Transactions = ({ transactionsArr }) => {
  return (
    <TransactionsComp>
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
    </TransactionsComp>
  );
};
