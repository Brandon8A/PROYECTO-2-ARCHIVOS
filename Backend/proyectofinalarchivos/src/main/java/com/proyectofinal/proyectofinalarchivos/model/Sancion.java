package com.proyectofinal.proyectofinalarchivos.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "sancion")
public class Sancion {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_sancion")
    private Long idSancion;

    @Column(name = "motivo")
    private String motivo;

    @Column(name = "fecha_sancion")
    @Temporal(TemporalType.DATE)
    private Date fechaSancion;

    @Column(name = "estado")
    private String estado;

    @ManyToOne
    @JoinColumn(name = "dpi_usuario_sancionado", referencedColumnName = "dpi")
    private Usuario usuarioSancionado;

    public Long getIdSancion() {
        return idSancion;
    }

    public void setIdSancion(Long idSancion) {
        this.idSancion = idSancion;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public Date getFechaSancion() {
        return fechaSancion;
    }

    public void setFechaSancion(Date fechaSancion) {
        this.fechaSancion = fechaSancion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Usuario getUsuarioSancionado() {
        return usuarioSancionado;
    }

    public void setUsuarioSancionado(Usuario usuarioSancionado) {
        this.usuarioSancionado = usuarioSancionado;
    }
}