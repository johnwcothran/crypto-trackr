import Link from "next/link";

export const NavBar = () => {
    return (
        <nav
            className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
        >
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <Link className="text-xl text-white pr-2 font-semibold" href="/">
                    CryptoTrackr
                </Link>
            </div>
        </nav>
    )
}