import { Component } from '@angular/core';
import { PillComponent } from '../../../shared/components/pill/pill.component';
import { ActivatedRoute } from '@angular/router';
import { VanService } from '../../../services/van.service';
import { Van } from '../../../models/van.model';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-van-detail',
  standalone: true,
  imports: [PillComponent, ButtonComponent],
  templateUrl: './van-detail.component.html',
  styleUrl: './van-detail.component.scss',
})
export class VanDetailComponent {
  vanDetail: Van = {
    description: '',
    hostId: '',
    id: '',
    imageUrl: '',
    name: '',
    price: 0,
    type: '',
  };
  vanType: string = '';

  constructor(private route: ActivatedRoute, private vanService: VanService) {}

  ngOnInit() {
    const id = this.route?.snapshot?.params?.['id'];
    this.vanService.getVan(id).subscribe((data) => {
      this.vanDetail = data.vans;
      this.vanType =
        this.vanDetail?.type[0]?.toUpperCase() + this.vanDetail?.type?.slice(1);
    });
  }
}
