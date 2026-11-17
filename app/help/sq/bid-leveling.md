---
title: Paketat e ofertës dhe nivelimi i ofertave
summary: Ndaj preventivin në paketa sipas degës, dërgo fushëveprimin e çdo pakete te nënkontraktorët, krahaso ofertat që kthehen mbi të njëjtin fushëveprim, dhe përdor ofertën e zgjedhur si çmimin e paketës.
keywords: nivelim ofertash, nivelim, paketë oferte, nënkontraktor, ofertë nënkontraktori, fushëveprim, mbushje, degë, divizion csi, krahaso ofertat, ofertë më e ulët, tabela e ofertave, ofertues, dhënie, oferta e zgjedhur, përdor një ofertë, çmim nënkontrate
from: 856b3088
---

Një kontraktor i përgjithshëm dërgon fushëveprimin e çdo dege te nënkontraktorët dhe krahason atë që kthehet. TakeoffCraft i bën të dyja nga llogaritja: hap {{ui:Eksporto}} › {{ui:Paketat e ofertës dhe nivelimi…}}.

## Paketat

Ka një paketë për çdo divizion CSI që përdorin artikujt e tu (dy shifrat e para të {{ui:Numri CSI}} të një artikulli, shih [Krijo artikujt e llogaritjes](topic:create-items)). Artikujt pa numër bëjnë një paketë të vetën. Çdo paketë tregon artikujt e saj, sa fletë mbajnë shenjat e tyre, dhe koston tonë ndaj saj (materiali dhe puna para shtesave, nga oferta bazë).

Zgjidh {{ui:Fushëveprimi CSV}} për të shkarkuar atë që duhet dërguar një nënkontraktori: çdo artikull me numrin e tij CSI, sasinë, njësinë dhe fletët ku ndodhet. Nuk ka çmime. Për furnitorët e materialeve, fleta e kërkesës për ofertë ka listën e pjesëve (shih [Eksporto preventivin](topic:export-estimate)).

## Fut ofertat

1. Në rreshtin bosh nën paketë, shkruaj emrin e ofertuesit dhe shumën e ofertës, pastaj zgjidh {{ui:Shto ofertën}}.
2. Nëse një ofertë lë jashtë një pjese të fushëveprimit, hap listën e saj {{ui:Lënë jashtë}} dhe shëno ato artikuj.
3. Për të korrigjuar një emër ose një shumë, shkruaj mbi të në tabelë; butoni × heq një ofertë.

Çdo ndryshim është një hap që {{key:Mod+Z}} e kthen mbrapsht, dhe ofertat ruhen bashkë me llogaritjen.

## Si nivelohen ofertat

Ofertat rrallë mbulojnë të njëjtin fushëveprim. Nivelimi plotëson çdo artikull të lënë jashtë me një **mbushje** me koston tonë për të, kështu që çdo ofertë krahasohet mbi gjithë paketën:

**I niveluar = oferta + mbushjet**

Oferta më e ulët e niveluar shënohet **Low**; në barazi, ajo që u fut e para. **Kundrejt kostos sonë** është oferta e niveluar minus kostoja jonë për paketën: negative do të thotë nën të. Një ofertë që duket më e ulëta mund të humbasë pasi të numërohet fushëveprimi që mungon.

Libri i punës merr një fletë pune **Nivelimi i ofertave** me çdo paketë që ka oferta: vlerësimin tonë, çdo ofertë, mbushjet e saj, totalin e niveluar dhe ndryshimin, si formula të gjalla, dhe çfarë la jashtë çdo ofertë.

## Përdor një ofertë si çmim të paketës

Zgjidh {{ui:Përdor}} te një ofertë dhe ajo bëhet çmimi i gjithë paketës në preventivin tënd: çmimi i vetë paketës (artikujt, kushtet e tyre të dytë dhe pjesët e montimit) hiqet nga totali i punës, artikujt qëndrojnë si sasi me normat e tua për referencë, dhe një rresht, **Oferta e zgjedhur**, mban shumën e ofertës. Artikujt që oferta i lë jashtë qëndrojnë me kostot e tua, që është ajo që nivelimi e numëroi tashmë si mbushje. Zgjidh një ofertë tjetër, ose zgjidh të njëjtën përsëri për ta marrë mbrapsht; çdo veprim është një hap që {{key:Mod+Z}} e zhbën.

Në përmbledhjen e ofertës, ofertat e nënkontraktorëve janë një rresht brenda kostos: shpenzimet e përgjithshme, fitimi dhe garancia shtohen mbi to si çdo kosto tjetër; taksa e shitjes (vetëm mbi materialin) dhe ngarkesa e punës (mbi punën) nuk shtohen. Fleta e Preventivit në librin e punës mban ofertën e zgjedhur si rresht të vetin, dhe blloku i shtesave e shton atë, me formula të gjalla. Lista e materialeve lë jashtë materialin e një pakete të dhënë, sepse nënkontraktori e furnizon.

Një paketë brenda zonës së ofertimit të një alternative nuk rillogaritet me çmime të reja: alternativat dhe nëntotalet e zonave përdorin prapë çmimet e tua.

## Ofertat që kthehen me email

Nuk duhet t'i shkruash ofertat me dorë. {{ui:Dërgo për oferta…}} nën një paketë i dërgon çdo nënkontraktori një lidhje në një faqe ku shkruan një çmim për çdo rresht; {{ui:Merr çmimet}} tërheq atë që kanë dërguar në këtë tabelë. Shih [Dërgo një paketë për oferta](topic:bid-invitations).

:::note
Shkrimi i një oferte me dorë vazhdon të funksionojë, dhe një ofertë e shkruar me dorë dhe një nga faqja qëndrojnë njëra pranë tjetrës. Ofertat që kanë ardhur nga faqja shënohen **web** (ose **web, late** kur kanë mbërritur pas afatit); çmimi i tyre ndryshon vetëm kur ofertuesi dërgon një version të ri, kështu që ndryshimet e tua mbeten deri atëherë.
:::
