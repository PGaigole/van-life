import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.scss',
})
export class PillComponent {
  @Input() type: string = '';
  @Input() selected: boolean = false;
  ifSelected: string = '';

  getClass() {
    return `pill-${this.type} ${this.ifSelected}`;
  }

  ngOnInit() {
    this.ifSelected = this.selected ? 'selected' : '';
  }
}
