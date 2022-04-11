import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';

const directives = [HighlightDirective, BorderDirective];

const modules = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules, ...directives],
  declarations: [...directives],
})
export class SharedModule {}
