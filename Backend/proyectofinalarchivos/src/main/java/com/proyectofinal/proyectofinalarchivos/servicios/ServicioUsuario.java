package com.proyectofinal.proyectofinalarchivos.servicios;

import com.proyectofinal.proyectofinalarchivos.model.Usuario;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioUsuario;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ServicioUsuario {
    private final RepositorioUsuario repositorioUsuario;
    private final PasswordEncoder passwordEncoder;

    public ServicioUsuario(RepositorioUsuario usuario, PasswordEncoder passwordEncoder) {
        this.repositorioUsuario = usuario;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Funcion que se encarga de guardar un usuario en la db
     * @param usuario que se va a almacenar en la db
     * @return el usuairo que se guardo correctamente
     */
    public Usuario registrar(Usuario usuario){
        if (repositorioUsuario.existsByDpi(usuario.getDpi())){
            throw new RuntimeException("El DPI ya está registrado.");
        }
        if (repositorioUsuario.existsByCorreo(usuario.getCorreo())){
            throw new RuntimeException("El correo ya está registrado.");
        }
        //Cifrar la contraseña antes de guardar
        String passwordEncriptado = passwordEncoder.encode(usuario.getContrasenia());
        usuario.setContrasenia(passwordEncriptado);
        return repositorioUsuario.save(usuario);//Guarda el objeto (usuario)
    }
}