import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src="https://i.gifer.com/7Q9j.gif" height="50" alt="gif" loading="lazy" />
            <b>Stop</b> <b style={{ color: "#B31312" }}>Watch</b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
