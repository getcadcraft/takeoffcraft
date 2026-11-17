---
title: Kiekių skaičiavimo įrašymas ir vėl atidarymas
summary: Įrašykite kiekių skaičiavimą kaip .takeoff.json projektą, vėl atidarykite jį su tais pačiais PDF ir sužinokite, kas nutinka, kai PDF trūksta arba yra pakeistas.
keywords: kiekių skaičiavimas PDF viduje, įterpimas, priedas, įrašyti, atidaryti, vėl atidaryti, projektas, takeoff.json, tęsti, tęsimas, pakeistas PDF, trūkstamas PDF, atsarginė kopija, automatinis įrašymas, atkurti, avarija
from: bd5080a6
---

Kiekių skaičiavimas įrašomas kaip mažas projekto failas, `(name).takeoff.json`. Jame yra jūsų pozicijos, surinkimai, įkainiai, kiekvieno lapo mastelis ir kiekviena žymė. Jame PDF failų **nėra**; TakeoffCraft juos suranda iš naujo pagal jų turinį.

## Įrašymas

1. Grupėje {{ui:File}} pasirinkite {{ui:Save takeoff}} arba paspauskite {{key:Mod+S}}.
   Jūsų naršyklė atsisiunčia `(name).takeoff.json`. Būsenos juostoje rašoma: "Įrašyta (name).takeoff.json. Jis vėl atsidaro ant tų pačių PDF (jie atpažįstami pagal turinį)."
2. Perkelkite failą šalia darbo PDF failų, kad abu būtų kartu.

Kiekvienas įrašymas atsisiunčia naują failą. Naršyklė antrajam gali suteikti pavadinimą `(name) (1).takeoff.json`; išsaugokite naujausią.

Pavadinimas paimamas iš pirmojo PDF, kurį atidarėte šiame kiekių skaičiavime.

:::note
{{ui:Save takeoff}} vis dar yra vienintelis būdas išsaugoti kiekių skaičiavimą kaip failą. Dirbdami TakeoffCraft taip pat saugo atkūrimo kopiją šioje naršyklėje (žr. žemiau), o debesies įrašymas dar nepasiekiamas. Jei bandote uždaryti skirtuką su neįrašytais pakeitimais, naršyklė paklausia, ar tikrai norite išeiti.
:::

## Kiekių skaičiavimas PDF viduje

{{ui:Export}} › {{ui:PDF with the takeoff inside}} atsisiunčia kiekvieno atidaryto PDF kopiją, pavadintą pvz. `Plans (with takeoff).pdf`, kuri turi visą kiekių skaičiavimą kaip priedą: pozicijas, žymes, mastelius, pasiūlymo sritis – viską, ką talpina `.takeoff.json`. Jos puslapiai nepakeisti, todėl ji atrodo ir spausdinasi kaip originalas, o kiti PDF skaitytuvai kiekių skaičiavimą rodo tarp priedų.

Atidarykite šį PDF TakeoffCraft (bet kuriuo būdu, kuriuo atidarote PDF) – programa klausia **Šiame PDF yra kiekių skaičiavimas**: pasirinkite {{ui:Open the takeoff}}, kad jį atkurtumėte, arba {{ui:Just the PDF}}, kad atidarytumėte tik brėžinį. Kopija atitinka PDF, iš kurio ji padaryta, todėl `.takeoff.json`, įrašytas iš bet kurios iš jų, atsidaro ant abiejų.

Su keliais PDF kiekviena kopija talpina visą kiekių skaičiavimą; atidarykite juos kartu. Įrašius iš naujo iš kopijos, kiekių skaičiavimas joje pakeičiamas, o ne pridedamas antras. `.takeoff.json` vis dar yra failas, kurį reikia saugoti: jis mažas, ir būtent jį rašo automatinis įrašymas bei darbalaukio programa.

## Jei skirtukas ar naršyklė sustoja

Kelias sekundes po kiekvieno pakeitimo TakeoffCraft išsaugo kiekių skaičiavimo kopiją šios naršyklės saugykloje kartu su PDF, jei jie sudaro 64 MB ar mažiau. Nieko neįkeliama. Kai įrašote kiekių skaičiavimą, pradedate naują arba atidarote kitą projektą, kopija pašalinama.

