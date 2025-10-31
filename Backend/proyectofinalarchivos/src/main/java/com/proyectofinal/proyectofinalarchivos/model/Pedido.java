package com.proyectofinal.proyectofinalarchivos.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "pedido")
public class Pedido {
    @Id
    @Column(name = "id_pedido")
    private Long idPedido;

    @Column(name = "estado_pedido")
    private String estadoPedido;

    @ManyToOne
    @JoinColumn(name = "dpi_usuario")
    private Usuario usuario;

    @Column(name = "total_pedido")
    private Double totalPedido;

    @Column(name = "fecha_llegada")
    private Date fechaPedido;

    @OneToOne
    @JoinColumn(name = "id_producto")
    private Producto producto;

    public Long getIdPedido() {
        return idPedido;
    }

    public void setIdPedido(Long idPedido) {
        this.idPedido = idPedido;
    }

    public String getEstadoPedido() {
        return estadoPedido;
    }

    public void setEstadoPedido(String estadoPedido) {
        this.estadoPedido = estadoPedido;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Double getTotalPedido() {
        return totalPedido;
    }

    public void setTotalPedido(Double totalPedido) {
        this.totalPedido = totalPedido;
    }

    public Date getFechaPedido() {
        return fechaPedido;
    }

    public void setFechaPedido(Date fechaPedido) {
        this.fechaPedido = fechaPedido;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}