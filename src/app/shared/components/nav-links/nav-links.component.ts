import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss',
})
export class NavLinksComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
