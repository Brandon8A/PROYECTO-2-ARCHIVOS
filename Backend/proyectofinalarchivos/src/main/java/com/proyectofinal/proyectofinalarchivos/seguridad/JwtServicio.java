package com.proyectofinal.proyectofinalarchivos.seguridad;

import io.jsonwebtoken.Claims;
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
public class JwtServicio {

    //Clave secreta (debería ir en application.properties o .env)
    @Value("${jwt.secret}")
    private String secretKey;

    // Tiempo de expiración (en milisegundos)
    @Value("${jwt.expiration}")
    private long expirationTime;

    // Generar el token JWT
    public String generateToken(String correo, String rol) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("rol", rol);

        Date ahora = new Date();
        Date expiracion = new Date(ahora.getTime() + expirationTime);

        Key key = Keys.hmacShaKeyFor(secretKey.getBytes());

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(correo)
                .setIssuedAt(ahora)
                .setExpiration(expiracion)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    // Obtener el correo (subject) desde el token
    public String extractCorreo(String token) {
        return getClaims(token).getSubject();
    }

    // Obtener el rol u otros datos del token
    public String extractRol(String token) {
        return (String) getClaims(token).get("rol");
    }

    // Validar el token
    public boolean validateToken(String token, String correoEsperado) {
        final String correoToken = extractCorreo(token);
        return (correoToken.equals(correoEsperado) && !isTokenExpired(token));
    }

    //Validar token
    public boolean validateToken(String token) {
        return !isTokenExpired(token);
    }

    // Verificar si el token expiró
    private boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    // Método interno para obtener claims
    private Claims getClaims(String token) {
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}