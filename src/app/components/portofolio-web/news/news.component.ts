import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {SwiperContainer} from 'swiper/element'
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newSwiper') swiper!: ElementRef <SwiperContainer>;

  


 onPrev(){
  this.swiper.nativeElement.swiper.slidePrev();
 }
 onNext(){
  this.swiper.nativeElement.swiper.slideNext();
 }
}
