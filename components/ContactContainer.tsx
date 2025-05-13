import styles from '../styles/Contact.module.scss';

export default function ContactContainer() {
    return (
        <div className={`container pt-5 mt-5 ${styles.contactScreen}`}>
            <div className={`${styles.formContainer} d-flex flex-column`}>
                <h3 className="text-start mb-3">
                    ¿Tenés una idea?
                    <br />
                    <span className="fw-bold">Tenemos las herramientas</span>
                </h3>
                <p className="text-start mb-4">
                    Contanos quién sos y qué tenés en mente.
                </p>
                <form className="d-flex flex-column flex-grow-1">
                    <div className="row mb-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className={`mb-3 flex-grow-1 ${styles.messageWrapper}`}>
                        <textarea className={`form-control ${styles.messageTextarea}`} placeholder="Mensaje"></textarea>
                    </div>
                    <div className="text-end d-flex mt-auto">
                        <button type="submit" className={`btn btn-primary d-flex ${styles.submitButton}`}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};