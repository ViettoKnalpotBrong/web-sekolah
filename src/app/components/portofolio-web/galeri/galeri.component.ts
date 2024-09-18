import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeri',
  templateUrl: './galeri.component.html',
  styleUrls: ['./galeri.component.css'],
  standalone: true,
  imports: [CommonModule]  // Pastikan CommonModule diimpor di sini
})
export class GaleriComponent {
  kegiatanList = [
    {
      title: 'Upacara Bendera',
      image: 'https://images.pexels.com/photos/157802/pexels-photo-157802.jpeg',
      description: 'Upacara bendera setiap hari Senin sebagai bentuk penghormatan kepada bendera merah putih.'
    },
    {
      title: 'Lomba 17 Agustus',
      image: 'https://images.pexels.com/photos/17545/pexels-photo.jpg',
      description: 'Berbagai kegiatan lomba dalam rangka memperingati hari kemerdekaan Indonesia.'
    },
    {
      title: 'Pentas Seni',
      image: 'https://images.pexels.com/photos/1730763/pexels-photo-1730763.jpeg',
      description: 'Pentas seni siswa yang menampilkan bakat dan kreativitas di bidang seni.'
    },
    {
      title: 'Kegiatan Pramuka',
      image: 'https://images.pexels.com/photos/632326/pexels-photo-632326.jpeg',
      description: 'Kegiatan pramuka yang melatih kedisiplinan dan kemandirian siswa.'
    }
  ];
}
