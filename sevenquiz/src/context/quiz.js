import { createContext } from "react";

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    return <QuizContext.Provider>{children}</QuizContext.Provider>;
};