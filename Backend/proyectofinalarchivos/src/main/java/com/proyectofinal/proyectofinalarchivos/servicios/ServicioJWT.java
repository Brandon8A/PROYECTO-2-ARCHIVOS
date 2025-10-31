package com.proyectofinal.proyectofinalarchivos.servicios;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class ServicioJWT {
    private final Key key;

    @Value("${jwt.expiration}")
    private long expirationTime; // milisegundos (ej: 3600000 = 1 hora)

    public ServicioJWT(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    // Generar token con correo y rol
    public String generateToken(String correo, String rol) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("rol", rol);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(correo)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // Obtener correo (subject)
    public String extractCorreo(String token) {
        return extractAllClaims(token).getSubject();
    }

    // Obtener rol
    public String extractRol(String token) {
        return (String) extractAllClaims(token).get("rol");
    }

    // Validar token
    public boolean validateToken(String token) {
        try {
            extractAllClaims(token); // si falla lanza excepción
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    // 🔍 Extraer claims internos del JWT
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}