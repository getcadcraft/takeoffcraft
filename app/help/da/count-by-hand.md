---
title: Tæl i hånden
summary: Klik på hver dør, armatur eller enhed for at tælle den, kontrollér dine tal og ret fejl.
keywords: tæl, hver, ea, armaturer, døre, enheder, symboler, optælling, klik-tælling, manuel tælling
from: 594f2980
---

En antalspost tæller ting: døre, lysarmaturer, stikkontakter, sanitetsarmaturer. Hvert klik på arket tilføjer én tællemarkering. Tælling kræver ingen målestok.

## Tæl

1. Lav eller klik en antalspost under {{ui:Poster}} (type {{ui:Tæl}}).
2. Vælg {{ui:Tæl}} på værktøjslinjen, eller tryk {{key:C}}.
3. Klik på hver enkelt på arket.
   Hvert klik sætter en prik i postens farve, og postens antal går op med én.
4. Gå til næste ark ({{key:PageDown}}) og bliv ved med at tælle. Værktøjet bliver på {{ui:Tæl}}.
5. Tryk {{key:Esc}} når du er færdig. TakeoffCraft går tilbage til {{ui:Vælg}}.

Træk panorerer stadig, og hjulet zoomer mens du tæller, så du kan bevæge dig rundt på arket uden at tilføje prikker.

:::tip
Klik på antalsposten for at fremhæve dens prikker på hvert ark. Arkelisten viser så hvor mange der er på hvert ark, hvilket hjælper dig med at finde de ark du endnu ikke har talt.
:::

## Ret en optælling

- **Fjern en prik**: vælg {{ui:Vælg}} ({{key:V}}), klik på prikken, og tryk {{key:Delete}} eller vælg {{ui:Slet markering}}. Eller tryk {{key:Mod+Z}} lige efter et forkert klik.
- **Flyt en prik**: vælg den og træk den.
- **Talt under den forkerte post**: vælg prikken og vælg den rigtige antalspost i listen **Post** under **Valgt markering**.

## Prikstørrelse, på skærmen og i PDF'en

Prikkerne har én størrelse på skærmen uanset hvor meget du zoomer. For at ændre den, åbn {{ui:Indstillinger}}, fanen TakeoffCraft, og vælg **Størrelse på tællemarkør**: Ekstra lille, Lille, Mellem (standard) eller Stor.

PDF-eksporten ({{ui:Eksportér}} › den markerede PDF) tegner hver prik i samme størrelse på papiret, uanset arkstørrelse: en fremviser der viser PDF'en på 100 % viser prikkerne lige så store som på skærmen. Hvis prikkerne på et ark ellers ville røre hinanden, gør eksporten dem mindre på det ark, så hver kan læses.

## Mange ens symboler

For et symbol der gentages mange gange på et ark, prøv [Auto-tælling](topic:auto-count): tegn en boks om ét, gennemgå hvad den finder, og tilføj dem alle i ét trin.

## Brug tællinger i formler

En antalspost's mængde er **N**. Kalkulationskomponenter kan bruge den, f.eks. hængsler `N * 3` for døre. Se [Kalkulationsenheder og formler](topic:assemblies).
