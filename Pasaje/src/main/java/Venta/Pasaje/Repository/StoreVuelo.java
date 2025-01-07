package Venta.Pasaje.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

import Venta.Pasaje.Modelo.Pasaje;
import Venta.Pasaje.Modelo.Vuelo;

public class StoreVuelo {

	private static StoreVuelo INSTANCE;
	
	private Collection<Vuelo>storeVuelo;
	// ----- Vuelos -----
	private Vuelo vuelo01 = new Vuelo(815,35,LocalDate.of(2004, 9, 22));//LOST
	private Vuelo vuelo02 = new Vuelo(1549,25,LocalDate.of(2009, 1, 15));//SULLY
	
	// ----- Pasajes -----
	private Pasaje pasaje11 = new Pasaje(123,"Jack Shephard",815);
	private Pasaje pasaje12 = new Pasaje(234,"Kate Austen",815);
	private Pasaje pasaje13 = new Pasaje(345,"John Locke",815);
	
	private Pasaje pasaje21 = new Pasaje(123,"Viktor Navorski",1549);
	
	public StoreVuelo() {
		this.storeVuelo = new ArrayList<Vuelo>();
		this.agregar();
	}
	
	public static StoreVuelo getInsance() {
		if(INSTANCE ==null) {
			INSTANCE = new StoreVuelo();
		}
		return INSTANCE;
	}
	
	public void agregar() {
		this.storeVuelo.add(vuelo01);
		this.storeVuelo.add(vuelo02);
		this.vuelo01.agregarPasajes(pasaje11);
		this.vuelo01.agregarPasajes(pasaje12);
		this.vuelo01.agregarPasajes(pasaje13);
		this.vuelo02.agregarPasajes(pasaje21);
	}
	

	
	public void addVuelo(Vuelo vueloNuevo) {
		storeVuelo.add(vueloNuevo);
	}
	public void removeVuelo(Vuelo vuelo) {
		this.storeVuelo.remove(vuelo);
	}
	public Collection<Vuelo> getStoreVuelo() {
		return storeVuelo;
	}

	public void setStoreVuelo(Collection<Vuelo> storeVuelo) {
		this.storeVuelo = storeVuelo;
	}
	
	
} 
