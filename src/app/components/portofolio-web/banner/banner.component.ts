import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent implements AfterViewInit {
  
  
  ngAfterViewInit() {
    new Swiper('.banner-swiper', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: 'fade',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });
  }
}
