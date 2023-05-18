import "./App.css";
import PrimaryButton from "./components/Buttons";
import SecondaryButton from "./components/Buttons/SecondaryButton";

function App() {
  return (
    <>
      <nav className="nav">
        <SecondaryButton children="Contact us" />
        <PrimaryButton children="Signup" />
      </nav>
    </>
  );
}

export default App;
