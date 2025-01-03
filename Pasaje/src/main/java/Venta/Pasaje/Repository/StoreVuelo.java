package Venta.Pasaje.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

import Venta.Pasaje.Modelo.Vuelo;

public class StoreVuelo {

	private static StoreVuelo INSTANCE;
	
	private Collection<Vuelo>storeVuelo;
	//TODO MensajeDto
	
	private Vuelo vuelo01 = new Vuelo(815,35,LocalDate.of(2004, 9, 22));//LOST
	private Vuelo vuelo02 = new Vuelo(123,25,LocalDate.of(1997,6,6));//CONAIR
	private Vuelo vuelo03 = new Vuelo(1549,25,LocalDate.of(2009, 1, 15));//SULLY
	
	public StoreVuelo() {
		this.storeVuelo = new ArrayList<Vuelo>();
		this.agregarVuelo();
	}
	
	public static StoreVuelo getInsance() {
		if(INSTANCE ==null) {
			INSTANCE = new StoreVuelo();
		}
		return INSTANCE;
	}
	
	public void agregarVuelo() {
		this.storeVuelo.add(vuelo01);
		this.storeVuelo.add(vuelo02);
		this.storeVuelo.add(vuelo03);
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
