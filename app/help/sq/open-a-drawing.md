---
title: Hap një vizatim DWG ose DXF
summary: Hap një skedar vizatimi si fletë (hapësira e modelit dhe çdo paraqitje), fillo me shkallën që jep vizatimi, shfaq ose fshih shtresat e tij, dhe sill vizatimet e lidhura.
keywords: dwg, dxf, cad, vizatim, hap një vizatim, paraqitje, hapësira e modelit, hapësira e letrës, fletë, njësi, insunits, shkalla e pamjes, xref, vizatim i lidhur, shtresa, e ngrirë, pa pdf, printim, pa printuar
from: d8c3f504
---

TakeoffCraft hap një vizatim DWG ose DXF ashtu si hap një PDF: nuk ke nevojë ta printosh së pari në PDF. Numërimi nga vetë vizatimi është i saktë, sepse vizatimi di çfarë është çdo objekt. Shih [Numëro nga një vizatim](topic:count-from-a-drawing).

## Hap vizatimin

1. Zgjidh {{ui:Hap planimetritë}} te grupi {{ui:Skedari}}, ose shtyp {{key:Mod+O}}.
2. Zgjidh skedarin DWG ose DXF. Mund të zgjedhësh disa, dhe PDF-të bashkë me to.
3. Zgjidh Hap.

Mund t'i lësh skedarët e vizatimit mbi TakeoffCraft, si PDF-të. Asgjë nuk ngarkohet: shfletuesi lexon skedarin në kompjuterin tënd.

TakeoffCraft lexon DWG nga AutoCAD 2000 deri 2018 dhe DXF ASCII nga R12 deri 2018. Refuzon një DXF binar (ruaje si ASCII, ose si DWG) dhe një skedar që nuk është asnjëri, dhe thotë pse. Një skedar i dëmtuar hapet me atë që mund të lexohej, dhe një mesazh e thotë këtë; numërimet e tij mund të jenë të paplota.

## Fletët

- **Model** është hapësira e modelit të vizatimit.
- **Çdo paraqitje** (skeda e hapësirës së letrës) është një fletë, e emërtuar sipas skedës së vet, sipas radhës së skedave. Një paraqitje shfaq modelin përmes portave të saj, siç do të printohej.

Zmadhimi, lëvizja e pamjes, kapja në vijat e vetë vizatimit, shenjat, shënimet, {{ui:Kalibro}} dhe të tjerat funksionojnë si në një PDF. Fletët e një vizatimi ruhen në llogaritje sipas emrit të skedarit dhe një shenje të përmbajtjes së tij, si një PDF: hap përsëri të njëjtin skedar dhe shenjat janë në fletët e tij.

## Shkalla

Një fletë fillon me shkallën që jep vizatimi:

- **Një paraqitje** merr shkallën e portës së saj më të madhe. Një shkallë si 1/2" = 1'-0" emërtohet si preseti që është; çdo tjetër shfaqet si "Nga porta e vizatimit: 1" = 2.5'". Nëse një paraqitje ka porta me shkallë të tjera, më e madhja e cakton shkallën e fletës: kontrollo të tjerat me {{ui:Kontrollo}}.
- **Model** merr njësitë e vizatimit (inç, milimetra, këmbë…) si shkallë: "Njësitë e vizatimit (inç)".
- **Një vizatim pa njësi** (vizatimi nuk thotë kurrë nëse një njësi është inç apo milimetër) nuk ka shkallë: fleta thotë "Pa shkallë", dhe matja mbi të refuzohet, si në një PDF pa shkallë. Numërimi nuk ka nevojë për shkallë. Jepja një me {{ui:Kalibro}}.

{{ui:Kalibro}}, {{ui:Kontrollo}} dhe lista {{ui:Të gatshme}} ndryshojnë shkallën në çdo kohë dhe kanë përparësi ndaj asaj të vizatimit. Lista e të gatshmeve është e fikur te Model, që nuk ka madhësi letre.

## Shtresat

{{ui:Shtresat}} në shiritin e fletës liston shtresat e vizatimit, me sa objekte ka secila në këtë fletë. Shtresat që skedari i fiki ose i ngriu fillojnë të fshehura. Hiq shenjën e një shtrese për ta fshehur, ose vër shenjën e një shtrese të fshehur për ta shfaqur: fleta vizatohet përsëri, dhe ajo që është fshehur del nga numërimet dhe nga objektet e ofruara për {{ui:Mat vizatimin}}, përveç nëse kërkon të numërohen edhe shtresat e fshehura. {{ui:Shfaq të gjitha}} shfaq çdo shtresë; {{ui:Kthehu te shtresat e skedarit}} zhbën ndryshimet e tua. Zgjedhjet e shtresave i takojnë kësaj sesioni, jo skedarit të llogaritjes.

## Vizatimet e lidhura (xref)

Një vizatim që lidh vizatime të tjera i shfaq aty ku janë futur. TakeoffCraft gjen një vizatim të lidhur midis **skedarëve të hapur**, sipas emrit të skedarit: hap vizatimin kryesor dhe vizatimin e lidhur bashkë (ose njëri pas tjetrit). Deri atëherë shiriti i statusit thotë sa vizatime të lidhura nuk u gjetën, çfarë vizatojnë ato mungon, dhe numërimet e thonë këtë.

## Kufizime

- Objektet që TakeoffCraft nuk i lexon ose nuk i vendos (objekte proxy, klasa të panjohura) listohen në dritaren e numërimit sipas llojit; nuk hidhen kurrë pa u thënë.
- Vizatimet shumë të mëdha vizatohen pjesërisht, dhe numërimet ndalen te një kufi, duke e thënë këtë. Hap në vend të kësaj një PDF printimi të atij vizatimi.
- Një vizatim vizatohet me të zezë dhe me ngjyrat e veta, të errësuara për letër të bardhë. Tabelat e stilit të printimit dhe caktimet e penave nuk aplikohen.
