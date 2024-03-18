const TransactionHistory = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <TransactionHistory items={transactions} />
    </tbody>
  </table>
);

export default TransactionHistory;
