export default function ContactContainer() {
    return (
        <div  className="container otf position-relative contact-screen screen view pt-5 mt-5">
            <div className="form-container">
                <h3>
                    Tenes una idea?
                    <br />
                    <span className="bolder">Tenemos las herramientas</span>
                </h3>
                <p>
                    Contanos quién sos y qué tenés en mente
                </p>
                <div>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="col-12 mt-4">
                            <input type="text" className="form-control" placeholder="Mensaje" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary mt-4">Enviar</button>
                </div>
            </div>
        </div>
    );
};