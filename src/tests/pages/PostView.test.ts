import { server } from '@/mock/serverSetup';
import PostView from '@/views/PostView.vue';
import { flushPromises, shallowMount } from '@vue/test-utils';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Post view', () => {
  it('should render', async () => {
    const wrapper = shallowMount(PostView);
    const loader = wrapper.find('.loading');
    expect(loader.exists()).toBe(true);

    await flushPromises();

    const cardsWrapper = wrapper.find('.cards-wrapper');
    const cards = cardsWrapper.findAll('.card');

    expect(cards.length).toBe(1);
  });
});
