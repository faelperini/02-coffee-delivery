import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Routes"
import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"

export function App() {
   return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyle />
         <BrowserRouter>
            <CartContextProvider>
               <Router />
            </CartContextProvider>
         </BrowserRouter>
      </ThemeProvider>
   )
}