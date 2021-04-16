import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap";

export const Footer = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Collapse className="pt-2 justify-content-center">
				<Navbar.Text>copyright Your website 2021</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};
