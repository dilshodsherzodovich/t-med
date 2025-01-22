import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Sparkles } from "lucide-react";
import "./CreativeClientPreferenceQuiz.scss";
import { Link } from "react-router-dom";

const questions = [
  "Do you prefer digital communication over traditional methods?",
  "Is sustainability important in your business decisions?",
  "Are you interested in AI-driven solutions?",
  "Do you value real-time data analytics?",
  "Is global market expansion a priority for your company?",
];

function CreativeClientPreferenceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = useCallback((answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestion((prevQuestion) => {
      if (prevQuestion < questions.length - 1) {
        return prevQuestion + 1;
      } else {
        setShowSummary(true);
        return prevQuestion;
      }
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowSummary(false);
  }, []);

  return (
    <div className="creative-quiz">
      <h1>{"Onlayn So'rovnoma"}</h1>
      {!showSummary ? (
        <div className="question-container">
          <div className="progress-bar">
            <motion.div
              className="progress"
              initial={{ width: 0 }}
              animate={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="question-content"
            >
              <h2 id={`question-${currentQuestion}`}>
                {questions[currentQuestion]}
              </h2>
              <div
                className="answer-buttons"
                role="group"
                aria-labelledby={`question-${currentQuestion}`}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(true)}
                  className="answer-button yes"
                  aria-label="Ha"
                >
                  <CheckCircle />
                  <span>Ha</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(false)}
                  className="answer-button no"
                  aria-label="Yo'q"
                >
                  <XCircle />
                  <span>{"Yo'q"}</span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="summary-container"
        >
          <h2>{"Sizning javoblaringiz"}</h2>
          <div className="summary-grid">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`summary-card d-flex flex-column justify-content-between ${
                  answers[index] ? "yes" : "no"
                }`}
              >
                <p>{question}</p>
                <div className="answer-indicator ">
                  <span>{answers[index] ? "Ha" : "Yo'q"}</span>
                  <div
                    className={`icon-container ${
                      answers[index] ? "yes" : "no"
                    }`}
                  >
                    {answers[index] ? <CheckCircle /> : <XCircle />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="reset-button-container">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="reset-button"
              >
                <ArrowRight />
                <span>Bosh sahifaga qaytish</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
      <div className="footer-review">
        <Sparkles />
        <span>Sizning fikringiz xizmatlarimiz yaxshilanishi uchun muhim!</span>
      </div>
    </div>
  );
}

export default CreativeClientPreferenceQuiz;
