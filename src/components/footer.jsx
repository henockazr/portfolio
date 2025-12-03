import { Day, Date } from "./adds/Clock"

export default function footer() {
    const day = Day();
    const date = Date();
    return (
        <div id='footer' className="lg:mx-20">
            <div className="flex justify-center lg:mb-2">
                <p className="text-stone-200 text-xl">
                    <span className="relative h-3 w-3">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 items-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        </span>
                    </span> OPEN TO WORK</p>
            </div>
            <div className="flex justify-center">
                <div className="mb-6 mt-2 p-6 px-8 lg:mb-0 text-center border-stone-800 border-2 rounded-md">
                    <p className="text-stone-100 text-2xl font-serif transition duration-700 ease-in-out hover:scale-95"><a href="mailto:azrielhenock@yahoo.com">azrielhenock@yahoo.com</a></p>
                </div>
            </div>
            <div className="h-20 mb-2 lg:mb-0 text-center lg:flex justify-between items-center px-10 lg:px-36">
                <p className="text-stone-400 text-xl font-sans">{day.slice(0, 2)}<p className="animate-pulse inline text-2xl">:</p>{day.slice(3,5)}. {day.slice(5,9) + ", " + date.slice(0,7)}.</p>
                <p className="text-stone-400 text-xl">&copy; Azriel Henock {date.slice(-4)}</p>
            </div>
        </div>
    )
}
