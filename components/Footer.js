export default function Navbar({ children }) {
  return (
    <>
      <footer className="footer bg-dark is-flex is-flex-direction-column is-align-items-center is-flex-shrink-0 is-family-serif">
        <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly min-100">
          <div className="container">
            <span className="text-muted">
              <p className="text-center">
                <a title="twitter" href="//twitter.com/guidotorresmx">
                  <i className="fa fa-brands fa-twitter icon"></i>
                </a>
                <a title="github" href="//github.com/guidotorresmx">
                  <i className="fa fa-brands fa-github icon"></i>
                </a>
                <a title="instagram" href="//www.instagram.com/guidotorresmx">
                  <i className="fa fa-brands fa-instagram icon"></i>
                </a>
                <a title="linkedin" href="//www.linkedin.com/in/guidotorresmx">
                  <i className="fa fa-brands fa-linkedin icon"></i>
                </a>
                <a title="facebook" href="//www.facebook.com/guidotorresmx">
                  <i className="fa fa-brands fa-facebook icon"></i>
                </a>
                <a title="mail" href="mailto:marco@guidotorres.mx">
                  <i className="fa fa-solid fa-envelope-open icon"></i>
                </a>
                <a title="whatsapp" href="//wa.me/16479066194">
                  <i className="fa fa-brands fa-whatsapp icon"></i>
                </a>
                <a title="telegram" href="//t.me/guidotorresmx">
                  <i className="fa fa-brands fa-telegram icon"></i>
                </a>
                <br />
                2022. guidotorresmx. All rights unreserved. Created by
                <a href="https://github.com/guidotorresmx">@guidotorresmx. </a>
                Source code can be found at
                <a href="https://github.com/guidotorresmx/">
                  @guidotorresmx/.{" "}
                </a>
                This website is built with Next.JS and Bootstrap Pug.
              </p>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
