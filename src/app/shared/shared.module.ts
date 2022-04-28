import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { ShellComponent } from './components/shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';

const directives = [HighlightDirective, BorderDirective, OrderByPipe];
const components = [ShellComponent, DropdownComponent];

const modules = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  LayoutModule,
  MatSidenavModule,
  FormsModule,
  RouterModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules, ...directives, ...components],
  declarations: [...directives, ...components],
})
export class SharedModule {}
