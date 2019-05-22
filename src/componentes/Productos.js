import React, { Component } from 'react';
import Producto from './Producto';
import Buscador from './Buscador';

class Productos extends Component {

    render() {
        return (
            <div className="prouctos">
                <h2>Nuestros prouctos</h2>

                <Buscador busqueda={this.props.busquedaProductos} />
                
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(
                        producto => (
                            <Producto
                                informacion={this.props.productos[producto]}
                                key={producto} />
                        )
                    )}
                </ul>
            </div>
        );
    }
}

export default Productos;