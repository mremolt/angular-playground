import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  describe('as Class', () => {
    let subject: AppComponent;

    beforeEach(() => {
      subject = new AppComponent();
    });

    it('should initialize', () => {
      expect(subject).toBeDefined();
    });

    it('should set title', () => {
      expect(subject.title).toBe('angular-playground');
    });
  });

  describe('as Component', () => {
    it('should render title', async () => {
      await render(AppComponent);

      expect(screen.getByText('angular-playground app is running!')).toBeInTheDocument();
    });
  });
});
