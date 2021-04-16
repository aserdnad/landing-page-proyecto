import React from "react";
import { NavbarMia } from "./NavbarMia";
import { Jumbo } from "./Jumbo";
import { RowDeContenido } from "./RowDeContenido";
import { Footer } from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavbarMia />
			<Jumbo />
			<RowDeContenido />
			<Footer />
		</div>
	);
}
