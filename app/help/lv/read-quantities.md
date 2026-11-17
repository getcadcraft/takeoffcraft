---
title: Daudzumu un tāmes lasīšana
summary: Izmantojiet daudzumu tabulu pēc vienuma un pēc lapas, objekta kopsummu, izcelšanu un brīdinājumu Nepilnīgs.
keywords: daudzumi, summas, pēc vienuma, pēc lapas, objekta kopsumma, tāme, kopsavilkums, atskaite, izcelšana, nepilnīgs, izmaksas
from: 069d41f1
---

{{ui:Daudzumi}} tabula loga apakšā ir jūsu tiešsaistes tāme. Tā mainās tieši tad, kad zīmējat, dzēšat, maināt mērogu vai rediģējat likmi. Daudzumi nekad netiek saglabāti; tie tiek mērīti no atzīmēm katru reizi no jauna, tāpēc tie nevar kļūt novecojuši.

## Pēc vienuma

Izvēlieties {{ui:Pēc vienuma}} (noklusējums). Katram vienumam ir rinda, un katram tā mezgla komponentam ir rinda zem tā.

| Kolonna | Nozīme |
|---|---|
| Vienums | Nosaukums ar vienuma krāsu. "+(n) bez mēroga" nozīmē, ka dažas atzīmes atrodas lapās bez mēroga. |
| Daudzums | Izmērītā kopsumma vienuma mērvienībā (komponentiem: formulas rezultāts). |
| Mērvienība | LF, m, SF, SY, m², EA vai komponenta mērvienība. |
| Zudumi % | Ievadīts šeit vai vienuma redaktorā. |
| Ar zudumiem | Daudzums × (1 + zudumi). |
| Materiāls/vienība, Darbs/vienība | Likmes; tās varat ievadīt šeit. |
| Materiāls, Darbs | Ar zudumiem × likme, noapaļots līdz centam. |
| Kopā | Materiāls + darbs. |

Pēdējā rinda, **Objekta kopā**, saskaita kolonnas materiāls, darbs un kopā. Tā pati kopsumma redzama tabulas galvenes labajā pusē.

Ierakstiet zudumu vai likmes šūnā un nospiediet {{key:Enter}} vai noklikšķiniet citur, lai to piemērotu. Vērtība, ko TakeoffCraft nevar nolasīt, tiek iezīmēta sarkanā kontūrā, un statusa joslā norādīts iemesls, piemēram, "Ievadiet summu, piemēram, 12.50."

Noklikšķiniet uz vienuma rindas, lai izceltu tā atzīmes visās lapās un pārietu uz lapu, kurā tās ir (tas pats, kas noklikšķinot zem {{ui:Vienumi}}).

## Pēc lapas

Izvēlieties {{ui:Pēc lapas}}, lai redzētu katra vienuma daudzumu katrā lapā ar atzīmju skaitu. Noklikšķiniet uz rindas, lai atvērtu šo lapu ar izceltu vienumu. Izmantojiet to, lai pārbaudītu, vai katra lapa ir izmērīta, vai lai sadalītu daudzumus pa stāviem vai darbu zonām.

## Pēc zonas

Ja apjomu aprēķinā ir piedāvājuma zonas, {{ui:Pēc zonas}} parāda katras zonas vienumus un starpsummu. Skatiet [Piedāvājuma zonas](topic:bid-areas).

## Brīdinājums Nepilnīgs

Ja kaut kas ir izlaists no kopsummām, galvenē parādās brīdinājums, piemēram:

"Nepilnīgs: 1 formulas kļūda, 6 atzīmes lapās bez mēroga (nav iekļautas kopsummās)"

- **Formulas kļūdas**: komponenta formulu nevar aprēķināt. Tās rindā ir teksts "Formulas kļūda: …". Skatiet [Mezgli un formulas](topic:assemblies#when-a-formula-is-wrong).
- **Atzīmes lapās bez mēroga**: iestatiet šīm lapām mērogu. Skatiet [Iestatīt mērogu](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Tie paši paskaidrojumi tiek ierakstīti arī eksportētajā izklājlapā, tāpēc nepilnīga tāme nekad neizskatīsies pilnīga.

## Izcelt vienumu

Noklikšķiniet uz vienuma zem {{ui:Vienumi}} vai tabulā. Tā atzīmes visās lapās paliek pilnā intensitātē, bet pārējās kļūst bālas. Lapu sarakstā katrai lapai ar atzīmēm rādās "(n) izcelts". Lai pārtrauktu izcelšanu, vēlreiz noklikšķiniet uz vienuma.

## Vienumu kopsummas sānu panelī

Katram vienumam sarakstā {{ui:Vienumi}} ir rādīts arī tā daudzums. Vienuma redaktora bloks **Izmērīts** rāda vērtības, ko izmanto tā formulas: garumu, posmus un sienu laukumu; laukumu, perimetru un laukumu skaitu; vai skaitu.

## Atzīmes PDF, kas nav atvērti

Apjomu aprēķinā var būt atzīmes arī PDF, ko šoreiz neesat atvēruši. Tās joprojām tiek skaitītas visās kopsummās; lapu sarakstā ir norādīti šie PDF. Skatiet [Apjomu aprēķina saglabāšana un atkārtota atvēršana](topic:save-and-reopen).

## Vairāk vietas

Poga ar bultiņu galvenes {{ui:Daudzumi}} labajā pusē paslēpj tabulu, lai lapai būtu vairāk vietas. Nospiediet to vēlreiz, lai tabula atgrieztos.
