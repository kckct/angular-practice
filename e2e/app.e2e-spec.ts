import { AngularPracticePage } from './app.po';

describe('angular-practice App', () => {
  let page: AngularPracticePage;

  beforeEach(() => {
    page = new AngularPracticePage();
  });

  it(`should display 'todos' in h1`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });

  it(`should display 'What needs to be done?' on 'placeholder' attribute`, () => {
    page.navigateTo();
    expect(page.getPlaceHolder()).toBe('What needs to be done?');
  });
});
