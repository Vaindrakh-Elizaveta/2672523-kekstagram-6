const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const COUNT_OF_PHOTOS = 25;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
  'Настя',
  'Лиза',
  'Катя',
  'Глаша',
  'Саша',
  'Ваня',
  'Антон',
  'Лёня'
];

const generatePhotoId = createRandomIdFromRangeGenerator(1, COUNT_OF_PHOTOS);
const generateUrlId = createRandomIdFromRangeGenerator(1, COUNT_OF_PHOTOS);
const generateCommentId = createRandomIdFromRangeGenerator(1, COUNT_OF_PHOTOS * 30);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const similarComments = Array.from({length: getRandomInteger(0, 30)}, createComment);

const createPhotoDescription = () =>({
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: 'Вот такая фоточка классная.',
  likes: getRandomInteger(15, 200),
  comments: similarComments
});

const similarPhotoDescriptions = Array.from({length: COUNT_OF_PHOTOS}, createPhotoDescription);
console.log(similarPhotoDescriptions);
