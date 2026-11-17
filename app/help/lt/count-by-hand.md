---
title: Skaičiuoti rankiniu būdu
summary: Spustelėkite kiekvienas duris, įrenginį arba prietaisą, kad jį suskaičiuotumėte, patikrinkite skaičius ir ištaisykite klaidas.
keywords: skaičiavimas, kiekvienas, ea, įrenginiai, durys, prietaisai, simboliai, žymėjimas, spustelėjimo skaičiavimas, rankinis skaičiavimas
from: 594f2980
---

Skaičiavimo pozicija skaičiuoja daiktus: duris, šviestuvus, lizdus, santechnikos įrenginius. Kiekvienas spustelėjimas lape prideda vieną skaičiavimo žymą. Skaičiuoti nereikia mastelio.

## Skaičiuoti

1. Sukurkite arba spustelėkite skaičiavimo poziciją skiltyje {{ui:Pozicijos}} (tipas {{ui:Skaičiuoti}}).
2. Įrankių juostoje pasirinkite {{ui:Skaičiuoti}} arba paspauskite {{key:C}}.
3. Spustelėkite kiekvieną lape esantį daiktą.
   Kiekvienas spustelėjimas padeda tašką pozicijos spalva, o pozicijos skaičius padidėja vienu.
4. Pereikite į kitą lapą ({{key:PageDown}}) ir toliau skaičiuokite. Įrankis lieka {{ui:Skaičiuoti}}.
5. Baigę paspauskite {{key:Esc}}. TakeoffCraft grįžta į {{ui:Pasirinkti}}.

Vilkimas vis dar slenka, o ratukas keičia mastelį, kol skaičiuojate, todėl galite judėti po lapą nepridėdami taškų.

:::tip
Spustelėkite skaičiavimo poziciją, kad būtų paryškinti jos taškai kiekviename lape. Lapų sąraše tada rodoma, kiek taškų yra kiekviename lape, o tai padeda rasti dar nesuskaičiuotus lapus.
:::

## Ištaisyti skaičiavimą

- **Pašalinti tašką**: pasirinkite {{ui:Pasirinkti}} ({{key:V}}), spustelėkite tašką ir paspauskite {{key:Delete}} arba pasirinkite {{ui:Naikinti žymą}}. Arba paspauskite {{key:Mod+Z}} iškart po klaidingo spustelėjimo.
- **Perkelti tašką**: pasirinkite jį ir vilkite.
- **Suskaičiuota pagal klaidingą poziciją**: pasirinkite tašką ir skiltyje **Pasirinkta žyma** pasirinkite teisingą skaičiavimo poziciją **Pozicija** sąraše.

## Taškų dydis ekrane ir PDF

Taškai išlaiko vieną dydį ekrane, kad ir kiek priartintumėte. Norėdami pakeisti, atidarykite {{ui:Parametrai}}, skirtuką TakeoffCraft, ir pasirinkite **Skaičiavimo žymos dydis**: Labai mažas, Mažas, Vidutinis (numatytasis) arba Didelis.

PDF eksportas ({{ui:Eksportuoti}} › pažymėtas PDF) nubraižo kiekvieną tašką tokio paties dydžio popieriuje, nepriklausomai nuo lapo dydžio: PDF rodinys 100 % parodo taškus tokius pat didelius, kaip jie ekrane. Jei lape taškai vis tiek liestųsi, eksportas to lapo taškus padaro mažesnius, kad kiekvienas būtų įskaitomas.

## Daug vienodų simbolių

Simboliui, kuris lape kartojasi daug kartų, išbandykite [Automatinis skaičiavimas](topic:auto-count): apibrėžkite vieną, peržiūrėkite, ką jis rado, ir pridėkite visus vienu žingsniu.

## Skaičiavimų naudojimas formulėse

Skaičiavimo pozicijos kiekis yra **N**. Surinkimo komponentai gali jį naudoti, pavyzdžiui vyrių `N * 3` durims. Žr. [Surinkimai ir formulės](topic:assemblies).
