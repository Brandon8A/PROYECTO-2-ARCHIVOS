package com.proyectofinal.proyectofinalarchivos.repositorios;

import com.proyectofinal.proyectofinalarchivos.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositorioUsuario  extends JpaRepository<Usuario, Long> {
    boolean existsByCorreo(String correo);
    boolean existsByDpi(String dpi);
    Optional<Usuario> findByCorreo(String correo);
}