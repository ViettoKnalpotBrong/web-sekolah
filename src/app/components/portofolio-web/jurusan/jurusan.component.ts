import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Jurusan {
  nama: string;
  deskripsi: string;
  gambar: string;
}

@Component({
  selector: 'app-jurusan',
  templateUrl: './jurusan.component.html',
  styleUrls: ['./jurusan.component.css'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule in imports array
})
export class JurusanComponent {
  jurusanList: Jurusan[] = [
    { 
      nama: 'Teknik Mesin', 
      deskripsi: `Jurusan Teknik Mesin memberikan pemahaman mendalam tentang perancangan, produksi, dan pemeliharaan mesin-mesin yang digunakan di berbagai industri. 
                  Siswa dilatih untuk menjadi teknisi dan operator yang handal dalam menjalankan mesin-mesin produksi, baik mesin konvensional maupun modern yang berbasis CNC (Computer Numerical Control).
                  Selain itu, jurusan ini membekali siswa dengan kemampuan analisis terhadap masalah-masalah teknis di bidang mekanika, termodinamika, dan material. Lulusan jurusan ini memiliki peluang karir di bidang manufaktur, otomotif, hingga industri berat.`,
      gambar: 'https://i.pinimg.com/236x/9b/fc/c0/9bfcc0f365ad681fe7d509009f85910d.jpg' 
    },
    { 
      nama: 'Teknik Kendaraan Ringan', 
      deskripsi: `Jurusan Teknik Kendaraan Ringan (TKR) mempersiapkan siswa untuk bekerja di bidang perbaikan dan perawatan kendaraan bermotor. 
                  Dalam jurusan ini, siswa akan mempelajari sistem mesin, kelistrikan, serta teknik-teknik diagnostik untuk kendaraan seperti mobil dan motor. 
                  Selain itu, program ini juga mencakup pengenalan teknologi kendaraan berbasis listrik dan hybrid, yang semakin populer di era modern.
                  Lulusan Teknik Kendaraan Ringan diharapkan mampu bekerja di bengkel resmi maupun mandiri, perusahaan otomotif, atau bahkan membuka usaha perbaikan kendaraan sendiri.`,
      gambar: 'https://i.pinimg.com/474x/13/d1/fa/13d1fa4590283b53e8661d2597ad2dfd.jpg' 
    },
    { 
      nama: 'Perhotelan', 
      deskripsi: `Jurusan Perhotelan membekali siswa dengan berbagai keterampilan yang diperlukan di industri perhotelan, seperti manajemen front office, tata graha (housekeeping), layanan makanan dan minuman, hingga manajemen acara (event management). 
                  Siswa juga akan diajarkan keterampilan komunikasi yang baik serta pelayanan pelanggan yang prima, yang sangat diperlukan dalam menghadapi tamu-tamu hotel.
                  Selain itu, jurusan ini sering bekerja sama dengan hotel-hotel besar untuk program magang, sehingga siswa dapat merasakan langsung suasana kerja di dunia perhotelan. Lulusan jurusan ini dapat berkarir di hotel, restoran, kapal pesiar, dan berbagai sektor lainnya di industri hospitality.`,
      gambar: 'https://i.pinimg.com/236x/06/5f/a5/065fa5f993a52f2be68efe4a4cbd37e3.jpg' 
    },
    { 
      nama: 'Desain Komunikasi Visual', 
      deskripsi: `Jurusan Desain Komunikasi Visual (DKV) berfokus pada cara menyampaikan pesan melalui media visual, seperti gambar, teks, dan video. 
                  Dalam jurusan ini, siswa akan belajar prinsip-prinsip desain grafis, tipografi, ilustrasi, fotografi, dan animasi. 
                  Mereka juga akan diperkenalkan dengan berbagai perangkat lunak desain seperti Adobe Photoshop, Illustrator, dan After Effects untuk menciptakan karya visual yang menarik dan komunikatif.
                  DKV adalah jurusan yang sangat cocok bagi siswa yang memiliki ketertarikan pada seni dan teknologi, dan lulusan DKV memiliki peluang karir sebagai desainer grafis, animator, ilustrator, atau bekerja di industri kreatif lainnya.`,
      gambar: 'https://i.pinimg.com/236x/a8/0b/41/a80b41d7bbea5bfbfb3753a1046b9308.jpg' 
    },
  ];
}
