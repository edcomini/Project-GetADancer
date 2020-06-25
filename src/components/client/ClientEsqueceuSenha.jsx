import React, { Component } from 'react'
import axios from 'axios'
import Main from '../templates/Main'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ClientLogin.css'



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
            <form>
                <h1>Recuperar Senha</h1>

                <hr />
                <label>Informa o Email cadastrado</label>
                <div class="form-group d-flex justify-content-center">
                    <input type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="exemplo@exemplo.com" />
                </div>
                <Form.Text className="text">
                    Será enviado as instruções para recupera a senha no email cadastrado.
                </Form.Text>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-primary"
                            /*onClick={e => this.save(e)}*/>
                            Enviar codigo
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    render() {
        return (
            <Main title="Esqueceu sua senha ?">
                {this.renderForm()}
            </Main>
        )
    }

}
