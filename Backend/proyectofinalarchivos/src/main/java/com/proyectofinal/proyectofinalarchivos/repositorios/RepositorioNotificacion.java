package com.proyectofinal.proyectofinalarchivos.repositorios;

import com.proyectofinal.proyectofinalarchivos.model.Sancion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RepositorioNotificacion extends JpaRepository<Sancion, Long> {
    @Query("SELECT n.idNotificacion, n.correoNotificado, n.fechaNotificacion FROM Notificacion n")
    List<Object[]> obtenerHistorialNotificaciones();
}
