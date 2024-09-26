import "./App.scss";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Technologies from "./components/technologies/Technologies";
import MyWorks from "./components/my-works/MyWorks";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Technologies />
      <MyWorks />
      <Contact />
    </div>
  );
};

export default App;
