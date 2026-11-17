---
title: Sričių paketai
summary: Pridėkite nemokamus surinkimus vienai sričiai į savo kainų biblioteką, pašalinkite juos vienu veiksmu ir bendrinkite savo biblioteką kaip paketą.
keywords: sričių paketas, paketas, surinkimai, šablonai, pradinės pozicijos, elektra, gipso plokštės, karkasas, dažymas, betonas, grindys, mūras, stogai, apkalos, stalių darbai, santechnika, hvac, izoliacija, kraštovaizdis, terasos, bendrasis rangovas, csi, masterformat, cc0, pridėti, pašalinti, bendrinti
from: d3c036be
---

**Sričių paketas** yra paruoštų pozicijų rinkinys vienai sričiai: kiekviena su savo vienetu, aukščiu ar gyliu, atliekomis ir savo **surinkimu** – daliomis ir formulėmis, kurios išmatuotą ruožą, plotą ar skaičių paverčia medžiagomis. Pavyzdžiui, gipso pertvara atneša savo profilius, stovus, plokštes, sraigtus, juostą ir glaistą.

Paketai pridedami į jūsų [kainų biblioteką](topic:price-library), o iš ten pozicijas galite pridėti į bet kurį kiekių skaičiavimą.

## Pridėti paketą

1. Atidarykite {{ui:Biblioteka}} viršuje esančiame {{ui:Pozicijos}} skydelyje, tada {{ui:Sričių paketai…}}.
2. Pasirinkite {{ui:Vienetai}}: imperinius (LF, SF), metrinius (m, m²) arba abu. Kiekvienas surinkimas pateikiamas abiejose sistemose.
3. Spustelėkite {{ui:Pridėti}} šalia paketo.

Paketo pozicijos atsiranda bibliotekoje, pažymėtos paketo pavadinimu. Norėdami jas naudoti, bibliotekoje pažymėkite jas ir pasirinkite {{ui:Pridėti į kiekių skaičiavimą}}.

:::note
**Paketas nepateikia kainų.** Jo pozicijos bibliotekoje rodo „Nustatykite įkainį“. Įkainiai yra jūsų: įveskite juos bibliotekoje arba pozicijos redaktoriuje, arba importuokite savo kainų sąrašą kaip CSV ir naudokite {{ui:Atnaujinti kainas}}.
:::

Jei jau turite bibliotekoje poziciją tuo pačiu pavadinimu ir tipu, paketas palieka jūsų poziciją nepakeistą. Paketą pridėjus iš naujo, jo pozicijos pakeičiamos nauja versija.

## Pašalinti paketą

Lange {{ui:Sričių paketai…}} spustelėkite {{ui:Pašalinti}} šalia paketo, kurį pridėjote, tada dar kartą patvirtinkite. Visos pozicijos, kilusios iš jo, pašalinamos iš bibliotekos vienu veiksmu. Pozicijos, kurias jau pridėjote į kiekių skaičiavimą, lieka tame kiekių skaičiavime.

## Kas yra pakete

Pasirinkite {{ui:Šaltiniai ir išsamiau}} po paketu, kad pamatytumėte, iš ko parašytas kiekvienas surinkimas: statybos normų, standartų ir prekybos asociacijų montavimo vadovų. Bibliotekoje užveskite žymeklį ant pozicijos, kad perskaitytumėte jos šaltinius ir prielaidas, pvz., karkaso žingsnį ar dažo ištepimo normą. Patikrinkite juos pagal savo objektą ir gaminių techninius duomenis bei pakeiskite formules, jei jie skiriasi (žr. [Surinkimai ir formulės](topic:assemblies)).

Kiekvienas paketas pažymėtas **Pradinis: dar neperžiūrėjo sąmatininkas**, kol jį peržiūri dirbantys sąmatininkai.

Kiekviena pozicija taip pat turi savo CSI MasterFormat numerį, pvz., `09 21 16`.

## Bendrinkite savo biblioteką kaip paketą

Bibliotekoje {{ui:Eksportuoti kaip paketą…}} įrašo ją kaip paketo failą (`.ccpack.json`), kurį bet kas gali pridėti su {{ui:Atidaryti paketo failą…}}. Pagal numatymą praleidžiamos pozicijos, kilusios iš jūsų pridėtų paketų, ir įkainiai neįtraukiami. Pažymėkite {{ui:Įtraukti mano įkainius kaip pavyzdinius}}, kad išsiųstumėte ir savo įkainius: jie išsiunčiami pažymėti regionu ir jūsų nurodyta data, o tas, kas pridės paketą, pasirenka, ar juos naudoti.

Paketo failai yra paprasti duomenys, o ne programos. TakeoffCraft prieš naudodamas patikrina kiekvieną jo dalį ir praleidžia tai, ko neperskaito.
