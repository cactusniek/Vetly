import React from 'react'

// import { useAtom } from 'jotai'
// import { searchBarActiveAtom } from './globals/atoms'

// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import './styles/global.scss'

import Search from './components/Search'
import Medicine from './components/Medicine'

function App() {
    return (
        <div className="widget">
            <Search />

            <div className="medicines">
                <Medicine />
                <Medicine />

                {/* loading spinner: <DotLottieReact src="https://lottie.host/bb727232-fdd0-41c8-9590-4febb07ca6b6/kagK7Konq6.lottie" stateMachineId="StateMachine1" /> */}
            </div>
        </div>
    )
}

export default App

// optional: use URL params to change colors when loading in
