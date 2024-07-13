import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Superhero from "./components/Superhero";
import Trending from "./components/Trending";
function App() {
  return (
    <>
      <div className="webBg">
        <Navbar />
        <Intro />
      </div>
      <Trending />
      <Superhero />
    </>
  );
}

export default App;
