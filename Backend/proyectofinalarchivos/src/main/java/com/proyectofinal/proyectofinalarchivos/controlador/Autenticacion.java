package com.proyectofinal.proyectofinalarchivos.controlador;

import com.proyectofinal.proyectofinalarchivos.model.Usuario;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioUsuario;
import com.proyectofinal.proyectofinalarchivos.seguridad.JwtServicio;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/autenticacion")
/*
@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://gleaming-unicorn-b3406d.netlify.app"
})*/
public class Autenticacion {

    private final RepositorioUsuario repositorioUsuario;
    private final PasswordEncoder passwordEncoder;
    private final JwtServicio jwtServicio;

    public Autenticacion(RepositorioUsuario repositorioUsuario, PasswordEncoder passwordEncoder, JwtServicio jwtServicio) {
        this.repositorioUsuario = repositorioUsuario;
        this.passwordEncoder = passwordEncoder;
        this.jwtServicio = jwtServicio;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> body) {
        System.out.println("Entro al endpoint login");
        String correo = body.get("correo");
        String password = body.get("contrasenia");

        System.out.println("Correo: " + correo + "contraseña: " + password);

        Map<String, Object> response = new HashMap<>();

        //Busca el usuario en la base de datos
        Usuario usuario = repositorioUsuario.findByCorreo(correo).orElse(null);

        //Validar credenciales
        if (usuario != null && passwordEncoder.matches(password, usuario.getContrasenia())) {
            String rol = usuario.getRol();
            String token = jwtServicio.generateToken(usuario.getCorreo(), rol);
            System.out.println("Token generado: " + token);
            response.put("token", token);
            response.put("correo", usuario.getCorreo());
            response.put("rol", rol);
            return ResponseEntity.ok(response);
        }

        //En caso de error, devolver un 401 (no autorizado)
        response.put("error", "Credenciales inválidas");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Usuario usuario) {
        Map<String, Object> response = new HashMap<>();

        // Verificar si el correo ya existe
        if (repositorioUsuario.findByCorreo(usuario.getCorreo()).isPresent()) {
            response.put("error", "El correo ya está registrado");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        // Encriptar contraseña
        usuario.setContrasenia(passwordEncoder.encode(usuario.getContrasenia()));

        // Asignar rol por defecto si no se envía uno
        if (usuario.getRol() == null || usuario.getRol().isBlank()) {
            usuario.setRol("comun");
        }

        // Guardar usuario en la base de datos
        Usuario nuevoUsuario = repositorioUsuario.save(usuario);

        // Generar token JWT con correo y rol
        String token = jwtServicio.generateToken(nuevoUsuario.getCorreo(), nuevoUsuario.getRol());

        // Construir respuesta
        response.put("token", token);
        response.put("correo", nuevoUsuario.getCorreo());
        response.put("rol", nuevoUsuario.getRol());

        // Devolver 201 Creado
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}