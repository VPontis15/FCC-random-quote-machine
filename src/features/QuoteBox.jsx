import ButtonsContainer from "./ButtonsContainer";
import data from "../Data/data.json";
import { useState } from "react";
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
    </div>
  );
}

export default QuoteBox;
