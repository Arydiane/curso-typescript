import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NeogciacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form'); 
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona(); 
    })
} else {
    throw Error("Nõ foi possível inicializar a aplicação. Verifique se o form existe")
}

