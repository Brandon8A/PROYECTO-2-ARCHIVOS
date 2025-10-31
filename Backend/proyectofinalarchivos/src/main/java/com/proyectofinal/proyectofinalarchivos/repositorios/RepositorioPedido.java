package com.proyectofinal.proyectofinalarchivos.repositorios;

import com.proyectofinal.proyectofinalarchivos.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface RepositorioPedido extends JpaRepository<Pedido, Long> {
    @Query("SELECT p.usuario AS usuario, SUM(p.totalPedido) AS totalGanancia " +
            "FROM Pedido p " +
            "WHERE p.estadoPedido = 'entregado' " +
            "AND p.fechaPedido BETWEEN :fechaInicio AND :fechaFin " +
            "GROUP BY p.usuario " +
            "ORDER BY SUM(p.totalPedido) DESC")
    List<Object[]> obtenerTop5ClientesPorCompras(@Param("fechaInicio") Date fechaInicio,
                                                 @Param("fechaFin") Date fechaFin);

    // Consulta para Top 5 vendedores por cantidad de productos vendidos
    @Query("SELECT u.dpi AS dpi, u.nombre AS nombre, u.correo AS correo, COUNT(p.idPedido) AS totalVendidos " +
            "FROM Pedido p " +
            "JOIN p.producto pr " +
            "JOIN pr.usuario u " +
            "WHERE p.estadoPedido = 'entregado' " +
            "AND p.fechaPedido BETWEEN :fechaInicio AND :fechaFin " +
            "GROUP BY u.dpi, u.nombre, u.correo " +
            "ORDER BY COUNT(p.idPedido) DESC")
    List<Object[]> obtenerTop5ClientesPorVentas(@Param("fechaInicio") Date fechaInicio,
                                     @Param("fechaFin") Date fechaFin);

    // Consulta para Top 10 clientes con más pedidos en un intervalo de tiempo
    @Query("SELECT u.dpi AS dpi, u.nombre AS nombre, u.correo AS correo, COUNT(p.idPedido) AS totalPedidos " +
            "FROM Pedido p " +
            "JOIN p.usuario u " +
            "WHERE p.estadoPedido = 'entregado' " +
            "GROUP BY u.dpi, u.nombre, u.correo " +
            "ORDER BY COUNT(p.idPedido) DESC")
    List<Object[]> obtenerTop10ClientesConMasProductos();

    @Query("SELECT p.idPedido, p.estadoPedido, p.fechaPedido FROM Pedido p WHERE p.estadoPedido = 'en curso'")
    List<Object[]> obtenerPedidosEnCurso();


}