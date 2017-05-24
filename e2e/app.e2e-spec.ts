import { BiaCmsFrontendPage } from './app.po';

describe('bia-cms-frontend App', function() {
  let page: BiaCmsFrontendPage;

  beforeEach(() => {
    page = new BiaCmsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
