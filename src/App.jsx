import Cover from "./Cover";
import FriendsList from "./FriendsList";
// import Liton from "./Liton";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Cover></Cover>
      <FriendsList></FriendsList>
      {/* <Liton></Liton> */}
    </div>
  );
}

export default App;

