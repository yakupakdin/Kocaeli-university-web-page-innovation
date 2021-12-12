let topbar = document.querySelector("#topbar");
let header = document.querySelector("#header");
let footer = document.querySelector("#footer");
topbar.innerHTML = `
<div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a
            href="mailto:bilisim@kocaeli.edu.tr">bilisim@kocaeli.edu.tr</a></i>
        <i class="bi bi-newspaper d-flex align-items-center ms-4"><span>+90 (262) 303 10 33</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="https://twitter.com/kou92official" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/kou92official" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/kou92official/" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/school/kocaeli-university/mycompany/" class="linkedin"><i
            class="bi bi-linkedin"></i></i></a>
        <a href="https://www.youtube.com/c/kocaeliüniversitesi" class="youtube"><i class="bi bi-youtube"></i></i></a>
      </div>
    </div>
`;

header.innerHTML = `
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"> <img src="assets/img/kou.png" class="img-fluid" alt=""><a href="index.html"> Bilişim Sistemleri
          Mühendisliği<span></span></a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt=""></a>-->

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto" href="index.html">Anasayfa</a></li>
          <!-- <li><a class="nav-link scrollto " href="#"></a></li> -->
          <li class="dropdown"><a href="#"><span>Bölümümüz</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <!-- <li><a href="#">Drop Down 1</a></li> -->
              <li class="dropdown"><a href="#"><span>Kurumsal</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="baskanin-mesaji.html">Başkanın Mesajı</a></li>
                  <li><a href="misyon-vizyon.html">Misyon Vizyon</a></li>
                  <li><a href="olanaklarimiz.html">Olanaklarımız</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/Bilisimprojeler-ogretimuyesi.pdf">Öğretim Üyesi Projeleri</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/2020-2021_BilisimKomisyon.pdf">Komisyon ve Kordinatörler</a></li>
                  <li><a href="hakkimizda.html">Hakkımızda</a></li>
                  <li><a href="index.html#bolumumuz">Yönetim</a></li>
                  <li><a href="anabilim-dallari.html">Ana Bilim Dalları</a></li>
                  <li><a href="isbirliklerimiz.html">İşbirliklerimiz</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Personel</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="akademik-personel.html">Akademik Personel</a></li>
                  <li><a href="idari-personel.html">İdari Personel</a></li>
                  <li><a href="http://perdb.kocaeli.edu.tr/Form.php">Personel Basılı Evraklar</a></li>

                </ul>
              </li>

            </ul>
          </li>





          <!-- <li><a class="nav-link scrollto" href="#">Öğrenci</a></li> -->
          <li class="dropdown"><a href="#"><span>Öğrenci</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Genel</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="http://odb.kocaeli.edu.tr/yonetmelik.php">Yönetmelikler</a></li>
                  <li><a href="http://bilsis.kocaeli.edu.tr">Öğrenci Bilgi Sistemi</a></li>
                  <li><a href="http://odb.kocaeli.edu.tr">Öğrenci İşleri Daire Başkanlığı</a></li>
                  <li><a href="http://odb.kocaeli.edu.tr/akademik_takvim.php">Akademik Takvim</a></li>
                  <li><a href="http://ogrkonseyi.kocaeli.edu.tr">Öğrenci Konseyi</a></li>
                  <li><a href="https://twitter.com/koubitek?lang=en">Öğrenci Kulüpleri</a></li>
                  <li><a href="http://ogr.kocaeli.edu.tr/koubs/ekayit/index.cfm">Yeni Öğrenci Kayıt</a></li>
                  <li><a href="https://kou.globalpiyasa.com/tr/defaultsubdmn.aspx">Öğrenci Kariyer Portalı</a></li>
                  <li><a href="http://ogr.kocaeli.edu.tr/koubs/ogrencinosorgula/OgrNumarasiSorgu.cfm">Yeni Öğrenci Numaraları</a></li>
                  <li><a href="https://dokuman.osym.gov.tr/pdfdokuman/2019/YKS/tablo4_06082019.pdf">IASTE</a></li>
                  <li><a href="https://dokuman.osym.gov.tr/pdfdokuman/2019/YKS/tablo4_06082019.pdf">Taban Puanlar</a></li>
                  <li><a href="http://ogr.kocaeli.edu.tr/KOUBS/Genel/Diplomasorgu/diplomanosorgu.cfm">Diploma Sorgulama</a></li>
                  <li><a href="https://koubitek.com">Bölüm Öğrenci Kulübü</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/BSM-Kariyer-Danismanlari-Listesi.pdf">Kariyer Danışmanları</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/Bilisimprojeler-ogrenciprojeleri.pdf">Öğrenci Projeleri</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Bilgi Sistemi</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="https://ogr.kocaeli.edu.tr/koubs/Akapers/">Akademik Personel Girişi</a></li>
                  <li><a href="http://ogr.kocaeli.edu.tr/koubs/Idaripers/anagiris.cfm">İdari Personel Girişi</a></li>
                  <li><a href="https://ogr.kocaeli.edu.tr/koubs/ogrenci/index.cfm">Öğrenci Girişi</a></li>
                  <li><a href="http://ects.kocaeli.edu.tr/index.cfm?Dilid=0&CFID=3165940&CFTOKEN=433853bbbcf0dc9d-3DFEF05C-CC20-0159-7E545810DD7A2B4D">AKTS Bilgi Paketi</a></li>
                  <li><a href="http://mbs.kocaeli.edu.tr/login">Mezun Bilgi Sistemi</a></li>
                  <li><a href="http://ogr.kocaeli.edu.tr/KOUBS/Istatistik/index.cfm">İstatistik</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Formlar</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="http://bilisim.kocaeli.edu.tr/formlar.php">Öğrenci Dilekçe ve Formları</a></li>

                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Lisans</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/bilisim_sist_muh_ders_plani.pdf">Ders Planı(2016 Öncesi)</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/Dosyalar/Lisans/bilisim_sist_muh_ders_plani_icerik.pdf">Lisans Ders İçerikleri</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/ders_plani_2016_2017_yeni.pdf">Ders Planı(2016-2019)</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/danismanlar.php">Öğrenci Danışmanları</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/2020-2021DersPlani.pdf">Ders Planı(2020 Sonrası)</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/ders_notlari.php">Ders Notları</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/laboratuvarlar.php">Laboratuvarlar</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/BSM2021-2022GUZDERSPROG.pdf">Ders Programı</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Lisans Üstü </span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="http://fbe.kocaeli.edu.tr">Fen Bilimleri Enstitüsü</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/calisma_alanlari.php">Çalışma Alanları</a></li>
                  <li><a href="http://fbe.kocaeli.edu.tr/derskatalog.php?AKod=1ff8a7b5dc7a7d1f0ed65aaa29c04b1e">YL Ders Listesi</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/2021-2022-ISE-GraduateSyllabus.pdf">YL Ders Programı</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/Dosyalar/LisansUstu/doktora_yeterlilik_kilavuzu.pdf">Doktora Yeterlilik Sınavı Çalışma Konuları</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Öğrenci Programları</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="http://int.kocaeli.edu.tr/index.php?sayfa=page&id=erasmus-ogrenim-hareketliligi-bilgi">Erasmus</a></li>
                  <li><a href="http://farabi.kocaeli.edu.tr">Farabi</a></li>
                  <li><a href="http://mevlana.kocaeli.edu.tr">Mevlana</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/eyyk.php">Eğitimde Yeniden Yapılandırma</a></li>
                  <li><a href="http://odb.kocaeli.edu.tr/dosyalar/yonetmelikler/capyonetmelik200616.pdf">ÇAP</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Anketler</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="https://docs.google.com/forms/d/1sPV178IpVDKtU0SVegWr5BY2BTZ9RFehBD_ybNofFbY/viewform?edit_requested=true">Mezun Bilgi Anketi</a></li>
                  <li><a href="https://docs.google.com/forms/d/17wgeUHv02etJxbclt3IctopqFYS62wDb01sLPiL4Q9Q/viewform?edit_requested=true">İş Yeri Eğitimi Öğrenci Anketi</a></li>
                  <li><a href="https://docs.google.com/forms/d/1aT08AcWmA7uF3LMFNWjDimkzr8F9vSwftbbtQLgftkM/viewform?edit_requested=true">İş Yeri Eğitimi Sorumlu Anketi</a></li>

                </ul>
              </li>

            </ul>
          </li>

          <!-- <li><a class="nav-link scrollto " href="#"></a></li> -->
          <li class="dropdown"><a href="#"><span>Erasmus+</span> <i class="bi bi-chevron-down"></i></a>
            <ul>

              <li class="dropdown"><a href="#"><span>INSTITUTIONAL</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/en/StudyPlanBachelorDegree.pdf">Study Plan(Bachelor's Degree)</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/en/StudyPlanMasterDegree.pdf">Study Plan(Master's Degree)</a></li>
                  <li><a href="http://bilisim.kocaeli.edu.tr/dosyalar/en/StudyPlanDoctorateDegree.pdf">Study Plan(PhD Degree)</a></li>


                </ul>
              </li>

            </ul>
          </li>
          <li><a class="nav-link scrollto " href="numbers.html">Sayılarla Koü</a></li>


        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
`;


