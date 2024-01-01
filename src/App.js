import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSpring, animated } from 'react-spring';
import GuessingGame from './GuessingGame'; // Adjust the path accordingly


const questions = [
  {
    id: 1,
    question: 'What is the main purpose of Python? מה המטרה המרכזית של פייתון ',
    options: ['Web development פיתוח אתרים', 'Data analysis ניתוח מידע', 'Game development פיתוח משחקים', 'All of the above כל התשובות נכונות'],
    correctAnswer: 'All of the above כל התשובות נכונות',
  },
  {
    id: 2,
    question: 'Which statement is used for conditional execution in Python? איזה פסוק משמש לביצוע פעולה של תנאי כן או לא בפייתון ',
    options: ['if', 'switch', 'for', 'while'],
    correctAnswer: 'if',
  },
  {
    id: 3,
    question: 'What is the extension of a Python source code file? מה הסיומת של קובץ הרצה של פייתון',
    options: ['.py', '.pyc', '.pyo', '.pyw'],
    correctAnswer: '.py',
  },
  {
    id: 4,
    question: 'In Python, how do you define a function? בפייתון איך מגדירים פונקציה',
    options: ['def', 'function', 'define', 'fun'],
    correctAnswer: 'def',
  },
  {
    id: 5,
    question: 'What is the output of 2 + 3 * 4 in Python? מה הפלט של הפעולה הבאה',
    options: ['14', '20', '18', 'error'],
    correctAnswer: '14',
  },
  {
    id: 6,
    question: 'Which data type is used to store a sequence of characters in Python? איזה סוג של אבטיפוס שומר רצפים של אותיות בפייתון',
    options: ['int', 'float', 'str', 'list'],
    correctAnswer: 'str',
  },
  {
    id: 7,
    question: 'What is the purpose of the "pass" statement in Python? מה המטרה של פסס פייתון',
    options: ['To create a loop ליצור לולאה', 'To indicate no action or code block להמחיש אי פעולה או בלוק של קוד', 'To exit a function לצאת מפונקציה ', 'To print a message להדפיס הודעה'],
    correctAnswer: 'To indicate no action or code block להמחיש אי פעולה או בלוק של קוד',
  },
  {
    id: 8,
    question: 'In Python, what does the "len()" function do? מה הפונקיה לאן בפייתון עושה',
    options: ['Returns the length of a string מחזירה את אורך מחרוזת', 'Generates a random number יוצרת מספר אקראי', 'Opens a file פותחת קובץ', 'Prints a message מדפיסה הודעה'],
    correctAnswer: 'Returns the length of a string מחזירה את אורך המחרוזת',
  },
  {
    id: 9,
    question: 'Which of the following is a mutable data type in Python? איזה אבטיפוס הוא ממסוג מיוטבל בפייתון',
    options: ['int', 'float', 'str', 'list'],
    correctAnswer: 'list',
  },
  {
    id: 10,
    question: 'What is the purpose of the "break" statement in a loop? מה המטרה של ברייק בלולאה',
    options: ['To end the loop and exit לסיים ולצאת מהלולאה', 'To skip the current iteration לדלג על איטרציה נוכחית', 'To restart the loop לאפס את הלולאה', 'To print a message להדפיס הודעה'],
    correctAnswer: 'To end the loop and exit לסיים ולצאת מהלולאה',
  },
];

// Define a translations object
const translations = {
  en: {
    title: 'Python Quiz speical for eilay - חידון פייתון לעילאי  ',
    question: 'Question שאלה',
    quizCompleted: 'Quiz Completed החידון הושלם ',
    yourScore: 'Your Score הציון שלך',
    next: 'Next הבא',
  },
  he: {
    title: ' שאלון פייתון מיוחד עבור עילאי' ,
    question: 'שאלה',
    quizCompleted: 'שאלון הושלם',
    yourScore: 'התוצאה שלך',
    next: 'הבא',
  },
};

// Use a language variable to determine the current language
const language = 'en'; // Change to 'he' for Hebrew

const App = () => {
  // Access the translations based on the selected language
  const translation = translations[language];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });


  
  return (
    <div className="App">
      <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: 'white' }}>{translation.title}</h1>

        {currentQuestion < questions.length ? (
          <animated.div style={buttonAnimation}>
            <div className="card">
            <div className="card-body">
              <h5 className="card-title">{translation.question} {currentQuestion + 1}</h5>
              <p className="card-text">{questions[currentQuestion].question}</p>
              <div className="btn-group-vertical">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn btn-outline-primary ${selectedAnswer === option ? 'active' : ''}`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button className="btn btn-success mt-3" onClick={handleNextQuestion} disabled={!selectedAnswer}>
                {translation.next}
              </button>
            </div>
          </div>
          </animated.div>
          
        ) : (
          <><animated.div style={buttonAnimation}>
          <div className="card">
          
          <div className="card-body">
            <h3 className="card-title">{translation.quizCompleted}</h3>
            <p className="card-text">{translation.yourScore}: {score} / {questions.length}</p>
          </div>
        </div>
        </animated.div> <AnswerKey /><GuessingGame /></>
          
         
        )}
      </div>
    </div>
  );
};

const AnswerKey = () => {
  return (
    <div className="mt-4">
      <h4 style={{ color: 'white' }}>Answer Key: תשובות נכונות</h4>
      <ul className="list-group">
        {questions.map((question) => (
          <li key={question.id} className="list-group-item">
            <strong>Question {question.id}:</strong> {question.correctAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
