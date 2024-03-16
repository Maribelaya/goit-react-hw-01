// const TransactionHistory = (transactions) => {
//   // const transactions = [];
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map((id, type, amount, currency) => (
//           <tr key={id}>
//             <td>{type}</td>
//             <td>{amount}</td>
//             <td>{currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionHistory;

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
