import React from "react";
import "./Header.css";


const Header = () => {
  return(
      <header>
          <div className="header-overlay">
            <div className="container">
                <div className="col-lg-12">
                    <div className="row">
                        <h2>Nous vous proposons des solutions <br/> creatives</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting <br/>industry
                            Lorem Ipsum has been the industry's.
                        </p>
                        <form>
                            <input type="email" placeholder="    email : exemple@email.com"/>
                            <button type="submit">SUSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </header>
  )
}

export default Header;