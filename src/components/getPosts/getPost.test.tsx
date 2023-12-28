import { screen, fireEvent, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../../store';
import App from '../../App';
import { renderWithRouter } from '../../test.utils';

const api = require('../../services/pokemon');

test('component renders', async () => {
    const api = require('../../services/pokemon');
    const mockData = { 
            users : [
                {
                    userId : 1,
                    userName : 'rakesh',
                    _id : '1',
                    __v : 0
        
                },
                {
                    userId : 2,
                    userName : 'ramesh',
                    _id : '2',
                    __v : 1
                }
              ]
        };

    api.useGetUsersQuery = jest.fn(() => ({ 
        data : mockData, 
        isLoading : true,
        isSuccess : true
    
    }));

    
    
    
    renderWithRouter(
            <Provider store = { store}> 
                <App/>
            </Provider>);

    

    await waitFor(() => {
        expect(screen.getByText(/rakesh/i)).toBeInTheDocument();
        expect(screen.getByText(/ramesh/)).toBeInTheDocument();
    })

    const button = screen.getByText(/Add Player/);
    
    
    console.log(window.location.href);
    await fireEvent.click(button);

    console.log(window.location.href);
    expect(screen.getByText(/Player Id :/i)).toBeInTheDocument();

});


