---
title: Mga isyu, revision at changelog ng drawing
summary: Panatilihin ang isang kasaysayan ng isyu kasama ng model ng architect: basahin ang mga isyu, itala ang site instruction, shop drawing at linked model laban sa isang isyu, at basahin ang changelog ng drawing.
keywords: isyu, revision, revisions, changelog, drawing changelog, drawing register, site instruction, shop drawing, linked model, tender, construction, issue history, bill of quantities, takeoff
from: 8d8f6e68
---

## Ang gagawin mo

Gamitin ang parehong kasaysayan ng isyu gaya ng iba pang team. Tingnan kung aling mga sheet ang nailabas sa aling revision, at itala ang nangyayari sa site laban sa isyung kinabibilangan nito.

## Mga hakbang

1. Buksan ang **Mga isyu at revision**.
2. Piliin ang **Basahin ang kasaysayan ng isyu** at piliin ang file na `.issues.json` na na-save mula sa BimCraft o ibang app. Idinadagdag ang mga isyu at record nito sa iyo. Walang napapalitan.
3. Piliin ang **Magdagdag ng record** para sa site instruction, shop drawing, markup set, linked model o note. Piliin ang isyung kinabibilangan nito at ang status nito. Ang file na pipiliin mo ay itinatala ayon sa pangalan, laki at SHA-256; mananatili ang file kung nasaan ito.
4. Ang **Drawing changelog** ay nagpapakita ng isang hilera para sa bawat sheet at isang column para sa bawat isyu. Ang revision na nasa loob ng bracket ay inilabas muli nang walang pagbabago.
5. Ang **I-download ang changelog (CSV)** ay nagse-save ng mga isyu, ng sheet table at ng mga record. Ang **I-save ang issue history** ay sumusulat ng file na binabasa ng ibang app.

## Dapat malaman

- Ang **I-record ang isyu** ay naglalabas ng mga sheet mo na na-measure, halimbawa gamit ang bill of quantities. Sinasabi ng **Mga pagbabago mula noon** kung aling mga sheet ang na-measure muli pagkatapos ng isyung iyon.
- Nakasave ang history sa takeoff file. Bawat pagbabago ay isang I-undo.
- Ang pagbasa ng parehong file nang dalawang beses ay hindi nagdaragdag ng dobleng bagay. Kapag magkapareho ang dalawang kopya ng isang record, itinatago ang mas bago.
