import {render,screen,waitFor, fireEvent} from '@testing-library/react';
import AddPost from './addPost';
import { MemoryRouter , Routes, Router, BrowserRouter} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux'
import { store } from '../../store';
import GetPost from '../getPosts/getPost';
import App from '../../App';
import { renderWithRouter } from '../../test.utils';

describe('AddPost Component', () => {
    test('render component', () => {
        renderWithRouter(<Provider store = { store }>
                            <App/>
                        </Provider>, {route : '/add'});
        expect(screen.getByText(/Add/)).toBeInTheDocument();
    });

    test('button clickable', () => {
        renderWithRouter(<Provider store = { store }>
                            <App/>
                        </Provider>, {route : '/add'});
        const button = screen.getByRole('button',{name : /Add/});
        fireEvent.click(button);
    })

    test('navigation', async () => {
        renderWithRouter(<Provider store = { store }>
                            <App/>
                        </Provider>, {route : '/add'});
        const button = screen.getByRole('button',{name : /Add/});
        fireEvent.click(button);
        await waitFor(() => {
            console.log(window.location.href);
            expect(window.location.href).toBe('http://localhost/');
            expect(screen.getByTestId('text')).toBeInTheDocument(); //Here this text is dynamic.So unable to find element using get,find,query methods.So,use TestId.
        });
    })

    test('events handler', async () => {
        const addPlayer = jest.fn(() => {
            console.log('mock function');
        });
        renderWithRouter(<Provider store = { store }>
            <App/>
        </Provider>, {route : '/add'});
       expect(screen.getByText(/Add/)).toBeInTheDocument();

       const button = screen.getByRole('button',{name : /Add/});
   
       button.onclick = addPlayer;
    
       await fireEvent.click(button);
   
       expect(addPlayer).toHaveBeenCalledTimes(1);
    })

})
