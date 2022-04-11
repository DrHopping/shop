import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

const directives = [HighlightDirective, BorderDirective, OrderByPipe];

const modules = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule, 
  FormsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules, ...directives],
  declarations: [...directives],
})
export class SharedModule {}
