'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkToggle() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) {
        document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }
    }, [dark])

    return (
        <button
        onClick={() => setDark(!dark)}
        className="fixed bottom-4 right-4 p-2 rounded bg-[var(--secondary)] text-[var(--secondary-foreground)] shadow"
        >
        {dark ? <Sun/> : <Moon/>}
        </button>
    )
}
