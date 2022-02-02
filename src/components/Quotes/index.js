import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../Button';
export const Quotes = (props) => {
  return (
    <Wrapper>
      <Quote>{props.quote}</Quote>
      <Speaker> {props.speaker}</Speaker>
      <Button onClick={props.onUpdate}>New Quote</Button>
    </Wrapper>
  );
};
Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func
};
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;
const Speaker = styled(Quote)`
  
margin: 30px;
`;
