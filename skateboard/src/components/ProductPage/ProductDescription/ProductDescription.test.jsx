import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import ProductDescription from './ProductDescription';

describe('Ajax', () => {
    it('Render description', async () => {
        render(<ProductDescription />);

        expect(await screen.findByText(/Описание/)).toBeInTheDocument();
    });
});