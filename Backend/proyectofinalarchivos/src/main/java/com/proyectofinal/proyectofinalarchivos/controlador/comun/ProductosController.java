package com.proyectofinal.proyectofinalarchivos.controlador.comun;

import com.proyectofinal.proyectofinalarchivos.model.Producto;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioProducto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/comun/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductosController {

    private final RepositorioProducto repositorioProducto;

    public ProductosController(RepositorioProducto repositorioProducto) {
        this.repositorioProducto = repositorioProducto;
    }

    // Obtener todos los productos
    @GetMapping
    public ResponseEntity<List<Producto>> obtenerProductos() {
        List<Producto> productos = repositorioProducto.obtenerProductosAceptados();
        return ResponseEntity.ok(productos);
    }
}