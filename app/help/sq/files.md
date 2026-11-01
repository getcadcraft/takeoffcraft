---
title: Skedarët që TakeoffCraft hap dhe ruan
summary: PDF-të hyjnë; skedari i projektit të llogaritjes, fletët llogaritëse dhe PDF-të e shënuara dalin - çfarë përmban secili, ku shkon dhe çfarë ndryshon online, jashtë linje dhe midis shfletuesve.
keywords: skedarë, formate, pdf, takeoff.json, skedar projekti, xlsx, csv, pdf i shënuar, shkarkim, ruaj, hap, jashtë linje
from: 1bf9be65
---

## Çfarë hap

| Skedari | Si | Shënime |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}}, ose lëshoje në faqe | Disa njëherësh. Çdo faqe bëhet një fletë. |
| Skedari i projektit (`.takeoff.json`) | {{ui:Open takeoff}}, ose lëshoje në faqe | Artikujt, shkallët dhe shenjat e tua. Mund ta lëshosh bashkë me PDF-të e tij. |

Skedarët e tjerë të lëshuar në faqe kapërcehen, dhe shiriti i statusit i emëron.

- **PDF-të me fjalëkalim** nuk hapen: "(name) është i mbrojtur me fjalëkalim. Hap një kopje pa mbrojtje."
- **I njëjti PDF dy herë** hapet një herë: "(name) është tashmë i hapur." TakeoffCraft i njeh skedarët sipas përmbajtjes, jo sipas emrave.
- **PDF-të e skanuara** hapen dhe maten si çdo tjetër; TakeoffCraft nuk ka nevojë për tekstin në PDF.
- **Grupe të mëdha planimetrish**: çdo PDF lexohet tërësisht kur hapet (për ta identifikuar), ndaj një skedar shumë i madh merr pak kohë. Miniaturat vizatohen një nga një ndërsa lëviz.

## Çfarë ruan

Çdo ruajtje është një shkarkim. Asgjë nuk shkruhet përsëri në PDF-të e tua.

| Ti zgjedh | Ti merr | Çfarë përmban |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Artikujt, montimet, normat, shkallët e fletëve dhe çdo shenjë, e lidhur me çdo PDF sipas përmbajtjes. Pa faqet e PDF-ve. |
| {{ui:XLSX}} | `(name).xlsx` | Katër fletë pune: Preventivi (me formula aktive), Sipas fletës, Shenjat, Shkallët. |
| {{ui:CSV}} | `(name).csv` | Preventivi si vlera të thjeshta, një rresht për artikull dhe komponent. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | Një kopje e çdo PDF-je të hapur që ka shenja, me llogaritjen e vizatuar në faqet e saj dhe një legjendë. Një skedar për çdo PDF. |

Emri merret nga PDF-i i parë që hape në këtë llogaritje. Ende nuk ka kuti riemërimi: riemëro skedarin e shkarkuar nëse dëshiron një emër tjetër.

Shih [Eksporto preventivin dhe një PDF të shënuar](topic:export-estimate) dhe [Kolonat e eksportit](topic:export-columns).

## Ku shkojnë shkarkimet

Shfletuesi yt i ruan aty ku ruan çdo shkarkim, zakonisht në dosjen Downloads. Gjeje te {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}}. Nëse shfletuesi është vendosur të pyesë ku të ruajë çdo skedar, ai pyet.

:::chromium
{{ui:Marked PDF}} me disa PDF të shënuara shkarkon disa skedarë njëherësh. Chrome dhe Edge mund të pyesin një herë nëse kjo faqe lejohet të shkarkojë disa skedarë. Zgjidh Lejo.
:::

:::safari
Safari ruan në Downloads, përveç nëse e ke ndryshuar vendin e shkarkimit te Cilësimet e Safari, nën Të përgjithshme.
:::

## Pse skedari i projektit dhe PDF-të janë të ndara

Skedari `.takeoff.json` mban vetëm llogaritjen tënde. Ai i gjen përsëri PDF-të e veta sipas përmbajtjes (një gjurmë gishtash e çdo skedari), kështu që:

