package com.proyectofinal.proyectofinalarchivos.controlador.administrador;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioReporteAdministrador;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/administrador/reportes/Top10ClientesConMasProductos")
@CrossOrigin(origins = "http://localhost:4200")
public class Top10ClientesConMayorProductosController {
    private final ServicioReporteAdministrador reporteAdministrador;

    public Top10ClientesConMayorProductosController(ServicioReporteAdministrador reporteAdministrador) {
        this.reporteAdministrador = reporteAdministrador;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerTop5ClientesPorVentas() {
        return reporteAdministrador.obtenerTop10ClientesConMasProductos();
    }
}