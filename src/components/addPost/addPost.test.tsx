import {render,screen,waitFor, fireEvent} from '@testing-library/react';
import AddPost from './addPost';
import { MemoryRouter , Routes, Router, BrowserRouter} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux'
import { store } from '../../store';
import GetPost from '../getPosts/getPost';
import App from '../../App';
import { renderWithRouter } from '../../test.utils';




test('render add Player Component', async() => {
     
const addPlayer = jest.fn(() => {
        console.log('mock function');
   });

    renderWithRouter(<Provider store = { store }>
                          <App/>
                    </Provider>, {route : '/add'}
    );

    expect(screen.getByText(/Add/)).toBeInTheDocument();

    const button = screen.getByRole('button',{name : /Add/});

    button.onclick = addPlayer;

   

    console.log(window.location.href);
 
    await fireEvent.click(button);

    expect(addPlayer).toHaveBeenCalledTimes(1);
    
    await waitFor(() => {
      
        console.log(window.location.href);
        expect(window.location.href).toBe('http://localhost/');
        expect(screen.getByTestId('text')).toBeInTheDocument(); //Here this text is dynamic.So unable to find element using get,find,query methods.So,use TestId.
    
    })
   
    
    
   

});