import { useState, useEffect } from "react";

// It's hard to distinguish inside react codebase. The props seems confusing.
// But when you practice the workflow difference between interaction component (reading input) & display component (showing data)
// then the Swiss army knife approach (props) is very convenient. Such a minimum learning curve.
// I mean you don't need to remember many different syntax for different use cases, as long as you understand the workflow difference.
// It's different from other frameworks like Vue or Angular where they have different syntax for different use cases. 

const fakeUsers = [
   {
      id: "1",
      name: "Robin",
   },
   {
      id: "2",
      name: "Dennis",
   },
];

function getFakeUsers() {
   return new Promise((resolve) => setTimeout(() => resolve(fakeUsers), 2000));
}

function App() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const fetchUsers = async () => {
         const data = await getFakeUsers();

         setUsers(data);
      };

      fetchUsers();
   }, []);

   function handleUpdateName(item, name) {
      const newUsers = users.map((user) => {
         if (user.id === item.id) {
            return {
               id: user.id,
               name: name,
            }
         } else {
            return user
         }
      })
      setUsers(newUsers);
   } 

   return (
      <div>
         <h1>Derive State from Props in </h1>

         <List list={users} onUpdateName={handleUpdateName} />
      </div>
   );
}

function List({ list, onUpdateName }) {
   return (
      <ul>
         {list.map((item) => (
            <Item key={item.id} item={item} onUpdateName={onUpdateName} />
         ))}
      </ul>
   );
}

function Item({ item, onUpdateName }) {
   const [name, setName] = useState(item.name);
   function handleNameChange(e) {
      setName(e.target.value);
   }
   return (
      <li>
         <span>{item.name}</span>
         <input type="text" value={name} onChange={handleNameChange} />
         <button onClick={() => onUpdateName(item, name)}>
            Update
         </button>
      </li>
   );
}

export default App;
