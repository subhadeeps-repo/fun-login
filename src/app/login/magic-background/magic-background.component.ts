import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-magic-background',
  imports: [CommonModule],
  templateUrl: './magic-background.component.html',
  styleUrl: './magic-background.component.scss'
})
export class MagicBackgroundComponent implements OnInit {
  boxes: number[] = [];
  glowIntensities: number[] = [];
  isSignUp = false;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.calculateBoxes();
    this.glowIntensities = new Array(this.boxes.length).fill(0);
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateBoxes();
  }

  toggleAuthMode() {
    this.isSignUp = !this.isSignUp;
  }

  calculateBoxes() {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const boxHeight = 166;
    const boxWidth = 166;

    const rows = Math.floor(screenHeight / boxHeight);
    const columns = Math.floor(screenWidth / boxWidth);

    const count = rows * columns;
    this.boxes = Array.from({ length: count });
  }

  resetGlow() {
    this.glowIntensities.fill(0);
  }

  onMouseMove(event: MouseEvent) {
    this.resetGlow();

    const indexes = new Set<number>();
    while (indexes.size < 3) {
      const randomIndex = Math.floor(Math.random() * this.boxes.length);
      indexes.add(randomIndex);
    }

    indexes.forEach(i => (this.glowIntensities[i] = 1));
  }
}
