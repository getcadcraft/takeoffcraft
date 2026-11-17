---
title: Uloženie a opätovné otvorenie výkazu
summary: Uložte výkaz ako projektový súbor .takeoff.json, znova ho otvorte s rovnakými PDF a zistite, čo sa stane, keď PDF chýba alebo sa zmenilo.
keywords: výkaz vo vnútri PDF, vložiť, príloha, uložiť, otvoriť, znova otvoriť, projekt, takeoff.json, pokračovať, pokračovanie, upravené PDF, zmenené PDF, chýbajúce PDF, záloha, automatické ukladanie, obnoviť, pád
from: bd5080a6
---

Výkaz sa ukladá ako malý projektový súbor `(názov).takeoff.json`. Obsahuje vaše položky, zostavy, jednotkové ceny, mierku každého listu a každú značku. Súbory PDF **neobsahuje**; nájde ich znova podľa ich obsahu.

## Uloženie

1. Vyberte {{ui:Save takeoff}} v skupine {{ui:File}} alebo stlačte {{key:Mod+S}}.
   Váš prehliadač stiahne súbor `(názov).takeoff.json`. Stavový riadok zobrazí "Súbor (názov).takeoff.json bol uložený. Znova sa otvorí nad rovnakými PDF (zhodujú sa podľa ich obsahu)."
2. Presuňte súbor vedľa PDF súborov zákazky, aby ostali spolu.

Každé uloženie stiahne nový súbor. Váš prehliadač môže druhý súbor pomenovať `(názov) (1).takeoff.json`; ponechajte najnovší.

Názov sa odvodí od prvého PDF, ktoré ste v tomto výkaze otvorili.

:::note
Uložiť výkaz je stále jediný spôsob, ako výkaz uchovať ako súbor. Počas práce TakeoffCraft ukladá aj obnovovaciu kópiu v tomto prehliadači (pozri nižšie) a ukladanie do cloudu zatiaľ nie je dostupné. Ak sa pokúsite zavrieť kartu s neuloženými zmenami, prehliadač sa opýta, či chcete odísť.
:::

## Výkaz vo vnútri PDF

{{ui:Export}} › {{ui:PDF with the takeoff inside}} stiahne kópiu každého otvoreného PDF s názvom ako `Plány (s výkazom).pdf`, ktorá nesie celý výkaz ako prílohu: položky, značky, mierky, oblasti ponuky, všetko, čo obsahuje `.takeoff.json`. Jej strany zostávajú nezmenené, takže vyzerajú a tlačia sa rovnako ako pôvodný súbor a ďalšie čítačky PDF zobrazujú výkaz medzi prílohami.

Otvorte toto PDF v TakeoffCraft (akýmkoľvek spôsobom, akým otvárate PDF) a program sa opýta **Toto PDF obsahuje výkaz**: vyberte {{ui:Open the takeoff}}, aby ste ho získali späť, alebo {{ui:Just the PDF}}, ak chcete otvoriť len výkres. Kópia zastupuje PDF, z ktorého vznikla, takže `.takeoff.json` uložený z ktorejkoľvek z nich sa otvorí na oboch.

Pri viacerých PDF každá kópia nesie celý výkaz; otvorte ich spolu. Ak uložíte znova z kópie, výkaz vo vnútri sa nahradí, nepridá sa druhý. Súborom, ktorý treba uchovať, je stále `.takeoff.json`: je malý a zapisuje ho automatické ukladanie aj desktopová aplikácia.

## Ak sa karta alebo prehliadač zastaví

Pár sekúnd po každej zmene TakeoffCraft uloží kópiu výkazu do vlastného úložiska tohto prehliadača spolu s jeho PDF, ak nepresiahnu 64 MB. Nič sa nenahráva. Keď výkaz uložíte, začnete nový alebo otvoríte iný projekt, kópia sa odstráni.

Ak karta spadne, prehliadač alebo počítač sa zastaví, alebo odídete s neuloženými zmenami, pri ďalšom otvorení TakeoffCraft sa program opýta **Obnoviť vašu prácu?** a uvedie výkaz podľa názvu. Vyberte **Obnoviť** a získate ho späť: položky, značky a mierky sa vrátia a jeho PDF sa znova otvoria, ak boli uchované. Stavový riadok zobrazí "Obnovené (názov). Ešte nie je uložené do súboru: uložte ho cez Uložiť výkaz." Ak boli PDF príliš veľké na uchovanie, otvorte ich znova; značky sa zobrazia na ich listoch. Viac: [Obnoviť prácu](common:recover).

## Opätovné otvorenie

1. Otvorte TakeoffCraft.
2. Presuňte súbor `.takeoff.json` a jeho PDF na stránku spoločne. Alebo vyberte {{ui:Open plans}} pre PDF a {{ui:Open takeoff}} pre projekt, v ľubovoľnom poradí.
   Stavový riadok zobrazí "Otvorené (názov): 12 položiek, 340 značiek." Každý list dostane späť svoju mierku a značky sa zobrazia na listoch.

Poradie PDF nezáleží, rovnako ako ich názvy alebo priečinky. TakeoffCraft rozpozná každé PDF podľa odtlačku jeho obsahu.

Ak otvoríte projekt, keď má aktuálny výkaz neuložené zmeny, TakeoffCraft sa najprv opýta: **Zrušiť**, **Zahodiť zmeny** alebo **Najprv uložiť výkaz**. Otvorenie projektu nahradí aktuálne položky a značky; PDF, ktoré sú už otvorené, zostanú otvorené.

## Ak PDF chýba

Ak otvoríte projekt bez všetkých jeho PDF, stavový riadok pridá "Otvorte jeho PDF, aby ste videli značky (uvedené v zozname listov)." Pod zoznamom listov poznámka hovorí:

"Tento výkaz zahŕňa aj PDF, ktoré nie sú otvorené. Ich množstvá sa počítajú; otvorte ich, aby ste videli a upravili ich značky:"

Nasleduje zoznam názvov súborov a veľkostí. Ich značky sa stále počítajú do každého súčtu a exportu, s mierkami, pri ktorých boli namerané. Otvorte tieto PDF, ak chcete zobraziť a upraviť ich značky.

## Ak sa PDF zmenilo

PDF, ktoré bolo upravené alebo len znova uložené iným programom, má iný obsah, takže je pre TakeoffCraft **iným súborom**, aj keď má rovnaký názov. V poznámke pod zoznamom listov takýto súbor hovorí "súbor s týmto názvom je otvorený, ale jeho obsah sa líši".

- Značky zostávajú pripojené k starej verzii. Ďalej sa počítajú, na svojich pôvodných miestach a mierkach.
- Upravené PDF sa otvorí ako nové listy bez mierky a bez značiek.

Ak chcete preniesť výkaz na revíziu, otvorte obe PDF a na novom liste použite {{ui:Compare}}: [Porovnanie upraveného listu a presun výkazu](topic:compare-revisions).

## Poškodený alebo cudzí súbor

TakeoffCraft skontroluje každý projektový súbor pred použitím. Môžete vidieť tieto hlásenia:

- "(súbor) nie je projekt TakeoffCraft (nie je platný JSON)."
- "Toto nie je projektový súbor TakeoffCraft."
- "Tento projekt uložila novšia verzia TakeoffCraft. Otvorte ho tam."
- "3 značky boli poškodené a vynechané." (zvyšok sa otvorí)

## História späť

História späť sa pri otvorení projektu začína odznova. Uloženie ju nevymaže.
