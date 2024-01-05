import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { render } from "@testing-library/react"

import { BrowserRouter } from "react-router-dom"

// test utils file
export const renderWithRouter = (ui : ReactJSXElement, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)  // used to manipulate browsers history stack.It allows you to change the URL of the current window without reloading.
    //This history object is the underlying thing in navigating routes,and routers render content based on URLS.
    //So to provide navigation functionality in tests, history object is needed.
  
    return {
      
      ...render(ui, {wrapper: BrowserRouter}),
    }
  }

  