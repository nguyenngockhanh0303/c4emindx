let input = document.getElementById(input);
let btnRandom = document.getElementById(btnRandom);
let time = 2;
let trueNumber = Math.floor(Math.random() * 10) + 1;
btnRandom.onclick = function () {
  if (!input.value) {
    alert("Bạn chưa nhập số dự đoán!");
  } else {
    if (trueNumber === Number(input.value)) {
      alert(
        `Bạn đã đoán đúng. Chúc mừng bạn đã nhận được tình cảm của chúng tôi!`
      );
    } else if (time >= 0) {
      if (time === 0) {
        alert(`Bạn đoán sai rồi. Bạn đã hết lượt dự đoán!`);
        btnRandom.disabled = "true";
      } else {
        time--;
        alert(`Bạn đoán sai rồi. Bạn còn lại ${time + 1} lần dự đoán!`);
      }
    }
  }
};