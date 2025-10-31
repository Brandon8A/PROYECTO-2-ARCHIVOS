package com.proyectofinal.proyectofinalarchivos.servicios;

import com.proyectofinal.proyectofinalarchivos.model.Usuario;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioCompra;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioNotificacion;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioPedido;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioSancion;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.*;

@Service
public class ServicioReporteAdministrador {
    private final RepositorioCompra repositorioCompra;
    private final RepositorioPedido repositorioPedido;
    private final RepositorioSancion repositorioSancion;
    private final RepositorioNotificacion repositorioNotificacion;


    public ServicioReporteAdministrador(RepositorioCompra repositorioCompra, RepositorioPedido repositorioPedido, RepositorioSancion repositorioSancion, RepositorioNotificacion repositorioNotificacion) {
        this.repositorioCompra = repositorioCompra;
        this.repositorioPedido  = repositorioPedido;
        this.repositorioSancion = repositorioSancion;
        this.repositorioNotificacion = repositorioNotificacion;
    }

    public List<Map<String, Object>> obtenerTop10Productos(String fechaInicio, String fechaFin) {
        // Convertir String a Timestamp
        Timestamp inicio = Timestamp.valueOf(LocalDate.parse(fechaInicio).atStartOfDay());
        Timestamp fin = Timestamp.valueOf(LocalDate.parse(fechaFin).atTime(23, 59, 59));

        return repositorioCompra.obtenerTop10ProductosMasVendidos(inicio, fin);
    }

    public List<Map<String, Object>> obtenerTop5ClientesPorCompras(Date fechaInicio, Date fechaFin) {
        List<Object[]> resultados = repositorioPedido.obtenerTop5ClientesPorCompras(fechaInicio, fechaFin);
        List<Map<String, Object>> respuesta = new ArrayList<>();

        resultados.stream()
                .limit(5)
                .forEach(obj -> {
                    Usuario u = (Usuario) obj[0];
                    Double total = (Double) obj[1];

                    Map<String, Object> map = new HashMap<>();
                    map.put("dpi", u.getDpi());
                    map.put("nombre", u.getNombre());
                    map.put("correo", u.getCorreo());
                    map.put("totalGanancia", total);
                    respuesta.add(map);
                });

        return respuesta;
    }

    public List<Map<String, Object>> obtenerTop5ClientesPorVentas(Date fechaInicio, Date fechaFin) {
        List<Object[]> resultados = repositorioPedido.obtenerTop5ClientesPorVentas(fechaInicio, fechaFin);
        List<Map<String, Object>> respuesta = new ArrayList<>();

        resultados.stream()
                .limit(5)
                .forEach(obj -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("dpi", obj[0]);
                    map.put("nombre", obj[1]);
                    map.put("correo", obj[2]);
                    map.put("totalVendidos", obj[3]);
                    respuesta.add(map);
                });

        return respuesta;
    }

    public List<Map<String, Object>> obtenerTop10ClientesConMasProductos() {
        List<Object[]> resultados = repositorioPedido.obtenerTop10ClientesConMasProductos();
        List<Map<String, Object>> respuesta = new ArrayList<>();

        resultados.stream()
                .limit(5)
                .forEach(obj -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("dpi", obj[0]);
                    map.put("nombre", obj[1]);
                    map.put("correo", obj[2]);
                    map.put("totalVendidos", obj[3]);
                    respuesta.add(map);
                });

        return respuesta;
    }

    public List<Map<String, Object>> obtenerHistorialSanciones() {
        List<Object[]> resultados = repositorioSancion.obtenerHistorialSanciones();
        List<Map<String, Object>> respuesta = new ArrayList<>();
        for (Object[] obj : resultados) {
            Map<String, Object> map = new HashMap<>();
            map.put("idSancion", obj[0]);
            map.put("motivo", obj[1]);
            map.put("fechaSancion", obj[2]);
            map.put("estado", obj[3]);
            map.put("dpiUsuario", obj[4]);
            map.put("nombre", obj[5]);
            map.put("correo", obj[6]);
            respuesta.add(map);
        }

        /*
        resultados.stream()
                .limit(5)
                .forEach(obj -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("dpi", obj[0]);
                    map.put("nombre", obj[1]);
                    map.put("correo", obj[2]);
                    map.put("totalVendidos", obj[3]);
                    respuesta.add(map);
                });

 */
        return respuesta;
    }

    public List<Map<String, Object>> obtenerHistorialNotificaciones() {
        List<Object[]> resultados = repositorioNotificacion.obtenerHistorialNotificaciones();
        List<Map<String, Object>> respuesta = new ArrayList<>();

        for (Object[] obj : resultados) {
            Map<String, Object> map = new HashMap<>();
            map.put("id_notificacion", obj[0]);
            map.put("correo_notificado", obj[1]);
            map.put("fecha_notificacion", obj[2]);
            respuesta.add(map);
        }

        return respuesta;
    }
}