import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import List from "../../components/list";
import Start from "../../components/start";
import Submit from "../../components/submit";
import Result from "../../components/result";
import Score from "../../components/score";

class App extends Component {
  state = {
    questions: [
      {
        q: 1,
        question: "Name the currency used in Japan ?",
        answers: [
          {
            id: uuidv4(),
            no: 1,
            ans: "Taka",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 2,
            ans: "Dinar",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 3,
            ans: "Ngultrum",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 4,
            ans: "Yen",
            correct: true,
            isCorrectAns: false
          }
        ]
      },
      {
        q: 2,
        question: "Which animal is the tallest in the world ?",
        answers: [
          {
            id: uuidv4(),
            no: 1,
            ans: "Elephant",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 2,
            ans: "Giraffe",
            correct: true,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 3,
            ans: "Zebra",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 4,
            ans: "Kangaroo",
            correct: false,
            isCorrectAns: false
          }
        ]
      },
      {
        q: 3,
        question: "Ottawa is the capital of which country ?",
        answers: [
          {
            id: uuidv4(),
            no: 1,
            ans: "India",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 2,
            ans: "England",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 3,
            ans: "Australia",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 4,
            ans: "Canada",
            correct: true,
            isCorrectAns: false
          }
        ]
      },
      {
        q: 4,
        question: "Which car company makes the Corolla ? ",
        answers: [
          {
            id: uuidv4(),
            no: 1,
            ans: "Nissan",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 2,
            ans: "Toyota",
            correct: true,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 3,
            ans: "Subaru",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 4,
            ans: "Honda",
            correct: false,
            isCorrectAns: false
          }
        ]
      },
      {
        q: 5,
        question: "Which country is Amsterdam located in ? ",
        answers: [
          {
            id: uuidv4(),
            no: 1,
            ans: "Germany",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 2,
            ans: "Albania",
            correct: false,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 3,
            ans: "Netherlands",
            correct: true,
            isCorrectAns: false
          },
          {
            id: uuidv4(),
            no: 4,
            ans: "Finland",
            correct: false,
            isCorrectAns: false
          }
        ]
      }
    ],
    score: 0,
    totalQuestions: 5,
    start: false,
    showResults: false,
    disableTheRadioButtons: false
  };

  startQuiz = () => {
    this.setState({ start: true });
  };
  onClickAns = (no, correct, q) => {
    const questions = [...this.state.questions];
    const question = questions.find(el => el.q === q);
    const answers = [...question.answers];
    const ansIndex = answers.findIndex(el => el.no === no);
    const ans = answers.find(el => el.no === no);
    if (ans.correct) {
      ans.isCorrectAns = true;
    } else {
      ans.isCorrectAns = false;
    }
    answers[ansIndex] = ans;
    questions[q] = answers;
    this.setState(questions);
  };
  onSubmitAnswers = () => {
    let total, score;
    const questions = [...this.state.questions];
    total = questions.map(el => {
      return el.answers.reduce((acc, curr) => {
        if (curr.isCorrectAns === true) {
          return acc + 1;
        }
        return acc;
      }, 0);
    });
    score = total.reduce((acc, curr) => {
      acc = acc + curr;
      return acc;
    }, 0);

    this.setState({ score, showResults: true });
  };
  onCheckedHandler = e => {
    this.setState({ disableTheRadioButtons: true });
  };

  render() {
    const quiz = this.state.start ? (
      <>
        <Result score={this.state.score} showResults={this.state.showResults} />
        <Score score={this.state.score} />
        <List
          questions={this.state.questions}
          onClickAns={this.onClickAns}
          onCheckedHandler={this.onCheckedHandler}
          disableTheRadioButtons={this.state.disableTheRadioButtons}
        />
        <div className="button-box">
          <Submit
            onSubmitAnswers={this.onSubmitAnswers}
            showResults={this.state.showResults}
          />
        </div>
      </>
    ) : null;
    return (
      <div className="App">
        <h1 className="heading-h1">Quiz app</h1>
        <Start startQuiz={this.startQuiz} start={this.state.start} />
        {quiz}
      </div>
    );
  }
}

export default App;
