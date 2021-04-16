import React from "react";
import { Contenido } from "./Contenido";

export const RowDeContenido = () => {
	return (
		<div className="container-fluid row d-flex justify-content-center">
			<Contenido />
			<Contenido />
			<Contenido />
			<Contenido />
		</div>
	);
};
