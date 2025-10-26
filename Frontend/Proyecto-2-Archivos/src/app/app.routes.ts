import { Routes } from '@angular/router';
import { Login } from './pages/login/login/login';
import { RegistrarUsuario } from './pages/registrar-usuario/registrar-usuario/registrar-usuario';
import { InicioAdmins } from './pages/administrador/inicio-admins/inicio-admins';
import { InicioUserComun } from './pages/comun/inicio-user-comun/inicio-user-comun';
import { InicioLogistica } from './pages/logistica/inicio-logistica/inicio-logistica';
import { InicioModerador } from './pages/moderador/inicio-moderador/inicio-moderador';
import { Reportes } from './pages/administrador/reportes/reportes';
import { CrearUsuario } from './pages/administrador/crear-usuario/crear-usuario';
import { PublicarProducto } from './pages/comun/publicar-producto/publicar-producto';
import { ComentarProducto } from './pages/comun/comentar-producto/comentar-producto';
import { ListarPedidos } from './pages/comun/listar-pedidos/listar-pedidos';
import { PedidosEnCurso } from './pages/logistica/pedidos-en-curso/pedidos-en-curso';
import { SolicitudProductos } from './pages/moderador/solicitud-productos/solicitud-productos';
import { SuspensionCuenta } from './pages/moderador/suspension-cuenta/suspension-cuenta';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'registro', component: RegistrarUsuario,},
    
    {path: 'home-admin', component: InicioAdmins,
        children: [
            {path: 'crear-usuario', component: CrearUsuario},
            {path: 'reportes', component: Reportes}
        ]
    },
    {path: 'home-user', component: InicioUserComun,
        children: [
            {path: 'publicar-producto', component: PublicarProducto},
            {path: 'comentar-producto', component: ComentarProducto},
            {path: 'listar-pedidos', component: ListarPedidos}
        ]
    },
    {path: 'home-logistica', component: InicioLogistica,
        children: [
            {path: 'pedidos-en-curso', component: PedidosEnCurso}
        ]
    },
    {path: 'home-moderador', component: InicioModerador,
        children: [
            {path: 'solicitud-productos', component: SolicitudProductos},
            {path: 'suspencion-cuentas', component: SuspensionCuenta}
        ]
    }
];