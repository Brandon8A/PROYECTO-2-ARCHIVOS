package com.proyectofinal.proyectofinalarchivos.controlador.administrador;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioReporteAdministrador;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/administrador/reportes/Top10Productos")
@CrossOrigin(origins = "http://localhost:4200")
public class Top10ProductosController {
    private final ServicioReporteAdministrador reporteAdministrador;

    public Top10ProductosController(ServicioReporteAdministrador reporteAdministrador) {
        this.reporteAdministrador = reporteAdministrador;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerTop10Productos(
            @RequestParam String fechaInicio,
            @RequestParam String fechaFin) {
        return reporteAdministrador.obtenerTop10Productos(fechaInicio, fechaFin);
    }
}