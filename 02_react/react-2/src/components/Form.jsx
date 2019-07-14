import React, { Component } from 'react'
import axios from 'axios'


export class Form extends Component {
    constructor(){
        super()
        this.state= {
            name: '',
            last_name: '',
            biography: '',
            gender: 'F',
            nacionalidad: 'MX',
            age: 0
        }
     }

   
     onInputChange=(e) => {
        const {id,value} = e.target 
        this.setState({
            [id]:value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/',this.state)
        .then(author => alert('autor creado')).catch((err => alert(err)))
    }


    render() {
        return (
            <div>
                <form className='p-5' onSubmit={this.onSubmitForm}>
                    <div className='form-group'>
                        <label>Nombre</label>
                        <input type='text' className='form-control' id='name'
                        onChange={this.onInputChange}
                        value={this.state.name}
                        />
                    </div>
                    <div className='form-group'>
                    <label>Apellido</label>
                        <input type='text' className='form-control' id='last_name'
                        onChange={this.onInputChange}
                        value={this.state.last_name}
                        />
                    </div>
                    <div>
                    <label>Biografia</label>
                        <input type='text' className='form-control' id='biography'
                        onChange={this.onInputChange}
                        value={this.state.biography}
                        />
                    </div>
                    <div>
                    <label>Genero</label>
                        <select className='form-control' type='text' id='gender'  
                        onChange={this.onInputChange}
                        value={this.state.gender}>
                        <option>F</option>
                        <option>M</option>
                     </select>
                    </div>
                    <div>
                    <label>Nacionalidad</label>
                        <input type='text' className='form-control' id='nacionalidad'
                        onChange={this.onInputChange}
                        value={this.state.nacionalidad}
                        />
                    </div>
                    <div>
                    <label>Edad</label>
                        <input type='text' className='form-control' id='age'
                        onChange={this.onInputChange}
                        value={this.state.age}
                        />
                    </div>
                        <button className='btn btn-succes' type='submit'>Guardar</button>


                </form>
            </div>
        )
    }
}

export default Form
