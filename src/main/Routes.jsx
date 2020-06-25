import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import ClientCad from '../components/client/ClientCad'
import ClientLogin from '../components/client/ClientLogin'
import ClientEsqueceuSenha from '../components/client/ClientEsqueceuSenha'

//Mapeamento entre as URLs e os componentes

export default props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/clientCad' component={ClientCad}/>
        <Route path='/clientLogin' component={ClientLogin}/>
        <Route path='/clientEsqueceuSenha' component={ClientEsqueceuSenha}/>
        <Redirect from='*' to='/' />
    </Switch> 