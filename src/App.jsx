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
  );
}

export default App;
