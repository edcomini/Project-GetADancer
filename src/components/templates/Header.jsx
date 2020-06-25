import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-collum">
        <h1 className="mt-3">
            {props.title}
        </h1>
    </header>