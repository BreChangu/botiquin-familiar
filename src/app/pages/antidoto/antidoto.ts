// src/app/pages/antidoto/antidoto.ts (CÓDIGO COMPLETO REFRACTORIZADO)

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { NgIf, NgFor,NgClass } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

// --- INTERFACES ---
interface AntidotePhrase {
  invalidante: string;
  validante: string;
}

interface Challenge {
  situation: string;
  options: { text: string, isCorrect: boolean }[];
  isAttempted: boolean;
  userAnswer: boolean;
  feedback: string;
}

@Component({
  selector: 'app-antidoto',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    NgIf,
    NgFor,
    NgClass,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './antidoto.html',
  styleUrl: './antidoto.css'
})
export class Antidoto {
  // --- VARIABLES PARA LA TABLA ---
  displayedColumns: string[] = ['invalidante', 'validante'];
  dataSource: AntidotePhrase[] = [
    { invalidante: '"No llores" / "No es para tanto"', validante: '"Estoy aquí contigo. Está bien llorar."' },
    { invalidante: '"Estás exagerando"', validante: '"Veo que esto es muy importante para ti. Cuéntame más."' },
    { invalidante: '"¡Cálmate ya!" / "No te enojes"', validante: '"Tienes derecho a estar enojado. Hablemos de qué pasó."' },
    { invalidante: '"¡Échale ganas!"', validante: '"Veo el esfuerzo que estás haciendo. ¿Hay algo en lo que te pueda ayudar?"' },
    { invalidante: '"Eso no es nada. A mí..."', validante: '"Siento mucho que estés pasando por esto. Debe ser muy difícil."' },
    { invalidante: 'Evitar el tema o cambiar la conversación', validante: '"Gracias por compartir esto. Estoy aquí para escucharte."' }
  ];

  // --- VARIABLES PARA EL DESAFÍO SECUENCIAL ---
  challengeComplete: boolean = false;
  currentChallengeIndex: number = 0;
  totalCorrect: number = 0;
  showFeedback: boolean = false;

