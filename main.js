const buttonadd = document.getElementById('button-add');
const buttonsub = document.getElementById('button-sub');
const buttonmul = document.getElementById('button-mul');
const buttondiv = document.getElementById('button-div');
const box = document.getElementById('box');

const getNum1 = () => {
  // num1の数値を戻り値としてreturnする処理を書いてください
  //return num1.value;　だと文字列なので(+)を頭につける
  let num1 = document.getElementById('num1');
  return +num1.value;
};

const getNum2 = () => {
  // num2の数値を戻り値としてreturnする処理を書いてください
  let num2 = document.getElementById('num2');
  return +num2.value;
};

const showResult = (num) => {
  // <div id="box">にnumを表示する処理を書いてください
  document.getElementById('box').textContent = num;
};

buttonadd.addEventListener('click', () => {
  const result = getNum1() + getNum2();
  showResult(result);
});

buttonsub.addEventListener('click', () => {
  const result = getNum1() - getNum2();
  showResult(result);
});

buttonmul.addEventListener('click', () => {
  const result = getNum1() * getNum2();
  showResult(result);
});

buttondiv.addEventListener('click', () => {
  const result = getNum1() / getNum2();
  showResult(result);
});