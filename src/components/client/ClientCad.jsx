import React, { Component } from 'react'
import axios from 'axios'
import Main from '../templates/Main'
import { Link } from 'react-router-dom'


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/client'
const initialState = {
    client: { nomeCliente: '', dataNascimento: '', telefone: '', cpf: '' },
    list: []
}

export default class ClientCad extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ client: initialState.client })
    }

    save() {
        const client = this.state.client
        const method = client.id ? 'put' : 'post'
        const url = client.id ? `${baseUrl}/${client.id}` : baseUrl
        axios[method](url, client)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ client: initialState.client, list })
            })
    }

    getUpdatedList(client, add = true) {
        const list = this.state.list.filter(u => u.id !== client.id)
        if (add) list.unshift(client)
        return list
    }

    updateField(event) {
        const client = { ...this.state.client }
        client[event.target.name] = event.target.value
        this.setState({ client })
    }

    renderForm() {
        return (
            <div className="form">
                <h1>Cadastrar</h1>
                <hr />
                <label>Nome Completo</label>
                <div class="form-group d-flex justify-content-center">
                    <input type="text" className="form-control"
                        name="nomeCliente"
                        value={this.state.client.nomeCliente}
                        onChange={e => this.updateField(e)}
                        placeholder="Nome Sobrenome" />

                </div>

                <label>Data de Nascimento</label>
                <div class="form-group d-flex justify-content-center">
                    <input type="text" className="form-control"
                        name="dataNascimento"
                        value={this.state.client.dataNascimento}
                        onChange={e => this.updateField(e)}
                        placeholder="01/01/2000" />
                </div>

                <label>Telefone</label>
                <div class="form-group d-flex justify-content-center">
                    <input type="number" className="form-control"
                        name="telefone"
                        value={this.state.client.telefone}
                        onChange={e => this.updateField(e)}
                        placeholder="11995555555" />
                </div>

                <label>CPF</label>
                <div class="form-group d-flex justify-content-center">
                    <input type="number" className="form-control"
                        name="cpf"
                        value={this.state.client.cpf}
                        onChange={e => this.updateField(e)}
                        placeholder="44444444444" />
                </div>

                <hr />
                <div className="row">
                    <div className="col-7 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            <Link to="/">Cancelar</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main title="Começe a usar o Get A Dancer agora!">
                {this.renderForm()}
            </Main>
        )
    }

}
