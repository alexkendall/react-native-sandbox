import { render, screen } from '@testing-library/react-native';

import { MyComponent } from '@/components/MyComponent';

describe('MyComponent', () => {
  test('renders', async () => {
    await render(<MyComponent />);

    expect(screen.getByTestId('my-component')).toBeOnTheScreen();
  });
});
