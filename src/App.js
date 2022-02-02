import quoteImg from "./images/quote-frame.png";
import styled from "styled-components";
import { Quotes } from "./components/Quotes";
import { quotesService } from "./services/quotesService";
import { useState, useEffect, useRef } from "react";

function App() {
  const isMounted = useRef(true);
  const [quoteState, setQuoteState] = useState({
    content: "loading random quote...",
    author: "loading speaker...",
  });
  const onUpdate = async () => {
    const quote = await quotesService();
    if (isMounted.current) {
      setQuoteState(quote);
    }
  };
  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    }
  }, []);

  return (
    <Content>
      <Quotes
        quote={quoteState.content}
        speaker={quoteState.author}
        onUpdate={onUpdate}
      />
      <Background src={quoteImg} alt="Quote frame" />
    </Content>
  );
}
const Content = styled.div`
  height: 600px;
  margin: 200px 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Background = styled.img`
  position: fixed;
  z-index: -2;
  top: 5px;
  heigth: auto;
  width: 70vw;
`;
export default App;
