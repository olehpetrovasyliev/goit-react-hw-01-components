import {
  TableR,
  TransactionsDash,
} from 'components/Transactions/transactionsStyled';

export const TransactionMarkup = ({ id, type, amount, currency }) => {
  return (
    <TableR key={id}>
      <TransactionsDash>{type}</TransactionsDash>
      <TransactionsDash>{amount}</TransactionsDash>
      <TransactionsDash>{currency}</TransactionsDash>
    </TableR>
  );
};
