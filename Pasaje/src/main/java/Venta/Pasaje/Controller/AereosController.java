package Venta.Pasaje.Controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Venta.Pasaje.Modelo.Vuelo;
import Venta.Pasaje.Servicio.VueloServicio;
import Venta.Pasaje.DTO.MensajeDto;
import Venta.Pasaje.DTO.PasajeDto;
import Venta.Pasaje.DTO.VueloDto;

@RestController
@RequestMapping("/aereo")
public class AereosController {
	
	
	@Autowired
	VueloServicio vueloServicio;
	
	@GetMapping("/todos")
	public Collection<Vuelo> aereosDisponibles(){
		Collection<Vuelo>vuelos = vueloServicio.findAll();
//		return vuelos.stream().filter(v -> v.pasajesDisponibles()>0)
//							  .toList();
		return vuelos;
	}
	
	@GetMapping("/numero/{idVuelo}")
	public Vuelo findVueloById (@PathVariable Integer idVuelo) {
		return vueloServicio.findById(idVuelo);
	}
	
	@PostMapping("agregarVuelo")
	public MensajeDto addNuevoVuelo (@RequestBody VueloDto vueloDto) {
		return vueloServicio.addVuelo(vueloDto);
	}
	
	@PostMapping("/comprar")
	public MensajeDto compraDePasaje(@RequestBody PasajeDto pasajeDto) {
		return vueloServicio.comprarPasaje(pasajeDto);
	}
}
