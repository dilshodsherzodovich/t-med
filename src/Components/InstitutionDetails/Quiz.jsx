import { useMemo, useState } from "react";
import "./quiz.scss";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Loaders/LoadingSpinner";

const Quiz = ({ quizes, isLoading }) => {
  const [quizAnswers, setQuizAnswers] = useState(
    new Array(quizes?.length).fill(null)
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const questions = useMemo(() => {
    if (!quizes?.length) return [];
    return quizes?.map((quiz) => quiz?.title);
  }, [quizes]);

  const handleQuizAnswer = (index, value) => {
    const newAnswers = [...quizAnswers];
    newAnswers[index] = value;
    setQuizAnswers(newAnswers);
  };

  const postQuiz = async (data) => {
    const response = await axios.post(
      "https://nsuback.taskmanager.uz/account/create-quiz/",
      data
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postQuiz,
    onSuccess: () => {
      // if (data?.id) {
      //   formRef.current.reset();
      //   setRaiting(0);
      //   toast.success("Murojaatingiz muvaffaqiyatli yuborildi!", {
      //     theme: "colored",
      //   });
      // }
      setQuizSubmitted(true);
      setTimeout(() => {
        setQuizSubmitted(false);
      }, [3000]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const result_quizzes = quizes?.map((item, index) => ({
      question: item?.id,
      option: quizAnswers[index],
    }));
    mutation.mutate({ result_quizzes });
  };

  return (
    <div className="quiz-section" data-aos="fade-up">
      <h2>So'rovnoma</h2>
      {isLoading ? (
        <div className="quiz-section" data-aos="fade-up">
          <LoadingSpinner />
        </div>
      ) : (
        <form onSubmit={handleQuizSubmit}>
          <div className="row">
            {questions.map((question, index) => (
              <div key={index} className="col-md-6 question-col">
                <p>{question}</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`1-${index}`}
                    name={`question-${index}`}
                    value="1"
                    onChange={() => handleQuizAnswer(index, "1")}
                    required
                  />
                  <label className="form-check-label" htmlFor={`1-${index}`}>
                    Ha
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`2-${index}`}
                    name={`question-${index}`}
                    value="2"
                    onChange={() => handleQuizAnswer(index, "2")}
                  />
                  <label className="form-check-label" htmlFor={`2-${index}`}>
                    Yo'q
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-submit"
              disabled={mutation.isLoading}
            >
              {mutation.isPending ? (
                <LoadingSpinner isMini />
              ) : (
                "Javoblarni jo'natish"
              )}
            </button>
          </div>
        </form>
      )}

      {quizSubmitted && (
        <div className="feedback">
          <div className="feedback-message">
            <p>Javoblaringiz muvaffaqiyatli yuborildi. Rahmat !</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
