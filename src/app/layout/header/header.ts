import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// Importamos los módulos que usará nuestro HTML
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  
  // 1. IMPORTANTE: Importamos los módulos que usaremos
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  // 2. IMPORTANTE: Con @Input(), recibimos el 'sidenav' que pasamos desde app.html
  @Input() sidenav!: MatSidenav;
}