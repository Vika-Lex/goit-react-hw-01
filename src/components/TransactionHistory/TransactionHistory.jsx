import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const { type, amount, currency } = items;

  return (
    <>
      <table className={style.tab}>
        <thead>
          <tr>
            <th className={style.title}>Type</th>
            <th className={style.title}>Amount</th>
            <th className={style.title}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={style.cell}>{type}</td>
              <td className={style.cell}>{amount}</td>
              <td className={style.cell}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
