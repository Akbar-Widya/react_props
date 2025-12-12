import { getImageUrl } from "./utils";

const Avatar = ({ person, size = 100 }) => {
   return (
      <img
         src={getImageUrl(person)}
         alt={person.name}
         className="avatar"
         width={size}
         height={size}
      />
   );
};

const App = () => {
   return (
      <div>
         <Avatar
            size={120}
            person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
         />
         <Avatar
            size={100}
            person={{name: 'Aklilu Lemma', imageId: 'OKS67lh'}}
         />
         <Avatar
            size={80}
            person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
         />
      </div>
   );
};
export default App;
