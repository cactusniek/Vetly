import React from 'react'

import { useAtom } from 'jotai'
import { searchBarActiveAtom } from './globals/atoms'

// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

import './styles/global.scss'

// components:
import Search from './components/Search'
import Medicine from './components/Medicine'

function App() {
    const [searchBarActive, setSearchBarActive] = useAtom(searchBarActiveAtom)

    return (
        <div className="widget">
            <Search />

            {/* THIS must go up / ALL Results must go up */}

            {/* <div className={`container-search-bar ${searchBarActive || searchBarValue.length > 0 ? 'shift' : ''}`}> */}
            {/* "container-results" */}

            <div className={`container-results ${searchBarActive ? 'shift' : ''}`}>
                <Medicine />

                {/* Loading spinner here */}
            </div>

            {/* <DotLottieReact src="https://lottie.host/bb727232-fdd0-41c8-9590-4febb07ca6b6/kagK7Konq6.lottie" stateMachineId="StateMachine1" /> */}
        </div>
    )
}

export default App

// use URL params to change colors when loading in
