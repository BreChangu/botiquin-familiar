// src/app/app.routes.ts

import { Routes } from '@angular/router';

// 1. Importamos todos los componentes de página que creamos
import { Introduccion } from './pages/introduccion/introduccion';
import { Diagnostico } from './pages/diagnostico/diagnostico';
import { Antidoto } from './pages/antidoto/antidoto';
import { Instrucciones } from './pages/instrucciones/instrucciones';
import { Conclusion } from './pages/conclusion/conclusion';
import { Home } from './pages/home/home';

// 2. Definimos el "mapa" de rutas
export const routes: Routes = [
  
  // Cuando alguien entre a la raíz ('/'), redirígelo a '/portada'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Las rutas de nuestras páginas
  { path: 'home', component: Home },
  { path: 'introduccion', component: Introduccion },
  { path: 'diagnostico', component: Diagnostico },
  { path: 'antidoto', component: Antidoto },
  { path: 'instrucciones', component: Instrucciones },
  { path: 'conclusion', component: Conclusion }
];