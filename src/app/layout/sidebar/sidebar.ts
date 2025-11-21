// src/app/layout/sidebar/sidebar.ts

import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

// 1. Necesitamos estos módulos para que el HTML funcione
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  
  // 2. Los importamos aquí
  imports: [
    MatListModule,
    RouterModule,
    MatIconModule,
    
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  @Input() sidenav!: MatSidenav;
  closeSidebarWithDelay() {
    // 100ms es suficiente para permitir que el routerLink inicie la navegación 
    setTimeout(() => {
      if (this.sidenav) {
        this.sidenav.close();
      }
    }, 200); 
  }

  // Ya no necesitamos el "sidebar works!"
}