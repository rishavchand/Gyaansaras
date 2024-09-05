"use client"
import { useState } from 'react';

interface QuestionOption {
  answerText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  options: QuestionOption[];
}

interface Subject {
  id: string;
  name: string;
}

const TestSeries = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const subjects: Subject[] = [
    { id: 'eng_tech', name: 'Engineering & Technology' },
    { id: 'business_mgmt', name: 'Business & Management' },
    { id: 'arts_humanities', name: 'Arts & Humanities' },
    { id: 'healthcare', name: 'Healthcare & Medicine' },
    { id: 'finance_investment', name: 'Finance & Investment' },
    { id: 'digital_marketing', name: 'Digital Marketing' },
    { id: 'law_policy', name: 'Law & Public Policy' },
    { id: 'psych_counseling', name: 'Psychology & Counseling' },
    { id: 'entrepreneurship', name: 'Entrepreneurship & Startups' },
    { id: 'media_communication', name: 'Media & Communication' },
    { id: 'env_science', name: 'Environmental Science' },
    { id: 'education_teaching', name: 'Education & Teaching' },
  ];

  const questions: { [key: string]: Question[] } = {
    eng_tech: [
      {
        questionText: 'Which programming language is most commonly used in web development?',
        options: [
          { answerText: 'Python', isCorrect: false },
          { answerText: 'JavaScript', isCorrect: true },
          { answerText: 'C++', isCorrect: false },
          { answerText: 'Java', isCorrect: false },
        ],
      },
    ],
    business_mgmt: [
      {
        questionText: 'Which of the following is a key component of business strategy?',
        options: [
          { answerText: 'Marketing', isCorrect: true },
          { answerText: 'Operations', isCorrect: false },
          { answerText: 'HR', isCorrect: false },
          { answerText: 'IT', isCorrect: false },
        ],
      },
    ],
    arts_humanities: [
      {
        questionText: 'Who painted the Mona Lisa?',
        options: [
          { answerText: 'Vincent van Gogh', isCorrect: false },
          { answerText: 'Leonardo da Vinci', isCorrect: true },
          { answerText: 'Pablo Picasso', isCorrect: false },
          { answerText: 'Claude Monet', isCorrect: false },
        ],
      },
    ],
    healthcare: [
      {
        questionText: 'Which organ in the human body is responsible for pumping blood?',
        options: [
          { answerText: 'Lungs', isCorrect: false },
          { answerText: 'Heart', isCorrect: true },
          { answerText: 'Liver', isCorrect: false },
          { answerText: 'Kidneys', isCorrect: false },
        ],
      },
    ],
    finance_investment: [
      {
        questionText: 'What is the term for a market condition where stock prices are falling?',
        options: [
          { answerText: 'Bull Market', isCorrect: false },
          { answerText: 'Bear Market', isCorrect: true },
          { answerText: 'Volatile Market', isCorrect: false },
          { answerText: 'Stagnant Market', isCorrect: false },
        ],
      },
    ],
    digital_marketing: [
      {
        questionText: 'Which platform is known for image-based marketing?',
        options: [
          { answerText: 'LinkedIn', isCorrect: false },
          { answerText: 'Instagram', isCorrect: true },
          { answerText: 'Twitter', isCorrect: false },
          { answerText: 'Reddit', isCorrect: false },
        ],
      },
    ],
    law_policy: [
      {
        questionText: 'Which amendment of the U.S. Constitution guarantees freedom of speech?',
        options: [
          { answerText: 'First Amendment', isCorrect: true },
          { answerText: 'Second Amendment', isCorrect: false },
          { answerText: 'Fifth Amendment', isCorrect: false },
          { answerText: 'Tenth Amendment', isCorrect: false },
        ],
      },
    ],
    psych_counseling: [
      {
        questionText: 'Who is considered the father of psychoanalysis?',
        options: [
          { answerText: 'Carl Jung', isCorrect: false },
          { answerText: 'Sigmund Freud', isCorrect: true },
          { answerText: 'Alfred Adler', isCorrect: false },
          { answerText: 'Erik Erikson', isCorrect: false },
        ],
      },
    ],
    entrepreneurship: [
      {
        questionText: 'Which of the following is a key trait of successful entrepreneurs?',
        options: [
          { answerText: 'Risk Aversion', isCorrect: false },
          { answerText: 'Risk Tolerance', isCorrect: true },
          { answerText: 'Complacency', isCorrect: false },
          { answerText: 'Laziness', isCorrect: false },
        ],
      },
    ],
    media_communication: [
      {
        questionText: 'Which social media platform is primarily used for professional networking?',
        options: [
          { answerText: 'Facebook', isCorrect: false },
          { answerText: 'LinkedIn', isCorrect: true },
          { answerText: 'Twitter', isCorrect: false },
          { answerText: 'Instagram', isCorrect: false },
        ],
      },
    ],
    env_science: [
      {
        questionText: 'Which gas is primarily responsible for the greenhouse effect?',
        options: [
          { answerText: 'Oxygen', isCorrect: false },
          { answerText: 'Carbon Dioxide', isCorrect: true },
          { answerText: 'Nitrogen', isCorrect: false },
          { answerText: 'Hydrogen', isCorrect: false },
        ],
      },
    ],
    education_teaching: [
      {
        questionText: 'Which method of teaching emphasizes student-centered learning?',
        options: [
          { answerText: 'Lecture-based', isCorrect: false },
          { answerText: 'Project-based learning', isCorrect: true },
          { answerText: 'Rote memorization', isCorrect: false },
          { answerText: 'Exams-only', isCorrect: false },
        ],
      },
    ],
  };

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[selectedSubject!].length) {
      setCurrentQuestion(nextQuestion);
      setProgress(((nextQuestion + 1) / questions[selectedSubject!].length) * 100);
    } else {
      setShowScore(true);
      setProgress(100);
    }
  };

  const handleSubjectSelection = (subject: string) => {
    setSelectedSubject(subject);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setProgress(0);
  };

  return (
    <div className="test-series-container">
      {!selectedSubject ? (
        <div className="subject-selection">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Select a Subject</h1>
          <div className="grid grid-cols-2 gap-4">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                className="subject-card p-4 bg-teal-200 border border-teal-600 rounded-lg text-center hover:bg-teal-300 text-gray-900"
                onClick={() => handleSubjectSelection(subject.id)}
              >
                <div className="text-4xl mb-2">&#9658;</div>
                <h2 className="text-xl font-semibold">{subject.name}</h2>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="header text-center mb-6">
            <h1 className="text-2xl font-bold text-teal-800">{subjects.find((sub) => sub.id === selectedSubject)!.name} Test</h1>
            <p className="text-lg text-teal-700">Test your knowledge in {subjects.find((sub) => sub.id === selectedSubject)!.name}.</p>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
            <div
              className="bg-teal-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {showScore ? (
            <div className="text-center">
              <div className="text-5xl text-green-600 mb-4">&#10003;</div>
              <h2 className="text-2xl font-bold mb-2">Test Completed</h2>
              <p className="text-lg">You scored <span className="font-bold text-teal-700">{score}</span> out of {questions[selectedSubject].length}</p>
              <div className="mt-6 space-x-4">
                <button className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700" onClick={() => handleSubjectSelection(selectedSubject!)}>
                  Retake Test
                </button>
                <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={() => setSelectedSubject(null)}>
                  Back to Subjects
                </button>
              </div>
            </div>
          ) : (
            <div className="question-section">
              <div className="question-count text-lg font-bold mb-2 text-teal-800">
                Question {currentQuestion + 1}/{questions[selectedSubject].length}
              </div>
              <div className="question-text text-xl font-semibold text-gray-800 mb-4">
                {questions[selectedSubject][currentQuestion].questionText}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {questions[selectedSubject][currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button bg-teal-200 p-4 rounded-lg border border-teal-600 hover:bg-teal-300 text-gray-900"
                    onClick={() => handleAnswerOptionClick(option.isCorrect)}
                  >
                    {option.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TestSeries;
