const SecondScreen = () => {
  return (
    <>
      <div className="container second-screen screen view">
        <div className="row justify-content-end h-100 p-5 ">
          <div className="col-10 h-100 d-flex align-items-center">
            <div className="row p-0 m-0 justify-content-center card-container p-relative w-100">
              <div className="col-8 m-0 p-5 d-flex flex-column justify-content-between ">
                <img className="codi" src="/images/03.png" alt="image" />
                <h2 className="d-flex">El mundo necesita nuevas ideas</h2>
                <p className="d-flex">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ipsum sem, mattis auctor leo ac, vestibulum congue arcu.
                  Vestibulum ante ipsum primis. Sed ornare metus a aliquam
                  finibus. In sed gravida libero, non egestas nunc. Integer
                  lacinia, nunc id consequat finibus, elit ante pretium leo, id
                  malesuada nisi arcu ullamcorper velit.
                </p>
                <p className="d-flex">
                  Morbi vestibulum, libero id gravida aliquam, nibh sem accumsan
                  elit, a fermentum nibh tortor vitae magna.
                </p>
                <p className="d-flex c-dodger">
                  Morbi vestibulum, libero id gravida aliquam, nibh sem accumsan
                  elit, a fermentum nibh tortor vitae magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondScreen;
