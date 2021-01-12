class NegociacaoControler {
    constructor() {
        const doc = document.querySelector.bind(document);
        this._inputData = doc('#data');
        this._inputQuantidade = doc('#quantidade');
        this._inputValor = doc('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
    }
}
