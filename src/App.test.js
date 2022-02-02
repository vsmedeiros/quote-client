import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
const response = {speaker: 'Speaker', content: 'test quote'}
const server = setupServer(
  rest.get('https://api.quotable.io/random', (req, res, ctx) => {
      return res(ctx.json(response));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test('renders the app with a button and a quote', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  const imageEl = screen.getByRole('img');
  const textEl = screen.getByText(/loading speaker/);
  
  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
  

});
test('call api on button click and update it s text', async () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);
  const quoteEl = await screen.findByText(response.content);
  expect(quoteEl).toBeInTheDocument();
});
test('call api on statup and renders it response', async () => {
  render(<App />);
  const quoteEl = await screen.findByText(response.content);
  expect(quoteEl).toBeInTheDocument();
})