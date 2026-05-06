export interface DisclaimerSection { id: string; num: string; title: string; contentHtml: string }

export const DISCLAIMER_HERO = {
  eyebrow: 'Disclaimer',
  title: 'Disclaimer Tenta<span class="accent">Klik</span>',
  lede: 'Sebelum kita mulai kolaborasi, luangin 5 menit buat baca ini dulu — biar ekspektasi kita sama-sama jelas dari awal.',
  lastUpdated: '2026-05-05',
};

export const DISCLAIMER_SECTIONS: DisclaimerSection[] = [
  {
    id: 'informasi-website',
    num: '01',
    title: 'Informasi di Website Ini',
    contentHtml: `<p>Seluruh konten di website <strong>tentaklik.com</strong> — mulai dari deskripsi layanan, studi kasus, hingga angka-angka hasil campaign — disusun berdasarkan pengalaman nyata tim kami dan data historis dari proyek yang sudah berjalan.</p>
              <p>Meski begitu, konten di sini bersifat <strong>informatif dan umum</strong>. Bisa berubah sewaktu-waktu seiring perkembangan layanan, tools, atau kebijakan platform digital seperti Google dan Meta.</p>
              <div class="callout callout-warn"><strong>⚠️ Catatan penting:</strong> Kami selalu berusaha menjaga info tetap up-to-date, tapi kalau ada ketidaksesuaian antara konten di website sama realita layanan terbaru, <strong>yang berlaku adalah informasi terbaru yang disampaikan langsung oleh tim Tentaklik.</strong></div>`,
  },
  {
    id: 'hasil-performa',
    num: '02',
    title: 'Soal Hasil & Performa Iklan',
    contentHtml: `<p>Tentaklik udah bantu banyak bisnis scale up lewat digital marketing. Studi kasus yang kami tampilkan adalah hasil nyata — dan kami bangga sama itu. Tapi ada satu hal penting yang perlu dipahami:</p>
              <p>Angka-angka di studi kasus adalah hasil nyata dari klien dengan kondisi bisnis, pasar, dan waktu yang spesifik. <strong>Bukan garansi</strong> bahwa bisnis Anda akan dapat angka yang persis sama.</p>
              <ul>
                <li>Performa iklan sangat dipengaruhi kondisi industri, kompetitor, anggaran, dan kualitas produk Anda sendiri</li>
                <li>Algoritma Google dan Meta terus berubah — kami adaptasi terus, tapi faktor eksternal tetap ada di luar kendali kami</li>
                <li>Hasil campaign bisa berbeda antar industri, kota, bahkan musim</li>
                <li>KPI yang kami kejar selalu disepakati bareng di awal — bukan angka sepihak dari kami</li>
              </ul>
              <div class="callout callout-good"><strong>💡 Yang kami jamin:</strong> proses terstruktur, strategi terukur, reporting transparan, dan tim yang beneran kerja keras buat bisnis Anda. Hasil terbaik selalu datang dari kolaborasi dua arah.</div>`,
  },
  {
    id: 'kepemilikan-akun',
    num: '03',
    title: 'Kepemilikan Akun & Model Layanan Kami',
    contentHtml: `<p>Berbeda dari agensi pada umumnya, Tentaklik menawarkan layanan berbasis <strong>penyewaan akun iklan</strong> — artinya iklan Anda dijalankan menggunakan akun Google Ads dan Meta Ads milik Tentaklik, bukan akun baru atas nama Anda.</p>
              <p>Model ini kami pilih karena akun kami sudah punya <strong>track record, trust score, dan riwayat performa</strong> yang matang di mata algoritma Google dan Meta — sehingga campaign bisa lebih cepat optimal dibanding akun baru yang masih <em>cold start</em>.</p>
              <ul>
                <li>Akun iklan yang digunakan adalah milik Tentaklik — Anda menyewa akses dan kapasitas iklannya</li>
                <li>Selama masa kerja sama aktif, akun dan semua campaign yang berjalan dikelola penuh oleh tim kami</li>
                <li>Jika kerja sama berakhir, campaign akan dihentikan dan akun kembali ke pengelolaan Tentaklik sepenuhnya</li>
                <li>Data performa campaign (laporan, angka, insight) tetap akan kami berikan ke Anda secara transparan via dashboard real-time</li>
                <li>Informasi bisnis, produk, dan data Anda yang kami gunakan untuk keperluan iklan diperlakukan secara <em>confidential</em> — tidak dibagikan ke pihak lain</li>
              </ul>
              <div class="callout callout-warn"><strong>📌 Penting:</strong> Karena akun adalah milik Tentaklik, histori campaign <strong>tidak bisa dipindahkan</strong> ke akun pribadi Anda jika kerja sama berakhir. Pastikan Anda memahami model ini sebelum mulai — kalau ada pertanyaan, tanya kami dulu sebelum deal.</div>
              <div class="callout callout-good"><strong>💡 Keuntungan model ini:</strong> Anda nggak perlu repot setup akun dari nol, nggak kena <em>learning period</em> panjang, dan langsung bisa manfaatin reputasi akun yang sudah <em>proven</em>. Lebih efisien, lebih cepat jalan.</div>`,
  },
  {
    id: 'platform-pihak-ketiga',
    num: '04',
    title: 'Layanan Platform Pihak Ketiga',
    contentHtml: `<p>Sebagai <strong>Google Partner</strong> dan <strong>Meta Business Partner</strong>, Tentaklik beroperasi menggunakan platform milik pihak ketiga. Ada hal penting yang perlu Anda pahami:</p>
              <ul>
                <li>Kebijakan iklan Google dan Meta bisa berubah sewaktu-waktu dan di luar kendali kami</li>
                <li>Penolakan atau pembatasan iklan oleh platform adalah keputusan Google/Meta — bukan Tentaklik</li>
                <li>Downtime atau gangguan teknis dari platform bukan tanggung jawab kami, tapi kami akan selalu update Anda kalau itu terjadi</li>
                <li>Biaya iklan (ad spend) langsung ditagih ke akun klien oleh Google/Meta — Tentaklik tidak ngambil margin dari budget iklan Anda</li>
              </ul>
              <div class="callout callout-warn"><strong>📌 Anggaran iklan:</strong> Kami sangat menyarankan anggaran iklan minimal <strong>Rp 10–15 juta per bulan</strong> biar strategi yang kami susun bisa dieksekusi dengan optimal. Di bawah itu, ruang buat optimasi jadi sangat terbatas.</div>`,
  },
  {
    id: 'syarat-kerja-sama',
    num: '05',
    title: 'Syarat & Ekspektasi Kerja Sama',
    contentHtml: `<p>Tentaklik percaya hasil terbaik lahir dari kerja sama yang saling mendukung — bukan hubungan satu arah di mana Anda nyerahin semua terus nunggu keajaiban.</p>
              <ul>
                <li>Durasi kontrak minimal <strong>3 bulan</strong> — optimasi digital butuh waktu, bukan sulap instan</li>
                <li>Klien wajib menyediakan informasi bisnis yang akurat sebagai bahan audit dan strategi</li>
                <li>Feedback dan approval dari klien dibutuhkan dalam proses eksekusi kreatif dan copywriting</li>
                <li>Tentaklik berhak menolak proyek yang tidak sesuai nilai perusahaan atau melanggar kebijakan platform</li>
                <li>Perubahan scope pekerjaan yang signifikan akan selalu didiskusikan dan disesuaikan bersama</li>
              </ul>`,
  },
  {
    id: 'link-eksternal',
    num: '06',
    title: 'Link & Referensi Eksternal',
    contentHtml: `<p>Website Tentaklik mungkin menampilkan tautan ke sumber eksternal seperti artikel atau platform lain sebagai referensi tambahan. Kami tidak mengontrol konten dari website pihak ketiga dan <strong>tidak bertanggung jawab</strong> atas isi, keakuratan, atau kebijakan privasi mereka.</p>
              <p>Kalau ada info dari sumber eksternal yang bikin ragu, tanya langsung ke tim kami — gratis, dan kami seneng bantu klarifikasi.</p>`,
  },
  {
    id: 'pembaruan',
    num: '07',
    title: 'Pembaruan Disclaimer',
    contentHtml: `<p>Disclaimer ini bisa diperbarui seiring perkembangan layanan dan kebijakan yang berlaku. Setiap perubahan signifikan akan kami informasikan lewat website ini dengan mencantumkan tanggal pembaruan terbaru.</p>
              <p>Dengan terus menggunakan layanan Tentaklik setelah adanya pembaruan, Anda dianggap udah baca dan setuju sama versi terbaru dari disclaimer ini.</p>
              <div class="callout callout-good"><strong>✅ Ada bagian yang bikin bingung?</strong> Jangan sungkan kontak kami langsung. Kami lebih prefer ngobrol jujur dari awal daripada ada yang ga jelas di tengah jalan.</div>`,
  },
];
