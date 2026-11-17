---
title: Shkallët e gatshme
summary: Çdo e gatshme në listën {{ui:Të gatshme}} - arkitekturore, inxhinierike dhe metrike - dhe çfarë supozon secila për PDF-në.
keywords: shkallë, të gatshme, shkallë arkitekturore, shkallë inxhinierike, shkallë metrike, raport, 1/4 inç, 1/8 inç, 1:100, madhësi e plotë
from: 31ac0000
---

Lista {{ui:Të gatshme}} te grupi {{ui:Shkallë}} ka 32 shkallë në tre grupe. Një e gatshme e vendos saktësisht shkallën e fletës së hapur.

Çdo e gatshme supozon që faqja PDF është madhësia reale e letrës së vizatimit: një inç në faqen PDF është një inç letër (faqet PDF matin 72 pika për inç). Nëse PDF u ndryshua madhësinë, përdor {{ui:Kalibro}}. Përdor {{ui:Kontrollo}} pas vendosjes së çdo shkalle. Shih [Vendos shkallën](topic:set-the-scale).

## Arkitekturore

| Të gatshme | Një inç letre është |
|---|---|
| `1/16" = 1'-0"` | 16 ft |
| `3/32" = 1'-0"` | 10 ft 8 in |
| `1/8" = 1'-0"` | 8 ft |
| `3/16" = 1'-0"` | 5 ft 4 in |
| `1/4" = 1'-0"` | 4 ft |
| `3/8" = 1'-0"` | 2 ft 8 in |
| `1/2" = 1'-0"` | 2 ft |
| `3/4" = 1'-0"` | 1 ft 4 in |
| `1" = 1'-0"` | 1 ft |
| `1 1/2" = 1'-0"` | 8 in |
| `3" = 1'-0"` | 4 in |

## Inxhinierike

| Të gatshme | Një inç letre është |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrike

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Një raport metrik do të thotë se një njësi në letër është aq njësi në realitet: me `1:100`, 10 mm në faqe janë 1 m.

## Shkallët e kalibruara

Një shkallë e kalibruar shfaqet si "Calibrated 1" = 4.002' on 24'-6"" në shiritin nën fletë: këmbë reale për inç letre, dhe distanca që shkrove. Kur është brenda 0.5% të një të gatshme, shiriti shton "(përputhet me 1/4" = 1'-0")" dhe lista e fletëve shfaq emrin e së gatshmes.

## PDF të pazakonta

Disa PDF deklarojnë një njësi më të madhe faqeje (një "user unit"); TakeoffCraft e merr parasysh për të gatshmet dhe për shkallën e shfaqur. Faqet e rrotulluara në PDF maten njësoj si ato të drejta.