footer.innerHTML = `
        <div class="footer-newsletter">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h4>Bültene Kayıt Ol!</h4>
                        <p>Yeni Duyurulardan/Gelişmelerden Haberdar Olmak İçin Maile Abone Olun!</p>
                        <form action="#" method="post">
                            <input type="email" name="email"><input type="submit" value="Abone Ol!">
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-top">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h3>Kocaeli Üniversitesi<span>.</span></h3>
                        <p>
                            Kocaeli Üniversitesi <br>
                            Umuttepe Yerleşkesi<br>
                            İzmit/KOCAELİ <br><br>
                            <strong>Telefon:</strong> +90 (262) 303 22 02<br>
                            <strong>Email:</strong> bilisim@kocaeli.edu.tr<br>
                        </p>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Tanıtım</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Tanıtım Filmi</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Aday Öğrenci</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Görsellerle Üniversitemiz</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Sanal Tur</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Güncel Haberler</h4>
                        <ul>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">KOÜ’de Engel Kavramı, Engelli Bireylerle
                                    İletişim ve
                                    Eğitimde Erişilebilir Yaklaşımlar eğitimi</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">“Eskiyi unutturmayan, yeniden
                                    bıktırmayan radyo”</a>
                            </li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Üniversitemizde Tanıtım ve Bilgilendirme
                                    Toplantısı
                                    düzenlendi</a></li>
                            <li><i class="bx bx-chevron-right"></i> <a href="#">Engellilere karşı sorumluyuz</a></li>
                            <!-- <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> -->
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Bizi Takip Edin</h4>

                        <div class="social-links mt-3">
                            <a href="https://twitter.com/kou92official" class="twitter"><i
                                    class="bi bi-twitter"></i></a>
                            <a href="https://www.facebook.com/kou92official" class="facebook"><i
                                    class="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/kou92official/" class="instagram"><i
                                    class="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/school/kocaeli-university/mycompany/" class="linkedin"><i
                                    class="bi bi-linkedin"></i></i></a>
                            <a href="https://www.youtube.com/c/kocaeliüniversitesi" class="youtube"><i
                                    class="bi bi-youtube"></i></i></a>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="copyright">
                &copy;2021 <strong><span>Kocaeli Üniversitesi</span></strong>. Bütün Hakları Saklıdır
            </div>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bizland-bootstrap-business-template/ -->
                Designed by Turan Öz & Yakup Akdin</a>
            </div>
        </div>

`;