import { useEffect, useState } from "react";

const fakeUsers = [
   { id: 1, name: "Alice" },
   { id: 2, name: "Bob" },
   { id: 3, name: "Charlie" },
];

const getFakeUsers = () => {
   return new Promise((resolve) => {
      setTimeout(() => resolve(fakeUsers), 2000);
   });
};

const updateFakeUserName = (users, id, name) => {
   const updatedUsers = users.map((user) => {
      if (user.id === id) {
         return { ...user, name };
      } else {
         return user;
      }
   });

   return new Promise((resolve) => {
      setTimeout(() => resolve(updatedUsers), 2000);
   });
};

const List = ({ list, onUpdateName }) => {
   return (
      <ul>
         {list.map((item) => (
            <Item key={item.id} item={item} onUpdateName={onUpdateName} />
         ))}
      </ul>
   );
};

const Item = ({ item, onUpdateName }) => {
   const [name, setName] = useState(item.name);
   const handleNameChange = (e) => {
      setName(e.target.value);
   };
   useEffect(() => {
      setName(item.name)
   }, [item])
   return (
      <li>
         {item.name}
         <input type="text" value={name} onChange={handleNameChange} />
         <button onClick={() => onUpdateName(item, name)}>Update</button>
      </li>
   );
};

const App = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const fetchUsers = async () => {
         const data = await getFakeUsers();
         setUsers(data);
      };
      fetchUsers();
   }, []);

   const handleUpdateName = async (item, name) => {
      const newUsers = await updateFakeUserName(users, item.id, name);
      setUsers(newUsers);
   };
   return (
      <div>
         <h1>Change Your Currency</h1>
         <List list={users} onUpdateName={handleUpdateName} />
      </div>
   );
};
export default App;
