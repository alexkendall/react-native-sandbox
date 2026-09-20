import { render, screen, renderHook } from '@testing-library/react-native';
import { useColorScheme } from 'react-native';

describe('MyComponent', () => {
  test('hook runs', async () => {
    const current = await renderHook(useColorScheme)
    expect(current.result).toBeDefined()
  });
});
