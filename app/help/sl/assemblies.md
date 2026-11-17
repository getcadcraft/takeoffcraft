---
title: Sestavi in formule
summary: Dodajte komponente postavki in naj formule spremenijo njihovo dolžino, površino ali število v pokončnike, vezne letve, plošče, beton in okovje, s primerom stene.
keywords: sestav, komponente, formula, pokončniki, mavčne plošče, liste, vezne letve, beton, kubični jardi, okovje, recept, tipično, deli postavke
from: 12891a21
---

Sestav postavke je seznam komponent, vsaka s formulo količine ter lastnim odpadkom in stopnjami. Formula uporablja izmerjene skupne vrednosti postavke, zato ena predizmera stene da pokončnike, vezne letve in plošče hkrati, ob merjenju pa se posodabljajo.

## Spremenljivke, ki jih lahko uporabite

| Vrsta postavke | Spremenljivke |
|---|---|
| Linearna | `L` dolžina, `H` višina, `A` površina stene (L × H), `N` število odsekov |
| Površinska | `A` površina, `P` obseg (obris + izrezi), `H` globina ali debelina, `N` število površin |
| Štetje | `N` število |

Vrednosti so v lastnih enotah postavke: v ft in ft² za postavke LF in SF, v m in m² za postavke m in m². Pri postavki SY je `A` v kvadratnih jardih, `P` in `H` pa ostaneta v ft.

Formule uporabljajo `+ - * /` (ali × ÷), oklepaje, števila in funkcije `ceil`, `floor`, `round`, `min`, `max` in `abs`. Celotna pravila so v [Jezik formul](topic:formulas).

## Primer: notranja stena

Recimo, da ste izmerili **Notranja stena, tip A** kot linearno postavko: 4 odseki skupaj 120 LF, z {{ui:Višina}} nastavljeno na `9'-0"`. Njene izmerjene vrednosti so L = 120, N = 4, A = 1,080 (SF stene, ena stran).

1. Izberite postavko pod {{ui:Postavke}}.
2. V {{ui:Sestav}} izberite {{ui:Dodajanje komponente}}.
   Pojavi se komponenta z imenom „Komponenta“ s formulo `L` in njenim rezultatom spodaj.
3. V {{ui:Ime}} vpišite `Pokončniki na 16 in osni razmik` in v {{ui:Enota}} `EA`.
4. V {{ui:Formula količine}} vpišite `ceil(L * 12 / 16) + N`.
   Rezultat se posodablja med tipkanjem: „= 94 EA“. To je en pokončnik na vsakih 16 palcev vzdolž 120 čevljev (90), plus en dodatni za zaprtje vsakega od 4 odsekov.
5. Znova izberite {{ui:Dodajanje komponente}} za vezne letve: ime `Vezne letve, zgoraj in spodaj`, enota `LF`, formula `L * 2`. Rezultat: 240 LF.
6. Dodajte plošče: ime `Mavčne plošče 4x8, obe strani`, enota `listi`, formula `ceil(A * 2 / 32)`. Rezultat: 68 listov (2,160 SF plošč ÷ 32 SF na list = 67.5, zaokroženo navzgor).
7. Izpolnite {{ui:Odpadek %}}, {{ui:Material $}} in {{ui:Delo $}} za vsako komponento.
   Vsaka komponenta dobi svojo vrstico pod postavko v {{ui:Količine}}, oceno kot postavka, in {{ui:Skupaj posel}} jo vključuje.

Če so stroški stene v celoti v komponentah, pustite lastni material in stopnje dela postavke na 0, sicer se štejejo dvakrat.

:::tip
Odpadek se uporabi po formuli in ni zaokrožen: 68 listov z 10 % odpadka je 74.8 lista. Če želite naročiti cele liste, vstavite odpadek v formulo, na primer `ceil(A * 2 / 32 * 1.1)`, in pustite odpadek komponente na 0.
:::

## Več formul

| Kaj | Postavka | Formula |
|---|---|---|
| Pokončniki na 24 palcev osnega razmika | Linearna | `ceil(L / 2) + N` |
| Izolacijski zvitki, SF | Linearna z višino | `A` |
| Barva, obe strani, galone na 350 SF | Linearna z višino | `ceil(A * 2 / 350)` |
| Škatle ploščic po 15 SF, 10 % dodatno | Površinska | `ceil(A * 1.1 / 15)` |
| Podnožna ali robna letvica, LF | Površinska | `P` |
| Beton, kubični jardi | Površinska z globino | `A * H / 27` |
| Beton, zaokrožen navzgor na četrt jarda | Površinska z globino | `ceil(A * H / 27 * 4) / 4` |
| Tečaji, trije na vrata | Štetje | `N * 3` |
| Vsaj ena škatla, ena na 12 | Štetje | `max(1, ceil(N / 12))` |

## Ko je formula napačna

Vrstica pod formulo se spremeni v sporočilo o napaki, na primer `„X“ tukaj ni izmerjena vrednost. Uporabite L, H, A, N.` ali `Manjka „)“.` Komponenta nato nima zneskov, njena vrstica v {{ui:Količine}} prikaže „Napaka formule: …“, glava pa „Nepopolno: 1 napaka formule (ni v vsotah)“. Popravite formulo in skupne vsote se posodobijo.

Formula, ki deli z nič, je prav tako napaka („Formula deli z nič.“), na primer `A / H` na postavki brez globine.

## Omejitve

- Formule se izvajajo nad **skupnimi vrednostmi** postavke, ne odsek za odsekom. `ceil(L * 12 / 16) + N` doda en pokončnik za vsak odsek; zaokroževanja po odsekih še ni.
- Formula lahko uporablja samo spremenljivke svoje postavke, ne spremenljivk druge postavke.
- Do 50 komponent na postavko, do 500 znakov na formulo.

## Odstranite komponento

Izberite {{ui:Odstrani komponento}} pod njo. Odstranitev lahko razveljavite z {{key:Mod+Z}}.
