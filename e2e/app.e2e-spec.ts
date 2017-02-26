import { AngularMdlA4AngularCliPage } from './app.po';

describe('angular-mdl-a4-angular-cli App', () => {
  let page: AngularMdlA4AngularCliPage;

  beforeEach(() => {
    page = new AngularMdlA4AngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
