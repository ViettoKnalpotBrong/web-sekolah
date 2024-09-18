import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/portofolio-web/header/header.component';
import { BannerComponent } from '../../components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '../../components/portofolio-web/header-menu/header-menu.component';
import { AboutUsComponent } from 'src/app/components/portofolio-web/about-us/about-us.component';
import { TestimonialComponent } from 'src/app/components/portofolio-web/testimonial/testimonial.component';
import { FooterComponent } from 'src/app/components/portofolio-web/footer/footer.component';
import { NewsComponent } from 'src/app/components/portofolio-web/news/news.component';
import { JurusanComponent } from 'src/app/components/portofolio-web/jurusan/jurusan.component';
import { EkstrakurikulerComponent } from "../../components/portofolio-web/ekstrakulikuler/ekstrakulikuler.component";

@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    JurusanComponent,
    EkstrakurikulerComponent,
    TestimonialComponent,
    FooterComponent
  ],
  templateUrl: './portofolio-web.component.html',
  styleUrls: ['./portofolio-web.component.css']
})
export class PortofolioWebComponent implements OnInit {
  
  bannerIsScroll: boolean = false;
  headerEl: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.headerEl = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bannerIsScroll = window.scrollY > this.headerEl;
  }
}
