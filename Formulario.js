import React, { Component } from 'react'

 class Formulario extends Component {
    render() {
        return (
            <div>
                <div className="buscador row">
                    <div className="col s12 m8 offset-2">
                        <form>
                            <h2>Encuentra noticias por categorías</h2>
                            <div className="input-field col s12 m8">
                                <select>
                                    <option value="general">General</option>
                                    <option value="business">Negocios</option>
                                    <option value="entertainment">Entretenimientos</option>
                                    <option value="health">Salud</option>
                                    <option value="science">Ciencias</option>
                                    <option value="sports">Deportes</option>
                                    <option value="technology">Tecnología</option>

                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Formulario;