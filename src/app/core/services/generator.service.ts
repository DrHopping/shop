import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  generate(n: number): string {
    const allCapsAlpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const allLowerAlpha = [...'abcdefghijklmnopqrstuvwxyz'];
    const allNumbers = [...'0123456789'];

    const chars = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];

    return [...Array(n)]
      .map((i) => chars[(Math.random() * chars.length) | 0])
      .join('');
  }
}
