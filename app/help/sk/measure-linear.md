---
title: Merať lineárne úseky
summary: Merajte steny, potrubie, lišty a ďalšie dĺžky ako úseky s rovnými segmentmi, oblúkmi a prichytením Shift na 45 stupňov.
keywords: lineárne, dĺžka, úsek, polylínia, steny, lf, lineárne stopy, oblúk, krivka, 45 stupňov, orto, prichytenie, segmenty, polylength, odpočet, otvor, dvere, medzera, zadať, zadané, súradnice, vzdialenosť, priama vzdialenosť, polárne
from: c669deff
---

Lineárna položka meria dĺžku. Každý úsek je reťaz bodov: rovné segmenty a oblúky, keď zapnete režim oblúka. Položka môže mať ľubovoľný počet úsekov na ľubovoľnom počte listov.

Predtým než začnete: list potrebuje mierku ([Nastaviť mierku](topic:set-the-scale)) a potrebujete lineárnu položku ([Vytvoriť položky výkazu](topic:create-items)).

Na vektorovom PDF sa vaše kliknutia prichytia na vlastné čiary výkresu: konce, stredy a priesečníky ([Prichytávanie na čiary výkresu](topic:snap-to-the-drawing); {{key:F3}} ho vypne).

## Nakreslenie úseku

1. Kliknite na lineárnu položku pod {{ui:Položky}}.
2. Zvoľte {{ui:Lineárne}} na paneli nástrojov alebo stlačte {{key:L}}.
3. Kliknite na začiatok úseku.
4. Kliknite na každý roh pozdĺž neho.
   Stavový riadok zobrazuje "Dĺžka" (úsek doteraz, po ukazovateľ) a "segment" (segment, ktorý kreslíte), v stopách a palcoch.
5. Dokončite úsek: dvakrát kliknite na posledný bod, stlačte {{key:Enter}} alebo kliknite pravým tlačidlom.
   Úsek sa nakreslí farbou položky a stane sa vybranou značkou. Dĺžka položky v zozname {{ui:Položky}} a v tabuľke {{ui:Množstvá}} sa zvýši.

Nástroj zostane na {{ui:Lineárne}}, takže môžete hneď začať ďalší úsek. Stlačte {{key:Esc}}, aby ste sa vrátili na {{ui:Vybrať}}.

Pri kreslení:

- {{key:Backspace}} (alebo {{key:Delete}}) odstráni posledný bod.
- {{key:Esc}} zahodí nedokončený úsek.
- Potiahnutie posúva list a kolieskom sa priblíži bez pridávania bodov.

:::mac
Na trackpade Mac je pravé kliknutie kliknutie dvoma prstami (zapnite sekundárne kliknutie v Systémových nastaveniach v časti Trackpad). TakeoffCraft číta len sekundárne tlačidlo, takže kliknutie s Control môže byť braté ako obyčajné kliknutie a pridať bod. Dvojklik alebo {{key:Enter}} vždy dokončia.
:::

