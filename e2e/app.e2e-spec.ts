import { Angularjs2DemoPage } from './app.po';

describe('angularjs2-demo App', function() {
  let page: Angularjs2DemoPage;

  beforeEach(() => {
    page = new Angularjs2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
