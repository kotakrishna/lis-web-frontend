import { render } from '@testing-library/react';

import ClientModule from './client-module';

describe('ClientModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientModule />);
    expect(baseElement).toBeTruthy();
  });
});
