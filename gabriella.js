
const btnSaibaMais = document.getElementById("saibaMais");

btnSaibaMais.addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

const btnImpacto = document.querySelector(".btn-info");
const mensagem = document.getElementById("mensagem");

btnImpacto.addEventListener("click", () => {
    mensagem.innerHTML =
        "🌱 A agricultura sustentável ajuda a conservar o solo, reduzir o desperdício de água, proteger a biodiversidade e garantir a produção de alimentos para as futuras gerações.";
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");
});
