import { Injectable, OnDestroy, NgZone } from '@angular/core';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root',
})
export class ScrollService implements OnDestroy {
  public lenis: Lenis | undefined;

  constructor(private ngZone: NgZone) {
    this.init();
  }

  private init() {
    // Используем NgZone.runOutsideAngular, чтобы requestAnimationFrame
    // не триггерил постоянную проверку изменений Angular (Performance!)
    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const render = (time: number) => {
        this.lenis?.raf(time);
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    });
  }

  // Метод для перехода по якорям или прокрутки к элементу
  public scrollTo(target: string | HTMLElement) {
    this.lenis?.scrollTo(target);
  }

  ngOnDestroy() {
    this.lenis?.destroy();
  }
}
