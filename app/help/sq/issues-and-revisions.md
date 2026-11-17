---
title: Botimet, revizionet dhe regjistri i ndryshimeve të vizatimit
summary: Mbaj një histori të vetme botimesh me modelin e arkitektit: lexo botimet, regjistro udhëzimet e vendit, vizatimet e punishtes dhe modelet e lidhura me një botim, dhe lexo regjistrin e ndryshimeve të vizatimit.
keywords: botim, revizion, revizione, regjistri i ndryshimeve, regjistri i vizatimeve, udhëzim vendi, vizatim punishtesh, model i lidhur, ofertë, ndërtim, histori botimesh, listë sasish, llogaritja
from: 8d8f6e68
---

## Çfarë do të bësh

Puno nga e njëjta histori botimesh si pjesa tjetër e ekipit. Shiko cilat fletë u dërguan në cilin revizion, dhe mbaj çfarë ndodh në punishte të lidhur me botimin përkatës.

## Hapat

1. Hap **Botimet dhe revizionet**.
2. Zgjidh **Lexo një histori botimesh** dhe përzgjidh skedarin `.issues.json` të ruajtur nga BimCraft ose nga një aplikacion tjetër. Botimet dhe regjistrimet e tij shtohen te të tuajat. Asgjë nuk zëvendësohet.
3. Zgjidh **Shto një regjistrim** për një udhëzim vendi, një vizatim punishtesh, një grup shënimesh, një model të lidhur ose një shënim. Përzgjidh botimin ku bën fjalë dhe statusin e tij. Një skedar që zgjedh regjistrohet me emrin, madhësinë dhe SHA-256 të tij; skedari mbetet aty ku është.
4. **Regjistri i ndryshimeve të vizatimit** shfaq një rresht për çdo fletë dhe një kolonë për çdo botim. Një revizion në kllapa u dërgua përsëri pa ndryshime.
5. **Shkarko regjistrin e ndryshimeve (CSV)** ruan botimet, tabelën e fletëve dhe regjistrimet. **Ruaj historinë e botimeve** shkruan një skedar që lexojnë aplikacionet e tjera.

## Mirë të dish

- **Regjistro një botim** botim fletët e matura, për shembull me një listë sasish. **Ndryshime që nga** tregon cilat fletë u matën përsëri pas atij botimi.
- Historia ruhet në skedarin e llogaritjes. Çdo ndryshim është një {{ui:Zhbëj}}.
- Leximi i të njëjtit skedar dy herë nuk shton asgjë dy herë. Kur dy kopje mbajnë të njëjtin regjistrim, mbahet ajo më e reja.
