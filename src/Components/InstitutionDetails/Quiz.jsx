import { useState, useMemo, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "../Loaders/LoadingSpinner";
import "./Quiz.scss";
import { useSearchParams } from "react-router-dom";

const Quiz = ({ quizes, isLoading }) => {
  const [quizAnswers, setQuizAnswers] = useState(
    new Array(quizes?.length).fill(null)
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const userId = searchParams.get("user_id");

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
      "https://back.nsu-railway.uz/account/create-quiz/",
      data
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postQuiz,
    onSuccess: () => {
      setQuizSubmitted(true);
      setTimeout(() => {
        setQuizSubmitted(false);
      }, 3000);
    },
    onError: (error) => {
      console.error("Error submitting quiz:", error);
    },
  });

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.access) {
      setSearchParams({ auth: true });
      return;
    }
    const result_quizzes = quizes?.map((item, index) => ({
      question: item?.id,
      option: quizAnswers[index],
    }));
    mutation.mutate({
      customer: searchParams.get("user_id") || user?.id,
      result_quizzes,
    });
  };

  useEffect(() => {
    if (userId) {
      const section = document.getElementById("quiz");
      console.log(section);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  }, [userId]);

  if (isLoading) {
    return (
      <div className="quiz-section" data-aos="fade-up">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="quiz-section" id="quiz">
      <h2>{"So'rovnoma"}</h2>
      <form onSubmit={handleQuizSubmit}>
        <div className="quiz-grid">
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <p>{question}</p>
              <div className="options">
                {["Ha", "Yo'q"].map((option, optionIndex) => (
                  <label key={optionIndex} className="option">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={String(optionIndex + 1)}
                      onChange={() =>
                        handleQuizAnswer(index, String(optionIndex + 1))
                      }
                      required={optionIndex === 0}
                    />
                    <span className="option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="submit-container">
          <motion.button
            type="submit"
            className="btn btn-submit"
            disabled={mutation.isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mutation.isPending ? (
              <LoadingSpinner isMini />
            ) : (
              "Javoblarni jo'natish"
            )}
          </motion.button>
        </div>
      </form>

      <AnimatePresence>
        {quizSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="feedback"
          >
            <div className="feedback-message">
              <p>Javoblaringiz muvaffaqiyatli yuborildi. Rahmat!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
