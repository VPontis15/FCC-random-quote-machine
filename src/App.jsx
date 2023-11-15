import { useEffect, useState } from "react";
import QuoteBox from "./features/QuoteBox";
import getRandomColor from "./util/getRandomColor";
import Footer from "./features/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 550px;
  background-color: #fff;
`;

function App() {
  const [color, setColor] = useState(getRandomColor());

  useEffect(
    function () {
      document.body.style.backgroundColor = `${color}`;
      document.body.style.transition = "all 1.5s";
    },
    [color]
  );

  return (
    <>
      <Wrapper>
        <QuoteBox onGetRandomColor={setColor} color={color} />
      </Wrapper>{" "}
      <Footer />
    </>
  );
}

export default App;
