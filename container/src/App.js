import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

// const generateClassName = createGenerateClassName({
//     productionPrefix: 'co'
// })

export default function App() {
    return (
        // <StylesProvider>
            <BrowserRouter>
                <div>
                    <Header/>        
                    <MarketingApp/>
                </div>
            </BrowserRouter>
        // </StylesProvider>
    )
}