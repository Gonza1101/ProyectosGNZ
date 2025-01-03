package Venta.Pasaje.Modelo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Vuelo {
	private Integer id;
	private Integer capacidadMax;
	private LocalDate fechaVuelo;
	private List <Pasaje> pasajes;
	
	public Vuelo() {
		
	}
	public Vuelo(Integer id, Integer capacidadMax, LocalDate fechaVuelo) {
		this.id = id;
		this.capacidadMax = capacidadMax;
		this.fechaVuelo = fechaVuelo;
		this.pasajes= new ArrayList<Pasaje>();
	}
	
	public Integer totalPasajesVendidos() {
		return this.pasajes.size()+1;
	}
	public void agregarPasajes(Pasaje pasajeNuevo) {
		this.pasajes.add(pasajeNuevo);
	}
	public Integer pasajesDisponibles() {
		return this.capacidadMax - totalPasajesVendidos();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCapacidadMax() {
		return capacidadMax;
	}

	public void setCapacidadMax(Integer capacidadMax) {
		this.capacidadMax = capacidadMax;
	}

	public LocalDate getFechaVuelo() {
		return fechaVuelo;
	}

	public void setFechaVuelo(LocalDate fechaVuelo) {
		this.fechaVuelo = fechaVuelo;
	}
	public List<Pasaje> getPasajes() {
		return pasajes;
	}
}
