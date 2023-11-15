import styled from "styled-components";

const transition = "all 1.5s";

const Link = styled.a`
  background-color: ${(prop) => prop.color};
  color: #fff;
  border-radius: 5px;
  padding: 0.35em 0.25em;
  transition: ${transition};
`;

const QuoteButton = styled.button`
  border: none;
  font-family: inherit;
  cursor: pointer;
  background-color: ${(prop) => prop.color};
  color: #fff;
  padding: 0 1.6em;
  margin-left: auto;
  border-radius: 5px;
  transition: ${transition};
`;

function ButtonsContainer({ onHandleChangeQuote, color, onGetRandomColor }) {
  function handleClick() {
    onHandleChangeQuote;
    onGetRandomColor;
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          id="tweet-quote"
          color={color}
          href="twitter.com/intent/tweet"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="20"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </Link>
        <Link color={color} href="#" target="_blank">
          <svg
            fill="#fff"
            height="30px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnslink="http://www.w3.org/1999/xlink"
            viewBox="0 0 260 260"
            xmlSpace="preserve"
          >
            <path
              d="M210.857,197.545c-1.616-0.872-3.584-0.787-5.119,0.223c-11.62,7.638-23.4,11.511-35.016,11.511
	c-6.242,0-11.605-1.394-16.416-4.275c-3.27-1.936-6.308-5.321-7.397-8.263c-1.057-2.797-1.045-10.327-1.029-20.748l0.005-63.543
	h52.795c2.762,0,5-2.239,5-5V62.802c0-2.761-2.238-5-5-5h-52.795V5c0-2.761-2.238-5-5-5h-35.566c-2.528,0-4.658,1.887-4.964,4.397
	c-1.486,12.229-4.258,22.383-8.247,30.196c-3.89,7.7-9.153,14.401-15.651,19.925c-5.206,4.44-14.118,8.736-26.49,12.769
	c-2.058,0.671-3.45,2.589-3.45,4.754v35.41c0,2.761,2.238,5,5,5h28.953v82.666c0,12.181,1.292,21.347,3.952,28.026
	c2.71,6.785,7.521,13.174,14.303,18.993c6.671,5.716,14.79,10.187,24.158,13.298c9.082,2.962,16.315,4.567,28.511,4.567
	c10.31,0,20.137-1.069,29.213-3.179c8.921-2.082,19.017-5.761,30.008-10.934c1.753-0.825,2.871-2.587,2.871-4.524v-39.417
	C213.484,200.108,212.476,198.418,210.857,197.545z"
            />
          </svg>
        </Link>
      </div>
      <QuoteButton color={color} id="new-quote" onClick={onHandleChangeQuote}>
        New quote
      </QuoteButton>
    </div>
  );
}

export default ButtonsContainer;
