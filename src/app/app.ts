import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. IMPORTA LOS MÓDULOS DE MATERIAL (PARA EL LAYOUT)
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// 2. IMPORTA TUS COMPONENTES DE LAYOUT
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  
  // 3. AÑADE LOS IMPORTS (MÓDULOS Y COMPONENTES)
  imports: [
    RouterOutlet,

    // Módulos de Material
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,

    // Tus Componentes de Layout
    Header,
    Footer,
    Sidebar
  ],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'botiquin-familiar'; 
}