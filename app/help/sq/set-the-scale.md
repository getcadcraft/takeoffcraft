---
title: Vendos shkallën
summary: Jep çdo fletë një shkallë me një të gatshme ose duke kalibruar mbi një përmasë të njohur, kontrollo, dhe kupto pse fletët pa shkallë lihen jashtë totaleve.
keywords: zbulo shkallën, lexo shkallën, shkallë nga teksti, të gjitha fletët, shkallë, kalibro, të gatshme, kontrollo shkallën, verifiko, përmasë e njohur, pa shkallë, s'ka shkallë, raport, cakto shkallën
from: 8f0148e6
---

Çdo fletë ka shkallën e vet. Ti e cakton, ose lë TakeoffCraft ta lexojë nga teksti i fletëve (më poshtë), dhe e kontrollon. Derisa një fletë ta ketë, {{ui:Lineare}}, {{ui:Sipërfaqe}}, {{ui:Rreth}} dhe {{ui:Prerje}} refuzojnë të matin mbi të. {{ui:Numëro}} dhe {{ui:Numërim automatik}} funksionojnë pa shkallë.

Lista e fletëve tregon shkallën e çdo fletë, ose **Pa shkallë**. Shiriti nën fletën e hapur thotë të njëjtën gjë.

## Përdor një të gatshme (kur PDF është printuar në madhësi të plotë)

1. Hap fletën.
2. Hap listën {{ui:Të gatshme}} te grupi {{ui:Shkallë}}.
3. Zgjidh shkallën e printuar në vizatim, për shembull `1/8" = 1'-0"` nën Arkitekturore.
   Shiriti i statusit thotë "Shkalla për këtë fletë: 1/8" = 1'-0"."
4. Kontrollo (më poshtë).

Një e gatshme supozon se PDF-ja është madhësia reale e letrës për të cilën u bë vizatimi. Nëse dikush e bëri PDF-në me "përshtat në faqe", ose është një grup gjysmë madhësie, e gatshmja është e gabuar. Kalibro në vend të kësaj.

Lista e plotë është te [Shkallët e gatshme](topic:scale-presets).

## Lexo shkallët nga teksti i fletëve

Shumica e vizatimeve e thonë shkallën e tyre: `SCALE: 1/4" = 1'-0"` te blloku i titullit, `1:100` nën një pamje. TakeoffCraft mund ta lexojë dhe ta vendosë çdo fletë njëherësh.

1. Hap listën {{ui:Të gatshme}} dhe zgjidh {{ui:Nga teksti i fletëve…}} (në krye).
2. Lista tregon çdo fletë: shkallën e saj tani, dhe çfarë thotë teksti i saj — **Thotë 1/4" = 1'-0"**, **Asnjë shkallë në tekstin e saj**, ose **Thotë mos të shkallëzohet** (NTS).
3. Fletët pa shkallë që thonë një shkallë shënohen. Shëno ose hiq shënimin e çdo fletë, pastaj zgjidh {{ui:Cakto shkallët e shënuara}}. Një {{key:Mod+Z}} i kthen të gjitha mbrapsht.
4. Kontrollo një përmasë në çdo fletë me {{ui:Kontrollo}} (më poshtë): një e gatshme është e saktë vetëm kur PDF është printuar në madhësi të plotë.

Lexon shënimet arkitekturore (`3/16" = 1'-0"`, `1 1/2" = 1'-0"`), inxhinierike (`1" = 20'`) dhe metrike (`1:50`) që përputhen me një [të gatshme](topic:scale-presets). Kur një fletë thotë më shumë se një shkallë (një plan me detaje të zmadhuara), merr atë që thotë më shpesh, dhe ajo e shkruar pas fjalës SCALE numërohet dy herë; të tjerat shfaqen me të kuqe që t'i kontrollosh. Një fletë e skanuar nuk ka tekst: vendose shkallën me dorë.

## Kalibro mbi një përmasë të njohur

Përdore këtë kur nuk ka shkallë të printuar që të besosh, grupi u ndryshua madhësinë, ose fleta thotë "jo në shkallë" por ka përmasa.

