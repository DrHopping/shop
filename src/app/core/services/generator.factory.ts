import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GENERATED_STRING = new InjectionToken<string>('GENERATED_STRING');
export function GeneratorFactory(
  n: number
): (generatorService: GeneratorService) => string {
  return (generatorService: GeneratorService): string =>
    generatorService.generate(n);
}
