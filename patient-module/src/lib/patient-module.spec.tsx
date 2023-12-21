import { render } from '@testing-library/react';

import PatientModule from './patient-module';

describe('PatientModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PatientModule />);
    expect(baseElement).toBeTruthy();
  });
});
