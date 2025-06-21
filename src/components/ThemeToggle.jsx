import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"



export const ThemeToggle = () => {
    const [isdarkmode, setisDarkmode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setisDarkmode(true)
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light")
            setisDarkmode(false)
        }
    }, [])
    const ToggleTheme = () => {
        if (isdarkmode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setisDarkmode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setisDarkmode(true)
        }

    }


    return <button onClick={ToggleTheme} className={cn("fixed right-5 max-sm:hidden p-2 top-5 z-50 rounded-full transition-colors duration-300",
        "focus:outline-none"
    )}>

        {isdarkmode ?
            <Sun className="h-6 w-6 text-yellow-300" />

            :

            <Moon className="h-6 w-6 text-blue-900" />}</button>
}