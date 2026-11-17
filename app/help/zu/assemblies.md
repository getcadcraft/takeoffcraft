---
title: Izinhlanganisela namafomula
summary: Engeza izingxenye kwento bese uvumela amafomula aguqule ubude, indawo noma inani libe yizinsimbi, amapuleti, amashidi ebhodi, ukhonkolo nezinto zokuxhuma, kanye nesibonelo sodonga.
keywords: inhlanganisela, izingxenye, ifomula, izinsimbi, ibhodi lodonga, amashidi, amapuleti, ukhonkolo, amayadi ekhyubhu, izinto zokuxhuma, iresiphi, ejwayelekile, izingxenye zento
from: 12891a21
---

**Inhlanganisela** yento uhlu lwezingxenye, ngayinye inefomula yobuningi kanye namazinga ayo okulahleka nezinga lentengo. Ifomula isebenzisa amanani aphelele aphimisiwe waleyo nto, ngakho ukukala kodonga kodwa kunikeza izinsimbi, amapuleti nebhodi ngesikhathi esisodwa, futhi ayavuselelwa njengoba ukala.

## Izinguquko ongazisebenzisa

| Uhlobo lwento | Izinguquko |
|---|---|
| Umugqa | `L` ubude, `H` ukuphakama, `A` indawo yodonga (L × H), `N` inani lemigqa |
| Indawo | `A` indawo, `P` umzila (umphethe + izingxenye ezinqunyiwe), `H` ujula noma ukuqina, `N` inani lezindawo |
| Inani | `N` inani |

Amanani asebenzisa iyunithi yento ngokwayo: amafidi namafidi ayisikwele zezinto ze-LF ne-SF, nemitha nemitha ayisikwele zezinto ze-m nezi-m². Kuzinto ze-SY, `A` isemayadini ayisikwele, kanti `P` no-`H` sihlala emafidini.

Amafomula asebenzisa `+ - * /` (noma × ÷), amabhulaketi, izinombolo, nemisebenzi `ceil`, `floor`, `round`, `min`, `max` kanye ne-`abs`. Imithetho ephelele itholakala ku-[Ulimi lwamafomula](topic:formulas).

## Isibonelo: udonga langaphakathi

Ake sithi ukale **Udonga langaphakathi uhlobo A** njengento yomugqa: imigqa engu-4 eyizinga lamafidi angu-120 LF, no-{{ui:Height}} usethwe ku-`9'-0"`. Amanani akalwe akhombisa L = 120, N = 4, A = 1,080 (SF yodonga, uhlangothi olulodwa).

1. Khetha into ngaphansi kwe-{{ui:Items}}.
2. Ku-{{ui:Assembly}}, khetha {{ui:Add component}}.
   Kuvela ingxenye ebizwa ngokuthi "Ingxenye", ine-ifomula `L` nomphumela ngaphansi kwayo.
3. Thayipha `Izinsimbi 16 in o.c.` ku-{{ui:Name}} no `EA` ku-{{ui:Unit}}.
4. Ku-{{ui:Quantity formula}}, thayipha `ceil(L * 12 / 16) + N`.
   Umphumela uyavuselelwa njengoba uthayipha: "= 94 EA". Lokho kuyinsimbi eyodwa njalo ngamayintshi angu-16 ngesikhathi samafidi angu-120 (90), kanye neyengeziwe ukuvala ngayinye yemigqa engu-4.
5. Khetha {{ui:Add component}} futhi ngamapuleti: igama `Amapuleti, phezulu nephansi`, iyunithi `LF`, ifomula `L * 2`. Umphumela: 240 LF.
6. Engeza ibhodi: igama `Ibhodi legypsum 4x8, zombili izinhlangothi`, iyunithi `amashidi`, ifomula `ceil(A * 2 / 32)`. Umphumela: amashidi angu-68 (SF angu-2,160 webhodi ÷ 32 SF ngeshidi = 67.5, ibuyiselwe phezulu).
7. Gcwalisa i-{{ui:Waste %}}, i-{{ui:Material $}} ne-{{ui:Labor $}} yengxenye ngayinye.
   Ingxenye ngayinye ithola umugqa wayo ngaphansi kwento ku-{{ui:Quantities}}, ibizwa njengento, futhi i-{{ui:Job total}} iyihlanganisa.

Uma izindleko zodonga zonke zisezingxenyeni, shiya izinga lezinto nomsebenzi lento ku-0, ngaphandle kwalokho zibalwa kabili.

:::tip
Ukulahleka kusetshenziswa ngemva kwefomula futhi akuzungezwa: amashidi angu-68 nokulahleka kwama-10% kuba amashidi angu-74.8. Ukuze uoda amashidi aphelele, faka ukulahleka ngaphakathi kwefomula, njengo `ceil(A * 2 / 32 * 1.1)`, bese ushiya ukulahleka kwengxenye ku-0.
:::

## Amanye amafomula

| Okwenzelwa | Into | Ifomula |
|---|---|---|
| Izinsimbi ngamayintshi angu-24 ngaphakathi | Umugqa | `ceil(L / 2) + N` |
| Ama-insulation batts, SF | Umugqa nobude | `A` |
| Upende, zombili izinhlangothi, amagaloni ngo-350 SF | Umugqa nobude | `ceil(A * 2 / 350)` |
| Amakhathoni wethayili ngo-15 SF, okungu-10% okwengeziwe | Indawo | `ceil(A * 1.1 / 15)` |
| Umphetho wodonga noma ukuhlaza komphetho, LF | Indawo | `P` |
| Ukhonkolo, amayadi ekhyubhu | Indawo nokujula | `A * H / 27` |
| Ukhonkolo ozungezwe waba ikota yeyadi | Indawo nokujula | `ceil(A * H / 27 * 4) / 4` |
| Amahinji, amathathu ngomnyango | Inani | `N * 3` |
| Okungenani ibhokisi elilodwa, elilodwa ngo-12 | Inani | `max(1, ceil(N / 12))` |

## Uma ifomula ingalungile

Umugqa ongaphansi kwefomula uba umlayezo wephutha, isibonelo `"X" ayisilinganiso esikalwe lapha. Sebenzisa L, H, A, N.` noma `Kukhona ")" ekhishiwe.` Ingxenye-ke ayinanani, umugqa wayo ku-{{ui:Quantities}} ubonisa "Iphutha lefomula: …", futhi ihedha ithi "Akuphelele: iphutha lefomula eli-1 (akubalwanga kumaphelele)". Lungisa ifomula, bese amaphelele avuselelwa.

Ifomula ehlukanisa ngo-zero iyiphutha nayo ("Ifomula ihlukanisa ngo-zero."), isibonelo `A / H` kuto engenayo ujula.

## Imikhawulo

- Amafomula asebenza ngamaphelele wento, hhayi umugqa ngomugqa. `ceil(L * 12 / 16) + N` yengeza insimbi eyodwa ngomugqa; ayikabi khona ukuzungezwa ngomugqa.
- Ifomula ingasebenzisa kuphela izinguquko zento yayo, hhayi zento enye.
- Kuya kwezingxenye ezingama-50 ngento, nezinhlamvu ezingama-500 ngefomula.

## Susa ingxenye

Khetha {{ui:Remove component}} ngaphansi kwayo. Ungayibuyisela nge-{{key:Mod+Z}}.
