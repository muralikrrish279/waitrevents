import { WaitreventsPage } from './app.po';

describe('waitrevents App', function() {
  let page: WaitreventsPage;

  beforeEach(() => {
    page = new WaitreventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
