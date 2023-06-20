import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    return (
        <div className=" p-5 mx-36 my-24 justify-items-center items-center flex flex-col bg-slate-900 rounded-2xl">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2 className=" font-semibold text-2xl sm:text-5xl md:text-[30px] mt-2 text-center">
                {currentQuestion.question}
            </h2>
            <div className=" my-8">
                <p>Opcoes</p>
            </div>
            <button className=" m-5 self-center rounded-3xl border-2 border-purple-600 hover:bg-purple-600 w-1/4 sm:h-10 text-xs sm:text-base"
                onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>
                Proximo
            </button>
        </div>
    )
};

export default Question