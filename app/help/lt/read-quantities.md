---
title: Kiekių ir sąmatos skaitymas
summary: Naudokite kiekių lentelę pagal poziciją ir pagal lapą, bendrą sumą, paryškinimą ir įspėjimą apie neužbaigtumą.
keywords: kiekiai, pagal poziciją, pagal lapą, bendra suma, sąmata, santrauka, ataskaita, paryškinimas, neužbaigta, kaštai
from: 069d41f1
---

Lentelė {{ui:Quantities}} apatinėje lango dalyje yra jūsų gyvoji sąmata. Ji pasikeičia tą pačią akimirką, kai nubrėžiate, ištrinate, keičiate mastelį ar redaguojate įkainį. Kiekiai niekada neįrašomi; jie kiekvieną kartą išmatuojami iš naujo pagal žymes, todėl negali pasenti.

## Pagal poziciją

Pasirinkite {{ui:By item}} (numatytasis). Kiekviena pozicija turi eilutę, o kiekvienas jos surinkimo komponentas – eilutę po ja.

| Stulpelis | Reikšmė |
|---|---|
| Pozicija | Pavadinimas su pozicijos spalva. „+(n) be mastelio“ reiškia, kad dalis žymių yra lapuose be mastelio. |
| Kiekis | Išmatuota bendra suma pozicijos vienetu (komponentams – formulės rezultatas). |
| Vienetas | LF, m, SF, SY, m², EA arba komponento vienetas. |
| Atliekos % | Įvedama čia arba pozicijos redaktoriuje. |
| Su atliekomis | Kiekis × (1 + atliekos). |
| Medžiaga / vienetas, Darbas / vienetas | Įkainiai; juos galite įvesti čia. |
| Medžiaga, Darbas | Su atliekomis × įkainis, suapvalinta iki cento. |
| Iš viso | Medžiaga + darbas. |

Paskutinėje eilutėje **Bendra suma** sudedami medžiagos, darbo ir iš viso stulpeliai. Ta pati suma rodoma dešinėje lentelės antraštės pusėje.

Įveskite į atliekų ar įkainio langelį ir paspauskite {{key:Enter}} arba spustelėkite šalia, kad pritaikytumėte. Reikšmė, kurios TakeoffCraft nepavyksta perskaityti, apibrėžiama raudonai, o būsenos juostoje paaiškinama priežastis, pavyzdžiui: „Įveskite sumą, pavyzdžiui, 12.50.“

Spustelėkite pozicijos eilutę, kad paryškintumėte jos žymes visuose lapuose ir pereitumėte į lapą, kuriame jų yra (tas pats, kas spustelėjus ją po {{ui:Items}}).

## Pagal lapą

Pasirinkite {{ui:By sheet}}, kad matytumėte kiekvienos pozicijos kiekį kiekviename lape su žymių skaičiumi. Spustelėkite eilutę, kad atidarytumėte lapą su paryškinta pozicija. Naudokite tai, kad patikrintumėte, ar kiekvienas lapas buvo suskaičiuotas, arba paskirstytumėte kiekius pagal aukštą ar darbų sritį.

## Pagal sritį

Kai kiekių skaičiavime yra pasiūlymo sritys, {{ui:By area}} išvardija kiekvienos srities pozicijas ir tarpinę sumą. Žr. [Pasiūlymų sritys](topic:bid-areas).

## Įspėjimas apie neužbaigtumą

Kai kas nors neįskaičiuojama į sumas, antraštėje rodomas įspėjimas, pavyzdžiui:

"Neužbaigta: 1 formulės klaida, 6 žymės lapuose be mastelio (neįskaičiuota į sumas)"

- **Formulių klaidos**: surinkimo komponento formulės negalima apskaičiuoti. Jo eilutėje rašoma „Formulės klaida: …“. Žr. [Surinkimai ir formulės](topic:assemblies#when-a-formula-is-wrong).
- **Žymės lapuose be mastelio**: nustatykite tiems lapams mastelį. Žr. [Nustatyti mastelį](topic:set-the-scale#why-unscaled-sheets-are-not-counted-as-zero).

Tos pačios pastabos įtraukiamos ir į eksportuotą skaičiuoklę, todėl neužbaigta sąmata niekada neatrodys užbaigta.

## Paryškinti poziciją

Spustelėkite pozicijos eilutę po {{ui:Items}} arba lentelėje. Jos žymės visuose lapuose lieka pilno ryškumo, o likusios išblunka. Lapų sąraše prie kiekvieno lapo su jos žymėmis rodoma „(n) paryškinta“. Dar kartą spustelėkite poziciją, kad nustotumėte ją paryškinę.

## Pozicijų sumos šoniniame skydelyje

Kiekviena {{ui:Items}} sąrašo pozicija rodo ir savo kiekį. Pozicijos redaktoriaus blokas **Išmatuota** rodo reikšmes, kurias naudoja jos formulės: ilgį, ruožus ir sienos plotą; plotą, perimetrą ir plotų skaičių; arba kiekį.

## Žymės PDF failuose, kurie neatidaryti

Kiekių skaičiavime gali būti žymių PDF failuose, kurių šį kartą neatidarėte. Jos vis tiek įskaičiuojamos į visas sumas; lapų sąraše nurodomi tie PDF failai. Žr. [Įrašyti ir vėl atidaryti kiekių skaičiavimą](topic:save-and-reopen).

## Daugiau vietos

Rodyklės mygtukas dešinėje {{ui:Quantities}} antraštės pusėje paslepia lentelę, kad lapui atsirastų daugiau vietos. Spustelėkite jį dar kartą, kad lentelė vėl būtų rodoma.
