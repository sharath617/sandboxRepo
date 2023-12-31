const wrapper = document.querySelector(".wrapper");
const button = wrapper.querySelector("button");
const qrInput = wrapper.querySelector("input");
const qrImg = wrapper.querySelector(".qr-code img");

button.addEventListener("click", () => {
  const qrValue = qrInput.value;
  if (!qrValue) return;
  button.innerText = "Generating QR Code";
  qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    button.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
