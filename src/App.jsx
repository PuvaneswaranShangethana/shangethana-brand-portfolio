import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <section className="section">
          <div
            className="container"
            style={{
              paddingTop: "80px",
            }}
          >
            <p className="eyebrow">
              Shangethana Puvaneswaran
            </p>

            <h1>
              Design.
              <br />
              Develop.
              <br />
              <span className="accent">Build.</span>
            </h1>

            <p
              style={{
                maxWidth: "560px",
                marginTop: "32px",
              }}
            >
              Software Engineer, AI Developer and UI/UX Designer building
              thoughtful digital products and experiences.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;