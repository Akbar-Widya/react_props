import * as React from "react";
// topic: children as a function
// also called render prop
// there'll be part 2 of this topic on the later commit

const App = () => (
  <div>
    <h1>US Dollar to Euro:</h1>
    <Amount>{(amount) => <Euro amount={amount} />}</Amount>

    <h1>US Dollar to Pound:</h1>
    <Amount>{(amount) => <Pound amount={amount} />}</Amount>
  </div>
);

const Amount = ({ children }) => {
  const [amount, setAmount] = React.useState(0);

  const handleIncrement = () => setAmount(amount + 1);
  const handleDecrement = () => setAmount(amount - 1);

  return (
    <div>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
      <button type="button" onClick={handleDecrement}>
        -
      </button>

      <p>US Dollar: {amount}</p>
      {children(amount)}
    </div>
  );
};

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;