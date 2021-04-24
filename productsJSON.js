const productData = [
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210330/12/76252824/16483087/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APL12C185H01",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210402/16/77287548/69581936/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Aqua Di Polo 2'li Fırsat Retro Kol Saati Seti Stwa001901",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/57592550/2/2_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Kadın Kol Saati APSV1-A9371-KM222",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/16260807/2/2_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APL12C195H02",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210122/9/56037898/118698916/1/1_org.jpg",
    price: "184,88 TL",
    firm: "Ricardo",
    name: "Çift Sevgili Metal Kordon Led Su Geçirmez  Kol Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200612/11/2706679/22229166/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSV1-A5247-ED333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200515/20/1346923/16260812/2/2_org.jpg",
    price: "84,27 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APL12C195S09",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20201126/14/32732829/113271747/0/0_org.jpg",
    price: "414 TL",
    firm: "Toms",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210119/14/55174360/131916138/1/1_org.jpg",
    price: "139 TL",
    firm: "Frank Martin",
    name: "Erkek Saat Cüzdan Kemer Hediye Seti 385002",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69790362/150128995/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061704",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200607/16/2381132/73111953/0/0_org.jpg",
    price: "542,71 TL",
    firm: "Daniel Klein",
    name: "T5 Chrono Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210325/9/75150526/57592658/1/1_org.jpg",
    price: "59,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8954-UD333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210120/17/55579340/132384009/1/1_org.jpg",
    price: "124 TL",
    firm: "istliv",
    name: "Kadın Erkek  Su Geçirmez Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201029/21/20449421/98965457/0/0_org.jpg",
    price: "49,90 TL",
    firm: "Butik İncebelli",
    name: "Dijital Retro Tarz Gümüş Renk Ünisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/9/58243995/119719576/1/1_org.jpg",
    price: "92,09 TL",
    firm: "Gold Time",
    name: "Bileklik Hediyeli Mıknatıslı Kordon Dokunmatik Ekran Unisex Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/20/e345a80d/59755366/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A9472-UD333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210403/23/52d2de32/21575944/1/1_org.jpg",
    price: "59,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A5280-UD333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/17/69844289/150298837/0/0_org.jpg",
    price: "98,49 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061301",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210130/14/58640354/57592565/1/1_org.jpg",
    price: "139,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A9372-UM131",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/18/69848688/150305782/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Metal Kol Saati Apwa061901",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210209/12/61422703/57513193/1/1_org.jpg",
    price: "249,90 TL",
    firm: "Skmei",
    name: "Erkek Gümüş Kol Saati BTY-NF74",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210316/10/71983475/1845482/1/1_org.jpg",
    price: "185 TL",
    firm: "Casio",
    name: "Unisex Kol Saati A158WA-1DF-1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210304/16/68720577/148559732/0/0_org.jpg",
    price: "89,90 TL",
    firm: "Luis Polo",
    name: "Dt1111a-emh-led-kmb-05 Erkek Saat Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/21575948/2/2_org.jpg",
    price: "65,09 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A5281-UD551",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/16/58416145/135792981/1/1_org.jpg",
    price: "59,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Sport Collection Unisex Silikon Kol Saati Apws009002",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69796489/150144904/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062105",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20210318/10/73294511/154598014/1/1_org.jpg",
    price: "215 TL",
    firm: "Re-Nox",
    name: "Limited Edition Master Series Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/02/3b78e9f1/56225091/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati A647",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69827762/150271922/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061903",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210402/14/4ebb2bbe/16483076/2/2_org.jpg",
    price: "79,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APL12C145H01",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/15/69789489/150125754/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek  Metal Kol Saati Apwa061904",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210223/12/66147614/145044513/0/0_org.jpg",
    price: "139,99 TL",
    firm: "POLO Rucci",
    name: "1350 Erkek Çakmak Bileklik Takım Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210310/16/70481853/87131615/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Spectrum",
    name: "Unisex Siyah Xt250261 Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210330/11/76228709/62062559/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Siyah Mıknatıslı Dokunmatik Kol Saati Xt250131",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210311/22/70798813/83512869/1/1_org.jpg",
    price: "99,12 TL",
    firm: "Spectrum",
    name:
      "Yeni Model Rose Gold Renk Led Watch Dijital Çelik Kasa Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/14/52104500/20928879/1/1_org.jpg",
    price: "245,88 TL",
    firm: "Q&Q",
    name: "Erkek Kol Saati 3g2477 Metal Siyah",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210317/1/72858615/99487672/1/1_org.jpg",
    price: "168,70 TL",
    firm: "SPEKTRUM BAİTS",
    name: "Bay &bayan Çelik Dijital Led Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200520/14/1541845/71540819/1/1_org.jpg",
    price: "419 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati DK12363S",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200729/16/6325787/57843791/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Erkek Kol Saati VEH28019A",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69846775/150304414/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061604",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/12/80267113/163996247/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Gümüş Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210403/3/77360010/160112899/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Altın Dijital Metal Kol Saati Apwn038202",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/2/77359586/160112572/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Dijital Mıknatıslı Hasır Unisex Kol Saati Apwn038000",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210419/13/81317433/165316863/0/0_org.jpg",
    price: "74,99 TL",
    firm: "POLO Rucci",
    name: "2133 Metal Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/10/f5b90105/19825058/1/1_org.jpg",
    price: "669,38 TL",
    firm: "Diesel",
    name: "Erkek Kol Saati DZ1437",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/15/69795090/150136727/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062601",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210125/18/57082475/134168379/0/0_org.jpg",
    price: "258,32 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Dijital Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/22229183/2/2_org.jpg",
    price: "109,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSV1-A5242-EH171",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210325/19/75307558/13254934/1/1_org.jpg",
    price: "412,49 TL",
    firm: "Casio",
    name: "Erkek Beyaz Kol Saati Mtp-vd01d-1evudf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200729/16/6325964/57843759/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Veh28020e Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/19/79571339/163051140/0/0_org.jpg",
    price: "74,99 TL",
    firm: "POLO Rucci",
    name: "2133 Metal Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210316/10/71982484/152948068/1/1_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Erkek Gümüş Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/3/77360102/160112994/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Dijital Metal Unisex Kol Saati Apwn038200",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/19/52267515/7273585/1/1_org.jpg",
    price: "159 TL",
    firm: "Casio",
    name: "Erkek Kol Saati MTP-V001GL-9BUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/16/69808449/150160325/0/0_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061106",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/22/52355647/17625897/1/1_org.jpg",
    price: "223,41 TL",
    firm: "Casio",
    name: "Mw-240-1e2vdf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210125/18/57097535/134173691/0/0_org.jpg",
    price: "217,53 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Dijital Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210315/14/71254370/79440980/1/1_org.jpg",
    price: "223,53 TL",
    firm: "Daniel Klein",
    name: "Akıllı Saat Siyah Oval",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/1/49678511/95176816/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Duj1009 Unisex Kol Saati Hasır Siyah",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/10/80238635/163944031/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Siyah Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210414/3/79939951/162054899/1/1_org.jpg",
    price: "420 TL",
    firm: "FERRO",
    name: "Watch 6 Plus Enson Bluetooth Kulaklık Ve Ios Uyumlu Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200627/4/3563315/75432413/0/0_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200907/8/9908451/75924347/0/0_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201206/18/35425495/116310040/0/0_org.jpg",
    price: "200 TL",
    firm: "saatistasyonu",
    name: "Digital Erkek Kol Saati Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/02/59d82605/19819826/1/1_org.jpg",
    price: "732 TL",
    firm: "Diesel",
    name: "Erkek Kol Saati DZ1819",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210316/17/72231747/153179427/0/0_org.jpg",
    price: "196,98 TL",
    firm: "Polo Air",
    name:
      "Erkek Kol Saati Kemer Cüzdan Kartlık Çakmak Erkek Set Kombin Hediyelik Kutusunda",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201125/13/32220105/13254922/1/1_org.jpg",
    price: "269 TL",
    firm: "Casio",
    name: "Erkek Kol Saati Mtp-vd01l-1evudf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201010/12/14846190/91339637/1/1_org.jpg",
    price: "54,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Lacivert Kol Saati Apws008007",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210402/15/ae586813/19698473/1/1_org.jpg",
    price: "199 TL",
    firm: "Forsining",
    name: "Erkek Kol Saati 702455772333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200713/4/4348510/76684917/0/0_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210214/22/62475038/140081993/1/1_org.jpg",
    price: "74,90 TL",
    firm: "Coliseum",
    name: "Cls7765a-emh-07 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200512/18/1175740/56754911/1/1_org.jpg",
    price: "164,59 TL",
    firm: "Skmei",
    name: "Erkek Kol Saati 1370sı",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/10/f1c257ab/57592687/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8781-UD772",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/11/78106829/98937065/1/1_org.jpg",
    price: "150 TL",
    firm: "Mopal",
    name:
      "T500 Akıllı Saat Smart Watch Türkçe Menülü Arama Cevaplama Modu Yeni Sürüm Sporcu Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/57592549/2/2_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8916-KD333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210317/15/73067276/84167657/1/1_org.jpg",
    price: "78,79 TL",
    firm: "Spectrum",
    name: "Rainbow Unisex Kol Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210303/22/68421622/95282897/1/1_org.jpg",
    price: "69 TL",
    firm: "Milena Accessories",
    name: "M3 Akıllı Saat Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210315/14/71254172/79440952/1/1_org.jpg",
    price: "223,53 TL",
    firm: "Daniel Klein",
    name: "Akıllı Saat Mavi Oval",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/21/52336619/9526954/1/1_org.jpg",
    price: "205,87 TL",
    firm: "Casio",
    name: "Mtp-v001d-7budf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/10/f7277f77/57854649/1/1_org.jpg",
    price: "79,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Gümüş Erkek Kol Saati APSV1-A5983-EH151",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69827958/150270953/1/1_org.jpg",
    price: "84,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Gümüş Renk Metal Kol Saati Apwa062201",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200604/13/2261759/64969558/1/1_org.jpg",
    price: "92,21 TL",
    firm: "Gold Time",
    name: "Bileklik Hediyeli Mıknatıslı Kordon Dokunmatik Ekran Unisex Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/2/77359702/160112683/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Dijital Mıknatıslı Hasır Unisex Kol Saati Apwn038001",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/16/69825089/150245559/0/0_org.jpg",
    price: "98,49 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061302",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210125/2/56832917/133884683/0/0_org.jpg",
    price: "211,65 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Dijital Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210214/21/62374645/140099324/1/1_org.jpg",
    price: "74,90 TL",
    firm: "Coliseum",
    name: "Cls7765a-emh-06 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/12/69706616/109762301/1/1_org.jpg",
    price: "184,15 TL",
    firm: "Ricardo",
    name: "Led Dijital Çift Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20201222/13/40758010/121643583/1/1_org_zoom.jpeg",
    price: "385,70 TL",
    firm: "Tom Jones",
    name: "Erkek Kol Saati+Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/8/51684190/77771990/1/1_org.jpg",
    price: "116,50 TL",
    firm: "Duke Nickle",
    name: "Deh5c1 Erkek Kol Saati Hasır Siyah",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/5/58189421/135543023/1/1_org.jpg",
    price: "89,11 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws009700",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210217/21/64223546/142490662/0/0_org.jpg",
    price: "49,90 TL",
    firm: "Royal Club De Polo Barcelona",
    name: "Retro Unisex Kol Saati Rpwa008501",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/8e359241/22229171/1/1_org.jpg",
    price: "109,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Gri Kol Saati APSV1-A5248-EDGGG",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/20/52307150/9110452/1/1_org.jpg",
    price: "1.444,15 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFR-546L-2AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/11/22a8e2bf/61633592/1/1_org.jpg",
    price: "534 TL",
    firm: "Guess",
    name: "Erkek Kol Saati GUGW0058G1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210219/20/65339443/59755322/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSV1-A9480-ED333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210402/11/77210650/87105373/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Dokunmatik Kol Saati Xt250268",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/13/802784ee/58360325/1/1_org_zoom.jpeg",
    price: "351,76 TL",
    firm: "Timberland",
    name: "Erkek Kol Saati TBL.15905JYS/03A",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/15/79799386/120118284/1/1_org.jpg",
    price: "120 TL",
    firm: "Ricardo",
    name: "Bay &bayan Çelik Dokunmatik Led Rolex Model Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210412/14/79489126/125157754/1/1_org.jpg",
    price: "107,75 TL",
    firm: "Ricardo",
    name: "Sevgili Çift Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/19/52272314/7372758/1/1_org.jpg",
    price: "412,49 TL",
    firm: "Casio",
    name: "Mtp-1302d-7a2vdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/16/58411213/135779305/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Sport Collection Unisex Silikon Kol Saati Apws008901",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/10/81233357/165173174/1/1_org.jpg",
    price: "1.049 TL",
    firm: "Raymond",
    name: "Lacivert Kadran Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200818/16/8289420/9925628/1/1_org.jpg",
    price: "279,99 TL",
    firm: "Casio",
    name: "Erkek Kol Saati MTP-V001D-1BUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/23/79648144/159795439/1/1_org.jpg",
    price: "108,33 TL",
    firm: "metelite",
    name:
      "5 Atm Su Geçirmez Unisex Dokunmatik Led Dijital Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210215/10/62618886/140814416/1/1_org.jpg",
    price: "507,53 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210212/13/62062471/19901108/1/1_org.jpg",
    price: "119 TL",
    firm: "SMAEL",
    name: "Erkek Kol Saati 1545",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200627/4/3563310/75432419/0/0_org.jpg",
    price: "558,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69829625/150246846/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062801",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201010/12/14845544/91278848/1/1_org.jpg",
    price: "54,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Yeşil Kol Saati Apws008105",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210419/10/81231636/165172906/1/1_org.jpg",
    price: "949 TL",
    firm: "Raymond",
    name: "Timsah Desenli Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69796184/150143394/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061002",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210319/11/73475208/62062537/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Mıknatıslı Dokunmatik Unisex Kol Saati XT250098",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210324/11/74888631/134596553/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Tuşlu Led Saat Mıknatıslı Kordon Özel Seri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/56225167/2/2_org.jpg",
    price: "119,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati A558",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210311/19/70785442/9311383/1/1_org.jpg",
    price: "174,23 TL",
    firm: "Casio",
    name: "Mw-240-4bvdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210106/15/47814578/126850767/1/1_org.jpg",
    price: "237 TL",
    firm: "Ricardo",
    name:
      'Su Geçirmez " Çift Saat"/ " Sevgili Saatleri " Metal Kordon Dokunmatik Kol Saatleri Storistanbul',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200515/20/1346923/57592666/2/2_org.jpg",
    price: "124,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8972-UH333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210403/3/77360014/160112902/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Dijital Metal Unisex Kol Saati Apwn038301",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210315/14/71254200/79440966/1/1_org.jpg",
    price: "223,53 TL",
    firm: "Daniel Klein",
    name: "Akıllı Saat Beyaz Oval",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/20/52277301/82433582/1/1_org.jpg",
    price: "1.058,81 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFR-571D-1AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200726/3/6012327/78683923/0/0_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/16/78467216/78361415/1/1_org.jpg",
    price: "92,15 TL",
    firm: "Spectrum",
    name: "Kadın Rose Gold Renk Kol Saati Zirkon Taşlı",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210201/9/58946469/7273562/1/1_org_zoom.jpeg",
    price: "598,75 TL",
    firm: "Casio",
    name: "Casıo Mtp-1374d-7avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/12/78885000/62062550/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Bakır Mıknatıslı Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/16/70481864/1940952/1/1_org.jpg",
    price: "292,94 TL",
    firm: "Casio",
    name: "Retro Unisex Kol Saati A159WA-N1DF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/06/3ad27eef/20402386/1/1_org.jpg",
    price: "652,50 TL",
    firm: "Guess",
    name: "GUW1264G2 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/20/8651e3ec/59755365/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A9476-UD622",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/20/326a90c3/59755319/1/1_org.jpg",
    price: "114,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSV1-A9390-ED333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210109/0/49471211/120442860/1/1_org.jpg",
    price: "116,65 TL",
    firm: "Michael West",
    name: "M1254-007 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/13/80271135/2450650/1/1_org.jpg",
    price: "505,87 TL",
    firm: "Casio",
    name: "A168wg-9wdf Kadın Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210320/15/73954018/155576592/0/0_org.jpg",
    price: "91,31 TL",
    firm: "Gold Time",
    name: "Bileklik Hediyeli Unisex Dokunmatik Mıknatıslı Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/0/77349292/88526852/1/1_org.jpg",
    price: "55 TL",
    firm: "DRN",
    name:
      "Unisex Siyah Angel Eye M3 Band Spor Modları, Nabız Ölçer Akıllı Bileklik Akıllı Saat M3band",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210108/20/48944808/75650786/1/1_org.jpg",
    price: "105,76 TL",
    firm: "Duke Nickle",
    name: "Kadın Gümüş Kol Saati Seti T3xbg17001e",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/9/68810192/6422497/1/1_org.jpg",
    price: "364,69 TL",
    firm: "Casio",
    name: "Erkek Kol Saati Mtp-1314d-1avdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210408/17/78758410/8416200/1/1_org.jpg",
    price: "725,76 TL",
    firm: "Casio",
    name: "Erkek Gri Kol Saati Mtp-1374d-1avdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/3/58168714/135530684/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws010500",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210402/15/33338476/19698194/1/1_org.jpg",
    price: "109 TL",
    firm: "Skmei",
    name: "Erkek Kol Saati sk006",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/16/69815278/150226971/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061801",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20210321/5/74081917/155721824/0/0_org.jpg",
    price: "169,03 TL",
    firm: "Gold Time",
    name: "Tuşlu Dijital Mıknatıslı Çift Kombini Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/16/58405439/135770163/1/1_org.jpg",
    price: "79,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws010403",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69786271/150117288/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062602",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210326/11/75420669/1495230/1/1_org.jpg",
    price: "202 TL",
    firm: "Casio",
    name: "Unisex Kol Saati B640wd-1avdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/09/ccc0100c/64966833/1/1_org.jpg",
    price: "204,18 TL",
    firm: "Gold Time",
    name: "Siyah Renk Mıknatıslı Kordon Dokunmatik Sarı Kasa Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/6/51525082/95176854/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Duj1011 Unisex Kol Saati Hasır Gümüş",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/16/58416053/135787745/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Sport Collection Unisex Silikon Kol Saati Apws009000",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210316/10/71982271/152947898/1/1_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Erkek Gümüş Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20201015/12/15914473/93534972/1/1_org.jpg",
    price: "229,87 TL",
    firm: "Polo Air",
    name:
      "Erkek Kol Saati Ve Parfüm Güneş Gözlüğü Tesbih Bileklik Kombini Özel Kutusunda",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20210325/19/75307532/13254945/1/1_org.jpg",
    price: "335 TL",
    firm: "Casio",
    name: "Erkek Gri Kol Saati Mtp-vd01d-2bvdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200820/0/8435583/82078305/0/0_org.jpg",
    price: "1.224 TL",
    firm: "Armani Exchange",
    name: "Ax2145 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210403/3/77360133/160113013/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Kadın Gold Dijital Metal Kol Saati Apwn038203",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210204/1/59778066/137515277/1/1_org.jpg",
    price: "89,90 TL",
    firm: "Luis Polo",
    name: "Dt1063h-eh-led-01 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/21/52330862/7482409/1/1_org.jpg",
    price: "374 TL",
    firm: "Casio",
    name: "Cas-mtp1314d2avdf Standart Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/9/67874326/89051778/1/1_org.jpg",
    price: "175 TL",
    firm: "Ricardo",
    name: "Dijital Erkek Kol Saati Çakmak Tesbih Bileklik Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210214/21/62371376/140083106/1/1_org.jpg",
    price: "79,90 TL",
    firm: "Coliseum",
    name: "Cls7765a-emh-05 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210329/12/75925659/158338478/1/1_org.jpg",
    price: "403,55 TL",
    firm: "Daniel Klein",
    name: "Lacivert Çelik Kordon Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210325/21/75324734/112538890/1/1_org.jpg",
    price: "395 TL",
    firm: "Casio",
    name: "Mtp-vd01d-2bvudf Çelik Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/20/52294942/81030903/1/1_org.jpg",
    price: "176,79 TL",
    firm: "Gold Time",
    name:
      "Siyah Hasır Mıknatıslı Kordon Siyah Kasa Dokunmatik Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20201216/23/39122867/120118272/0/0_org.jpg",
    price: "65 TL",
    firm: "Ricardo",
    name: "Bay &bayan Çelik Dokunmatik Led Rolex Model Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/10/ec67f2a4/61590218/1/1_org_zoom.jpeg",
    price: "116,65 TL",
    firm: "Michael West",
    name: "Unisex Kol Saati 3283860",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201010/12/14845377/91283449/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Siyah Kol Saati Apws008001",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/17/69839223/150297200/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061403",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210315/11/71176758/120752578/1/1_org.jpg",
    price: "97 TL",
    firm: "Spectrum",
    name:
      "Çift Kol Saati Siyah Hasır Kordon Renkli Cam Sevgili Kadın Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/15/c7b19f5b/62381691/1/1_org.jpg",
    price: "59,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028601 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty92/product/media/images/20210403/15/5498e894/20325171/1/1_org.jpg",
    price: "164,59 TL",
    firm: "Crrju",
    name: "Erkek Kol Saati Bileklik Hediyeli Cj6715",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/18/67994868/7372772/1/1_org.jpg",
    price: "681,18 TL",
    firm: "Casio",
    name: "Erkek Kol Saati MTP-1374L-1AVDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty22/product/media/images/20201110/11/24743131/18392088/1/1_org.jpg",
    price: "49,90 TL",
    firm: "G Sport POLO",
    name: "Unisex Kol Saati SUJ30001A",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210317/11/72975275/9110483/1/1_org.jpg",
    price: "612 TL",
    firm: "Casio",
    name: "Mtp-1374d-2avdf Erkek Kol Saati Çelik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69780937/150098370/1/1_org.jpg",
    price: "98,49 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062203",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/00/751aebb3/15553914/1/1_org.jpg",
    price: "179,90 TL",
    firm: "All Takı",
    name: "Erkek Hediye Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210403/3/77360000/160112906/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Sarı Dijital Metal Kol Saati Apwn038402",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210128/9/57881927/135160974/1/1_org.jpg",
    price: "213,15 TL",
    firm: "POLO Rucci",
    name:
      "Erkek Kol Saati Ve Cüzdan Kemer Anahtarlık Bileklik Kombini Pl-0446e1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210402/20/83afc4e3/11794671/1/1_org.jpg",
    price: "921,38 TL",
    firm: "Fossil",
    name: "Erkek Kol Saati FFS4991",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201125/15/32420291/112689043/1/1_org.jpg",
    price: "129,29 TL",
    firm: "Duke Nickle",
    name: "1krvbg17039f Maske Kol Saati Ve Parfüm Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201009/16/14530769/91286411/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Ozel Sport Collection Unisex Kol Saati Apws008011",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20201006/17/13785641/91038014/0/0_org.jpg",
    price: "199 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati For Motion 11658k.01 Fonksiyonlu",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210211/12/62011075/4453503/1/1_org.jpg",
    price: "230 TL",
    firm: "Casio",
    name: "Ae-1000w-1avdf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/45bf1972/57592558/1/1_org.jpg",
    price: "124,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8771-UH152",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210413/18/79848007/1845525/1/1_org.jpg",
    price: "149 TL",
    firm: "Casio",
    name: "Erkek Kol Saati F-91w-1dg",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210211/5/61987346/125392349/1/1_org.jpg",
    price: "266 TL",
    firm: "Ricardo",
    name:
      '" Çift Saat"/ " Sevgili Saatleri " Silikon Kordon, Çelik Kasa Kol Saatleri Storistanbul',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/16/69824624/150240021/0/0_org.jpg",
    price: "98,49 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062503",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/18/80706255/98949125/1/1_org.jpg",
    price: "140 TL",
    firm: "Mopal",
    name:
      "T500 Akıllı Saat Smart Watch Türkçe Menülü Modu Yeni Sürüm Sporcu Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/15/69795468/150141051/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061603",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20201222/13/40758010/121643580/1/1_org_zoom.jpeg",
    price: "385,70 TL",
    firm: "Tom Jones",
    name: "Erkek Kol Saati+Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/02/924ca93c/45831446/1/1_org_zoom.jpeg",
    price: "1.404 TL",
    firm: "Fossil",
    name: "Erkek Kol Saati FS4721",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210211/4/61984424/9526955/1/1_org.jpg",
    price: "234,12 TL",
    firm: "Casio",
    name: "Mtp-v001l-1budf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210317/17/73112904/13254921/1/1_org.jpg",
    price: "386,25 TL",
    firm: "Casio",
    name: "Cas-mtpvd01d2evudf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/4/58172669/135527664/1/1_org.jpg",
    price: "54,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Sport Collection Kadın Silikon Kol Saati Apws009005",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/15/69790159/150129457/0/0_org.jpg",
    price: "97,64 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061001",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200729/16/6325932/56992317/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Heg27011a Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/b1683d51/16482991/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APL5C3012D05",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/10/44dced8a/57592546/1/1_org.jpg",
    price: "79,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSV1-A8808-ED351",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/12/78884956/98591308/1/1_org.jpg",
    price: "89 TL",
    firm: "Spectrum",
    name: "Unisex Siyah Çelik Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/14/80645439/164459854/0/0_org.jpg",
    price: "129,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa065305",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201217/12/39216811/90990767/1/1_org.jpg",
    price: "199 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati For Motion 11646k.01 Fonksiyonlu",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210220/16/65502431/144155073/1/1_org.jpg",
    price: "399 TL",
    firm: "Ferrucci",
    name: "Erkek Siyah Kol Saati ve Bileklik 169005",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty91/product/media/images/20210403/17/472b2b38/6045618/1/1_org.jpg",
    price: "714 TL",
    firm: "Diesel",
    name: "Erkek Kol Saati DZ1436",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/11/70407197/151033595/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061003",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210111/21/51157507/128657010/1/1_org.jpg",
    price: "128 TL",
    firm: "istliv",
    name:
      "Bay&Kadın Çelik Dijital Led Hasır Kordon Yeni Model Indirimli Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/06/f6963880/59366786/1/1_org.jpg",
    price: "94,90 TL",
    firm: "Luis Polo",
    name: "B1-LED-01 Dijital Led Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/21/52324046/3732998/1/1_org.jpg",
    price: "374,99 TL",
    firm: "Casio",
    name: "Retro Kadın Kol Saati LA680WA-7DF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20210322/20/74449785/19901109/1/1_org.jpg",
    price: "149 TL",
    firm: "SMAEL",
    name: "1545 Gümüş Erkek Kol Saati Su Geçirmez",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210305/14/68990221/148781436/0/0_org.jpg",
    price: "216,65 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Analog Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/17/394b0c91/20402405/1/1_org.jpg",
    price: "738 TL",
    firm: "Guess",
    name: "Unisex Kol Saati GUW1264G3",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210418/10/81045570/21525841/1/1_org.jpg",
    price: "900 TL",
    firm: "Gant",
    name: "Gt080005 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/5/58186793/135536642/1/1_org.jpg",
    price: "54,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Sport Collection Kadın Silikon Kol Saati Apws009007",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/18/69853018/150316789/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061303",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201027/15/19941141/98090236/0/0_org.jpg",
    price: "379 TL",
    firm: "Daniel Klein",
    name: "816638 Çelik Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/16/70483513/7372764/1/1_org.jpg",
    price: "349 TL",
    firm: "Casio",
    name: "Erkek Siyah Kol Saati Mtp-1314l-8avdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/19/2ddf8b56/66432009/1/1_org.jpg",
    price: "921,38 TL",
    firm: "Fossil",
    name: "Fossıl Fs4991ıe Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/10/80239231/163944917/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Gümüş Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210309/14/70188396/150733782/1/1_org.jpg",
    price: "232,76 TL",
    firm: "POLO Rucci",
    name: "Erkek Kol Saati Ve Cüzdan Kartlık Kemer Anahtarlık Bileklik Kombini",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210402/19/34c98598/16431176/1/1_org.jpg",
    price: "1.122 TL",
    firm: "Fossil",
    name: "Erkek Kol Saati FFS5068",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200825/18/8713894/82651002/1/1_org.jpg",
    price: "536,25 TL",
    firm: "Guess",
    name: "GUGW0200G1 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/3/49814347/120441004/1/1_org.jpg",
    price: "116,65 TL",
    firm: "Michael West",
    name: "M1251-007 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/01/96946dc6/16483688/1/1_org.jpg",
    price: "109,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APL98B1285M27",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20201217/12/39216766/91055749/1/1_org.jpg",
    price: "495 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati For Motion B01116fk.04 Fonksiyonlu",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/01/e7d27308/42731796/1/1_org.jpg",
    price: "1.962 TL",
    firm: "Guess",
    name: "Erkek Kol Saati GUW1310G3",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/15/69793716/150134103/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061606",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210403/22/2126e3e1/21040125/1/1_org.jpg",
    price: "1.630 TL",
    firm: "WELDER MOODY",
    name: "Unisex Kol Saati WWRS312",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200407/10/1286813/67912406/1/1_org.jpg",
    price: "134,89 TL",
    firm: "Lufian",
    name: "Lufıan 3404 Whıte Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210121/16/55856528/7482417/1/1_org.jpg",
    price: "247,25 TL",
    firm: "Casio",
    name: "Mtp-v001gl-1budf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210113/7/52603644/59119444/1/1_org.jpg",
    price: "1.281,24 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFS-S500DB-1BVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/19/70df07cd/59366830/1/1_org.jpg",
    price: "94,90 TL",
    firm: "Luis Polo",
    name: "X1-LED-02 Dijital Led Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210303/22/68426836/20856826/1/1_org.jpg",
    price: "199 TL",
    firm: "Forsining",
    name: "Erkek Kol Saati 889957175418",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/15/1d33c255/62381766/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028801 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69789651/150130082/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061803",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/11/81266068/137910701/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Rower",
    name: "Mopia Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69839782/150296035/0/0_org.jpg",
    price: "84,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062106",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210218/0/64341394/130730269/1/1_org.jpg",
    price: "179 TL",
    firm: "Skmei",
    name: "Sewor Kasa Led Işıklı Tasarım Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/13/79764695/97406350/1/1_org.jpg",
    price: "75 TL",
    firm: "Tuna",
    name: "Unisex Siyah Tezkere Sayar Dijital Su Geçirmez Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210319/17/73693690/155225448/0/0_org.jpg",
    price: "84,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Hasır Erkek Kol Saati Apwa065200",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20201222/5/40657374/121581864/1/1_org.jpg",
    price: "149,90 TL",
    firm: "Polo Air",
    name:
      "Polo Erkek Set Kombin Saat Gözlük Parfüm Tesbih Kalem Bileklik Özel Kutulu Pl-0432e1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200922/14/11395221/87864183/1/1_org.jpg",
    price: "385,70 TL",
    firm: "Naviforce",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/07/41401813/57366307/1/1_org.jpg",
    price: "1.085,63 TL",
    firm: "Tommy Hilfiger",
    name: "Erkek Kol Saati TH1791579",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/17/69840171/98336430/1/1_org.jpg",
    price: "180 TL",
    firm: "Ricardo",
    name: "Dijital Dokunmatik Mıknatıslı Kol Saati Çakmak Tesbih Bileklik Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/20/52278587/7273586/1/1_org.jpg",
    price: "218,74 TL",
    firm: "Casio",
    name: "Mtp-v001l-7b",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210316/10/71991119/152956367/1/1_org.jpg",
    price: "461,52 TL",
    firm: "Ferrucci",
    name: "Erkek Füme Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210214/21/62374070/140087096/1/1_org.jpg",
    price: "79,90 TL",
    firm: "Coliseum",
    name: "Cls7765a-emh-01 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210305/22/69146054/149246166/0/0_org.jpg",
    price: "99 TL",
    firm: "Exception",
    name: "Dijital Erkek Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201203/16/34779402/115677163/0/0_org.jpg",
    price: "195 TL",
    firm: "Parigi Connect",
    name: "Prgc505-01 Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210311/9/70529473/2576535/1/1_org.jpg",
    price: "329 TL",
    firm: "Casio",
    name: "Retro Erkek Kol Saati Sck07.02043",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/12/64900378/58858503/1/1_org.jpg",
    price: "374,99 TL",
    firm: "Timberland",
    name: "Tbl.15905jys/07 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210301/12/67633569/147064654/0/0_org.jpg",
    price: "85,70 TL",
    firm: "Gold Time",
    name: "Gold Renk Çelik Kordon Dokunmatik Ekran Erkek Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210319/19/73786238/62062511/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Mıknatıslı Dokunmatik Unisex Kol Saati Xt250106",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210215/14/62719982/140893471/1/1_org.jpg",
    price: "507,53 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/14/77845738/137152005/1/1_org.jpg",
    price: "403,55 TL",
    firm: "Daniel Klein",
    name: "Erkek Metalik Çelik Kordon Kol Saati +Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/17/850d933c/62803745/1/1_org.jpg",
    price: "1.407 TL",
    firm: "Diesel",
    name: "Dz1907 Erkek Set Kol Saati Ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/20/52276643/14671060/1/1_org.jpg",
    price: "343,74 TL",
    firm: "Timberland",
    name: "Erkek Kol Saati Tbl.15075jys/61",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210317/21/73160719/59819237/1/1_org.jpg",
    price: "826,20 TL",
    firm: "Fossil",
    name: "Erkek Kol Saati FFS4835IE",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/1/67803383/147209201/1/1_org.jpg",
    price: "507,54 TL",
    firm: "Ferrucci",
    name: "Function Erkek Kol Saati + Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210126/15/57372961/75295470/1/1_org.jpg",
    price: "104,90 TL",
    firm: "Coliseum",
    name: "Erkek Takvimli Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210403/23/ec0f24e6/21525878/1/1_org.jpg",
    price: "815,63 TL",
    firm: "Tommy Hilfiger",
    name: "Kadın Kol Saati TH1782157",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200515/20/1346923/56225105/2/2_org.jpg",
    price: "84,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati A569",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/06/5e180ac1/59366768/1/1_org.jpg",
    price: "94,90 TL",
    firm: "Luis Polo",
    name: "B1-LED-02 Dijital Led Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/1/45967181/84762621/1/1_org.jpg",
    price: "280 TL",
    firm: "Ricardo",
    name: "Dıgıtal Kol Saati Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/20/d596117c/59755334/1/1_org.jpg",
    price: "59,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A9490-UD351",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/18/80355328/12132131/1/1_org.jpg",
    price: "262,48 TL",
    firm: "Casio",
    name: "Mtp-v002d-1budf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210311/23/70803770/62062564/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Mıknatıslı Dokunmatik Unisex Kol Saati Xt250097",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/10/69626510/149909664/1/1_org.jpg",
    price: "229,87 TL",
    firm: "Polo Air",
    name:
      "Erkek Kol Saati Kemer Cüzdan Kartlık Çakmak Erkek Set Kombin Hediyelik Kutusunda",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/12/80263401/124437216/1/1_org.jpg",
    price: "107,90 TL",
    firm: "Ricardo",
    name: "Sevgili Çift Saat Kombinleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200819/11/8331581/81930134/0/0_org.jpg",
    price: "992,25 TL",
    firm: "Fossil",
    name: "Ffs5708set Erkek Set Kol Saati Ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210121/12/55765804/122312123/1/1_org.jpg",
    price: "350,29 TL",
    firm: "Ferrucci",
    name: "Unisex Siyah Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/4/79942746/162054423/1/1_org.jpg",
    price: "420 TL",
    firm: "FERRO",
    name: "Watch 6 Plus Enson Bluetooth Kulaklık Ve Ios Uyumlu Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200917/17/11006991/87127757/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Spectrum",
    name: "Unisex Dokunmatik Kol Saati Xt250256",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210210/23/61936621/9418688/1/1_org.jpg",
    price: "529 TL",
    firm: "Casio",
    name: "Mtp-1303d-1avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210226/1/67051009/123638898/1/1_org.jpg",
    price: "335,90 TL",
    firm: "Ferrucci",
    name: "Erkek Siyah Kol Saati Fc-13565m.05",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/21/b0cd81ab/59755358/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A9425-UDC5C",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210313/11/71044832/8263201/1/1_org.jpg",
    price: "326,56 TL",
    firm: "Casio",
    name: "Unisex Çelik Cas-a168wa1wdf Retro Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210402/19/5bf97420/13223236/1/1_org.jpg",
    price: "599 TL",
    firm: "Police",
    name: "Erkek Kol Saati PL.14834JBCR-12",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/23/d8d33e84/18469086/1/1_org.jpg",
    price: "799 TL",
    firm: "Up! Watch",
    name: "Unisex Kol Saati ICON ALL BLACK UPWATCH ICON ALL BLACK",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201013/0/15419037/92671034/0/0_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20201210/18/37153438/118221926/0/0_org.jpg",
    price: "79,90 TL",
    firm: "Coliseum",
    name: "Mıknatıslı Hasır Kordon Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/6/51604360/75650791/1/1_org.jpg",
    price: "105,76 TL",
    firm: "Duke Nickle",
    name: "T3ybg17840 Kadın Kol Saati Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200521/5/1566295/71598500/1/1_org.jpg",
    price: "538,30 TL",
    firm: "T5 Saat",
    name: "T5 Water Resistant 30 Metre Chrono Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210213/16/62099016/134083073/1/1_org.jpg",
    price: "1.450 TL",
    firm: "KLEXOS",
    name: "24 Saat Kadranlı Kol Saati | Dream Kamchatka Silver",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/14/24f28303/58724660/1/1_org.jpg",
    price: "300,90 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati FC.13029TM",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201010/12/14836528/88723269/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Sarı Kol Saati Apwa037100",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20201201/10/34002379/105003616/1/1_org.jpg",
    price: "219 TL",
    firm: "Forsining",
    name: "Erkek Siyah Kurmalı Mekanik Deri Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210217/0/63543302/138411010/1/1_org.jpg",
    price: "49,85 TL",
    firm: "Rower",
    name: "Mopia Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/15/69792388/150134422/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061005",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/18/58437768/135820274/1/1_org.jpg",
    price: "98,49 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws010306",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/17/69828267/150271949/1/1_org.jpg",
    price: "230 TL",
    firm: "CkWatch",
    name: "Unisex Siyah Sonsuza Kadar Seninle Yazılı Sevgili Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/19/77644608/124435404/1/1_org.jpg",
    price: "233 TL",
    firm: "Ricardo",
    name:
      '" Çift Saat"/ " Sevgili Saatleri " Metal Kordon Dokunmatik Led Kol Saatleri Storistanbul',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/15/47800228/126827226/1/1_org.jpg",
    price: "236 TL",
    firm: "Ricardo",
    name: "Çift Saat Metal Kordon Dokunmatik Led Kol Saatleri Storistanbul",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210109/5/50141668/95177174/3/3_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Unisex Siyah Metal Kol Saati Duj1013",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69843215/150293059/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061805",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/16/69815481/150225282/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061601",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210106/14/47744193/126816900/1/1_org.jpg",
    price: "218 TL",
    firm: "Ricardo",
    name:
      'Su Geçirmez " Çift Saat"/ " Sevgili Saatleri " Metal Kordon Dokunmatik Kol Saatleri Storistanbul',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210323/12/74628843/18517995/1/1_org.jpg",
    price: "1.269,90 TL",
    firm: "Michael Kors",
    name: "Kadın Kol Saati Mk5354",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200930/17/12705236/66252388/1/1_org.jpg",
    price: "425,33 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati Dk.1.12502.1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/18/80359141/21424825/1/1_org.jpg",
    price: "1.030 TL",
    firm: "Lacoste",
    name: "2001063 Bayan Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210325/19/75307694/15412138/1/1_org.jpg",
    price: "999 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFV-C100D-1AVDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210317/16/73085817/18518045/1/1_org.jpg",
    price: "2.016 TL",
    firm: "Diesel",
    name: "Erkek Kol Saati DZ4282",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210421/4/81787019/100847701/1/1_org.jpg",
    price: "49,90 TL",
    firm: "Accessory City",
    name: "Renkli Camlı Mıknatıs Kordonlu Şık Unısex Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200520/15/1549254/57843770/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Erkek Kol Saati VEH28019D",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/20/d9b7b2e3/58869969/1/1_org.jpg",
    price: "253,66 TL",
    firm: "Timberland",
    name: "Erkek Kol Saati TBL.15898JYS03",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/3/77360112/160112995/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Kadın Gold Dijital Metal Kol Saati Apwn038403",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210218/2/64719197/143036807/0/0_org.jpg",
    price: "159,90 TL",
    firm: "Polo55",
    name:
      "Plpremıum19r01 Siyah Dokunmatik Led Ekran Mıknatıs Hasır Kordon Dijital Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/11/53876829/130507044/1/1_org.jpg",
    price: "239,97 TL",
    firm: "Polo Air",
    name: "Erkek Kol Saati Kemer Cüzdan Çakmak Kartlık Erkek Set Kombin",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210114/23/53457727/61787454/1/1_org.jpg",
    price: "166 TL",
    firm: "Quamer",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210301/11/67627705/62647329/1/1_org.jpg",
    price: "129,99 TL",
    firm: "Ricardo",
    name: "Unisex Gümüş Çift Saatleri Rcr.0.33934016300",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210205/17/60247405/137816043/1/1_org.jpg",
    price: "310 TL",
    firm: "Casio",
    name: "Mtp-vd01l-1avudf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210215/11/62626658/140819601/1/1_org.jpg",
    price: "507,53 TL",
    firm: "Ferrucci",
    name: "Erkek Gümüş Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210113/0/52418153/68386952/1/1_org.jpg",
    price: "119,90 TL",
    firm: "Skmei",
    name: "1155b Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210215/11/62628924/140818000/1/1_org.jpg",
    price: "507,53 TL",
    firm: "Ferrucci",
    name: "Erkek Gümüş Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200924/17/11749342/88607829/0/0_org.jpg",
    price: "79,90 TL",
    firm: "Luis Polo",
    name: "P1200-eh-05 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210410/0/78985869/58858502/1/1_org.jpg",
    price: "298,75 TL",
    firm: "Timberland",
    name: "TBL.15905JYS/07 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210217/1/63545061/137910752/1/1_org.jpg",
    price: "49,80 TL",
    firm: "Rower",
    name: "Mopia Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/3/28912963/108717536/0/0_org.jpg",
    price: "279,99 TL",
    firm: "Daniel Klein",
    name: "Dk102-011942b Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210313/13/71078866/126196960/1/1_org.jpg",
    price: "319 TL",
    firm: "istliv",
    name: 'Su Geçirmez " Sevgili Saatleri " Metal Kordon " Çift Saatleri',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201010/12/14846141/91337551/1/1_org.jpg",
    price: "79,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Lacivert Kol Saati Apws007903",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210206/18/60510183/10208958/1/1_org.jpg",
    price: "335,28 TL",
    firm: "Casio",
    name: "Cas-mtpv006d1budf Standart Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/11/80592432/164379516/1/1_org.jpg",
    price: "410 TL",
    firm: "FERRO",
    name: "Watch L19 Android Ve Ios Uyumlu Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210210/21/61902742/17626838/1/1_org.jpg",
    price: "276,35 TL",
    firm: "Casio",
    name: "Mtp-v005d-7budf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/12/80263418/124437897/1/1_org.jpg",
    price: "110 TL",
    firm: "Ricardo",
    name: "Sevgili Çift Kombineleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210306/10/69273399/149405773/1/1_org.jpg",
    price: "232,76 TL",
    firm: "Polo Air",
    name: "Erkek Kol Saati Ve Parfüm Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210215/11/62632079/10750852/1/1_org.jpg",
    price: "960 TL",
    firm: "Casio",
    name: "Erkek Cas-ga100gbx1a9dr G-shock Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/21/52324535/13614108/1/1_org.jpg",
    price: "567,92 TL",
    firm: "Casio",
    name: "Retro Unisex Kol Saati A168WEGM-9DF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210218/10/64825635/11739639/1/1_org_zoom.jpeg",
    price: "482,24 TL",
    firm: "Casio",
    name: "Mtp-sw300d-7avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210211/4/61982710/7273559/1/1_org.jpg",
    price: "318,74 TL",
    firm: "Casio",
    name: "Mtp-1314d-7avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210212/12/62062295/19901091/1/1_org.jpg",
    price: "149 TL",
    firm: "SMAEL",
    name: "Erkek Kol Saati S1545",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210201/1/58892039/99361145/1/1_org.jpg",
    price: "129 TL",
    firm: "SPEKTRUM BAİTS",
    name: "Bay &bayan Çelik Dijital Led Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/9/51912547/81014718/1/1_org.jpg",
    price: "1.300 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFR-571DB-1A1VUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210303/15/68305816/147857450/0/0_org.jpg",
    price: "269,90 TL",
    firm: "teknoworld",
    name: "Watch 6 Plus Akıllı Saat Unisex",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20210316/22/72517888/106536337/1/1_org.jpg",
    price: "355 TL",
    firm: "FERRO",
    name: "Watch 6 Plus Android Ve Ios Uyumlu Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/10/69634062/149922474/1/1_org.jpg",
    price: "120 TL",
    firm: "Spectrum",
    name: "Led Çift Kol Saatleri Sevgili Saati Dokunmatik Ekranlı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/21/52323910/15530210/1/1_org.jpg",
    price: "898,75 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFV-C100D-1BVDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210216/11/63226175/134083680/1/1_org.jpg",
    price: "1.425 TL",
    firm: "KLEXOS",
    name: "24 Saat Kadranlı Kol Saati | Dream Everglades Rose Gold",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210205/16/60232484/138007182/1/1_org.jpg",
    price: "181,28 TL",
    firm: "istliv",
    name: "2 Adet Renkli Cam Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/23/79648172/159799514/1/1_org.jpg",
    price: "108,33 TL",
    firm: "metelite",
    name: "5 Atm Su Geçirmez Dokunmatik Led Dijital Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/14/38377994/119168123/0/0_org.jpg",
    price: "230,82 TL",
    firm: "Polo Air",
    name:
      "Erkek Kol Saati Ve Cüzdan Kemer Anahtarlık Bileklik Kombini Pl-0431e4",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/20/52292231/64168430/1/1_org.jpg",
    price: "639 TL",
    firm: "Beverly Hills Polo Club",
    name: "Bp3038x.390 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/10/80238575/163943810/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Gümüş Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/11/3bb7b226/61633549/1/1_org.jpg",
    price: "1.158 TL",
    firm: "Tommy Hilfiger",
    name: "Erkek Kol Saati TH1710406",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210317/18/73135709/154411648/0/0_org.jpg",
    price: "108,31 TL",
    firm: "Tulpar",
    name: "Özel Kutusunda Mıknatıs Kordon Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210418/0/80952399/147616430/1/1_org.jpg",
    price: "92,87 TL",
    firm: "Spectrum",
    name: "Dark Blanc Dokunmatik Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200917/11/10947772/87021223/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Spectrum",
    name: "Unisex Pembe Dokunmatik Kol Saati Xt250260",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/21/52295736/7372757/1/1_org.jpg",
    price: "355 TL",
    firm: "Casio",
    name: "Cas-mtp1302d7a1vdf Standart Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/17/80344823/78283317/1/1_org.jpg",
    price: "166 TL",
    firm: "Frank Martin",
    name: "Erkek Saat Bileklik Çakmak Seti 487004",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210217/0/63541478/137911099/1/1_org.jpg",
    price: "63,50 TL",
    firm: "Rower",
    name: "Mopia Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210323/15/74696324/87056589/1/1_org.jpg",
    price: "162 TL",
    firm: "Spectrum",
    name: "Unisex Metalik Dokunmatik Kol Saati Xt250265",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20210320/11/73913709/155525135/1/1_org.jpg",
    price: "422,06 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210330/17/76370253/62982591/1/1_org.jpg",
    price: "921,25 TL",
    firm: "Casio",
    name: "Edifice Efr-570db-1bvudf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/08/efb931e4/17520429/1/1_org.jpg",
    price: "1.266 TL",
    firm: "Emporio Armani",
    name: "Erkek Kol Saati AR1732",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200520/15/1549254/21047925/1/1_org.jpg",
    price: "69,90 TL",
    firm: "G Sport POLO",
    name: "Erkek Kol Saati VEG27001B",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210319/22/73820717/62062587/1/1_org.jpg",
    price: "68,77 TL",
    firm: "Spectrum",
    name: "Unisex Kol Saati Xt250080",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201115/18/26579558/106351608/0/0_org.jpg",
    price: "385,70 TL",
    firm: "Naviforce",
    name: "Erkek Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/15/58390126/135763454/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws009600",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210311/20/70787050/7372733/1/1_org.jpg",
    price: "424,99 TL",
    firm: "Casio",
    name: "Ltp-1303d-7avdf Kadın Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210121/3/55666083/132479303/0/0_org.jpg",
    price: "159 TL",
    firm: "Ricardo",
    name: "Su Geçirmez Erkek Kol Saati Çakmak Tesbih Bileklik Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/20/52282831/9558438/1/1_org.jpg",
    price: "194 TL",
    firm: "Q&Q",
    name: "3g1344 Kadın Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210319/17/73706550/99370322/1/1_org.jpg",
    price: "199 TL",
    firm: "SPEKTRUM BAİTS",
    name: "Bay &bayan Çelik Dijital Led Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/00/59ec7330/22242629/1/1_org.jpg",
    price: "1.140 TL",
    firm: "Armani Exchange",
    name: "Erkek Kol Saati AX7105",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/3/77360141/160113029/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Dijital Metal Unisex Kol Saati Apwn038300",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20201212/12/37790255/118699609/1/1_org.jpg",
    price: "226,80 TL",
    firm: "istliv",
    name: "Çift  Sevgili  Dijital Kol Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/15/6a358474/62381728/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028900 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/22/69141912/149150031/1/1_org.jpg",
    price: "377,21 TL",
    firm: "Daniel Klein",
    name: "Erkek Siyah T5 Chorono Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210316/14/72105159/99513897/1/1_org.jpg",
    price: "240 TL",
    firm: "C & T Publishing",
    name:
      "Unisex Dokunmatik Sevgili / Çift Kol Saati- Kadın ( Bakır ) , Erkek ( Siyah )",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210114/12/53143152/129707113/1/1_org.jpg",
    price: "233,47 TL",
    firm: "Polo Air",
    name: "Erkek Kol Saati Kemer Cüzdan Çakmak Kartlık Set",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210124/12/56663304/133719565/0/0_org.jpg",
    price: "185,07 TL",
    firm: "Homies",
    name: "Marka Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200819/23/8432257/82076203/0/0_org.jpg",
    price: "955,50 TL",
    firm: "Michael Kors",
    name: "Mk8819 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20210324/15/74943157/143412340/1/1_org.jpg",
    price: "405 TL",
    firm: "Daniel Klein",
    name: "Dk013213l-03 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/16/77446870/115563392/1/1_org.jpg",
    price: "499 TL",
    firm: "Ferrucci",
    name: "Takvimli Çelik Kasa Ve Kordon Erkek Kol Saati Siyah",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/16/69811565/150160822/0/0_org.jpg",
    price: "84,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa062101",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210319/22/73816085/7273551/1/1_org.jpg",
    price: "249 TL",
    firm: "Casio",
    name: "Mtp-1303l-1avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210321/13/74103025/155740669/0/0_org.jpg",
    price: "84,80 TL",
    firm: "Gold Time",
    name: "Tuşlu Dijital Unisex Mıknatıslı Siyah Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210319/17/73730853/1845483/1/1_org.jpg",
    price: "282,34 TL",
    firm: "Casio",
    name: "Casiyo Retro Unisex Kol Saati Sck07.11052",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210303/9/68185185/147717957/1/1_org.jpg",
    price: "119,98 TL",
    firm: "Spectrum",
    name: "Dijital ve Analog Suya Dayanıklı Kol Saati D220740a",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/12/80609333/164407516/1/1_org.jpg",
    price: "499 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati Ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/21/52315366/8416107/1/1_org.jpg",
    price: "258,25 TL",
    firm: "Casio",
    name: "Erkek Kol Saati MTP-V006L-7BUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20201210/19/37174323/118254600/0/0_org.jpg",
    price: "79,90 TL",
    firm: "Coliseum",
    name: "Mıknatıslı Hasır Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/13/69dda522/57592622/1/1_org.jpg",
    price: "84,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8970-UD663",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/17/58430097/135807301/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws010301",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200817/1/8168866/81610978/0/0_org.jpg",
    price: "116,65 TL",
    firm: "Michael West",
    name: "Neon M1100-007 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20201230/11/43527126/124852575/1/1_org.jpg",
    price: "129 TL",
    firm: "Ricardo",
    name: "Unisex Siyah Pembe Altın Sevgili Çift Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/16/58403720/135781600/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Hasır Metal Kol Saati Apws009702",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210225/20/67004374/136433491/1/1_org.jpg",
    price: "538,30 TL",
    firm: "T5 Saat",
    name: "T5 Erkek Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/09/8f6ba19a/16483754/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Apl96b1030s04 Siyah Kadın Saat 100437078",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210311/8/70527503/151215180/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Luis Polo",
    name: "Erkek Saat Seti Dt1048a-emh-led-kmb-01",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200515/20/1346923/57592523/2/2_org.jpg",
    price: "123,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8955-UD551",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210126/20/57477649/134606097/1/1_org.jpg",
    price: "137,53 TL",
    firm: "Spectrum",
    name: "Erkek Saat Yeni Sezon",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210211/7/61995638/9526959/1/1_org.jpg",
    price: "286,25 TL",
    firm: "Casio",
    name: "Ae-1000w-4avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200924/9/11650126/88430117/1/1_org.jpg",
    price: "385,37 TL",
    firm: "Naviforce",
    name: "Erkek Kol Saati + Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201117/14/27104361/21461717/1/1_org.jpg",
    price: "164,59 TL",
    firm: "Crrju",
    name: "Erkek Kol Saati Bileklik Hediyeli 640478603398",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/19/52272232/58868492/1/1_org.jpg",
    price: "352,93 TL",
    firm: "Casio",
    name: "Mtp-v004d-1b2udf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20210330/17/76367783/158817557/1/1_org.jpg",
    price: "499 TL",
    firm: "Daniel Klein",
    name: "Erkek Füme Kol Saati Dk102.0258",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201013/0/15419040/92671041/0/0_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/07/df47ef06/57366449/1/1_org.jpg",
    price: "126 TL",
    firm: "PARİGİ",
    name: "Erkek Kol Saati PRG2009-03",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20210317/17/73104980/10292843/1/1_org.jpg",
    price: "1.349 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFR-556DB-1AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201120/22/29318295/108880774/1/1_org.jpg",
    price: "439,99 TL",
    firm: "Homies",
    name: "Tüm Fonksiyonları Aktif Çelik Kordon Erkek Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210216/17/63398960/14081572/1/1_org.jpg",
    price: "1.531,24 TL",
    firm: "Seiko",
    name: "Kronograf Sks605p Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/10/51994333/75768685/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Choppers",
    name: "Huj29003c Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201120/23/29443235/108986453/0/0_org.jpg",
    price: "357 TL",
    firm: "Daniel Klein",
    name: "Dtime Unisex Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/23/79648143/159799452/1/1_org.jpg",
    price: "108,33 TL",
    firm: "metelite",
    name:
      "5 Atm Su Geçirmez Unisex Dokunmatik Led Dijital Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/2/78811571/62062531/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Mıknatıslı Dokunmatik Unisex Kol Saati Xt250128",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/14/f58a9c3d/58724658/1/1_org.jpg",
    price: "299,99 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati FC.13029TM",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/15/80313077/115125469/1/1_org.jpg",
    price: "1.399 TL",
    firm: "Raymond",
    name: "Erkek Swıss Iskelet Otomatik Mekanizma  Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/7/51550208/109917495/1/1_org.jpg",
    price: "79,90 TL",
    firm: "Coliseum",
    name: "Cls7741h-eh-01 Erkek Kol Saati / 0",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210313/6/71005953/60841701/1/1_org.jpg",
    price: "169 TL",
    firm: "Twelve",
    name: "Kadın Erkek Çift Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210420/21/81705070/81023339/1/1_org.jpg",
    price: "1.437,49 TL",
    firm: "Casio",
    name: "Casıo Efr-571dc-2avudf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201012/15/15330415/92501999/0/0_org.jpg",
    price: "118 TL",
    firm: "Skmei",
    name: "Erkek Kol Saati Siyah 1155",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/16/80327623/98591311/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Dokunmatik Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/20/58474455/13254920/1/1_org.jpg",
    price: "1.249,99 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFV-550D-1AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210307/22/69569626/133044339/1/1_org.jpg",
    price: "118 TL",
    firm: "istliv",
    name: '" Çift Saat"/ " Sevgili Saatleri " Dokunmatik Led Kol Saatleri',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210306/10/69274113/149406686/1/1_org.jpg",
    price: "232,76 TL",
    firm: "Polo Air",
    name: "Erkek Kol Saati Ve Parfüm Seti Hediyelik Kutusunda Kombin",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210418/17/81065357/143412054/1/1_org.jpg",
    price: "323 TL",
    firm: "Daniel Klein",
    name: "Dk013213l-02 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/21/52311025/9440792/1/1_org.jpg",
    price: "211,65 TL",
    firm: "Casio",
    name: "Mw-240-2bvdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210220/16/65499114/144153854/1/1_org.jpg",
    price: "399 TL",
    firm: "Ferrucci",
    name: "Erkek Beyaz Kol Saati ve Bileklik 168855",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210416/14/80643908/164458424/0/0_org.jpg",
    price: "129,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061205",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/10/80238861/163944384/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Gümüş Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/15/2f014ea6/62381822/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028303 Deri Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210406/07/936f5df7/64698122/1/1_org.jpg",
    price: "230 TL",
    firm: "LOKMAT",
    name: "Erkek Kol Saati MK28",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210125/18/57082653/18914545/1/1_org.jpg",
    price: "411,75 TL",
    firm: "Casio",
    name: "Ltp-vt01d-7budf Kadın Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/6/51438238/72618959/1/1_org.jpg",
    price: "117,53 TL",
    firm: "Skmei",
    name: "Skmeı 1251 Yeni Seri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210316/15/72124443/21885491/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name:
      "Mıknatıslı Hasır Kordon Dijital Dokunmatik Unisex Kol Saati Uh1sp220103",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty21/product/media/images/20201106/21/23137302/101995923/0/0_org.jpg",
    price: "294 TL",
    firm: "SKECHERS",
    name: "Sr9026 Erkek Set Kol Saati Ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201010/12/14845417/91278037/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Siyah Kol Saati Apws008103",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210125/3/56836878/133889379/0/0_org.jpg",
    price: "249,98 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Dijital Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20201103/14/21779459/88723240/1/1_org.jpg",
    price: "54,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Kol Saati Apwa037003",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210115/22/53774724/130070585/1/1_org.jpg",
    price: "209,98 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Dokunmatik Led Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201023/11/19173989/96817358/0/0_org.jpg",
    price: "280 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati 851844",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20201013/17/15544971/20463161/1/1_org.jpg",
    price: "253,20 TL",
    firm: "Q&Q",
    name: "Erkek Kol Saati Ca08j202y",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20201104/20/22460000/100999009/0/0_org.jpg",
    price: "119,96 TL",
    firm: "Bilge Store",
    name: "Arapça Elif Vav Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210220/4/65361754/143979321/1/1_org.jpg",
    price: "98,93 TL",
    firm: "istliv",
    name: "Unisex Silikon Kordon Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210403/22/417d5373/21125282/1/1_org.jpg",
    price: "139,90 TL",
    firm: "Skmei",
    name: "Erkek Kol Saati 702854945734",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210328/13/75763268/17048690/1/1_org.jpg",
    price: "1.881,18 TL",
    firm: "Seiko",
    name: "Erkek Gümüş Kol Saati Ssb335p",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200923/10/11497203/88094227/1/1_org.jpg",
    price: "385,70 TL",
    firm: "Naviforce",
    name: "Erkek Gümüş Rengi Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210114/18/53315304/126804801/1/1_org.jpg",
    price: "182,30 TL",
    firm: "Ricardo",
    name: "Unisex Gri Çift Saat Metal Kordon Dokunmatik Kol Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210403/21/3885515a/20857048/1/1_org.jpg",
    price: "249 TL",
    firm: "WINNER",
    name: "Mekanik Otomatik Çelik Kasa Kordon Lüks Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/16/69820223/150225561/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa060801",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/16/67966166/82570232/1/1_org.jpg",
    price: "117,53 TL",
    firm: "Skmei",
    name: "1251 Su Geçirmez Dijital Işıklı Spor Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/11/a936cc4d/61633581/1/1_org.jpg",
    price: "600 TL",
    firm: "Guess",
    name: "Erkek Kol Saati GUGW0058G3",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/10/80238995/163944568/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Siyah Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201222/13/40758010/121643555/1/1_org_zoom.jpeg",
    price: "385,70 TL",
    firm: "Tom Jones",
    name: "Erkek Kol Saati+Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210127/16/57723108/134931803/1/1_org.jpg",
    price: "269 TL",
    firm: "istliv",
    name: '" Çift Saat"/ " Sevgili Saatleri " Analog Kol Saatleri',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/13193af6/57592624/1/1_org.jpg",
    price: "109,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8973-UH151",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210114/0/52983426/117980146/1/1_org.jpg",
    price: "195,45 TL",
    firm: "HÜMA MODA",
    name: "Sevgili Eş Çift Kol Saati Hm250334",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/19/363911d1/59366732/1/1_org.jpg",
    price: "94,90 TL",
    firm: "Luis Polo",
    name: "X1-LED-04 Dijital Led Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201223/11/41072723/122020968/0/0_org.jpg",
    price: "2.729 TL",
    firm: "Casio",
    name: "Efr-571dc-2avudf Edifice Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210226/21/67256247/57340382/1/1_org.jpg",
    price: "405 TL",
    firm: "Daniel Klein",
    name: "DK011942B-02 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/1/49687757/91605658/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Deh28010a Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210315/22/71843016/11791990/1/1_org.jpg",
    price: "620 TL",
    firm: "Swatch",
    name: "Unisex Kol Saati SUOK700A",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210211/5/61989357/56192643/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Skmei",
    name: "Erkek Kol Saati BTY-1251SYH",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210122/18/56205853/57646001/1/1_org.jpg",
    price: "648 TL",
    firm: "Casio",
    name: "Retro Unisex Kol Saati A168WGG-1ADF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210219/1/65107034/62284554/1/1_org.jpg",
    price: "77,12 TL",
    firm: "Spectrum",
    name: "Seri Dijital Gümüş Kasa Renk Led Bileklik Silikon Kol Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210403/22/949bc3bf/21234135/1/1_org.jpg",
    price: "984,38 TL",
    firm: "Guess",
    name: "Erkek Kol Saati GUW1254G1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210123/12/56388394/133388906/0/0_org.jpg",
    price: "59,90 TL",
    firm: "Orçun Özkarlıklı",
    name: "Unisex Dijital Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/19/52246398/12992852/1/1_org.jpg",
    price: "194 TL",
    firm: "Q&Q",
    name: "3g2150 Erkek Kahverengi Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty8/product/media/images/20200730/20/6448375/11449042/1/1_org.jpg",
    price: "1.249 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFR-556DB-2AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210118/23/54965780/131673073/0/0_org.jpg",
    price: "39,49 TL",
    firm: "King and Queen",
    name: "Retro Unısex Dijital Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/11/65dffc3a/61722911/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Chrono",
    name: "Retro Klasik Altın Renk Dijital Spor Unisex Kol Saati A159w",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/16/80669026/164497621/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061406",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210312/17/70976845/132500619/1/1_org.jpg",
    price: "400 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210107/17/48204500/109923685/1/1_org.jpg",
    price: "176,35 TL",
    firm: "Q&Q",
    name: "Unisex Siyah Kol Saati 3g3541",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/8/46808572/82688932/1/1_org.jpg",
    price: "74 TL",
    firm: "Twelve",
    name: "Erkek Kol Saati / Limited Edition Series",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210406/0/78015634/57058112/1/1_org.jpg",
    price: "114,90 TL",
    firm: "WatchArt",
    name: "Çift Kol Saati 3088781",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/0/49497973/119402667/1/1_org.jpg",
    price: "94,90 TL",
    firm: "Luis Polo",
    name: "Dt1011m-emd-14 Özel Seri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210309/10/70103588/68955494/1/1_org.jpg",
    price: "137,37 TL",
    firm: "Skmei",
    name:
      "1155b Erkek Kol Saati Digita - Analog Ekran Silikon Kordon Su Geçirmez",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210421/21/81968743/83635710/1/1_org.jpg",
    price: "29,90 TL",
    firm: "Belonni Collection",
    name: "Unisex Dijital Retro Kol Saati Bc5154.2",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210309/7/70074643/150576442/1/1_org.jpg",
    price: "232,76 TL",
    firm: "POLO Rucci",
    name: "Erkek Kol Saati Ve Cüzdan Kartlık Kemer Anahtarlık Bileklik Kombini",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/20/52294776/16256717/1/1_org.jpg",
    price: "540 TL",
    firm: "Pierre Cardin",
    name: "800011f102 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/18/80128191/15478591/1/1_org.jpg",
    price: "249 TL",
    firm: "Casio",
    name: "W-218h-4b2vdf Dijital Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210128/10/57911892/13614068/1/1_org.jpg",
    price: "193,74 TL",
    firm: "Casio",
    name: "Retro Erkek Kol Saati F-91WM-3ADF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210403/22/72ad2c03/21040135/1/1_org.jpg",
    price: "270 TL",
    firm: "Wesse",
    name: "Erkek Kol Saati WWG203802",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200512/19/1186190/56754923/1/1_org.jpg",
    price: "164,59 TL",
    firm: "Skmei",
    name: "Erkek Kol Saati 1370BKWT",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210210/1/61622182/139654412/1/1_org.jpg",
    price: "69,99 TL",
    firm: "POLO Rucci",
    name: "2211 Takvimli Metal Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210319/17/73694602/155225340/0/0_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Hasır Unisex Kol Saati Apwa065100",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201012/13/15282154/92410068/0/0_org.jpg",
    price: "1.228,50 TL",
    firm: "Fossil",
    name: "Ffs4552ıe Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210420/4/81440888/95693102/1/1_org.jpg",
    price: "111 TL",
    firm: "Spectrum",
    name:
      "Çift Saatleri Sevgiliye Hediye Saat Kombini Erkek Bayan Sevgili Saatleri Sonsuzluk Temalı Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201009/14/14490089/91278773/1/1_org.jpg",
    price: "69,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Ozel Sport Collection Unisex Kol Saati Apws008101",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/16/80678222/164509425/1/1_org.jpg",
    price: "485,99 TL",
    firm: "Daniel Klein",
    name: "Füme Çelik Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201224/10/41406834/122371119/1/1_org.jpg",
    price: "373 TL",
    firm: "Ferrucci",
    name: "Erkek Altın Rengi Takvimli Çelik Kol Saati 178052",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200917/15/10985397/87094127/1/1_org.jpg",
    price: "68,56 TL",
    firm: "Spectrum",
    name: "Unisex Mavi Dokunmatik Kol Saati Xt250258",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/22/9041750/83204538/0/0_org.jpg",
    price: "159,80 TL",
    firm: "Polo55",
    name: "Dijital Göstergeli Kadran Silikon Kordon",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200713/19/4379203/9676175/1/1_org.jpg",
    price: "375 TL",
    firm: "Casio",
    name: "Erkek Kol Saati CAS.AE-1200WHD-1AVDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210315/14/71244572/9513024/1/1_org.jpg",
    price: "638 TL",
    firm: "Swatch",
    name: "Unisex Kol Saati SUOB702",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/21/52308112/14718125/1/1_org.jpg",
    price: "2.349,99 TL",
    firm: "Seiko",
    name: "Se-ssb315p Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210402/18/717602d9/15062820/1/1_org.jpg",
    price: "122,33 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APL2C8153H01",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210226/10/67105710/146434846/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati +Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/19/2763d343/59366514/1/1_org.jpg",
    price: "59,90 TL",
    firm: "CALVEN",
    name: "C7272S-ES-03 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210304/17/68738874/148586174/0/0_org.jpg",
    price: "99,90 TL",
    firm: "Luis Polo",
    name: "Dt1111a-emh-led-kmb-01 Erkek Saat Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/14/80075772/115752672/1/1_org.jpg",
    price: "1.362 TL",
    firm: "Raymond",
    name: "Erkek Gümüş Siyah Swıss Iskelet Otomatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210401/20/77096528/75600609/1/1_org.jpg",
    price: "488,99 TL",
    firm: "Toms Watch",
    name: "Tm1542a-908-t Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/3/77360136/160112984/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Kadın Altın Dijital Metal Kol Saati Apwn038303",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210303/10/68199676/106989545/1/1_org.jpg",
    price: "425 TL",
    firm: "Daniel Klein",
    name: "Dk102-011773c Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20201221/12/40409771/121330174/1/1_org.jpg",
    price: "385,70 TL",
    firm: "Homies",
    name: "Erkek Siyah Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/01/a3a47574/18469064/1/1_org.jpg",
    price: "649 TL",
    firm: "Up! Watch",
    name: "UPWATCH XT GOLD Dokunmatik Unisex KOL SAATİ",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200905/0/9754188/84663362/0/0_org.jpg",
    price: "762 TL",
    firm: "Skagen",
    name: "Skw6654 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201010/10/14815891/91286365/1/1_org.jpg",
    price: "89,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Deri Kol Saati Apws008404",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/14/79775924/9418694/1/1_org.jpg",
    price: "286,25 TL",
    firm: "Casio",
    name: "Casıo Ae-1000w-4bvdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201012/13/15282341/92410433/0/0_org.jpg",
    price: "813,75 TL",
    firm: "Fossil",
    name: "Fbq2520 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210205/22/60329139/18469049/1/1_org.jpg",
    price: "599 TL",
    firm: "Up! Watch",
    name: "Edge Shıny Rose Gold +",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210311/8/70524952/71621617/1/1_org.jpg",
    price: "59 TL",
    firm: "Keskin",
    name: "Kabartmalı Atatürk Desenli Köstekli Cep Saati Klasik Kemer Zincirli",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210226/13/67150876/146478437/1/1_org.jpg",
    price: "200,07 TL",
    firm: "Polo Air",
    name:
      "Erkek Set Kol Saati +Kemer+ Cüzdan +Kartlık +Tesbih +Anahtarlık Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210215/13/62671358/140853048/1/1_org.jpg",
    price: "461,52 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati Ve Bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/16/80324674/89844801/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Rose Gold Mıknatıslı Dokunmatik Kol Saati Xt250129",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/17/d83626b7/21223367/1/1_org.jpg",
    price: "44,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A5371-UD633",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20210102/13/44459670/125810577/1/1_org.jpg",
    price: "226,43 TL",
    firm: "istliv",
    name: "Mıknatıslı Kordon Led Kol Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210315/14/71245128/62062575/1/1_org.jpg",
    price: "89 TL",
    firm: "Spectrum",
    name: "Unisex Siyah Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210125/11/56919614/133979024/0/0_org.jpg",
    price: "89,11 TL",
    firm: "Aqua Di Polo 1987",
    name: "Apws008407 Deri Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210403/20/c82ca605/10230711/1/1_org.jpg",
    price: "194 TL",
    firm: "Q&Q",
    name: "Unisex Kol Saati 3G1840",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210107/16/48203150/77772147/1/1_org.jpg",
    price: "116,50 TL",
    firm: "Duke Nickle",
    name: "Erkek Siyah Kol Saati Deg8c1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200601/11/2048656/62666834/1/1_org.jpg",
    price: "71,41 TL",
    firm: "Gold Time",
    name: "Gold Renk Mıknatıslı Kordon Sarı Kasa Renkli Cam Unisex Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210211/9/62003405/59618316/1/1_org.jpg",
    price: "230 TL",
    firm: "Casio",
    name: "Mtp-v004l-1budf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/20/68040017/147419252/1/1_org.jpg",
    price: "230,82 TL",
    firm: "Polo Air",
    name:
      "Erkek Kol Saati Kemer Cüzdan Kartlık Çakmak Erkek Set Kombin Hediyelik Kutusunda Pl-0462e1",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/02/6eff0d1f/56225121/1/1_org.jpg",
    price: "109,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Aqua Di Polo  Hasır Kol Saati APSV1-A6475-EH444",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210319/11/73479128/11794410/1/1_org.jpg",
    price: "248,75 TL",
    firm: "Casio",
    name: "Erkek Gri Kol Saati Mtp-v002l-1budf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210310/10/70399571/13256004/1/1_org.jpg",
    price: "728 TL",
    firm: "Casio",
    name: "G-shock Ga-700se-1a2dr Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/10/70397820/13257635/1/1_org.jpg",
    price: "470 TL",
    firm: "Casio",
    name: "Mtp-vd01g-1b",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/22/52360446/5085987/1/1_org.jpg",
    price: "398,82 TL",
    firm: "Casio",
    name: "Ae-1200whb-3bvdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20210317/1/72862701/83512815/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Gold Hasır Mıknatıslı Kordonlu Dokunmatik Ekranlı Kadın Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/19/52270137/9676122/1/1_org.jpg",
    price: "1.000 TL",
    firm: "Casio",
    name: "G-Shock Erkek Kol Saati GA-400HR-1ADR",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/13/81314993/165305101/1/1_org.jpg",
    price: "571,28 TL",
    firm: "Homies",
    name: "Erkek Lacivert Chronograph Multifonksiyon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210402/23/776a1c50/20038177/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A3551-UH171",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210316/14/72106098/153123870/0/0_org.jpg",
    price: "238,78 TL",
    firm: "Polo Air",
    name:
      "Erkek Kol Saati Kemer Cüzdan Kartlık Çakmak Erkek Set Kombin Hediyelik Kutusunda",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210217/1/63545046/137910786/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Rower",
    name: "Mopia Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/21/52323959/17539887/1/1_org.jpg",
    price: "888 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFR-S565D-1AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/21/52343145/8309635/1/1_org.jpg",
    price: "659 TL",
    firm: "Casio",
    name: "G-Shock Erkek Kol Saati GA-110DC-2ADR",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210227/21/67456716/146811373/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Sarı Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty8/product/media/images/20200729/16/6325769/21047954/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Duke Nickle",
    name: "Erkek Kol Saati VEG27005A",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210111/20/51091434/128657912/1/1_org.jpg",
    price: "106,58 TL",
    firm: "Spectrum",
    name: "Bay&Kadın Çelik Renkli Ekran Mıknatıslı Hasır Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/6/51466156/119719785/1/1_org.jpg",
    price: "204,78 TL",
    firm: "Gold Time",
    name:
      "Siyah Kordon Erkek Siyah - Kadın Sarı Kasa Dokunmatik Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210304/8/68566902/89051856/1/1_org.jpg",
    price: "145 TL",
    firm: "Spectrum",
    name: "Dijital Erkek Kol Saati Çakmak Tesbih Bileklik Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201010/12/14846620/91278732/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Lacivert Kol Saati Apws008008",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210218/22/65073082/143406303/1/1_org.jpg",
    price: "229,87 TL",
    firm: "Polo Air",
    name: "Erkek Siyah Kol Saati Kemer Cüzdan Kartlık Çakmak Set Kombin",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210201/19/59158798/136782904/1/1_org.jpg",
    price: "942 TL",
    firm: "Guess",
    name: "Gugw0207g2 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/20/79875404/11739620/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Casio",
    name: "Casıo B650wb-1bdf Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/21/52323150/3505939/1/1_org.jpg",
    price: "268,75 TL",
    firm: "Casio",
    name: "Ae-1000w-1bvdf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/12/69711431/20910569/1/1_org.jpg",
    price: "609,38 TL",
    firm: "Casio",
    name: "Erkek Kol Saati Mtp-1374d-2avdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210216/15/63334415/8707298/1/1_org.jpg",
    price: "243,82 TL",
    firm: "Casio",
    name: "Casıo Ae-1000w-2avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/09/973eff29/61421847/1/1_org.jpg",
    price: "126 TL",
    firm: "PARİGİ",
    name: "Erkek Kol Saati PRG4002-01",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210316/15/72124401/120555754/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Spectrum",
    name:
      "Çift Kol Saati Siyah Hasır Çelik Kordon Renkli Cam Kadın Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/05/95899c5d/60841613/1/1_org.jpg",
    price: "90 TL",
    firm: "Twelve",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/19/69891113/9418692/1/1_org.jpg",
    price: "176,25 TL",
    firm: "Casio",
    name: "Cas-mw2401bvdf Standart Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/23/52391364/89697998/1/1_org.jpg",
    price: "89,89 TL",
    firm: "Kingboss",
    name:
      "M5 Akıllı Bileklik, Ateş Ölçer, Adım Sayar,smart,nabız Ölçer, Android Ve Ios Bağlantılı Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20210401/16/77025922/17612019/1/1_org.jpg",
    price: "638 TL",
    firm: "Swatch",
    name: "Suok712 Kadın Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/12/aafaf2d5/65246022/1/1_org.jpg",
    price: "95,43 TL",
    firm: "Vegans",
    name:
      "Orijinal Dijital Erkek Kol Saati Spor Işıklı Su Geçirmez Tüm Fonksiyonları Aktif",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20201103/9/21601397/99882929/0/0_org.jpg",
    price: "153 TL",
    firm: "Frank Martin",
    name: "Erkek Saat Cüzdan Kemer Hediye Seti 385005",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/23/52383723/21507044/1/1_org.jpg",
    price: "385 TL",
    firm: "Casio",
    name: "Retro Erkek Kol Saati A700WM-7ADF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210226/10/67107870/146436634/1/1_org.jpg",
    price: "580 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200429/13/393373/62359864/1/1_org.jpg",
    price: "349 TL",
    firm: "Ferrucci",
    name: "FC-G10794H.03 Unisex Dokunmatik Kol Saati Hasır Kordon",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/13/6a9ef3ba/58306837/1/1_org.jpg",
    price: "107,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSR1-A9912-EM333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/9/51905121/99541897/1/1_org.jpg",
    price: "128,65 TL",
    firm: "SPEKTRUM BAİTS",
    name: "Bay & Bayan Çelik Renkli Ekran Model Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210306/17/69386095/115710117/1/1_org.jpg",
    price: "323,13 TL",
    firm: "Daniel Klein",
    name: "8680161838302 Dk010837j Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210211/4/61984840/59618314/1/1_org.jpg",
    price: "649 TL",
    firm: "Casio",
    name: "Erkek Kol Saati Mtp-1374d-1a2vdf",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/22/52351568/8467057/1/1_org.jpg",
    price: "194 TL",
    firm: "Q&Q",
    name: "3a2068 Kadın Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210202/2/59210847/19711924/1/1_org.jpg",
    price: "145 TL",
    firm: "SMAEL",
    name: "Erkek Kol Saati 1545",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210312/9/70833521/12620914/1/1_org.jpg",
    price: "104,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APL1C466102",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210405/17/23ddb81b/62773276/1/1_org.jpg",
    price: "127,88 TL",
    firm: "PARİGİ",
    name: "Prg4003-06 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210215/22/62985492/57195245/1/1_org.jpg",
    price: "164 TL",
    firm: "Quamer",
    name: "Erkek Kol Saati QT07",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201009/15/14497010/88727818/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Rose Gold Kol Saati Apwa037702",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210125/14/56991967/13254941/1/1_org.jpg",
    price: "299,99 TL",
    firm: "Casio",
    name: "Mtp-v005d-1budf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/10/fb196861/10734971/1/1_org.jpg",
    price: "1.494 TL",
    firm: "Emporio Armani",
    name: "Erkek Kol Saati AR11097",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210120/13/55474788/132263211/1/1_org.jpg",
    price: "139 TL",
    firm: "istliv",
    name: "Erkek &Kadın Su Geçirmez Dokunmatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210402/20/41ed8f96/11790942/1/1_org.jpg",
    price: "1.310 TL",
    firm: "Welder",
    name: "Erkek Kol Saati WWRC307",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20201020/22/17723816/95673591/0/0_org.jpg",
    price: "18,50 TL",
    firm: "i-Stone",
    name: "Apple Elma Şeklinde Dijital Led Bileklik Kol Saati - Siyah",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210121/10/55717719/132525411/0/0_org.jpg",
    price: "623,75 TL",
    firm: "Hislon",
    name: "3574-12511 Safir Camlı Takvimli Ince Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201221/15/40464467/121404533/1/1_org.jpg",
    price: "128 TL",
    firm: "Spectrum",
    name: "Kadın Dokunmatik Led Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20201006/17/13785267/91037485/0/0_org.jpg",
    price: "679 TL",
    firm: "Ferrucci",
    name: "Erkek Kol Saati For Motion 11729sm.05 Fonksiyonlu",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210121/16/55866145/13254928/1/1_org.jpg",
    price: "407 TL",
    firm: "Casio",
    name: "Mtp-vd01l-1bvudf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210406/1/78016436/84167624/1/1_org.jpg",
    price: "67 TL",
    firm: "Spectrum",
    name: "Rainbow Unisex Kol Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210211/1/61972816/21507064/1/1_org.jpg",
    price: "379,90 TL",
    firm: "Casio",
    name: "G-shock Hdc-700-3a3vdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/19/d8c2ea67/63059456/1/1_org_zoom.jpeg",
    price: "74,90 TL",
    firm: "Luis Polo",
    name: "Erkek Kol Saati P1100-EK-07",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210217/9/63742977/141919756/0/0_org.jpg",
    price: "89,90 TL",
    firm: "Luis Polo",
    name: "Dt1063h-eh-led-05 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201206/18/35425057/116309881/0/0_org.jpg",
    price: "63,99 TL",
    firm: "Choppers",
    name: "Erkek Kol Saati Bileklik Hediyeli",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/20/91dbb849/59691352/1/1_org.jpg",
    price: "186 TL",
    firm: "PARİGİ",
    name: "Unisex Kol Saati PRG4003-02",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/21/52323739/18469057/1/1_org.jpg",
    price: "249 TL",
    firm: "Up! Watch",
    name: "Upwatch Led Gold/black Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201012/13/15282168/92410103/0/0_org.jpg",
    price: "1.226,25 TL",
    firm: "Fossil",
    name: "Fbq2533 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/13/f1f446a8/58306965/1/1_org.jpg",
    price: "124,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSR1-S0030-EM333",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210402/13/3c66b1fa/16282695/1/1_org.jpg",
    price: "237,48 TL",
    firm: "Reebok",
    name: "Unisex Siyah Kol Saati RD-ELE-G9-PAIA-BG",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/14/69777104/150081635/1/1_org.jpg",
    price: "98,49 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati Apwa061304 Metal",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210315/13/71227608/13578295/1/1_org.jpg",
    price: "638 TL",
    firm: "Swatch",
    name: "Unisex Kol Saati D 60 1 SUOB704",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210402/23/2720c598/13976500/1/1_org.jpg",
    price: "1.228 TL",
    firm: "Casio",
    name: "G-Shock Erkek Kol Saati GBA-800-4ADR",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210408/14/78709191/92041422/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Digital Saat Roz Ss1069r",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210310/11/70404916/151028956/0/0_org.jpg",
    price: "97,64 TL",
    firm: "Aqua Di Polo 1987",
    name: "Metal Erkek Kol Saati Apwa061605",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/13/7c8526d8/58360323/1/1_org_zoom.jpeg",
    price: "622,35 TL",
    firm: "Timberland",
    name: "Erkek Kol Saati TBL.15905JYS/61A",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/22/49248641/75912068/1/1_org.jpg",
    price: "83 TL",
    firm: "Twelve",
    name: "Erkek Kol Saati / All Enjoy Series",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/21/52336664/8416202/1/1_org.jpg",
    price: "737,10 TL",
    firm: "Casio",
    name: "Mtp-1374l-7a1vdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/20/6b82e2dc/59755317/1/1_org.jpg",
    price: "124,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A9500-UC222",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210227/7/67312066/146653465/0/0_org.jpg",
    price: "149 TL",
    firm: "Ricardo",
    name: "Dijital Erkek Kol Saati Çakmak Tesbih Bileklik Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/15/128f4729/62381826/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028304 Deri Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210128/10/57896302/16133729/1/1_org.jpg",
    price: "1.035 TL",
    firm: "Lacoste",
    name: "Unisex Beyaz Kol Saati 2010984",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/9/80546213/164309626/1/1_org.jpg",
    price: "499 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210225/10/66809508/87150480/1/1_org.jpg",
    price: "123,90 TL",
    firm: "Joefox",
    name: "Spor Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200905/0/9754185/84663360/0/0_org.jpg",
    price: "954 TL",
    firm: "Armani Exchange",
    name: "Ax2705 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/16/6acb9ba1/13254926/1/1_org.jpg",
    price: "949,99 TL",
    firm: "Casio",
    name: "Edifice Erkek Kol Saati EFV-550L-1AVUDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/04/04dee477/8702459/1/1_org.jpg",
    price: "211,65 TL",
    firm: "Ferrucci",
    name: "FRK1214 Erkek Takvimli Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210131/22/58883679/100449612/1/1_org.jpg",
    price: "128,65 TL",
    firm: "SPEKTRUM BAİTS",
    name: "Bay&bayan Çelik Dijital Led Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210419/16/81365255/9925650/1/1_org.jpg",
    price: "335,28 TL",
    firm: "Casio",
    name: "Cas-mtp1302d7bvdf Standart Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/17/80339308/65212419/1/1_org.jpg",
    price: "98 TL",
    firm: "Spectrum",
    name:
      "Silver Gümüş Renk Dijital Led Watch Çelik Kordonlu Detay Kasa Kol Saati St-303425",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210402/16/01462c56/13511859/1/1_org.jpg",
    price: "1.662,49 TL",
    firm: "Seiko",
    name: "Erkek Kol Saati D 80 1 SKS611P",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210316/16/72201613/11794525/1/1_org.jpg",
    price: "655 TL",
    firm: "Swatch",
    name: "Unisex Siyah Kol Saati SUOB708B",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201116/3/26669460/106416197/0/0_org.jpg",
    price: "357 TL",
    firm: "Daniel Klein",
    name: "Dtime Unisex Kol Saati+bileklik Hediye",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210120/2/55345410/132117976/0/0_org.jpg",
    price: "129,90 TL",
    firm: "Ricardo",
    name:
      '" Çift Saat"/ " Sevgili Saatleri " Klips Kordon, Sevgili Kol Saatleri',
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210402/13/4199bd34/9422655/1/1_org.jpg",
    price: "1.962 TL",
    firm: "Armani Exchange",
    name: "Erkek Kol Saati AX2104",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20210328/19/75793574/158171507/0/0_org.jpg",
    price: "108,31 TL",
    firm: "Tulpar",
    name: "Özel Kutusunda Slikon Kordon Dokunmatik Dijital Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210126/17/57424924/134528558/1/1_org.jpg",
    price: "116,65 TL",
    firm: "Michael West",
    name: "M1303-007 Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201022/2/18869405/96483799/0/0_org.jpg",
    price: "349 TL",
    firm: "COMMES",
    name: "Otomatik Çelik Kasa, Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/15/8510c0e5/62381772/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028402 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20210317/13/73029384/154225565/1/1_org.jpg",
    price: "507,54 TL",
    firm: "Ferrucci",
    name: "Erkek Gümüş Yuvarlak Kol Saati Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/06/5781db9b/2272241/1/1_org.jpg",
    price: "364,59 TL",
    firm: "Casio",
    name: "Digital Erkek Kol Saati AE-1200WH-1BVDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/11/5cc3be9b/16282708/1/1_org.jpg",
    price: "239,06 TL",
    firm: "Reebok",
    name: "Unisex Bordo  Kol Saati RD-ELE-G9-PBIR-BR",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201202/9/34310242/115089612/0/0_org.jpg",
    price: "1.174,20 TL",
    firm: "Tommy Hilfiger",
    name: "Th1791799 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/12/81277546/165230096/1/1_org.jpg",
    price: "528,43 TL",
    firm: "Homies",
    name: "Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/06/59d5a5b5/60978305/1/1_org.jpg",
    price: "94,90 TL",
    firm: "Luis Polo",
    name: "B1-LED-03 Dijital Led Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/21/81419452/12132138/1/1_org.jpg",
    price: "265,73 TL",
    firm: "Casio",
    name: "Mtp-v002d-7budf Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/23/79648149/159803919/1/1_org.jpg",
    price: "200 TL",
    firm: "metelite",
    name:
      "Sevgili Saati 2 Adet 5 Atm Su Geçirmez Unisex Dokunmatik Led Dijital Silikon Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210215/11/62646684/7372763/1/1_org.jpg",
    price: "285 TL",
    firm: "Casio",
    name: "Cas-mtp1314l7avdf Standart Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/19/52251830/9201081/1/1_org.jpg",
    price: "941,06 TL",
    firm: "Casio",
    name: "G-Shock Erkek Kol Saati GD-350-1BDR",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210405/15/7baea5f9/62381768/1/1_org.jpg",
    price: "114,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028800 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20210401/20/77089286/12251530/1/1_org.jpg",
    price: "299 TL",
    firm: "Daniel Klein",
    name: "Erkek Kol Saati 8680161202905",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210218/15/64956464/143410072/0/0_org.jpg",
    price: "449 TL",
    firm: "Daniel Klein",
    name: "Dk013213l-01 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210119/21/55306243/68376831/1/1_org.jpg",
    price: "119,90 TL",
    firm: "Skmei",
    name:
      "1155b Erkek Kol Saati Digital - Analog Ekran Silikon Kordon Su Geçirmez",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20201017/0/16576017/94210426/0/0_org.jpg",
    price: "119,99 TL",
    firm: "Royal Club De Polo Barcelona",
    name: "Rpwt004809 Hasır Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200515/20/1346923/57592555/2/2_org.jpg",
    price: "106,52 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Kol Saati APSV1-A8957-UD352",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210111/10/50815593/128505377/1/1_org.jpg",
    price: "109 TL",
    firm: "Spectrum",
    name: "Unisex Çelik Renkli Ekran Mıknatıslı Hasır Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210304/14/68695607/148517959/1/1_org.jpg",
    price: "190,52 TL",
    firm: "Polo Air",
    name: "Erkek Kol Saati Ve Parfüm Seti Hediyelik Kutusunda Kombin",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/10/80238435/163943573/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Siyah Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20210319/17/73693734/155225999/0/0_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Deri Kadın Kol Saati Apwa065000",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210227/16/67386630/146746577/0/0_org.jpg",
    price: "150 TL",
    firm: "Ricardo",
    name: "Dijital Unisex Kol Saati Çakmak Tesbih Bileklik Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/10/8de46a7a/57592537/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Erkek Kol Saati APSV1-A8801-EH152",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20210322/12/74287828/155981085/1/1_org.jpg",
    price: "119 TL",
    firm: "Choppers",
    name: "Metal Kordon Erkek Kol Saati Bileklik Hediyeli",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210414/17/80118937/59661189/1/1_org.jpg",
    price: "1.589 TL",
    firm: "Casio",
    name: "G-Shock Erkek Kol Saati GA-2100-1A1DR",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210215/11/62631366/140819087/1/1_org.jpg",
    price: "349 TL",
    firm: "Ferrucci",
    name: "Erkek Gümüş Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210208/12/60996877/7273563/1/1_org.jpg",
    price: "470,47 TL",
    firm: "Casio",
    name: "Mtp-1375l-7avdf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210214/5/62114557/94391809/1/1_org.jpg",
    price: "146 TL",
    firm: "SMAEL",
    name: "Erkek Analog Digital Yeşil Kordon Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200930/17/12706625/57699738/1/1_org.jpg",
    price: "189,99 TL",
    firm: "Daniel Klein",
    name: "DW-019MİNİ-05 Akıllı Saat",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201125/18/32520429/112933744/1/1_org.jpg",
    price: "117,53 TL",
    firm: "Duke Nickle",
    name: "2pveh28019d Saat Ve Parfüm Seti",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/16/45e1fbbc/20951060/1/1_org_zoom.jpeg",
    price: "247,50 TL",
    firm: "Casio",
    name: "Erkek Kol Saati MTP-V005GL-1B2UDF",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20201104/4/21983331/100407068/0/0_org.jpg",
    price: "79,90 TL",
    firm: "Luis Polo",
    name: "P1156a-emh-05 Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/15/70db82d6/62381817/1/1_org.jpg",
    price: "49,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028704 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/10/80238974/163944695/1/1_org.jpg",
    price: "499,99 TL",
    firm: "Daniel Klein",
    name: "Erkek Lacivert Kol Saati ve Bileklik",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210219/22/65348357/143973175/1/1_org.jpg",
    price: "399 TL",
    firm: "Ferrucci",
    name: "Erkek Siyah Kol Saati ve  Bileklik 168947",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210112/20/52285186/5652315/1/1_org.jpg",
    price: "246,94 TL",
    firm: "Q&Q",
    name: "3G391 Erkek  Gri Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/16/80327503/62062542/1/1_org.jpg",
    price: "65 TL",
    firm: "Spectrum",
    name: "Unisex Mıknatıslı Dokunmatik Kol Saati Xt250130",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/11/41ff0561/16483690/1/1_org.jpg",
    price: "109,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Unisex Siyah İşlevsel Mekanizmalı Kol Saati,  Apl98b1285m29",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201228/14/42980490/124213107/1/1_org.jpg",
    price: "288 TL",
    firm: "Ferrucci",
    name:
      "Erkek Gümüş Renk Chocolate Gold Kasa Spor Metal Kordon  Kol Saati + Bileklik Hediyeli",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210125/2/56833265/133885068/0/0_org.jpg",
    price: "249,98 TL",
    firm: "Tulpar",
    name:
      "Özel Kutusunda Çift Kol Saati Mıknatıslı Kordon Dijital Sevgili Saatleri",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/15/5862003c/62381767/1/1_org.jpg",
    price: "79,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "APWA028802 Deri Unisex Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210211/8/61997287/9217499/1/1_org.jpg",
    price: "1.000 TL",
    firm: "Casio",
    name: "Efr-552gl-2avudf Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/14/80075870/119629625/1/1_org.jpg",
    price: "1.361 TL",
    firm: "Raymond",
    name: "Erkek Kahverengi Otomatik Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210202/14/59347657/9217493/1/1_org.jpg",
    price: "839 TL",
    firm: "Casio",
    name: "G-shock Ga-700-1bdr Erkek Kol Saati",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/15/db9d65b0/58790491/1/1_org.jpg",
    price: "299 TL",
    firm: "Timberland",
    name: "Erkek Kol Saati TBL.15079JYS/01",
  },
  {
    category: "saat",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/3/77360051/160112939/0/0_org.jpg",
    price: "99,99 TL",
    firm: "Aqua Di Polo 1987",
    name: "Kadın Altın Dijital Metal Kol Saati Apwn038302",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty8/product/media/images/20200723/8/5698702/78083587/1/1_org_zoom.jpeg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Çizgili Baget Taşlı Yüzük 20",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201224/8/41357602/97554145/1/1_org.jpg",
    price: "44,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pırlanta Montürlü Tek Taş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34377468/18659317/1/1_org.jpg",
    price: "357,28 TL",
    firm: "Söğütlü Silver",
    name: "Italyan Yassı Zincir Yaldızlı Sarı Gümüş Kolye45 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200828/18/9029579/57208928/1/1_org.jpg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Kar Tanesi Kolye 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210318/13/73355510/154706855/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Sortie Aksesuar",
    name: "Mavi Boncuklu 4'lü Kombin Bileklik 004",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/9/51958116/74793109/1/1_org.jpg",
    price: "379,52 TL",
    firm: "Sümer Telkari",
    name: "Dorissa Altın Yaldızlı Gümüş Bilezik 3326",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210316/18/72282524/153357088/0/0_org.jpg",
    price: "84,99 TL",
    firm: "Sümela Silver",
    name: "1000 Ayar Kazaziye Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/11/075c5a71/16737882/1/1_org.jpg",
    price: "123,18 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Rengi Tek Sıra Zirkon Taşlı Tamtur Gümüş Yüzük SGTL8766",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/15/9022324/59254003/1/1_org_zoom.jpeg",
    price: "151,64 TL",
    firm: "Elika Silver",
    name: "Kadın Melek Model Zirkon Taşlı 925 Ayar Gümüş Kolye PP2347",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/9/68810078/71571576/1/1_org_zoom.jpeg",
    price: "130 TL",
    firm: "İzla Design",
    name: "Papatya Model Rodyum Kaplama Gümüş Italyan Muhteşem Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/11/52027820/56022429/1/1_org.jpg",
    price: "57,86 TL",
    firm: "Papatya Silver",
    name: "Gümüş His Taşı Kolye. 925 Ayar Gümüş Zincir Kolye En Ucuz Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/13/52088998/97554126/1/1_org.jpg",
    price: "503,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Baget Taşlı Üçlü Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210126/13/57319287/134413323/1/1_org.jpg",
    price: "59,92 TL",
    firm: "TAKIŞTIR",
    name: "Kadın Gümüş El Figürlü Ayarlanabilir Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38436597/110860977/1/1_org.jpg",
    price: "78 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Üçlü Balıklar Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34377979/20020991/1/1_org.jpg",
    price: "89,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 17 Mm Turkuaz Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/13/80285020/75306795/1/1_org.jpg",
    price: "10,99 TL",
    firm: "Mathilda Aksesuar",
    name: "Kadın Gold Italyan Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34378881/18037009/1/1_org.jpg",
    price: "145,58 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı J Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210318/15/73384381/85713974/1/1_org.jpg",
    price: "14,90 TL",
    firm: "MagicStone",
    name: "Kadın Altın Dörtlü Kombin Zincir Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200703/21/3801011/75856588/0/0_org.jpg",
    price: "140 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Rose Altın Kaplama Zirkon Taşlı Yıldız Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379315/67090135/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kutup Yıldızı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210401/23/77113787/125024201/1/1_org.jpg",
    price: "84,99 TL",
    firm: "Yıldız Gold İmitasyon",
    name: "22 Ayar Altın Kaplama 10 Lu Set Adana Burma",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210104/9/45440982/67090154/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Gökkuşağı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/0/49535843/57735426/1/1_org.jpg",
    price: "79,29 TL",
    firm: "Papatya Silver",
    name:
      "Harf Kolye. Üç Boyutlu M Harfi. Rose Altın Kaplama 925 Ayar Gümüş. Uvps100111",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200828/15/9022324/59254029/1/1_org_zoom.jpeg",
    price: "151,64 TL",
    firm: "Elika Silver",
    name: "Kadın Gezegen Model Zirkon Taşlı Rose Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210417/16/80867441/125857562/1/1_org.jpg",
    price: "10,82 TL",
    firm: "Harlofia Jewelry",
    name: "Altın Kaplama Sevgi Yüzüğü",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210311/12/70648677/81512520/1/1_org.jpg",
    price: "14,40 TL",
    firm: "BUNNY",
    name: "Kadın Altın Vintage Burgu Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34395573/63827266/1/1_org.jpg",
    price: "135,50 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 14 Mm Rodyumlu Zirkon Taşlı Tamtur Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38430427/64105021/1/1_org.jpg",
    price: "101,14 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın 15 Adet Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/4/77609375/160432370/0/0_org.jpg",
    price: "25 TL",
    firm: "MagicStone",
    name: "Kadın Üçlü Zincir Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20201222/22/40935839/121903623/1/1_org.jpg",
    price: "23,13 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Gold Katlı Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/6/51507809/89409970/1/1_org.jpg",
    price: "42,77 TL",
    firm: "Bess Silver",
    name: "925 Ayar Gümüş Taşlı Halka Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379517/63006057/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Baget Taşlı Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/02/918f0d4f/56022444/1/1_org_zoom.jpeg",
    price: "77,14 TL",
    firm: "Papatya Silver",
    name:
      "Melek Rose Altın Kaplama Siyah Nano Zirkon Taşlı 925 Ayar Gümüş Kolye UVPS100059",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210325/1/75074858/20037622/1/1_org.jpg",
    price: "9.133,40 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "20 Gr (gram) Üçlü Adana Burma 22 Ayar Altın Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/01/14098c99/22174544/1/1_org_zoom.jpeg",
    price: "130 TL",
    firm: "İzla Design",
    name:
      "Kadın Kelebek Model Rose Kaplama Zirkon Taşlı Gümüş Kolye İZLASLVR00464",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201210/10/37021252/118028137/1/1_org.jpg",
    price: "3.949,90 TL",
    firm: "Güleryüz Altın & Pırlanta",
    name: "Hediyelik Bilezik 8,65 Gr. Simli Şarnel Model 14 Ayar Altın",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200930/13/12634020/58909729/1/1_org.jpg",
    price: "4.592,50 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "10 gr (gram) 22 Ayar Ajda Model İşçiliksiz Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210402/16/9205a0f2/12054312/1/1_org.jpg",
    price: "57,66 TL",
    firm: "Söğütlü Silver",
    name: "Kadın 925 Ayar Gümüş Mini Rodyumlu Halka Küpe SGTL7310",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201121/11/29810305/20036996/1/1_org.jpg",
    price: "4.592,50 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "10 Gr (gram) 22 Ayar Işçiliksiz Paftalı Burma Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/15/9022324/58546262/1/1_org_zoom.jpeg",
    price: "151,64 TL",
    firm: "Elika Silver",
    name:
      "Renkli Taşlı Gezegen Model Rose Altın Kaplama 925 Ayar GümüşKadın Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/6/46341548/63931098/1/1_org.jpg",
    price: "77,14 TL",
    firm: "Papatya Silver",
    name: "Siyah Nano Zirkon Taşlı 925 Ayar Kayan Yıldızlar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20201231/10/43905395/57735212/1/1_org.jpg",
    price: "120 TL",
    firm: "Papatya Silver",
    name:
      "Üç Papatya Süzme Bileklik - Sarı Nano Zirkon Taşlı Mineli Rose Altın Kaplama 925 Ayar Gümüş",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/07/b18aa681/61215997/1/1_org.jpg",
    price: "67,50 TL",
    firm: "Papatya Silver",
    name: "Renk Değiştiren Doğal Taşlı His Taşı Gümüş Kalp Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/0/49591806/81611765/1/1_org.jpg",
    price: "98,57 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Zirkon Taşlı Gümüş Melek Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210402/13/629c993f/12053983/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Yonca Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200813/16/7990313/79812439/1/1_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "Kadın Sarı 9'Lu Suni İnci Boncuklu Top Ve Halka Küpe Seti 03008005",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/14/78440457/84198887/1/1_org.jpg",
    price: "9,90 TL",
    firm: "The Y Jewelry",
    name: "Kadın Sarı Tiffany Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/10/78099122/69400054/1/1_org.jpg",
    price: "13,65 TL",
    firm: "Bin1Gecem Takı",
    name: "Kadın Zirkon Taşlı Paslanmaz Çelik Cartier Bileklik Bilezik 18 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379514/20382259/1/1_org.jpg",
    price: "108,07 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose 14 Mm Mini Burgu Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34379460/20382273/1/1_org.jpg",
    price: "89,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 17 Mm Turkuaz Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/22/d7374b14/66635729/1/1_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "Kadın Sarı Halka Ve Suni Inci Boncuklu Küpe Paketi 03051005",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200331/14/796039/67158491/1/1_org_zoom.jpeg",
    price: "142 TL",
    firm: "İzla Design",
    name:
      "Kadın Anne ve Çocuk Model Rose Kaplama Gümüş İtalyan Kolye PKT-TLYSLVR0815",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210403/01/3481aa78/12054255/1/1_org.jpg",
    price: "149 TL",
    firm: "Söğütlü Silver",
    name:
      "Kadın 925 Ayar Gümüş Turkuaz Taşlı Mineli Top Top Zincirli Kolye SGTL7308",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/02/d64021f9/56022465/1/1_org_zoom.jpeg",
    price: "98,57 TL",
    firm: "Papatya Silver",
    name:
      "Kadın Gold Rose Balonlu Kız Renkli Nano Taşlı  Altın Kaplama 925 Ayar Gümüş Kolye UVPS100063",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/15/9022324/59253982/1/1_org_zoom.jpeg",
    price: "151,64 TL",
    firm: "Elika Silver",
    name: "Kadın Melek Model Zirkon Taşlı 925 Ayar Gümüş Kolye PP2346",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210120/11/55427506/109180134/1/1_org.jpg",
    price: "71,14 TL",
    firm: "Elika Silver",
    name: "Kadın 14k Rose Altın Kaplama Zirkon Taşlı Kar Tanesi Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/04/5130123d/56867996/1/1_org_zoom.jpeg",
    price: "87 TL",
    firm: "İzla Design",
    name: "Kadın Tek Taş Model Zirkon Taşlı Gümüş Küpe PKT-İZLASLVR00639",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20201218/13/39651260/120602215/1/1_org.jpg",
    price: "35,86 TL",
    firm: "X-Lady Accessories",
    name: "Kartier Model Kombin Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200527/8/1737156/58280854/1/1_org.jpg",
    price: "64,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Beyaz Taşlı Halkalı Kıkırdak - Rose",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34377967/57493466/1/1_org.jpg",
    price: "119,27 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pırlanta Montürlü Tek Taş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210403/22/43bbe519/21239772/1/1_org.jpg",
    price: "78 TL",
    firm: "Pelin Aksesuar",
    name: "Yeşil Beyaz Tasarım Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200525/17/1697972/58499756/1/1_org.jpg",
    price: "74,75 TL",
    firm: "MySilvers",
    name: "İnci Serisi Gümüş Kolye Kadın Rodyum İnci",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200617/13/2992642/74446845/0/0_org.jpg",
    price: "262,65 TL",
    firm: "Sümer Telkari",
    name: "Toplu Dorissa Renkli Gümüş Halka Küpe 4956",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210417/17/80895658/131069567/1/1_org.jpg",
    price: "7,65 TL",
    firm: "Eylülün Takısı",
    name: "Gold Renkli Yıldız Model Vintage Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210402/1/77127462/82220438/1/1_org.jpg",
    price: "6,75 TL",
    firm: "Cherybiju",
    name: "Gold Yıldız Sıkıştırmalı Kıkırdak Küpe [adet]",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34382040/20020992/1/1_org.jpg",
    price: "355,34 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kutup Yıldızı Modeli Şans Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210118/9/54346226/68489767/1/1_org.jpg",
    price: "77,14 TL",
    firm: "Papatya Silver",
    name: "Kadın Yaşam Çiçeği Rose Altın Kaplama 925 Ayar Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210311/20/70787513/109831873/1/1_org.jpg",
    price: "29,95 TL",
    firm: "LOTUS GÜMÜŞ",
    name: "Kadın Taşlı Sarmaşık Ayarlanabilir  14 K Rose Altın Kaplama Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210409/12/78879796/128903077/1/1_org.jpg",
    price: "9,65 TL",
    firm: "Eylülün Takısı",
    name: "Vintage Altın Renk Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/08/a7687952/57493488/1/1_org.jpg",
    price: "123,70 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Kaktüs Modeli Kolye SGTL9901",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210117/13/54178618/130826820/0/0_org.jpg",
    price: "44,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Gümüş Mini Tek Taş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/10/67885464/129786042/1/1_org.jpg",
    price: "166,68 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf Orjinal 925 Ayar Gümüş Altın Kaplama Zirkon Taşlı Beyaz Gül Sonsuzluk Model Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/08/acfd1f80/57493510/1/1_org.jpg",
    price: "128,80 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş  Pırlanta Montürlü Tek Taş Kolye SGTL9906",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200901/11/9240047/57195872/1/1_org.jpg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Mineli Papatya Model 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/22/49177268/97554151/1/1_org.jpg",
    price: "44,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı Pırlanta Montürlü Tek Taş Kupe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210420/13/81576232/120971415/1/1_org.jpg",
    price: "11,99 TL",
    firm: "KOBA",
    name: "Kadın Altın Kaplama  Dörtlü Kombin Zincir Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210419/11/81258711/81016573/1/1_org.jpg",
    price: "10,75 TL",
    firm: "Reorah Collection",
    name: "Beyaz Kelebek Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/18/79558941/161770471/1/1_org.jpg",
    price: "159,96 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf Orjinal 925 Ayar Gümüş Rose Kaplama Zümrüdü Ankakuşu Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20210318/18/73424866/153921328/1/1_org.jpg",
    price: "21,51 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Katlı Zincir Kolye Pullu Gümüş Renk",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34377935/17231324/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Göz Modeli Zirkon Taşlı Göçmen Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210403/22/170e4aef/21239727/1/1_org.jpg",
    price: "141,43 TL",
    firm: "Pelin Aksesuar",
    name: "Pembe Kalp Figürlü Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210323/9/74551295/119340437/1/1_org.jpg",
    price: "119 TL",
    firm: "jackferrero",
    name: "4 Adet Karışık Kadın Bileklik Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201027/18/19976758/98155474/0/0_org.jpg",
    price: "79,90 TL",
    firm: "Gümüşistan",
    name: "925 Ayar Gümüş Şans Kolyesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/16/80321840/92464339/1/1_org.jpg",
    price: "166,34 TL",
    firm: "SUNSHINE",
    name: "Trendy Gümüş Bulut Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210105/15/47227964/78083548/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Baget Taşlı Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34389772/17231429/1/1_org.jpg",
    price: "335,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201222/21/40929032/121893794/1/1_org.jpg",
    price: "24,28 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Altın Rengi Yılan Figürlü Kombin Kolye 087",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20210328/14/75766837/82326211/1/1_org.jpg",
    price: "8,95 TL",
    firm: "The Y Jewelry",
    name: "Kalın Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379949/22389484/1/1_org.jpg",
    price: "108,07 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Deniz Yıldızı Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20210323/11/74624999/65941882/1/1_org.jpg",
    price: "242,83 TL",
    firm: "Ventino Silver",
    name: "Erkek Figaro Gümüş Zincir Kolye Vek-3025",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20201224/10/41402865/57196101/1/1_org.jpg",
    price: "166,33 TL",
    firm: "Elika Silver",
    name: "Kadın Üçlü Papatya Model Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210108/22/49175740/57735469/1/1_org.jpg",
    price: "90 TL",
    firm: "Papatya Silver",
    name:
      "Yaşam Çiçeği Nazar Gözlü Rose Altın Kaplama 925 Ayar Gümüş Kolye - Uvps100112",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210408/18/78774803/117276959/1/1_org.jpg",
    price: "99,67 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf Orjinal  925 Ayar Gümüş  Altın Kaplama Kırmızı Gül Tektaş Pırlanta Montürlü Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210310/23/70509905/110597029/1/1_org.jpg",
    price: "145,06 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Beştaş J Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/22/49241439/97554159/1/1_org.jpg",
    price: "92,96 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Dondurma Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201204/13/34956567/80615948/1/1_org.jpg",
    price: "94,33 TL",
    firm: "Doğan Silver",
    name: "Kadın Gümüş Üçü Bir Arada Tek Kulak Üçlü Halka Küpe Dgn20161",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210403/22/7494f9bf/21239646/1/1_org.jpg",
    price: "125,14 TL",
    firm: "Pelin Aksesuar",
    name: "Silver Çoklu Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/8/51858682/89065705/1/1_org.jpg",
    price: "36 TL",
    firm: "ESUSO",
    name: "4li Altın Kaplama Madalyon Bayan Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/22/58496741/135879913/1/1_org.jpg",
    price: "229,90 TL",
    firm: "Masseria",
    name: "Italyan Tasarım Sonsuzluk Model Mikro Taşlı Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210127/11/57597642/78478450/1/1_org.jpg",
    price: "159,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Yuvarlak Baget Taşlı Pırlanta Modelli Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210408/18/78777165/102349669/1/1_org.jpg",
    price: "99,68 TL",
    firm: "takı tak silver",
    name: "Kadın 925 Ayar Gümüş Balonlu Kız Kolye SYKL1710",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200826/20/8882184/82887124/0/0_org.jpg",
    price: "142 TL",
    firm: "Pelin Aksesuar",
    name: "Silver Çoklu Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379302/63827328/1/1_org.jpg",
    price: "147,82 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 17 Mm Gökkuşağı Modeli Tamtur Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/3/47589824/61446829/1/1_org.jpg",
    price: "85,71 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Mineli Papatya Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200828/15/9022324/57021610/1/1_org_zoom.jpeg",
    price: "99,75 TL",
    firm: "Elika Silver",
    name: "Damla Model His Taşı 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/21/78536442/63279642/1/1_org.jpg",
    price: "199,96 TL",
    firm: "PETEK AKSESUAR",
    name: "Çoklu Mavi Nazar Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210127/1/57515113/134681769/1/1_org.jpg",
    price: "291,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Baget Taşlı Bileklik.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210209/13/61455146/139460177/1/1_org.jpg",
    price: "71,41 TL",
    firm: "Roza Silver",
    name: "Şimşek 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210118/13/54434036/56877170/1/1_org.jpg",
    price: "80 TL",
    firm: "New Obsessions",
    name: "Altın Zincir Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210311/11/70621611/101185122/1/1_org.jpg",
    price: "12,44 TL",
    firm: "4C Accessories",
    name: "Zirkon Taşlı Paslanmaz Çelik Cartier Bileklik Bilezik 18 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34381886/20020979/1/1_org.jpg",
    price: "355,34 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kutup Yıldızı Modeli Şans Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/17/45766465/74427714/1/1_org.jpg",
    price: "122,07 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Kaplama Papatya Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210111/17/51072421/75512903/1/1_org.jpg",
    price: "120 TL",
    firm: "Papatya Silver",
    name: "925 Rose Altın Kaplama Dalgalı Gümüş Nazar Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/9/46540461/61215889/1/1_org.jpg",
    price: "105 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Rose Altın Kaplama Dorica Toplu Gümüş Yonca Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210414/23/80185360/81178531/1/1_org.jpg",
    price: "41,90 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Renk Halka Küpe 3'lü",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210402/16/f645d61c/17352851/1/1_org.jpg",
    price: "149,03 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Altın Renkli Singapur Modeli 60 Cm Zincir SGTL8934",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201022/6/18905000/96509669/0/0_org.jpg",
    price: "24 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Altın Italyan Zincirli Kombin Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34387205/58354666/1/1_org.jpg",
    price: "609,84 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Beş Taşlı Çapraz Modeli Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210417/16/80868388/74994112/1/1_org.jpg",
    price: "10,41 TL",
    firm: "The Y Jewelry",
    name: "Gold Kare Şövalye Ayarlanabilir Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/0/58148507/12054180/1/1_org.jpg",
    price: "156,69 TL",
    firm: "Söğütlü Silver",
    name: "Kadın 925 Ayar Gümüş Balonlu Kız Kolye SGTL2820",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200716/16/4622958/21985745/1/1_org.jpg",
    price: "99 TL",
    firm: "İzla Design",
    name: "Yusufçuk Model Mix Taşlı Rose Kaplama Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/12/52036096/52750446/1/1_org.jpg",
    price: "269,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Yuvarlak Elmas Bileklik - Rose",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/20/80737270/164598416/0/0_org.jpg",
    price: "99,71 TL",
    firm: "Pelin Aksesuar",
    name: "Gold Renkli Çoklu Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/11/057e436e/17352806/1/1_org.jpg",
    price: "111,98 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Altın Renkli Singapur Modeli 45 cm Zincir SGTL8933",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210117/13/54178185/130826405/0/0_org.jpg",
    price: "145,59 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Renkli Taşlı Kar Tanesi Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210212/12/62062168/76832351/1/1_org.jpg",
    price: "9 TL",
    firm: "Baykuş",
    name: "Erkek Gri Örme Model Çelik Zincir Kolye Eck0125",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/01/148c8406/40482096/1/1_org.jpg",
    price: "79,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Tekli  Beyaz  Şimşek Yıldırım Baston Küpe - Rose KP-0250",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210104/13/45499548/67090186/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kutup Yıldızı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34387821/63827314/1/1_org.jpg",
    price: "147,82 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 17 Mm Rodyumlu Zirkon Taşlı Tamtur Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210403/22/ad318523/21239763/1/1_org.jpg",
    price: "141,43 TL",
    firm: "Pelin Aksesuar",
    name: "Kuğu Figürlü Silver Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210226/11/67124139/146454741/1/1_org.jpg",
    price: "125,14 TL",
    firm: "Pelin Aksesuar",
    name: "Gökkuşağı Bulut Güneş Zirkon Taşlı Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379326/20021098/1/1_org.jpg",
    price: "133,66 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 12 Mm Zirkon Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210415/16/80327683/56268498/1/1_org.jpg",
    price: "142,65 TL",
    firm: "Mai Silver",
    name: "Kadın 925 Onsuzluk Kelebek Kolye MA_KL_1479",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty21/product/media/images/20201107/22/23524721/97554046/1/1_org_zoom.jpeg",
    price: "135,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Renkli Taşlı 14 Mm Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210406/06/3e9121d7/64625046/1/1_org.jpg",
    price: "165 TL",
    firm: "İzla Design",
    name: "Çift Kelebek Model Altın Kaplama Gümüş Italyan Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34381222/19782195/1/1_org.jpg",
    price: "123,09 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Yaprak Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34377941/63827313/1/1_org.jpg",
    price: "147,82 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 17 Mm Rose Zirkon Taşlı Tamtur Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/21/49020604/97554077/1/1_org.jpg",
    price: "123,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Renkli Mineli Çengelli Papatya Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34386686/19782172/1/1_org.jpg",
    price: "113,34 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pılanta Modeli Çengelli Tek Taş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34377552/21440606/1/1_org.jpg",
    price: "357,28 TL",
    firm: "Söğütlü Silver",
    name: "Italyan Yassı Zincir Yaldızlı Sarı Gümüş Kolye- 40 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38431619/93485491/1/1_org.jpg",
    price: "124,74 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Turuncu Jade Doğaltaşlı Yeşil Çoklu Boncuklu Tasarım Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/02/5697d615/56022451/1/1_org_zoom.jpeg",
    price: "252 TL",
    firm: "Papatya Silver",
    name: "İtalyan Yassı Zincir Altın Kaplama 925 Ayar Gümüş Zincir UVPS100062",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210121/10/55724634/90644094/1/1_org.jpg",
    price: "74,25 TL",
    firm: "Aykat",
    name:
      "Çeyrekli Bileklik Çerçevesi Içine Tek Altın Çeyrek Takılan Çerçeve Blk-337",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200717/10/4664157/65734859/1/1_org.jpg",
    price: "160 TL",
    firm: "Midyat Gümüş Dünyası",
    name: "Gümüş Baget Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210409/3/78814946/128503620/1/1_org.jpg",
    price: "99,67 TL",
    firm: "takı tak silver",
    name:
      "Kadın Gümüş Tamamı Saf Orjinal 925 Ayar Renk Geçişli Kartanesi Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210114/14/53196993/89749532/1/1_org.jpg",
    price: "398 TL",
    firm: "İn Dubai Silver",
    name: "Erkek İtalyan Oksitli Tilki Kuyruğu Zincir 65 cm Dbse2018",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210320/15/73953887/124197327/1/1_org.jpg",
    price: "24,90 TL",
    firm: "LOTUS GÜMÜŞ",
    name: "14 Ayar Rose Altın Kaplama Mistik Topaz Taşlı Kadın Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210121/12/55776279/132617542/1/1_org.jpg",
    price: "197,14 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Sim Dorika Top Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210331/21/76780857/87530765/1/1_org.jpg",
    price: "99,67 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf 925 Ayar Gümüş Beyaz Zirkon Taşlı Yılan Modeli Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34387165/22389414/1/1_org.jpg",
    price: "92,94 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 4 Mm Rodyumlu Top Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38436670/64737026/1/1_org.jpg",
    price: "113,14 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Nazar boncuklu Zirkon Taşlı Fil Figürlü Gold Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210302/10/67885545/129869835/1/1_org.jpg",
    price: "166,68 TL",
    firm: "takı tak silver",
    name:
      "Kadın Tamamı Saf Orjinal 925 Ayar Gümüş Zirkon Taşlı Sonsuzluk Kırmızı Gül Model Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200527/10/1741238/71901005/1/1_org.jpg",
    price: "199,97 TL",
    firm: "Zuk Collection",
    name: "Antik Gümüş Kaplama Ayarlanabilir Model Erkek Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/16/38429574/70967105/1/1_org.jpg",
    price: "141,43 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Turkuaz Doğaltaşlı Deniz Figürlü Charm Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/06/ce8e7e8c/7199294/1/1_org.jpg",
    price: "331,64 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Baget Taşlı Tamtur Yüzük SGTL2792",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/00/af781efb/63005984/1/1_org_zoom.jpeg",
    price: "368,61 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Baget Taşlı İkili Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/21/80409375/79509375/1/1_org.jpg",
    price: "16,10 TL",
    firm: "Gümüş Tezgahi",
    name: "Zikzak Model Hematit Doğaltaş Füme Erkek Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210209/13/61455344/91738085/1/1_org.jpg",
    price: "35,70 TL",
    firm: "New Obsessions",
    name: "Kadın Altın Pullu Kolye Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34377893/63827297/1/1_org.jpg",
    price: "145,58 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pırlanta Modeli Tek Taş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210402/19/0c533191/15263102/1/1_org.jpg",
    price: "96,48 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Turkuaz Taşlı Top Top Bileklik SGTL8518",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/15/9022324/75940854/1/1_org_zoom.jpeg",
    price: "170,60 TL",
    firm: "Elika Silver",
    name: "Kadın Nazar Model Rose Kaplama 925 Ayar Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34377916/12054466/1/1_org.jpg",
    price: "83,99 TL",
    firm: "Söğütlü Silver",
    name: "Mini Tek Taş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38430183/64677132/1/1_org.jpg",
    price: "113,14 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Elmas Figürlü Kalın Zincirli Tasma Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/7/51601868/123045440/1/1_org.jpg",
    price: "42,80 TL",
    firm: "Bess Silver",
    name: "925 Ayar Gümüş Mix Taşlı Rose Kaplama Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210109/5/50077468/89627449/1/1_org.jpg",
    price: "134,37 TL",
    firm: "Söğütlü Silver",
    name: "Kız Çocuk Pembe Gümüş Rose Mineli Kelebek Küpesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/22/49181918/97553971/1/1_org.jpg",
    price: "335,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Rodyumlu Ring Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210216/11/63239441/87887159/1/1_org.jpg",
    price: "91 TL",
    firm: "Mina Cam Tasarım",
    name: "Ipli Murano Camı Balık Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210121/18/55910908/84603308/1/1_org.jpg",
    price: "139,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Rose Yonca Model Gümüş Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210122/12/56092699/132809049/1/1_org.jpg",
    price: "66,91 TL",
    firm: "SVİESA GÜMÜŞ",
    name: "Kadın Altın Kaplama Gümüş Italyan Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/10/8f4a34bf/14694871/1/1_org.jpg",
    price: "80 TL",
    firm: "Modex",
    name: "Kadın Madalyonlu Üçlü Kolye UK9237",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/4/51292540/74958885/1/1_org.jpg",
    price: "79 TL",
    firm: "Athena Silverr",
    name: "Sitrin Taşlı Damla Model Otantik Gümüş Bayan Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/1/46023066/63006031/1/1_org.jpg",
    price: "89,20 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Ince Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210115/10/53539215/90574330/1/1_org.jpg",
    price: "79,80 TL",
    firm: "Noon Collection",
    name: "Erkek Siyah Deri Bileklik Nn1293",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/18/77642179/146116517/1/1_org.jpg",
    price: "24,99 TL",
    firm: "Reina Accessorize",
    name: "Şövalye Yüzük Seti 3'lü",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210126/21/57491211/61799424/1/1_org.jpg",
    price: "179 TL",
    firm: "Marylebone Silver",
    name: "Dorika Toplu Altın Kaplama Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201123/22/30601375/110596928/1/1_org_zoom.jpeg",
    price: "185,83 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Sıra Taşlı Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210323/17/74730616/81016375/1/1_org.jpg",
    price: "12,80 TL",
    firm: "Reorah Collection",
    name: "Mavi Kelebek Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34378921/20021082/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 17 Mm Oksisli Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/15/78234942/135868146/1/1_org.jpg",
    price: "12,99 TL",
    firm: "KOBA",
    name: "Mıknatıslı Çift Sevgili Bilekliği",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210417/15/80863727/78840782/1/1_org.jpg",
    price: "23,99 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Renk Ayarlanabilir Halat Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20201229/16/43331544/89380795/1/1_org.jpg",
    price: "75,80 TL",
    firm: "jelux silver",
    name: "Kadın Yarım Tur Su Yolu Zirkon Taşlı Gümüş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210306/9/69253791/92646006/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Gümüşbox",
    name: "Dikey Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20210401/14/76998519/147956073/1/1_org.jpg",
    price: "257,11 TL",
    firm: "Ventino Silver",
    name: "Rambo Zincir Gümüş Erkek Kolye Vek-3082",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/01/84cc6e74/22174536/1/1_org_zoom.jpeg",
    price: "199 TL",
    firm: "İzla Design",
    name: "Kadın Anka Kuşu Model Rose Kaplama Gümüş Kolye İZLASLVR00501",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210420/23/81733538/117998407/1/1_org.jpg",
    price: "108 TL",
    firm: "Piraye Silver",
    name: "925 Ayar Gümüş Gurmet Zincir 2 Mm 60 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210106/10/47677533/126533499/1/1_org_zoom.jpeg",
    price: "165,90 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı, Cam Göz Nazar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/21/49028150/97554017/1/1_org.jpg",
    price: "111,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kiraz Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/12/45439173/61498534/1/1_org.jpg",
    price: "119 TL",
    firm: "GÜMÜŞ",
    name: "14 Ayar Altın Kaplama Deniz Kabuğu Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210409/15/78924876/133803941/1/1_org.jpg",
    price: "99,68 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf Orjinal 925 Ayar Gümüş Rose Kaplama Renk Geçişli Kartanesi Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20210319/14/73621932/103871184/1/1_org.jpg",
    price: "490 TL",
    firm: "Altınbaş",
    name: "Kadın Altın Tektaş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210406/00/e9f59dc4/64105900/1/1_org.jpg",
    price: "132 TL",
    firm: "Pelin Aksesuar",
    name: "Yonca Figürlü Charm Kalın Zincirli Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/01/739a60a4/21985808/1/1_org_zoom.jpeg",
    price: "124,91 TL",
    firm: "İzla Design",
    name:
      "Kadın Oval Dişli Model Siyah Zirkon Taşlı Rose Gümüş Minimal Yüzük PKT-İZLASLVR00229",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201214/17/38436575/110107305/1/1_org.jpg",
    price: "125,14 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Fil Yılan Çiçek Figürlü Karışık 14'lü Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty22/product/media/images/20201107/14/23331760/102270862/1/1_org.jpg",
    price: "28,69 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Altın Barok İnci Kısa Kolye Ve Bileklik Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210328/23/75808181/128961131/1/1_org.jpg",
    price: "8,25 TL",
    firm: "Eylülün Takısı",
    name: "Vintage Burgu Altın Renk Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210127/13/57636970/134827386/1/1_org.jpg",
    price: "66,33 TL",
    firm: "Elika Silver",
    name: "Kadın Kalp Detaylı Halka Model Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34398353/12054313/1/1_org.jpg",
    price: "57,66 TL",
    firm: "Söğütlü Silver",
    name: "Mini Rose Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34386674/63005960/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Baget Taşlı Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/13/78180160/70084235/1/1_org.jpg",
    price: "14,99 TL",
    firm: "Lal",
    name: "Gold Kaplama Ikili Kombin Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210108/23/49312962/74856030/1/1_org.jpg",
    price: "361,25 TL",
    firm: "Sümer Telkari",
    name: "Dorissa Altın Yaldızlı Rose Gümüş Sarma Bilezik 3330",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/16/45681852/67090180/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Yonca Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/09/5b4c6a9e/57647058/1/1_org_zoom.jpeg",
    price: "134,62 TL",
    firm: "İzla Design",
    name: "Kadın Çanta Model Altın Kaplama Gümüş İtalyan Küpe PKT-TLYSLVR0086",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200904/20/9749299/84655345/0/0_org.jpg",
    price: "279,65 TL",
    firm: "Sümer Telkari",
    name: "Yaşam Çiçeği Altın Yaldızlı Dorica Gümüş Kolye 6899",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/8/46484120/74859079/1/1_org.jpg",
    price: "361,25 TL",
    firm: "Sümer Telkari",
    name: "Dorissa Altın Yaldızlı Gümüş Sarma Bilezik 3333",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/18/77642212/101251128/1/1_org.jpg",
    price: "10,32 TL",
    firm: "The Y Jewelry",
    name: "Kadın Sarı Burgu Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/18/77642152/105260632/1/1_org.jpg",
    price: "9,98 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Renk 4lü Eklem Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210402/20/8c235b9a/20382216/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Zirkon Taşlı Kartanesi Kolye SGTL9668",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210408/11/78656141/115422189/1/1_org.jpg",
    price: "12,02 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Kaplama El Yüzük  Ayarlanabilir",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201117/10/26840321/97554021/1/1_org_zoom.jpeg",
    price: "122,07 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Renkli Mineli Klipsli Papatya Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210405/12/9e374767/12054129/1/1_org.jpg",
    price: "224 TL",
    firm: "Söğütlü Silver",
    name: "Kadın 925 Ayar Gümüş Kuyruklu Yıldız Onix Taşlı Kolye SGTL3512",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/11/47691792/116632849/1/1_org.jpg",
    price: "59,90 TL",
    firm: "LOTUS GÜMÜŞ",
    name: "Kadın Rose 14k Altın Kaplama Orkide ve Renkli Taşlı Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/12/9e6d2f09/58354593/1/1_org.jpg",
    price: "335,60 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Pırlanta Modeli Set SGTL9893",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210130/2/58530290/58504403/1/1_org.jpg",
    price: "99,75 TL",
    firm: "MySilvers",
    name: "Tek Sıra Tamtur Yüzük Kadın Rodyum",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201207/10/35532126/116404241/0/0_org.jpg",
    price: "15,75 TL",
    firm: "Dukkanka",
    name: "Bar 3'lü Murat Boz Çubuk Sade Kolye Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34380149/22389533/1/1_org.jpg",
    price: "92,94 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 4 Mm Altın Rengi Top Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/20/48943662/89627570/1/1_org.jpg",
    price: "76,72 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zincir Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201119/7/28929212/75323902/1/1_org.jpg",
    price: "145,95 TL",
    firm: "İzla Design",
    name: "Kadın Rose Pullu Model Gümüş İtalyan Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210114/2/53015016/75323917/1/1_org.jpg",
    price: "84 TL",
    firm: "İzla Design",
    name: "Kadın Halka Model Gümüş İtalyan Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210408/11/78656141/115422189/1/1_org.jpg",
    price: "12,06 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Kaplama El Yüzük  Ayarlanabilir",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210109/14/50340950/128124283/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Nereze",
    name: "925 Ayar Beyaz Lotus Çiçeği Kolye Kadın Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20210104/5/45229063/74427193/1/1_org.jpg",
    price: "122,56 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Renkli Taşlı Gökkuşağı Modeli Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34380642/62004833/1/1_org.jpg",
    price: "111,98 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Sonsuz Yaşamın Simgesi Lotus Çiçeği Kolye Sgtl10085rose",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210303/13/68224301/147388458/1/1_org_zoom.jpeg",
    price: "79 TL",
    firm: "Ninova Silver",
    name: "Ninova Kılçık Model Rose Kaplama Gümüş Zincir Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/13/58343993/22062525/1/1_org.jpg",
    price: "199 TL",
    firm: "İzla Design",
    name: "Yassı Zincir Model Rose Kaplama Gümüş Italyan Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200901/11/9240047/57195803/1/1_org.jpg",
    price: "170,56 TL",
    firm: "Elika Silver",
    name: "Damla Taşlı Dorika Toplu 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20201218/11/39620958/120569881/0/0_org.jpg",
    price: "29,99 TL",
    firm: "Madame Daisy Bijuteri",
    name: "Ithal Vip Serisi Mix Taşlı Gold Kalp Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/01/235d5122/22062579/1/1_org_zoom.jpeg",
    price: "165 TL",
    firm: "İzla Design",
    name: "Kadın Yassı Model Rose Kaplama İtalyan Gümüş Bileklik İZLASLVR00299",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200520/16/1553463/71571579/1/1_org_zoom.jpeg",
    price: "159 TL",
    firm: "İzla Design",
    name: "Deniz Kabuğu Model Rose Kaplama Gümüş İtalyan Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210402/7/77172806/79991500/1/1_org.jpg",
    price: "10,40 TL",
    firm: "Entrendi Cansus",
    name: "Kalın Altın Halka Küpe 3 cm Çaplı",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/13/70418996/91922940/1/1_org.jpg",
    price: "139,97 TL",
    firm: "Marjin",
    name: "Kadın Dorika Taşlı Altın&rose&gümüş Renkli Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210104/7/45252254/21225620/1/1_org.jpg",
    price: "119 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Elmas Montürlü Damla Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/12/2e851c03/57493528/1/1_org.jpg",
    price: "503,89 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Swarovski Tek Taş Yüzük 14 SGTL20506A",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/13/45467521/77497569/1/1_org.jpg",
    price: "28,69 TL",
    firm: "X-Lady Accessories",
    name: "Çelik Erkek Bileklik Ve Kolye Zincir Set Gümüş Kaplama",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210113/10/52689733/129294524/1/1_org.jpg",
    price: "13,33 TL",
    firm: "KOBA",
    name: "Kadın Yeşil Beyaz Tasarım Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20210327/22/75731954/158085374/0/0_org.jpg",
    price: "50 TL",
    firm: "DOGUSTORE",
    name: "Lotus Çiçekli Paslanmaz Çelik Kaplama Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210220/18/65524394/64625051/1/1_org.jpg",
    price: "79 TL",
    firm: "İzla Design",
    name: "Zincir Model Rose Kaplama Gümüş Italyan Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379225/63827302/1/1_org.jpg",
    price: "135,50 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 14 Mm Rose Zirkon Taşlı Tamtur Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/01/990217a8/20414246/1/1_org_zoom.jpeg",
    price: "165 TL",
    firm: "İzla Design",
    name:
      "Kadın Kutup Yıldızı Asmalı Model Zirkon Taşlı Gümüş Küpe İZLASLVR00111",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/20/45741241/76311080/1/1_org.jpg",
    price: "23,13 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Altın Zincir Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201204/11/34915000/115806371/1/1_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "Kadın Gri 9’Lu Çivi Ve Halka Küpe Seti 00003005",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/20/45741241/76311080/1/1_org.jpg",
    price: "23,13 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Altın Zincir Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201204/11/34915000/115806371/1/1_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "Kadın Gri 9’Lu Çivi Ve Halka Küpe Seti 00003005",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20210324/12/74903088/156836174/1/1_org.jpg",
    price: "25 TL",
    firm: "Qielle",
    name: "Kadın Gold Vücut Aksesuarı + Gold Top Zincir Bel Zinciri Aksesuarı",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210403/23/7d5a9c20/21689599/1/1_org.jpg",
    price: "35,61 TL",
    firm: "Defne Takı",
    name: "Kadın Taşlı Yaprak Bileklik Seti Dfntkb-110",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200814/17/8089369/81490617/0/0_org.jpg",
    price: "89,90 TL",
    firm: "Gümüşistan",
    name: "925 Ayar Gümüş Toplu Salaş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201119/6/28926434/17343957/1/1_org.jpg",
    price: "109,55 TL",
    firm: "Ninova Silver",
    name: "Kadın Siyah Zirkon Taşlı Halka Model Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210329/0/75823586/144287044/1/1_org.jpg",
    price: "61,95 TL",
    firm: "moonnisantasi",
    name: "Zirkon Taşlı Su Yolu Zincir Ve Ayıcık Kolye Kombin",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210324/11/74890677/58546265/1/1_org.jpg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Kadın Gezegen Model Rose Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210106/10/47677533/126537177/1/1_org_zoom.jpeg",
    price: "102,76 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Sade Delicate Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34396004/19782144/1/1_org.jpg",
    price: "135,50 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Siyah Taşlı Yıldız Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210412/19/79577927/110766562/1/1_org.jpg",
    price: "98,90 TL",
    firm: "Sultan Telkari",
    name: "925 Ayar Gümüş Erkek Kral Zincir Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210305/10/68831500/148741718/1/1_org.jpg",
    price: "299,90 TL",
    firm: "Silva Silver",
    name: "Erkek Gümüş Oniks Taşlı 925 Ayar",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/3/77609286/114467622/1/1_org.jpg",
    price: "59,90 TL",
    firm: "jackferrero",
    name: "Kombin Hematit Taşı Makrome El Örgüsü Erkek Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210406/06/1c6b2723/64624889/1/1_org.jpg",
    price: "79 TL",
    firm: "İzla Design",
    name: "Zincir Model Altın Kaplama Gümüş Italyan Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210223/17/66264028/145212387/0/0_org.jpg",
    price: "59,98 TL",
    firm: "Ervalina",
    name: "9'lu Set Yüzük Gümüş Rengi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210324/22/75046538/157082311/0/0_org.jpg",
    price: "69 TL",
    firm: "Örgüce",
    name: "Papatya Nakış Kolye Bileklik Seti Kanaviçe El Emeği Takı Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210311/11/70622395/118108639/1/1_org.jpg",
    price: "20,68 TL",
    firm: "ms merijewelry",
    name: "Kadın Mavi Simli Kelebek Kolye ve Küpe Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200416/4/1926705/57734954/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "Harf Kolye. Üç Boyutlu E Harfi. Rose Altın Kaplama 925 Ayar Gümüş.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210104/13/45490892/67090179/1/1_org.jpg",
    price: "185,92 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kartanesi Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210108/20/48897903/84013595/1/1_org.jpg",
    price: "119,47 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Safir Taşlı Pırlanta Montürlü Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/01/ace4bee8/20414319/1/1_org_zoom.jpeg",
    price: "124,91 TL",
    firm: "İzla Design",
    name: "Kadın Sıralı Göz Model Safir Taşlı Rose Gümüş Yüzük İZLASLVR00088",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210403/20/255a80e2/17145847/1/1_org.jpg",
    price: "198,25 TL",
    firm: "Mai Silver",
    name: "Kadın Rose 925 Gümüş Shakira Küpe MA_KP_1116",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/13/52071138/78605479/1/1_org.jpg",
    price: "47,10 TL",
    firm: "TAKIŞTIR",
    name: "Gümüş Renk Yılan Figürlü Sallantılı Küpe(çift)",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210410/11/79033509/82320788/1/1_org.jpg",
    price: "17,90 TL",
    firm: "The Y Jewelry",
    name: "Kadın Sarı Göz Detaylı Minimal Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/22/45711181/78083964/1/1_org.jpg",
    price: "128,43 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Yılan Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200529/8/1846927/12116930/1/1_org.jpg",
    price: "56,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Tekli Yonca Kıkırdak Küpe - Rose",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210117/13/54178171/130826376/0/0_org.jpg",
    price: "123,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Mineli Çengelli Gümüş Kelebek Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/0/78807727/154584942/1/1_org.jpg",
    price: "65 TL",
    firm: "Perlina Collezione",
    name: "Kadın The Moon Ay Taşı Avuç İçi Doğal Taş Altın Kaplama Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/16/48715627/20037552/1/1_org.jpg",
    price: "4.592,50 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "10 gr (gram) 22 Ayar Işçiliksiz Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210411/17/79275528/64609830/1/1_org.jpg",
    price: "8,98 TL",
    firm: "Vasco&Macellan",
    name: "Erkek Gümüş Renk Kolye + Künye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210109/5/50065467/57734973/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name:
      "Harf Kolye. Üç Boyutlu A Harfi. Rose Altın Kaplama 925 Ayar Gümüş - Uvps100071",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210120/11/55427522/110635790/1/1_org.jpg",
    price: "66,33 TL",
    firm: "Elika Silver",
    name: "Kadın Dikdörtgen Model Altın Kaplama Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200727/0/6031134/78722073/0/0_org.jpg",
    price: "141,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Gümüş Rengi Beyaz Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200828/18/9029579/57195877/1/1_org.jpg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Kar Tanesi Model 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/7/28929220/75323899/1/1_org.jpg",
    price: "134,62 TL",
    firm: "İzla Design",
    name: "Kadın Çift Yıldız Sallantılı Rose Kaplama Gümüş İtalyan Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/01/c5891565/20414277/1/1_org_zoom.jpeg",
    price: "165 TL",
    firm: "İzla Design",
    name: "Kadın Kutup Yıldızı Model Zirkon Taşlı Gümüş Küpe İZLASLVR00110",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210325/15/75246243/60940138/1/1_org.jpg",
    price: "285,69 TL",
    firm: "Ventino Silver",
    name: "Gurmet 925 Ayar Gümüş Erkek Zincir Bileklik Veb-5018",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/13/4217f51b/58535132/1/1_org.jpg",
    price: "141,43 TL",
    firm: "Pelin Aksesuar",
    name: "Kelebek Figürlü Silver Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/6/46392439/93212917/1/1_org.jpg",
    price: "171,39 TL",
    firm: "Hicret Gümüş",
    name: "Kadın Halka Gümüş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210228/18/67549835/110596990/1/1_org.jpg",
    price: "108,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Güneş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty21/product/media/images/20201112/17/25401381/97554018/1/1_org_zoom.jpeg",
    price: "135,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı 14 Mm Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200930/13/12634020/89389638/1/1_org.jpg",
    price: "5.511 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "12 gr(gram) 22 Ayar  Kibrit Çöpü Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20210101/22/44280562/125696916/0/0_org.jpg",
    price: "14,99 TL",
    firm: "shey butik",
    name: "Çoklu Sarı Papatya Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/0/80458710/74994250/1/1_org.jpg",
    price: "9,80 TL",
    firm: "The Y Jewelry",
    name: "Kadın Gold Oval Şövalye Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379523/22389413/1/1_org.jpg",
    price: "92,94 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 4 Mm Rose Top Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/08/40a4f95b/57493540/1/1_org.jpg",
    price: "133,06 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pırlanta Montürlü Kalp Modeli Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210420/11/81554442/118956687/1/1_org.jpg",
    price: "180,99 TL",
    firm: "SVİESAJEWELRY",
    name: "Italyan Zincir yassı  Altın Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210220/2/65359447/55935584/1/1_org.jpg",
    price: "26,50 TL",
    firm: "Baykuş",
    name: "Triagle Ok Ucu Erkek Siyah Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/12/0be85950/57493464/1/1_org.jpg",
    price: "391,89 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Swarovski Tek Taş Kolye SGTL20505A",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210117/14/54180605/130828509/0/0_org.jpg",
    price: "165,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Pırlanta Montürlü Safir Baget Taşlı Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34378192/18037136/1/1_org.jpg",
    price: "100,43 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Mineli Uğur Böceği Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20210324/23/75052477/157088954/0/0_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "3'lü Sembol Uçlu Kolye Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/21/78536236/78142346/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Arden Global",
    name: "Unisex Bebek Sarı Sertifikalı Kehribar Diş Kolyesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/16/47252441/97554065/1/1_org.jpg",
    price: "94,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Papatya Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210226/23/67278047/137670831/1/1_org.jpg",
    price: "398 TL",
    firm: "Silveranka",
    name: "Baget Set 925 Ayar Gümüş",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/5/51344082/82286961/1/1_org.jpg",
    price: "35,70 TL",
    firm: "New Obsessions",
    name: "Çoklu Gümüş Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210130/22/58729552/136197869/1/1_org.jpg",
    price: "185,91 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Kare Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379267/22389519/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu 14 Mm Burgu Modeli Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/16/77446246/81621570/1/1_org.jpg",
    price: "9,28 TL",
    firm: "Bijuteri Net",
    name: "Kadın Silver Renk Kalın Boş 6'lı Halka Küpe 154674",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20210323/9/74551286/116287549/1/1_org.jpg",
    price: "55 TL",
    firm: "jackferrero",
    name: "Nazar Boncuklu Zirkon Taşlı Fil Figürlü Gold Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/6/51440935/120574732/1/1_org.jpg",
    price: "42,80 TL",
    firm: "Bess Silver",
    name: "925 Ayar Gümüş Taşlı Rose Kaplama Kelebek Model Halka Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379033/20020988/1/1_org.jpg",
    price: "123,18 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Markazit Ve Kök Zümrüt Taşlı Damla Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/01/9b6d8749/20414299/1/1_org_zoom.jpeg",
    price: "134,62 TL",
    firm: "İzla Design",
    name: "Kadın Rose Kaplama Gümüş Minimal Küpe İZLASLVR00103",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/3/78815378/94347898/1/1_org.jpg",
    price: "99,67 TL",
    firm: "takı tak silver",
    name: "Kadın Kar Tanesi Kolye 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210329/11/75903771/120308547/1/1_org.jpg",
    price: "42,98 TL",
    firm: "Madame Daisy Bijuteri",
    name: "Ithal Vip Serisi Beyaz Taşlı Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/15/80657609/117890026/1/1_org.jpg",
    price: "9,97 TL",
    firm: "The Y Jewelry",
    name: "Bombeli Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20210329/13/75943574/158368573/1/1_org.jpg",
    price: "59,98 TL",
    firm: "Ervalina",
    name: "Yüzük Set Gümüş Rengi 10'lu",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/18/58444055/59190439/1/1_org.jpg",
    price: "39,90 TL",
    firm: "LABALABA",
    name: "Kadın Antik Gümüş Kaplama Baskılı Dolama Yılan Formlu Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/7/67855372/87527732/1/1_org.jpg",
    price: "166,68 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf 925 Ayar Gümüş Beyaz Zirkon Taşlı Sıralı 7 Yıldızlı Model Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210403/20/b5d4c990/7674479/1/1_org.jpg",
    price: "80 TL",
    firm: "Modex",
    name: "Kadın Nazarlı Hayat Ağacı Figürlü Üçlü Kolye Uk9794",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34379928/62004705/1/1_org.jpg",
    price: "142,79 TL",
    firm: "Söğütlü Silver",
    name:
      "Gümüş Mistik Renk Taşlı Ayarlamalı Yonca Modeli Yüzük Sgtl10107mistik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210127/11/57597653/94968039/1/1_org.jpg",
    price: "66,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Gümüş Rengi Taşsız Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/01/18419dad/43791346/1/1_org_zoom.jpeg",
    price: "79 TL",
    firm: "İzla Design",
    name: "Kadın Çubuk Model Zirkon Taşlı Gümüş İtalyan Küpe PKT-İZLASLVR00642",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210416/15/80655172/128737273/1/1_org.jpg",
    price: "166,33 TL",
    firm: "Elika Silver",
    name: "Kadın Kırmızı Gül Sonsuzluk Model 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/2/69594143/149856950/0/0_org.jpg",
    price: "179,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Trend Küpe.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210122/9/56028577/132913748/1/1_org.jpg",
    price: "66,33 TL",
    firm: "Elika Silver",
    name: "Kadın Kare Model Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/07/2e00a194/61216344/1/1_org.jpg",
    price: "67,50 TL",
    firm: "Papatya Silver",
    name: "Renk Değiştiren Doğal Taşlı His Taşı Gümüş Kalp Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/11/52009564/22062524/1/1_org.jpg",
    price: "165 TL",
    firm: "İzla Design",
    name: "Kadın Yassı Zincir Model Altın Kaplama Gümüş İtalyan Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty92/product/media/images/20210403/15/da33d18a/12054555/1/1_org.jpg",
    price: "223,89 TL",
    firm: "Söğütlü Silver",
    name: "Kadın 925 Ayar Gümüş Şans Bilekliği SGTL4488",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38431611/89433625/1/1_org.jpg",
    price: "183 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Siyah Silver Kristalli 8 Sıralı Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/19/78969691/162291319/0/0_org.jpg",
    price: "54,99 TL",
    firm: "Çlk Accessories",
    name: "A Harf Küpe Taşlı Ikili Harf Halka Küpe Kombin Çlktaşlıküpea B33003",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/22/58500449/122644880/1/1_org.jpg",
    price: "62,21 TL",
    firm: "Jaida Moda",
    name: "Kadın Gold Renk Cerrahi Çelik 3lü Set Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/18/77642002/84198875/1/1_org.jpg",
    price: "9,89 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Şövalye Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210217/16/64043411/142306657/0/0_org.jpg",
    price: "10,99 TL",
    firm: "KOBA",
    name: "Ince Zincir Yılan Figürlü Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34384369/63827277/1/1_org.jpg",
    price: "108,07 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Renkli Taşlı Deniz Yıldızı Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210126/9/57209077/101214875/1/1_org.jpg",
    price: "74,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Gümüş Rengi Taşlı Halka Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/22/49177514/97554140/1/1_org.jpg",
    price: "181,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Renkli Taşlı Yonca Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34379083/19782173/1/1_org.jpg",
    price: "134,38 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Miks Taşlı Mineli Yonca Model Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20210318/13/73352461/154701426/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Sortie Aksesuar",
    name: "Nazar Boncuğu Figürlü 4'lü Kombin Bileklik 006",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20210317/17/73113933/136935680/1/1_org.jpg",
    price: "18,67 TL",
    firm: "moonnisantasi",
    name: "Kadın Sarı Zirkon Taşlı Şeffaf Jelibon Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20201017/14/16644497/57305861/1/1_org.jpg",
    price: "350 TL",
    firm: "Tmec Silver",
    name: "Kadın Swarovski Taşlı Tektaş Ve Beştaş Yüzük Kombin",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200928/9/12273479/89074671/1/1_org.jpg",
    price: "35,86 TL",
    firm: "X-Lady Accessories",
    name:
      "Kadın Altın Kaplama İtalyan Ezme Zincir Kolye Bileklik Takı Seti Zincir Boyu 60 cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34377174/67090144/1/1_org.jpg",
    price: "246,38 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Lareyn Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210211/18/62026584/120866064/1/1_org.jpg",
    price: "35,86 TL",
    firm: "X-Lady Accessories",
    name: "Unisex Kararmaz Kartier Kombin Çelik Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/3/51286306/66469873/1/1_org.jpg",
    price: "261,25 TL",
    firm: "KsrModa",
    name: "Oniks Taşlı 925 Ayar Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/01/fabed55c/22062578/1/1_org_zoom.jpeg",
    price: "149 TL",
    firm: "İzla Design",
    name:
      "Kadın Yassı Model Altın Kaplama İtalyan Gümüş Bileklik İZLASLVR00300",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/10/47677533/126533322/1/1_org_zoom.jpeg",
    price: "145,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu  Zirkon Taşlı Pırlanta Modeli Pırıltı Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210205/12/60165275/110792213/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Gümüşistan",
    name: "925 Ayar Gümüş Tek Sıra Taşlı Halka Küpe (Gold)",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/0/45837543/74115356/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Siyah Taşlı Kutup Yıldızı Modeli Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210417/12/80820812/84061922/1/1_org.jpg",
    price: "7,40 TL",
    firm: "Tanyeli Accessories",
    name: "Kadın Gümüş Sıkıştırma Kıkırdak Küpesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210204/14/59930227/137670713/1/1_org.jpg",
    price: "10,30 TL",
    firm: "LapisButik",
    name: "Sevgili Bilekliği Mıknatıslı",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210104/9/45339011/67090195/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Yıldız Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/01/d5add93c/21985777/1/1_org_zoom.jpeg",
    price: "139 TL",
    firm: "İzla Design",
    name:
      "Kadın İyilik Meleği Model Zirkon Taşlı Rose Kaplama Gümüş Kolye İZLASLVR00521",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210217/14/63972408/142216930/0/0_org.jpg",
    price: "419,97 TL",
    firm: "Marjin",
    name:
      "Kadıın Sedef Ve Altın Renkli Çok Figürlü Üç Katlı Boncuk Kolye sedef",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210324/21/75041176/112736375/1/1_org.jpg",
    price: "8,20 TL",
    firm: "Mood Agenda",
    name: "Yılan Figürlü Gold Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201128/13/33297423/114051159/1/1_org.jpg",
    price: "149 TL",
    firm: "Gümüş Tezgahi",
    name: "925 Ayar Gümüş Osmanlı Tuğralı Oniks Taşlı Erkek Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200611/0/2644279/73591271/0/0_org.jpg",
    price: "280,35 TL",
    firm: "KsrModa",
    name: "Zirkon Taşlı 925 Ayar Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210401/17/77046550/128937902/1/1_org.jpg",
    price: "9,35 TL",
    firm: "Eylülün Takısı",
    name: "Kadın Sarı Yılan Sırtı Vintage Tasarım Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/18/47347066/106570810/1/1_org.jpg",
    price: "29,99 TL",
    firm: "DaisySilver&Bujiteri",
    name: "Ithal Vip Serisi Gold Kalp Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/10/2f67ae47/57735124/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "Harf Kolye. Üç Boyutlu S Harfi. Rose Altın Kaplama 925 Ayar Gümüş.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210117/13/54178151/130826414/0/0_org.jpg",
    price: "145,59 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/6/28927434/75323798/1/1_org.jpg",
    price: "129 TL",
    firm: "İzla Design",
    name: "Kadın Hasır Model Gümüş İtalyan Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/7/51662758/87082254/1/1_org.jpg",
    price: "27,84 TL",
    firm: "Bess Silver",
    name: "Kadın 925 Ayar Gümüş Taşlı Halka Rose Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210412/22/79636079/102830593/1/1_org.jpg",
    price: "299,95 TL",
    firm: "ENCİLİ SİLVER",
    name: "Erkek Gümüş Kral Zincir Yuvarlak Kral Model Kolye 925 Ayar",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20201128/11/33250142/68643319/1/1_org.jpg",
    price: "129 TL",
    firm: "Else Silver",
    name: "Kadın Gümüş Mekik Taşlı Asansörlü Başak Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210401/7/76824935/81016698/1/1_org.jpg",
    price: "10,90 TL",
    firm: "Reorah Collection",
    name: "Lila Kelebek Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/04/05980b0b/12054315/1/1_org.jpg",
    price: "89,20 TL",
    firm: "Söğütlü Silver",
    name: "Kadın 925 Ayar Gümüş Halka Küpe SGTL7313",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201130/13/33753882/74039242/1/1_org.jpg",
    price: "56,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Tekli Siyah Taşlı Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34379319/17231422/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Yonca Modeli Zirkon Taşlı Göçmen Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210127/3/57522254/134689513/1/1_org.jpg",
    price: "59,50 TL",
    firm: "im Design",
    name: "Dorika Detay Inci Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210127/17/57742497/10622454/1/1_org.jpg",
    price: "129,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın 7 Yıldızlı   Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34379884/19782152/1/1_org.jpg",
    price: "101,20 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pılanta Modeli Çengelli Tek Taş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210302/13/67925881/105133333/1/1_org.jpg",
    price: "10,94 TL",
    firm: "The Y Jewelry",
    name: "Kadın Gümüş Renk 4lü Eklem Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200619/9/3105426/57854890/1/1_org.jpg",
    price: "119 TL",
    firm: "İzla Design",
    name:
      "Kadın Mavi Boncuk Model Toplu Altın Kaplama Gümüş İtalyan Kolye PKT-TLYSLVR0148",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201210/12/37044259/118046984/1/1_org_zoom.jpeg",
    price: "240,79 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş rodyumlu tek taş kolye ve küpe gümüş set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/10/3a6fdaad/57826360/1/1_org.jpg",
    price: "99 TL",
    firm: "Midyat Gümüş Dünyası",
    name: "Unisex Gümüş Temizleme Suyu 50 Cc MGD20205000",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200909/13/10157422/85350689/1/1_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "Kadın Gri 9'Lu Kalpli Ve Halka Küpe Seti 03012005",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/21/49094844/89065882/1/1_org.jpg",
    price: "29 TL",
    firm: "ESUSO",
    name: "4li Altın Kaplama Bayan Zincir Kolye Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/20/69126906/149221522/0/0_org.jpg",
    price: "79,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Beyaz Taşlı Gümüş Yay Kıkırdak Küpe-rose",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/0/49529465/78928702/1/1_org.jpg",
    price: "52,50 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Siyah Taşlı Yıldız Kıkırdak Gümüş Küpe Rose Altın",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/18/9029579/57829978/2/2_org.jpg",
    price: "149,66 TL",
    firm: "Elika Silver",
    name: "Yaşam Çiçeği Nazar Boncuklu Rose Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty8/product/media/images/20200805/21/7082514/80093569/0/0_org.jpg",
    price: "59,90 TL",
    firm: "Playseba",
    name: "Bohem Alaçatı Stili 17 Adet Eklem Ve Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210108/21/49045340/62004764/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Yonca Modeli Küpe Sgtl10068beyaz",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210121/9/55696802/132501616/1/1_org.jpg",
    price: "59,92 TL",
    firm: "TAKIŞTIR",
    name: "Geçici Çiçek Dövme Tattoo",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210301/19/67696726/147105981/1/1_org.jpg",
    price: "89 TL",
    firm: "TOMKORS",
    name: "Erkek Siyah Çelik Deri Doğallaş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210311/12/70650171/70729743/1/1_org.jpg",
    price: "7,80 TL",
    firm: "Vasco&Macellan",
    name: "Tilki Kuyruğu Gümüş Renk Çelik Erkek Bileklik Künye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/00/f9a2d5ed/20037263/1/1_org.jpg",
    price: "11.414,45 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "25 gr (gram) Üçlü Adana Burma 22 Ayar İşçiliksiz Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200902/15/9408047/66316937/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Nereze",
    name: "925 Ayar Minik Mavi Kelebek Kolye Kadın Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379571/19782146/1/1_org.jpg",
    price: "110,86 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Zirkon Taşlı Yaprak Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/09/55001cf5/57460087/1/1_org.jpg",
    price: "323,91 TL",
    firm: "BayVog",
    name: "Oniks Taşlı 925 Ayar Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/13/69738656/150040388/1/1_org.jpg",
    price: "159,99 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Rose Renkli Zirkon Taşlı Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201028/14/20117113/98413406/0/0_org.jpg",
    price: "79,90 TL",
    firm: "Gümüşistan",
    name: "925 Ayar Gümüş Papatya Açılır-kapanır Aşk Kolyesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty91/product/media/images/20210403/15/5046b2d2/17352850/1/1_org.jpg",
    price: "133,06 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Rose Singapur Modeli 60 Cm Zincir SGTL8936",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201029/3/20237839/98663956/0/0_org.jpg",
    price: "90 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Rose Kaplama Mineli Papatya Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210115/20/53766094/130393684/0/0_org.jpg",
    price: "102 TL",
    firm: "Sümer Telkari",
    name: "Altın Yaldızlı Gümüş 12 Mm Halka Küpe 5144",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/01/74a426f1/43797246/1/1_org_zoom.jpeg",
    price: "107,97 TL",
    firm: "İzla Design",
    name:
      "Kadın Yılan Model Sallantılı Zirkon Taşlı Gümüş İtalyan Küpe PKT-İZLASLVR00624",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210403/22/0e977281/21239447/1/1_org.jpg",
    price: "142 TL",
    firm: "Pelin Aksesuar",
    name: "Çoklu El Yapımı Vintage Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210130/22/58730837/136197439/1/1_org.jpg",
    price: "559,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Kare Üçlü Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210108/22/49244255/74903075/1/1_org.jpg",
    price: "356,57 TL",
    firm: "MAGNAMİNA",
    name: "Çiçek Model Elmas Montürlü Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200508/12/839299/58280846/1/1_org.jpg",
    price: "129,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Beyaz Taşlı Yıldızlı Şahmeran - Rose Bl-0128",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201026/10/19659956/97554092/1/1_org_zoom.jpeg",
    price: "123,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Mineli Çengelli Papatya Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210311/14/70709970/68045870/1/1_org.jpg",
    price: "399 TL",
    firm: "İn Dubai Silver",
    name: "Erkek 925 Ayar Gümüş Halat Zincir 50 cm Dbse2013",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201123/22/30601375/110597057/1/1_org_zoom.jpeg",
    price: "83 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Tekli Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200626/17/3551941/75412305/0/0_org.jpg",
    price: "153 TL",
    firm: "Sümer Telkari",
    name: "Dorica Renkli Gümüş Yüzük 3004",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210403/15/05830980/15263006/1/1_org.jpg",
    price: "96,48 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Mineli Turkuaz Taşlı Top Top Bileklik SGTL8519",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379440/20382240/1/1_org.jpg",
    price: "142 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Rengi 19 Mm Şarnel Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201221/13/40436524/121218165/1/1_org.jpg",
    price: "59,95 TL",
    firm: "Stradivarius",
    name: "Kadın Sarı 6'Lı Düğüm Yüzük Seti 00783006",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210322/10/74249051/102507562/1/1_org.jpg",
    price: "29,98 TL",
    firm: "Markiz Takı",
    name: "Gold Küçük Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/10/47677533/126533309/1/1_org_zoom.jpeg",
    price: "191,12 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı, Cam Göz Nazar Üç Zincirli  Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210123/9/56351991/58280851/1/1_org.jpg",
    price: "64,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Siyah Taşlı Halkalı Gümüş  Kıkırdak",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/09/f4695abd/57647038/1/1_org_zoom.jpeg",
    price: "165 TL",
    firm: "İzla Design",
    name: "Kadın Halka Model Gümüş İtalyan Küpe PKT-TLYSLVR0091",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210114/13/53166916/21985751/1/1_org.jpg",
    price: "109,55 TL",
    firm: "İzla Design",
    name: "Kadın Toplu Zincir Model Rose Kaplama Kolye Izlaslvr00478",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/8/46463482/89627584/1/1_org.jpg",
    price: "123,17 TL",
    firm: "Söğütlü Silver",
    name: "Kız Çocuk Gold Rose Mineli Dondurma Küpesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34378218/56281958/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Renkli Taşlı Yuvarlak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20201013/22/15587895/92974370/0/0_org.jpg",
    price: "90 TL",
    firm: "Papatya Silver",
    name: "Kadın Tektaşlı Yonca Model Rose Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210122/21/56295969/133275990/0/0_org.jpg",
    price: "28,69 TL",
    firm: "X-Lady Accessories",
    name: "Kombin Bileklik Altın Kaplama",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/09/896f8b6a/57647059/1/1_org_zoom.jpeg",
    price: "106,35 TL",
    firm: "İzla Design",
    name: "Kadın Zirkon Taşlı Altın Kaplama Gümüş İtalyan Küpe PKT-TLYSLVR0087",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/3/46128573/60239532/1/1_org.jpg",
    price: "57,49 TL",
    firm: "Papatya Silver",
    name: "Nano Zirkon Tektaş Kolye - Uvps100246",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/22/58498013/119963524/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Sortie Aksesuar",
    name: "Yılan Kolye Küpe Bileklik 3'lü Set 001 Altın Rengi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210302/16/67959684/100674837/1/1_org.jpg",
    price: "24 TL",
    firm: "Harlofia Jewelry",
    name: "Altın Kaplama Lila Kelebek Kolye Küpe Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34381732/16737822/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Mini Turkuaz Taşlı Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210316/16/72194163/153269822/0/0_org.jpg",
    price: "199,97 TL",
    firm: "Zuk Collection",
    name:
      "Gümüş Kaplama Yüzük Ayarlanabilir Model Erkek Yüzük Seti Ahşap Hediye Kutulu",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty91/product/media/images/20210403/16/bd91ce27/20021108/1/1_org.jpg",
    price: "123,18 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Siyah Taşlı Kutup Yıldızı Kolye SGTL9569",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210320/11/73911226/57829982/1/1_org.jpg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Gülüm Altın Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210104/23/45832329/63005977/1/1_org.jpg",
    price: "89,20 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Ince Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/01/64f59843/21985762/1/1_org_zoom.jpeg",
    price: "141 TL",
    firm: "İzla Design",
    name: "Kadın Zirkon Taşlı Rose Kaplama Gümüş Kolye İZLASLVR00497",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200814/19/8096724/81507591/0/0_org.jpg",
    price: "59,90 TL",
    firm: "Gümüşistan",
    name: "925 Ayar Gümüş Tektaş Örgü Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200617/13/2993876/58191280/1/1_org.jpg",
    price: "184,37 TL",
    firm: "SUNSHINE",
    name: "Zirkon Taşlı Bulut Gümüş Trend Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200919/19/11243817/87580774/0/0_org.jpg",
    price: "189,92 TL",
    firm: "TAKIŞTIR",
    name: "Altın Renk Çoklu Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201214/17/38435346/93499496/1/1_org.jpg",
    price: "142 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Amazonit Kırık Taşlı Kuğu Figürlü Charm Tasarım Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/19/80725160/164586689/0/0_org.jpg",
    price: "114 TL",
    firm: "Pelin Aksesuar",
    name:
      "Turkuaz Balık Figürlü Renkli Nazar Boncuklu Önden Kapamalı Tasarım Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210315/10/71162462/136021563/1/1_org.jpg",
    price: "10,50 TL",
    firm: "Faragiz",
    name: "Mıknatıslı Çift Sevgili Kolyesi 2'li Paket",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200617/16/3006319/74468691/1/1_org.jpg",
    price: "235 TL",
    firm: "Papatya Silver",
    name:
      "925 Ayar Sallantılı Üç Renk Firuze Yonca Ve Atom Taşlı Dorica Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/10/79716471/17040220/1/1_org.jpg",
    price: "780 TL",
    firm: "Glorria",
    name: "Kadın Altın Firuze Taşlı Sıra Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379512/20382297/1/1_org.jpg",
    price: "142 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu 19 Mm Şarnel Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201227/17/42768274/123894308/0/0_org.jpg",
    price: "19,99 TL",
    firm: "Mysoho Accessories",
    name: "Kadın Minimalist Eklem Yüzüğü Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210116/11/53882441/116632159/1/1_org.jpg",
    price: "59,90 TL",
    firm: "LOTUS GÜMÜŞ",
    name: "Kadın Beyaz Manolya Çiçeği 14k Rose Altın Kaplama Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20201214/17/38429896/57042739/1/1_org.jpg",
    price: "128,31 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Asma Yapraklı Charm Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/22/37e8f2ce/66635639/1/1_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "Kadın Sarı 5'Li Kolye Paketi 03124004",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34380123/56190924/1/1_org.jpg",
    price: "92,94 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 2 Taşlı Zincirli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210120/0/55324681/132098902/0/0_org.jpg",
    price: "187 TL",
    firm: "Sümer Telkari",
    name: "Dorissa Altın Yaldızlı Rose Gümüş Küpe 5147",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200811/9/7770638/81041078/1/1_org.jpg",
    price: "25,81 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Gold Beach Minik Pullu Toplu Zincir Halhal 4'lü",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20210323/9/74551227/106312542/1/1_org.jpg",
    price: "59,80 TL",
    firm: "jackferrero",
    name: "Kombin Kadın Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201214/17/38436219/87558876/1/1_org.jpg",
    price: "142,57 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Yapraklı 5li Gold Bileklik Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34384207/15263051/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Taç Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/6/51450347/101679657/1/1_org.jpg",
    price: "935 TL",
    firm: "Sümer Telkari",
    name: "Altın Yaldızlı Taşlı Gurmet Gümüş Bileklik 3477",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210318/13/73353787/154703507/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Sortie Aksesuar",
    name: "Kadın Gümüş Mavi Boncuklu Kombin Bileklik 4'lü 004",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20210401/14/76998831/147978661/1/1_org.jpg",
    price: "399,97 TL",
    firm: "Ventino Silver",
    name: "Yılan Zincir Gümüş Erkek Kolye Vek-3075",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/15/81351454/67507345/1/1_org.jpg",
    price: "398 TL",
    firm: "İn Dubai Silver",
    name: "Erkek Figaro 925 Ayar Gümüş Zincir 55 cm Dbse2012",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/16/80330239/66317272/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Nereze",
    name: "925 Ayar Mistik Topaz Taşlı Kedi Kolye Kadın Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201026/10/19659956/97554059/1/1_org_zoom.jpeg",
    price: "234,86 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı  Yaşam Çiçeği Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210106/10/47677533/126533471/1/1_org_zoom.jpeg",
    price: "111,63 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı 18 Mm Renkli Doricalı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201119/6/28927350/75323824/1/1_org.jpg",
    price: "145 TL",
    firm: "İzla Design",
    name: "Kadın Çubuk Model Zirkon Taşlı Rose Kaplama Gümüş İtalyan Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20210320/20/74026304/55935612/1/1_org.jpg",
    price: "8,40 TL",
    firm: "Baykuş",
    name: "70 cm Uzun Bar Erkek Dikdörtgen Çelik Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/1/78810456/157275989/1/1_org.jpg",
    price: "59,80 TL",
    firm: "jackferrero",
    name:
      "Kadın Gold Renk 2 Li Kombin Bileklik Seti Renk Atmaz Altın Kaplama Zirkon Taş",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210315/19/71560503/152598640/0/0_org.jpg",
    price: "66,98 TL",
    firm: "Pak kuyumculuk",
    name: "Dikey Isimli Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210104/22/45769990/74115350/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Yıldız Modeli Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200529/18/1886590/72257812/1/1_org.jpg",
    price: "132,60 TL",
    firm: "Mai Silver",
    name: "Kadın 925 Beyaz Taşlı Damla Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34387847/20382267/1/1_org.jpg",
    price: "142 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose 19 Mm Şarnel Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201013/16/15529784/22174547/1/1_org_zoom.jpeg",
    price: "124,91 TL",
    firm: "İzla Design",
    name:
      "Kadın Kelebek Model Zirkon Taşlı Rose Kaplama Gümüş Bileklik İZLASLVR00368",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34378010/18037358/1/1_org.jpg",
    price: "111,98 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 25 Mm Rose Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/3bd5db11/57734962/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş  Üç Boyutlu A Harf Kolye Altın Kaplama",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34380619/18037321/1/1_org.jpg",
    price: "98,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Mineli Çocuk Küpesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210409/4/78817568/137991469/1/1_org.jpg",
    price: "99 TL",
    firm: "takı tak silver",
    name:
      "Kadın Gümüş Tamamı Saf Orjinal 925 Ayar Zirkon Taşlı Balon Kız Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210302/4/67835755/102094838/1/1_org.jpg",
    price: "52,39 TL",
    firm: "KİLİG",
    name: "Kadın 3'lü Gold Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty90/product/media/images/20210403/17/77471089/138446453/1/1_org.jpg",
    price: "59,70 TL",
    firm: "jackferrero",
    name: "Özel Tasarım Erkek Deri Ve Doğaltaş Bileklik Kombin",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/10/77392040/116246274/1/1_org.jpg",
    price: "25,70 TL",
    firm: "Fildişi Aksesuar",
    name: "Antik Gümüş Kaplama Ejderha Şekilli El Yapımı Ayarlanabilir Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201207/17/35681839/65713915/1/1_org.jpg",
    price: "10 TL",
    firm: "hateko",
    name: "Doğal Hematit Taşlı Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210114/9/53065220/57937937/1/1_org.jpg",
    price: "84,86 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Altın Üçlü Nazar Boncuklu Altın Kaplama Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201024/0/19253270/97009240/0/0_org.jpg",
    price: "698 TL",
    firm: "BayVog",
    name: "Zirkon Taşlı Rodaj Kaplamalı 925 Ayar Erkek Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210209/15/61479709/77534748/1/1_org.jpg",
    price: "21,59 TL",
    firm: "X-Lady Accessories",
    name:
      "Kadın Üçlü Şeri Zincir Kolye Gold Kaplama Katmanlı Kolye Choker Uzun Çoklu Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210323/18/74746274/104948176/1/1_org.jpg",
    price: "19,99 TL",
    firm: "Lal",
    name:
      "Gümüş Kaplama Ikili Kombin Kolye Yıldız Kolye Ve Blanca Tiffany Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/17/38431631/21239662/1/1_org.jpg",
    price: "118 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Silver Çoklu Yüzük Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210317/0/72758188/69399959/1/1_org.jpg",
    price: "14,98 TL",
    firm: "Bin1Gecem Takı",
    name: "Zirkon Taşlı Paslanmaz Çelik Cartier Bileklik Bilezik 18 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/6/28927953/79004632/1/1_org.jpg",
    price: "42,60 TL",
    firm: "İzla Design",
    name: "Kadın Tek Taş Model Altın Kaplama Gümüş İtalyan Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210303/13/68224301/147388457/1/1_org_zoom.jpeg",
    price: "130 TL",
    firm: "Ninova Silver",
    name: "Ninova Papatya Model Mineli Rose Kaplama Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200613/12/2759109/64624905/1/1_org.jpg",
    price: "134,62 TL",
    firm: "İzla Design",
    name: "Çift Çubuk Model Altın Kaplama Gümüş Italyan Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/06/9a459db9/57184686/1/1_org.jpg",
    price: "78 TL",
    firm: "Pelin Aksesuar",
    name: "Mavi Beyaz Tasarım Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210127/18/57754465/134963310/1/1_org.jpg",
    price: "166,33 TL",
    firm: "Elika Silver",
    name: "Kadın Rose Mor Zirkon Taşlı Lotus Çiçeği Model Takım Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34384953/18037022/1/1_org.jpg",
    price: "111,98 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 25 Mm Rodyumlu Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200606/18/2370482/73062728/0/0_org.jpg",
    price: "122,50 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Rose Kaplama Zirkon Taşlı Anne Çocuk Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201119/6/28926339/22062577/1/1_org.jpg",
    price: "149 TL",
    firm: "İzla Design",
    name: "Kadın Yassı Model İtalyan Gümüş Bileklik İZLASLVR00301",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/09/f3c8f92e/57647037/1/1_org_zoom.jpeg",
    price: "106,35 TL",
    firm: "İzla Design",
    name: "Kadın Zirkon Taşlı Rose Kaplama Gümüş İtalyan Küpe PKT-TLYSLVR0094",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/2/69594280/149857054/0/0_org.jpg",
    price: "179,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı Zirkon Taşlı Trend Küpe.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/6/28927291/72790531/1/1_org.jpg",
    price: "109 TL",
    firm: "İzla Design",
    name: "Kadın Üç Taş Model Altın Kaplama Gümüş İtalyan Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210331/10/76549786/158378221/1/1_org.jpg",
    price: "59,80 TL",
    firm: "jackferrero",
    name:
      "Kelepçe & Üçlü Taşlı Asansör Gümüş Renk 2 Li Kombin Bileklik Seti Renk Atmaz",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200619/9/3105593/57374790/1/1_org.jpg",
    price: "109,55 TL",
    firm: "Ninova Silver",
    name: "Toplu Model Altın Kaplama Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/19/47397218/81652135/1/1_org.jpg",
    price: "59,92 TL",
    firm: "TAKIŞTIR",
    name: "Kadın Altın Renk Papatya Figürlü Sallantılı Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20210324/23/75052582/157089106/0/0_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "5'li Papatya Uçlu Kolye Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/13/68971141/148934881/1/1_org.jpg",
    price: "24 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Gold Cd Harfli Christian Dio Model Kalın Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210319/17/73707337/76590973/1/1_org.jpg",
    price: "23,13 TL",
    firm: "X-Lady Accessories",
    name: "Kadın Stam Kolye Altın Kaplama",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/6/28926457/57647068/1/1_org.jpg",
    price: "134,62 TL",
    firm: "İzla Design",
    name:
      "Kadın Tilki Kuyruğu Zincir Altın Kaplama Gümüş İtalyan Kolye PKT-TLYSLVR0126",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210115/19/53740427/85114389/1/1_org.jpg",
    price: "122,50 TL",
    firm: "Papatya Silver",
    name: "Mini Gezegen Kolye 14 Ayar Altın Kaplama 925 Ayar Gümüş Uvps100867",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210303/13/68224301/147388463/3/3_org_zoom.jpeg",
    price: "78 TL",
    firm: "Ninova Silver",
    name: "Ninova Baget Zirkon Taşlı Rose Kaplama Gümüş Minimal Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/01/54434e34/20414320/1/1_org_zoom.jpeg",
    price: "282,67 TL",
    firm: "İzla Design",
    name: "Kadın Halka Model Rose Kaplama Gümüş Küpe İZLASLVR00106",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210120/16/55558271/132362075/0/0_org.jpg",
    price: "79,95 TL",
    firm: "Stradivarius",
    name: "4’lü Zincir Kolye Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210108/23/49446466/106201875/1/1_org.jpg",
    price: "56,90 TL",
    firm: "esjewelry",
    name: "Gümüş Baget Taşlı Kadın Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210105/11/46990360/56022418/1/1_org.jpg",
    price: "100 TL",
    firm: "Papatya Silver",
    name: "Gülüm Kolye. Gümüş Altın Kaplama, Mercan Taşlı Kolye.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200905/13/9795188/14626878/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Mistik Topaz Taşlı Mini Yonca Kolye Sgtl8238",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210405/11/a48a91d2/61817889/1/1_org.jpg",
    price: "141 TL",
    firm: "İzla Design",
    name:
      "Kadın Güneş Model Zirkon Taşlı Gold Rengi Gümüş İtalyan Yüzük PKT-TLYSLVR0308",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210209/19/61537422/76656288/1/1_org.jpg",
    price: "28,99 TL",
    firm: "Erdem",
    name: "Erkek Hakiki Deri Bileklik Siyah Renk Manyetik Toka Örgülü Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200505/9/653243/70166033/1/1_org.jpg",
    price: "227 TL",
    firm: "KsrModa",
    name: "Oniks Taşlı 925 Ayar Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/13/78428880/96550478/1/1_org.jpg",
    price: "5 TL",
    firm: "ONEPRETTYWISH",
    name: "Kadın Kırmızı Ip Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34380136/56190936/1/1_org.jpg",
    price: "92,94 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Pırlanta Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210106/10/47677533/126537270/1/1_org_zoom.jpeg",
    price: "95,50 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Mini Yonca Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/18/d928a215/62974392/1/1_org_zoom.jpeg",
    price: "69 TL",
    firm: "İzla Design",
    name: "Kadın Halka Model Turkuaz Tek Taşlı Gümüş Küpe PKT-TLYSLVR0423",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210417/17/80895419/131025045/1/1_org.jpg",
    price: "7,49 TL",
    firm: "Eylülün Takısı",
    name: "Ay Tasarım Vintage Tasarım Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210116/16/53996013/130627143/1/1_org.jpg",
    price: "99,92 TL",
    firm: "TAKIŞTIR",
    name: "Kadın Antrasit Bulut Figürlü İncili Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210402/21/72f6016a/17145700/1/1_org.jpg",
    price: "268,68 TL",
    firm: "Mai Silver",
    name: "Kadın Rose 925 Gümüş Firuze Taşli Damla Kolye MA_KL_1110",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20210102/4/44351657/125722796/0/0_org.jpg",
    price: "151,64 TL",
    firm: "Elika Silver",
    name: "Kadın Taşlı Yonca Model 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/15/84de5352/62032612/1/1_org.jpg",
    price: "122 TL",
    firm: "Pelin Aksesuar",
    name: "Gold Çoklu Bileklik Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210402/16/f0ae4fae/12054314/1/1_org.jpg",
    price: "57,66 TL",
    firm: "Söğütlü Silver",
    name: "Kadın 925 Ayar Gümüş Mini Altın Yaldız Halka Küpe SGTL7312",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210111/10/50802937/128487102/1/1_org.jpg",
    price: "122,50 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Sonsuzluk Kırmızı Gül Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200331/14/796039/67158460/1/1_org_zoom.jpeg",
    price: "79 TL",
    firm: "İzla Design",
    name:
      "Kadın Yıldız Model Altın Kaplama Gümüş Kıkırdak Küpe PKT-TLYSLVR0470",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/02/e8bad977/56268651/1/1_org_zoom.jpeg",
    price: "165,90 TL",
    firm: "Mai Silver",
    name: "Kadın 925 Şans Kolyesi Kolye MA_KL_1451",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/00/51cf9400/59192702/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Baget Taşlı Kolye Sgtl10058Rodaj",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/20/80735121/76689623/1/1_org.jpg",
    price: "9,10 TL",
    firm: "Moda LUKKA",
    name: "Kadın Altın Renkli Nostalji Burgu Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200330/16/722592/65820489/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Nereze",
    name: "925 Ayar Aquamarin Taşlı Yonca Kolye Kadın Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34393443/57895396/1/1_org.jpg",
    price: "92,96 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Nazar Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210203/3/59485405/137167100/1/1_org.jpg",
    price: "29,95 TL",
    firm: "LOTUS GÜMÜŞ",
    name: "Kadın Pembe Altın Akasya Çiçeği Ayarlanabilir 14 K Kaplama Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201202/12/34379902/17231430/1/1_org.jpg",
    price: "263,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Renkli Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/6/51569049/112092660/1/1_org.jpg",
    price: "51,93 TL",
    firm: "KİLİG",
    name: "2'li Gold Renk Kuzey Yıldızı Earcuff",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20210319/14/73582698/76764001/1/1_org.jpg",
    price: "13,33 TL",
    firm: "The Y Jewelry",
    name: "Mini Kalp Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210109/0/49556173/56022424/1/1_org.jpg",
    price: "105 TL",
    firm: "Papatya Silver",
    name:
      "Kartanesi Gümüş Kolye. Rose Altın Kaplama. Renkli Nano Zirkon Taşlı.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/17/77635528/160455419/0/0_org.jpg",
    price: "59,98 TL",
    firm: "Ervalina",
    name: "12'li Yüzük Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200707/10/3848786/57687067/1/1_org.jpg",
    price: "112,99 TL",
    firm: "Chavin",
    name: "Time Turner Hermione Granger Kum Saati Kolye dt97",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201022/6/18901987/96508124/0/0_org.jpg",
    price: "28,69 TL",
    firm: "X-Lady Accessories",
    name: "Kalın 6mm Sık Aralıklı Yassı Zincir",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200717/11/4675595/77196862/1/1_org.jpg",
    price: "59,95 TL",
    firm: "Stradivarius",
    name: "Kadın Gri 8'Li Küpe Seti 03055005",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/17/50404707/87909667/1/1_org.jpg",
    price: "922 TL",
    firm: "SEMİZ KUYUMCULUK",
    name: "Kadın 14 Ayar Nazar Boncuklu Lotus Çiçeği Altın Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200603/16/2213056/72757357/1/1_org.jpg",
    price: "899 TL",
    firm: "Milades",
    name: "Altın Dorika Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210106/11/47691499/117596954/1/1_org.jpg",
    price: "29,95 TL",
    firm: "LOTUS GÜMÜŞ",
    name: "Kadın Yüzük Kelebek Motifli Minimal Ayarlanabilir Ölçü",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210103/1/44607920/125917170/0/0_org.jpg",
    price: "139,90 TL",
    firm: "Dianora Piercing",
    name: "Taşlı Inci Sallantılı Gümüş Tragus Piercing",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201225/12/41944546/123013632/1/1_org.jpg",
    price: "31,57 TL",
    firm: "Salyangoz Company",
    name: "Piercing Topu Kolay Takma Çıkarma Aparatı SLYAP01",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/11/67906109/87425241/1/1_org.jpg",
    price: "99,67 TL",
    firm: "takı tak silver",
    name:
      "Tamamı Saf 925 Ayar Gümüş Altın Kaplama Beyaz Zirkon Taşlı Yılan Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/01/ccc3b1bf/20414305/1/1_org_zoom.jpeg",
    price: "65 TL",
    firm: "İzla Design",
    name: "Kadın Zirkon Taşlı Rose Gümüş Kıkırdak Küpe İZLASLVR00153",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/01/f4dc6d91/20414322/1/1_org_zoom.jpeg",
    price: "50 TL",
    firm: "İzla Design",
    name: "Kadın Tek Taş Model Zirkon Taşlı Gümüş Küpe İZLASLVR00136",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/2/69594148/149856947/0/0_org.jpg",
    price: "179,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Turkuaz Taşlı Trend Küpe.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210308/2/69594105/149856894/0/0_org.jpg",
    price: "179,19 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Zirkon Taşlı Trend Küpe.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210119/15/55197824/61836634/1/1_org.jpg",
    price: "149 TL",
    firm: "Marylebone Silver",
    name: "14 Ayar Altın Kaplama Gümüş Çiçek Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210113/11/52717048/129324184/1/1_org.jpg",
    price: "7,99 TL",
    firm: "Eylülün Takısı",
    name: "Kanca Altın Renk Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/6/50158117/80630150/1/1_org.jpg",
    price: "122,49 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Şans Kolyesi",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/7/28929194/76065772/1/1_org.jpg",
    price: "99 TL",
    firm: "İzla Design",
    name: "Kadın Elips Model Altın Kaplama Gümüş İtalyan Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210328/22/75806021/158181564/0/0_org.jpg",
    price: "165,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 23 Mm Şarnel Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210403/22/e6a718be/21239384/1/1_org.jpg",
    price: "128,29 TL",
    firm: "Pelin Aksesuar",
    name: "Renkli Püsküllü Boncuklu Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/15/58377713/87893944/1/1_org.jpg",
    price: "253,40 TL",
    firm: "İzla Design",
    name: "Kadın Çapraz Model Zümrüt Taşlı Gümüş Otantik Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210105/8/46466323/97554171/1/1_org.jpg",
    price: "503,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Baget Taşlı Üçlü Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34378025/20021036/1/1_org.jpg",
    price: "135,50 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Mix Renkli Taşlı Kelebek Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210403/20/e6831b74/17352786/1/1_org.jpg",
    price: "123,18 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Yıldız Ve Toplu Zincir Bileklik SGTL8850",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/19/f185bb52/66360454/1/1_org.jpg",
    price: "286,25 TL",
    firm: "KsrModa",
    name: "Kaplangözü Taşlı 925 Ayar Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20201209/9/36718895/117675273/1/1_org.jpg",
    price: "59,92 TL",
    firm: "TAKIŞTIR",
    name: "Altın Renk Mavi Boncuk Detaylı Küpe Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/11/46979533/57734958/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "Harf Kolye. Üç Boyutlu D Harfi. Rose Altın Kaplama 925 Ayar Gümüş.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/00/a0f2ca7e/58500104/1/1_org.jpg",
    price: "99,75 TL",
    firm: "MySilvers",
    name: "Çıtır Halka Yüzük Kadın Altın",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/0/58151400/135491921/1/1_org.jpg",
    price: "117,49 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Rose Kaplama Yağmur Bulutu Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20201104/13/22223833/100685318/1/1_org.jpg",
    price: "24,39 TL",
    firm: "Harlofia Jewelry",
    name: "Kadın Altın Kaplama Beyaz Kelebek Kolye Küpe Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/15/79804855/148435404/1/1_org.jpg",
    price: "99,90 TL",
    firm: "ceren gümüş",
    name: "925 Ayar Gümüş Dörtgen Siyah Oniks Taşlı Erkek Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201118/16/28565426/16964877/1/1_org.jpg",
    price: "109,55 TL",
    firm: "Ninova Silver",
    name: "Kadın Siyah Zirkon Taşlı Yonca Model Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200828/15/9022324/59254083/2/2_org_zoom.jpeg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Kadın Üç Boyutlu M Harf Altın Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/20/80735118/76997934/1/1_org.jpg",
    price: "74,97 TL",
    firm: "PETEK AKSESUAR",
    name: "Kurdela Zincir Tarz Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210305/14/69002801/148894693/1/1_org.jpg",
    price: "79,99 TL",
    firm: "Lia Berto",
    name: "Kadın Rose Tinkerbell Su Perisi 925 Ayar Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201123/22/30601375/110596927/1/1_org_zoom.jpeg",
    price: "185,83 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Zirkon Sıra Taşlı Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210311/20/70790129/121949761/1/1_org.jpg",
    price: "59,90 TL",
    firm: "LOTUS GÜMÜŞ",
    name:
      "Unutma Beni Çiçeği Beyaz Taşlı Ayarlanabilir Kadın 14 K Rose Altın Kaplama Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20210401/17/77052700/87636803/1/1_org.jpg",
    price: "19,90 TL",
    firm: "MagicStone",
    name: "Kadın Altın İtalyan Zincirli Kombin Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20201231/14/43989339/8596080/1/1_org.jpg",
    price: "129,97 TL",
    firm: "Argentum Concept",
    name: "Kadın Işıltılı Gümüş Zincir Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34398400/68313648/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Kutup Yıldızı Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210402/16/86a1eda3/13594262/1/1_org.jpg",
    price: "59,92 TL",
    firm: "TAKIŞTIR",
    name: "Göz Figürlü Deri Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200828/18/9029579/57829997/1/1_org.jpg",
    price: "133 TL",
    firm: "Elika Silver",
    name: "Uçan Balon Figürlü Rose Kaplama 925 Ayar Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210117/13/54178184/130826482/0/0_org.jpg",
    price: "145,59 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Gümüş Kar Tanesi Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/10/47677533/126533581/1/1_org_zoom.jpeg",
    price: "123,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Taşlı Anne Ve Çocuk Mutluluk Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210302/11/67898271/129864758/1/1_org.jpg",
    price: "166,68 TL",
    firm: "takı tak silver",
    name:
      "Kadın Tamamı Saf 925 Ayar Gümüş Altın Kaplama Zirkon Taşlı Sonsuzluk Kırmızı Gül Model Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210118/18/54860055/110635903/1/1_org.jpg",
    price: "76,33 TL",
    firm: "Elika Silver",
    name: "Kadın Altın Kaplama Dal Model Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210411/2/79231726/99413005/1/1_org.jpg",
    price: "159,99 TL",
    firm: "Harlofia Jewelry",
    name: "925 Ayar Gümüş Opal Taşlı Güneş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201210/16/37123632/118179609/1/1_org.jpg",
    price: "2.849,90 TL",
    firm: "Güleryüz Altın & Pırlanta",
    name:
      "Kadın Hediyelik Bilezik 6,04 gr  Sıralı Düz Çizgi Model 14 Ayar Altın",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/12/d925855b/58185740/1/1_org_zoom.jpeg",
    price: "7.348 TL",
    firm: "Tuğrul Kuyumculuk",
    name: "16 gr (gram)  Üçlü Adana Burma 22 Ayar Altın Bilezik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210104/10/45355791/80035274/1/1_org.jpg",
    price: "96 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rose Kaktüs Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/01/04cf3991/21985690/1/1_org_zoom.jpeg",
    price: "119 TL",
    firm: "İzla Design",
    name:
      "Kadın Çubuk Model Zirkon Taşlı Rose Kaplama Gümüş Bileklik İZLASLVR00339",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/01/43fafc88/21985734/1/1_org_zoom.jpeg",
    price: "69,49 TL",
    firm: "İzla Design",
    name: "Kadın Çubuk Model Sallantılı Gümüş Küpe İZLASLVR00445",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201120/22/29331747/109002809/0/0_org.jpg",
    price: "280,35 TL",
    firm: "KsrModa",
    name: "Akik Taşlı 925 Ayar Erkek Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/20/58467535/21985834/1/1_org.jpg",
    price: "124,91 TL",
    firm: "İzla Design",
    name: "Mix Taşlı Rose Kaplama Gümüş Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/7/51695040/96564613/1/1_org.jpg",
    price: "42,80 TL",
    firm: "Bess Silver",
    name: "Kadın 925 Ayar Gümüş Iki Sıra Taşlı Rose Halka Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20210331/10/76549804/158408192/1/1_org.jpg",
    price: "59,80 TL",
    firm: "jackferrero",
    name: "Kombin Bileklik Seti 2 li",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/01/3ccf1f02/21985826/1/1_org_zoom.jpeg",
    price: "95 TL",
    firm: "İzla Design",
    name: "Kadın Nazarlık Model Rose Kaplama Gümüş Yüzük PKT-İZLASLVR00265",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/01/77bd8682/33970946/1/1_org.jpg",
    price: "142 TL",
    firm: "Pelin Aksesuar",
    name: "Gold Kristalli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210202/8/59234417/75195078/1/1_org.jpg",
    price: "85,14 TL",
    firm: "MAGNAMİNA",
    name: "Kalp Figürlü Gümüş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/10/35e3280c/57734956/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "Harf Kolye. Üç Boyutlu G Harfi. Rose Altın Kaplama 925 Ayar Gümüş.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/18/47330682/114054850/1/1_org.jpg",
    price: "28,50 TL",
    firm: "aydın takı",
    name: "Zirkon Taşlı Eklem Yüzüğü 4 Lü Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210104/11/45623235/126134453/1/1_org.jpg",
    price: "29 TL",
    firm: "MagicStone",
    name: "Gold Wicker Halkalı Üçlü Kombin Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200805/3/6986605/79955934/0/0_org.jpg",
    price: "122,50 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Zirkon Taşı Gümüş Güneş Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210324/17/74991867/156957911/0/0_org.jpg",
    price: "350 TL",
    firm: "ALTINKÖŞE",
    name: "Altın Küp Kırmızı Ipli Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20210317/0/72772053/69400084/1/1_org.jpg",
    price: "14,98 TL",
    firm: "Bin1Gecem Takı",
    name: "Kadın Zirkon Taşlı Paslanmaz Çelik Cartier Bileklik Bilezik 18 Cm",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210225/15/66924410/62874955/1/1_org.jpg",
    price: "780 TL",
    firm: "Fay Yamaner",
    name: "14 Ayar Altın Tuğralı Ipli Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210328/18/75785305/104183158/1/1_org.jpg",
    price: "8,20 TL",
    firm: "Chance Accessories",
    name: "Kadın Mavi Boncuklu Minik Boncuk Detaylı Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20210330/17/76385653/158837965/1/1_org.jpg",
    price: "109,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Kadın Pembe Nazar Göz Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210104/15/45628294/74115382/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Siyah Taşlı Yıldızı Modeli Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34379565/67090113/1/1_org.jpg",
    price: "166 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Gökkuşağı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200602/21/2130460/72621565/1/1_org.jpg",
    price: "29,90 TL",
    firm: "Nereze",
    name: "Kadın 925 Ayar Gmüş  Turkuaz Minik Deniz Yıldızı Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/01/1aea4bbd/20414297/1/1_org_zoom.jpeg",
    price: "165 TL",
    firm: "İzla Design",
    name: "Kadın Yıldız Model Zirkon Taşlı Rose Gümüş Küpe İZLASLVR00121",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210125/15/57029299/82426811/1/1_org.jpg",
    price: "1.552 TL",
    firm: "SEMİZ KUYUMCULUK",
    name: "14 Ayar Halat Altın Zincir",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210104/17/45604611/67090160/1/1_org.jpg",
    price: "134,38 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Simit Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20201014/11/15676004/93092094/0/0_org.jpg",
    price: "9,88 TL",
    firm: "KOBA",
    name: "Altın Kaplama Nazar Boncuklu Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210116/18/54034929/56268654/1/1_org.jpg",
    price: "142,49 TL",
    firm: "Mai Silver",
    name: "Kadın 925 Sevgili Kolye MA_KL_1442",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210118/13/54434412/18651460/1/1_org.jpg",
    price: "60 TL",
    firm: "New Obsessions",
    name: "Şeri Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210103/19/44890954/126023072/0/0_org.jpg",
    price: "8,45 TL",
    firm: "KOBA",
    name: "Unisex Nazar Boncuklu Zincir Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20201017/6/16594279/94227006/0/0_org.jpg",
    price: "58 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Rose Altın Kaplama Gümüş Lotus Çiçeği Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200331/17/816440/67195658/1/1_org_zoom.jpeg",
    price: "134,62 TL",
    firm: "İzla Design",
    name: "Kadın Çanta Model Gümüş İtalyan Küpe PKT-TLYSLVR0925",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210117/13/54178563/130826783/0/0_org.jpg",
    price: "199,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Kayan Yıldız Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/02/cd749be8/44024246/1/1_org.jpg",
    price: "155,76 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Star Küpe SGTL9829",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/01/0feb19fe/21985823/1/1_org_zoom.jpeg",
    price: "109 TL",
    firm: "İzla Design",
    name:
      "Kadın Yaprak Model Zirkon Taşlı Rose Kaplama Gümüş İtalyan Yüzük PKT-İZLASLVR00260",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210113/5/52554738/129212880/1/1_org.jpg",
    price: "39,90 TL",
    firm: "MadameConcept",
    name: "Kadın Mavi Çiçek Figür Kuzey Yıldızlı Gümüş Kaplama Otantik Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210402/23/fd576e94/17343915/1/1_org.jpg",
    price: "99,15 TL",
    firm: "Ninova Silver",
    name: "Zirkon Taşlı Yonca Model Gümüş Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210305/18/69114502/149169414/0/0_org.jpg",
    price: "25,83 TL",
    firm: "X-Lady Accessories",
    name:
      "Çelik Şavin Figaro Erkek Veya Kadın Bileklik Ve Kolye Zincir Seti Altın Kaplama",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210201/14/59055625/60935402/1/1_org.jpg",
    price: "152,90 TL",
    firm: "İpek Kehribar",
    name: "Unisex Bebek Sarı Baltık Diş Limon Sertifikalı Kehribar Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210115/14/53641579/84488662/1/1_org.jpg",
    price: "87,99 TL",
    firm: "BY BARUN SİLVER",
    name: "Beyaz Taşlı Yıldız Gümüş Küpe-rose",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210105/13/47092613/77817591/1/1_org.jpg",
    price: "52,50 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Taşlı Gümüş Kıkırdak Yonca Küpe Rose Altın",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/02/0aefa7da/13827520/1/1_org.jpg",
    price: "204,52 TL",
    firm: "SUNSHINE",
    name: "925 Ayar Gümüş Kolye SK0826",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/10/47677533/126533352/1/1_org_zoom.jpeg",
    price: "142,79 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Altın Yaldızlı Pullu Gurmet  Zincir.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/15/5e200472/62032618/1/1_org.jpg",
    price: "142 TL",
    firm: "Pelin Aksesuar",
    name: "Silver Çoklu Bileklik Seti",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/6/28927418/75323793/1/1_org.jpg",
    price: "124,91 TL",
    firm: "İzla Design",
    name: "Kadın Ezme Barlı Model Altın Kaplama Gümüş İtalyan Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/6/51447816/74857345/1/1_org.jpg",
    price: "374 TL",
    firm: "Sümer Telkari",
    name: "Dorissa Rodyumlu Gümüş Sarma Bilezik 3331",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/7/51693634/87388150/1/1_org.jpg",
    price: "83 TL",
    firm: "Elika Silver",
    name: "14k Rose Altın Kaplama Pembe Zirkon Taşlı Lotus Çiçeği Kadın Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/9/46505858/89627609/1/1_org.jpg",
    price: "96,79 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 18 Mm Doricalı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/7/51701104/112612532/1/1_org.jpg",
    price: "49,99 TL",
    firm: "KİLİG",
    name: "Kadın Gold Renk 2'li Cuff (Kıkırdak Küpe)",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200831/17/9236445/59254113/1/1_org.jpg",
    price: "189,60 TL",
    firm: "Elika Silver",
    name: "Kadın Tam Tur Gümüş 925 Ayar Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210401/17/77048565/74402458/1/1_org.jpg",
    price: "8 TL",
    firm: "The Y Jewelry",
    name: "Kadın Altın Renk Burgu Zincir Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34380705/20021097/1/1_org.jpg",
    price: "123,18 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Markazit Ve Safir Taşlı Damla Modeli Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210130/22/58730520/136197873/1/1_org.jpg",
    price: "165,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Zirkon Taşlı Yuvarlak Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201202/12/34380003/20021037/1/1_org.jpg",
    price: "119,34 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 12 Mm Rose Zirkon Taşlı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210304/0/68506595/148232502/0/0_org.jpg",
    price: "95 TL",
    firm: "Efsann",
    name: "Shakira Gümüş Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210106/10/47677533/126537195/1/1_org_zoom.jpeg",
    price: "123,33 TL",
    firm: "Söğütlü Silver",
    name: "Kadın Gümüş Altın Yaldızlı 16 mm Şarnel Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210403/2/77357779/156450153/1/1_org.jpg",
    price: "59,90 TL",
    firm: "jackferrero",
    name: "Kombin Kolye Altın Kaplama Renk Atmaz Prinç",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210207/2/60565937/116626945/1/1_org.jpg",
    price: "86,50 TL",
    firm: "Natural Ambers",
    name: "Kehribar Bebek Diş Nazar Ve Sağlık Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20201216/5/38840165/119728500/0/0_org.jpg",
    price: "29,80 TL",
    firm: "LOTUS GÜMÜŞ",
    name:
      "14k Rose Altın Kaplama Kristal Kar Tanesi Motifli Zirkon Taşlı Kadın Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/6/28926389/62974445/1/1_org.jpg",
    price: "93,45 TL",
    firm: "İzla Design",
    name:
      "Kadın Tilki Kuyruğu Model Rose Kaplama Gümüş İtalyan Bileklik PKT-TLYSLVR0411",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201210/12/37044259/118046971/1/1_org_zoom.jpeg",
    price: "459,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş rose siyah taşlı kuyruklu yıldız kolye kupe ve yüzük üçlü set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/17/77635485/160455364/0/0_org.jpg",
    price: "59,98 TL",
    firm: "Ervalina",
    name: "12'li Yüzük Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210122/9/56028633/132913828/1/1_org.jpg",
    price: "66,33 TL",
    firm: "Elika Silver",
    name: "Kadın Kare Model Kıkırdak Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/15/58377828/87893987/1/1_org.jpg",
    price: "99 TL",
    firm: "İzla Design",
    name: "Kadın Kaktüs Model Zümrüt Taşlı Rose Kaplama Gümüş İtalyan Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34380422/57895369/1/1_org.jpg",
    price: "171,43 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Ayarlamalı Rodyumlu Zincir Modeli Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201214/17/38429916/33757446/1/1_org.jpg",
    price: "103 TL",
    firm: "Pelin Aksesuar",
    name: "Kadın Mavi Turuncu Denizkabuklu Çiftli Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20210318/0/73191242/125770507/1/1_org.jpg",
    price: "28,40 TL",
    firm: "The Y Jewelry",
    name: "Amour Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/01/6011834d/20414340/1/1_org_zoom.jpeg",
    price: "140 TL",
    firm: "İzla Design",
    name: "Kadın Safir Taşlı Zincir Model Rose Gümüş Yüzük İZLASLVR00048",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/17/45901827/89627608/1/1_org.jpg",
    price: "96,79 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş 18 Mm Doricalı Halka Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210303/22/68425973/148046279/0/0_org.jpg",
    price: "75 TL",
    firm: "GELİN ÜRÜNLERİ",
    name: "Damla Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/07/62e80fc4/61216650/1/1_org.jpg",
    price: "142,50 TL",
    firm: "Papatya Silver",
    name: "925 Ayar Gümüş Kaplumbağa Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210109/0/49530994/56022442/1/1_org.jpg",
    price: "105 TL",
    firm: "Papatya Silver",
    name: "Mavi Taşlı Dorica Kolye. Rose Altın Kaplama 925 Ayar Gümüş Kolye.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210118/13/54432812/131087724/1/1_org.jpg",
    price: "550 TL",
    firm: "Yenigün Kuyumculuk",
    name: "Siyah Taşlı Model Ipli 14 Ayar Altın Bileklik",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210122/15/56124224/100029039/1/1_org.jpg",
    price: "79,80 TL",
    firm: "Toms Jewelry",
    name: "Erkek Siyah Deri Bileklik Tmj11129-1229-b",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200415/10/1871489/68736558/1/1_org_zoom.jpeg",
    price: "165 TL",
    firm: "İzla Design",
    name:
      "Kadın Sonsuzluk ve Kelebek Model Rose Kaplama Gümüş İtalyan Kolye PKT-TLYSLVR0657",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210120/10/55404665/132177317/1/1_org.jpg",
    price: "132,60 TL",
    firm: "Elika Silver",
    name:
      "Sallantılı Dalgalı Tektaş Küpe Nano Zirkon Taşlı Rose Gold Kaplama 925 Ayar Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/13/52074833/126486235/1/1_org.jpg",
    price: "59,92 TL",
    firm: "TAKIŞTIR",
    name: "Altın Renk Metal Küpe (çift)",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200401/13/858485/67292327/1/1_org.jpg",
    price: "10.200 TL",
    firm: "BİLEZİKHANE",
    name: "22,00 Gram Üçlü Adana Burma Bilezik 22 Ayar Altın",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/01/434e6ba8/18820977/1/1_org_zoom.jpeg",
    price: "99 TL",
    firm: "Ninova Silver",
    name: "Kadın Nazarlık Model Zirkon Taşlı Gümüş Bileklik NNVSLVR02895",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/01/f839b82e/21985711/1/1_org_zoom.jpeg",
    price: "151,54 TL",
    firm: "İzla Design",
    name: "Kadın Baget Taşlı İtalyan Model Gümüş Küpe İZLASLVR00386",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20210328/22/75807568/158182811/0/0_org.jpg",
    price: "734,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Baget Taşlı Dörtlü Set",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34377999/16737854/1/1_org.jpg",
    price: "96,49 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Mini Papatya Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210105/14/47169247/97554156/1/1_org.jpg",
    price: "119,99 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Klipsli Kiraz Küpe",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210330/12/76245020/158659630/1/1_org_zoom.jpeg",
    price: "99 TL",
    firm: "Ninova Silver",
    name: "Ninova Sevgi Sarılma Model Rose Kaplama Gümüş Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200916/0/10790624/86717841/0/0_org.jpg",
    price: "73,32 TL",
    firm: "Eyya Accessories",
    name:
      "3 Lü Bileklik Seti Kaplan Gözü, Hematit, Deri Bileklik Doğal Taş Bileklik 10001",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/12/77810042/160708384/1/1_org.jpg",
    price: "47 TL",
    firm: "BASENCHIC",
    name: "Kadın Roma Rakamlı Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210105/0/46026238/22389518/1/1_org.jpg",
    price: "84,40 TL",
    firm: "Söğütlü Silver",
    name: "Gümüş Rodyumlu Top Top Halhal",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210312/11/70874197/69155192/1/1_org.jpg",
    price: "26,91 TL",
    firm: "Lal",
    name: "Kadın Gold Kaplama Üçlü Kombin Zincir Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210406/07/75adeb68/64692378/1/1_org.jpg",
    price: "109 TL",
    firm: "İzla Design",
    name: "Sarmaşık Model Mineli Altın Kaplama Gümüş Italyan Yüzük",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210122/17/56177326/133054793/1/1_org.jpg",
    price: "83 TL",
    firm: "Elika Silver",
    name: "Kadın Altın Kaplama Taşlı Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/04/39f277cf/57734953/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "Harf Kolye. Üç Boyutlu B Harfi. Rose Altın Kaplama 925 Ayar Gümüş.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/7ffbfccc/57735001/1/1_org.jpg",
    price: "115 TL",
    firm: "Papatya Silver",
    name: "Harf Kolye. Üç Boyutlu K Harfi. Rose Altın Kaplama 925 Ayar Gümüş.",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210114/16/53266641/129828910/1/1_org.jpg",
    price: "76,33 TL",
    firm: "Elika Silver",
    name: "Kadın Rose Kaplama Mor Zirkon Taşlı Lotus Çiçeği Model Kolye",
  },
  {
    category: "taki",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210224/14/66538148/145578874/1/1_org.jpg",
    price: "8,20 TL",
    firm: "Eylülün Takısı",
    name: "Kadın Gold Renk Üç Boy Tasarım Küpe",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201012/16/15365151/91131730/1/1_org.jpg",
    price: "3.124 TL",
    firm: "Apple",
    name: "iPad 8. Nesil 10.2'' Wi-Fi 32GB Uzay Grisi MYL92TU/A",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201022/11/18957641/15436312/1/1_org.jpg",
    price: "94,65 TL",
    firm: "Xiaomi",
    name: "Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200528/10/1807651/56982672/1/1_org.jpg",
    price: "973 TL",
    firm: "Samsung",
    name: "Galaxy Tab A 8 SM-T290 32GB Tablet Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20201105/2/22595195/101193178/0/0_org.jpg",
    price: "194,90 TL",
    firm: "Rampage",
    name: "Alquist Sn-r10 Siyah 3,5mm Rgb Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201026/11/19669361/12981920/1/1_org.jpg",
    price: "220 TL",
    firm: "SanDisk",
    name: "iXpand Mini 64GB iPhone USB Bellek SDIX40N-064G-GN6NN",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210417/22/80937491/76773625/1/1_org.jpg",
    price: "139 TL",
    firm: "Kensa",
    name: "Galıo 64 gb Iphone Uyumlu Otg Flash Bellek",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210311/14/70706749/92963858/1/1_org.jpg",
    price: "1.499 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A7 Sm-t500 32 Gb 10.4" Tablet Gri',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201026/11/19669729/11905659/1/1_org.jpg",
    price: "325,26 TL",
    firm: "SanDisk",
    name: "iXpand Mini 128GB iPhone USB Bellek SDIX40N-128G-GN6NE",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/7/51605249/70105142/1/1_org.jpg",
    price: "2.363,19 TL",
    firm: "Samsung",
    name: 'Galaxy Tab S6 Lite Sm-p610 64gb 10.4" Tablet - Gök Mavisi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20201019/14/17349496/91067801/1/1_org.jpg",
    price: "4.047 TL",
    firm: "Apple",
    name: 'iPad 8. Nesil 128 GB 10.2" WiFi Tablet - MYLD2TU/A',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210325/17/75284672/157455102/0/0_org.jpg",
    price: "7.999 TL",
    firm: "ASUS",
    name:
      "Tuf Gaming Fx706lı-hx175 I5-10300h 8gb Ram 512gb Ssd 4gb Gtx1650ti 17.3 Fhd 144hz",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty17/product/media/images/20201022/11/18957571/63938321/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Xiaomi",
    name:
      "Mi Wifi Pro Sinyal Yakınlaştırıcı Türkiye Uyumlu Global Versiyon 300 Mbps Mı-wıfı-pro",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/05/696184db/56982671/1/1_org.jpg",
    price: "977 TL",
    firm: "Samsung",
    name: "Galaxy Tab A 8 SM-T290 32GB Tablet Gümüş",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210111/17/51066109/13324883/2/2_org.jpg",
    price: "399 TL",
    firm: "Toshiba",
    name: "Canvio Basic 1 TB HDTB410EK3AA 2.5 Inç Usb 3.0 Taşınabilir Disk",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/20/6aeb782e/59633709/1/1_org.jpg",
    price: "224 TL",
    firm: "Samsung",
    name: "M3 500 Gb Usb 3.0 Taşınabilir Harici Harddisk",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210322/14/74341899/68234805/1/1_org.jpg",
    price: "82 TL",
    firm: "Gate",
    name:
      "Charge 3 Bluetooth Hoparlör Speaker Wireless Ses Bombası Ekstra Bass",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210317/20/73154749/12905998/1/1_org.jpg",
    price: "199 TL",
    firm: "logitech",
    name: "G300s 910-004346s Usb Optik Gaming Oyun Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210422/10/82046060/13470768/1/1_org.jpg",
    price: "458 TL",
    firm: "Reeder",
    name: "M7 Go 8gb 7 -2019",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210418/14/81053373/79361650/1/1_org.jpg",
    price: "19,90 TL",
    firm: "POLYGOLD",
    name:
      "Işıklı Mini Taşınabilir Bluetooth Hoparlör Kablosuz Speaker Ses Bombası Şarjlı Mp3 Çalar Player",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210311/15/70727341/57718000/1/1_org.jpg",
    price: "1.063 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A SM-T297 8" 32GB 4G Tablet Siyah',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/7/79688523/20757486/1/1_org.jpg",
    price: "59 TL",
    firm: "EMC",
    name: "Music Bulb Bluetooth Hoparlör Akıllı Led Ampul Lamba",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210323/8/74542315/79863626/1/1_org.jpg",
    price: "205,99 TL",
    firm: "Rampage",
    name: "Rm-k33 Tracer 7,1 Rgb Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210327/22/75732288/59196147/1/1_org.jpg",
    price: "24,99 TL",
    firm: "Cyber",
    name: "Razer Goliathus Mousepad 70x30 Cm",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201119/9/28939645/108738871/1/1_org.jpg",
    price: "99,99 TL",
    firm: "FRISBY",
    name:
      "Gx-20 Pro 10000 Dpı Makrolu Rgb Işıklı Profesyonel Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210422/12/82095378/79370278/1/1_org.jpg",
    price: "193,81 TL",
    firm: "logitech",
    name: "G102 Lightsync Siyah Optik Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20201103/12/21657273/69362532/1/1_org.jpg",
    price: "409,90 TL",
    firm: "Rampage",
    name:
      "Rm-k60 Drop Plus All In One Usb 7,1 Typ-c ve 3.5 mm Çıkışlı Surround Gaming Oyuncu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210227/11/67325744/60098601/1/1_org.jpg",
    price: "140 TL",
    firm: "Fantech",
    name: "Eg-2 Kulak Için 3,5mm Mobil Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20210316/11/72024712/153000852/0/0_org.jpg",
    price: "499,90 TL",
    firm: "Türksit",
    name: "Asos Oyuncu Koltuğu Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/16/78466240/57141473/1/1_org.jpg",
    price: "62,49 TL",
    firm: "TG",
    name:
      "T&g Bluetooth Hoparlör Kablosuz Taşınabilir Ses Bombası Extra Bass 0731698635891",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210311/11/70623017/92646820/1/1_org.jpg",
    price: "1.498 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A7 SM-T500 32 GB 10.4" Tablet Altın',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210115/20/53759916/130388401/0/0_org.jpg",
    price: "3.789 TL",
    firm: "HP",
    name:
      "15S-FQ2045NT Intel Core i3 1115G4 4 GB 256 GB SSD 15.6 Freedos Dizüstü Bilgisayar 2N2N8EA",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210304/12/68642497/75221877/1/1_org.jpg",
    price: "139,45 TL",
    firm: "Samsung",
    name:
      "EVO Plus 128GB 100MB/s microSDXC Kart - MB-MC128HA/TR - 2020 Versiyon",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200625/16/3498386/75325696/1/1_org.jpg",
    price: "139,99 TL",
    firm: "Rampage",
    name: "Smx-r27 Voyager 7200 Dpı Rgb Oyuncu Mouse Gaming Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201208/19/36561056/117476776/0/0_org.jpg",
    price: "530 TL",
    firm: "Hometech",
    name: "Alfa 7lm 2gb 32 gb Ips Ekran Eba Tv+zoom Destekli Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/7/51667731/70098090/1/1_org.jpg",
    price: "2.366 TL",
    firm: "Samsung",
    name: 'Galaxy Tab S6 Lite SM-P610 64GB 10.4" Tablet - Dağ Grisi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210312/14/70928372/70105141/1/1_org.jpg",
    price: "2.385,98 TL",
    firm: "Samsung",
    name: 'Galaxy Tab S6 Lite Sm-p610 64gb 10.4" Tablet - Gül Kurusu',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210327/0/75557776/157842007/0/0_org.jpg",
    price: "129,90 TL",
    firm: "Rampage",
    name: "Spear 7200 Dpı Rgb Ledli Makrolu Gaming Oyuncu Mouse Beyaz",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210331/9/76512006/141833450/1/1_org.jpg",
    price: "83,39 TL",
    firm: "XTRIKE ME",
    name: "Gm-512 Rgb 6400dpi Hafif Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/8/51806224/103136292/1/1_org.jpg",
    price: "5.700 TL",
    firm: "Apple",
    name: "Ipad Air 10.9 Inç Wi-fi 64gb Gök Mavisi Myfq2tu/a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210322/10/74258370/114215996/1/1_org.jpg",
    price: "1.788 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A7 Sm-t500 64 Gb 10.4" Tablet Dark Grey',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210111/20/51097608/117849130/1/1_org.jpg",
    price: "144,90 TL",
    firm: "Rampage",
    name: "K29 Thunder Mikrofonlu Gaming Oyuncu Kulaklık Işıklı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/11/4ce97543/17816445/1/1_org.jpg",
    price: "1.587 TL",
    firm: "Samsung",
    name: "970 EVO Plus 1TB 3400MB/2500MB/s M2 SSD Disk - MZ-V7S1T0BW",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/0/49559938/12906167/1/1_org.jpg",
    price: "288,49 TL",
    firm: "Kingston",
    name: "A400 Ssd 240gb 500mb-350mb/s Sata3 Ssd (Sa400s37/240g)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210323/13/74654953/80255650/1/1_org.jpg",
    price: "116,90 TL",
    firm: "FRISBY",
    name:
      "Fnc-5230st V2 4 Adet Fanlı Lcd Kontrol Panelli Pro Standlı Notebook Soğutucu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210223/13/66166014/145055035/1/1_org.jpg",
    price: "9.499 TL",
    firm: "ASUS",
    name:
      "Tuf Gamıng Fx506lu-hn053 I5-10300h 8gb Ddr4 1tb Hdd + 256gb Ssd Gtx1660tı 6gb 15.6 144hz Fdos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210216/10/63187748/141345918/1/1_org.jpg",
    price: "7.559 TL",
    firm: "Casper",
    name:
      'Nirvana X400.1065-bv00x-s-f Intel 10.nesil I7-1065g7 16gb Ram 500gb Nvme Ssd Freedos 14" Fhd',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20210103/16/44783837/80939741/1/1_org.jpg",
    price: "3.919 TL",
    firm: "HP",
    name:
      '1s7z7ea 15-da2096nt Intel Core Cı3-10110u 8gb 256gb Ob 15.6 "free Dos',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210201/13/59029423/13034709/2/2_org.jpg",
    price: "368 TL",
    firm: "logitech",
    name: "G213 Prodigy Rgb Oyuncu Klavyesi 920-008094",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201012/16/15365316/91131731/1/1_org.jpg",
    price: "3.124 TL",
    firm: "Apple",
    name: "iPad 8. Nesil 10.2'' Wi-Fi 32GB Gümüş MYLA2TU/A",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210316/10/71997271/126921987/1/1_org.jpg",
    price: "149,90 TL",
    firm: "Katsuta",
    name: "T4-9009 Led Işıklı Mikrofonlu Usb Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/02/27eb16c3/66347014/1/1_org.jpg",
    price: "264,90 TL",
    firm: "GamePower",
    name: "Medusa Rainbow Usb 7.1 Profesyonel Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/14/78198283/92654882/1/1_org.jpg",
    price: "1.536 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A7 SM-T500 32 GB 10.4" Tablet Gümüş',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20201015/23/16271760/86155150/1/1_org.jpg",
    price: "473 TL",
    firm: "HP",
    name: "Deskjet 2710 All-in-one Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210127/13/57647814/75752256/3/3_org.jpg",
    price: "214,90 TL",
    firm: "ZyXEL",
    name: "VMG1312-T20B VDSL/ADSL 300Mbps Kablosuz 4-Port Modem",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210322/0/74172931/122057088/1/1_org.jpg",
    price: "6.259 TL",
    firm: "LENOVO",
    name:
      'V15 Intel Core I5 1035g1 12gb 256gb Ssd Mx330 Freedos 15.6" Fhd Taşınabilir Bilgisayar 82c500nntx',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210403/23/ef181e49/11943127/1/1_org.jpg",
    price: "369,90 TL",
    firm: "WD",
    name: "Elements 1TB 2.5' USB 3.0 Taşınabilir Disk WDBUZG0010BBK-WESN",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210215/16/62871006/103043130/1/1_org.jpg",
    price: "229,90 TL",
    firm: "ZENON",
    name: 'Veikk S640 6 X 4" 8192 Levels 5080 Lpı Grafik Tablet + Kalem',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200717/15/4932824/65392866/6/6_org.jpg",
    price: "225,67 TL",
    firm: "GamePower",
    name: "Warlock Compact Kırmızı Switch Mekanik Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/19/65040443/143556539/0/0_org.jpg",
    price: "259 TL",
    firm: "DEHALİMİTED",
    name:
      "Mikrofonlu Işık Efektli Usb/sd Kart Ve Aux Girişli Şarjlı Bluetooth Karaoke Speaker Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210118/17/54821364/120098458/1/1_org.jpg",
    price: "52,90 TL",
    firm: "Urban Sound",
    name: "Su Geçirmez Mini Bluetooth Duş Hoparlörü (Mavi) Dh-195",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200404/2/1133404/65767946/1/1_org_zoom.jpeg",
    price: "1.486,65 TL",
    firm: "XDrive",
    name:
      "15'Li Profesyonel Oyun | Oyuncu Koltuğu Bilgisayar Koltuğu Kırmızı/Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/11/81248825/148154120/1/1_org.jpg",
    price: "4.899 TL",
    firm: "Dell",
    name:
      'Inspiron 15 3505-fbr53w82c Amd Ryzen 5 3500u 8gb 256gb Ssd 15.6" Fhd Windows 10 Home',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200518/10/1400625/57538784/1/1_org.jpg",
    price: "159 TL",
    firm: "Samsung",
    name: 'M3 Harici Taşınabilir Disk 320 GB 2.5" m3',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200512/9/1002286/65394246/1/1_org.jpg",
    price: "225,67 TL",
    firm: "GamePower",
    name: "Warlock Compact Mavi Switch Mekanik Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210303/11/68208659/88940633/1/1_org.jpg",
    price: "455 TL",
    firm: "Reiss",
    name: "Audio Rs-m6px 16 Cm Midrange Speaker 1 Takım / 2 Adettir",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210209/10/61363953/59471058/1/1_org.jpg",
    price: "89,99 TL",
    firm: "iDock",
    name: "Katlanır Aluminyum Macbook Laptop Bilgisayar Standı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/22/52363476/15430109/2/2_org.jpg",
    price: "699 TL",
    firm: "Ledger",
    name: "Nano S Bitcoin Cüzdanı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200717/14/4698489/18509911/1/1_org.jpg",
    price: "225 TL",
    firm: "Samsung",
    name: "M3 500GB 2.5' USB 3.0 Taşınabilir Disk (STSHX-M500TCB)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201012/16/15365245/91131727/1/1_org.jpg",
    price: "3.124 TL",
    firm: "Apple",
    name: "iPad 8. Nesil 10.2'' Wi-Fi 32GB Altın MYLC2TU/A",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/05/bf1eb3c3/60781058/1/1_org.jpg",
    price: "1.198 TL",
    firm: "LENOVO",
    name:
      'Lenovo Tab M10 HD TB-X505F 32GB 10.1" IPS Wifi Tablet - Siyah ZA4G0072TR',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210411/13/79258009/21333813/1/1_org.jpg",
    price: "150 TL",
    firm: "Meier",
    name: "Bluetoothlu Kumandalı Usb Nostalji Radyo Tfcard",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200926/8/12027528/11943124/1/1_org.jpg",
    price: "525 TL",
    firm: "WD",
    name:
      "2TB Elements Taşınabilir Harici Hard Disk - USB 3.0 - WDBU6Y0020BBK-WESN",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201024/5/19275320/76688844/1/1_org.jpg",
    price: "5.162,01 TL",
    firm: "meenjet",
    name: "M8 Inkjet Türkçe Kodlama Makinesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210322/18/74408338/64804963/1/1_org.jpg",
    price: "779 TL",
    firm: "Canon",
    name: "Inkjet E4240 Pıxma Wı-fı Yazıcı-tar-fot-fax",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210130/16/58663889/57009690/1/1_org.jpg",
    price: "119 TL",
    firm: "TP-LINK",
    name:
      "TL-WA854RE 300 Mbps N Kablosuz Wall Plug Kolay Kurulumlu Evrensel Menzil Genişletici",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210330/18/76394498/83649518/1/1_org.jpg",
    price: "519 TL",
    firm: "HP",
    name: "DeskJet 2721 Fotokopi + Tarayıcı + Wi-Fi + Airprint Yazıcı 7FR54B",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty55/product/media/images/20210112/13/52069221/128856204/1/1_org.jpg",
    price: "119,99 TL",
    firm: "Teknonet",
    name: "Led Işıklı Klavye&mouse Oyuncu Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210303/16/68345251/63835716/1/1_org.jpg",
    price: "64,99 TL",
    firm: "MASTEK",
    name: "Işıklı Klavye,oyuncu Klavye Mouse Set 7 Farklı Led Renkli Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/18/81401683/165439055/1/1_org.jpg",
    price: "550 TL",
    firm: "HP",
    name: "203x T6b80a Orjinal Sarı Yazıcı Toneri 2.500 Sayfa Cf542x",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210406/9/78065281/73429891/1/1_org.jpg",
    price: "134,50 TL",
    firm: "EPSON",
    name: "103 Orjinal 4 Renk Mürekkep Seti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20201225/17/42098641/123202896/1/1_org.jpg",
    price: "7.699 TL",
    firm: "MONSTER",
    name:
      "Abra A5 V16.6.5 Intel Core I5 10200h 8gb 250ssd Gtx1650ti Freedos 15.6'' 120hz Ips Fhd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20201006/0/13534959/90716137/0/0_org.jpg",
    price: "3.799 TL",
    firm: "ASUS",
    name: 'D509da-ej887 Amd Ryzen 3 3250u 4gb 256gb Ssd Freedos 15.6" Fhd',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/13/78429683/59104100/1/1_org.jpg",
    price: "120 TL",
    firm: "Everton",
    name: "301 Ahşap/kahve Usb-tf Bluetooth 3 Band Klasik Radyo",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210331/17/76736074/119661478/1/1_org.jpg",
    price: "112 TL",
    firm: "Yoro",
    name: "Orjinal V5 Rgb Siyah Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210414/9/79976620/151870357/1/1_org.jpg",
    price: "590 TL",
    firm: "TENPLUS",
    name: "X11s 7.0'' 32gb Tablet (EBA ZOOM PUBG DESTEKLİ) Kılıf Ve Stand",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210225/9/66791827/145911361/1/1_org.jpg",
    price: "4.399 TL",
    firm: "Casper",
    name:
      'Nirvana X400.1005-4u00t-s-f Intel 10.nesil I3-1005g1 4gb Ram 240gb M2 Ssd W10 Home 14" Fhd',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210305/16/69078888/142277131/1/1_org.jpg",
    price: "4.099 TL",
    firm: "HP",
    name:
      "1u9l6ea Amd Athlon Gold 3150u 8gb 256gb Ssd 2gb Amd 620 15.6 Inc Fdos Notebook",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200912/12/10487507/86153613/1/1_org.jpg",
    price: "139,90 TL",
    firm: "Rampage",
    name:
      "Rm-k21 Superb 3,5mm Gaming Kırmızı Kulak Içi Mikrofonlu Oyuncu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/02/a9cedd48/13870166/1/1_org.jpg",
    price: "889 TL",
    firm: "Kingston",
    name: "HyperX Cloud II Oyuncu Kulaklık Kırmızı KHX-HSCP-RD",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210126/11/57251981/57299435/1/1_org_zoom.png",
    price: "1.399 TL",
    firm: "Rampage",
    name: "Kl-r40 Throne Serisi Siyah/Kırmızı Oyuncu Koltuğu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20210330/17/76383749/87806732/1/1_org.jpg",
    price: "106,50 TL",
    firm: "Yoro",
    name: "V8 Mikrofonlu Oyuncu Kulaklığı Yeni Rgb Led Işıklı Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210128/12/57948351/110217634/1/1_org.jpg",
    price: "57,90 TL",
    firm: "E TicaShop",
    name:
      "Samsung Galaxy Tab A7 Sm T500 T505 T507 Tablet Kılıfı Siyah Dönerli Seti 10,4 Inç Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210303/23/68443259/148014963/1/1_org.jpg",
    price: "6.639,99 TL",
    firm: "Huawei",
    name:
      'Matebook D 14 AMD Ryzen 7-3700U 8 GB 512 GB SSD 14" W10 Taşınabilir Bilgisayar + Çanta ve Mouse',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210317/14/73056321/154269230/0/0_org.jpg",
    price: "154,97 TL",
    firm: "CABOTECH",
    name: "Bluetooth Klavye Konfulon V4 Bluetooth V5.0 Standlı Türkçe Q Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/12/79432880/64758987/1/1_org.jpg",
    price: "78,50 TL",
    firm: "POLYGOLD",
    name: "Carbonn Led Aydınlatmalı Mouse Seti Oyuncu Gamer Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200804/15/6949180/79047683/1/1_org.jpg",
    price: "1.795 TL",
    firm: "LENOVO",
    name: 'TAB M10 TB-X606F 64GB 10.3" Wi-Fi Tablet - Gri ZA5T0215TR',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210110/2/50570619/128275176/0/0_org.jpg",
    price: "73 TL",
    firm: "NETAPLUS",
    name:
      "Ses Bombası Bluetooth Taşınabilir Çok Amaçlı Led Dijital Saat Ve Alarmlı Ses Bombası Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200423/9/128008/12905671/2/2_org.jpg",
    price: "289,90 TL",
    firm: "SanDisk",
    name: 'Plus 240GB 530MB-440MB/s Sata 3 2.5" SSD SDSSDA-240G-G26',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210314/20/71139288/143654969/1/1_org.jpg",
    price: "128 TL",
    firm: "kadıngözünden",
    name:
      "Yeni Rt-301 B Nostaljik Görünümlü Bluetoothlu Ve Fenerli Mp3 Çalar Radyo Müzik Kutusu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210403/21/6116589a/15373511/1/1_org.jpg",
    price: "309 TL",
    firm: "RAZER",
    name: "DeathAdder Essential Siyah Optik Gaming Mouse RZ01-02540100-R3M1",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210331/11/76577728/89383772/1/1_org.jpg",
    price: "5.699 TL",
    firm: "Zeiron",
    name: 'Fx50 I5-3470 16gb 1tb  240gb 4gb 23.8" Oyuncu Bilgisayarı',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/13/ebc70de9/65336025/1/1_org.jpg",
    price: "1.569 TL",
    firm: "ASUS",
    name:
      'VP249QGR 23.8" Full HD IPS Çerçevesiz 1MS 144Hz Adaptive-Sync (FreeSync)',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201225/17/42098874/123203036/1/1_org.jpg",
    price: "7.999 TL",
    firm: "MONSTER",
    name:
      "Abra A5 V16.6.3 Intel Core I5 10200h 8gb 500ssd Gtx1650ti Freedos 120hz Ips Fhd 15.6''",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/10/78080722/92590914/1/1_org.jpg",
    price: "1.699 TL",
    firm: "Huawei",
    name: "MatePad T10 S 3+64 GB Mavi Tablet (Huawei Türkiye Garantili)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210401/14/76987071/121343094/1/1_org.jpg",
    price: "4.689 TL",
    firm: "HP",
    name:
      '15-da2033nt 9hn16ea Core I5 10210u 1.6ghz-4gb-256gb Ssd-15.6"-ınt-w10',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210220/12/65404040/95188068/1/1_org.jpg",
    price: "239,90 TL",
    firm: "bm audio",
    name: "Boschmann 16 Cm Midrange Hoparlör ( 2 Adet )",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210410/12/79045597/162399030/1/1_org.jpg",
    price: "45 TL",
    firm: "Digoo",
    name: "Dünya Haritalı 90x40 Cm Mouse Pad Dünya Desen Mouse Pad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20210318/9/73274251/154568179/2/2_org.jpg",
    price: "19,80 TL",
    firm: "OEM",
    name: "Oyuncu Mouse Pad Dikişli 70x30",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/14/01ff16be/62121064/1/1_org.jpg",
    price: "439 TL",
    firm: "Hometech",
    name: '7M 16GB 7" IPS Tablet Uzay Gri',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210420/13/81576221/82287061/1/1_org.jpg",
    price: "58 TL",
    firm: "Dexim",
    name: "Kbl322 Gaming Klavye Dka004",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200511/15/978181/65736010/1/1_org.jpg",
    price: "389 TL",
    firm: "GamePower",
    name: "Kizaru 7.1 Siyah Surround Rgb Oyuncu Gaming Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210324/14/74929366/156870116/1/1_org.jpg",
    price: "1.999 TL",
    firm: "Rampage",
    name: "Icon Siyah/kırmızı Oyuncu Koltuğu Kl-r44",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210126/11/57243429/96213419/1/1_org.jpg",
    price: "1.299 TL",
    firm: "Rampage",
    name: "3d Hareketli Kol Oyuncu Koltuğu Hydra Kl-r77",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210414/18/80135166/163817517/1/1_org.jpg",
    price: "129 TL",
    firm: "SANALİNK",
    name:
      "Mikrofonlu Webcam Kamera Hd Kalite 720p Eba Zoom Destekli Tüm Windows Sürümleri Ile Uyumlu Webc-1132",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210305/23/69156786/131538385/1/1_org.jpg",
    price: "133 TL",
    firm: "RUKUSHE",
    name:
      "Mikrofonlu Webcam Kamera Hd Kalite 720p Eba Zoom Destekli Tüm Windows Sürümleri Ile Uyumlu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210302/17/67978302/22008331/1/1_org.jpg",
    price: "162 TL",
    firm: "Rampage",
    name:
      "KB-R63 Stage Rainbow RGB Aydınlatmalı Makrolu Gaming Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/9/79698324/14668556/1/1_org.jpg",
    price: "176,99 TL",
    firm: "Haikon",
    name: "Hs-ssd-c100/120g 550mbs/435mbs 120 Gb Ssd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210420/16/81628909/165740683/0/0_org.jpg",
    price: "249,90 TL",
    firm: "Rampage",
    name: "X-ranger 7.1 Rgb Mikrofonlu Oyuncu Kulaklığı Gaming Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210405/18/77945117/62064440/1/1_org.jpg",
    price: "237 TL",
    firm: "Rampage",
    name:
      "Rm-2019g X-tıtan Rgb 7.1 Surround Usb Mikrofonlu Oyuncu Kulaklığı Profesyonel Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty43/product/media/images/20210401/19/77085713/84167174/1/1_org.jpg",
    price: "54 TL",
    firm: "Arctic",
    name: "Mx-4 2019 Edition 4g Termal Macun",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/1/77561205/61252760/1/1_org.jpg",
    price: "150 TL",
    firm: "Tastech",
    name:
      "Meier M-115bt Koyu Renk Nostaljik Radyo Ahşap Görünümlü Bluetooth Hoparlör Fm Sd Kart Usb Girişi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/23/80754713/12982022/1/1_org.jpg",
    price: "416 TL",
    firm: "Ultimate Ears",
    name: "Wonderboom Phantom Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210108/23/49366401/105950419/1/1_org.jpg",
    price: "9.399 TL",
    firm: "MONSTER",
    name:
      "Abra A7 V12.4.1 Intel Core I5 10200h 16gb 500 Ssd Gtx1650ti Freedos 17.3'' Fhd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210309/13/70177501/75635513/1/1_org.jpg",
    price: "117,30 TL",
    firm: "Antech",
    name: "Rgb Düz Siyah 80*30 Cm Gaming Oyuncu Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/8/51887305/124107415/1/1_org.jpg",
    price: "7.499 TL",
    firm: "HP",
    name:
      "Pavilion Gaming Desktop Tg01-1054nt Pc 284m4ea I5 10400 16gb 512gb Gtx 1650 Süper 4gb Wın10",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/19/b0db590a/59572241/1/1_org.jpg",
    price: "775 TL",
    firm: "LENOVO",
    name: 'TB-7305F Tab M7 1GB 16 GB Wi-Fi 7" HD IPS Tablet ZA550080TR',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210421/11/81860773/88084420/1/1_org.jpg",
    price: "18,25 TL",
    firm: "Everest",
    name: "Sm-m9 Usb Siyah 3d Optik Led Mouse Kablolu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210125/9/56865094/133920262/1/1_org.jpg",
    price: "344,90 TL",
    firm: "Rampage",
    name: "Fitment Rgb Gaming Combo Oyuncu Klavye Mouse Kulaklık Mousepad Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200717/15/4915992/61193240/1/1_org.jpg",
    price: "319 TL",
    firm: "Fantech",
    name: "Mvp-861commander Mekanik Gaming Oyuncu Klavye Mouse Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/12/78425635/21333815/1/1_org.jpg",
    price: "148 TL",
    firm: "Meier",
    name: "Eskitme Nostalji Tasarımlı Bluetoothlu Nostalji Radyo 115bt",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/7/51731376/65547843/1/1_org.jpg",
    price: "10 TL",
    firm: "Evo",
    name: "Case 301 Bilek Destekli Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210119/15/55194417/90980530/1/1_org.jpg",
    price: "1.279,94 TL",
    firm: "Huawei",
    name: "Matepad T10 2gb 32gb Bt 9.7 Inc Mavi Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210328/21/75803947/158179459/0/0_org.jpg",
    price: "58,99 TL",
    firm: "AdaTech",
    name:
      "Ktx 1057 Işıklı Bluetooth Hoparlör Taşınabilir Kablosuz Radyolu Ses Bombası",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/19/79574239/122064631/1/1_org.jpg",
    price: "339 TL",
    firm: "JBL",
    name: "Go 3 Siyah Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210418/22/81095674/67880698/1/1_org.jpg",
    price: "49,50 TL",
    firm: "Snopy",
    name: "Sn-4488 Profesyonel Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210331/11/76559525/75846253/1/1_org.jpg",
    price: "511,90 TL",
    firm: "Türksit",
    name: "Quattro Mini Yönetici Ve Oyuncu Koltuğu Siyah Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/21/79895140/151099833/1/1_org.jpg",
    price: "590 TL",
    firm: "TENPLUS",
    name: "X11s 7.0'' 32gb Uyumlu Tablet Kılıf Ve Stand",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210203/12/59558479/71312305/1/1_org.jpg",
    price: "6.149 TL",
    firm: "Huawei",
    name:
      'Matebook D 15 AMD Ryzen 5 3500U 8GB 256GB SSD Windows 10 Home 15.6" FHD Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/12/80612888/164413477/1/1_org.jpg",
    price: "13.399 TL",
    firm: "MONSTER",
    name:
      "Tulpar T7 V20.3.2 I7-10875h 16 Gb 512 Gb Ssd 6 Gb Rtx 3060 Free Dos Dizüstü Bilgisayar",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/22/49124429/17612590/1/1_org.jpg",
    price: "399 TL",
    firm: "Wacom",
    name: "One By Small Grafik Tablet (Ctl-472-n)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210127/2/57518599/134685648/1/1_org.jpg",
    price: "614 TL",
    firm: "Samsung",
    name: "500gb 870 Evo Mz-77e500bw Ssd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty90/product/media/images/20210403/19/77510313/75988805/1/1_org.jpg",
    price: "17,90 TL",
    firm: "Notespare",
    name: "4 Port Usb 2.0 Hub Çoğaltıcı Çoklayıcı Swıtch 4863p Anahtarlı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210409/17/78953149/20757437/1/1_org.jpg",
    price: "150 TL",
    firm: "Meier",
    name: "M-112bt Şarjlı Nostaljik Bluetooth Fm Radyo Usb/sd/mp3",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210211/23/62032635/117920493/1/1_org.jpg",
    price: "9.899 TL",
    firm: "Apple",
    name: "Macbook Air 13'' M1 8gb 256gb Ssd Uzay Grisi - Mgn63tu/a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/12/80602895/101179175/1/1_org.jpg",
    price: "1.490 TL",
    firm: "Zebra",
    name: "ZD220 Direk Termal Barkod Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200925/3/11799002/15221319/1/1_org.jpg",
    price: "259 TL",
    firm: "GamePower",
    name: "Medusa Siyah 7.1 Pro Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210421/10/81835864/60838172/1/1_org.jpg",
    price: "65,90 TL",
    firm: "POLYGOLD",
    name: "X7 Işıklı Oyuncu Mouse + Mousepad Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/17/3bd6b804/62876369/1/1_org.jpg",
    price: "54,99 TL",
    firm: "HP",
    name: "M160 Rgb Işıklı Kablolu Usb Gaming Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210125/9/56870704/133925464/1/1_org.jpg",
    price: "474,99 TL",
    firm: "HP",
    name:
      "Deskjet 2710 Wifi Mürekkep Püskürtmeli Çok Fonksiyonlu Yazıcı 5ar83b",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200923/18/11613979/64755021/1/1_org_zoom.jpeg",
    price: "1.486,65 TL",
    firm: "XDrive",
    name: "Sancak Profesyonel Oyuncu Koltuğu Bilgisayar Koltugu Kırmızı/Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/14/77429124/60106013/1/1_org.jpg",
    price: "233,99 TL",
    firm: "Jameson",
    name: "Js-60 22cm 900w Oto Hoperlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/22/58497997/132348625/1/1_org.jpg",
    price: "364,99 TL",
    firm: "Samsung",
    name: '870 Evo 250gb 560mb-530mb/s Sata 2.5" Ssd (mz-77e250bw)',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200709/17/3971775/62884745/1/1_org.jpg",
    price: "215 TL",
    firm: "HP",
    name: "H320 Gs 7.1 Gaming Işıklı Mikrofonlu Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty91/product/media/images/20210403/17/fe26f128/14649164/1/1_org.jpg",
    price: "109,99 TL",
    firm: "GamePower",
    name: "Bane Siyah Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200602/8/2085959/63708965/1/1_org.jpg",
    price: "90,99 TL",
    firm: "HP",
    name: "S1000 Plus Kablosuz Sessiz Mouse Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210301/20/67716468/13658827/1/1_org.jpg",
    price: "62,90 TL",
    firm: "Everest",
    name: "Mercury X8 Usb Siyah 6d Optik Oyun Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/15/67956885/121817644/1/1_org.jpg",
    price: "144 TL",
    firm: "Bood",
    name: "4in1 Rgb Klavye Mause Razer Pad Kulaklık Esport Oyuncu Gaming Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210322/10/74245964/132382711/1/1_org.jpg",
    price: "9.599 TL",
    firm: "Dell",
    name:
      "G315 4b750d2f161c I7-10750h 16gb 1tb Hdd 256gb Ssd 4gb Gtx1650ti 15.6 Fhd Ubuntu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/23/7206ceca/63834828/1/1_org.jpg",
    price: "189,90 TL",
    firm: "Rampage",
    name: "Ad-rc8 Showy 180mm Fan 15-17 Rgb Notebook Soğutucu Laptop Soğutucu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210418/1/80966617/21223020/1/1_org.jpg",
    price: "183,79 TL",
    firm: "ADDISON",
    name: "Rampage Ad-rc5 Notebook Soğutucu 5 Fanlı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210410/0/78986417/85270360/1/1_org.jpg",
    price: "78 TL",
    firm: "Rowen",
    name: "1080p 2mp Bilgisayar Eba Tv Zoom Bilgisayar Webcam",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/17/d37d7b12/59197483/1/1_org.jpg",
    price: "292 TL",
    firm: "Rampage",
    name:
      "KB-R81 Red Switch Gökkuşağı Ledli RGB Şeritli Metal Yüzey Mekanik Gaming Oyuncu Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210211/17/62024859/75221876/1/1_org.jpg",
    price: "76,60 TL",
    firm: "Samsung",
    name: "Micro Sd Evo Plus 64 GB Hafıza Kartı Adaptörlü MB-MC64HA/TR",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210413/12/79756072/159718593/1/1_org.jpg",
    price: "5.999 TL",
    firm: "ACER",
    name:
      'Extensa 15 Intel Core I5 1035g1 8gb 512gb Ssd Mx330 Freedos 15.6" Fhd Nx.egcey.002',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210303/13/68225705/147766871/1/1_org.jpg",
    price: "1.759,40 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A7 Sm-t500 Wi-fi 3 Gb 64 Gb 10.4" Tablet',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210218/14/64930117/143368632/0/0_org.jpg",
    price: "3.599 TL",
    firm: "LENOVO",
    name:
      'V14 IGL Intel Celeron N4020 8GB 256GB SSD UHD Graphics 600 Windows 10 14" FHD Laptop 82C2001MTX',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210319/13/73523529/154986005/0/0_org.jpg",
    price: "79,50 TL",
    firm: "OEM",
    name: "Riser V009s Plus Altın Pci-express X1 X16 Mining 009s",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/12/77409292/68507452/1/1_org.jpg",
    price: "19,90 TL",
    firm: "Wonderlust",
    name: "Profesyonel Tablet Ve Telefon Tutucu Stand 2 Kademeli Uzunluk Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/23/50544012/128254524/0/0_org.jpg",
    price: "69,90 TL",
    firm: "Xrades",
    name: "Siyah 90x40 Cm Xxl Gamings Oyuncu Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/10/79990372/150976450/1/1_org.jpg",
    price: "590 TL",
    firm: "TENPLUS",
    name: "X11s 7.0'' 32gb Tablet (EBA ZOOM PUBG DESTEKLİ) Kılıf Ve Stand",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/15/78920989/63309112/1/1_org.jpg",
    price: "185 TL",
    firm: "Santa Maria",
    name: "7 In 1 Sd Usb Type-c Hub Hdmı Girişli Macbook Çevirici Çoklayıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210222/20/66033643/104509713/1/1_org.jpg",
    price: "23,50 TL",
    firm: "WOZLO",
    name: "Hdmi To Vga Ses Çıkışlı Kablo Çevirici Dönüştürücü Adaptör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200530/21/1957701/58097940/1/1_org.jpg",
    price: "58,90 TL",
    firm: "Philips",
    name: "2 Metre HDMI Kablo Altın Uçlu 4K HDMI Kablo SWL6118D/93",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201010/13/14860241/92052024/4/4_org.jpg",
    price: "62,99 TL",
    firm: "Philips",
    name: "Spk7315 2.4ghz Siyah 1600 Dpi Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/23/609c25d5/66942685/1/1_org.jpg",
    price: "89 TL",
    firm: "Philips",
    name: "Spk7314 2.4ghz Rose Gold 800-1000-1200-1600dpi Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210402/21/77330973/12905871/1/1_org.jpg",
    price: "223,48 TL",
    firm: "A4 Tech",
    name: "Bronz Lazer Gaming Oyuncu Mouse Xl-750bh",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20201015/19/16235256/22327627/1/1_org.jpg",
    price: "175 TL",
    firm: "Xiaomi",
    name:
      "Mi WiFi AC1200 Router 4A Giga Version 1167 Mbps 2.4G 5G Çift Bant 4 Antenli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201228/5/42842215/124000578/0/0_org.jpg",
    price: "134,90 TL",
    firm: "WOZLO",
    name: "Ergostand Gaming Notebook Sogutucu 12-17 Inch 6 Fanlı 5 Kademeli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/21/d041a461/65827193/1/1_org.jpg",
    price: "225,67 TL",
    firm: "GamePower",
    name: "Warlock Compact Mavi Swıtch 87 Mekanik  223",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20201216/17/39046658/120003640/0/0_org.jpg",
    price: "63,40 TL",
    firm: "Urban Sound",
    name: "Su Geçirmez Mini Bluetooth Duş Hoparlörü (siyah) Dh-195",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201010/3/14740095/65001020/1/1_org.jpg",
    price: "148 TL",
    firm: "Xiaomi",
    name: "Mi WiFi AC1200 Router 4A 1167Mbps 2.4G 5G Çift Bant 4 Antenli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210420/0/81432277/59197475/1/1_org.jpg",
    price: "114,90 TL",
    firm: "S-LINK",
    name:
      "Swapp SL-01 16 Amper Akıllı Wifi TUYA Google Assistant Alexa Siri Destekli Priz Wifi TUYA",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201027/15/19940196/91131729/1/1_org.jpg",
    price: "3.997 TL",
    firm: "Apple",
    name: 'iPad 8. Nesil 128 GB 10.2" WiFi Tablet - MYLE2TU/A Gümüş',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210311/10/70585271/12906283/1/1_org.jpg",
    price: "235 TL",
    firm: "TP-LINK",
    name: "Re200 750 Mbps Wifi Range Extender-menzil Genişletici Ac750",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210121/20/55928639/65062175/1/1_org.jpg",
    price: "209,47 TL",
    firm: "logitech",
    name: "Pebble M350 1000dpı Kablosuz Pembe Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210301/11/67630070/135677811/1/1_org.jpg",
    price: "6.299 TL",
    firm: "HP",
    name: "15s-fq2018nt 2n2l9ea I7-1165g7 8gb Ram 256gb Ssd 15.6 Inc Fhd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201226/15/42500013/123573216/1/1_org.jpg",
    price: "299 TL",
    firm: "MONSTER",
    name: "Pusat Pro Bluetooth Gamepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20210331/9/76512146/158794745/1/1_org.jpg",
    price: "39,90 TL",
    firm: "Taled",
    name:
      "Space Warships X3 Pubg Gaming Oyuncu Rgb Işıklı Mouse Kablolu Dpı Ayarlı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20201021/16/18447120/96218391/0/0_org.jpg",
    price: "115,42 TL",
    firm: "Rampage",
    name: "X-jammer Smx-r47 Usb Siyah Rgb Işıklı 7200 Dpi Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201128/14/33379109/96748261/1/1_org.jpg",
    price: "99,99 TL",
    firm: "Rampage",
    name: "Smx-r120 Slash 4800 Dpı Rgb Ledli Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210312/16/70963648/149089952/1/1_org.jpg",
    price: "749,90 TL",
    firm: "Türksit",
    name: "Shock Oyuncu Koltuğu Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210403/22/e2050541/20530114/1/1_org.jpg",
    price: "1.139 TL",
    firm: "Huawei",
    name: 'MediaPad T5 16GB 10.1" IPS Tablet',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/18/77642068/110866671/1/1_org.jpg",
    price: "98,90 TL",
    firm: "tuneex",
    name:
      "Tüm Modellerle Uyumlu Çelik 5 Açıda Kolay Ayarlanır Notebook Laptop Standı Yükseltici Altlık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210422/11/82059692/17168623/1/1_org.jpg",
    price: "29 TL",
    firm: "Everest",
    name: "Smw-777 Kablosuz Siyah Optik Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/12/81266769/165233297/1/1_org.jpg",
    price: "209 TL",
    firm: "Everest",
    name: "Eco Gökkuşağı Aydınlatmalı Usb Gaming Combo 4 In 1 Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210323/17/74722121/63859161/1/1_org.jpg",
    price: "64,99 TL",
    firm: "Snopy",
    name: "Sn-633 Siyah/kırmızı Kulak Üstü Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/02/cd1f0b99/59197470/1/1_org.jpg",
    price: "204 TL",
    firm: "Rampage",
    name: "Miracle-X4 Siyah RGB Led 7.1 Mikrofonlu Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210215/17/62882315/141012374/1/1_org.jpg",
    price: "2.729,99 TL",
    firm: "LENOVO",
    name:
      'V14 Igl Intel Celeron N4020 4gb 1tb Hdd Freedos 14" Fhd Taşınabilir Bilgisayar 82c2001ltx',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201125/17/32493252/9636727/3/3_org.jpg",
    price: "799 TL",
    firm: "Apple",
    name: "Magic Mouse 2 MLA02TU/A",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210312/18/70985567/21014932/1/1_org.jpg",
    price: "584,21 TL",
    firm: "logitech",
    name: "G432 7.1 Surround Oyuncu Kulaklık 981-000770",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210208/10/60967743/103136334/1/1_org.jpg",
    price: "6.099 TL",
    firm: "Apple",
    name: "Ipad Air 10.9 Inç Wi-fi 64gb Gümüş Myfn2tu/a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210202/23/59476558/16481508/1/1_org.jpg",
    price: "59,99 TL",
    firm: "logitech",
    name: "Oyuncu Mouse Pad 40 X 30 Cm",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210311/23/70801399/133013100/1/1_org.jpg",
    price: "110 TL",
    firm: "SNEXPRES",
    name: "Yoro V5 Işıklı Ps4-xbox One-pc Gamer Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210316/12/72035573/153014323/0/0_org.jpg",
    price: "499,90 TL",
    firm: "Türksit",
    name: "Asos Oyuncu Koltuğu Gri",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210324/16/74983655/121909125/1/1_org.jpg",
    price: "346,10 TL",
    firm: "JBL",
    name: "Kırmızı Go 3 Taşınabilir Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210419/18/81403072/62941909/1/1_org.jpg",
    price: "46 TL",
    firm: "POLYGOLD",
    name: "Ktx-1057 Işıklı Bluetooth Hoparlör Ses Bombası Yüksek Ses",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210301/10/67609711/11943091/1/1_org.jpg",
    price: "449 TL",
    firm: "Canon",
    name: "Inkjet E-414 Pıxma Yazıcı-tar-fot",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210219/2/65125857/141932512/1/1_org.jpg",
    price: "139,90 TL",
    firm: "Rampage",
    name: "Spear 7200 Dpı Rgb Ledli Makrolu Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210119/15/55214906/131969474/0/0_org.jpg",
    price: "3.149 TL",
    firm: "LENOVO",
    name:
      'Ideapad Intel Celeron N4020 4gb 128gb Ssd Freedos 14" Hd Taşınabilir Bilgisayar 81vu006stx',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210417/22/80934985/156582574/1/1_org.jpg",
    price: "79 TL",
    firm: "Everest",
    name:
      "Smw-710 Usb 2.4ghz Gümüş Ledli 800/1200/1600dpi Şarjlı Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210420/3/81440619/12823113/1/1_org.jpg",
    price: "85,99 TL",
    firm: "logitech",
    name: "910-004424 M171 Kablosuz Siyah Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200906/12/9858861/74214542/1/1_org.jpg",
    price: "949 TL",
    firm: "Huawei",
    name: 'MatePad T8 32GB 8" IPS Tablet Mavi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/10/81229475/72613094/1/1_org.jpg",
    price: "189,90 TL",
    firm: "Everest",
    name: "Sc-hd03 1080p Full Hd Webcam Usb Pc Kamera",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201028/9/20041961/98272168/1/1_org.jpg",
    price: "2.229 TL",
    firm: "Hometech",
    name:
      'Alfa 450C Intel Celeron N3350 4GB 128GB SSD 14" Windows 10 Home Dizüstü Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210401/13/76979206/159569250/0/0_org.jpg",
    price: "4.999 TL",
    firm: "ACER",
    name:
      'Aspire 3 A315-23g Amd Ryzen 5 3500u 8 Gb 256 Gb Ssd Radeon R625 Freedos 15,6" Fhd Nx.hvrey.007',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201214/4/38207177/119048672/1/1_org.jpg",
    price: "6.499 TL",
    firm: "Huawei",
    name: "Huaweı Matebook D14 R7 8+512gb - Mistik Gümüş",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210416/8/80540351/13172103/1/1_org.jpg",
    price: "9.600 TL",
    firm: "MSI",
    name:
      "Radeon RX 570 ARMOR 8G OC RX570 8GB GDDR5 256B (1XDVI 1XHDMI 3XDP) Ekran Kartı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201012/13/15290942/92424925/1/1_org.jpg",
    price: "4.199 TL",
    firm: "HP",
    name:
      "255 G7 Amd Athlon Gold 3150u 8gb 256gb Ssd 15.6 inç Fhd W10 Home Dizüstü Bilgisayar 1L3X7EA",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210301/17/67670335/57746324/1/1_org.jpg",
    price: "529 TL",
    firm: "Keenetic",
    name: "Extra Dsl Ac1200 Whole Home Vdsl2/adsl2+ Mesh Modem Router / Ap",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210127/10/57590522/134764398/1/1_org.jpg",
    price: "695,99 TL",
    firm: "ASUS",
    name: "Prime H310m-k R2.0 Intel H310 2666 Mhz Ddr4 Soket 1151 Matx Anakart",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210331/12/76612637/19934942/1/1_org.jpg",
    price: "3.694 TL",
    firm: "ASROCK",
    name:
      "H110 H110pro-btc Ddr4 Sata3 Dvı Pcıe 16x V2.0 1151p Atx Mining Anakart",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210311/10/70587146/84253400/1/1_org.jpg",
    price: "5.899 TL",
    firm: "HP",
    name:
      '15-da2080nt Intel Core I5 10210u 8gb 512gb Ssd Freedos 15.6" Fhd Taşınabilir Bilgisayar 1s7y1ea',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210324/19/75019823/157033386/0/0_org.jpg",
    price: "36,98 TL",
    firm: "OEM",
    name: "Xxl Oyuncu Mousepad Dikişli 90x40",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/13/80283284/60779948/1/1_org.jpg",
    price: "7,40 TL",
    firm: "ADDISON",
    name: "Siyah Mouse Pad 300142",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/17/78952876/162262426/1/1_org.jpg",
    price: "9.099 TL",
    firm: "ASUS",
    name:
      "Tuf Gaming Fx706lı-hx199 I5-10300h 16gb Ddr4 512gb Ssd Gtx1650tı 4gb 17.3 144hz Fdos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210419/11/81261614/98393309/1/1_org.jpg",
    price: "89,90 TL",
    firm: "TEKNETSTORE",
    name:
      "Siyah Apple Ipad 8. Nesil 2020 10.2 inç Tablet Flip Smart Standlı Akıllı Kılıf Smart Cover",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20210330/7/76138460/90410762/1/1_org.jpg",
    price: "64 TL",
    firm: "MOBAX",
    name:
      'Apple Ipad 8.nesil 10.2" Uyumlu Pu Deri Smart Case Siyah Kılıf A2270 A2428 A2429 A2430',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210421/18/81934695/156760790/1/1_org.jpg",
    price: "9.199 TL",
    firm: "ASUS",
    name:
      'Tuf Gaming F17 Fx706lı-hx198-gaming I5-10300h 16 Gb 512 Gb Ssd Gtx 1650 Ti 144hz Dos 17,3" Fhd',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210223/9/66105918/56993464/1/1_org.jpg",
    price: "1.619 TL",
    firm: "HP",
    name:
      "Smart Tank Wireless 515 Fotokopi + Tarayıcı + Wi-Fi + AirPrint Renkli Tanklı Yazıcı 1TJ09A",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201120/22/29293084/108970937/1/1_org.jpg",
    price: "68 TL",
    firm: "Rowen",
    name:
      "Gm002 Stereo Kulaküstü Mikrofonlu Oyuncu Kulaklık 3.5mm Tek Jack Mavi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210116/18/54049230/130686342/0/0_org.jpg",
    price: "50,20 TL",
    firm: "Samsung",
    name:
      'Microsonic Galaxy Tab A 8" 2019 T290 Kılıf 360 Rotating Stand Deri Siyah',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210328/1/75743292/81833955/1/1_org.jpg",
    price: "1.954,15 TL",
    firm: "XDrive",
    name: "Akdeniz Profesyonel Oyuncu Koltuğu Siyah/siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/13/80279920/164010047/1/1_org.jpg",
    price: "14.999 TL",
    firm: "MONSTER",
    name:
      'Tulpar T7 V20.3.3 I7-10875h 16 Gb 1 Tb Ssd 6 Gb Rtx 3060 17.3" W10 Dizüstü Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210326/17/75496068/157756350/1/1_org.jpg",
    price: "122,99 TL",
    firm: "Rampage",
    name: "Spear 7200 Dpı Rgb Ledli Makrolu Gaming Oyuncu Mouse Smx-g68",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210411/13/79257528/17683530/1/1_org.jpg",
    price: "339 TL",
    firm: "Seagate",
    name: "Barracuda 64mb 1tb 3.5 Harddisk St1000dm010 10021754",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty23/product/media/images/20201115/4/26499397/106286345/0/0_org.jpg",
    price: "82,90 TL",
    firm: "Techmaster",
    name: "Eletra Vencci Gaming Gamer Notebook Laptop Soğutucu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210304/15/68703324/138001767/1/1_org.jpg",
    price: "799 TL",
    firm: "POWER DESİGN",
    name: "Klavyeli Kılıf Apple Ipad 7.ve 8.nesil Için Mouse Ve Işıklı Tuşlar",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/11/78865706/12906379/1/1_org.jpg",
    price: "87,90 TL",
    firm: "A4 Tech",
    name: "Km 720 Q Türkçe Usb Kablolu Fn Multimedya Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210215/17/62884887/141015493/1/1_org.jpg",
    price: "18.299 TL",
    firm: "MONSTER",
    name:
      "Tulpar T5 V21.5 Intel Core I7 10875h 16gb 512gb Ssd Rtx3070 Max-p Freedos 15.6''",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210419/11/81265749/12127253/1/1_org.jpg",
    price: "395 TL",
    firm: "Seagate",
    name: '1tb 2.5" Exp Usb3.0 Siyah Stea1000400 Harici Harddisk',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210214/22/62423560/140339657/1/1_org.jpg",
    price: "3.299 TL",
    firm: "ASUS",
    name:
      "X543ma-gq1244 Intel® Celeron® N4020 Işlemci (4m Cache, Up To 2.6 Ghz) 4gb Ram 256gb Ssd F.dos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210121/18/55912900/132795254/1/1_org.jpg",
    price: "4.399 TL",
    firm: "Dell",
    name:
      "Inspiron 3501 Fb1005f82c I3 1005g1 8gb 256gb Ssd 15.6 Ubuntu Dizüstü Bilgisayar",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/9/51944722/64987144/1/1_org.jpg",
    price: "149,90 TL",
    firm: "Onikuma",
    name: "K5pro Gaming Profesyonel Led Işıklı Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210203/16/59679072/22175793/1/1_org.jpg",
    price: "579 TL",
    firm: "SteelSeries",
    name:
      "Arctis 1 Kablolu Oyuncu Kulaklık - PS5 ve Ps4, XboX, PC, Nintendo Switch ve Mobil",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210322/13/74327328/75675549/1/1_org.jpg",
    price: "45 TL",
    firm: "Wonderlust",
    name: "Multimedya 1+1 Mini Pc Hoparlör 2.0 Usb Speaker 2.5w",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200828/9/8953151/60344283/1/1_org.jpg",
    price: "268 TL",
    firm: "Rampage",
    name:
      "Rm-k19 Ragıng Plus Siyah Usb 7,1 Version Rgb Ledli Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20210322/0/74174810/119819284/1/1_org.jpg",
    price: "5.712 TL",
    firm: "LENOVO",
    name: 'V15-ııl I5-1035g1 4gb 512gb Ssd 2gb 15.6" Fd 82c500r2tx',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200827/14/8925202/59197474/1/1_org.jpg",
    price: "229,90 TL",
    firm: "Rampage",
    name: "Miracle-X2 PLUS Siyah RGB Led 7.1 Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210317/14/73049810/57538792/1/1_org.jpg",
    price: "299 TL",
    firm: "Rampage",
    name:
      "RGW9 COMFORT Siyah USB 7.1 Surround Sound RGB Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/12/52055714/92415760/1/1_org.jpg",
    price: "127,89 TL",
    firm: "OEM",
    name: "Razador Rmx-01 Tiger 7200 Dpı Rgb Mouse Profesyonel Makrolu Gaming",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200608/16/2412825/73171585/1/1_org.jpg",
    price: "219 TL",
    firm: "MONSTER",
    name: "Pusat V9 Wireless Gaming Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210304/10/68597043/148351013/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Xrades",
    name: "Kulak Içi Mikrofonlu Mobil Pubg Kulaklığı 3,5 Mm Aux Standart Giriş",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/8/51870747/19953274/1/1_org.jpg",
    price: "1.659 TL",
    firm: "EPSON",
    name: "L3151 Yaz-tar-fot Tanklı Its",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210315/19/71593760/152650791/0/0_org.jpg",
    price: "699,90 TL",
    firm: "Türksit",
    name: "Çağrı Oyuncu Koltuğu Gri",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/13/77619197/16609789/1/1_org.jpg",
    price: "1.449 TL",
    firm: "Rampage",
    name: "Rampage KL-R40 Throne Serisi Siyah/Beyaz Gaming Oyuncu Koltuğu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/14/69015769/148805488/0/0_org.jpg",
    price: "1.425 TL",
    firm: "Rampage",
    name:
      "Rm-236 Hdmı+dp+aud 165hz Ips Full Hd Gaming Oyuncu Monitörü (1 Ile Maksimum 3 Piksel Hatalı)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty22/product/media/images/20201112/15/25376535/104837168/1/1_org.jpg",
    price: "2.799 TL",
    firm: "MONSTER",
    name: "Aryond A32 V1.1 Gaming Monitör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210312/1/70807377/123343334/1/1_org.jpg",
    price: "300 TL",
    firm: "logitech",
    name: "K380 Multi-device Bluetooth(R) Türkçe Q Klavye-gül 920-010067",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20201231/12/43939100/125349574/1/1_org.jpg",
    price: "356 TL",
    firm: "Arm",
    name: "Fileli Büro Ofis Koltuğu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201223/21/41306271/122283668/1/1_org.jpg",
    price: "3.999 TL",
    firm: "Rampage",
    name: "Grand Serıes 3d Ayarlı Dirseklik Siyah/kırmızı Oyuncu Koltuğu Kl-r8",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20201127/14/33005959/113688952/1/1_org.jpg",
    price: "2.049 TL",
    firm: "Hometech",
    name:
      "Alfa 450c Intel Celeron N3350 4gb 64gb 14.1” W10 Home Taşınabilir Bilgisayar",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210217/14/63961668/12120585/1/1_org.jpg",
    price: "9.269 TL",
    firm: "Apple",
    name:
      'MacBook Air Intel Core i5 5350U 8GB 128GB SSD MacOS Sierra 13.3" Taşınabilir Bilgisayar MQD32TU/A',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200623/17/3412253/75169800/1/1_org.jpg",
    price: "119,90 TL",
    firm: "ASUS",
    name: "MW202 Kablosuz Sessiz Mouse - Lacivert",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200415/16/1885841/68766188/1/1_org.jpg",
    price: "10.299 TL",
    firm: "MONSTER",
    name:
      "Abra A7 V11.2.4 I7-10750h, 16gb, 500gb, 4gb Gtx1650, 17'',fhd Freedos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210311/22/70797235/68855206/1/1_org.jpg",
    price: "7.499 TL",
    firm: "Apple",
    name: 'Ipad Pro My232tu/a 11" Wi-fi 128 Gb Uzay Grisi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210215/14/62728928/140657917/0/0_org.jpg",
    price: "119,99 TL",
    firm: "Nivagatore",
    name: "Gaming Işıklı Oyuncu Klavye Mouse Seti Mekanik His Rgbli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210305/9/68814522/17927376/1/1_org.jpg",
    price: "154,90 TL",
    firm: "Rampage",
    name:
      "KM-RX9 Siyah Usb Gökkuşağı Zemin Aydınlatmalı Q Standart Oyuncu Klavye + Mouse Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210417/23/80938825/129446021/1/1_org.jpg",
    price: "779,99 TL",
    firm: "vorcom",
    name: 'S12 2 Gb 32 Gb 10.1" Ips Tablet Bilgisayar -siyah',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/22/c5ada874/12906322/1/1_org.jpg",
    price: "588 TL",
    firm: "Samsung",
    name: '860 Evo 2.5" Sata 3.0 Ssd Disk 500Gb Mz-76E500Bw',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210204/11/59880511/117736341/1/1_org.jpg",
    price: "9.899 TL",
    firm: "Apple",
    name: "Macbook Air 13'' M1 8gb 256gb Ssd Altın - Mgnd3tu/a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210330/15/76333004/97768416/1/1_org.jpg",
    price: "19,50 TL",
    firm: "Mobilşube",
    name: "Apple Ipad 8. Nesil 2020 10.2 Inç Tempered Ekran Koruyucu Şeffaf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/00/cca889e3/21823605/1/1_org.jpg",
    price: "100 TL",
    firm: "Xiaomi",
    name: "Mi Compact Mini Bluetooth Hoparlör 2",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210314/0/71124169/135024269/1/1_org.jpg",
    price: "119 TL",
    firm: "Rampage",
    name: "Colmena 6400 Dpı Rgb Ledli Makrolu Hafif Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/9/64816045/143248376/1/1_org.jpg",
    price: "8.199 TL",
    firm: "MONSTER",
    name:
      "Abra A5 V16.6.6 Intel Core I5 10200h 8gb 500gb Ssd Gtx 1650ti Win10 15.6''",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20210328/14/75766444/114708655/1/1_org.jpg",
    price: "54,99 TL",
    firm: "HELİXSUN",
    name: "Xrazer Mouse Pad Büyük Boy Gaming Oyuncu Xl 70x30 Cm",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20210328/15/75771616/114338392/1/1_org.jpg",
    price: "54,99 TL",
    firm: "HELİXSUN",
    name: "Hyper Beast Mouse Pad Büyük Boy Gaming Oyuncu Xl 70x30 Cm",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210304/19/68774076/148646396/0/0_org.jpg",
    price: "10.582 TL",
    firm: "Dell",
    name:
      "G315 6B750D5F16C Intel Core i7 10750H 16GB 512GB SSD 6GB GTX1660Ti 15.6 FHD 120hz Linux Laptop",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/10/78397154/124500124/1/1_org.jpg",
    price: "220 TL",
    firm: "Pioneer",
    name: "Sunask Sn-6997 1000 Watt Oto Oval Hoparlör 2adet Üst Kalite",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20201127/14/33004919/113683379/0/0_org.jpg",
    price: "1.499,99 TL",
    firm: "Rampage",
    name:
      "Rm-755 Slıce 27ınc 75hz A+ Csot Panel 1-2ms Full Hd Çerçevesiz Oyuncu Monitörü",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20210101/16/44223256/125641416/1/1_org.jpg",
    price: "3.149 TL",
    firm: "LENOVO",
    name:
      'Ideapad 81vu006stx Intel Celeron N4020 4gb 128gb Ssd Freedos 14" Fhd Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200707/3/3843854/75948436/0/0_org.jpg",
    price: "459 TL",
    firm: "Hometech",
    name: 'Alfa 7m 16 Gb 7" Ips Tablet Bilgisayar Uzay Gri',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201128/3/33175976/12905702/1/1_org.jpg",
    price: "308,99 TL",
    firm: "TP-LINK",
    name: "Re305 Ac1200 1200mbps Menzil Genişletici",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200925/3/11806880/56475924/1/1_org.jpg",
    price: "389 TL",
    firm: "GamePower",
    name: "Saber Full Rgb Blue Switch Gaming Oyuncu Mekanik Klavye Türkçe Q",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/17/70487132/75805574/1/1_org.jpg",
    price: "589 TL",
    firm: "Alcatel",
    name: '1t 7" 16GB Prime Black (+Mavi Kılıf) Wifi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/9/78381946/61928235/1/1_org.jpg",
    price: "384 TL",
    firm: "Soundmax",
    name: "Sx-2500.4 4ch 3000w Oto Anfi Sx-2500",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201201/16/34125076/66267743/1/1_org.jpg",
    price: "7.299 TL",
    firm: "HP",
    name:
      'Pavilion 15-EC0012NT 8EY98EA AMD Ryzen 5 3550H 8GB 256GB SSD GTX1650 Windows 10 Home 15.6" FHD',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200917/19/11030262/87176250/0/0_org.jpg",
    price: "13.180 TL",
    firm: "Dell",
    name:
      "Inspiron 7501 i7-10750H 16GB 1TB SSD 4GB GTX1650Ti 15.6 Windows10 Pro Dizüstü Bilgisayar S750WP161N",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20201223/0/40950951/17304856/1/1_org.jpg",
    price: "529 TL",
    firm: "SanDisk",
    name: "Ixpand Mini 256gb Iphone Usb Bellek Sdıx40n-256g-gn6ne",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200616/13/2939996/16187156/1/1_org.jpg",
    price: "1.199 TL",
    firm: "SteelSeries",
    name:
      "Arctis 5 Oyuncu Kulaklık - 7.1 Surround - PC ve PS Uyumlu - RGB Aydınlatma - Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/10/78087133/115925767/1/1_org.jpg",
    price: "1.683 TL",
    firm: "Samsung",
    name: "Galaxy Tab A7 Sm-t507 Tablet Dark Grey",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/09/50774326/64923600/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Gomax",
    name: "Gmx K2 Rgb Led Işıklı Oyuncu Klavyesi Gaming Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210108/19/48835991/127928399/0/0_org.jpg",
    price: "7.741 TL",
    firm: "Huawei",
    name:
      'Matebook 14 Amd Ryzen 5 4600h 16gb 512gb Ssd Windows 10 Home 14" Qhd Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty86/product/media/images/20210403/14/77425148/80609588/1/1_org.jpg",
    price: "479 TL",
    firm: "Soundmax",
    name: "Sx-m69k Midrange Oval 6x9 300w Oto Hoparlör 1 Çift",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210110/21/50684007/13049074/1/1_org.jpg",
    price: "120,28 TL",
    firm: "Canon",
    name: "Pg-46 Siyah Kartuş(E404 Yazıcı Için)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210408/12/78658434/68041146/1/1_org.jpg",
    price: "516 TL",
    firm: "Alcatel",
    name: 'Smart Tab7 16gb 7" (eba Ve Zoom Destekli)',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/18/54048113/130672694/0/0_org.jpg",
    price: "117,20 TL",
    firm: "Samsung",
    name: 'Microsonic Galaxy Tab S6 Lite 10.4" P610 Kılıf Origami Pencil Mavi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/13/80281978/18026067/1/1_org.jpg",
    price: "399 TL",
    firm: "logitech",
    name: "G305 Lightspeed Wireless Oyuncu Mouse 910-005283",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/15/79797359/129137189/1/1_org.jpg",
    price: "120 TL",
    firm: "VİPONLİNE",
    name: "Profesyonel Headset Pro 7.1 Usb Rgb Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty5/product/media/images/20200616/13/2939918/15358294/2/2_org.jpg",
    price: "152 TL",
    firm: "GamePower",
    name: "Magnus V2 Siyah 3.5mm Rgb Oyuncu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201121/11/29809520/109399509/1/1_org.jpg",
    price: "723 TL",
    firm: "Hometech",
    name: "Alfa 8my 8 Inç 2 Ram 32 Hafıza Sim Kartlı Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/08/d1916a01/19983859/1/1_org.jpg",
    price: "1.522 TL",
    firm: "Samsung",
    name:
      "LC24RG50FQMXUF 24 144Hz 4ms (Display+HDMI) FULL HD FreeSync CURVED GAMİNG MONİTÖR (Siyah)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/11/68834440/138300205/1/1_org.jpg",
    price: "849 TL",
    firm: "POWER DESİGN",
    name:
      "Ipad Air 4.Nesil 10,9 Inç Uyumlu Mouse ve Işıklı Tuşlar Klavyeli Kılıf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20201030/19/20686474/99236512/0/0_org.jpg",
    price: "199,90 TL",
    firm: "Philips",
    name:
      "Spt8294 Siyah Rainbow Aydınlatmalı Sessiz Usb Gaming Klavye + Mouse Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/19/79860650/156587611/1/1_org.jpg",
    price: "139,90 TL",
    firm: "Everest",
    name:
      "Sm-620 2in1 Bluetooth 2,4ghz Şarjlı Metalik Gri Süper Sessiz Mobil-tv-pc Destekli Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/23/78545685/87091472/1/1_org.jpg",
    price: "231,90 TL",
    firm: "logitech",
    name: "G G203 Lightsync Kablolu Oyuncu Mouse Black",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210417/15/80854841/70585720/1/1_org.jpg",
    price: "219 TL",
    firm: "Soundmax",
    name: "Sx-m8ld 20 Cm Led Tekli Midrange Speaker 400w Paketler Teklidir",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/7/51731753/122522342/1/1_org.jpg",
    price: "5.900 TL",
    firm: "LENOVO",
    name: '81w1005qtx Amd R7 3700u 8gb 512gb Ssd Fdos 15.6" Fhd',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210219/10/65174101/143731316/0/0_org.jpg",
    price: "2.649 TL",
    firm: "ACER",
    name:
      'Aspire 3 A315-34 N4120 4gb Ddr4 128 Gb Ssd Dos 15.6"" Taşınabilir Bilgisayar Nx-he3ey-00a',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20210322/8/74230400/72291058/1/1_org.jpg",
    price: "109 TL",
    firm: "Rampage",
    name: "Smx-r63 Glory Rgb Işıklı 6400dpi Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/9/51933158/65265124/1/1_org.jpg",
    price: "469 TL",
    firm: "Glorious",
    name: "Model O Mat Gaming Mouse ( Beyaz )",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210316/18/72275574/60127774/1/1_org.jpg",
    price: "277 TL",
    firm: "Pioneer",
    name:
      "Pıoneer Ts-g1620f 300w -16cm- Tweeterlı - 2020 Model Hoparlör - Anfi Uyumlu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201206/11/35390661/88187941/1/1_org.jpg",
    price: "39,90 TL",
    firm: "Onetick",
    name: "Razer Goliathus Büyük Boy 90 X 40 Cm Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/17/78279955/97536657/1/1_org.jpg",
    price: "54,94 TL",
    firm: "Nezih Case",
    name: "Apple Ipad Iphone Android Uyumlu Pencil 2in1 Disk Uçlu Stylus Kalem",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20210331/16/76724431/154645358/1/1_org.jpg",
    price: "6.631,63 TL",
    firm: "Dell",
    name:
      "Nb Vostro 3500-fb35f85n I5-1135g7 8g 512g Ssd 15.6 Fhd Mx330 2gvga Nontouch Ubuntu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210318/18/73423816/68508713/1/1_org.jpg",
    price: "22,50 TL",
    firm: "Wonderlust",
    name: "Profesyonel Tablet Ve Telefon Tutucu Stand 2 Kademeli Uzunluk Beyaz",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210421/11/81860747/15373119/1/1_org.jpg",
    price: "28 TL",
    firm: "Everest",
    name: "Smw-777 Usb 2.4 Ghz Optik Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210409/10/78844066/14302765/1/1_org.jpg",
    price: "282 TL",
    firm: "JBL",
    name: "Go2 Ipx7 Su Geçirmez Taşınabilir Bluetooth Hoparlör Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20210401/17/77051508/131635411/1/1_org.jpg",
    price: "194 TL",
    firm: "STARCOM",
    name: "Grafik Çizim Tableti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201017/13/16631533/21417832/1/1_org.jpg",
    price: "214,90 TL",
    firm: "Rampage",
    name: "Styles Siyah Usb 7.1 Rgb Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201218/18/39755396/120725101/0/0_org.jpg",
    price: "9.113 TL",
    firm: "Dell",
    name:
      "Inspiron 5400 I7-1165g7 8gb 1tb+256gb Ssd Mx330 2gb 23.8 Fhd Windows 10 Pro S65wp81256c",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210215/11/62634060/140822392/1/1_org.jpg",
    price: "3.199 TL",
    firm: "HP",
    name: "15s-eq1003nt 9yh96ea Amd 3050u 4gb 256 Ssd Fullhd Freedos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210227/18/67405925/146768003/1/1_org.jpg",
    price: "7.760 TL",
    firm: "MSI",
    name: "Rx580 Armor 8g Oc 256bit Gddr5  Ekran Kartı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210211/17/62024854/21278911/1/1_org.jpg",
    price: "1.599 TL",
    firm: "Samsung",
    name: 'Galaxy Tab A (2019, 10.1", Wi-fi)',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/2a5c809a/18819788/1/1_org.jpg",
    price: "399 TL",
    firm: "Samsung",
    name: "M3 1TB 2.5' USB 3.0 Taşınabilir Disk (STSHX-M101TCB)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210413/18/79840587/60766711/1/1_org.jpg",
    price: "74,90 TL",
    firm: "OEM",
    name: "Su Geçirmez Mini Bluetooth Duş Hoparlörü (Siyah)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210125/14/56981028/134048910/1/1_org.jpg",
    price: "79,90 TL",
    firm: "MICROSOFT",
    name: "Windows 10 Pro 32-64 Bit Dijital Lisans Anahtarı 1 Pc",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210405/22/78002353/133723242/1/1_org.jpg",
    price: "59 TL",
    firm: "Urban Sound",
    name: "Duş Hoparlörü Bluetooth Eller Serbest Su Geçirmez",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210405/11/3eb91f2a/61832297/1/1_org.jpg",
    price: "53 TL",
    firm: "IZOLY",
    name: "X20 Oyuncu Mouse Ve Mouse Pad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/11/79426831/57938127/1/1_org.jpg",
    price: "103 TL",
    firm: "HADRON",
    name: "Hd2008 4 Fanlı Notebook Soğutucu Standlı Laptop Altı Fan",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210312/15/70952150/66652918/1/1_org.jpg",
    price: "164,90 TL",
    firm: "Rampage",
    name: "Rm-k23 Mıssıon Kırmızı Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/17/79819941/159581241/1/1_org.jpg",
    price: "3.999 TL",
    firm: "HP",
    name:
      'AIO 22-DF0031NT 21,5" FHD, WINDOWS 10 HOME, INTEL CORE i3-10100T, 4 GB RAM, 256 GB SSD',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210302/11/67905860/81711096/1/1_org.jpg",
    price: "149,99 TL",
    firm: "Rampage",
    name:
      "Rm-k27 X-jammer 3,5 Mm 7 Renk Ledli Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty42/product/media/images/20210326/16/75482329/13575759/1/1_org.jpg",
    price: "209 TL",
    firm: "Everest",
    name:
      "Kb-r88 Rampage Kb-r88 Siyah Usb Mekanik Hisli Ve Pad Gaming Q Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/10/52002446/16294857/1/1_org.jpg",
    price: "869 TL",
    firm: "LG",
    name:
      '22mk400h 21.5" 1ms 75hz (Hdmı+analog) Freesync Full Hd Gaming Monitör',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/21/d2027a2c/66360980/1/1_org.jpg",
    price: "145,26 TL",
    firm: "SanDisk",
    name: "Ultra Dual Drive Go Type-C 128GB USB Bellek SDDDC3-128G-G46",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210322/14/74342134/59219470/1/1_org.jpg",
    price: "41,40 TL",
    firm: "Syrox",
    name: "Micro Usb + Usb Flash Bellek Otg 16gb Otg16",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200604/16/2272586/72855738/1/1_org.jpg",
    price: "123,50 TL",
    firm: "Xiaomi",
    name: "Mi Çift Modlu Kablosuz Bluetooth Mouse (siyah)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201027/15/19940091/91131728/1/1_org.jpg",
    price: "4.047 TL",
    firm: "Apple",
    name: 'iPad 8. Nesil 128 GB 10.2" WiFi Tablet - MYLF2TU/A Altın',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty59/product/media/images/20210121/18/55895348/13575606/1/1_org.jpg",
    price: "548,96 TL",
    firm: "Toshiba",
    name: 'Canvio Basic 2TB 2.5" Siyah Taşınabilir Disk HDTB420EK3AA',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty22/product/media/images/20201109/20/24646051/94128994/1/1_org.jpg",
    price: "3.699 TL",
    firm: "HP",
    name:
      '15-DB1030NT AMD Ryzen 3 3200U 4GB 128GB SSD Windows 10 Home 15.6" Taşınabilir Bilgisayar 7DT33EA',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210214/22/62515271/140285876/1/1_org.jpg",
    price: "105 TL",
    firm: "firststore",
    name: "V9000 Rgb Gaming Profesyonel Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200925/3/11793381/57360856/1/1_org.jpg",
    price: "399 TL",
    firm: "Rampage",
    name: "R36 Drop 7.1 Gaming Mikrofonlu Kulaklık - Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/14/97c91c35/65565980/1/1_org.jpg",
    price: "1.739 TL",
    firm: "ViewSonic",
    name:
      'VX2758-PC-MH 27" 144Hz 1ms (HDMI+Analog) FreeSync Full HD Kavisli Monitör',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210307/15/69530523/132122942/1/1_org.jpg",
    price: "73 TL",
    firm: "NETAPLUS",
    name:
      "Beyaz Masa Saati Bluetooth Taşınabilir Çok Amaçlı Led Dijital Saat Ve Alarmlı Ses Bombası Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210116/18/54045130/130675938/0/0_org.jpg",
    price: "179 TL",
    firm: "M90",
    name:
      "Ao 827 Taşınabilir Karaoke Mikrofonlu Led Işıklı Bluetooth Speaker Hoparlör Ses Sistemi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200918/12/11094164/84696714/1/1_org.jpg",
    price: "4.179 TL",
    firm: "Xiaomi",
    name: 'MI Curved Gaming 34" Oyuncu Monitör 144hz',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty89/product/media/images/20210403/16/5811d410/13034388/1/1_org.jpg",
    price: "2.512 TL",
    firm: "ASUS",
    name:
      "GTX1050 Ti Phoenix 4GB GDDR5 128Bit DX12 Nvidia Geforce Ekran Kartı PH-GTX1050TI-4G",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210110/15/50615983/128315605/0/0_org.jpg",
    price: "749 TL",
    firm: "MOBASS",
    name: "Mb-8 250w 100rms 20 Cm Midrange",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/17/47869757/16368545/1/1_org.jpg",
    price: "299 TL",
    firm: "Mikado",
    name:
      "2+1 Bluetooth Özellikli Usb+sd+fm Destekli Multimedia Radyolu Speaker",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210329/22/76038999/58049236/1/1_org.jpg",
    price: "378 TL",
    firm: "GAMETECH",
    name:
      "Gt-001 4x120mm Rainbow Fanlı Gaming Oyuncu Bilgisayar Kasası Psu Yok",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20210323/8/74543276/57538783/1/1_org.jpg",
    price: "216,50 TL",
    firm: "Rampage",
    name: "STORMY Siyah 7,1 Usb Surround Oyuncu Kulaklık+Mic",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210403/20/540f82f1/17816469/1/1_org.jpg",
    price: "881 TL",
    firm: "Samsung",
    name: "970 Evo Plus NVMe 500GB 3500MB/s-3300MB/s M.2 SSD (MZ-V7S500BW)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210211/23/62033519/98482624/1/1_org.jpg",
    price: "154 TL",
    firm: "Everest",
    name:
      "Kb-bt82 Beyaz Bluetooth Ultra Ince+şarjlı Mac/win/android/ıos Uyumlu Tablet Standlı Kablosuz Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210308/17/69829736/150272178/1/1_org.jpg",
    price: "119,90 TL",
    firm: "fortrek",
    name: "Rgb Düz Siyah 80*30 Cm Gaming Oyuncu Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210205/10/60126333/137894374/1/1_org.jpg",
    price: "119 TL",
    firm: "M90",
    name: "Dünya Işıklı Rgb Oyuncu Mouse Pad 80x30 Cm Kaymaz Ledli Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210320/13/73930895/135343821/1/1_org.jpg",
    price: "1.479 TL",
    firm: "Canon",
    name: "Pıxma G3420 Photoink Wifi Mürekkepli Megatank Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20200927/18/12214702/13870578/1/1_org.jpg",
    price: "369 TL",
    firm: "SHARKOON",
    name: "SHP650 V2 650W 80+ Güç Kaynağı SHP650V2",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/19/65040843/143557014/0/0_org.jpg",
    price: "6.699 TL",
    firm: "LENOVO",
    name: "V15-ııl I5 1035g1 20gb 512gb Ssd Mx330 Fdos Fhd 82c500r2txs3",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/19/9882cf4c/63121053/1/1_org.jpg",
    price: "1.189 TL",
    firm: "HP",
    name:
      "4zb78a Laserjet 107w Lazer Yazıcı Sınırsız Chipli Ve Tam Dolu Pluscopy Tonerli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/22/49117580/68766178/1/1_org.jpg",
    price: "9.599 TL",
    firm: "MONSTER",
    name:
      "Abra A7 V11.2 I7-10750h, 8gb, 250gb, 4gb Gtx1650, 17''' Fhd, Freedos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210203/16/59668024/103125886/1/1_org.jpg",
    price: "6.349 TL",
    firm: "Apple",
    name: "Ipad Air 10.9 Inç Wi-fi 64gb Yeşil Myfr2tu/a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210311/11/70612443/21721775/1/1_org.jpg",
    price: "291 TL",
    firm: "Huion",
    name: "Huıon H430p Dijital Grafik Çizim Tableti - Şarj Gerektirmez",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20210331/19/76758333/159306544/1/1_org.jpg",
    price: "236,40 TL",
    firm: "TLOSS",
    name:
      'Apple Macbook Pro 13" M1 A2338 2020 Uyumlu Kristal Mor Koruma Kılıfı Kapak + Ekran Filmi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/18/54034429/130666045/0/0_org.jpg",
    price: "50,15 TL",
    firm: "Samsung",
    name:
      'Microsonic Galaxy Tab A 8" 2019 T290 Kılıf 360 Rotating Stand Deri Mavi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210216/9/63172501/141329960/1/1_org.jpg",
    price: "9.399 TL",
    firm: "MONSTER",
    name:
      "Abra A7 V12.4.3 Intel Core I5 10200h 8gb 500gb Ssd Gtx 1650ti Win 10 17'' Dizüstü Bilgisayar",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201208/10/35894028/62932447/1/1_org.jpg",
    price: "5.899 TL",
    firm: "Casper",
    name:
      "Nirvana S500.1021-8e50x-g-f 15.6 Intel Core I5-10210u 8gb Ddr4 Ram 480gb Ssd Mx230 Dos Fullhd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200907/20/10000895/85103911/0/0_org.jpg",
    price: "254,90 TL",
    firm: "Pioneer",
    name: "Pıoneer Ts-f1634r 16cm Çifti 400w Tweeterlı Profesyonel Hoporlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/3/58165027/14302772/1/1_org.jpg",
    price: "271,60 TL",
    firm: "JBL",
    name: "Go 2 Ipx7 Bluetooth Taşınabilir Hoparlör Mavi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/13/e95c8c65/62061643/1/1_org.jpg",
    price: "725 TL",
    firm: "Pantum",
    name: "P2500w",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/20/48856939/61056253/1/1_org.jpg",
    price: "3.050,36 TL",
    firm: "Canon",
    name: "Mf443dw Laser Yaz/tar/fot A4 mf421dw Yerine",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/13/79452996/57437845/1/1_org.jpg",
    price: "63,90 TL",
    firm: "Gomax",
    name: "Standlı Yükseklik Ayarlı Notebook Laptop Soğutucu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/03/70531d03/60446563/1/1_org.jpg",
    price: "329,90 TL",
    firm: "GamePower",
    name: "Ogre Rgb Kırmızı Swıtch Mekanık Gamıng Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210324/10/74880484/66586650/1/1_org.jpg",
    price: "109,90 TL",
    firm: "Rampage",
    name:
      "Smx-r85 Gentle 6400dpi Rgb Ledli Süper Hafif Makrolu Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20210316/18/72289675/153364216/0/0_org.jpg",
    price: "699,90 TL",
    firm: "Türksit",
    name: "Çağrı Oyuncu Koltuğu Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20201001/19/12914781/60933746/2/2_org.jpg",
    price: "393,90 TL",
    firm: "HP",
    name: "Beyaz Sprocket 200 Fotoğraf Yazıcısı 1as85a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210410/0/78991764/57141476/1/1_org.jpg",
    price: "65 TL",
    firm: "TG",
    name: "Wireless ve Bluetooth Özellikli Taşınabilir Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20201105/15/22768772/101394722/1/1_org.jpg",
    price: "1.098 TL",
    firm: "Samsung",
    name:
      "24” T350 Çerçevesiz Ips 75hz Freesync Hdmı Full Hd Gaming Monitör Lf24t350fhmxuf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210129/16/58397596/135757018/1/1_org.jpg",
    price: "109,99 TL",
    firm: "Hot Real",
    name: "Yth Bilgisayar Çanta",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/09/5d692f37/14668308/1/1_org.jpg",
    price: "1.289 TL",
    firm: "SanDisk",
    name: "Extreme 1TB Taşınabilir SSD SDSSDE60-1T00-G25",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210205/2/60063567/137808194/1/1_org.jpg",
    price: "4.437,42 TL",
    firm: "LENOVO",
    name:
      'V15 82c70063tx19 Ryzen3 3250u 12gb 256ssd 15.6" Fullhd Freedos Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210327/14/75657588/63116444/1/1_org.jpg",
    price: "79,50 TL",
    firm: "Diwu",
    name: "Su Geçirmez Mini Bluetooth Duş Hoparlörü (Beyaz)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210217/21/64219691/119158158/1/1_org.jpg",
    price: "109,90 TL",
    firm: "tuneex",
    name:
      "2'li Set - 5 Kademeli Çelik Notebook Laptop Yükseltici Altlık & Telefon Tablet Tutucu Stand - 2 Ürün",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210325/0/75068869/76042036/1/1_org.jpg",
    price: "127 TL",
    firm: "Dexim",
    name: "Notebook Soğutucu Stand - Mavi Led'li - 4 Fanlı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210419/11/81265526/60838205/1/1_org.jpg",
    price: "63 TL",
    firm: "POLYGOLD",
    name: "X7 Işıklı Oyuncu Mouse + Mousepad Mavi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210408/18/78779959/122033970/1/1_org.jpg",
    price: "349 TL",
    firm: "JBL",
    name: "Go 3 Mavi Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/10/78103795/120945911/1/1_org.jpg",
    price: "68,90 TL",
    firm: "By mia",
    name: "T&g Bluetooth Hoparlör Kablosuz Taşınabilir Ses Bombası Extra Bass",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201201/19/34182864/114998545/0/0_org.jpg",
    price: "296,80 TL",
    firm: "Komtech",
    name: "Titan5 Btmı 2+1 Ses Sistemi Subwoofer Bluetooth Hoparlör 20watt",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210416/3/80492441/126190251/1/1_org.jpg",
    price: "92 TL",
    firm: "Kingboss",
    name: "Dual Band Usb 3.0 Adaptör Kablosuz Wifi Alıcı Ac1200 Mbps",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210420/10/81547550/108837255/1/1_org.jpg",
    price: "887 TL",
    firm: "Alcatel",
    name: 'Siyah 1t 10" 2020 32 Gb Wifi Tablet',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/02/ffb9df81/19984095/1/1_org.jpg",
    price: "134 TL",
    firm: "Rampage",
    name: "SN-RX10 ORTHUS 3,5mm Esnek Mikrofonlu Oyuncu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210421/12/81879360/153385581/1/1_org.jpg",
    price: "48,90 TL",
    firm: "KTRTECH",
    name: "Apple 2.4ghz Wıreless Ofis Mouse Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/15/4da1b14b/13623803/1/1_org.jpg",
    price: "118,90 TL",
    firm: "MICROSOFT",
    name: "Microsoft Mobile 1850 Kablosuz Mor Mouse (U7Z-00043)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210119/13/55146534/128962667/1/1_org.jpg",
    price: "84,90 TL",
    firm: "Everest",
    name: "Rage-x1 Usb Siyah 8 Tuşlu Led Işıklı 6400dpi Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200727/10/6040153/59197481/1/1_org.jpg",
    price: "149 TL",
    firm: "Rampage",
    name: "SMX-R44 Makrolu Siyah 6400dpi RGB Ledli Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210311/11/70592822/75745745/1/1_org.jpg",
    price: "29,99 TL",
    firm: "Keep Armor",
    name: "Pubg Oyun Kulaklığı Mikrofonlu Oyuncu Kulaklığı Gaming Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/15/79797136/163375651/1/1_org.jpg",
    price: "289 TL",
    firm: "Everest",
    name: "Siyah Webcam Sc-hd02",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210330/13/76273512/13034330/1/1_org.jpg",
    price: "274,99 TL",
    firm: "A4 Tech",
    name: "Webcam Pk-910h 16mp 1080p Full Hd Kamera",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200404/2/1133404/65767948/1/1_org_zoom.jpeg",
    price: "1.486,65 TL",
    firm: "XDrive",
    name: "15'Li Profesyonel Oyun | Oyuncu Koltuğu Yeşil/Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210105/1/46380440/126383971/0/0_org.jpg",
    price: "308,83 TL",
    firm: "EDİSON",
    name: "Oto Mıdrange Component 16cm 240w Pro 2 Adet Edıson Ed-1620cs",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/12/d6541a35/65235762/1/1_org.jpg",
    price: "118,99 TL",
    firm: "TURBOX",
    name: "Tr-k12 Rgb Işıklı Metal Kasa Bilek Padli Gaming Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/11/80010567/101882017/1/1_org.jpg",
    price: "1.759 TL",
    firm: "Casper",
    name:
      'Excalibur M.e24fhd-g 24.5" 165hz 1ms (Hdmı+display) Freesync + G-sync Fhd Led Monitör',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201125/10/31994348/108944297/1/1_org.jpg",
    price: "329,99 TL",
    firm: "Performax",
    name: "Xenom Siyah Akrilik Pencereli 4xraınbow Fan Atx Kasa",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200928/23/12407641/75837375/1/1_org.jpg",
    price: "149 TL",
    firm: "Canar",
    name: "939-blue 2*usb 2.0 Atx Boş Bilgisayar Kasası Powersız",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/04/77f6faea/17927355/1/1_org.jpg",
    price: "52,99 TL",
    firm: "Kingston",
    name: "64GB DataTraveler 106 USB 3.0 Usb Bellek DT106/64GB",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210405/17/77930771/160908223/1/1_org.jpg",
    price: "329 TL",
    firm: "Rampage",
    name: "Phantom X1 Usb 7.1 Rgb Led Mikrofonlu Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200331/16/805985/15358298/1/1_org.jpg",
    price: "279 TL",
    firm: "GamePower",
    name: "Luna Siyah 7.1 Pro Gaming Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/18/79557720/58017105/1/1_org.jpg",
    price: "29,99 TL",
    firm: "HADRON",
    name: "300 Mbps Antenli Wireless Adaptör Kablosuz Ağ Pc Wifi Alıcı Usb",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210125/13/56959430/134018968/4/4_org.jpg",
    price: "134,90 TL",
    firm: "Cooltech",
    name: "16gb Dijital Ses Kayıt Cihazı 180 Saat Kesintisiz Kayıt",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/17/45744513/61584909/1/1_org.jpg",
    price: "600 TL",
    firm: "İRHANLAR",
    name: "Ses Kayıt Cihazı Kalem Görünümlü",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210114/12/53138328/70047742/1/1_org.jpg",
    price: "8.249 TL",
    firm: "Casper",
    name:
      "Excalibur G770.1030-bvj0x Intel 10.nesil I5-10300h 16gb Ram 500gb Nvme Ssd 4gb Gtx1650ti Dos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty61/product/media/images/20210124/5/56652322/133710885/0/0_org.jpg",
    price: "949,90 TL",
    firm: "TEKNETSTORE",
    name:
      "Apple Ipad Pro 11 2020 Ultra Ince Kablosuz Bluetooth Klavye & Trackpad Magic Keyboard Smart Kılıf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20210331/8/76506981/13436704/2/2_org.jpg",
    price: "294,84 TL",
    firm: "logitech",
    name: "K380 Bluetooth Siyah Klavye 920-007586",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201216/10/38872623/21900147/1/1_org.jpg",
    price: "1.699 TL",
    firm: "HP",
    name: "4zb84a Laserjet 137fnw Yazıcı/tarayıcı/fotokopi/faks A4",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/5/77610674/126113735/1/1_org.jpg",
    price: "7.777 TL",
    firm: "LENOVO",
    name:
      "Yoga C740-2'si 1 Arada-i5 1035g4 8gb-256gb Ssd-14'' Fhd Dokunmatik-win 10-81tc000jus-gümüş",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/10/79714053/13033865/2/2_org.jpg",
    price: "91,99 TL",
    firm: "logitech",
    name: "910-004642 M170 Kablosuz Siyah Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty73/product/media/images/20210218/16/64976235/143431342/1/1_org.jpg",
    price: "57,90 TL",
    firm: "E TicaShop",
    name: 'Galaxy Tab A7 10.4" Sm-t500 Sm-t507 Uyumlu Kılıf Set',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/10/77764998/126332163/1/1_org.jpg",
    price: "142,80 TL",
    firm: "yk desing",
    name:
      "4in1 Rgb Klavye Mause Razer Pad Kulaklık Esport Oyuncu Gaming Combo Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210311/13/70693230/14668693/1/1_org.jpg",
    price: "419 TL",
    firm: "Corsair",
    name: "Cmk8gx4m1d3000c16 Vengeance 8gb 3000mhz Ddr4 Cl16 Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/16/50395583/15684148/1/1_org.jpg",
    price: "1.999 TL",
    firm: "JBL",
    name: "Xtreme2 Mavi Taşınabilir Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200819/16/8373986/77628337/7/7_org.jpg",
    price: "25.491,50 TL",
    firm: "XDrive",
    name: "Bayraktar Oyun ve İş İstasyonu / Gaming Workstation",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty24/product/media/images/20201119/0/28891128/106310358/1/1_org.jpg",
    price: "129,90 TL",
    firm: "Seagate",
    name: "320 Gb Harddisk",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty78/product/media/images/20210301/15/67659731/17669938/1/1_org.jpg",
    price: "274,50 TL",
    firm: "Gigabyte",
    name: "Gıgabyte Gstfs31240gntd 240gb Sata 3.0 500-420mb/s 2.5'' Flash Ssd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200904/11/9624116/84502377/1/1_org.jpg",
    price: "1.999 TL",
    firm: "LENOVO",
    name:
      "Tab M10 Fhd Plus Tb-x606f 4gb/128gb Wi-fi+bt 10.3” Tablet Za5t0276tr",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/8/51859129/13451942/1/1_org.jpg",
    price: "84,90 TL",
    firm: "Classone",
    name: "M30 Notebook Standı + Soğutucu Mavi Led 14-15.6 Inch, 2 Fan, 2 Usb",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210316/1/71934301/152859035/0/0_org.jpg",
    price: "108 TL",
    firm: "DantesOnline",
    name:
      "Apple Ipad Air 4 10.9 2020 Kılıf Katlanır Kalemlikli Standlı Uyku Modlu Akıllı Kılıf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/11/77775312/72034099/1/1_org.jpg",
    price: "3.449 TL",
    firm: "Samsung",
    name: 'Galaxy Tab S6 Lite Lte Sm-p617 64gb 10.4" Tablet - Dağ Grisi',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20210322/16/74378157/12906335/1/1_org.jpg",
    price: "181,30 TL",
    firm: "Hi-Level",
    name: "Hı-level Ultra 120 Gb Sata3 550/530mb/s + Aparat Ssd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty79/product/media/images/20210303/17/68377054/59161868/1/1_org.jpg",
    price: "19 TL",
    firm: "Trendmallar",
    name: "Işıklı Bluetooth Hoparlör Laptop Bilgisayar Kablosuz Ses Bombası",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200704/14/3816579/75885868/0/0_org.jpg",
    price: "195 TL",
    firm: "HP",
    name: "H360g 7.1 Surround Usb Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/02/33c4dc0e/64014241/1/1_org.jpg",
    price: "229 TL",
    firm: "Rampage",
    name: "Miracle X3 Plus Rgb 7.1 Miktrofonlu Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210406/0/78015345/119891873/1/1_org.jpg",
    price: "49,80 TL",
    firm: "Universal",
    name:
      "Detayteknoloji Notebook Laptop Standı Özel Yükseltici Aparat Alüminyum Tasarım",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210401/20/77094003/74129861/1/1_org.jpg",
    price: "10.329 TL",
    firm: "MSI",
    name:
      'GF65 Thin 10SDR-638XTR Intel Core i5 10300H 8GB 512GB SSD GTX1660Ti Freedos 15,6" FHD',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201124/10/30695619/110722531/1/1_org.jpg",
    price: "175 TL",
    firm: "WD",
    name: 'Elements 320GB USB 3.0 2.5" Taşınabilir Disk',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210419/0/81100989/123599980/1/1_org.jpg",
    price: "69,90 TL",
    firm: "Urban Sound",
    name:
      "Bluetooth Hoparlör Ses Bombası Eller Serbest Konuşma Duş Tipi, Suya Dayanıklı Pembe D-195",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210205/18/60278669/138066808/1/1_org.jpg",
    price: "278 TL",
    firm: "Rampage",
    name:
      "BYGAME-K1 RGB Led Frame Rainbow Mekanik Blue Switch Gaming Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/14/64927755/143311974/0/0_org.jpg",
    price: "10.799 TL",
    firm: "ASUS",
    name:
      'Rog Zephyrus G14 Ga401ıı-bm012-gaming Amd Ryzen 7 4800hs 16 Gb 512 Gb Ssd Gtx1650ti 14" Fhd Dos',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200415/14/1883890/42618546/4/4_org.jpg",
    price: "320 TL",
    firm: "Corsair",
    name: "HS35 Siyah Stereo Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/07/954deb65/19712624/1/1_org.jpg",
    price: "5.799 TL",
    firm: "Apple",
    name:
      'iPad Mini 64GB 7.9" Wi-Fi + Cellular Retina 4G Tablet - Uzay Grisi MUX52TU/A',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201208/14/36071806/116990498/0/0_org.jpg",
    price: "944,90 TL",
    firm: "Soundmax",
    name: "Paket 30cm Bass 1500w 400rms 4kanallı Anfi 3000wat 4x60rms",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/10/79715167/89135892/1/1_org.jpg",
    price: "258 TL",
    firm: "logitech",
    name: "Logıtech Mk295 Kablosuz Set Usb Siyah 920-009804",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200903/21/9561676/84400098/0/0_org.jpg",
    price: "169,90 TL",
    firm: "GamePower",
    name: "Ursa 10.000 Dpı Pro Gamıng Oyuncu Mouse + Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty46/product/media/images/20210331/14/76656499/159172908/0/0_org.jpg",
    price: "1.295 TL",
    firm: "Amd",
    name: "Ryzen 3 3200g Mpk 3.6 Ghz (4.0 Ghz Max.) Soket Am4 Yd3200c5fhmpk",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200827/13/8923094/83040043/0/0_org.jpg",
    price: "17,99 TL",
    firm: "ADDISON",
    name: "300870 Ekran Temizleyici Sprey 200ml + Mikrofiber Bez",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210422/10/82048623/89005857/1/1_org.jpg",
    price: "1.148 TL",
    firm: "LENOVO",
    name: "Tab M10 Hd Tb x505f 32gb 10.1inç Ips Wifi Tablet Siyah Za590015tr",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201012/3/15163728/81321918/1/1_org.jpg",
    price: "700 TL",
    firm: "MSI",
    name: "B460m-a Pro Intel B460 2933mhz Ddr4 Matx Anakart",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210312/15/70952110/66607006/1/1_org.jpg",
    price: "164,90 TL",
    firm: "Rampage",
    name: "Rm-k23 Mıssıon Yeşil Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/6/51472517/63127162/1/1_org.jpg",
    price: "11.744,50 TL",
    firm: "LENOVO",
    name: 'L13 Yoga 20r5s01400 I7-10510u 16gb 512gb 13.3" Touch Dos',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210406/05/4a3d0826/64526677/1/1_org.jpg",
    price: "1.249 TL",
    firm: "SteelSeries",
    name:
      "Apex 5 Hibrit Mekanik Gaming Klavye - Oled Ekran - Bilek Desteği - Türkçe Q",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210417/10/80807336/76335112/1/1_org.jpg",
    price: "134 TL",
    firm: "Ghost",
    name: "T4-9009 Led Işıklı Mikrofonlu Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210315/17/71403275/152430225/0/0_org.jpg",
    price: "1.549 TL",
    firm: "For-X",
    name: "X-12pro 30 Cm 3600 Watt 1200 Rms Spl Subwoofer",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty38/product/media/images/20201228/18/43060723/124332251/1/1_org.jpg",
    price: "5.878 TL",
    firm: "LENOVO",
    name:
      'V15 ADA AMD Ryzen 5 3500U 8GB 512GB SSD Radeon Vega 8 Windows 10 15.6" FHD Laptop 82C70065TX',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/12/34380636/13436611/1/1_org.jpg",
    price: "198,50 TL",
    firm: "SanDisk",
    name: "Ixpand Mini Iphone Usb 3.0 Bellek 32gb Sdıx40n-032g-gn6nn",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/4/70366521/150958856/0/0_org.jpg",
    price: "70 TL",
    firm: "AsilAksesuar",
    name:
      "Samsung Galaxy Tab A7 10.4 T500 Kılıf Çocuklar Için Eğlenceli Standlı Korumalı Silikon Tablet Kılıfı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210116/19/54054570/130689324/0/0_org.jpg",
    price: "117,20 TL",
    firm: "Samsung",
    name: 'Microsonic Galaxy Tab S6 Lite 10.4" P610 Kılıf Origami Pencil Siyah',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/10/62096368/14936362/1/1_org.jpg",
    price: "579,90 TL",
    firm: "Türksit",
    name: "Lidya Plastik Kol Ve Krom Ayakli Yönetici Koltuğu Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/9/79699401/65508210/1/1_org.jpg",
    price: "89 TL",
    firm: "Everest",
    name: "Km2510 Q Multimedia Kablosuz Klavye Mouse Seti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200615/23/2889900/74219660/0/0_org.jpg",
    price: "99,90 TL",
    firm: "Techmaster",
    name: "Kablosuz Kalem Mouse 2.4ghz Pen Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/19/79868286/15109807/1/1_org.jpg",
    price: "83,50 TL",
    firm: "Everest",
    name: "Sgm-x7 Pro Gaming Mouse Pad Ve Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210123/17/56468387/133492058/0/0_org.jpg",
    price: "919,90 TL",
    firm: "Benks",
    name:
      "Apple New Ipad Pro 12.9 2018 Multifunctional Kablosuz Klavyeli Kılıf Cep-h",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/18/54048854/130685246/0/0_org.jpg",
    price: "101,35 TL",
    firm: "Samsung",
    name:
      'Microsonic Galaxy Tab S6 Lite 10.4" P610 Kılıf Origami Pencil Rose Gold',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201208/15/36112352/117042499/1/1_org.jpg",
    price: "59,99 TL",
    firm: "Teknoloji Gelsin",
    name:
      "Kulak Üstü Extra Bass Mikrofonlu Uzaktan Eğitime Uygun Kablolu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210312/12/70886987/72824688/1/1_org.jpg",
    price: "6.399 TL",
    firm: "LENOVO",
    name:
      'V15 IIL Intel Core i5 1035G1 8GB 256GB SSD UHD Graphics Windows 10 15.6" FHD Laptop 82C5000QTX',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210413/10/79712429/12574151/2/2_org.jpg",
    price: "109,99 TL",
    firm: "logitech",
    name: "910-002235 M185 Gri Kablosuz Mouse Optik 1000 Dpı Buton",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty18/product/media/images/20201030/14/20599820/99132932/1/1_org.jpg",
    price: "5.339 TL",
    firm: "LG",
    name: "35wn75c-b 35'' Ultrawide™ Qhd Hdr Va Kavisli Monitör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210328/7/75754021/17927291/1/1_org.jpg",
    price: "1.871 TL",
    firm: "Everest",
    name: "Rampage Forza Ftx-1200-1 1200w Güç Kaynağı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200831/14/9164215/83445609/0/0_org.jpg",
    price: "2.891,20 TL",
    firm: "Black Gold",
    name:
      'Bilgisayartopla I5-3470 3.60ghz 8gb 240ssd 20" Masaüstü Full Bilgisayar Seti',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201201/13/34071501/13324843/1/1_org.jpg",
    price: "2.007,99 TL",
    firm: "Amd",
    name: "Ryzen 7 2700X 3.7GHz/4,3GHz 20MB Cache Soket AM4 İşlemci",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/13/8569854b/65332218/1/1_org.jpg",
    price: "129 TL",
    firm: "Rampage",
    name:
      "Smx-g72 Greedy Usb Siyah 4800dpi Rgb Ledli Makrolu Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210111/9/50780318/128463814/1/1_org.jpg",
    price: "57,90 TL",
    firm: "E TicaShop",
    name:
      'Pembe Galaxy Tab A7 10.4" Sm-t500 Sm-t507 Uyumlu Kılıf Set /Kılıf+ Temperli Cam + Kalem',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20200907/11/9929227/10670888/1/1_org.jpg",
    price: "57,50 TL",
    firm: "Samsung",
    name: "Evo Plus 32 gb Micro SD Hafıza Kartı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201226/2/42398563/123455987/0/0_org.jpg",
    price: "64 TL",
    firm: "HP",
    name: "Deskjet 2710/ 2720 Yazıcı Uyumlu 305 Kartuş Dolum Seti 4x100ml",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210328/15/75771600/114363236/1/1_org.jpg",
    price: "54,99 TL",
    firm: "HELİXSUN",
    name: "Nıght Mousepad Büyük Boy Renkli Gaming Oyuncu Xl 70x30",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty84/product/media/images/20210315/16/71331296/64792328/1/1_org.jpg",
    price: "478 TL",
    firm: "Alcatel",
    name: '1t 7" 16gb Prıme Black Kılıfsız Tablet',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty48/product/media/images/20210106/14/47769034/82406429/1/1_org.jpg",
    price: "259 TL",
    firm: "Pioneer",
    name: "Siyah Ts-g1320f Tweeterlı Oto Hoparlör 13 cm 250 w",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20201204/11/34907960/115835605/1/1_org.jpg",
    price: "515 TL",
    firm: "Hometech",
    name: "Alfa 7lm 32 Gb  Lacivert Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210311/14/70705228/59473633/1/1_org.jpg",
    price: "99 TL",
    firm: "Havana",
    name: "300mbps Access Point Wifi Repeater Kablosuz Sinyal Güçlendirici",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210224/18/66623020/127824556/1/1_org.jpg",
    price: "123,50 TL",
    firm: "Everton",
    name: "Rt-301 Nostaljik Görünümlü Bluetoothlu Mp3 Çalar Radyo Müzik Kutusu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20201003/13/13191127/85875382/1/1_org.jpg",
    price: "166,90 TL",
    firm: "GamePower",
    name: "Gp700 Rgb 700x300x4mm Gaming Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210325/9/75151644/157251931/1/1_org.jpg",
    price: "1.499 TL",
    firm: "ASRES",
    name: "Tablet + 4.5g Sim Kart Destekli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20201020/9/17534411/95296587/1/1_org.jpg",
    price: "1.339 TL",
    firm: "Hometech",
    name: 'Alfa-10tb 64gb 10" Ips Tablet + Klavye + Kılıf',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210104/11/45651129/126145352/1/1_org.jpg",
    price: "115 TL",
    firm: "M90",
    name:
      "7.1 Profesyonel Led Işıklı Gaming Oyuncu Kulaklığı Bilgisayar Ps4 Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210325/17/75273175/123446906/1/1_org.jpg",
    price: "91,90 TL",
    firm: "Techatech",
    name: "Wonex Wd-103 Rgb Led Işıklı Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/19/79569948/76554106/1/1_org.jpg",
    price: "46 TL",
    firm: "DALONG",
    name: "Dünya Haritalı Mouse Pad 90x40 cm",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/6/51422849/128017381/1/1_org.jpg",
    price: "299,90 TL",
    firm: "BK DESING",
    name:
      "Akıllı Taşınabilir Bluetooth Extrabas Hoparlör, Disko Işıklı Karaoke Ses Sistemi, Mikrofon, Kumanda",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/14/79773513/62953378/1/1_org.jpg",
    price: "27 TL",
    firm: "Powermaster",
    name:
      "20 Metrelik Cat6 Lan Fabrikasyon Internet Data Kablosu(ethernet Modem Rj45 Uçlu Jacklı Network Adsl)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty53/product/media/images/20210115/15/53665647/130265402/1/1_org.jpg",
    price: "99,90 TL",
    firm: "Everest",
    name: "Rampage Rage-x2 Siyah 6400 Dpı Rgb Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty83/product/media/images/20210314/23/71142886/12120580/1/1_org.jpg",
    price: "249 TL",
    firm: "logitech",
    name: "G300s Kablolu Oyuncu Mouse + Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210203/9/59508073/87997694/1/1_org.jpg",
    price: "92,90 TL",
    firm: "Everest Rampage",
    name: "SGM-05 X-racer 7d Rgb 6400dpi Optik Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20201216/10/38882598/119784394/1/1_org.jpg",
    price: "28 TL",
    firm: "ArtProdüksiyon",
    name: "Laptop Tablet Standı Sehpası Soğutma Portatif Masif Ağaç Oyma",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210204/22/60029335/137755794/1/1_org.jpg",
    price: "229 TL",
    firm: "SNEXPRES",
    name:
      "Yoro V5 Işıklı Ps4 One-pc Gamer Oyuncu Kulaklığı+gamer Klavye+gamer Mouse Seti V5 Klavye Mouse Seti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty10/product/media/images/20200810/15/7734575/80969521/1/1_org.jpg",
    price: "1.499 TL",
    firm: "HP",
    name: 'X24ih 23.8" 144hz 1ms Hdmı+Display Full Hd Oyuncu Monitör 2w925aa',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210415/15/80317753/163592147/3/3_org.jpg",
    price: "139,90 TL",
    firm: "Rampage",
    name:
      "Smx-g38 Claw Usb 8 Makro Tuşlu 7200dpi Rgb Ledli Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210403/23/00ae1824/21605773/1/1_org.jpg",
    price: "74,98 TL",
    firm: "TP-LINK",
    name: "UB400 Bluetooth 4.0 Mini USB Adaptör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210310/17/70485408/148046098/1/1_org.jpg",
    price: "2.024,36 TL",
    firm: "Yazıcı Dünyası",
    name:
      "Pekoko Mini Renkli Taşınabilir Barkod, Resim,logo,tarih,etiket Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201008/9/14093546/81886031/1/1_org.jpg",
    price: "459,90 TL",
    firm: "Xiaomi",
    name: "Mi Taşınabilir Fotoğraf Yazıcısı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210419/15/81354610/165374717/0/0_org.jpg",
    price: "649 TL",
    firm: "Samsung",
    name: "Galaxy Tab S7 Kapaklı Kılıf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/6/51398098/58666061/1/1_org.jpg",
    price: "7.299 TL",
    firm: "Casper",
    name:
      "Excalıbur G770.9300-8dh0x I5-9300h Rgb 8gb 240gb Ssd Gtx1650 4gb 15.6'' Freedos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/7/51658130/101533685/1/1_org.jpg",
    price: "14,80 TL",
    firm: "OEM",
    name: "Oyuncu Mousepad 29*25cm Kaymaz Mause Ped",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210222/18/65927193/125320129/1/1_org.jpg",
    price: "28,49 TL",
    firm: "Kara ticaret",
    name:
      "Telefon Ekran Büyüteci Görüntü Büyütme Geniş Ekran Video Ekran Büyütücü 3d Büyüteç",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210406/14/c2f2f910/65509004/1/1_org.jpg",
    price: "969 TL",
    firm: "LENOVO",
    name: 'Tab M8 TB-8505F 32GB 8" IPS Tablet Gri ZA5G0100TR',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty19/product/media/images/20210324/13/74909972/12574206/1/1_org.jpg",
    price: "199 TL",
    firm: "logitech",
    name: "Mk240 Klavye Set Siyah/sarı 920-008215",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty28/product/media/images/20201201/14/34086228/101925759/1/1_org.jpg",
    price: "1.199 TL",
    firm: "Vestel",
    name: "V Tab Z1 64gb Ips Ekran 10.1’’ Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210311/16/70749651/119097963/1/1_org.jpg",
    price: "11,25 TL",
    firm: "THREESTEP",
    name:
      "Pratik Web Kamera Kapatıcı - Ekstra Ince 0.7mm - Webcam Cover Gizliliğiniz Için Güvenli Kullanım",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty32/product/media/images/20201214/4/38207192/119048675/1/1_org.jpg",
    price: "6.999 TL",
    firm: "Huawei",
    name: "Huaweı Matebook D15 R7 8+512gb - Gri",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200610/12/2501373/73467862/1/1_org.jpg",
    price: "489,90 TL",
    firm: "Rampage",
    name:
      "Rmk-x1 Mıracle Usb Full Rgb Aydınlatmalı Q Jixian Blue Switch Gaming Oyuncu Mekanik Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20201015/19/16214533/65602552/1/1_org.jpg",
    price: "309 TL",
    firm: "GamePower",
    name: "Ogre Rainbow Mekanik Mavi Switch Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210328/16/75775391/108739190/1/1_org.jpg",
    price: "189 TL",
    firm: "FRISBY",
    name:
      "Hx-7 Pro 7.1 Usb Surround Rgb Ledli Profesyonel Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty34/product/media/images/20201210/10/37018409/69362610/1/1_org.jpg",
    price: "249,90 TL",
    firm: "Rampage",
    name:
      "Rm-k10 Amazıng Siyah Usb 7.1 Noice Cancelling Mic Rgb Ledli Gaming Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210330/16/76356706/12981855/1/1_org.jpg",
    price: "929,99 TL",
    firm: "Amd",
    name: "Ryzen 3 2200g 3.5 Ghz Am4 Soket 6mb Önbellek 65w 14nm Işlemci",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210401/15/77015652/159646109/0/0_org.jpg",
    price: "3.604,42 TL",
    firm: "LENOVO",
    name:
      'V15 82c70064tx05 Gold 3150u 8gb 256ssd 15.6" Fullhd Freedos Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/17/78477347/115809780/1/1_org.jpg",
    price: "8.998,36 TL",
    firm: "LENOVO",
    name:
      'IP Gaming 3 AMD Ryzen 5 4600H 16 GB 512GB SSD GTX1650 Ti Fdos 15,6" FHD Gaming Laptop 82EY00D2TX',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210317/23/73167803/61823998/1/1_org.jpg",
    price: "113,90 TL",
    firm: "Mikado",
    name: "Md-336 2.0 6 Watt Rgb Ledli Siyah Multimedia Usb Speaker",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210106/15/47803159/65542529/1/1_org.jpg",
    price: "1.852,15 TL",
    firm: "XDrive",
    name: "Akıncı Profesyonel Oyuncu Koltuğu Gri/Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210404/19/ccd97d29/59480897/1/1_org.jpg",
    price: "22,40 TL",
    firm: "3D",
    name: "Rekor 4.0 Version Usb Bluetooth Adaptör Dongle",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210420/13/81573597/137515927/1/1_org.jpg",
    price: "229,90 TL",
    firm: "SNEXPRES",
    name:
      "Yoro V5 Işıklı Ps4-xbox One-pc Gamer Oyuncu Kulaklığı + Gamer Klavye + Gamer Mouse Seti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210204/10/59866592/118249900/1/1_org.jpg",
    price: "520 TL",
    firm: "Pioneer",
    name: "Pıoneer Ts-a6977s Oval Hoparlör 650watt 100rms Orjinal Ürün",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210402/13/3b89beda/12798740/1/1_org.jpg",
    price: "1.068 TL",
    firm: "Samsung",
    name:
      'LS24F350FHMXUF 23.5" 4ms (Analog+HDMI) Full HD FreeSync PLS Oyuncu Monitör',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty12/product/media/images/20201013/16/15534875/92879794/1/1_org.jpg",
    price: "4.949 TL",
    firm: "HP",
    name:
      'Rebak Ryzen 3 4300u 8gb 512gb Ssd 15.6" Fhd Freedos Taşınabilir Bilgisayar 2D8G4EA',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210410/12/79042616/147320636/1/1_org.jpg",
    price: "144,99 TL",
    firm: "Mastertech",
    name:
      "Everton Rt-301 Nostalji Bluetooth Radyo ,usb, Sd , Mp3 Player-everton",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210402/23/77344150/17852261/1/1_org.jpg",
    price: "68,10 TL",
    firm: "Urban Sound",
    name: "7 Renkli Gece Lambalı Blueooth Hoparlör -",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210412/21/79609749/57938125/1/1_org.jpg",
    price: "17,99 TL",
    firm: "Powermaster",
    name: "3 Metre Sargılı Hdmi Kablo Full Hd 2160p Kaliteli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210329/17/76002534/158437603/1/1_org.jpg",
    price: "5.199 TL",
    firm: "Exper",
    name:
      "Pc Flex Dex520 H3ı594f-11gt1f H310 I5 9400f 8gb 240gb Gtx1050ti 4gb Klavye Mouse Fdos",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/15/f4d503e2/13621768/1/1_org.jpg",
    price: "129,90 TL",
    firm: "MICROSOFT",
    name: "Microsoft Mobile 1850 Kablosuz Pembe Mouse (U7Z-00023)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201212/5/37738820/74725577/1/1_org.jpg",
    price: "815 TL",
    firm: "HP",
    name: 'S700 6mc15aa 2.5" 1 Tb Sata 3 Ssd',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210111/9/50784507/128467891/1/1_org.jpg",
    price: "57,90 TL",
    firm: "E TicaShop",
    name:
      'Galaxy Tab A7 10.4" Sm-t500 Sm-t507 Kılıf Set ( Kılıf+ Temperli Cam + Kalem ) Mor',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210309/11/70126854/95117034/1/1_org.jpg",
    price: "87 TL",
    firm: "YK Design",
    name:
      "3in1 Oyuncu Klavye Mouse Mause Pad Seti Kablolu Rgb Aydınlatmalı Set Gamer Pc Oyun Seti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20201231/15/44011292/125431568/1/1_org.jpg",
    price: "349 TL",
    firm: "Rampage",
    name:
      "Kb-r210 Favory Rainbow Aydınlatmalı Kristal Blue Switch Mekanik Gaming Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/11/79730386/13660099/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Everest",
    name: "Sm-763 2400 Dpi 2.4 Ghz Aydınlatmalı Gaming Oyuncu Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20201231/15/44011292/125431568/1/1_org.jpg",
    price: "349 TL",
    firm: "Rampage",
    name:
      "Kb-r210 Favory Rainbow Aydınlatmalı Kristal Blue Switch Mekanik Gaming Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200909/18/10198722/85496673/1/1_org.jpg",
    price: "154 TL",
    firm: "TG",
    name:
      "Profesyonel Oyuncu Kulaklığı Telefon Uyumlu Gaming Kulaklık Renkli Led Pc ps4 xbox Uyumlu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210308/14/69754900/150060660/1/1_org.jpg",
    price: "1.449 TL",
    firm: "Rampage",
    name: "Profesyonel Oyuncu Koltuğu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty6/product/media/images/20200717/15/5049795/60345591/1/1_org.jpg",
    price: "329,90 TL",
    firm: "GamePower",
    name: "Ogre Rgb Mavi Swıtch Mekanık Gamıng Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201012/0/15136222/75845149/1/1_org.jpg",
    price: "169 TL",
    firm: "Samsung",
    name: 'M3 320gb 2.5" Usb Harici Taşınabilir Disk',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210111/9/50784507/128467891/1/1_org.jpg",
    price: "57,90 TL",
    firm: "E TicaShop",
    name:
      'Galaxy Tab A7 10.4" Sm-t500 Sm-t507 Kılıf Set ( Kılıf+ Temperli Cam + Kalem ) Mor',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210212/13/62063243/81506039/1/1_org.jpg",
    price: "189 TL",
    firm: "logitech",
    name: "G102 Lightsync Beyaz Optik Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210327/1/75567647/157857718/0/0_org.jpg",
    price: "99,90 TL",
    firm: "Everest",
    name:
      "Sm-619 Metalik Beyaz 1600 Dpı 2.4 Ghz Süper Sessiz Şarj Edilebilir Premium Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210413/11/79730386/13660099/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Everest",
    name: "Sm-763 2400 Dpi 2.4 Ghz Aydınlatmalı Gaming Oyuncu Kablosuz Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210309/12/70148004/77749611/1/1_org.jpg",
    price: "3.619 TL",
    firm: "LENOVO",
    name:
      'IdeaPad 3 14ADA05 AMD Ryzen 3 3250U 4GB 256GB SSD Radeon Fdos 14" HD Dizüstü Bilgisayar 81W00057TX',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210414/14/80088614/15370219/1/1_org.jpg",
    price: "1.495 TL",
    firm: "Canon",
    name: "Pixma G3411 Fotokopi, Tarayıcı, Wifi, Tanklı Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210305/14/68997803/148767708/1/1_org.jpg",
    price: "89,90 TL",
    firm: "Inca",
    name: "Oyuncu Mouse Img-gt16 Rgb Led 6400 Dpı 7 Adet Macro Tuş",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210129/3/58164447/14302770/1/1_org.jpg",
    price: "258,98 TL",
    firm: "JBL",
    name: "Go 2 Sarı Bluetooth Taşınabilir Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty93/product/media/images/20210404/19/18e9bfa5/59505685/1/1_org.jpg",
    price: "3.050 TL",
    firm: "ASUS",
    name:
      'TUF Gaming VG27VQ 27" 165Hz 1ms (HDMI+Display+DVI-D) FreeSync Full HD Curved Monitör',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/18/54051469/130684645/0/0_org.jpg",
    price: "50,20 TL",
    firm: "Samsung",
    name:
      'Microsonic Galaxy Tab A 8" 2019 T290 Kılıf 360 Rotating Stand Deri Kırmızı',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty36/product/media/images/20201218/0/39386506/120482216/0/0_org.jpg",
    price: "119,90 TL",
    firm: "TEKNETSTORE",
    name:
      "Apple Ipad Uyumlu 10.2 Inc 8. Nesil Kılıf Kalemlikli Premium Standlı Katlanabilir Kılıf Trifolding",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty106/product/media/images/20210422/9/82026027/12574182/1/1_org.jpg",
    price: "209 TL",
    firm: "logitech",
    name: "Kablosuz Klavye Mouse Set 920-007925 Mk235",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/22/50529062/60801645/1/1_org.jpg",
    price: "329,90 TL",
    firm: "GamePower",
    name: "Ogre Rgb Bilek Destekli Red Switch Oyuncu Mekanik Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty62/product/media/images/20210131/23/58887404/127255036/1/1_org.jpg",
    price: "269 TL",
    firm: "Afox",
    name: 'Ssd 256gb 2.5" 560-480mb/s Sata3',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200413/15/1692396/21884824/1/1_org.jpg",
    price: "163 TL",
    firm: "Samsung",
    name: "M3 320 GB 2.5' USB 3.0 Taşınabilir Disk (STSHX-M500TCB)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210324/12/74900977/80288266/1/1_org.jpg",
    price: "129,70 TL",
    firm: "Onikuma",
    name: "K19 Led Işıklı Mikrofonlu Profesyonel Oyuncu Gaming Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/09/a6b665b2/58282678/1/1_org.jpg",
    price: "969 TL",
    firm: "CBOX",
    name: '23.8"  2380FHDV 1920x1080 5MS 75Hz HDMI/VGA +VESA',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210109/16/50386825/14302771/1/1_org.jpg",
    price: "268 TL",
    firm: "JBL",
    name: "Go 2 Ipx7 Bluetooth Taşınabilir Hoparlör Lacivert",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/7/64800136/143226218/1/1_org.jpg",
    price: "19,49 TL",
    firm: "Gamingpadci",
    name:
      "70 X 30 Cm Siyah Dikişli Kaydırmaz Taban Speed Yüzey Mousepad Oyuncu Gaming",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210319/23/73826324/74456450/1/1_org.jpg",
    price: "70 TL",
    firm: "Gamemar",
    name: "Xxl 90*40cm Dikişli Temizlenebilir Gaming Oyuncu Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20201229/15/43298762/124608528/1/1_org.jpg",
    price: "14.899 TL",
    firm: "Apple",
    name:
      'Macbook Pro M1 Çip 8gb 512gb Macos 13" Qhd Taşınabilir Bilgisayar Uzay Grisi Myd92tu/a',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210129/21/58486476/133615631/1/1_org.jpg",
    price: "124,99 TL",
    firm: "Paleon",
    name:
      "Techmi Siyah Klasik Araba Bluetoothlu Hoparlör- Fm Radyo - Sd Kart Girişli Plo-ann5",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/10/78091332/15027495/1/1_org.jpg",
    price: "349,90 TL",
    firm: "JBL",
    name: "Clip3 Mavi Ipx7 Su Geçirmez Taşınabilir Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/8/51832711/91824593/1/1_org.jpg",
    price: "4.599 TL",
    firm: "HP",
    name:
      'Rebak Ryzen 3 4300u 8gb 256gb Ssd Freedos 15.6" Fhd Taşınabilir Bilgisayar 2d6y1ea',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210417/11/80812356/157909304/1/1_org.jpg",
    price: "118,90 TL",
    firm: "S-LINK",
    name: "Sl-al05 Alüminyum Portable Laptop - Macbook - Notebook Stand",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty27/product/media/images/20201127/11/32956109/113614005/0/0_org.jpg",
    price: "193 TL",
    firm: "Rampage",
    name:
      "Ad-rc10 X-gust Siyah 6 Fanlı Renkli Işıklandırmalı Notebook Soğutucu Stand",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210411/13/79258015/63719313/1/1_org.jpg",
    price: "156 TL",
    firm: "Meier",
    name: "M-111bt Nostaljik Ahşap Retro Fm Radyo Usb Sd Bluetooth",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210106/1/47541766/13033904/1/1_org.jpg",
    price: "319,99 TL",
    firm: "WD",
    name: "240 GB 2.5 SATA3 SSD 545MB/S 3DNAND WDS240G2G0A",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210316/12/72035304/153013933/0/0_org.jpg",
    price: "499,90 TL",
    firm: "Türksit",
    name: "Asos Oyuncu Koltuğu Mavi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210330/13/76279011/70057446/1/1_org.jpg",
    price: "43,90 TL",
    firm: "POLYGOLD",
    name:
      "Ktx-1067 Işıklı Bluetooth Hoparlör Ses Bombası Yüksek Ses Ses Bombası Yüksek Ses",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty47/product/media/images/20210326/10/75397587/154818592/1/1_org.jpg",
    price: "254 TL",
    firm: "VISOR",
    name: "Oto 16cm Midrange 6 Inch 2x800w 2x400 Rms Amfi Uyumlu 2 Adet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210220/13/65412982/144045916/1/1_org.jpg",
    price: "289,90 TL",
    firm: "Rampage",
    name:
      "Km-404 Argentı Rainbow Aydınlatmalı Usb Gaming Combo Q Klavye + Kulaklık + Mouse + Mousepad",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210415/13/80281595/21014929/1/1_org.jpg",
    price: "425 TL",
    firm: "logitech",
    name: "G332 Oyuncu Kulak Üstü Kulaklık 981-000757",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20210322/12/74294439/18218660/1/1_org.jpg",
    price: "565 TL",
    firm: "Ultimate Ears",
    name: "Wonderboom Bluetooth Hoparlör Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200922/13/11380695/87838804/1/1_org.jpg",
    price: "232 TL",
    firm: "Veikk",
    name: 'S640 6" 8192 Levels 5080lpı Grafik Tablet+kalem',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210108/10/48543791/96906053/1/1_org.jpg",
    price: "1.999 TL",
    firm: "Zeiron",
    name: "Zn510 I5-650 3,46ghz 8gb 500gb Hdd Masaüstü Bilgisayar",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200925/20/11980181/17603169/1/1_org.jpg",
    price: "399 TL",
    firm: "JBL",
    name: "Clip 3 Ipx7 Su Geçirmez Taşınabilir Bluetooth Hoparlör Pembe",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/18/80709228/60739898/1/1_org.jpg",
    price: "375 TL",
    firm: "Baseus",
    name: "Multi-functional Hub Adaptör Cahub-bz0g",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210221/0/65581103/13870312/1/1_org.jpg",
    price: "199 TL",
    firm: "TP-LINK",
    name: "Beyaz  Kablosuz Modem Td-w8961n Adsl2+ 4 Port 300 Mbps",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210110/21/50683003/14668203/1/1_org.jpg",
    price: "439 TL",
    firm: "TP-LINK",
    name: "Archer Vr300 1200 Dual Band Adsl/vdsl Modem",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210420/17/81647823/158188872/1/1_org.jpg",
    price: "88,89 TL",
    firm: "KTRTECH",
    name: "Yumruk Hoparlör Jbl Bluetooth Hoperlör Ses Bombası",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty103/product/media/images/20210413/19/79856070/60762997/1/1_org.jpg",
    price: "59 TL",
    firm: "OEM",
    name: "Su Geçirmez Mini Bluetooth Duş Hoparlörü (Mavi)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210407/02/1e391602/61196578/1/1_org.jpg",
    price: "154,90 TL",
    firm: "Rampage",
    name: "Rh1 Hectora Siyah/kırmızı 2*3,5mm Oyuncu Mikrofonlu Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210406/00/7573f0e4/64010224/1/1_org.jpg",
    price: "699 TL",
    firm: "For-X",
    name: "Forx X-750.1 3000 Watt Lpf Ve Bass Kontrollü Profosyonel Oto Amfi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201123/14/30465963/110200101/1/1_org.jpg",
    price: "57,90 TL",
    firm: "E TicaShop",
    name:
      "Samsung Galaxy Tab A7 Sm T500 T505 T507 Tablet Kılıfı Dönerli Seti 10,4 Inç Set",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201010/13/14861582/71720200/1/1_org.jpg",
    price: "115,90 TL",
    firm: "Xiaomi",
    name: "4c Router Wi-fi 300mbps 2.4g High-speed - Beyaz Dvb4231gl",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210405/12/671c258a/61951501/1/1_org.jpg",
    price: "949 TL",
    firm: "logitech",
    name: "Mx Master 3 Wireless Mouse Graphite 910-005694",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210111/15/50974332/123570689/1/1_org.jpg",
    price: "1.149,99 TL",
    firm: "Glorious",
    name: "Model O Kablosuz Gaming Mouse Mat - Beyaz",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210203/17/59691280/68203776/1/1_org.jpg",
    price: "179,90 TL",
    firm: "Rampage",
    name:
      "Rm-h66 Guard Kulaklık Için Stand Rgb Işıklı 2*usb Port Kulaklık Stand",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210412/12/79436717/60142798/1/1_org.jpg",
    price: "53 TL",
    firm: "POLYGOLD",
    name: "Işıklı Mini Klavye Mouse Smart Tv Box Pc Şarjlı Pg-8035",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200726/12/6018210/78692782/0/0_org.jpg",
    price: "75,99 TL",
    firm: "Toshiba",
    name: "64gb Owahri U401 2.0 Usb Metal Flash Bellek",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210411/13/79257992/21333814/1/1_org.jpg",
    price: "150 TL",
    firm: "Meier",
    name: "Eskitme Nostalji Tasarımlı Bluetoothlu Nostalji Radyo 113bt",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/18/54035541/130665523/0/0_org.jpg",
    price: "47,80 TL",
    firm: "Samsung",
    name: "Microsonic Galaxy Tab A7 T500 Kılıf 360 Rotating Stand Deri Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200929/12/12457960/89358622/0/0_org.jpg",
    price: "348,99 TL",
    firm: "Jameson",
    name: "Amfi Uyumlu 1400 W 6x9 Oval Oto Hoparlör Js-6917",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/02/063d93e5/22139436/1/1_org.jpg",
    price: "255 TL",
    firm: "HP",
    name: "4BX31AA Pavilion 400 Gaming Oyuncu Kulaküstü Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty76/product/media/images/20210219/12/65212334/143784720/1/1_org.jpg",
    price: "253,51 TL",
    firm: "Everest",
    name:
      "Kb-gx7 Bluesky Full Rainbow 9 Renk Mavi Switch Deri Bilek Destekli Mekanik Oyuncu Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty87/product/media/images/20210403/09/918dab1a/13033586/1/1_org.jpg",
    price: "439 TL",
    firm: "ASUS",
    name: "Dsl-AC51 AC750 2 Port Adsl / Vdsl / Fiber Modem",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/17/52216044/128883389/1/1_org.jpg",
    price: "309,90 TL",
    firm: "Rampage",
    name: "Broker Combo  Gaming Oyuncu Set (klavye+mouse+kulaklık+pad) 4lü",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210414/15/80093289/74694057/1/1_org.jpg",
    price: "478 TL",
    firm: "vorcom",
    name: "S7 Tablet 2 Gb Ram 16 Gb Dahili Hafıza",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty4/product/media/images/20200507/15/796785/61192701/2/2_org.jpg",
    price: "129,99 TL",
    firm: "Rampage",
    name: "Smx-r70 Blaze Usb 6400dpi Rgb Macrolu Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200504/21/646763/58042934/1/1_org.jpg",
    price: "599 TL",
    firm: "SteelSeries",
    name: "Sensei Ten Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty81/product/media/images/20210309/16/70246892/148322800/1/1_org.jpg",
    price: "184,90 TL",
    firm: "Rampage",
    name: "Rm-k44 Zengibar 7.1 Surround Rgb Gaming Mikrofonlu Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty20/product/media/images/20210319/17/73730888/81872294/1/1_org.jpg",
    price: "114 TL",
    firm: "drivetec",
    name: "Dc-1397 550 Watt 13cm Oto Kapı Hoparlör-tweeterli (2 ADET) Dc-1397",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210312/14/70928973/109924277/2/2_org.jpg",
    price: "76 TL",
    firm: "Deiog Marka",
    name: "Kablolu Led Işıklı Oyuncu Klavye & Mouse Seti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/9/51907371/15936546/1/1_org.jpg",
    price: "367,37 TL",
    firm: "James Donkey",
    name: "712 Siyah 7.1 Surround Rgb Gaming Kulaklık Neodimyum 50mm Sürücüler",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20210322/15/74356089/62384980/1/1_org.jpg",
    price: "154,50 TL",
    firm: "MBTEKNOLOJİM",
    name:
      "Meier M-115bt Koyu Renk Nostaljik Radyo Ahşap Görünümlü Bluetooth Hoparlör Fm Sd Kart Usb Girişi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty13/product/media/images/20200924/18/11764561/88633036/1/1_org.jpg",
    price: "99 TL",
    firm: "Brs",
    name: "Internet Web Cam Internet Kamera 1080p Full Hd",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/02/2e93ff92/17260463/1/1_org.jpg",
    price: "1.799 TL",
    firm: "SteelSeries",
    name:
      "Arctis 7 Kablosuz Oyuncu Kulaklık - 7.1 Surround - PC, PS, Switch, Mac Uyumlu - Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210124/5/56652339/133710899/0/0_org.jpg",
    price: "949,90 TL",
    firm: "TEKNETSTORE",
    name:
      "Apple Ipad Air 10.9 2020 Ultra Ince Kablosuz Bluetooth Klavye & Trackpad Magic Keyboard Smart Kılıf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/23/78545710/17168883/1/1_org.jpg",
    price: "169,99 TL",
    firm: "Everest",
    name:
      "Rampage Kb-r79 Gökkuşağı Aydınlatmalı Usb Gaming Q Multimedia Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210310/9/70382813/150984126/1/1_org.jpg",
    price: "3.899 TL",
    firm: "ASUS",
    name:
      'X515ja-br088 Intel Core I3 1005g1 4gb 256gb Ssd Freedos 15.6" Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210219/13/65215734/143782737/0/0_org.jpg",
    price: "214,90 TL",
    firm: "Rampage",
    name:
      "Smx-r89 X-pıke Kablosuz/kablolu Rgb Ledli Şarjlı Gaming Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210116/17/54025857/130664551/0/0_org.jpg",
    price: "50,20 TL",
    firm: "Samsung",
    name:
      'Microsonic Galaxy Tab A 8" 2019 T290 Kılıf 360 Rotating Stand Deri Pembe',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty39/product/media/images/20201226/12/42467784/123518931/1/1_org.jpg",
    price: "239,90 TL",
    firm: "Cep-H",
    name: "Apple Ipad 6 Air 2 Wiwu Alpha Tablet Case",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210412/9/79397701/82679818/1/1_org.jpg",
    price: "11,61 TL",
    firm: "English Home",
    name: "Rosy Days Mouse Pad 23x26 Cm Lila",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210320/0/73831426/74455726/1/1_org.jpg",
    price: "50 TL",
    firm: "Gamemar",
    name:
      "80*30cm Desenli Dikişli Yıkanabilir Gaming Oyuncu Mousepad John Wick",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210310/14/70431393/115581025/1/1_org.jpg",
    price: "6.699 TL",
    firm: "Zeiron",
    name: "Fx60 I5-3470 16gb 1tb  240gb Rx550 23.8 Oyun Bilgisayarı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200409/16/1498663/68242452/1/1_org.jpg",
    price: "289,10 TL",
    firm: "LENOVO",
    name: "Adlx65clge2a 20v 3.25a 65w Laptop Orjinal Şarj Aleti",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210408/10/78611958/59505686/1/1_org.jpg",
    price: "919,90 TL",
    firm: "Alcatel",
    name:
      '1t 16gb 10.1" Wi-fi Premium Siyah Klavye Hediyeli Tablet - Türkiye Garantili',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty14/product/media/images/20201001/9/12749769/9747695/1/1_org.jpg",
    price: "119,90 TL",
    firm: "SteelSeries",
    name:
      "Qck Medium Gaming Mousepad - Oyun Sensörleri İçin Optimize Edilmiştir",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210205/12/60165302/103325487/1/1_org.jpg",
    price: "5.700 TL",
    firm: "Apple",
    name: "Ipad Air 10.9 Inç Wi-fi 64gb Uzay Grisi Myfm2tu/a",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210413/18/79838377/62263598/1/1_org.jpg",
    price: "52,90 TL",
    firm: "OEM",
    name: "Su Geçirmez Mini Bluetooth Duş Hoparlörü Pembe",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty96/product/media/images/20210404/04/f0fe1e33/56751404/1/1_org.jpg",
    price: "859,90 TL",
    firm: "SanDisk",
    name: "SSD Plus 1TB 535MB-450MB/s Sata3 SSD (SDSSDA-1T00-G26)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty102/product/media/images/20210413/10/79718840/14668229/1/1_org.jpg",
    price: "179 TL",
    firm: "TP-LINK",
    name:
      "Tl-wa855re 300mbps 2 Harici Antenli Kompakt Access Point Ve Menzil Genişletici",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210409/13/78901109/95453375/1/1_org.jpg",
    price: "2.142 TL",
    firm: "ARTEC",
    name: "Arktek Geforce Gtx 1050ti 4 Gb 128 Bit Çift Fan Ddr5 Ekran Kartı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210112/8/51808457/22005450/1/1_org.jpg",
    price: "999 TL",
    firm: "HP",
    name: "Lazerjet 107a 4zb77a Lazer Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty56/product/media/images/20210118/19/54881429/131525857/1/1_org.jpg",
    price: "14,90 TL",
    firm: "WOZLO",
    name: "4 Port Usb Çoğaltıcı Çoklayıcı Hub Usb 2.0 Çoklama Pc Laptop",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210314/13/71130235/61311868/1/1_org.jpg",
    price: "202,06 TL",
    firm: "logitech",
    name: "Beyaz Pebble M350 Kablosuz Bluetooth Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210328/19/75787655/146200957/1/1_org.jpg",
    price: "99,50 TL",
    firm: "EPSON",
    name: "103 L3150 Orjinal Mürekkep kartuş Takımı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty33/product/media/images/20201209/14/36831805/117811929/1/1_org.jpg",
    price: "179 TL",
    firm: "KIZILKAYA",
    name:
      "Transparan Parlak Apple Macbook Air 2020 Model A2337 M1 13 Inç Touch Id Sert Kapak Koruma Kılıf",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty63/product/media/images/20210130/14/58646155/61056525/1/1_org.jpg",
    price: "469 TL",
    firm: "Hyper",
    name: "Yeni Eczaneler Için 2d Kablosuz Qrkod Karekod Barkod Okuyucu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/7/51698978/59951076/1/1_org.jpg",
    price: "129 TL",
    firm: "Hunter Series",
    name: "Hunter Kharma X Raınbow Ergonomik Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20201231/11/43936029/92160910/1/1_org.jpg",
    price: "369 TL",
    firm: "SMARTABLE",
    name: 'Smartab St7160bk 16gb 7" Ips Tablet Siyah',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210314/0/71124326/15027494/1/1_org.jpg",
    price: "349,90 TL",
    firm: "JBL",
    name: "Clip3 Siyah Ipx7 Su Geçirmez Taşınabilir Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210421/19/81953000/166199926/1/1_org.jpg",
    price: "399 TL",
    firm: "Denver",
    name: "Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty29/product/media/images/20201208/10/35895078/91016925/1/1_org.jpg",
    price: "1.025 TL",
    firm: "Casper",
    name: 'Vıa S48 3gb/32gb 8"inç Tablet Mat Gri',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty69/product/media/images/20210216/1/63019591/110567395/1/1_org.jpg",
    price: "1.399 TL",
    firm: "Rampage",
    name: "Kl-r56 Hydra 3d Kol, 180° Yatar, Gamıng Oyuncu Koltuğu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty40/product/media/images/20201226/23/42626217/123749639/0/0_org.jpg",
    price: "180 TL",
    firm: "HMXPLUS",
    name: "7 In 1 Sd Usb Type-c Hub Hdmı Girişli Macbook Çevirici Çoklayıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20201015/22/16262824/87709667/1/1_org.jpg",
    price: "519 TL",
    firm: "HP",
    name: "Deskjet 2720 Fotokopi,tarayıcı,wifi Yazıcı (3xv18b)",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty98/product/media/images/20210404/00/ff0f0287/12906238/1/1_org.jpg",
    price: "378 TL",
    firm: "Samsung",
    name: '860 Evo 250GB 560MB-520MB/s Sata3 2.5" SSD (MZ-76E250BW)',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty60/product/media/images/20210126/1/57157799/134233043/0/0_org.jpg",
    price: "109,90 TL",
    firm: "OWWOTECH",
    name:
      "Yoro V5 Profesyonel Oyuncu Kulaklığı Rgb Kablolu Işıklı Mikrofonlu Kulaklık Usbli+3.5 Mm Jack",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty49/product/media/images/20210401/19/77086883/95681783/1/1_org.jpg",
    price: "89 TL",
    firm: "Gate",
    name: "Charge 3+ Bluetooth Kablosuz Hoparlör Ses Bombası",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200916/11/10809567/86744094/1/1_org.jpg",
    price: "523 TL",
    firm: "Hometech",
    name: "Alfa 7 Mrc 32gb 7mrc Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty50/product/media/images/20210110/2/50571224/14302775/1/1_org.jpg",
    price: "289 TL",
    firm: "JBL",
    name: "Go 2 Ipx7 Bluetooth Taşınabilir Hoparlör Kırmızı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty99/product/media/images/20210406/21/78336951/12906131/1/1_org.jpg",
    price: "159 TL",
    firm: "TP-LINK",
    name:
      "Tl-wa850re 300mbps N Kablosuz Kompakt Access Point Ve Menzil Genişletici",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty11/product/media/images/20200907/8/9887088/77972916/1/1_org.jpg",
    price: "870 TL",
    firm: "LENOVO",
    name: 'Tab M7 Tb-7305f 32gb 7" Ips Tablet Za550238tr Tablet 194778187855',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210205/0/60042931/59353779/1/1_org.jpg",
    price: "399 TL",
    firm: "tenda",
    name: "V1200 4 Port Ac1200mbps Dual Band Kablosuz Vdsl Modem",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty75/product/media/images/20210223/21/66329180/145314789/0/0_org.jpg",
    price: "5.999 TL",
    firm: "Zeiron",
    name: 'Rmx80 I5-3470 16gb 240gb + 1tb Gt730 27" Oyun Bilgisayarı',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty21/product/media/images/20201112/18/25406258/104886054/1/1_org.jpg",
    price: "139 TL",
    firm: "Rampage",
    name: "KB-R99 X-CORAL Rainbow Aydınlatmalı Gaming Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201218/9/39528180/68632704/1/1_org.jpg",
    price: "599 TL",
    firm: "MSI",
    name: "Vigor Gk50 Kailh Low Profile Türkçe Rgb Mekanik Oyuncu Klavyesi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty22/product/media/images/20201112/13/25348775/104780617/1/1_org.jpg",
    price: "6.099 TL",
    firm: "Apple",
    name: 'iPad Air 4. Nesil 10.9" 64 GB WiFi Tablet - MYFP2TU/A Rose Gold',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210416/15/80666139/164493939/1/1_org.jpg",
    price: "1.599 TL",
    firm: "HyperX",
    name: "Cloud Iı Wireless 7.1 Surround Gaming Kulaklık",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty77/product/media/images/20210227/12/67335272/146691039/0/0_org.jpg",
    price: "189 TL",
    firm: "YUSOFT",
    name:
      "Yeni Model Bluetooth Fm Sd Kart Aux Usb Özellikli Nostaljik Ahşap Radyo Istanbul Model Retro",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty54/product/media/images/20210112/23/52383534/129048183/0/0_org.jpg",
    price: "124,90 TL",
    firm: "VİPONLİNE",
    name: "Profesyonel Headset Pro 7.1 Usb Rgb Gaming Oyuncu Kulaklığı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210404/17/c1218b6c/59197486/1/1_org.jpg",
    price: "294 TL",
    firm: "Rampage",
    name:
      "KB-R81 Mavi Switch Gökkuşağı Ledli RGB Şeritli Metal Yüzey Mekanik Gaming Oyuncu Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210311/9/70536546/65223210/1/1_org.jpg",
    price: "199,90 TL",
    firm: "Platoon",
    name:
      "Raicon Powerful Extra Bass Usb Pc Hoparlörü Güçlü Ses Sistemi Usb-sd Kart-fm 2+1",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty3/product/media/images/20200610/15/2515359/65341514/1/1_org.jpg",
    price: "599 TL",
    firm: "GamePower",
    name: "Mihawk 7.1 Surround Rgb Oyuncu Kulaklığı Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/10/2d7ba3c0/14649168/1/1_org.jpg",
    price: "164,90 TL",
    firm: "GamePower",
    name: "Ursa Rgb 5000 Dpi Siyah Usb Oyuncu Mouse",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty26/product/media/images/20201123/14/30472293/110211198/1/1_org.jpg",
    price: "10.899 TL",
    firm: "ASUS",
    name:
      'Tuf Gaming Fx506lu-hn122 I7-10870h 8gb Ram 512gb Ssd 6gb Gtx1660ti 15.6" Fhd 144hz',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210418/22/81094559/87110605/1/1_org.jpg",
    price: "72,90 TL",
    firm: "DEEP BLUE",
    name: "Mikrofonlu Hd Webcam Kamera 720p 30fps Pc Kamera",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210109/7/50251836/111188896/1/1_org.jpg",
    price: "1.599 TL",
    firm: "James Donkey",
    name: "Jd24fg1ms144 24'' 1ms 144hz Full Hd Freesync Gaming Monitör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210422/3/82009928/129567029/1/1_org.jpg",
    price: "88,50 TL",
    firm: "HADRON",
    name: "Gm012 7.1 Surround Sound System Gaming Oyuncu Kulaklık Mikrofonlu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty71/product/media/images/20210219/0/65098213/139107107/1/1_org.jpg",
    price: "99 TL",
    firm: "DEHALİMİTED",
    name:
      "Radyo’lu Işık Efektli Usb/sd Kart Ve Aux Girişli Şarjlı Bluetooth Speaker Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty30/product/media/images/20210326/14/75459759/94160480/1/1_org.jpg",
    price: "59,90 TL",
    firm: "Teknoloji Gelsin",
    name:
      "Teknolojigelsin Ktx 1057 Işıklı Bluetooth Hoparlör Taşınabilir Kablosuz Ses Bombası Speaker",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210405/22/77998854/75390862/1/1_org.jpg",
    price: "5.999 TL",
    firm: "HP",
    name:
      '15-DA2002NT Intel Core i5 10210U 8GB 256GB SSD MX110 Windows 10 Home 15.6"  8BM99EA',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/22/47492684/94321940/1/1_org.jpg",
    price: "3.999 TL",
    firm: "Zeiron",
    name: 'Vulcan Lite X20 I5-3470 8gb 120gb + 500gb 4gb 18.5" Oyun Pc',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty66/product/media/images/20210202/22/59472650/14302774/1/1_org.jpg",
    price: "315 TL",
    firm: "JBL",
    name: "Go 2 Ipx7 Bluetooth Taşınabilir Hoparlör Şampanya",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty52/product/media/images/20210112/7/51680777/110183493/1/1_org.jpg",
    price: "511,90 TL",
    firm: "Türksit",
    name: "M4 Mini Yönetici Ve Oyuncu Koltuğu Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty41/product/media/images/20201230/18/43740773/125163730/1/1_org.jpg",
    price: "1.299,99 TL",
    firm: "CBOX",
    name: '23.6" 2360f-gamıng 1920x1080 1ms 144hz Dp/hdmı +vesa +curved',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty80/product/media/images/20210311/12/70647020/96516738/1/1_org.jpg",
    price: "1.213 TL",
    firm: "Dell",
    name: "S2421hs 1920x1080 75hz 23.8 Hdmi Dp 4ms Ips Monitör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty104/product/media/images/20210410/12/79045666/162399152/1/1_org.jpg",
    price: "119,90 TL",
    firm: "Digoo",
    name: "Rgb Düz Siyah 80*30 Cm Gaming Oyuncu Mousepad 80x30",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210306/23/69432582/144523873/1/1_org.jpg",
    price: "126,90 TL",
    firm: "FİTGAME",
    name: "80 X 30 Cm Xxl Rgb Işıklı Oyuncu Gamer Mousepad 10 Farklı Mod",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210407/02/f370c601/16567380/1/1_org.jpg",
    price: "829 TL",
    firm: "SteelSeries",
    name:
      "Arctis 3 Oyuncu Kulaklık - PC, PS, Xbox, Nintendo Switch, VR, Android ve iOS - Siyah",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty67/product/media/images/20210204/2/59795929/60153146/1/1_org.jpg",
    price: "124,60 TL",
    firm: "POLYGOLD",
    name:
      "Pg8016 Oyuncu Klavye Mouse Seti Mekanik Hisli Rgb Işık Nefes Modu Silver",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty2/product/media/images/20200427/16/297865/13034187/1/1_org.jpg",
    price: "219,90 TL",
    firm: "MICROSOFT",
    name: "N9Z-00017 Akıllı Tv Smart Tv Siyah All In One Kablosuz Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty35/product/media/images/20201216/14/38966035/119901664/1/1_org.jpg",
    price: "824,40 TL",
    firm: "Hometech",
    name: "Alfa 10lm 2gb Ram 32gb Hafıza Eba+zoom Destekli Tablet",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210401/18/77072077/65639915/1/1_org.jpg",
    price: "589 TL",
    firm: "Alcatel",
    name: '1t 7" 16GB Prime Black Pembe Wifi Kılıf',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty65/product/media/images/20210206/21/60527726/138402362/1/1_org.jpg",
    price: "574,90 TL",
    firm: "AktarMobile",
    name:
      "Wiwu Ipad 8. Nesil Klavye 10.2 Inc Kablosuz Klavyeli Kılıf Bluetooth Keyboard",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201020/19/17685708/77286661/1/1_org.jpg",
    price: "331,50 TL",
    firm: "Xiaomi",
    name:
      "Aıot Ac2350 Ac 2200 Mpbs 7x5dbi Qualcomm Cpu Access Point / Menzil Genişletici / Router",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty37/product/media/images/20201218/22/39773174/72722978/1/1_org.jpg",
    price: "202 TL",
    firm: "Rixos",
    name: "Drivetec Dc-6997 Oto Hoparlör Oval 960w 4 Yollu 2 Adet Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty70/product/media/images/20210216/16/63359314/96911598/1/1_org.jpg",
    price: "71 TL",
    firm: "HMSPLANET",
    name:
      "Macbook Uyumlu 4k Type C To 3 Portlu Hdmı - Usb - Type-c Çevirici Adaptör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty94/product/media/images/20210405/20/77969195/19233758/1/1_org.jpg",
    price: "274,39 TL",
    firm: "Adata",
    name: "240gb Su630 520-450mb-s Ssd (asu630ss-240gq- Harddisk",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty72/product/media/images/20210218/9/64809240/143241504/1/1_org.jpg",
    price: "149,99 TL",
    firm: "TahTicMer",
    name:
      "Samsung Galaxy Tab A T510 T515 T517 Kablosuz Wireless Taşınabilir Klavye Mouse Set Q Klavye",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty95/product/media/images/20210404/11/27d017b4/58097947/1/1_org.jpg",
    price: "48,48 TL",
    firm: "Philips",
    name: "2 Metre HDMI Kablo Altın Uçlu 4K ULTRA Hd Kablo SWL6116C",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty31/product/media/images/20201202/16/34505666/115331680/1/1_org.jpg",
    price: "159 TL",
    firm: "Huawei",
    name: "Mini Hoparlör - Cm510 Black",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/10/78396909/161495968/1/1_org.jpg",
    price: "50 TL",
    firm: "Gamemar",
    name: "Dikişli Yıkanabilir Oyuncu Mousepad 2 80x30",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty68/product/media/images/20210210/23/61928044/93494190/1/1_org.jpg",
    price: "70 TL",
    firm: "Antech",
    name: "Desenli Dikişli Yıkanabilir Gaming Oyuncu Mousepad 90 x 40cm",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201008/16/14196008/91584898/1/1_org.jpg",
    price: "4.061,46 TL",
    firm: "LENOVO",
    name:
      'IdeaPad 3 15IIL05 Intel Core i3 1005G1 4GB 128GB SSD Windows 10 15,6" HD Laptop 81WE008ETX',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty82/product/media/images/20210309/11/70126955/69133800/1/1_org.jpg",
    price: "134 TL",
    firm: "TG",
    name:
      "Profesyonel Oyuncu Kulaklığı Gaming Kulaklık Siyah Renkli Led Pc/ps4/xbox Uyumlu",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty44/product/media/images/20210331/12/76593738/104294146/1/1_org.jpg",
    price: "569 TL",
    firm: "HP",
    name: "Deskjet Plus 4120 All-in-one Wi-fi Yazıcı 3xv14b",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty88/product/media/images/20210403/06/8db2346b/15928722/1/1_org.jpg",
    price: "219,99 TL",
    firm: "SteelSeries",
    name:
      "Qck Large Gaming Mousepad - Oyun Sensörleri İçin Optimize Edilmiştir",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty101/product/media/images/20210407/00/c73f2242/63760493/1/1_org.jpg",
    price: "3.789 TL",
    firm: "Casper",
    name:
      "Nirvana C350.4000-4C00E 14'' Intel Core Celeron N4000 4GB RAM 120GB SSD W10 Home",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty100/product/media/images/20210409/17/78945865/77748627/1/1_org.jpg",
    price: "114,90 TL",
    firm: "Mcdodo",
    name: "Hdmi To Vga Dönüştürücü Kablo 2 Metre",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210128/19/58084021/122320295/1/1_org.jpg",
    price: "349 TL",
    firm: "JBL",
    name: "Go 3 Pembe Bluetooth Hoparlör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty64/product/media/images/20210128/19/58083813/124179907/1/1_org.jpg",
    price: "369 TL",
    firm: "JBL",
    name: "Go 3 Taşınabilir Bluetooth Hoparlör - Mavi/Pembe",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty15/product/media/images/20201012/17/15370421/92568132/1/1_org.jpg",
    price: "6.499 TL",
    firm: "Huawei",
    name:
      'Matebook D 14 AMD Ryzen 5 3500U 8GB 256GB SSD Windows 10 Home 14" FHD Taşınabilir Bilgisayar',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty25/product/media/images/20201123/14/30465811/110199412/1/1_org.jpg",
    price: "62,50 TL",
    firm: "E TicaShop",
    name:
      'Samsung Galaxy Tab A Sm T290 / T297 8" Siyah 360 Derece Standlı Tablet Kılıfı Set',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty9/product/media/images/20200815/1/8102381/81517923/0/0_org.jpg",
    price: "524 TL",
    firm: "SanDisk",
    name: "Ultra 3D 500GB 2400MB-1750MB/s NVMe M.2 SSD SDSSDH3N-500G-G25",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty1/product/media/images/20200410/14/1561738/17927405/1/1_org.jpg",
    price: "274,40 TL",
    firm: "SanDisk",
    name:
      "Extreme Pro 128GB 170Mb/s V30 UHS-I U3 SDSDXXY-128G-GN4IN SDXC Hafıza Kartı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty97/product/media/images/20210406/9/78068740/57768305/1/1_org.jpg",
    price: "329,90 TL",
    firm: "Keenetic",
    name:
      "Kn-2011-01tr 300mbps 2x5dbi Harici Anten 4 Port Vdsl2 Adsl2+ Modem Omni Dsl Modeli",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201009/16/14536004/59950994/1/1_org.jpg",
    price: "23,89 TL",
    firm: "versatile",
    name: "300 Mbps Nano Mini Internet Adaptör Kablosuz Ağ Wifi Alıcı Usb",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty105/product/media/images/20210421/1/81752213/115854074/1/1_org.jpg",
    price: "78 TL",
    firm: "mfb grub",
    name: "7 Level Katlanır Aluminyum Macbook Laptop Bilgisayar Standı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201007/7/13858119/70602975/1/1_org.jpg",
    price: "388 TL",
    firm: "MOBASS",
    name: "Mb-600.4 2x150w Rms Bass Controllü Oto Anfi",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty45/product/media/images/20210105/18/47359900/12906168/1/1_org.jpg",
    price: "214,50 TL",
    firm: "Kingston",
    name: "A400 Ssdnow 120gb 500mb-320mb/s Sata3 2.5 Ssd Sa400s37/120g",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty51/product/media/images/20210112/8/51785269/15027493/1/1_org.jpg",
    price: "399 TL",
    firm: "JBL",
    name: "Clip3 Kırmızı Ipx7 Su Geçirmez Taşınabilir Bluetooth Hoparlör Red",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty85/product/media/images/20210311/19/70785486/62041096/1/1_org.jpg",
    price: "799,90 TL",
    firm: "Canon",
    name: "E414 Bitmeyen Kartuşlu Yazıcı",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty58/product/media/images/20210120/15/55516984/132313820/0/0_org.jpg",
    price: "23,90 TL",
    firm: "CODEGEN",
    name: "Usb 2.0 - 10/100 Mbps Rj45 Ethernet Çevirici Adaptör",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty7/product/media/images/20200725/16/5978476/78599219/0/0_org.jpg",
    price: "290 TL",
    firm: "HP",
    name: "741727-001 45w Laptop Orjinal Şarj Aleti ( Adaptör )",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty16/product/media/images/20201008/13/14147845/90280330/1/1_org.jpg",
    price: "3.899,40 TL",
    firm: "LENOVO",
    name: 'Ideapad S145-15ast/a6-9225/4gb/128ssd Radeon R4/15.6"/81n30048tx',
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty107/product/media/images/20210420/4/81442256/12906216/2/2_org.jpg",
    price: "174,99 TL",
    firm: "logitech",
    name: "M330 Sılent Mouse Siyah 910-004909",
  },
  {
    category: "bilgisayar",
    imgUrl:
      "https://cdn.dsmcdn.com//ty57/product/media/images/20210119/1/55001369/130042238/1/1_org.jpg",
    price: "110,79 TL",
    firm: "Filament",
    name: "Microzey 1 Kg Pla Gümüş Gri",
  },
];
export default productData;
