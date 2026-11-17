---
title: Skep items vir hoeveelheidsopname
summary: Maak lineêre, oppervlakte- en telitems en stel hul eenheid, hoogte of diepte, afval en materiaal- en arbeidstariewe in.
keywords: span, produksietempo, spangrootte, loon, ure, mensure, werkerure, span-dae, arbeidsure, item, nuwe item, voorwaarde, multi-voorwaarde, meet ook, verskeie tipes, vertrek, lineêr, oppervlakte, tel, eenheid, hoogte, diepte, afval, materiaal, arbeid, tarief, kleur, koste
from: 7fa5effc
---

’n **Item** is een ding wat jy meet en prys: ’n muurtipe, ’n vloerafwerking, ’n plafon, ’n deur, ’n ligtoestel. Elke merk wat jy teken, hoort by ’n item. Ander programme noem dit voorwaardes.

Elke item het ’n tipe (en kan ook ander soorte merke neem, sien [Een item, verskeie soorte merke](topic:create-items#one-item-several-kinds-of-marks)):

| Tik | Jy teken | Dit rapporteer | Eenhede |
|---|---|---|---|
| Lineêr | Lopies van verbonde punte | Lengte, aantal lopies, en muurarea wanneer dit ’n hoogte het | LF of m |
| Oppervlakte | Geslote omtrekke, met uitsnydings | Oppervlakte, omtrek, aantal oppervlaktes | SF, SY, SQ, ac, ha of m² |
| Tel | Een klik per ding | Hoeveel | EA |
| Getikte hoeveelheid | Niks: jy tik die hoeveelheid | Die getal wat jy getik het (of een wat van CivilCraft ingebring is) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha of m² |

## Getikte hoeveelhede (geen tekening nie)

Sommige dinge in ’n raming word nooit geteken nie: mobilisering, permitte, ’n voorsiening vir onvoorsiene, ’n somsubkontrak, die afgrawing en opvulling wat CivilCraft bereken het. Maak hulle ’n **Getikte hoeveelheid**:

1. Kies {{ui:Nuwe item}}, tik ’n naam, kies {{ui:Getikte hoeveelheid (geen tekening nie)}} en kies {{ui:Voeg by}}.
2. In die itemredigeerder kies die {{ui:Eenheid}} (LS vir ’n somprys) en tik die {{ui:Hoeveelheid}}: `1`, `2.5` of `1,250`.
3. Stel afval en tariewe soos vir enige ander item. ’n Samestelling se formules gebruik `Q`, die hoeveelheid, byvoorbeeld `ceil(Q / 12)` vragladings.

’n Getikte hoeveelheid neem geen merke nie en maak die raming nooit onvolledig nie. Wanneer die hoeveelheidsopname tenderareas het, het die redigeerder ook {{ui:Tenderarea}}: die hoeveelheid tel dan in daardie area, sy alternatiewe en sy totale, net soos ’n merk daar sou. Hoeveelhede wat van ’n ander program ingebring word, sê waar hulle vandaan kom; sien [Grondwerk en puntelevasies](topic:earthwork#cut-and-fill-from-civilcraft).

## Maak ’n item

1. Kies in die {{ui:Items}}-paneel regs {{ui:Nuwe item}}.
2. Tik ’n naam, soos `Binnemuurtipe A` of `Tapytteël`.
3. Kies die tipe: {{ui:Lineêr (lengte)}}, {{ui:Oppervlakte}} of {{ui:Tel}}.
4. Kies {{ui:Voeg by}} (of druk {{key:Enter}}).
   Die item verskyn in die lys met sy eie kleur, word die item waarmee jy teken, en sy redigeerder open onder die lys. Die statusbalk sê vir jou watter nutsding om volgende te kies.

Druk {{key:Esc}} in die vorm om dit toe te maak sonder om ’n item by te voeg.

:::tip
As jy eers ’n meetnutsding kies, gebruik TakeoffCraft die laaste item van die regte tipe, of maak die {{ui:Nuwe item}}-vorm oop met daardie tipe alreeds gekies.
:::

## Kies die item waarmee jy teken

Klik op ’n item in die lys. Dit word die item waarheen nuwe merke gaan, en sy merke word op elke blad uitgelig terwyl die ander verbleek. As die oop blad geen van sy merke het nie, spring TakeoffCraft na ’n blad wat wel. Klik die item weer om die uitlig te stop; dit bly die item waarmee jy teken.

Klik op ’n merk met die {{ui:Kies}}-nutsding maak ook sy item die huidige een.

## Stel die item op

Die itemredigeerder (**Item: (naam)**) het hierdie velde. Elkeen word gestoor wanneer jy die veld verlaat of {{key:Enter}} druk, en elke verandering kan ontdoen word.

| Veld | Wat dit doen |
|---|---|
| {{ui:Naam}} | Wys in die lys, die tabelle en die uitvoere. |
| {{ui:Tik}} | Lineêr, Oppervlakte of Tel. Dit word gesluit sodra die item merke het ("’n Item met merke behou sy tipe"). |
| {{ui:Kleur}} | Die kleur van sy merke op die skerm en in die gemerkte PDF. |
| {{ui:Eenheid}} | Waarin die hoeveelheid gerapporteer word: LF of m vir lineêr; SF, SY, SQ, ac, ha of m² vir oppervlakte; EA vir tel. |
| {{ui:Meet ook}} | Die ander soorte merke wat die item neem, elk met sy eie eenheid. Sien hieronder. |
| {{ui:Hoogte}} (lineêr) | ’n Muurhoogte. Die item rapporteer dan ook muurarea (lengte × hoogte). Lopies wat uit ’n BimCraft-model kom, dra hul deure en vensters: dié word een keer uitgehaal, en die item sê die bruto area, die openings en die netto. ’n Opname uit ’n BimCraft-projek wat ’n meetmetode gekies het, word hier ook volgens daardie metode gemeet (die noot noem dit, met sy bron, en sê dat ’n hoeveelheidopmeter dit nie nagegaan het nie); die metode kan nie in TakeoffCraft verander word nie. Baksteen of blokke en mortel uit ’n muurtipe kom as twee komponente: die eenhede om te bestel en die mortelvolume. |
| {{ui:Diepte}} (oppervlakte) | ’n Diepte of dikte, gebruik in samestellingsformules (byvoorbeeld betonvolume). |
| {{ui:Afval %}} | Word by die hoeveelheid getel voor prysberekening: 10 beteken hoeveelheid × 1.10. |
| {{ui:Materiaal $/LF}} | Materiaalkoste per eenheid. Die etiket volg die eenheid: $/SF, $/EA en so aan. |
| {{ui:Arbeid $/LF}} | Arbeidskoste per eenheid. |
| {{ui:CSI-nommer}} | Sy CSI MasterFormat-nommer, soos `09 21 16` (of net die afdeling, `09`). Die werkboek se By division-werkblad groepeer koste daarvolgens. Items uit [handelspakkette](topic:trade-packs) het er reeds een. |

Hoogte en diepte neem voet en duim (`9'-0"`, `8' 6"`) of desimale voet (`9`) vir imperiale eenhede, en meter (`2.7`, `2700 mm`) vir metriese eenhede. Tariewe neem bedrae soos `12.50` of `$1,250`, tot vier desimale. Sien [Lengte-, tarief- en persentasie-invoer](topic:entry-formats).

Onder die velde wys **Gemeet** die totale wat die item se formules kan gebruik, met hul letters: Lengte (L), Lopies (N), Muurarea (A) vir lineêr; Oppervlakte (A), Omtrek (P), Oppervlaktes (N) vir oppervlakte; Telling (N) vir tel.

## Een item, verskeie soorte merke

Sommige dinge word op meer as een manier gemeet: ’n vertrek het ’n vloer (’n oppervlakte), ’n plint langs sy mure (’n lengte) en deure (’n telling). In plaas van drie items, maak een:

1. Maak die item met sy hoofsoort, soos ’n oppervlakte-item `Vertrek 101`.
2. Onder {{ui:Meet ook}} in sy redigeerder, merk {{ui:Lineêr}}, {{ui:Tel}} of albei. Elkeen kry ’n eenheid langs hom.
3. Teken met enige nutsding waarvan die soort die item neem: met `Vertrek 101` huidig, teken {{ui:Oppervlakte}} sy vloer, {{ui:Lineêr}} sy plint en {{ui:Tel}} sy deure. TakeoffCraft vra nie vir ’n ander item nie.

Die itemlys wys elke hoeveelheid (`50.00 SF + 2 EA`). In die hoeveelhedetabel het die item se ry sy hoofhoeveelheid, en elke ander soort kry sy eie ry onder dit, soos **Vertrek 101 (tel)**, met sy eie afval en materiaal- en arbeidstariewe. Die uitvoere, die tabel per blad en die legende van die gemerkte PDF lys hulle op dieselfde manier.

Die hoofsoort se velde bly sy eie: die hoogte of diepte, die dakhelling, die terugtrekkings en die 3D-vorm geld slegs vir sy merke. ’n Plintlopie wat vir ’n oppervlakte-item geteken is, word gewoon langs die plan gemeet en wys plat in 3D. Samestellingsformules gebruik die hoofsoort se totale.

’n Soort kan slegs ontmerk word solank die item geen merke daarvan het nie; skrap hulle, of skuif hulle eers na ’n ander item onder **Gekose merk**. Merke kan na enige item skuif wat hul soort neem.

Verder af is die {{ui:Samestelling}}: komponente soos stutte of plank, elk met sy eie formule en tariewe. Sien [Samestellings en formules](topic:assemblies).

Onderaan: {{ui:Skuif op}} en {{ui:Skuif af}} verander die item se plek in die lys en in die uitvoere, en {{ui:Skrap item}} verwyder dit met al sy merke (nadat dit vra; jy kan dit ontdoen).

Oppervlakte-items het ook **Dakhelling** (dakvlakke wat op die helling gemeet word: [Dakke en hellings](topic:roofs-and-slopes)) en **Aftrekking** (hul merke word van ander items se oppervlaktes afgetrek: [Meet oppervlaktes](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Lineêr-items het **Helling** (Gelyk, Ortgang, Walm of vallei) en, vir ortgange en walms, **Dakhelling**.

## Tariewe in die tabel

Jy kan ook {{ui:Afval %}}, materiaal- en arbeidstariewe direk in die {{ui:Hoeveelhede}}-tabel onderaan tik ({{ui:Per item}}). Dit is dieselfde instelling as in die redigeerder.

## Hoe prysberekening werk

Vir elke item en elke samestellingskomponent:

1. **Met afval** = hoeveelheid × (1 + afval %).
2. **Materiaal** = met afval × materiaal per eenheid, afgerond tot die sent.
3. **Arbeid** = met afval × arbeid per eenheid, afgerond tot die sent.
4. **Totaal** = materiaal + arbeid.

Die {{ui:Projektotaal}} tel elke item en elke komponent op. ’n Item kan sy eie tariewe en ’n samestelling tegelyk dra; albei word getel, so laat die item se tariewe op 0 wanneer sy komponente die koste dra.

## Arbeid per span

In plaas van ’n arbeidstarief per eenheid, kan ’n item se arbeid van ’n span kom: hoeveel dit per uur lewer, hoeveel mense, en wat elkeen verdien. Onder {{ui:Arbeid per span}} in die itemredigeerder, merk {{ui:Prys arbeid vanaf ’n span}} en vul in:

| Veld | Voorbeeld |
|---|---|
| {{ui:Produksie}} | `20` LF per uur (in die item se eenheid) vir die hele span |
| {{ui:Spangrootte}} | `2` mense |
| {{ui:Loon $/uur elk}} | `45` |

TakeoffCraft bereken, uit die hoeveelheid met afval:

- **span-ure** = hoeveelheid ÷ produksie (110 LF ÷ 20 = 5.5),
- **werker-ure** = span-ure × spangrootte (11),
- **span-dae** = span-ure ÷ 8 (0.69),
- **arbeid** = werker-ure × loon ($495.00).

Die redigeerder wys die resultaat en die tarief wat dit kom ($4.50/LF). Die item se eie arbeidstarief is dan slegs-lees, in die redigeerder en in die tabel. Die kop van die {{ui:Hoeveelhede}}-tabel voeg die projek se werker-ure en span-dae by. Die uitvoere noem elke span se ure, en in die werkboek is die arbeidsel ’n formule op die span (`ROUND(F2/20*2*45,2)`). Ontmerk die blokkie om terug te gaan na ’n tarief per eenheid.

## Metriese items

Kies m (lineêr) of m² (oppervlakte) as eenheid. Hoeveelhede, hoogtes en formulewaardes is dan in meter. Die blad se skaal kan enige voorinstelling of kalibrasie wees; eenhede en skale is onafhanklik.

## Volgende

- [Meet lineêre lopies](topic:measure-linear)
- [Meet oppervlaktes met uitsnydings](topic:measure-areas)
- [Tel met die hand](topic:count-by-hand)
