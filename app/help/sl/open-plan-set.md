---
title: Začnite predizmero in odprite komplet načrtov
summary: Odprite enega ali več PDF-jev kot komplet načrtov, se znajdite med listi in se premikajte med njimi.
keywords: odpri, komplet načrtov, več PDF-jev, več datotek, listi, risbe, oznake strani, seznam listov, krmarjenje, spust, predaja, odpri v drugi aplikaciji, označevanje
from: ed434468
---

Komplet načrtov je pogosto več PDF-jev: arhitekturni, konstrukcijski, strojni. TakeoffCraft jih odpre drugega ob drugem kot en seznam listov, ena predizmera pa lahko zajame vse.

## Odprite PDF-je

1. Izberite {{ui:Odpri načrte}} v skupini {{ui:Datoteka}} ali pritisnite {{key:Mod+O}}. (Drugi slogi menijev to imenujejo {{ui:Odpri PDF-je…}}.)
2. V pogovornem oknu izberite vse PDF-je kompleta. Držite {{pick:mac=Command|windows=Ctrl|linux=Ctrl}}, da izberete več, ali {{key:Shift}}, da izberete obseg.
3. Izberite Odpri.
   Med branjem vsake datoteke se prikaže sporočilo „Odpiranje (ime)…“. Nato se vsaka stran pojavi pod {{ui:Listi}}, odpre pa se prva stran prvega novega PDF-ja.

PDF-je lahko tudi povlečete iz {{pick:mac=Finder|windows=File Explorer|linux=vašega upravitelja datotek}} in spustite kamorkoli na TakeoffCraft. Med vlečenjem se prikaže okvir „Spustite PDF-je, risbe DWG ali DXF ali .takeoff.json“.

Dodatne PDF-je dodate pozneje tako, da ponovite isto. PDF-ji, ki so že odprti, se preskočijo.

Začetni zaslon prikaže tudi PDF-je in predizmere, ki ste jih nazadnje odprli, v brskalnikih, ki omogočajo strani znova odpreti datoteko (Chrome in Edge). Kliknite jo, da jo odprete; brskalnik lahko najprej zahteva dovoljenje. Glejte [Vaše datoteke](common:your-files).

:::note
Ničesar se ne naloži. Brskalnik bere PDF-je v vašem računalniku, ti pa so iz TakeoffCraft odstranjeni, ko zaprete zavihek ali izberete {{ui:Novo}}.
:::

## Risbe poleg PDF-jev

{{ui:Odpri načrte}} sprejme tudi risbe DWG in DXF, same ali skupaj s PDF-ji: modeli prostor in postavitve vsake risbe postanejo listi na istem seznamu. Glejte [Odprite risbo DWG ali DXF](topic:open-a-drawing), nato [Štetje iz risbe](topic:count-from-a-drawing).

## PDF, predan iz druge aplikacije

Druga aplikacija iz nabora vam lahko preda PDF, ki ga ima odprtega: odpre TakeoffCraft v novem zavihku in PDF se odpre tam, kot da ste ga spustili. Vrstica stanja pove „Odprto (ime), predano iz (aplikacija). Izvirna datoteka je nespremenjena.“ Ničesar se ne naloži; datoteka gre čez shrambo tega brskalnika in je iz nje odstranjena, ko se odpre.

Če vrstica stanja pove, da PDF „ni prispel“, je zavihek predolgo čakal ali pa je bil PDF že odprt v drugem zavihku: odprite ga z {{ui:Odpri načrte}}.

Obratno, kadar MarkupCraft deluje tam, kjer ste, in lahko prevzame datoteko, ima vrstica listov pod risbo gumb {{ui:MarkupCraft}}: odpre PDF lista na zaslonu v MarkupCraft, v novem zavihku, za pregled in označevanje.

## Najdite list

- Pomaknite se po seznamu {{ui:Listi}} na levi in kliknite list.
- Vpišite v **Išči liste** na vrhu seznama, da filtrirate po številki lista, imenu datoteke ali oznaki strani. Številka poleg {{ui:Listi}} pokaže „3 od 40“, ko je filter vklopljen.
- Pritisnite {{key:PageDown}} za naslednji list in {{key:PageUp}} za prejšnjega. Sledita seznamu, kot je filtriran.

:::mac
Na tipkovnici Mac brez tipk Page Up in Page Down pritisnite fn s puščico gor ali dol.
:::

## Kako so listi poimenovani

- Stran, ki ima v PDF oznako, na primer `A-101`, je poimenovana po tej oznaki.
- Stran brez oznake (ali oznaka, ki je samo njena številka strani) je poimenovana „(ime datoteke), stran (n)“.
- Ko je odprtih več PDF-jev, označeni listi nosijo tudi ime datoteke: „A-101 — Architectural“.

Imen listov še ni mogoče vpisati ročno.

## Oglejte si list

- Premaknite kolešček miške za povečavo na kazalcu.
- Vlecite z levim ali srednjim gumbom za pomik (pan). Z {{ui:Samodejno štetje}} ali kadar začnete na kotu oznake držite {{key:Space}} med vlečenjem ali vlecite s srednjim gumbom.
- Pritisnite {{key:F}} ali izberite {{ui:Cela stran}}, da vidite ves list; {{key:W}} ali {{ui:Širina}} prilagodi njegovo širino.
- Pritisnite {{key:Plus}} ali {{key:=}} za povečavo in {{key:Minus}} za pomanjšavo okoli sredine pogleda.

Vsak list si med odprtostjo zapomni svojo povečavo in položaj.

## Naprej

Preden lahko izmerite list, potrebuje merilo: [Nastavite merilo](topic:set-the-scale).
