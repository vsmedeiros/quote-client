import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { quotesService } from '.';
const response = {test: 'testing'};
const server = setupServer(
    rest.get('https://api.quotable.io/random', (req, res, ctx) => {
        return res(ctx.json(response));
    })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test('transform json response into object', async () => {
    const quote = await quotesService();
    expect(quote).toStrictEqual(response);
});