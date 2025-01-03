package Venta.Pasaje.Modelo;

public class Pasaje {
	
	private Integer id;
	private String nombreClinte;
	private Integer idVuelo;
	
	
	public String getNombreClinte() {
		return nombreClinte;
	}
	public void setNombreClinte(String nombreClinte) {
		this.nombreClinte = nombreClinte;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getIdVuelo() {
		return idVuelo;
	}
	public void setIdVuelo(Integer idVuelo) {
		this.idVuelo = idVuelo;
	}
	
	
}
