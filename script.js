
// ==========================
// BUSCA DE FOFOCAS
// ==========================

const searchInput = document.getElementById("searchInput");
const gossipContainer = document.getElementById("gossipContainer");

searchInput.addEventListener("input", function () {

    const search = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".gossip-card");

    cards.forEach(function (card) {

        const text = card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ==========================
// BOTÃO "LER MAIS"
// ==========================

function lerFofoca(button) {

    const card = button.closest(".gossip-card");

    const titulo = card.querySelector("h3").innerText;

    alert(
        "🩷 " + titulo +
        "\n\nVocê pode transformar este botão em uma página completa para a fofoca."
    );

}


// ==========================
// ANIMAÇÃO AO ENTRAR NA TELA
// ==========================

const cards = document.querySelectorAll(".gossip-card");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});

function mostrarNoticias() {
    
    window.location.href = "noticia.html";
}

function mostraMensagem() {

    alert("Em breve você poderá ler a fofoca completa!");
}
