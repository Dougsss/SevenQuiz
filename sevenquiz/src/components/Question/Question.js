import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    return (
        <div className="p-20 justify-items-center items-center flex flex-col">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2 className=" font-semibold text-2xl sm:text-5xl md:text-[30px] mt-2">
                {currentQuestion.question}
            </h2>
            <div className=" my-5">
                <p>Opcoes</p>
            </div>
            <button>Proximo</button>
        </div>
    )
};

export default Question