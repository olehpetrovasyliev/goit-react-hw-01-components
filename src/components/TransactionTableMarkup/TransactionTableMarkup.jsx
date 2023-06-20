import {
  TableR,
  TransactionsDash,
} from 'components/Transactions/transactionsStyled';
import propTypes from 'prop-types';

export const TransactionMarkup = ({ id, type, amount, currency }) => {
  return (
    <TableR key={id}>
      <TransactionsDash>{type}</TransactionsDash>
      <TransactionsDash>{amount}</TransactionsDash>
      <TransactionsDash>{currency}</TransactionsDash>
    </TableR>
  );
};
TransactionMarkup.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};
