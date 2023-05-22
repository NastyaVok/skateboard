import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import ProductTitle from './ProductTitle';

const data = {
    name: 'name',
    category: 'category',
    price: 100,
};

describe('Ajax', () => {

    it('Render name', async () => {
        render(<ProductTitle props={data}/>);

        expect(await screen.findByText(/name/)).toBeInTheDocument();
    });

});