import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { BrowserRouter } from "react-router-dom"

// test utils file
export const renderWithRouter = (ui : ReactJSXElement, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return {
      
      ...render(ui, {wrapper: BrowserRouter}),
    }
  }

  