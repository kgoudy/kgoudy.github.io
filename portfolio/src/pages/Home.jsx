/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div>
        <img src="/koki.jpg" alt="Koki" id="koki-img" />
      </div>
      <div>
        <h1 className="text-7xl" id="koki-intro">
          Koki D Goudy
        </h1>
        <p>Junior Software Devloper</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
