import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.title}>
        <tr className={css.list}>
          <th className={css.item}>Type</th>
          <th className={css.item}>Amount</th>
          <th className={css.item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.data}>
            <td className={css["item-type"]}>{type}</td>
            <td className={css.item}>{amount}</td>
            <td className={css.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
