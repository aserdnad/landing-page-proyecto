import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap";

export const NavbarMia = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
				<Nav
					className="justify-content-end mr-4"
					style={{ width: "100%" }}>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">About</Nav.Link>
					<Nav.Link href="#pricing">Services</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};
