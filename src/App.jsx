import * as React from "react";
// topic: children as a function
// also called render prop
// there'll be part 2 of this topic on the later commit
const App = () => (
   <div>
      <h1 style={{ fontSize: "38px", fontWeight: "bold"}}>Change your Currency</h1>
      <h2>US Dollar to Euro:</h2>
      {/* toCurrency is a prop that takes a function returning a component. This function has a prop too. And being used on the returned value */}
      <Amount toCurrency={(amount) => <Euro amount={amount} />} />

      <h2>US Dollar to Pound:</h2>
      <Amount toCurrency={(amount) => <Pound amount={amount} />} />
   </div>
);

const Amount = ({ toCurrency }) => {
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
         {toCurrency(amount)}
      </div>
   );
};

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;

const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;
