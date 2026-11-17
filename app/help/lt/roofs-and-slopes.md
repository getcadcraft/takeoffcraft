---
title: Stogai ir nuolydžiai
summary: Nurodykite plotui jo nuolydį, kad stogo paviršius būtų matuojamas pagal planą, o šoninės briaunos, kalenos ir įdubos – pagal jų šlaitą.
keywords: stogas, nuolydis, šlaitas, nuolydžio koeficientas, kilimas, ruožas, 6:12, šoninė briauna, kalenos, įduba, frontonas, stogdengis, kvadratai, nuožulnusis plotas, plano plotas
from: 38225b60
---

Stogo plane kiekviena stogo plokštuma matoma plokščia, žiūrint iš viršaus. Pats stogas yra didesnis: plokštuma su 6:12 nuolydžiu turi apie 12 % daugiau paviršiaus nei jos planas, o jos įstrižos briaunos yra ilgesnės, nei atrodo. Nurodykite pozicijai jos nuolydį, ir TakeoffCraft matuos palei šlaitą.

## Nuolydžio įvedimas

Nuolydis – tai kilimas kas 12 ruožo vienetų, kaip rodoma stogo plano nuolydžio simboliuose. Įveskite jį kaip `6:12`, `6/12` arba tiesiog `6`; veikia ir kitas ruožas (`4:10` yra 4.8:12). Kampas įvedamas su laipsnių ženklu: `26.57°`. Tuščias laukelis arba `0` reiškia plokščią stogą.

## Stogo plotai

1. Sukurkite plotinę poziciją stogdengiui arba atidarykite turimą.
2. Jos nustatymuose įveskite **Nuolydis**, pavyzdžiui `6:12`.
3. Įprastu būdu nubrėžkite kiekvieną stogo plokštumą plane naudodami {{ui:Area}}.

Kiekviena plokštuma įskaičiuojama pagal savo plano plotą, padaugintą iš nuolydžio koeficiento: √(1 + (kilimas ÷ 12)²), t. y. 1.118 esant 6:12 ir 1.414 esant 12:12. Pasirinkite plokštumą, kad pamatytumėte jos **Plotas** (šlaite), **Plano plotas** ir **Nuolydžio koeficientas**.

Plokštumos su kitokiu nuolydžiu: pasirinkite plokštumą ir jos skydelyje įveskite savo **Nuolydis**. Palikite tuščią, kad būtų naudojamas pozicijos nuolydis. 3D tikrinimo vaizdas, surinkimai (`A` yra nuožulnusis plotas), kainos ir eksportas visi naudoja nuožulnųjį plotą. Atskaitymai nuolydinėje plokštumoje, pavyzdžiui, šviesos langai, nuimami tuo pačiu nuolydžiu.

Perimetras (`P`) lieka plano perimetras. Karnizus, šonines briaunas, kalenas ir įdubas matuokite kaip ruožus (žr. žemiau).

## Šoninės briaunos, kalenos ir įdubos

1. Sukurkite linijinę poziciją, pavyzdžiui, „Šoninė briauna“ arba „Kalenos“.
2. Nustatykite jos **Pasvira** į **Šoninė briauna** (nuožulni briauna, kaip frontono) arba į **Kampinė kalenė arba įduba** (linija, kurioje susitinka dvi plokštumos), ir įveskite stogo plokštumų **Nuolydis**.
3. Nubrėžkite ruožus plane naudodami {{ui:Linear}}.

Šoninė briauna įskaičiuojama kaip jos plano ilgis, padaugintas iš nuolydžio koeficiento. Kalena arba įduba eina plane 45° kampu tarp dviejų to paties nuolydžio plokštumų, todėl jos tikrasis ilgis yra plano ilgis, padaugintas iš √(1 + (kilimas ÷ 12)² ÷ 2): 1.061 esant 6:12, 1.225 esant 12:12.

Vienas ruožas gali jungti abu tipus. Pasirinkite jį: kiekvienas atkarpos segmentas savo skydelyje turi nuolydžio sąrašą – **Pozicijos**, **Lygus**, **Šoninė briauna** arba **Kampinė kalenė arba įduba** – ir jo ilgį palei šlaitą. Ruožo savo **Nuolydis** skydelyje pakeičia pozicijos nuolydį visiems jo segmentams. Skydelyje taip pat rodomas **Plano ilgis**, o lapo etiketėse – ilgiai palei šlaitą.

Atskaitymai vis dar veikia: atskaitytas segmentas nieko neįskaičiuoja, nepriklausomai nuo nuolydžio.

:::note
Kalenos ir įdubos daro prielaidą, kad abi plokštumos turi tą patį nuolydį. Plokštumoms su skirtingais nuolydžiais kalenos tikrąjį ilgį matuokite kitur arba nubrėžkite ją kaip šoninę briauną su lygiaverčiu nuolydžiu.
:::
