<<<<<<< HEAD
import { useEffect, useState } from "react";
import QuoteBox from "./features/QuoteBox";
import getRandomColor from "./util/getRandomColor";
import Footer from "./features/Footer";

function App() {
  const [color, setColor] = useState(getRandomColor());

  useEffect(
    function () {
      document.body.style.backgroundColor = `${color}`;
      document.body.style.transition = "all 1s";
    },
    [color]
  );

  return (
    <>
      <div style={{ maxWidth: "450px", backgroundColor: "#fff" }}>
        <QuoteBox onGetRandomColor={setColor} color={color} />
      </div>{" "}
      <Footer />
    </>
=======
import QuoteBox from "./features/QuoteBox";

function App() {
  return (
    <div style={{ maxWidth: "550px", backgroundColor: "#fff" }}>
      <QuoteBox />
    </div>
>>>>>>> 23c13cde7ab5454e827d044fd7145ecd68426fc8
  );
}

export default App;
