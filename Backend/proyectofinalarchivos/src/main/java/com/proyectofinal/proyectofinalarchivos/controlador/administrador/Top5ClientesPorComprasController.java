package com.proyectofinal.proyectofinalarchivos.controlador.administrador;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioReporteAdministrador;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/administrador/reportes/Top5Clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class Top5ClientesPorComprasController {
    private final ServicioReporteAdministrador reporteAdministrador;

    public Top5ClientesPorComprasController(ServicioReporteAdministrador reporteAdministrador) {
        this.reporteAdministrador = reporteAdministrador;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerTop5Clientes(
            @RequestParam("fechaInicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fechaInicio,
            @RequestParam("fechaFin") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fechaFin) {

        return reporteAdministrador.obtenerTop5ClientesPorCompras(fechaInicio, fechaFin);
    }
}