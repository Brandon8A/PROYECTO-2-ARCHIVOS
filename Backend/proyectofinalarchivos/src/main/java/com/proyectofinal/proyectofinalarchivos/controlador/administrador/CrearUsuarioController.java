package com.proyectofinal.proyectofinalarchivos.controlador.administrador;

import com.proyectofinal.proyectofinalarchivos.model.Usuario;
import com.proyectofinal.proyectofinalarchivos.servicios.ServicioUsuario;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/administrador/crearUsuario")
@CrossOrigin(origins = "http://localhost:4200")
public class CrearUsuarioController {

    private final ServicioUsuario servicioUsuario;

    public CrearUsuarioController(ServicioUsuario servicioUsuario) {
        this.servicioUsuario = servicioUsuario;
    }

    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario usuarioNuevo){
        System.out.println("Ingresando al metodo crearUsuario() PostMapping");
        return servicioUsuario.registrar(usuarioNuevo);
    }
}