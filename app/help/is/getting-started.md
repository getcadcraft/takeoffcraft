---
title: Byrjun með TakeoffCraft
summary: Hvað TakeoffCraft gerir, hvar það keyrir og fyrsti liðurinn þinn, mældur og verðlagður, úr PDF-teikningasetti.
keywords: byrjun, fyrsta magntaka, fljótleg byrjun, kynning, kostnaðaráætlun, magnmæling, teikningasett, pdf
from: 3b9da1fb
---

TakeoffCraft mælir teikningasett, PDF-skjöl og DWG- eða DXF-teikningar og breytir mælingunum í verðlagða kostnaðaráætlun. Þú opnar skrárnar (teikning telst beint út frá blokkum hennar: sjá [Opna DWG- eða DXF-teikningu](topic:open-a-drawing)), gefur hverju blaði mælikvarða (teikning kemur með sínum eigin), býrð til **liði** (gerð veggjar, gólfefni, búnað) og smellir á blöðin til að mæla þá. Magntölur, kostnaður og heildarverð verks uppfærast jafnóðum. Þú getur flutt kostnaðaráætlunina út sem töflureikni og afrit af PDF-skjölunum með magntökunni teiknaðri inn á.

Ef þú hefur gert magntöku í öðrum forritum skaltu lesa næst [Frá öðrum magntökuforritum](topic:coming-from). Sumt virkar öðruvísi hér.

## Hvar það keyrir

TakeoffCraft keyrir í vafranum þínum. Opnaðu TakeoffCraft og skjárinn er tilbúinn strax; það þarf ekkert að setja upp.

- **PDF-skjölin þín haldast í tölvunni þinni.** Vafrinn opnar þau og þau eru aldrei hlaðin upp. Vistun er sótt skrá.
- Það virkar í nýjustu útgáfum Chrome, Edge, Firefox og Safari. Sjá [Vafrar og tölvur](common:browsers).
- Það virkar án nettengingar þegar þú hefur valið {{ui:Vista til notkunar án nettengingar}} á forritastikunni og stendur {{ui:Tilbúið án nettengingar}}. Sjá [Vinna án nettengingar](common:offline).
- Skýjavistun er ekki í boði ennþá. Fyrir skjáborðsforrit fylgir TakeoffCraft með CadCraft Studio, ásamt hinum sjö forritunum.

## Fyrsta magntakan þín í tíu skrefum

Þessi yfirferð mælir eina gerð veggja og verðleggur hana. Það tekur nokkrar mínútur á hvaða teikningu sem þú hefur.

1. Veldu {{ui:Opna teikningar}} í hópnum {{ui:Skrá}} á tækjastikunni (eða ýttu á {{key:Mod+O}}), veldu eitt eða fleiri PDF-skjöl og veldu Opna. Þú getur líka dregið PDF-skjölin hvert sem er á síðuna.
   Blöðin birtast vinstra megin og fyrsta blaðið opnast í miðjunni.
2. Finndu prentaðan mælikvarða blaðsins í titilreitnum eða undir heiti teikningarinnar.
3. Opnaðu listann {{ui:Forstilling}} í hópnum {{ui:Mælikvarði}} og veldu þann mælikvarða, til dæmis `1/4" = 1'-0"`.
   Stikan neðst á blaðinu segir nú „Mælikvarði 1/4" = 1'-0"“.
4. Veldu {{ui:Athuga}} (eða ýttu á {{key:D}}) og smelltu á báða enda málsetningar sem er prentuð á teikninguna.
   Aflestur á stöðustikunni neðst til vinstri ætti að passa við prentuðu málsetninguna. Ef það gerir það ekki, sjáðu [Stilla mælikvarðann](topic:set-the-scale).
5. Í {{ui:Liðir}}-spjaldinu hægra megin skaltu velja {{ui:Nýr liður}}, skrifa nafn eins og `Innveggur, gerð A`, hafa gerðina á {{ui:Línulegt (lengd)}} og velja {{ui:Bæta við}}.
6. Veldu {{ui:Línuleg}} á tækjastikunni (eða ýttu á {{key:L}}).
7. Smelltu á upphaf veggjar, síðan á hvert horn meðfram honum. Tvísmelltu, ýttu á {{key:Enter}} eða hægrismelltu til að ljúka kaflanum.
   Kaflinn er teiknaður í lit liðarins og lengd hans birtist við hliðina á liðnum.
8. Í liðaritlinum undir {{ui:Liðir}} skaltu skrifa `9'-0"` í {{ui:Hæð}}, `0.85` í {{ui:Efni $/LF}} og `1.20` í {{ui:Vinna $/LF}}.
   Töflan {{ui:Magntölur}} neðst sýnir lengdina, efni og vinnu margfaldað út og {{ui:Heildarverð verks}}.
9. Veldu {{ui:Vista magntöku}} (eða ýttu á {{key:Mod+S}}).
   Vafrinn sækir `.takeoff.json`-skrá. Hún geymir liðina þína, mælikvarða og merki og opnast aftur með sömu PDF-skjölunum.
10. Opnaðu valmyndina {{ui:Flytja út}} á tækjastikunni og veldu {{ui:XLSX}} til að sækja kostnaðaráætlunina sem töflureikni.

:::tip
Ýttu á {{key:Esc}} til að hætta því sem þú ert að gera og fara aftur í {{ui:Velja}} verkfærið. {{key:Mod+Z}} afturkallar hverja breytingu.
:::

## Það sem þú lest næst

- [Skjár TakeoffCraft](topic:workspace) nefnir alla hluta gluggans.
- [Byrjaðu magntöku og opnaðu teikningasett](topic:open-plan-set) fjallar um nokkur PDF-skjöl og blaðalistann.
- [Búðu til liði í magntöku](topic:create-items) útskýrir gerðir, einingar, affall og einingarverð.
- [Samsetningar og formúlur](topic:assemblies) breytir einni mælingu í stoðir, plötur og fleira.
- [Lyklaborð og mús](topic:keyboard) listar alla lykla.
