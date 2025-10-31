package com.proyectofinal.proyectofinalarchivos.repositorios;

import com.proyectofinal.proyectofinalarchivos.model.Sancion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RepositorioSancion extends JpaRepository<Sancion, Long> {
    // Consulta para obtener todo el historial de sanciones con datos del usuario sancionado
    @Query("SELECT s.idSancion AS id, s.motivo AS motivo, s.fechaSancion AS fecha, s.estado AS estado, " +
            "u.dpi AS dpi, u.nombre AS nombre, u.correo AS correo " +
            "FROM Sancion s " +
            "JOIN s.usuarioSancionado u " +
            "ORDER BY s.fechaSancion DESC")
    List<Object[]> obtenerHistorialSanciones();
}