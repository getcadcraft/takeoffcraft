---
title: Assembly at mga formula
summary: Magdagdag ng mga component sa isang item at hayaang gawing studs, plates, sheets ng board, kongkreto at hardware ang haba, lawak o bilang nito gamit ang mga formula, kasama ang halimbawa ng pader.
keywords: assembly, component, formula, studs, drywall, sheets, plates, kongkreto, cubic yards, hardware, recipe, typical, parte ng item
from: 12891a21
---

Ang **assembly** ng isang item ay listahan ng mga component, bawat isa ay may sariling quantity formula at sariling waste at rate. Ginagamit ng formula ang mga kabuuang sukat ng item, kaya ang isang takeoff ng pader ay nagbibigay agad ng studs, plates at board, at nagbabago ang mga ito habang nagme-measure ka.

## Mga variable na magagamit mo

| Uri ng item | Mga variable |
|---|---|
| Linear | `L` haba, `H` taas, `A` lawak ng pader (L × H), `N` bilang ng run |
| Area | `A` lawak, `P` perimeter (outline + cut-outs), `H` lalim o kapal, `N` bilang ng area |
| Count | `N` bilang |

Nasa sariling unit ng item ang mga value: talampakan at square feet para sa LF at SF na item, metro at square meter para sa m at m² na item. Para sa SY na item, nasa square yard ang `A`, habang nasa talampakan pa rin ang `P` at `H`.

Gumagamit ang mga formula ng `+ - * /` (o × ÷), mga panaklong, mga numero, at mga function na `ceil`, `floor`, `round`, `min`, `max` at `abs`. Kumpleto ang mga patakaran sa [Formula language](topic:formulas).

## Halimbawa: panloob na pader

Sabihin nating na-takeoff mo ang **Interior wall type A** bilang linear item: 4 na run na may kabuuang 120 LF, at nakatakda sa {{ui:Height}} ang `9'-0"`. Ang **Measured** na value ay L = 120, N = 4, A = 1,080 (SF ng pader, isang mukha).

1. Piliin ang item sa ilalim ng {{ui:Items}}.
2. Sa {{ui:Assembly}}, piliin ang {{ui:Add component}}.
   May lalabas na component na pinangalanang "Component", na may formulang `L` at resulta nito sa ibaba.
3. I-type ang `Studs 16 in o.c.` sa {{ui:Name}} at `EA` sa {{ui:Unit}}.
4. Sa {{ui:Quantity formula}}, i-type ang `ceil(L * 12 / 16) + N`.
   Nagbabago agad ang resulta habang nagta-type ka: "= 94 EA". Iyan ay isang stud bawat 16 pulgada sa 120 talampakan (90), dagdag ang isa para isara ang bawat isa sa 4 na run.
5. Piliin muli ang {{ui:Add component}} para sa plates: pangalanan itong `Plates, top and bottom`, unit `LF`, formula `L * 2`. Resulta: 240 LF.
6. Idagdag ang board: pangalan `Gypsum board 4x8, both sides`, unit `sheets`, formula `ceil(A * 2 / 32)`. Resulta: 68 sheets (2,160 SF ng board ÷ 32 SF bawat sheet = 67.5, pinataas).
7. Punan ang {{ui:Waste %}}, {{ui:Material $}} at {{ui:Labor $}} ng bawat component.
   Bawat component ay may sariling row sa ilalim ng item sa {{ui:Quantities}}, may presyo tulad ng item, at kasama ito sa {{ui:Job total}}.

Kung nasa mga component na lahat ang gastos ng pader, iwanang 0 ang sariling material at labor rate ng item, kung hindi ay mabibilang ito nang dalawang beses.

:::tip
Ang waste ay ina-apply pagkatapos ng formula at hindi ni-round: ang 68 sheets na may 10% waste ay 74.8 sheets. Para mag-order ng buong sheets, ilagay ang waste sa loob ng formula, gaya ng `ceil(A * 2 / 32 * 1.1)`, at iwanang 0 ang waste ng component.
:::

## Iba pang formula

| Ano | Item | Formula |
|---|---|---|
| Studs sa 24 in on center | Linear | `ceil(L / 2) + N` |
| Insulation batts, SF | Linear na may taas | `A` |
| Pintura, dalawang gilid, galon sa 350 SF | Linear na may taas | `ceil(A * 2 / 350)` |
| Tile cartons sa 15 SF, 10% dagdag | Area | `ceil(A * 1.1 / 15)` |
| Base o edge trim, LF | Area | `P` |
| Kongkreto, cubic yards | Area na may lalim | `A * H / 27` |
| Kongkreto, bilugan pataas sa quarter yard | Area na may lalim | `ceil(A * H / 27 * 4) / 4` |
| Hinges, tatlo bawat pinto | Count | `N * 3` |
| Kahit isang kahon, isa kada 12 | Count | `max(1, ceil(N / 12))` |

## Kapag mali ang formula

Ang linya sa ilalim ng formula ay nagiging error message, halimbawa `"X" ay hindi measured value dito. Gamitin ang L, H, A, N.` o `Kulang ang ")".` Walang lalabas na halaga ang component, ang row nito sa {{ui:Quantities}} ay nagpapakita ng "Formula error: …", at ang header ay nagsasabing "Kulang: 1 formula error (wala sa mga total)". Ayusin ang formula at mag-a-update ang mga total.

Error din ang formula na hinahati sa zero ("Hinahati sa zero ang formula."), halimbawa ang `A / H` sa item na walang lalim.

## Mga limitasyon

- Tumatakbo ang mga formula sa **total** ng item, hindi run-by-run. Ang `ceil(L * 12 / 16) + N` ay nagdaragdag ng isang stud bawat run; wala pang per-run rounding.
- Ang formula ay makagagamit lang ng sariling variable ng item nito, hindi ng variable ng ibang item.
- Hanggang 50 component bawat item, at 500 character bawat formula.

## Alisin ang component

Piliin ang {{ui:Remove component}} sa ilalim nito. Maaari mo itong i-undo gamit ang {{key:Mod+Z}}.
