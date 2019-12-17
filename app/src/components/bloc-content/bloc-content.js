import React from 'react';
import logo from './img/1.jpg';

class Bloccontent extends React.Component {

    render(){
        return(
            <div className="block-teaser block-background-image large overlay" style={{backgroundImage: `url(${logo})`}}>
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <h1 className="white ">Jairo Rojas</h1>
                            <h3 className="mt-20 white mb-200">Software Developer</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 ">
                            <a href="#" className="but opc ico white"><i className="icon-print-1"></i>Descargar Mi CV</a>
                        </div>
                        <div className="col-sm-6 t-right">
                            <p className="white short-email">¿Tiene usted alguna pregunta? Escribeme a <a href="mailto:jairo.rafa.1997@gmail.com">jairo.rafa.1997@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bloccontent;