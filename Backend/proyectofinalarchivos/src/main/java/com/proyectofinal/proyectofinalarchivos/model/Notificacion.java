package com.proyectofinal.proyectofinalarchivos.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "notificacion")
public class Notificacion {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_notificacion")
    private Long idNotificacion;

    @Column(name = "correo_notificado")
    private String correoNotificado;

    @Column(name = "fecha_notificacion")
    @Temporal(TemporalType.DATE)
    private Date fechaNotificacion;

    public Long getIdNotificacion() {
        return idNotificacion;
    }

    public void setIdNotificacion(Long idNotificacion) {
        this.idNotificacion = idNotificacion;
    }

    public String getCorreoNotificado() {
        return correoNotificado;
    }

    public void setCorreoNotificado(String correoNotificado) {
        this.correoNotificado = correoNotificado;
    }

    public Date getFechaNotificacion() {
        return fechaNotificacion;
    }

    public void setFechaNotificacion(Date fechaNotificacion) {
        this.fechaNotificacion = fechaNotificacion;
    }
}
