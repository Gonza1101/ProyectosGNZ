package Venta.Pasaje.DTO;

public class MensajeDto {
private static MensajeDto INSTANCE;
	
	private String mensaje;
	
	public MensajeDto() {
		super();
		this.mensaje = "Vacio";
	}
	
	public static MensajeDto getInstance() {
		if (INSTANCE == null) {
			INSTANCE = new MensajeDto();
		} 
		return INSTANCE;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
		
	}
}
