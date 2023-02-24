import ImagesArr from "./components/imagefile";
const data = [
  {
    question: <img src={ImagesArr[0].imgUrl} alt="images" />,
    incorrectAnswers: [5,4,7,],
    correctAnswer:6,
  },

  {
    question:
    <img src={ImagesArr[1].imgUrl} alt="images" />,
    incorrectAnswers: [5,4,6,],
    correctAnswer: 3,
  },
  {
    question: <img src={ImagesArr[2].imgUrl} alt="images" />,
    incorrectAnswers: [7,9,6],
    correctAnswer: 8,
  },
  {
    question: <img src={ImagesArr[3].imgUrl} alt="images" />,
    incorrectAnswers: [8,9,10],
    correctAnswer: 7,
  },
  {
    question: <img src={ImagesArr[4].imgUrl} alt="images" />,
    incorrectAnswers: [3,1,5],
    correctAnswer: 4,
  },
  {
    question: <img src={ImagesArr[5].imgUrl} alt="images" />,
    incorrectAnswers: [1,2,6],
    correctAnswer: '0',
  },
  {
    question:<img src={ImagesArr[6].imgUrl} alt="images" />,
    incorrectAnswers: [4,5,1],
    correctAnswer: 2,
  },
  {
    question: "What is 2 x 5 = ?",
    incorrectAnswers: [2,5,8],
    correctAnswer: 10,
  },
];

export default data;