1. Hap fletën dhe zmadho një përmasë të gjatë që njeh, si distanca e një vije rrjeti ose përmasa e përgjithshme e ndërtesës. Sa më e gjatë, aq më e saktë.
2. Zgjidh {{ui:Kalibro}} te grupi {{ui:Shkallë}}, ose shtyp {{key:K}}.
3. Kliko njërin skaj të përmasës. Zmadho te secili skaj për saktësi; mund të zmadhosh dhe lëvizësh pamjen mes klikimeve.
4. Kliko skajin tjetër. Mbaj {{key:Shift}} për ta mbajtur vijën në 0°, 45° ose 90°.
   Hapet dialogu **Kalibro këtë fletë**.
5. Shkruaj distancën reale te **Distanca reale**, për shembull `24'-6 1/2"`, `24.5` (këmbë dhjetore), `30"` ose `7.5 m`. Shih [Hyrja e gjatësisë, normës dhe përqindjes](topic:entry-formats).
6. Zgjidh {{ui:Vendos shkallën}}.
   Shiriti i statusit tregon shkallën si "1" = (n)'", dhe kur është brenda 0.5% të një të gatshme thotë cilën, për shembull "që përputhet me 1/4" = 1'-0" (zgjidh atë të gatshme për një shkallë të saktë)".
   TakeoffCraft kthehet te mjeti {{ui:Përzgjidh}}.

Kur kalibrimi përputhet me një të gatshme, zgjedhja e asaj të gatshme jep një shkallë të saktë në vend të një që varet nga vendi ku klikove.

## Kontrollo shkallën

Kontrollo gjithmonë një shkallë të re mbi një përmasë të dytë.

1. Zgjidh {{ui:Kontrollo}} te grupi {{ui:Shkallë}}, ose shtyp {{key:D}}.
2. Kliko të dy skajet e një përmase të printuar në vizatim.
   Shiriti i statusit tregon "Kontroll: 12'-6"" me të njëjtën gjatësi në këmbë dhjetore dhe metra, dhe vija e kontrollit mbetet në fletë me gjatësinë e vet.
3. Krahasoje me përmasën e printuar. Nëse nuk përputhet, kalibro mbi një përmasë më të gjatë.

Shtyp {{key:Esc}} për të pastruar vijën e kontrollit.

## Ndrysho një shkallë

Zgjidh një të gatshme tjetër ose kalibro përsëri. Nëse fleta ka tashmë matje, TakeoffCraft pyet **Të ndryshohet shkalla e kësaj fletë?** dhe thotë sa matje do të rimaten. Zgjidh {{ui:Ndrysho shkallën}}. Çdo vijë dhe sipërfaqe në fletë rimatet me shkallën e re. Mund ta zhbësh me {{key:Mod+Z}}.

## Pse fletët pa shkallë nuk numërohen si zero

Një shenjë në një fletë pa shkallë nuk ka gjatësi ose sipërfaqe reale. TakeoffCraft nuk e numëron kurrë si zero, sepse kjo do ta bënte preventivin tënd të ulët pa u vënë re. Në vend të kësaj:

- i lë ato shenja jashtë totaleve,
- shfaq "+(n) pa shkallë" pranë artikullit te {{ui:Sasitë}},
- shfaq "E papërfunduar: (n) shënime në fleta pa shkallë (jo në totale)" te koka e tabelës,
- e shkruan numërimin te kolona e shënimeve të eksportit në fletëllogaritës.

Kjo mund të ndodhë kur hap një projekt ku shkallët nuk u vendosën kurrë. Jepi fletës një shkallë dhe shenjat numërohen menjëherë. Shenjat e numërimit numërohen gjithmonë; ato nuk kanë nevojë për shkallë.

## Këshilla

- Vendos shkallën te çdo fletë që do të matësh para se të fillosh. Skano listën e fletëve për **Pa shkallë** për të gjetur ato që mbetën (kutia e kërkimit shikon emrat e fletëve, jo shkallët).
- Detajet dhe planet e zmadhuara në të njëjtën fletë shpesh përdorin shkallë tjetër. TakeoffCraft ka një shkallë për fletë; shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
- Vizatime metrike: zgjidh një të gatshme metrike si `1:100`, ose kalibro me një distancë metrike si `6000 mm`.
