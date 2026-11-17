---
title: TakeoffCraft iestatījumi
summary: Rādīt collas līdz 1/16, 1/8 vai 1/4, sākt jaunus vienumus ar zudumu procentu, izvēlēties, kur sākas slīdnis Automātiski skaitīt, piesaistīt zīmējuma līnijām vai 45° bez Shift taustiņa, iestatīt, cik platas durvis aizver Telpas aizpildīšana, un izvēlēties 3D skata stūra indikatoru.
keywords: iestatījumi, preferences, opcijas, precizitāte, daļas, collas, noapaļošana, zudumi, noklusējuma zudumi, automātiski skaitīt, slieksnis, atbilstība, slīdnis, piesaiste, 45, leņķis, shift, skata kubs, ass ikona, stūra indikators, 3d
from: bca3f0ed
---

Atveriet {{ui:Iestatījumi}} ar zobrata ikonu lietotnes joslā vai ar {{key:Mod+,}}. Pirmā cilne, {{ui:TakeoffCraft}}, satur šīs lietotnes iestatījumus; {{ui:Vispārīgi}} satur tos, ko dala visas CadCraft lietotnes (motīvs, paneļi, rīkjosla). TakeoffCraft iestatījumi pastāv tikai lietotnē: mainiet tos šeit, un šī pārlūkprogramma tos atceras. {{ui:Atiestatīt TakeoffCraft iestatījumus}} atjauno tos sākotnējā stāvoklī.

## Pēdas un collas

Rādīt garumus līdz tuvākajai **1/16"** (sākotnējais), **1/8"** vai **1/4"**. Tas maina to, kā garumi tiek lasīti lapā, paneļos, daudzumos un statusa joslā.

Noapaļota ir tikai attēlošana. Daudzumi, izmaksas un eksporti tiek aprēķināti no precīziem garumiem, un eksporti vienmēr rāda 1/16".

## Sākuma zudumi

Zudumu procents, ar ko sākas katrs jauns vienums: 0% (sākotnējais), 2%, 3%, 5%, 7.5%, 10%, 15% vai 20%. Katram vienumam joprojām varat ievadīt citu zudumu vienuma redaktorā vai tieši daudzumu tabulā. Esošie vienumi saglabā savus zudumus.

## Automātiski skaitīt: no kura punkta sākas atbilstības slīdnis

Kur {{ui:Atbilstība}} slīdnis atrodas, kad [Automātiskās skaitīšanas](topic:auto-count) meklēšana beidzas, no 50% līdz 95%; sākotnēji 75%. Zemāks piedāvā vairāk līdzīgu, ko jūs noraidīsiet; augstāks piedāvā mazāk. Katras pārskatīšanas laikā slīdni joprojām varat pārvietot.

## Piesaistīt zīmējuma pašām līnijām

Sākotnēji ieslēgts. Kamēr mērāt vai kalibrējat, punkts netālu no PDF līnijas pārlec uz tās galu, vidu, krustpunktu vai tuvāko punktu uz tās. {{key:F3}} un {{ui:Piesaiste}} statusa joslā to arī ieslēdz un izslēdz. Vairāk: [Piesaiste zīmējuma līnijām](topic:snap-to-the-drawing).

## Aizpildīšana: cik platu atveri tā aizver

{{ui:Telpas aizpildīšana aizver atveres līdz}} nosaka, cik platu durvju atveri vai spraugu rīks {{ui:Telpa}} uzskata par aizvērtu: no 3'-0" līdz 8'-0", sākotnēji 4'-0". Ja platāks nekā jūsu platākās durvis, telpa iziet cauri nākamajai; šaurāks nekā durvis, telpa paliek atvērta. Skatiet [Aizpildīt telpu ar vienu klikšķi](topic:measure-areas#fill-a-room-with-one-click).

## Piesaiste 45° bez Shift taustiņa

Sākotnēji izslēgts. Ja tas ir ieslēgts, līnijas, kontūras, izgriezumi un vilktie stūri iet 0°, 45°, 90° vai 135° leņķī no pēdējā punkta bez {{key:Shift}} turēšanas; turiet {{key:Shift}}, lai noklikšķinātu jebkurā leņķī. Statusa joslā tad rakstīts "Piesaista 45°; Shift atbrīvo leņķi". Punkts, uz kuru noklikšķināt uz loka līknes, un riņķi nekad netiek piesaistīti; loka gals tiek.

## Skaitīšanas atzīmes izmērs

Cik lieli ir skaitīšanas punkti: {{ui:Ļoti mazs}}, {{ui:Mazs}}, {{ui:Vidējs}} (sākotnējais: tāds izmērs, kāds punktiem vienmēr bija) vai {{ui:Liels}}. Izmērs saglabājas ekrānā katrā tālummaiņas līmenī, un atzīmētais PDF zīmē katru punktu tādā pašā izmērā uz papīra neatkarīgi no lapas izmēra, tāpēc PDF 100% izskatās tāpat kā ekrānā. Vairāk: [Skaitīt ar roku](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Stūra indikators

Tikai [3D pārbaudes skatam](topic:check-in-3d): {{ui:Skata kubs}} (sākotnējais: kubs augšējā labajā stūrī, ko var noklikšķināt, vilkt un pagriezt), {{ui:Ass ikona}} (neliels X, Y, Z marķieris apakšējā labajā stūrī) vai {{ui:Nav}}. Tas mainās uzreiz un tiek saglabāts šajā pārlūkprogrammā. Plakanā lapa nekad neparāda nevienu.

## Ceļa rīks: lielākais atstarpe, ko savienot

{{ui:Ceļa rīks: lielākais savienojamais attālums}} ir tas, cik tālu divi līniju gali var atrasties viens no otra un joprojām būt viens ceļš, PDF punktos (0.05 līdz 60; sākotnēji 1.5). Zīmējuma līnijas bieži apstājas mazliet īsāk viena no otras. Lielāks savieno vairāk; mazāks tur līnijas atsevišķi. {{key:[}} un {{key:]}} to maina, kamēr izvēlaties, un šis lauks seko līdzi. Skatiet [Izvēlēties līnijas](topic:pick-the-lines).
