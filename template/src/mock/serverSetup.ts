import { setupServer } from 'msw/node';
import handlers from './handlers';

const server = setupServer(...handlers /*anotherHandler*/);

export { server };