:::touch
Na dotykovej obrazovke klepnutím umiestňujete body, potiahnutím jedným prstom posúvate list a štipnutím dvoma prstami priblížite. Dokončite dlhým stlačením, dvojklepnutím alebo {{ui:Dokončiť}} na lište pod listom ({{ui:Zozadu}} vezme posledný bod späť). Pozrite si [Riešenie problémov](topic:troubleshooting#touch-screens).
:::

## Rovné čiary po krokoch 45°

Podržte {{key:Shift}}, keď umiestňujete bod. Segment od posledného bodu sa prichytí na najbližší smer 0°, 45°, 90° alebo 135° a ponechá dĺžku, ktorú ste potiahli. Stavový riadok vám to pripomína: "Shift prichytáva na 45°".

V režime oblúka to platí pre koniec oblúka: tetiva oblúka ide po krokoch 45° od jeho začiatku. Bod, na ktorý kliknete na krivke, sa nikdy neprichytáva.

## Oblúky a zakrivené steny

1. Pri kreslení úseku umiestnite bod, kde krivka začína.
2. Zapnite režim oblúka: zvoľte {{ui:Oblúk}} na paneli nástrojov alebo stlačte {{key:R}}. Tlačidlo zostane stlačené.
3. Kliknite na ľubovoľný bod na krivke, niekde v jej strede.
   Stavový riadok pridá "(oblúk: kliknite, kde končí)" a náhľad sa ohne cez váš bod.
4. Kliknite, kde krivka končí.
   Oblúk sa pridá. Jeho dĺžka je presná dĺžka oblúka, nie reťaz krátkych tetív.
5. Kliknite na ďalší bod na nasledujúcu krivku a jej koniec, aby ste pokračovali v kreslení oblúkov, alebo stlačte {{key:R}} znova, aby ste sa vrátili k rovným segmentom.

{{key:Backspace}} alebo {{key:Esc}} najprv zahodia čakajúci bod na krivke; stlačte znova a odstraňujte body ako obvykle.

## Zadávanie dĺžok a súradníc

Po prvom bode môžete napísať, kam má ísť ďalší, namiesto klikania. Napíšte číslicu, `@` alebo `#`: v stavovom riadku sa otvorí pole {{ui:Zadať}} s tým, čo ste napísali. Stlačte {{key:Enter}}, aby ste umiestnili bod; pole zostane otvorené pre ďalší.

| Zápis | Ďalší bod ide |
|---|---|
| `12'6"` | 12'-6" od posledného bodu, smerom k ukazovateľu (ukážte smer, potom napíšte dĺžku) |
| `12'6"<45` | 12'-6" pod uhlom 45°, počítané proti smeru hodinových ručičiek od pravej strany obrazovky (`<90` je hore, `<-90` dole) |
| `@6',-4'` | 6' doprava a 4' dole od posledného bodu |
| `6',4'` (alebo `#6',4'`) | 6' doprava a 4' hore od prvého bodu tohto úseku |

Dĺžky sa zadávajú ako v celom TakeoffCraft ([Formáty zadávania](topic:entry-formats)): `12'-6 1/2"`, `12.5` (stopy), `30"`, `3.2 m`. "Doprava" a "hore" sú také, ako vidíte list, aj keď je stránka PDF otočená.

{{key:Enter}} na prázdnom poli dokončí úsek, ako {{key:Enter}} na liste; {{key:Esc}} zavrie pole a nechá úsek bežať. Zadané body prechádzajú cez rovnaké pravidlá ako kliknutia: odpočty, oblúky a uzavretie plochy fungujú všetky. To isté pole funguje v {{ui:Plocha}} a {{ui:Výrez}}; po strede kružnice berie polomer.

## Odpočítanie časti úseku

Stenový úsek, ktorý prechádza dverami alebo vitrínou, sa môže nakresliť rovno cez ne a počítať len stenu: segmenty cez otvor sú **odpočty**. Sú nakreslené prerušovane a tenko a nepočítajú sa.

Pri kreslení:

1. Umiestnite bod, kde otvor začína.
2. Zvoľte {{ui:Odpočet}} na paneli nástrojov alebo stlačte {{key:E}}. Tlačidlo zostane stlačené a stavový riadok hovorí, že ďalšie segmenty sú odpočty.
3. Kliknite, kde otvor končí. Segment sa nakreslí prerušovane; "Dĺžka" v stavovom riadku ho vynechá.
4. Stlačte {{key:E}} znova a pokračujte pozdĺž steny.

Po nakreslení vyberte úsek. Pod **Vybraná značka** má každý segment políčko {{ui:Odpočet}}: zaškrtnite ho, aby sa segment odpočítal, odškrtnite ho, aby sa počítal znova. Každá zmena je jeden krok späť.

Úsek vždy zachová aspoň jeden segment, ktorý sa počíta. Panel potom zobrazuje **Odpočty** (odpočítanú dĺžku) a **Nakreslené** (celý úsek). **Dĺžka**, množstvo položky, plocha steny a náklady všetko používajú dĺžku bez odpočtov. 3D kontrolný pohľad nechá v stene medzeru, označené PDF nakreslí odpočty prerušovane a exportovaný hárok **Značky** ich vypíše.

Presun rohu odpočty zachová. Pridávanie alebo odoberanie bodov (opätovným nakreslením úseku) začína bez nich.

## Pozrieť si podrobnosti úseku

Zvoľte {{ui:Vybrať}} ({{key:V}}) a kliknite na úsek. **Vybraná značka** vpravo zobrazí:

- položku, do ktorej patrí (vyberte inú lineárnu položku v zozname, aby sa úsek presunul tam),
- list,
- **Dĺžku** v stopách a palcoch a v LF,
- počet **Segmentov** a **Plochu steny**, keď má položka výšku,
- dĺžku každého segmentu, s "(oblúk)" za oblúkmi, a jeho políčko {{ui:Odpočet}}.

Na liste je každý segment vybraného úseku označený svojou dĺžkou.

## Oprava úseku

- **Presun bodu**: vyberte úsek a potiahnite jednu z jeho štvorcových rohových rúčok. Podržte {{key:Shift}}, aby sa presúvaný segment prichytil po krokoch 45°. Oblúk si zachová svoju vypuklosť.
- **Ohnutie oblúka**: vybraný úsek zobrazuje okrúhlu rúčku v strede každého oblúka. Potiahnite ju: oblúk prechádza bodom, kde ju pustíte, takže sa ohne viac, menej alebo na opačnú stranu. Ak ju potiahnete na priamu čiaru medzi jeho koncami, stane sa z nej rovný segment. {{key:Mod+Z}} to vráti ("Ohnutie oblúka").
- **Zmazanie úseku**: vyberte ho a stlačte {{key:Delete}}, zvoľte {{ui:Zmazať}} v ponuke {{ui:Viac}} na paneli nástrojov, alebo {{ui:Zmazať značku}} v paneli.
- **Späť**: {{key:Mod+Z}}; znova s {{key:Mod+Y}}.

Bod v strede úseku zatiaľ nemôžete vložiť. Zmažte úsek a nakreslite ho znova.

## Plocha steny

Dajte lineárnej položke {{ui:Výška}} (napríklad `9'-0"`). Potom uvádza **Plochu steny (A)** = dĺžka × výška, v SF (alebo m² pri metrickej položke), a plocha steny sa dostane do stĺpca poznámok exportu tabuľky. Použite ju v zostavách pre dosky, náter alebo izoláciu: pozrite si [Zostavy a vzorce](topic:assemblies).
