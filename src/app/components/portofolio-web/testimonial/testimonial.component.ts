import { Component, ElementRef, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle'; // Pastikan impor ini benar

@Component({
  selector: 'app-testimonial',
  standalone: true,
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TestimonialComponent implements OnInit {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngOnInit(): void {
    // Mendaftarkan elemen Swiper
    register();
  }
}
