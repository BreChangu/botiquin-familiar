// src/app/pages/portada/portada.ts

import { Component } from '@angular/core';

// 1. Importa el módulo de tarjetas
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portada',
  standalone: true,
  
  // 2. Añádelo a los imports
  imports: [MatCardModule,MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}