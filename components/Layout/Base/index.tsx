import { NavBar } from "@/components/Navigation/NavBar";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
};

export const BaseLayout = ({children}: Props) => {
    return (
        <div>
            <NavBar />
            <main id="content" className="bg-gray-100  text-gray-800 min-h-screen md:pt-4 md:px-4 sm:px-2 sm:pt-2">
                {children}
            </main>
            
        </div>
    )
};