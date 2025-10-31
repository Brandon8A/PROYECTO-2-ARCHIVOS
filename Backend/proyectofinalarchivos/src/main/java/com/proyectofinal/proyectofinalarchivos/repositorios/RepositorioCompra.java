package com.proyectofinal.proyectofinalarchivos.repositorios;

import com.proyectofinal.proyectofinalarchivos.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

public interface RepositorioCompra extends JpaRepository<Compra, Long> {
    @Query(value = """
    SELECT p.nombre_producto AS nombre, COUNT(c.id_producto) AS total_vendidos
    FROM compra c
    JOIN producto p ON c.id_producto = p.id_producto
    WHERE c.fecha_compra BETWEEN :inicio AND :fin
    GROUP BY p.nombre_producto
    ORDER BY total_vendidos DESC
    LIMIT 10
""", nativeQuery = true)
    List<Map<String, Object>> obtenerTop10ProductosMasVendidos(
            @Param("inicio") Timestamp inicio,
            @Param("fin") Timestamp fin);


}