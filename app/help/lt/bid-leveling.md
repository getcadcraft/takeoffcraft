---
title: Pasiūlymų paketai ir pasiūlymų išlyginimas
summary: Padalykite sąmatą į paketus pagal specialybes, siųskite kiekvieno paketo aprašą subrangovams, palyginkite grįžtančius pasiūlymus pagal tą patį aprašą ir naudokite pasirinktą pasiūlymą kaip paketo kainą.
keywords: pasiūlymų išlyginimas, išlyginimas, pasiūlymų paketas, subrangovas, subrangos pasiūlymas, aprašas, užpildas, specialybė, CSI skyrius, palyginti pasiūlymus, žemiausias pasiūlymas, pasiūlymų lentelė, pasiūlymą teikiantis, sutartis, pasirinktas pasiūlymas, naudoti pasiūlymą, subrangos kaina
from: 856b3088
---

Generalinis rangovas siunčia kiekvienos specialybės aprašą subrangovams ir palygina, ką gauna atgal. TakeoffCraft atlieka abu veiksmus iš kiekių skaičiavimo: atidarykite {{ui:Export}} › {{ui:Bid packages and leveling…}}.

## Paketai

Kiekvienam CSI skyriui, kurį naudoja jūsų pozicijos, yra vienas paketas (pirmieji du pozicijos {{ui:CSI number}} skaitmenys, žr. [Kurkite kiekių skaičiavimo pozicijas](topic:create-items)). Pozicijos be numerio sudaro atskirą paketą. Kiekvienas paketas rodo savo pozicijas, kiek lapų turi jų žymės, ir mūsų savikainą (medžiagą ir darbą prieš antkainius, iš bazinės kainos).

Pasirinkite {{ui:Scope CSV}}, kad atsisiųstumėte, ką siųsti subrangovui: kiekvieną poziciją su CSI numeriu, kiekiu, vienetu ir lapais, kuriuose ji yra. Jame nėra kainų. Medžiagų tiekėjams pasiūlymo užklausoje darbaknygėje yra detalių sąrašas (žr. [Eksportuoti sąmatą](topic:export-estimate)).

## Įveskite pasiūlymus

1. Tuščioje eilutėje po paketu įveskite teikėjo pavadinimą ir pasiūlymo sumą, tada pasirinkite {{ui:Add the bid}}.
2. Jei pasiūlymas palieka dalį aprašo, atidarykite jo sąrašą {{ui:Left out}} ir pažymėkite tas pozicijas.
3. Norėdami ištaisyti pavadinimą ar sumą, perrašykite lentelėje; mygtukas × pašalina pasiūlymą.

Kiekvienas pakeitimas yra vienas žingsnis, kurį atšaukia {{key:Mod+Z}}, o pasiūlymai išsaugomi kartu su kiekių skaičiavimu.

## Kaip pasiūlymai išlyginami

Pasiūlymai retai apima tą patį aprašą. Išlyginimas kiekvienai neįtrauktai pozicijai įdeda **užpildą** mūsų savikaina, todėl kiekvienas pasiūlymas palyginamas pagal visą paketą:

**Išlyginta = pasiūlymas + užpildai**

Žemiausias išlygintas pasiūlymas pažymimas **Low**; lygybės atveju — tas, kuris įvestas pirmas. **Against our cost** yra išlygintas pasiūlymas minus mūsų savikaina už paketą: neigiamas skaičius reiškia, kad jis mažesnis. Pasiūlymas, kuris atrodo žemiausias, gali pralaimėti, kai įskaičiuojamas trūkstamas darbas.

Darbaknygėje yra lapas **Bid leveling** su visais paketais, kuriems yra pasiūlymų: mūsų sąmata, kiekvienas pasiūlymas, jo užpildai, išlygintas bendras ir skirtumas, kaip gyvos formulės, bei tai, ką kiekvienas pasiūlymas paliko neįtraukta.

## Naudokite pasiūlymą kaip paketo kainą

Pasirinkite {{ui:Use}} pasiūlymui, ir jis tampa visos paketo pozicijos kaina jūsų sąmatoje: paketo pačios kainodaros dalis (pozicijos, jų antrinės sąlygos ir surinkimų dalys) iškrenta iš bendros darbo sumos, pozicijos lieka kaip kiekiai su jūsų pačių normomis įrašui, o viena eilutė **Chosen bid** rodo pasiūlymo sumą. Pozicijos, kurių pasiūlymas neapima, lieka jūsų savikaina, o tai išlyginimas jau skaičiavo kaip užpildą. Pasirinkite kitą pasiūlymą arba tą patį dar kartą, kad atšauktumėte; kiekvienas veiksmas yra vienas žingsnis, kurį atšaukia {{key:Mod+Z}}.

Pasiūlymo suvestinėje subrangų pasiūlymai yra viena eilutė savikainoje: bendrosios išlaidos, pelnas ir garantija dedami ant jų kaip ant bet kurios kitos savikainos; pardavimo mokestis (tik nuo medžiagų) ir darbo sąnaudų priedai (nuo darbo) — ne. Darbaknygės lape Estimate pasirinktas pasiūlymas yra atskira eilutė, o antkainių blokas jį įtraukia, su gyvomis formulėmis. Medžiagų sąrašas nerodo laimėjusio paketo medžiagos, nes ją tiekia subrangovas.

Paketas alternatyvos sąmatos srityje nėra perkainojamas: alternatyvos ir sričių tarpinės sumos vis dar naudoja jūsų pačių kainas.

## Pasiūlymai, grįžtantys el. paštu

Pasiūlymų įvesti rankiniu būdu nereikia. {{ui:Send for bids…}} po paketu siunčia kiekvienam subrangovui el. paštu nuorodą į puslapį, kuriame jis įrašo kainą kiekvienai eilutei; {{ui:Get prices}} įtraukia tai, ką jie atsiuntė, į šią lentelę. Žr. [Siųsti paketą pasiūlymams](topic:bid-invitations).

:::note
Pasiūlymo įvedimas rankiniu būdu vis dar veikia, ir ranka įvestas pasiūlymas bei iš svetainės gautas stovi greta. Pasiūlymai, grįžę iš svetainės, pažymimi **web** (arba **web, late**, jei atėjo po termino); jų kaina keičiasi tik tada, kai teikėjas atsiunčia naują versiją, todėl jūsų pačių pakeitimai išlieka iki tol.
:::
