import { Component } from '@angular/core';
import { VanCardComponent } from '../../features/components/van-card/van-card.component';
import { VanService } from '../../services/van.service';
import { Vans } from '../../models/van.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vans',
  standalone: true,
  imports: [CommonModule, VanCardComponent],
  templateUrl: './vans.component.html',
  styleUrl: './vans.component.scss',
})
export class VansComponent {
  vans: Vans = { vans: [] };

  constructor(private vanService: VanService) {}

  ngOnInit(): void {
    this.vanService.getVans().subscribe((data) => (this.vans = data));
  }
}
