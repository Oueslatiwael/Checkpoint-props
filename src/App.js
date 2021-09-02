import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = () => {
    alert(user.fullName);
  };
  const user = {
    fullName: "Oueslati Wael",
    bio: "I AM",
    Profession: "Student",
  };

  return (
    <div>
      <Profile d={user} handleName={handleName}>
        <img src="image.jpg" />
      </Profile>
    </div>
  );
}

export default App;
