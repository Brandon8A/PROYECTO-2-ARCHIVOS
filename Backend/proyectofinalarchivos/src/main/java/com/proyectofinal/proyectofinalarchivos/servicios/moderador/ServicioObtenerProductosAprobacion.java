package com.proyectofinal.proyectofinalarchivos.servicios.moderador;

import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioProducto;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class ServicioObtenerProductosAprobacion {

    private final RepositorioProducto repositorioProducto;

    public ServicioObtenerProductosAprobacion(RepositorioProducto repositorioProducto) {
        this.repositorioProducto = repositorioProducto;
    }

    public List<Map<String, Object>> obtenerProductosNoAceptados() {
        return repositorioProducto.obtenerProductosNoAceptados();
    }
}