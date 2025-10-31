package com.proyectofinal.proyectofinalarchivos.controlador.administrador;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioReporteAdministrador;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/administrador/reportes/historialNotificaciones")
@CrossOrigin(origins = "http://localhost:4200")
public class HistorialNotificacionesController {
    private final ServicioReporteAdministrador reporteAdministrador;

    public HistorialNotificacionesController(ServicioReporteAdministrador reporteAdministrador) {
        this.reporteAdministrador = reporteAdministrador;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerHistorialNotificaciones(){
        return reporteAdministrador.obtenerHistorialNotificaciones();
    }
}
