---
title: Izindawo zezindleko
summary: Phawula izimaka ngesakhiwo, ngesitezi noma ngesigaba, yenza ukubala indawo eyodwa ngesikhathi, bese ufunda inani nezindleko zendawo ngayinye.
keywords: engeza okukhethwayo, susela okukhethwayo, ithenda elisisekelo, okukhethwayo, indawo yezindleko, indawo, isakhiwo, isitezi, izinga, isigaba, ukuhlukaniswa, isitezi esijwayelekile, isamba esincane, ngendawo
from: 64f3d41c
---

**Indawo yezindleko** ingxenye yomsebenzi oyibiza ngokwayo: isakhiwo, isitezi, isigaba, ingxenye. Ngayinye imaka ingaba kwindawo yezindleko eyodwa. Inani nesilinganiso sezindleko kungafundwa ngendawo ngayinye, nesamba esincane sayo, kanti isamba somsebenzi sihlala yisamba sakho konke.

## Yenza indawo yezindleko

1. Phezulu kwephaneli ye-{{ui:Items}}, vula uhlu lwe-{{ui:Bid area}}.
2. Khetha **Indawo yezindleko entsha…**, thayipha igama njengo "Isakhiwo A" noma "Isitezi 2", bese ukhetha **Yenze yona**.
   Indawo entsha iba yamanje. Ibha yesimo ithi "Izimaka ezintsha ziya ku-(igama). Izimaka ezisezindaweni zezindleko ezinye ziyafiphala."

## Bala ngendawo

Lapho indawo yezindleko ikhethiwe ohlwini, zonke izimaka ezintsha ziya kuyo: imigqa, izindawo, imibuthano, izinani, izimaka ezengezwa yi-{{ui:Auto count}}, nokuhlanganiswa. Izimaka ezisezindaweni zezindleko ezinye, nezingasezindaweni, ziyafiphala ushidi ukuze ubone okuyini kuphi.

Khetha **No bid area** ohlwini ukubala ngaphandle kwayo; akukho okufiphala ngalesosikhathi.

:::tip
Amasitezi ajwayelekile: bala i-Isitezi 2, khetha izimaka zayo ({{key:Mod+A}} kushidi), zikopishe, khetha Isitezi 3 ohlwini bese unamathisela. Izikhopi ziya ku-Isitezi 3. Uma amasitezi efana futhi ungadingi ukuwahlukanisa, [iqembu elijwayelekile](topic:typical-groups) libala isitezi esisodwa izikhathi eziningi kunalokho.
:::

## Hambisa izimaka kwenye indawo

Khetha imaka eyodwa noma eminingi ({{key:Shift}} + chofoza, noma {{key:Mod+A}}). Ngaphansi kwe-**Imaka ekhethiwe** (noma **Izimaka ezikhethiwe**), khetha indawo kusipaji se-{{ui:Bid area}}. Ibha yesimo ithi "Izimaka ezi-3 zihanjiswe ziya ku-Isitezi 2." Kuyisinyathelo esisodwa sokuhlehlisa.

## Qamba kabusha, hlela kabusha noma susa

Khetha **Phatha izindawo zezindleko…** ohlwini. Bhala phezu kwegama ukulibiza kabusha, sebenzisa izimpandla ukushintsha ukulandelana (amathebula nencwadi yokusebenza kuyalandela), noma susa enye ngebhasikidi. Ukususa indawo yezindleko kugcina izimaka zayo: zisuke zingasemandleni endaweni yezindleko. {{key:Mod+Z}} ihlehlisa ushintsho ngalunye.

## Funda izinani ngendawo

Ku-{{ui:Quantities}}, khetha {{ui:By area}} (ibonakala uma ukubala sekunendawo yezindleko). Indawo ngayinye ibhala izinto eziyiphethe, nenani layo, iyunithi nesamba, bese kuba umugqa wesamba esincane. Izimaka ezingekho ndaweni yezindleko zifika ekugcineni, njenge-**No bid area**. Chofoza umugqa wento ukuze uyigqamise futhi wenze leyo ndawo ibe yamanje.

Izinhlanganisela zibalwa ngendawo ngayinye ngamaphelele ayo. Ifomula ezungezayo, njengo `ceil(L / 4)`, ingenza amanani amakhulu kancane ezindaweni ndawonye kunasemsebenzini wonke, njengoba kwenzeka kwithenda elibalwe ngendawo ngayinye.

## Okukhethwayo: ithenda elisisekelo, ukwengeza nokususa

Indawo yezindleko ingaba **okukhethwayo** (alternate): umsebenzi umnikazi angawungeza ethendeni, noma awususe kulo. Ku-**Phatha izindawo zezindleko…**, indawo ngayinye inohlu olusecaleni kwegama layo:

| Ukukhetha | Okwenzayo |
|---|---|
| {{ui:Base bid}} | Ethendeni, njengokujwayelekile. |
| {{ui:Add alternate}} | Ibalwa yodwa futhi **ishiywe ngaphandle kwethenda elisisekelo**: ukuthuthukiswa kwekhaphethi, isiphahla esengeziwe. |
| {{ui:Deduct alternate}} | Ethendeni elisisekelo, futhi inikezwa njengokususwa: "susa isiphahla". |

Bala umsebenzi wokukhetha endaweni yezindleko yawo njengakwezinye izindawo. Uma ukubala sekunokukhetha:

- Ikhanda lethebula le-{{ui:Quantities}} lithi **Ithenda elisisekelo** esikhundleni se-{{ui:Job total}}: konke ukubala ngaphandle kokwengeza okukhethwayo.
- {{ui:By area}} iphela ngethenda elisisekelo nomugqa owodwa wokukhetha ngakunye: **+$300.00** ngokwengeziwe, **−$1,050.00** ngokususiwe.
- Okukhethwayo kubiza kuphela izinto ezinezimaka kuyo, nezinhlanganisela zazo, ukuze ingxenye yento enye ingangeni ngokungazelelwe.

Ku-exports, i-CSV iphela ngethenda elisisekelo nokukhethwayo, futhi incwadi yokusebenza ithola ishidi elithi **Alternates**: ithenda elisisekelo, izinto zokukhetha ngakunye nokushintsha kwazo, kanye nethenda elisisekelo nakho konke okungeziwe okususiwe.

## Ku-export

{{ui:XLSX}} yengeza ishidi elithi **By bid area**: izinto nezingxenye zendawo ngayinye ngenani, inani ngokulahleka, izinto zokusebenza, umsebenzi nesamba, isamba esincane ngendawo (ifomula ye-`SUM`) kanye ne-**All bid areas** ekugcineni. Ishidi le-**Marks** lithola ikholomu ethi **Bid area**. Ukubala okungenayo izindawo zezindleko kuthunyelwa njengakuqala. Bona [Amakholomu okuthumela](topic:export-columns).

Izindawo zezindleko zigcinwa kwifayela lephrojekthi kanye nezimaka.
