package com.proyectofinal.proyectofinalarchivos.controlador;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class holamundo {

    @GetMapping("/")
    public String prueba(){
        return "Hola mundo";
    }
}