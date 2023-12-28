var elementos = document.querySelectorAll(".duvida");

elementos.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

document.querySelectorAll(".burger").addEventListener("click", () => {
  document.querySelectorAll(".menu").style.display = block;
});

$(document).ready(function () {
  $("#btn").click(function () {
    $(".menu-mobile").slideToggle(500);
  });
});
