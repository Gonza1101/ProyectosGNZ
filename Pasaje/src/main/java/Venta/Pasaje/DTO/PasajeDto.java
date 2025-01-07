package Venta.Pasaje.DTO;

import Venta.Pasaje.Modelo.Pasaje;

public class PasajeDto {
	
	private Integer id;
	private String nombreCliente;
	private Integer idVuelo;
	
	//----- Constructor -----
	public PasajeDto (Integer id, String nombreCliente, Integer idVuelo) {
		this.id = id;
		this.nombreCliente = nombreCliente;
		this.idVuelo = idVuelo;
	}
	// ----- ToModel -----
	public Pasaje toModel () {
		Pasaje pasajeNuevo = new Pasaje();
		pasajeNuevo.setId(this.id);
		pasajeNuevo.setIdVuelo(idVuelo);
		pasajeNuevo.setNombreCliente(nombreCliente);
		
		return pasajeNuevo;
	}
	
	/// ----- Getter And Setter -----
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombreCliente() {
		return nombreCliente;
	}

	public void setNombreCliente(String nombreCliente) {
		this.nombreCliente = nombreCliente;
	}

	public Integer getIdVuelo() {
		return idVuelo;
	}

	public void setIdVuelo(Integer idVuelo) {
		this.idVuelo = idVuelo;
	}

}
