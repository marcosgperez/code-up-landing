const ThirdScreen = () => {
  return (
    <>
      <div className="view screen third-screen">
        <div className="container h-100 d-flex justify-content-between flex-column">
          <div className="d-flex">
            <h2><span className="bolder">Innovamos soluciones</span><br/> para tus proyectos</h2>
          </div>
          <div className="d-flex w-100 justify-content-center f-20">
            <div className="">
              <div className="card-solutions first-card">
                <div className="d-flex flex-column m-auto">
                  <p>NUESTRO PROCESO</p>
                  <ul className="mt-4 w-100 text-start">
                    <li>Planeamos</li>
                    <li>Diseñamos</li>
                    <li>Desarrollamos</li>
                    <li>Ejecutamos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card-solutions second-card">
                <div className="d-flex flex-column m-auto">
                  <p>ALGUNOS SERVICIOS</p>
                  <ul className="mt-4 w-100 text-start">
                    <li>Apps Móbiles</li>
                    <li>Sitios Web</li>
                    <li>Landing pages</li>
                    <li>Design System</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card-solutions third-card">
                <div className="d-flex flex-column m-auto">
                  <p>A QUIÉNES NOS DIRIGIMOS?</p>
                  <ul className="mt-4 w-100 text-start">
                    <li>Emprendedores</li>
                    <li>Empresas de todo tipo</li>
                    <li>Desarrolladores</li>
                    <li>Startups</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card-solutions fourth-card">
                <div className="d-flex flex-column m-auto">
                  <p>PROYECTOS INNOVADORES</p>
                  <ul className="mt-4 w-100 text-start">
                    <li>Metodologías ágiles</li>
                    <li>Enfoques creativos</li>
                    <li>Soluciones convencionales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center d-flex justify-content-center">
            <div className="d-flex transformando-text">
              <h3>Transformando <span className="visiones">Visiones</span> en <span className="realidad">Realidad</span></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdScreen;
