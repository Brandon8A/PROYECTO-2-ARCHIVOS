package com.proyectofinal.proyectofinalarchivos.controlador.moderador;

import com.proyectofinal.proyectofinalarchivos.model.Producto;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioProducto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/moderador")
@CrossOrigin(origins = "http://localhost:4200")
public class AceptarProductosController {
    private final RepositorioProducto repositorioProducto;

    public AceptarProductosController(RepositorioProducto repositorioProducto) {
        this.repositorioProducto = repositorioProducto;
    }

    @PutMapping("/producto/{id}/estado")
    public ResponseEntity<String> actualizarEstadoProducto(
            @PathVariable Long id,
            @RequestBody Map<String, Object> datos) {

        Boolean entregado = (Boolean) datos.get("aceptado");

        Optional<Producto> productoOpt = repositorioProducto.findById(id);
        if (productoOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Producto no encontrado");
        }

        Producto producto = productoOpt.get();
        producto.setAceptado(entregado);
        repositorioProducto.save(producto);

        return ResponseEntity.ok("Estado actualizado correctamente");
    }
}
