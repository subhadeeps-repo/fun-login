import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MagicBackgroundComponent } from "./magic-background/magic-background.component";

@Component({
  selector: 'app-login',
  imports: [CommonModule, MagicBackgroundComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
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

    const boxHeight = 166; // box height + gap
    const boxWidth = 166;  // box width + gap

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
