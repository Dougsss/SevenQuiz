import { createContext } from "react";

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = { Name: "Vai Rolar"};

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};