package com.proyectofinal.proyectofinalarchivos.servicios;

import com.proyectofinal.proyectofinalarchivos.model.Pedido;
import com.proyectofinal.proyectofinalarchivos.repositorios.RepositorioPedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ServicioEntregaProductoLogistica {
    @Autowired
    private RepositorioPedido repositorioPedido;

    /*
    public List<Pedido> obtenerPedidosEnCurso() {
        return repositorioPedido.obtenerPedidosEnCurso();
    }
     */

    public List<Map<String, Object>> obtenerPedidosEnCurso() {
        List<Object[]> resultados = repositorioPedido.obtenerPedidosEnCurso();
        List<Map<String, Object>> respuesta = new ArrayList<>();

        for (Object[] obj : resultados) {
            Map<String, Object> map = new HashMap<>();
            map.put("idPedido", obj[0]);
            map.put("estado", obj[1]);
            map.put("fechaEntrega", obj[2]);
            respuesta.add(map);
        }

        return respuesta;
    }

    public boolean marcarComoEntregado(Long idPedido) {
        Optional<Pedido> pedidoOpt = repositorioPedido.findById(idPedido);
        if (pedidoOpt.isPresent()) {
            Pedido pedido = pedidoOpt.get();
            pedido.setEstadoPedido("entregado");
            repositorioPedido.save(pedido);
            return true;
        }
        return false;
    }
}