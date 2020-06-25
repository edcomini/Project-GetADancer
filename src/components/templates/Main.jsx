import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content content-fluid">
            <div className="p-2 mt-2">
                {props.children}
            </div>
        </main>
    </React.Fragment>