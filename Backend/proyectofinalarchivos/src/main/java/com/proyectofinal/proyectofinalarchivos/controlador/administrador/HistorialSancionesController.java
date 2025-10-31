package com.proyectofinal.proyectofinalarchivos.controlador.administrador;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioReporteAdministrador;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/administrador/reportes/historialSanciones")
@CrossOrigin(origins = "http://localhost:4200")
public class HistorialSancionesController {
    private final ServicioReporteAdministrador reporteAdministrador;

    public HistorialSancionesController(ServicioReporteAdministrador reporteAdministrador) {
        this.reporteAdministrador = reporteAdministrador;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerHistorialSanciones() {
        return reporteAdministrador.obtenerHistorialSanciones();
    }
}
