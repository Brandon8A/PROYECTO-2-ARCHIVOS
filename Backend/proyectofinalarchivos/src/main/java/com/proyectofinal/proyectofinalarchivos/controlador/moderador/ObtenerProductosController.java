package com.proyectofinal.proyectofinalarchivos.controlador.moderador;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioReporteAdministrador;
import com.proyectofinal.proyectofinalarchivos.servicios.moderador.ServicioObtenerProductosAprobacion;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/moderador/aprobar-productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ObtenerProductosController {
    private final ServicioObtenerProductosAprobacion servicioModerador;

    public ObtenerProductosController(ServicioObtenerProductosAprobacion servicioModerador) {
        this.servicioModerador = servicioModerador;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerTop10Productos() {
        return servicioModerador.obtenerProductosNoAceptados();
    }
}