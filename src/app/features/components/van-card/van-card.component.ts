import { Component, Input } from '@angular/core';
import { Van } from '../../../models/van.model';
import { PillComponent } from '../../../shared/components/pill/pill.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-van-card',
  standalone: true,
  imports: [PillComponent],
  templateUrl: './van-card.component.html',
  styleUrl: './van-card.component.scss',
})
export class VanCardComponent {
  @Input() van: Van = {
    description: '',
    hostId: '',
    id: '',
    imageUrl: '',
    name: '',
    price: 0,
    type: '',
  };
  vanType: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.vanType = this.van.type[0].toUpperCase() + this.van.type.slice(1);
  }

  goToVanDetail() {
    this.router.navigate([`/vans/${this.van.id}`]);
  }
}
