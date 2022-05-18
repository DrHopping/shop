import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ConfigOptionsService } from './core/services/config-options.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('appTitle') appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(private configService: ConfigOptionsService) {}

  ngOnInit(): void {
    this.configService.initialize();
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Angular Course Shop';
  }
}
