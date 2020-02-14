// топорная, но рабочая генерация случайного числа нужной длины с неповторяющимися значениями
const generateRandomNumber = (length) => [1,2,3,4,5,6,7,8,9,10].sort(() => Math.random() - 0.5).slice(0,length).join('');

module.exports = {
  generateRandomNumber,
}