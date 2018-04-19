const detox = require('detox');
const config = require('../package.json').detox;

// Set the default test timeout to 120s
jest.setTimeout(120000);

beforeAll(async () => {
  await detox.init(config);
});

afterAll(async () => {
  await detox.cleanup();
});
