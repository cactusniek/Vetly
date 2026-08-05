import { useState, useEffect } from 'react'

export function useScreenTooSmall() {
    const checkSize = () => window.innerWidth < 800 || window.innerHeight < 500

    const [tooSmall, setTooSmall] = useState(checkSize)

    useEffect(() => {
        const handleResize = () => setTooSmall(checkSize())

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return tooSmall
}
