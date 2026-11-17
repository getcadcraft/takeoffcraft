---
title: Branje količin in predračuna
summary: Uporabite tabelo Količine po postavkah in po listih, skupni znesek, poudarjanje in opozorilo Nepopolno.
keywords: količine, seštevki, po postavkah, po listih, skupni znesek, predračun, povzetek, poročilo, poudarek, nepopolno, stroški
from: 069d41f1
---

Tabela {{ui:Količine}} na dnu okna je vaš predračun, ki se sproti posodablja. Spremeni se takoj, ko narišete, izbrišete, spremenite merilo ali uredite enotno ceno. Količine se nikoli ne shranjujejo; ob vsakem prikazu se znova izmerijo iz oznak, zato ne morejo zastareti.

## Po postavkah

Izberite {{ui:Po postavkah}} (privzeto). Vsaka postavka ima svojo vrstico, vsaka sestavna komponenta njene sestave pa vrstico pod njo.

| Stolpec | Pomen |
|---|---|
| Postavka | Ime z barvo postavke. „+(n) brez merila“ pomeni, da so nekatere oznake na listih brez merila. |
| Količina | Izmerjeni skupni znesek v enoti postavke (pri komponentah: rezultat formule). |
| Enota | LF, m, SF, SY, m², EA ali enota komponente. |
| Odpadek % | Vpišete ga tu ali v urejevalniku postavke. |
| Z odpadkom | Količina × (1 + odpadek). |
| Material/enoto, Delo/enoto | Cene; vpišete jih lahko tudi tu. |
| Material, Delo | Z odpadkom × cena, zaokroženo na cent. |
| Skupaj | Material + delo. |

Zadnja vrstica, **Skupni znesek**, sešteje stolpce material, delo in skupaj. Isti znesek je prikazan tudi desno v glavi tabele.

Vpišite v celico za odpadek ali ceno in pritisnite {{key:Enter}} ali kliknite drugam, da ga uveljavite. Vrednost, ki je TakeoffCraft ne more prebrati, je obrobljena z rdečo, vrstica stanja pa pove razlog, na primer „Vnesite znesek, na primer 12.50.“

## Po listih

Izberite {{ui:Po listih}}, da vidite količino vsake postavke na vsakem listu s številom oznak. Kliknite vrstico, da odprete list z označeno postavko. Uporabite za preverjanje, ali je bil vsak list izmerjen, ali za razdelitev količin po etažah ali območjih dela.

## Po območjih

Kadar ima predizmera območja ponudb, {{ui:Po območjih}} prikaže postavke vsakega območja in vmesni seštevek. Glejte [Območja ponudb](topic:bid-areas).

## Opozorilo Nepopolno

Kadar nekaj ni všteto v seštevke, glava prikaže opozorilo, na primer:

„Nepopolno: 1 napaka v formuli, 6 oznak na listih brez merila (ni v seštevkih)“

- **Napake v formulah**: formule sestavne komponente ni mogoče izračunati. Njena vrstica pove „Napaka v formuli: …“. Glejte [Sestavi in formule](topic:assemblies#when-a-formula-is-wrong).
- **Oznake na listih brez merila**: tem listom dodelite merilo. Glejte [Nastavite merilo](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Iste navedbe gredo tudi v izvoženo preglednico, tako da nepopoln predračun nikoli ne izgleda popoln.

## Poudarek na postavki

Kliknite postavko pod {{ui:Postavke}} ali v tabeli. Njene oznake ostanejo polne na vsakem listu, ostalo zbledi. Seznam listov pri vsakem listu z oznakami prikaže „(n) poudarjenih“. Ponovni klik na postavko poudarjanje ustavi.

## Vrednosti postavk v stranski plošči

Vsaka postavka na seznamu {{ui:Postavke}} prikazuje tudi svojo količino. Urejevalnik postavke v razdelku **Izmerjeno** prikaže vrednosti, ki jih uporabljajo njegove formule: dolžino, odseke in površino sten; površino, obseg in število površin; ali štetje.

## Oznake na PDF-jih, ki niso odprti

Predizmera lahko vključuje oznake na PDF-jih, ki jih tokrat niste odprli. Še vedno se štejejo v vseh seštevkih; seznam listov jih navede po imenu. Glejte [Shranjevanje in ponovno odpiranje predizmere](topic:save-and-reopen).

## Več prostora

Puščični gumb na desni strani glave {{ui:Količine}} skrije tabelo, da list dobi več prostora. Ponovno ga kliknite, da se tabela vrne.
