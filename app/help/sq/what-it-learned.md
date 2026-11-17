---
title: Çfarë mësoi nga llogaritjet tuaja
summary: TakeoffCraft mban simbolet që konfirmoni me Numërim automatik, grupet e kushteve, montimet që përdorni më shumë dhe modelet që përsëritni në çdo faqe, të gjitha brenda vetë skedarit të llogaritjes sasish. Shikojini, përdorini, fshijini.
keywords: mëso, mësuar, mësim, asistent, mbaj mend, simbole, shabllone, njëlloj si puna e fundit, puna e fundit, grup kushtesh, kushte, ripërdorim, montime, më të përdorurat, sugjerime, përsërit në çdo faqe, çdo faqe, bllok titulli, model, pastro të gjitha, harro, privatësi
from: 54d99e99
---

TakeoffCraft bëhet më i shpejtë sa më shumë llogaritje sasish të bëni me të. Ai mëson **vetëm nga ajo që pranoni**:

- simbolet që keni kutizuar me [Numërim automatik](topic:auto-count) dhe pastaj i keni shtuar,
- grupet e kushteve që ruani,
- montimet që përdorni (një herë për punë),
- modelet e shenjave që përsëritni në çdo faqe.

Është thjesht përputhje e thjeshtë në fletët tuaja, e njëjta kërkim që kryen Numërimi automatik. Nuk është një model i trajnuar. Gjithçka që mëson mbahet **në skedarin e kësaj llogaritjeje** (`.takeoff.json`), dhe asgjë nuk dërgohet askund. Për ta çuar te puna e radhës, përdorni [Njëlloj si puna e fundit](topic:what-it-learned#same-as-last-job).

Zgjidhni {{ui:Learned}} në shiritin e veglave (llamba, pranë {{ui:Auto count}}) për t'i parë të gjitha.

## Simbolet

Kur kutizoni një simbol me {{ui:Auto count}} dhe zgjidhni {{ui:Add}}, simboli që kutizuat ruhet, me nivelin e përputhjes që pranuat.

- Te {{ui:Learned}}, zgjidhni {{ui:Find on this sheet}} ose {{ui:Find on every sheet}}. Hapet rishikimi i zakonshëm i Numërimit automatik: klikoni një kuti për ta lënë jashtë, lëvizni rrëshqitësin, pastaj shtoni ato. Asgjë nuk shtohet derisa ta bëni ju.
- Kur hapni një fletë që nuk ka asnjë nga një simbol i mësuar, një shirit në krye ju ofron {{ui:Find …}} për të. {{ui:Not now}} e fsheh për atë fletë.
- Nëse llogaritja nuk ka asnjë artikull me atë emër, shtimi i shenjave shton edhe artikullin (një hap zhbërjeje).
- Shtimi përsëri i simbolit të të njëjtit artikull llogaritet te ai që e njeh; një simbol me pamje tjetër ruhet si i dyti.
- Si Numërimi automatik, gjen simbolin edhe në kënde të drejta dhe në fletë me shkallë tjetër.

## Grupet e kushteve

Një grup mban kushtet e një llogaritjeje (artikujt me njësitë, tarifat, humbjen dhe montimet), pa shenja.

1. Te {{ui:Learned}}, zgjidhni {{ui:Save this takeoff's conditions as a set…}} dhe jepini një emër. Një grup me të njëjtin emër zëvendësohet.
2. Në një llogaritje që ka grupin, {{ui:Add}} vendos kushtet që nuk i ka ende. Kushtet me të njëjtin emër dhe lloj lihen ashtu. Është një hap zhbërjeje.

## Njëlloj si puna e fundit

Skedari i punës së fundit mban atë që mësoi. Për të nisur një punë të re prej tij:

1. Hapni planimetritë e reja, pastaj zgjidhni {{ui:Learned}} › {{ui:Same as last job…}}.
2. Zgjidhni `.takeoff.json` të punës së fundit.
3. Shënoni çfarë të sillet brenda: kushtet e saj (vetëm ato që kjo llogaritje nuk i ka), dhe çfarë mësoi (simbole, grupe, montime, modele). Pastaj {{ui:Bring them in}}.

Kushtet e saj ruhen gjithashtu si grup me emrin e asaj pune. Shenjat dhe sasitë e saj mbeten në skedarin e vet. I gjithë veprimi është një hap zhbërjeje.

## Montimet që përdorni më shumë

Një artikull që ka montim numërohet si i përdorur një herë për punë kur ka një sasi dhe ruani llogaritjen. Një punë është grupi i skedarëve të planimetrisë nga ku merret llogaritja, kështu që ruajtja e së njëjtës llogaritje përsëri nuk numërohet dy herë. Lista nën {{ui:Assemblies you use most}} i vendos në krye ato që përdorni më shumë. Ajo lë jashtë ato që ka tashmë kjo llogaritje. {{ui:Add}} vendos një montim siç e përdorët së fundi, me të gjitha pjesët.

## Përsërit në çdo faqe

Për shenjat që janë njëlloj në çdo faqe të një grupi, si një numërim i bllokut të titullit ose një detaj tipik:

1. Përzgjidhni shenjat në një fletë ([Përzgjidh shenjat](topic:copy-paste#select-the-marks)).
2. Te {{ui:Learned}}, zgjidhni {{ui:Repeat the selected marks on every page…}}, emërtoni modelin dhe konfirmoni.

Ato vendosen në çdo faqe tjetër të hapur **të së njëjtës madhësi**, në të njëjtin vend, në një hap zhbërjeje. Gjatësitë dhe sipërfaqet vendosen vetëm në faqe me të njëjtën shkallë; numërimet vendosen në çdo faqe të asaj madhësie. Një faqe që i ka tashmë kalohet. Modeli mbahet, kështu që faqet që hapni më vonë e marrin ofertën në shirit, ose mund të përdorin {{ui:Repeat on every page}} në listë.

## Shihni, fshijeni

Gjithçka e mësuar listohet te {{ui:Learned}}. Koshi fshin një gjë. {{ui:Clear all}} fshin gjithçka të mësuar dhe i lë artikujt dhe shenjat tuaja. Të dyja mund të zhbëhen derisa të mbyllni llogaritjen, dhe të dyja ruhen me llogaritjen.

Për të ndaluar mësimin në një llogaritje, hiqni shenjën te {{ui:Learn from this takeoff}}. Asgjë e re nuk mësohet, dhe ajo që është e listuar mbetet derisa ta fshini.

## Të mirë për t'u ditur

- Versionet më të vjetra të TakeoffCraft hapin normalisht një skedar me gjëra të mësuara. Ato e injorojnë atë pjesë, dhe e heqin nëse e ruajnë përsëri skedarin.
- Një simbol i mësuar është një foto e vogël e asaj që kutizuat, e ruajtur në skedar (disa kilobajt secili).
- Simbolet e mësuara kërkohen si kërkon Numërimi automatik, kështu që vlejnë të njëjtat kufizime: [Numëro një simbol automatikisht](topic:auto-count).
