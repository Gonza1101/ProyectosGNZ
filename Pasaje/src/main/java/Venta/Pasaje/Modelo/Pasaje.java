package Venta.Pasaje.Modelo;

public class Pasaje {
	
	private Integer id;
	private String nombreCliente;
	private Integer idVuelo;
	
	public Pasaje() {
		
	}
	
	public Pasaje (Integer id, String nombreCliente,Integer idVuelo ) {
		this.id = id;
		this.nombreCliente = nombreCliente;
		this.idVuelo = idVuelo;
	}
	
	public String getNombreCliente() {
		return nombreCliente;
	}
	public void setNombreCliente(String nombreCliente) {
		this.nombreCliente = nombreCliente;
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
