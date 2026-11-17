---
title: Atlasiet PDF līnijas
summary: Noklikšķiniet uz vektora PDF līnijas, lai izmērītu visu tai pievienoto ceļu, vai uz slēgtas kontūras iekšpuses, lai iegūtu tās laukumu; rādīta savienojuma tolerance un viens atsauces solis katram segmentam.
keywords: ceļš, atlasīt, līnijas, savienots, viss posms, izsekot, kontūra, perimetrs, sprauga, tolerance, tilts, segmenti, tabulēt, vektors, laukums no līnijām, p
from: c22526ae
---

Vektora PDF sienas un malas ir īstas līnijas. {{ui:Ceļš}} ({{key:P}}) ņem tās tādas, kādas tās ir uzzīmētas: viens klikšķis uz līnijas izmēra visu, kas tai pievienots, no gala līdz galam, tāpēc sienu nav jāizseko, klikšķinot uz tās stūriem. Lapai vajadzīgs mērogs. Skenētā lapā līniju, ko atlasīt, nav; tur izmantojiet [Lineāri](topic:measure-linear) vai [Laukums](topic:measure-areas).

## Ceļa vai kontūras atlase

1. Izvēlieties {{ui:Ceļš}}. Līnija zem rādītāja tiek iezīmēta, un citi ceļi, ko tā varētu būt, tiek parādīti plāni.
2. Noklikšķiniet uz līnijas: tiek atlasīts viss savienotais ceļš. Josla zem rīkjoslas norāda tā segmentus, garumu, savienojuma toleranci un to, cik spraugu tika pārklātas. Ceļš, kas atgriežas savā sākumā, ir slēgts un rāda arī savu perimetru.
3. Vai noklikšķiniet slēgtas kontūras iekšpusē, tālu no jebkuras līnijas: kontūra ap šo punktu tiek atlasīta kā laukums. Vispirms tiek atlasīta mazākā; {{key:Tab}} izvēlas nākamo lielāko.
4. Nospiediet {{key:Enter}} (vai noklikšķiniet ar peles labo pogu, vai veiciet dubultklikšķi), lai pievienotu atzīmes. Atlasītais ceļš kļūst par **lineāra** vienuma atzīmi, kontūra — par **laukuma** vienuma atzīmi: aktīvais vienums, ja tam ir šis veids, citādi jaunākais šāda veida vienums. Ja neviena nav, atveras jaunā vienuma forma, un nekas netiek pievienots, kamēr vēlreiz nenospiežat {{key:Enter}}. Viss atlasītais tiek pievienots vienā atsaukšanas solī.

## Savienojuma tolerance

Zīmētāji atstāj nelielus caurumus, kur līnijām vajadzētu saskarties. Divas līnijas savienojas, ja to gali atrodas tuvāk par **savienojuma toleranci**. Tā sākas ar 1,5 punktiem lapā (rādīta pēdās un collās lapas mērogā), un punktētais aplis šādā platumā seko rādītājam un atrodas uz katra zem tā esošā ceļa gala. Katrs pārklātais caurums uz atlasīta ceļa ir apvilkts oranžā krāsā, un josla tos saskaita.

{{key:]}} padara toleranci platāku, {{key:[}} šaurāku. Atlasītais ceļš uzreiz tiek savienots no jauna ar jauno toleranci. Savienojumā ceļš turpinās taisni, pa to virzienu, kur tas vismazāk līkumo, un atzarojums paliek ārpusē.

## Taustiņi

| Taustiņš vai darbība | Ko tas dara |
|---|---|
| Klikšķis | Atlasa ceļu zem rādītāja vai kontūru ap to. |
| {{key:Shift}} + klikšķis | Pievieno vēl vienu ceļu vai kontūru atlasītajam. |
| {{key:Tab}} | Izvēlas nākamo ceļu zem rādītāja vai nākamo lielāko kontūru. |
| {{key:Backspace}} vai {{key:Mod+Z}} | Noņem pēdējo segmentu no pēdējā atlasītā ceļa, pa vienam segmentam. Ceļš bez atlikušajiem segmentiem tiek noņemts. Ja nekas nav atlasīts, {{key:Mod+Z}} ir parastais atsaukums. |
| {{key:[}} un {{key:]}} | Šaurāka un platāka savienojuma tolerance. |
| {{key:Enter}} | Pievieno atzīmes. |
| {{key:Esc}} | Notīra atlasīto. |

## Noderīga informācija

- Rasējuma līkne ir īsu taisnu gabalu ķēde, tāpēc tās garums ir nedaudz mazāks par patieso loka garumu. Precīzam lokam mēriet paša rasējuma failu ([Mērīt no rasējuma](topic:measure-from-a-drawing)).
- Pārklāta sprauga tiek skaitīta kā taisns lēciens pāri tai, tāpēc slēgtas kontūras perimetrs to ietver.
- Par līnijām tiek uzskatītas tikai lapas paša ceļu līnijas un aizpildījumi. Teksts, kas zīmēts kā burti, un attēli nav līnijas.
