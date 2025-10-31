package com.proyectofinal.proyectofinalarchivos.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name="compra")
public class Compra {

    @Id
    private int id_compra;

    private int id_producto;
    private String dpi_usuario;
    private Date fecha_compra;

    public int getId_compra() {
        return id_compra;
    }

    public void setId_compra(int id_compra) {
        this.id_compra = id_compra;
    }

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public String getDpi_usuario() {
        return dpi_usuario;
    }

    public void setDpi_usuario(String dpi_usuario) {
        this.dpi_usuario = dpi_usuario;
    }

    public Date getFecha_compra() {
        return fecha_compra;
    }

    public void setFecha_compra(Date fecha_compra) {
        this.fecha_compra = fecha_compra;
    }
}
