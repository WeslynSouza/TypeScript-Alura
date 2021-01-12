class NegociacaoControler {
    
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){

        const doc = document.querySelector.bind(document);
        this._inputData = <HTMLInputElement>doc('#data');
        this._inputQuantidade = <HTMLInputElement>doc('#quantidade');
        this._inputValor = <HTMLInputElement>doc('#valor');
    }

    adiciona(event: Event): void {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );


        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
}