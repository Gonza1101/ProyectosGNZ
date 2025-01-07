package Venta.Pasaje.DTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import Venta.Pasaje.Modelo.Vuelo;

public class VueloDto {
	private Integer id;
	private Integer capacidadMax;
	private LocalDate fechaVuelo;
	private List<PasajeDto> pasajesDto;
	
	public VueloDto (Integer id, Integer capacidadMax, LocalDate fechaVuelo) {
		this.id = id;
		this.capacidadMax = capacidadMax;
		this.fechaVuelo = fechaVuelo;
		this.pasajesDto = new ArrayList<PasajeDto>();
	}
	
	public Vuelo toModel() {
		Vuelo vueloNuevo = new Vuelo(this.id, this.capacidadMax, this.fechaVuelo);
		
		if(!(this.pasajesDto.isEmpty())) {
			for (PasajeDto pasajeDto : this.pasajesDto) {
				vueloNuevo.agregarPasajes(pasajeDto.toModel());
			}
		}
		return vueloNuevo;
	}
	
	public void agregarPasajeDto(PasajeDto pasajeDto) {
		pasajesDto.add(pasajeDto);
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

	public List<PasajeDto> getPasajesDto() {
		return pasajesDto;
	}

	
}
