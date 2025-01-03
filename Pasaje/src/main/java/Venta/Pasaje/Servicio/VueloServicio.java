package Venta.Pasaje.Servicio;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Venta.Pasaje.DTO.MensajeDto;
import Venta.Pasaje.DTO.PasajeDto;
import Venta.Pasaje.DTO.VueloDto;
import Venta.Pasaje.Modelo.Pasaje;
import Venta.Pasaje.Modelo.Vuelo;
import Venta.Pasaje.Repository.StoreVuelo;

@Service
public class VueloServicio {
	
	@Autowired
	private StoreVuelo storeVuelo;
	
	//Listado de Vuelo
	public Collection<Vuelo> findAll(){
		this.storeVuelo = StoreVuelo.getInsance();
		return storeVuelo.getStoreVuelo();
	}
	//Vuelo por id
	public synchronized Vuelo findById(Integer id) {
		this.storeVuelo = StoreVuelo.getInsance();
		return this.storeVuelo.getStoreVuelo().stream()
											.filter(i->i.getId().equals(id))
											.findFirst()
											.orElse(null);
	}
	//Agregar Nuevo Vuelo
	public synchronized MensajeDto addVuelo(VueloDto vueloDto) {
		this.storeVuelo = StoreVuelo.getInsance();
		Vuelo nuevoVuelo = vueloDto.toModel();
		if (this.findById(nuevoVuelo.getId())== null) {
			this.storeVuelo.addVuelo(nuevoVuelo);
			MensajeDto.getInstance().setMensaje("Se Agrego un Vuelo Nuevo");
		}else {
			MensajeDto.getInstance().setMensaje("El Vuelo ya se encuentra registrado");
		}
		return MensajeDto.getInstance();
	}
	
	//Eliminar Vuelo de la Lista
	public synchronized MensajeDto deleteVuelo(VueloDto vueloDto) {
		this.storeVuelo = StoreVuelo.getInsance();
		Vuelo nuevoVuelo = vueloDto.toModel();
		if (!(this.findById(nuevoVuelo.getId())==null)) {
			this.storeVuelo.removeVuelo(nuevoVuelo);
			MensajeDto.getInstance().setMensaje("Se elimino el vuelo");
		}else {
			MensajeDto.getInstance().setMensaje("No existe un vuelo con Numero referencia: "+vueloDto.getId());
		}
		return MensajeDto.getInstance();
	}
	
	//comprar un Pasaje para un Vuelo
	public synchronized MensajeDto comprarPasaje(PasajeDto pasajeDto) {
		this.storeVuelo = StoreVuelo.getInsance();
		if ( this.findById(pasajeDto.getIdVuelo()).pasajesDisponibles()> 0 ) {
			Vuelo vuelo = this.findById(pasajeDto.getIdVuelo());
			Pasaje pasaje = pasajeDto.toModel();
			vuelo.agregarPasajes(pasaje);
			MensajeDto.getInstance().setMensaje("Pasaje Comprado");
		}else {
			MensajeDto.getInstance().setMensaje("Error con la reserva del pasaje");
		}
		return MensajeDto.getInstance();
		
	}
}
