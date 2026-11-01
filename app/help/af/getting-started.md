---
title: Aan die gang met TakeoffCraft
summary: Wat TakeoffCraft doen, waar dit loop, en jou eerste gemete en geprysde item uit 'n PDF-planstel.
keywords: begin, eerste hoeveelheidsopname, vinnige begin, inleiding, beraming, hoeveelheidsopname, planstel, pdf
from: 3b9da1fb
---

TakeoffCraft meet planstelle, PDF's en DWG- of DXF-tekeninge, en verander die metings in 'n geprysde beraming. Jy maak die lêers oop, gee elke blad 'n skaal ('n tekening bring sy eie), maak **items** ('n muurtipe, 'n vloerafwerking, 'n toebehoor), en klik op die blaaie om hulle af te haal. Hoeveelhede, koste en die projektotaal word opgedateer soos jy werk. Jy kan die beraming as 'n sigblad uitvoer, en 'n afskrif van die PDF's met jou hoeveelheidsopname daarin getekend.

As jy al hoeveelheidsopnames in ander programme gedoen het, lees [Vanaf ander hoeveelheidsopname-sagteware](topic:coming-from) hierna. Sommige dinge werk hier anders.

## Waar dit loop

TakeoffCraft loop in jou webblaaier. Maak TakeoffCraft oop en die skerm is dadelik gereed; daar is niks om te installeer nie.

- **Jou PDF's bly op jou rekenaar.** Die blaaier maak hulle oop en hulle word nooit opgelaai nie. Stoor is 'n aflaai.
- Dit werk in huidige Chrome, Edge, Firefox en Safari. Sien [Blaaiers en rekenaars](common:browsers).
- Dit werk sonder internetverbinding sodra jy {{ui:Stoor vir vanlyn}} in die programbalk kies en dit {{ui:Vanlyn gereed}} sê. Sien [Werk vanlyn](common:offline).
- Wolkstoor is nog nie beskikbaar nie. Vir 'n rekenaarprogram kom TakeoffCraft in CadCraft Studio, saam met die ander sewe programme.

## Jou eerste hoeveelheidsopname in tien stappe

Hierdie stap-vir-stap-gids meet een muurtipe en pryse dit. Dit neem 'n paar minute op enige plan wat jy het.

1. Kies {{ui:Maak planne oop}} in die {{ui:Lêer}}-groep van die nutsbalk (of druk {{key:Mod+O}}), kies een of meer PDF's, en kies Maak oop. Jy kan die PDF's ook enige plek op die bladsy laat val.
   Die blaaie verskyn aan die linkerkant en die eerste blad maak oop in die middel.
2. Vind die blad se gedrukte skaal in sy titelblok of onder 'n tekeningtitel.
3. Maak die {{ui:Voorinstelling}}-lys in die {{ui:Skaal}}-groep oop en kies daardie skaal, byvoorbeeld `1/4" = 1'-0"`.
   Die balk onderaan die blad sê nou "Skaal 1/4" = 1'-0"".
4. Kies {{ui:Kontroleer}} (of druk {{key:D}}) en klik op die twee punte van 'n maat wat op die tekening gedruk is.
   Die lesing in die statusbalk onderaan links moet by die gedrukte maat pas. As dit nie doen nie, sien [Stel die skaal](topic:set-the-scale).
5. In die {{ui:Items}}-paneel regs, kies {{ui:Nuwe item}}, tik 'n naam soos `Binnemuur-tipe A`, laat die tipe op {{ui:Lineêr (lengte)}}, en kies {{ui:Voeg by}}.
6. Kies {{ui:Lineêr}} in die nutsbalk (of druk {{key:L}}).
7. Klik op die begin van 'n muur, dan op elke hoek daarlangs. Dubbelklik, druk {{key:Enter}} of regsklik om die lopie af te handel.
   Die lopie word in die item se kleur geteken, en sy lengte verskyn langs die item.
8. In die item-redigeerder onder {{ui:Items}}, tik `9'-0"` in {{ui:Hoogte}}, `0.85` in {{ui:Materiaal $/LF}} en `1.20` in {{ui:Arbeid $/LF}}.
   Die {{ui:Hoeveelhede}}-tabel onderaan wys die lengte, die uitgebreide materiaal en arbeid, en die {{ui:Projektotaal}}.
9. Kies {{ui:Stoor hoeveelheidsopname}} (of druk {{key:Mod+S}}).
   Jou blaaier laai 'n `.takeoff.json`-lêer af. Dit hou jou items, skale en merke, en maak weer oop op dieselfde PDF's.
10. Maak die {{ui:Uitvoer}}-kieslys in die nutsbalk oop en kies {{ui:XLSX}} om die beraming as 'n sigblad af te laai.

:::tip
Druk {{key:Esc}} om te stop met wat jy doen en terug te gaan na die {{ui:Kies}}-gereedskap. {{key:Mod+Z}} ontdoen enige verandering.
:::

## Wat om volgende te lees

- [Die TakeoffCraft-skerm](topic:workspace) noem elke deel van die venster.
- [Begin 'n hoeveelheidsopname en maak 'n planstel oop](topic:open-plan-set) dek verskeie PDF's en die bladlys.
- [Skep hoeveelheidsopname-items](topic:create-items) verduidelik tipes, eenhede, afval en tariewe.
- [Samestellings en formules](topic:assemblies) verander een meting in stutte, plaatbord en meer.
- [Sleutelbord en muis](topic:keyboard) lys elke sleutel.
