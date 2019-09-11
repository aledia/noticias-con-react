import React from 'react'
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    // extraer datos
    const { urlToImage, url, title, description, source } = noticia;
    // cargar img si la noticia contiene una..
        const imagen = (urlToImage) ? 
            <div className="card-image">
                <img src={urlToImage} alt={title}/>
                <span className="card-title"> {source.name} </span>
            </div>
        : null




    return(
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}

                <div>
                    <h3 className="titulo">{title}</h3>
                    <p className="  v">{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-ligth btn"> Ver NOticia completa</a>
                </div>
            </div>
        </div>
    )

};

Noticia.propTypes = {
    noticia :  PropTypes.object.isRequired
}
export default Noticia;
