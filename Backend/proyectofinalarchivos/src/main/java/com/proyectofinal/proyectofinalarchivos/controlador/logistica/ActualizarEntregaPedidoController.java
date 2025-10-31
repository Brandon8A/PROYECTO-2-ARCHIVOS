package com.proyectofinal.proyectofinalarchivos.controlador.logistica;

import com.proyectofinal.proyectofinalarchivos.servicios.ServicioEntregaProductoLogistica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/logistica")
@CrossOrigin(origins = "http://localhost:4200")
public class ActualizarEntregaPedidoController {

    @Autowired
    private ServicioEntregaProductoLogistica servicioEntregaProductoLogistica;

    @PutMapping("/entregar/{id}")
    public ResponseEntity<String> marcarComoEntregado(@PathVariable Long id) {
        boolean actualizado = servicioEntregaProductoLogistica.marcarComoEntregado(id);
        if (actualizado) {
            return ResponseEntity.ok("Pedido marcado como entregado");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pedido no encontrado");
        }
    }
}