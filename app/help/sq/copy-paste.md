---
title: Kopjo, ngjit dhe dyfisho shenjat
summary: Kopjo shenjat me artikujt e tyre, ngjiti aty ku klikon ose në të njëjtin vend në një fletë tjetër, dyfisho, prit, fshi dhe përzgjidh të gjitha, çdo hap i zhbërshëm.
keywords: kopjo, ngjit, prit, dyfisho, ngjit në vend, kujtesë e kopjimit, përzgjidh të gjitha, hiq përzgjedhjen, shenja të shumëfishta, kat tipik, përsërit, i njëjti plan, fletë tjetër, kopjo elementin, dyfisho elementin
from: e20e9024
---

Grupi {{ui:Redakto}} i shiritit të veglave mban {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}} dhe {{ui:Ngjit}}. Menuja {{ui:Më shumë}} i ka të tjerat, secila me tastin e vet: {{ui:Prit}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dyfisho}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}} dhe {{ui:Hiq përzgjedhjen}}. Secila prej tyre është një hap për t'u zhbërë me {{key:Mod+Z}}.

## Përzgjidh shenjat

1. Zgjidh {{ui:Përzgjidh}} ({{key:V}}) dhe kliko një shenjë.
2. Mbaj {{key:Shift}} dhe kliko më shumë shenja për t'i shtuar. {{key:Shift}} + klik mbi një shenjë të përzgjedhur e heq sërish.
3. Ose shtyp {{key:Mod+A}} ({{ui:Përzgjidh të gjitha}}) për të marrë çdo shenjë në fletën e hapur.

Me disa shenja të përzgjedhura, paneli i djathtë shfaq **Shenjat e zgjedhura**: sa prej çdo artikulli, me {{ui:Kopjo}}, {{ui:Dyfisho}}, {{ui:Prit}} dhe {{ui:Fshi shenjat}}. Dorezat e cepave shfaqen vetëm kur është zgjedhur një shenjë. {{key:Esc}} ({{ui:Hiq përzgjedhjen}}) pastron përzgjedhjen.

## Kopjo dhe ngjit aty ku klikon

1. Zgjidh shenjat dhe shtyp {{key:Mod+C}} ({{ui:Kopjo}}). Shenjat kopjohen me artikujt e tyre, duke përfshirë montimin, humbjen dhe kostot e secilit artikull.
2. Shko te fleta ku i do (mund të jetë e njëjta fletë).
3. Shtyp {{key:Mod+V}} ({{ui:Ngjit}}). Një kopje me vija të ndërprera ndjek treguesin.
4. Kliko aty ku duhet të shkojë. Mesi i shenjave të kopjuara vjen te treguesi.

{{key:Esc}} anulon dhe nuk shton asgjë. Shenjat e ngjitura zgjidhen pas kësaj, kështu që {{key:Delete}} ose {{key:Mod+Z}} i heq sërish.

Në të njëjtën llogaritje, shenjat e ngjitura shkojnë te **të njëjtët artikuj**, kështu që sasitë e tyre shtohen te ata artikuj. Në një llogaritje tjetër (një skedë tjetër, ose pas {{ui:E re}}), përdoret një artikull me të njëjtin emër dhe tip; përndryshe artikulli shtohet me montimin e vet. Nëse emri është i zënë nga një artikull me tip tjetër, artikulli i shtuar quhet "(emri) (kopje)".

Shenjat e ngjitura shkojnë në zonën e ofertimit të zgjedhur në krye të panelit {{ui:Artikujt}} (ose në asnjë). Shih [Zonat e ofertimit](topic:bid-areas).

## Ngjit në vend

{{key:Mod+Shift+V}} ({{ui:Ngjit në vend}}) e vendos kopjen në pikën e saktë të fletës së hapur, sipas pozicionit të saj në faqe. Përdore për një kat tipik: merr llogaritjen e nivelit 2, kopjo, hap nivelin 3, ngjit në vend.

Ngjitja në vend kërkon një fletë me **të njëjtën madhësi** me atë nga e cila kopjove. Në një fletë me madhësi tjetër TakeoffCraft e thotë këtë dhe nuk ngjit asgjë; përdor {{ui:Ngjit}} dhe kliko. Në fletën nga e cila kopjove, kopja vjen mbi origjinalet.

## Shkalla duhet të përputhet

Gjatësitë dhe sipërfaqet varen nga shkalla e fletës. Një vijë që mat 10' me 1/4" = 1'-0" do të matej 20' në një fletë me 1/8" = 1'-0". Prandaj TakeoffCraft ngjit vija dhe sipërfaqe vetëm në një fletë me **të njëjtën shkallë** me fletën nga erdhën, dhe e thotë qartë kur nuk është kështu:

- Fleta e hapur nuk ka ende shkallë: jepi një së pari ([Vendos shkallën](topic:set-the-scale)), pastaj ngjit.
- Fleta e hapur ka një shkallë tjetër: mesazhi emëron të dyja shkallët. Ngjit në një fletë me të njëjtën shkallë.
- Numërimet nuk kanë nevojë për shkallë: numërimet e kopjuara ngjiten kudo.

## Dyfisho

{{key:Mod+D}} ({{ui:Dyfisho}}) kopjon shenjat e zgjedhura dhe e vendos kopjen në treguesin menjëherë; kliko aty ku shkon. Asgjë nuk shtohet derisa të klikosh, dhe {{key:Esc}} nuk lë asgjë. Dyfishimi nuk ndryshon atë që ngjit {{ui:Ngjit}}.

## Prit dhe fshi

- {{key:Mod+X}} ({{ui:Prit}}) kopjon shenjat e zgjedhura dhe i fshin. Ngjiti aty ku duhet, ose zhbëje prerjen.
- {{key:Delete}} ose {{key:Backspace}} ({{ui:Fshi}}) fshin shenjat e zgjedhura pa i kopjuar.

## Kopjo një artikull

Redaktori i artikullit (nën **Artikujt**) mbaron me:

- {{ui:Kopjo elementin}}: kopjon artikullin me montimin, humbjen dhe kostot e tij, pa shenja. {{ui:Ngjit}} shton pastaj një kopje të tij në këtë llogaritje, ose në një tjetër.
- {{ui:Dyfisho elementin}}: shton një kopje menjëherë, me emrin "(emri) (kopje)".

:::tip
Kopja mbetet në këtë kompjuter: ruhet në këtë skedë dhe në depozitën e shfletuesit, kështu që një skedë tjetër e TakeoffCraft mund ta ngjitë. Asgjë nuk ngarkohet, dhe kujtesa e kopjimit të sistemit nuk përdoret, kështu që nuk mund t'i ngjitësh shenja në programe të tjera.
:::

:::note
Një kopje vjen nga një fletë në një kohë. Shenjat ngjiten ashtu siç janë: nuk ka rrotullim ose pasqyrim të kopjes ende.
:::
