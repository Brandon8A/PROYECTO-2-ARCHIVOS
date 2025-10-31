package com.proyectofinal.proyectofinalarchivos.configuracion;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

@RestController
public class ConfiguracionNgrokController {

    @GetMapping("/config")
    public String getNgrokUrl() throws IOException {
        try {
            // URL local del API de ngrok
            URL url = new URL("http://127.0.0.1:4040/api/tunnels");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            //Leer respuesta json
            Scanner sc = new Scanner(url.openStream());
            StringBuilder inline = new StringBuilder();
            while (sc.hasNext()) {
                inline.append(sc.nextLine());
            }
            sc.close();

            //Parsear con jackson
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(inline.toString());

            //Tomar la URL publica del primer tunel
            String publicUrl = root.get("tunnels").get(0).get("public_url").asText();

            return publicUrl;

        } catch (Exception e) {
            return "http://localhost:8080"; // fallback si ngrok no está activo
        }
    }
}