package com.proyectofinal.proyectofinalarchivos.controlador;

import com.proyectofinal.proyectofinalarchivos.model.Usuario;
import com.proyectofinal.proyectofinalarchivos.servicios.ServicioUsuario;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin(origins = "http://localhost:8080")
public class RegistroUsuarioController {

    private final ServicioUsuario servicioUsuario;

    public RegistroUsuarioController(ServicioUsuario servicioUsuario) {
        this.servicioUsuario = servicioUsuario;
    }

    @PostMapping//Recibe JSON
    public Usuario registrarUsuario(@RequestBody Usuario usuario){//aqui RequestBody hace el mapeo automatico dle JSON al objeto Java(usuario)
        usuario.setRol("comun");
        return servicioUsuario.registrar(usuario);
    }
}