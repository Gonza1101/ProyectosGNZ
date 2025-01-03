package Venta.Pasaje.Filtro;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class MonitorConsulta {
	private Integer cantConsulta;
	private Lock lock;
	private Condition limiteConsulta;
	
	public MonitorConsulta() {
		super();
		this.cantConsulta = 0;
		this.lock = new ReentrantLock();
		this.limiteConsulta = this.lock.newCondition();
		}
	
	public void hacerConsulta() {
		try {
			this.lock.lock();
			if(cantConsulta > 5) {
				this.limiteConsulta.await();
			}
			this.cantConsulta ++;
		}catch (InterruptedException e) {
			e.printStackTrace();
		}finally {
			this.lock.unlock();
		}
	}
	
	public void salirConsulta() {
		this.lock.lock();
		this.cantConsulta --;
		this.limiteConsulta.signalAll();
		this.lock.unlock();
	}
}