Jei skirtukas užstringa, naršyklė ar kompiuteris sustoja arba išeinate su neįrašytais pakeitimais, kitą kartą atidarę TakeoffCraft pamatysite klausimą **Atkurti jūsų darbą?** ir kiekių skaičiavimų sąrašą pagal pavadinimą. Pasirinkite **Atkurti**, kad jį atgautumėte: pozicijos, žymės ir masteliai grįžta, o PDF vėl atsidaro, jei buvo išsaugoti. Būsenos juostoje rašoma: "Atkurta (name). Dar neįrašyta į failą: įrašykite ją su {{ui:Save takeoff}}." Jei PDF buvo per dideli, kad juos būtų galima išsaugoti, atidarykite juos iš naujo; žymės atsiras jų lapuose. Daugiau: [Atkurti jūsų darbą](common:recover).

## Vėl atidarymas

1. Atidarykite TakeoffCraft.
2. Kartu numeskite `.takeoff.json` failą ir jo PDF į puslapį. Arba pasirinkite {{ui:Open plans}} PDF failams ir {{ui:Open takeoff}} projektui, bet kuria tvarka.
   Būsenos juostoje rašoma: "Atidaryta (name): 12 pozicijų, 340 žymių." Kiekvienas lapas gauna atgal savo mastelį, o žymės atsiranda jų lapuose.

PDF tvarka nesvarbi, kaip ir jų failų pavadinimai ar aplankai. TakeoffCraft atpažįsta kiekvieną PDF pagal jo turinio atspaudą.

Jei atidarote projektą, kol dabartinis kiekių skaičiavimas turi neįrašytų pakeitimų, TakeoffCraft pirmiausia klausia: **Atšaukti**, **Atmesti pakeitimus** arba **Pirmiausia įrašyti kiekių skaičiavimą**. Atidarius projektą dabartinės pozicijos ir žymės pakeičiamos; jau atidaryti PDF lieka atidaryti.

## Kai PDF trūksta

Jei atidarote projektą be visų jo PDF, būsenos juostoje pridedama: "Atidarykite jo PDF, kad matytumėte žymes (rodoma lapų sąraše)." Po lapų sąrašu pastaboje rašoma:

"Šis kiekių skaičiavimas apima ir PDF, kurie neatidaryti. Jų kiekiai skaičiuojami; atidarykite juos, kad matytumėte ir redaguotumėte jų žymes:"

Toliau nurodomi failų pavadinimai ir dydžiai. Jų žymės vis dar įskaičiuojamos į kiekvieną sumą ir eksportą, su tais mastelių, kuriais jos buvo išmatuotos. Atidarykite tuos PDF, kad matytumėte ir redaguotumėte žymes.

## Kai PDF pakeistas

PDF, kuris buvo peržiūrėtas arba tiesiog iš naujo išsaugotas kitos programos, turi kitokį turinį, todėl TakeoffCraft jis yra **kitas failas**, net jei pavadinimas tas pats. Pastaboje po lapų sąrašu toks failas nurodomas kaip „failas su tokiu pavadinimu atidarytas, bet jo turinys skiriasi“.

- Žymės lieka prijungtos prie senos versijos. Jos toliau įskaičiuojamos senose vietose ir mastelyje.
- Peržiūrėtas PDF atsidaro kaip nauji lapai be mastelio ir be žymių.

Norėdami perkelti kiekių skaičiavimą į peržiūrą, atidarykite abu PDF ir naujame lape naudokite {{ui:Compare}}: [Palyginti peržiūrėtą lapą ir perkelti kiekių skaičiavimą](topic:compare-revisions).

## Sugadintas ar svetimas failas

TakeoffCraft patikrina kiekvieną projekto failą prieš jį naudodamas. Galite pamatyti tokius pranešimus:

- "(file) nėra TakeoffCraft projektas (tai nėra galiojantis JSON)."
- "Tai nėra TakeoffCraft projekto failas."
- "Šis projektas įrašytas naujesne TakeoffCraft versija. Atidarykite jį ten."
- "3 žymės buvo sugadintos ir praleistos." (likusi dalis atsidaro)

## Anuliavimo istorija

Anuliavimo istorija pradedama iš naujo atidarius projektą. Įrašymas jos nepanaikina.
