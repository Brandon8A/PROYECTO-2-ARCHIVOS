package com.proyectofinal.proyectofinalarchivos.controlador.logistica;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioEntregaProductoLogistica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/logistica/obtenerPedidos")
@CrossOrigin(origins = "http://localhost:4200")
public class ObtenerPedidosEnCursoController {
    private final ServicioEntregaProductoLogistica servicioEntregaProductoLogistica;

    public ObtenerPedidosEnCursoController(ServicioEntregaProductoLogistica servicioEntregaProductoLogistica) {
        this.servicioEntregaProductoLogistica = servicioEntregaProductoLogistica;
    }

    @GetMapping
    public List<Map<String, Object>> obtenerPedidosEnCurso() {
        return servicioEntregaProductoLogistica.obtenerPedidosEnCurso();
    }
}
