import React from 'react'

// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import './styles/global.scss'

// components:
import Search from './components/Search'
import Result from './components/Result'

function App() {
    return (
        <div className="App">
            <Search />

            <Result />

            {/* <DotLottieReact src="https://lottie.host/bb727232-fdd0-41c8-9590-4febb07ca6b6/kagK7Konq6.lottie" stateMachineId="StateMachine1" /> */}
        </div>
    )
}

export default App

// use URL params to change colors when loading in
