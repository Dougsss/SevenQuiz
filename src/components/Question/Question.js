import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Options from "../Options/Options";


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) =>{
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div className=" p-5 mx-[5%] sm:mx-[25%] my-24 justify-items-center items-center flex flex-col bg-slate-900 rounded-2xl">
            <p className="">Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2 className=" font-semibold text-xl sm:text-[25px] md:text-[30px] mt-2 text-center">
                {currentQuestion.question}
            </h2>
            <div className=" my-8 w-full sm:w-[80%] lg:w-[60%]">
                {currentQuestion.options.map((option) =>(
                    <Options 
                        option={option} 
                        key={option} 
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button className=" m-2 self-center rounded-3xl border-2 border-purple-600 hover:bg-purple-600 w-[70%] sm:w-1/4 h-11 sm:h-10 text-base sm:text-base"
                    onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>
                    Proximo
                </button>
            )}
        </div>
    )
};

export default Question