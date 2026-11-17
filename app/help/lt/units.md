---
title: Vienetai
summary: Vienetai, kuriais pozicija gali pateikti rezultatus, vienetai, kuriuos naudoja jos formulių kintamieji, ir kaip susimaišo imperiniai bei metriniai vienetai.
keywords: vienetai, lf, sf, sy, sq, kvadratiniai jardai, stogo kvadratai, akrai, hektarai, metrai, kvadratiniai metrai, ea, kiekvienas, metriniai, imperiniai, konvertavimas, numatytasis vienetas
from: b7bf0528
---

## Pozicijų vienetai

| Pozicijos tipas | Vienetas | Pavadinimas |
|---|---|---|
| Tiesinė | LF | tiesinės pėdos (numatytasis) |
| Tiesinė | m | metrai |
| Plotas | SF | kvadratinės pėdos (numatytasis) |
| Plotas | SY | kvadratiniai jardai |
| Plotas | SQ | stogo kvadratai (100 kvadratinių pėdų) |
| Plotas | ac | akrai |
| Plotas | m² | kvadratiniai metrai |
| Plotas | ha | hektarai |
| Skaičius | EA | kiekvienas |

Keiskite jį su {{ui:Vienetas}} pozicijos redaktoriuje bet kada, net po matavimo: kiekis iš karto perskaičiuojamas.

Sąraše {{ui:Vienetas}} rodomi vienetai, įjungti {{ui:Parametrai}} › {{ui:Bendra}} › {{ui:Vienetai}}, ir visada paties pozicijos vienetas. Nauja pozicija pradedama ilgio ar ploto vienetu, pažymėtu ten, jei jis yra pozicijos vienetas; kitaip – LF arba SF. Žr. [Vienetai, įvedamos reikšmės ir vienetų sąrašai](common:unit-lists).

## Formulių kintamųjų vienetai

| Pozicijos vienetas | L, P, H | A |
|---|---|---|
| LF | pėdos | kvadratinės pėdos (sienos plotas) |
| m | metrai | kvadratiniai metrai (sienos plotas) |
| SF | pėdos | kvadratinės pėdos |
| SY | pėdos | kvadratiniai jardai |
| SQ | pėdos | kvadratai |
| ac | pėdos | akrai |
| m² | metrai | kvadratiniai metrai |
| ha | metrai | hektarai |

SY pozicijoms `A` yra kvadratiniais jardais, o `P` ir `H` lieka pėdomis. Tūris iš SY pozicijos yra `A * 9 * H / 27` kubiniai jardai; plokštėms paprasčiau naudoti SF.

## Kur vienetai fiksuoti

Kai kurie rodmenys visada naudoja pėdas:

- gyvas rodmuo būsenos juostoje braižant (pėdos-coliai, SF),
- **Pasirinkta žyma** (pėdos-coliai, LF ir SF),
- patikrinimo rezultatas (pėdos-coliai, su dešimtainėmis pėdomis ir metrais),
- atkarpų ilgiai ir perimetrai skaičiuoklės lape Žymos (pėdos-coliai).

Pozicijų sumos, {{ui:Kiekiai}} lentelė, formulės ir Sąmatos lapas naudoja savo pozicijos vienetą.

## Mastelis ir vienetai yra atskiri

Lapo mastelis nurodo, koks didelis brėžinys; pozicijos vienetas nurodo, kaip jį pateikti. Metrinis brėžinys `1:100` gali būti matuojamas LF, o imperinis brėžinys – m². Kalibravimas priima bet kokį vienetą: `24'-6"`, `7.5 m`, `7500 mm`.

## Tikslumas

TakeoffCraft matuoja tiksliai pagal jūsų spustelėtus taškus, įskaitant tikrus lankų ilgius ir plotus, ir kiekių neapvalina. Rodmuo apvalina ilgius iki 1/16 colio, o dešimtaines – iki dviejų skaitmenų. Pinigai apvalinami tik galutinėse sumose, iki cento.
