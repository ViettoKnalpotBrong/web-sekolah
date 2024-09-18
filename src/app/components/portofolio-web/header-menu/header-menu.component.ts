import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {
  @Input() bannerIsScroll: boolean = false;
  menuOpen: boolean = false;
  isScrolled: boolean = false;
  private scrollListener: () => void = () => {};

  menuItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'news', name: 'News' },
    { id: 'achievement', name: 'Achievement' },
    { id: 'student', name: 'Student' },
    { id: 'login', name: 'Login' }
  ];

  ngOnInit() {
    this.scrollListener = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
    this.onScroll();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  private onScroll() {
    this.isScrolled = window.pageYOffset > 50;
    this.bannerIsScroll = this.isScrolled;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('Menu Open:', this.menuOpen);
  }

  gotoDiv(divId: string) {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }
}
