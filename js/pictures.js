// pictures.js

// Контейнер для фотографий
const picturesContainer = document.querySelector('.pictures');

// Шаблон одной миниатюры
const pictureTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

/**
 * Создаёт DOM-элемент миниатюры по данным одного фото
 * @param {Object} photo
 * @param {string} photo.url — адрес изображения
 * @param {string} photo.description — описание
 * @param {number} photo.likes — количество лайков
 * @param {Array|number} photo.comments — комментарии или их количество
 */
const createPictureElement = (photo) => {
  const element = pictureTemplate.cloneNode(true);

  const img = element.querySelector('.picture__img');
  const likes = element.querySelector('.picture__likes');
  const comments = element.querySelector('.picture__comments');

  img.src = photo.url;
  img.alt = photo.description;

  likes.textContent = photo.likes;

  // Если comments — это массив объектов, берём длину,
  // если уже число — просто выводим его
  const commentsCount = Array.isArray(photo.comments)
    ? photo.comments.length
    : photo.comments;

  comments.textContent = commentsCount;

  return element;
};

/**
 * Отрисовывает все миниатюры в блок .pictures
 * @param {Array<Object>} photos — массив данных фотографий
 */
const renderPictures = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

// экспорт функции, чтобы использовать её в основном модуле
export {renderPictures};
