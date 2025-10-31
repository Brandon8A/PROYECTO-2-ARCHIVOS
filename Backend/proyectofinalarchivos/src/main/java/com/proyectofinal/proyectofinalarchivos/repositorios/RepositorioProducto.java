package com.proyectofinal.proyectofinalarchivos.repositorios;

import com.proyectofinal.proyectofinalarchivos.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface RepositorioProducto extends JpaRepository<Producto, Long> {
    @Query(value = """
        SELECT 
            id_producto,
            nombre_producto,
            descripcion,
            precio,
            stock,
            estado,
            categoria,
            aceptado,
            dpi_usuario,
            estado_pedido,
            fecha_llegada,
            total_pedido
        FROM producto
        WHERE aceptado IS NULL
        ORDER BY fecha_llegada DESC
    """, nativeQuery = true)
    List<Map<String, Object>> obtenerProductosNoAceptados();

    // Solo productos con aceptado = true
    @Query("SELECT p FROM Producto p WHERE p.aceptado = true")
    List<Producto> obtenerProductosAceptados();
}
