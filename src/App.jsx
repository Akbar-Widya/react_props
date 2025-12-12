const userList = [
   { id: 1, name: "Alice" },
   { id: 2, name: "Bob" },
   { id: 3, name: "Charlie" },
]

const App = () => {
   return <List users={userList} />;
};

const List = ({ users }) => {
   return <ul>{users.map(user => <Item key={user.id} id={user.id}>{user.name}</Item>)}</ul>;
};

const Item = ({id, children}) => {
   return <p>{id} {children}</p>
}

export default App;

// topic: react props pitfalls
// react props key is undefined, can't read of id
// the solution is to pass id as a separate prop, because key is not passed as a prop, just a list item identifier