- Riemërimi ose zhvendosja e një PDF-je nuk ka rëndësi.
- Një PDF që është ndryshuar ose ruajtur sërish nga një program tjetër llogaritet si skedar tjetër, edhe me të njëjtin emër.
- Shenjat në PDF-të që nuk janë hapur prapë llogariten në totale.

Shih [Ruaj dhe rihap një llogaritje](topic:save-and-reopen).

## Online dhe jashtë linje

PDF-të dhe llogaritjet e tua nuk largohen kurrë nga kompjuteri yt, online ose jashtë linje. Lidhja vlen vetëm për ngarkimin e vetë TakeoffCraft.

Për të punuar pa lidhje, ruaje fillimisht aplikacionin, ndërsa je në linjë:

1. Zgjidh {{ui:Save for offline}} në shiritin e aplikacionit lart.
   Butoni numëron, "Duke ruajtur 12 nga 40", ndërsa ruan.
2. Prit derisa të shfaqet {{ui:Offline ready}}.

Ruajtja e TakeoffCraft mban në shfletuesin tënd aplikacionin, këtë ndihmë, lexuesin e PDF-ve, shkruesin e PDF-ve të përdorur nga {{ui:Marked PDF}} dhe punëtorin e numërimit automatik, rreth 6 MB. Sapo shfaq {{ui:Offline ready}}, gjithçka funksionon jashtë linje: hapja e PDF-ve, matja, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} dhe {{ui:Marked PDF}}.

| Butoni shfaq | Kuptimi |
|---|---|
| {{ui:Save for offline}} | Nuk është ruajtur ende në këtë shfletues. Zgjidhe për ta ruajtur. |
| Duke ruajtur (n) nga (m) | Po ruhet tani. |
| {{ui:Offline ready}} | U ruajt. Zgjidhe për {{ui:Save again (get the newest version)}} ose {{ui:Remove the offline copy}}. |
| {{ui:Could not save}} | Disa skedarë nuk u shkarkuan. Kontrollo lidhjen dhe zgjidhe sërish. |
| {{ui:Offline not available}} | Kjo dritare shfletuesi nuk mund të mbajë kopje jashtë linje (dritaret private dhe disa kompjuterë të administruar e bllokojnë). |

Më shumë, përfshi sa zgjat një kopje e ruajtur në çdo shfletues: [Puna jashtë linje](common:offline).

:::offline
Je jashtë linje. Nëse shiriti i aplikacionit shfaq {{ui:Offline ready}}, gjithçka funksionon. Nëse jo, pjesët që TakeoffCraft nuk i ka ngarkuar ende në këtë skedë (shkruesi i PDF-ve për {{ui:Marked PDF}}, punëtori i numërimit automatik) nuk mund të ngarkohen tani, dhe {{ui:Marked PDF}} ndalon me "PDF-i i shënuar nuk mund të shkruhej". Llogaritja jote është e sigurt në të dy rastet: {{ui:Save takeoff}}, {{ui:XLSX}} dhe {{ui:CSV}} nuk kanë nevojë për lidhje. Mos e rifresko skedën derisa të jesh sërish në linjë.
:::

:::online
Je në linjë. Para një vizite në terren ose një fluturimi, zgjidh {{ui:Save for offline}} dhe prit {{ui:Offline ready}}.
:::

## Fletët llogaritëse

XLSX mban formulat aktive, kështu që një program fletësh llogaritëse rillogarit preventivin kur hapet skedari dhe e mban të saktë kur ndryshon një normë ose humbjen aty. Libri i punës është kontrolluar në LibreOffice Calc, që rillogariti çdo total deri në centin e fundit. Nuk është hapur ende në Excel.

CSV-ja është vlera të thjeshta me një shenjë të renditjes së bajtëve, kështu që programet e fletëve llogaritëse lexojnë saktë karaktere si m².

## Desktop dhe cloud

:::desktop
Që nga 0.5, aplikacioni për desktop është CadCraft Studio: TakeoffCraft dhe shtatë aplikacionet e tjera në një instalim. Nuk ka instalues të veçantë për TakeoffCraft.
:::

Ruajtja në cloud nuk është e disponueshme ende. Mbaji skedarët `.takeoff.json` së bashku me PDF-të e punës, dhe bëj kopje rezervë si çdo skedar tjetër. Shih [Ku shkojnë skedarët e tu](common:your-files).
