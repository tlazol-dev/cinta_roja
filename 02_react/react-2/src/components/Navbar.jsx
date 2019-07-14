import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar navbar-dark bg-dark justify-content-between'>
                    <a className='navbar-brand' style={{color:'#fff'}}>Aplicacion de ususarios</a>
                    <form className='form-inline'>
                        <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label/>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Navbar
