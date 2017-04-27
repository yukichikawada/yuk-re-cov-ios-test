import { IOSCovalentTestPage } from './app.po';

describe('i-os-covalent-test App', () => {
  let page: IOSCovalentTestPage;

  beforeEach(() => {
    page = new IOSCovalentTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
