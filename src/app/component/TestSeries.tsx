import { useState } from 'react';

const TestSeries = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions = [
    {
      questionText: 'Which data structure uses LIFO (Last In First Out) method?',
      options: [
        { answerText: 'Queue', isCorrect: false },
        { answerText: 'Stack', isCorrect: true },
        { answerText: 'Linked List', isCorrect: false },
        { answerText: 'Tree', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is a front-end framework?',
      options: [
        { answerText: 'Node.js', isCorrect: false },
        { answerText: 'Django', isCorrect: false },
        { answerText: 'React.js', isCorrect: true },
        { answerText: 'Flask', isCorrect: false },
      ],
    },
    {
      questionText: 'In SQL, which command is used to retrieve data from a database?',
      options: [
        { answerText: 'INSERT', isCorrect: false },
        { answerText: 'UPDATE', isCorrect: false },
        { answerText: 'DELETE', isCorrect: false },
        { answerText: 'SELECT', isCorrect: true },
      ],
    },
    {
      questionText: 'Which of the following is used for machine learning in Python?',
      options: [
        { answerText: 'NumPy', isCorrect: false },
        { answerText: 'Pandas', isCorrect: false },
        { answerText: 'Scikit-learn', isCorrect: true },
        { answerText: 'Matplotlib', isCorrect: false },
      ],
    },
    // Add more questions relevant to BTech CSE as needed
  ];

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setSelectedOption(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-green-50 border border-teal-300 rounded-lg shadow-md">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Test Completed</h2>
          <p className="text-lg text-teal-600 mb-4">
            You scored {score} out of {questions.length}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Retake Test
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-teal-700 mb-4">BTech CSE Knowledge Check</h2>
          <div className="text-lg text-teal-600 mb-4">
            Question {currentQuestion + 1} / {questions.length}
          </div>
          <div className="text-xl text-teal-800 mb-6">
            {questions[currentQuestion].questionText}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`p-4 border rounded-lg transition-colors duration-300 ${
                  selectedOption === index
                    ? 'bg-teal-600 text-white'
                    : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                }`}
                onClick={() => {
                  setSelectedOption(index);
                  handleAnswerOptionClick(option.isCorrect);
                }}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestSeries;
