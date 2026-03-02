import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SpiderManContextType {
    isSpiderman: boolean;
    toggleSpiderman: () => void;
}

const SpiderManContext = createContext<SpiderManContextType>({
    isSpiderman: false,
    toggleSpiderman: () => { },
});

export const useSpiderMan = () => useContext(SpiderManContext);

export const SpiderManProvider = ({ children }: { children: ReactNode }) => {
    // Always start as false (retro mode) on every page load/refresh
    const [isSpiderman, setIsSpiderman] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isSpiderman) {
            root.classList.add("spiderman");
        } else {
            root.classList.remove("spiderman");
        }
    }, [isSpiderman]);

    const toggleSpiderman = () => setIsSpiderman((prev) => !prev);

    return (
        <SpiderManContext.Provider value={{ isSpiderman, toggleSpiderman }}>
            {children}
        </SpiderManContext.Provider>
    );
};
