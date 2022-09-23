import React from "react";
import CreateOption from "./CreateOption";
import CreateInputText from "./CreateInputText";
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nome: '', endereco: '' }
    }
    nameFunction = ({ target }) => {
        console.log(target);
        if (target.checked) {
            const { id, checked } = target
            this.setState({ [id]: checked })
        } else {
            const { id, value } = target;
            this.setState({ [id]: value })
        }
    }
    cityFunction(cidade) {
        const resultado = cidade.split('');
        if(typeof resultado[0] === 'number') {
            return ''
        }
        return cidade;
    }
    render() {
        const { nome, residencia, residencia2, endereco, cidade } = this.state;
        return (
            <div>
                <form action="get">
                    <fieldset>
                        <legend>Dados</legend>
                        <label htmlFor="name">
                            Nome:
                            <input required type="text" name="nome" id="nome" maxLength="40" onChange={this.nameFunction} value={nome.toUpperCase()} />
                        </label>
                        <CreateInputText />
                        <label htmlFor="cidade">
                            Cidade:
                            <input required type="text" name="cidade" id="cidade" maxLength="28" onBlur={this.nameFunction} onChange-={this.cityFunction} value={() => this.cityFunction(cidade)}/>
                        </label><br />
                        <label htmlFor="estado">Escolha seu Estado</label>

                        <select name="estado" id="estado">
                            <CreateOption />
                        </select>
                        <label htmlFor={"endereco"}>
                            Endereco:
                            <input required type="text" name={"endereco"} id={"endereco"} maxLength={"200"} onChange={this.nameFunction} value={endereco.replace(/#/g, '').replace('$', '').replace(/%/g, '').replace(/¨/g, '').replace(/&/g, 'and').replace('*', '').replace('!', '').replace('@', '')}/>
                        </label>
                        <label htmlFor="residencia">
                            Cidade
                            <input type="radio" id="residencia" name="residencia" checked={residencia} onBlur={this.nameFunction} />
                            Apartamento
                            <input type="radio" id="residencia2" name="residencia" checked={residencia2} onBlur={this.nameFunction} />
                        </label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Forms;