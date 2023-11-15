import ButtonsContainer from "./ButtonsContainer";
import data from "../Data/data.json";
import { useState } from "react";
import getRandomNumber from "../util/getRandomNumber";
import getRandomColor from "../util/getRandomColor";
import styled from "styled-components";
const { quotes } = data;

const transition = "all 1.5s";

const Card = styled.div`
  max-width: 100%;
  padding: 2.5em 2.75em;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  transition: ${transition};
`;

const Quote = styled.span`
  font-size: 1.75rem;
  text-align: center;
  color: ${(props) => props.color};
  margin-bottom: 0.75rem;
  transition: ${transition};
`;

const Author = styled.span`
  text-align: right;
  margin-bottom: 1.75rem;
  color: ${(props) => props.color};
  transition: ${transition};
`;

function QuoteBox({ color, onGetRandomColor }) {
  const [quote, setQuote] = useState(quotes[getRandomNumber(quotes.length)]);

  function handleChangeQuote() {
    setQuote(quotes[getRandomNumber(quotes.length)]);
    onGetRandomColor(getRandomColor());
  }

  return (
    <Card id="quote-box">
      <Quote color={color} id="text">
        {quote.quote}
      </Quote>
      <Author color={color} id="author">
        - {quote.author}
      </Author>
      <ButtonsContainer
        onGetRandomColor={onGetRandomColor}
        color={color}
        onHandleChangeQuote={handleChangeQuote}
      />
    </Card>
  );
}

export default QuoteBox;
