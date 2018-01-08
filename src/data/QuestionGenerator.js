import europe from './europe'

const allQuestions = new Map();
allQuestions.set('europe', europe);

const random = (max, min = 1) => {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
};

const generateUniqueNumbers = (max, quantity) => {

};

const generate = ( region, questionCount) => {
  const questionOfRegion = allQuestions.get(region);

};
