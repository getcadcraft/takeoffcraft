---
title: Mittakaavan esiasetukset
summary: Jokainen Esiasetus-luettelon esiasetus, arkkitehtuuri-, insinööri- ja metrinen, ja mitä kukin olettaa PDF-tiedostosta.
keywords: mittakaava, esiasetukset, arkkitehtuurimittakaava, insinöörimittakaava, metrinen mittakaava, suhde, 1/4 tuumaa, 1/8 tuumaa, 1:100, täysikokoinen
from: 31ac0000
---

{{ui:Preset}}-luettelossa ryhmässä {{ui:Scale}} on 32 mittakaavaa kolmessa ryhmässä. Esiasetus asettaa avoimen arkin mittakaavan tarkalleen.

Jokainen esiasetus olettaa, että PDF-sivu on piirustuksen todellinen paperikoko: yksi tuuma PDF-sivulla on yksi tuuma paperia (PDF-sivut mitataan 72 pisteenä tuumalta). Jos PDF on skaalattu uudelleen, käytä työkalua {{ui:Calibrate}}. Käytä työkalua {{ui:Check}} aina mittakaavan asettamisen jälkeen. Katso [Aseta mittakaava](topic:set-the-scale).

## Arkkitehtuuri

| Esiasetus | Yksi paperituuma on |
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

## Insinööri

| Esiasetus | Yksi paperituuma on |
|---|---|
| `1" = 10'` | 10 ft |
| `1" = 20'` | 20 ft |
| `1" = 30'` | 30 ft |
| `1" = 40'` | 40 ft |
| `1" = 50'` | 50 ft |
| `1" = 60'` | 60 ft |
| `1" = 100'` | 100 ft |

## Metrinen

`1:1`, `1:2`, `1:5`, `1:10`, `1:20`, `1:25`, `1:50`, `1:75`, `1:100`, `1:150`, `1:200`, `1:250`, `1:500`, `1:1000`.

Metrinen suhde tarkoittaa, että yksi yksikkö paperilla vastaa niin monta yksikköä todellisuudessa: mittakaavassa `1:100` 10 mm sivulla on 1 m.

## Kalibroidut mittakaavat

Kalibroitu mittakaava näkyy arkin alla olevassa palkissa muodossa "Kalibroitu 1" = 4.002' on 24'-6"": todelliset jalat per paperituuma ja etäisyys, jonka kirjoitit. Kun se on 0.5 %:n sisällä esiasetuksesta, palkkiin lisätään "(vastaa 1/4" = 1'-0")", ja arkkiluettelo näyttää esiasetuksen nimen.

## Epätavalliset PDF-tiedostot

Jotkin PDF-tiedostot ilmoittavat suuremman sivuyksikön ("user unit"). TakeoffCraft ottaa sen huomioon esiasetuksissa ja näytettävässä mittakaavassa. PDF-tiedoston sisällä käännetyt sivut mitataan samalla tavalla kuin pystysuorat.
