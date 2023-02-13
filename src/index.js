import cipher from './cipher.js';

const textarea1 = document.querySelector("#textarea1");
const textarea2 = document.querySelector("#textarea2");
const deslocamento = document.querySelector("#deslocamento");
const button = document.querySelector("#criptografar");


button.addEventListener("click", criptografar);

function criptografar() {
  const msgCriptografada = textarea1.value.toUpperCase();
  const offset = parseInt(deslocamento.value);
  textarea2.value = cipher.encode(msgCriptografada, offset);
}
const button2 = document.querySelector("#descriptografar");
button2.addEventListener("click", descriptografar);

function descriptografar() {
  const msgDescriptografada = textarea1.value.toUpperCase();
  const offset = parseInt(deslocamento.value);
  textarea2.value = cipher.decode(msgDescriptografada, offset);
}