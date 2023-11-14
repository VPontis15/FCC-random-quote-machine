import ButtonsContainer from "./ButtonsContainer";
import data from "../Data/data.json";
import { useState } from "react";
<<<<<<< HEAD
import getRandomNumber from "../util/getRandomNumber";
import getRandomColor from "../util/getRandomColor";
const { quotes } = data;

function QuoteBox({ color, onGetRandomColor }) {
  const [quote, setQuote] = useState(quotes[getRandomNumber(quotes.length)]);

  function handleChangeQuote() {
    setQuote(quotes[getRandomNumber(quotes.length)]);
    onGetRandomColor(getRandomColor());
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        padding: "2.5em 2.75em",
        display: "flex",
        flexDirection: "column",
        fontWeight: "500",
        transition: "all 1s",
      }}
      id="quote-box"
    >
      <span
        id="text"
        style={{
          fontSize: "1.75rem",
          transition: "all 1s",
          textAlign: "center",
          color: color,
          marginBottom: ".75rem",
        }}
      >
        {quote.quote}
      </span>
      <span
        id="author"
        style={{
          textAlign: "right",
          marginBottom: "1.75rem",
          color: color,
          transition: "all 1s",
        }}
      >
        - {quote.author}
      </span>
      <ButtonsContainer
        onGetRandomColor={onGetRandomColor}
        color={color}
        onHandleChangeQuote={handleChangeQuote}
      />
=======
const { quotes } = data;

function QuoteBox() {
  const [quote, setQuote] = useState(quotes[1]);
  console.log(quotes);
  return (
    <div
      style={{
        paddingBlock: "1em",
        maxWidth: "100%",
        padding: "1.5em",
        display: "grid",
      }}
      id="quote-box"
    >
      <h2 style={{ maxWidth: "55ch", textAlign: "center" }}>{quote.quote}</h2>
      <span style={{ textAlign: "right", marginBottom: "1.75rem" }}>
        {quote.author}
      </span>
      <ButtonsContainer />
>>>>>>> 23c13cde7ab5454e827d044fd7145ecd68426fc8
    </div>
  );
}

export default QuoteBox;
