package Venta.Pasaje.Filtro;

import java.io.IOException;

import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

@Component
public class Concurrencia implements Filter {
	
	private MonitorConsulta monitorConsulta;
	
	public Concurrencia () {
		super();
		this.monitorConsulta = new MonitorConsulta();
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// Se Intercepta los Request and Response, antes de llegar a la capa RestController.
		this.monitorConsulta.hacerConsulta();
		chain.doFilter(request, response);//"chain" continua hacia el "RestController"
		// Vuelve del "RestController" y ejecuto
		this.monitorConsulta.salirConsulta();
	}
}	
