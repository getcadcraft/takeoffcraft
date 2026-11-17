---
title: Nastavenia TakeoffCraft
summary: Zobrazenie palcov na 1/16, 1/8 alebo 1/4, nové položky so začiatočným percentom odpadu, výber začiatku posuvníka automatického počtu, prichytávanie k čiaram výkresu alebo k 45° bez držania Shift, nastavenie šírky dverí, ktoré vyplnenie miestnosti uzavrie, a výber indikátora rohu v 3D pohľade.
keywords: nastavenia, predvoľby, možnosti, presnosť, zlomky, palce, zaokrúhľovanie, odpad, predvolený odpad, automatický počet, prah, zhoda, posuvník, prichytenie, 45, uhol, shift, kocka pohľadu, ikona osí, indikátor rohu, 3d
from: bca3f0ed
---

Otvorte {{ui:Settings}} cez ozubené koliesko na paneli aplikácie alebo stlačte {{key:Mod+,}}. Prvá karta, {{ui:TakeoffCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:General}} obsahuje tie, ktoré zdieľajú všetky aplikácie CadCraft (motív, panely, panel nástrojov). Nastavenia TakeoffCraft existujú iba v aplikácii: meníte ich tu a tento prehliadač si ich pamätá. {{ui:Obnoviť nastavenia TakeoffCraft}} ich vráti na začiatočné hodnoty.

## Stopy a palce

Zobrazovať dĺžky na najbližších **1/16"** (začiatočná hodnota), **1/8"** alebo **1/4"**. Mení to, ako sa dĺžky čítajú na liste, v paneloch, v množstvách a v stavovom riadku.

Zaokrúhľuje sa iba zobrazenie. Množstvá, náklady a exporty sa počítajú z presných dĺžok a exporty vždy zobrazujú 1/16".

## Odpad na začiatok

Percento odpadu, s ktorým začína každá nová položka: 0 % (začiatočná hodnota), 2 %, 3 %, 5 %, 7.5 %, 10 %, 15 % alebo 20 %. Pre každú položku môžete stále zadať iný odpad v editore položky alebo priamo v tabuľke množstiev. Položky, ktoré už máte, si ponechajú vlastný odpad.

## Automatický počet: kde začína posuvník zhody

Kde sa nachádza posuvník {{ui:Match}}, keď sa vyhľadávanie [Automatický počet](topic:auto-count) skončí, od 50 % do 95 %; začiatočná hodnota je 75 %. Nižšia hodnota ponúkne viac podobných prvkov na zamietnutie; vyššia ponúkne menej. Posuvník môžete posunúť aj počas každej kontroly.

## Prichytenie k vlastným čiaram výkresu

Na začiatku zapnuté. Keď merate alebo kalibrujete, bod blízko čiary PDF sa presunie na jej koniec, stred, priesečník alebo najbližší bod na nej. {{key:F3}} a {{ui:Snap}} v stavovom riadku ho tiež zapínajú a vypínajú. Viac: [Prichytenie k čiaram výkresu](topic:snap-to-the-drawing).

## Vyplnenie miestnosti: aký široký otvor uzavrie

{{ui:Room fill closes openings up to}} nastavuje, aký široký dverný otvor alebo medzeru nástroj {{ui:Room}} považuje za uzavretú: od 3'-0" do 8'-0", na začiatku 4'-0". Ak je to širšie než vaše najširšie dvere, miestnosť presiahne do ďalšej; ak je to užšie než dvere, miestnosť zostane otvorená. Pozri [Vyplnenie miestnosti jedným kliknutím](topic:measure-areas#fill-a-room-with-one-click).

## Prichytenie k 45° bez držania Shift

Na začiatku vypnuté. Keď je zapnuté, úseky, obrysy, výrezy a presúvané rohy sa zarovnajú na 0°, 45°, 90° alebo 135° od posledného bodu bez držania {{key:Shift}}; ak chcete kliknúť pod ľubovoľným uhlom, podržte {{key:Shift}}. Stavový riadok potom zobrazí "Prichytáva na 45°; Shift uvoľní uhol". Bod, na ktorý kliknete na krivke oblúka, a kružnice sa nikdy neprichytávajú; koniec oblúka áno.

## Veľkosť značky počtu

Aké veľké sú bodky počtu: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (začiatočná hodnota: veľkosť, akú mali bodky vždy) alebo {{ui:Large}}. Veľkosť sa na obrazovke zachováva pri každom priblížení a označené PDF kreslí každú bodku rovnako veľkú na papieri bez ohľadu na veľkosť listu, takže PDF pri 100 % vyzerá ako obrazovka. Viac: [Počítanie ručne](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Indikátor rohu

Iba pre [kontrolný 3D pohľad](topic:check-in-3d): {{ui:View cube}} (začiatočná hodnota: kocka v pravom hornom rohu, na kliknutie, ťahanie a otáčanie), {{ui:Axis icon}} (malý značka X, Y, Z v pravom dolnom rohu) alebo {{ui:None}}. Zmení sa okamžite a uchová sa v tomto prehliadači. Plochý list nikdy žiadny nezobrazuje.

## Nástroj cesty: najväčšia medzera, ktorú spája

{{ui:Path tool: largest gap to join}} je, ako ďaleko od seba môžu byť konce dvoch čiar a stále sa počítať ako jedna cesta, v bodoch PDF (0.05 až 60; na začiatku 1.5). Čiary výkresu často končia o vlások od seba. Väčšia hodnota spája viac; menšia ponecháva čiary oddelené. {{key:[}} a {{key:]}} ju menia počas výberu a toto pole ich sleduje. Pozri [Výber čiar](topic:pick-the-lines).