  // 10 ESCENARIOS DE PRÁCTICA
  challengeScenarios: Challenge[] = [
    {
      situation: 'Tu pareja llega del trabajo y dice: "¡No puedo más con mi jefe! Todo es culpa de él. Me siento inútil".',
      options: [
        { text: 'A. "¡Cálmate! Si no te gusta, busca otro trabajo."', isCorrect: false },
        { text: 'B. "Entiendo que estés agotado y frustrado. Debe ser muy difícil sentirse inútil después de tanto esfuerzo."', isCorrect: true },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu hijo(a) (7 años) llora porque no pudo dibujar un unicornio "perfecto". "Soy malo dibujando," dice.',
      options: [
        { text: 'A. "No llores, es solo un dibujo. Yo lo veo muy bien."', isCorrect: false },
        { text: 'B. "Veo que te sientes frustrado porque no salió como esperabas. Es difícil cuando el resultado no coincide con la idea."', isCorrect: true },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu hijo(a) (16 años) te cuenta un chisme escolar y le dices: "Eso no es un problema, es una tontería".',
      options: [
        { text: 'A. "Es cierto que no es un problema grande, pero entiendo que te moleste. ¿Qué sientes con eso?"', isCorrect: true },
        { text: 'B. "Mira el lado bueno; no es un problema serio. Eso no es nada."', isCorrect: false },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu pareja te dice: "Siento que nunca tenemos tiempo de hablar, estoy muy desconectado(a) de ti últimamente".',
      options: [
        { text: 'A. "¡Estás exagerando! Hablamos en la cena. Yo estoy agotado/a, no te quejes."', isCorrect: false },
        { text: 'B. "Entiendo esa sensación de desconexión. Gracias por decírmelo. ¿Qué necesitas de mí para sentirte más conectado/a?"', isCorrect: true },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu hijo(a) (10 años) está furioso porque su hermana rompió su juguete favorito.',
      options: [
        { text: 'A. "Es normal estar furioso, ese juguete era importante. Vamos a pensar cómo arreglarlo."', isCorrect: true },
        { text: 'B. "No te enojes así. Los juguetes se rompen y tu hermana no lo hizo a propósito."', isCorrect: false },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu hijo(a) (12 años) te dice que se siente mal por un examen reprobado: "Soy un tonto".',
      options: [
        { text: 'A. "Sé que te sientes decepcionado por la nota. No eres un tonto, solo es un mal examen. ¿Qué podemos aprender?"', isCorrect: true },
        { text: 'B. "¡Claro que no! ¡Eres muy inteligente! ¿Por qué no le echaste ganas? Anda, ve a estudiar."', isCorrect: false },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Un familiar mayor te critica: "Deberías limpiar más y dejar el teléfono, así no vas a lograr nada".',
      options: [
        { text: 'A. "Entiendo que te preocupe el orden. Aprecio tu opinión, pero estoy haciendo lo mejor que puedo ahora."', isCorrect: true },
        { text: 'B. "¡Estás exagerando! Yo trabajo mucho. No te metas en mis cosas."', isCorrect: false },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu pareja está ansiosa por un viaje: "Creo que olvidé algo, estoy nerviosa por el vuelo".',
      options: [
        { text: 'A. "¡Cálmate! Ya revisamos todo dos veces. No hay razón para estar nerviosa."', isCorrect: false },
        { text: 'B. "Veo que te sientes ansiosa por que todo salga bien. ¿Revisamos la lista de maletas juntos para estar seguros?"', isCorrect: true },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu hijo(a) (9 años) se frustra con un videojuego y grita: "¡Esto es estúpido! ¡Lo odio!".',
      options: [
        { text: 'A. "Entiendo que estés frustrado. El juego te está costando trabajo. Es un sentimiento muy molesto."', isCorrect: true },
        { text: 'B. "Si vas a gritar, apágalo. ¡Deja de exagerar y no te enojes por una tontería!"', isCorrect: false },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
    {
      situation: 'Tu pareja te dice: "Estoy agotado/a de tomar todas las decisiones de la casa. Me siento solo/a en esto".',
      options: [
        { text: 'A. "Eso no es cierto, ¡yo te ayudo! Yo pagué la luz. No te quejes."', isCorrect: false },
        { text: 'B. "Comprendo ese agotamiento y la sensación de soledad. ¿Qué decisiones puedo tomar yo esta semana para aliviar tu carga?"', isCorrect: true },
      ],
      isAttempted: false, userAnswer: false, feedback: ''
    },
  ];

  // Lógica de respuesta
  responder(selectedOption: any) {
    let current = this.challengeScenarios[this.currentChallengeIndex];
    current.isAttempted = true;
    current.userAnswer = selectedOption.isCorrect;

    if (current.userAnswer) {
      this.totalCorrect++;
      current.feedback = '¡Felicidades, Antídoto Aplicado! Esta respuesta validó la emoción y abrió el diálogo.';
    } else {
      current.feedback = 'Incorrecto. La respuesta correcta fue la opción validante. La que elegiste minimizó el sentimiento o cerró la comunicación.';
    }

    this.showFeedback = true;
  }

  // Lógica de navegación
  nextScenario() {
    this.showFeedback = false;
    if (this.currentChallengeIndex < this.challengeScenarios.length - 1) {
      this.currentChallengeIndex++;
    } else {
      this.challengeComplete = true; // Finaliza el quiz
    }
  }

  // Lógica de utilidad
  resetChallenge() {
    this.challengeComplete = false;
    this.currentChallengeIndex = 0;
    this.totalCorrect = 0;
    this.showFeedback = false;
    this.challengeScenarios.forEach(s => {
      s.isAttempted = false;
      s.userAnswer = false;
      s.feedback = '';
    });
  }
}