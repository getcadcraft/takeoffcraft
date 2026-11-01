---
title: Fillimi me TakeoffCraft
summary: Çfarë bën TakeoffCraft, ku funksionon, dhe elementi yt i parë i matur dhe i çmuar nga një grup planimetrish PDF.
keywords: fillim, llogaritja e parë, fillim i shpejtë, hyrje, preventiv, llogaritje sasish, grup planimetrish, pdf
from: 3b9da1fb
---

TakeoffCraft mat grupe planimetrish, PDF-të dhe vizatimet DWG ose DXF, dhe i kthen matjet në një preventiv të çmuar. Ti hap skedarët (një vizatim merret direkt nga blloqet e tij: shih [Hap një vizatim DWG ose DXF](topic:open-a-drawing)), i jep çdo fletë një shkallë (një vizatim e ka shkallën e vet), bën **artikuj** (një lloj muri, një mbulesë dyshemeje, një pajisje), dhe klikon mbi fletët për t'i llogaritur. Sasitë, kostot dhe totali i punës përditësohen ndërsa punon. Mund ta eksportosh preventivin si fletë llogaritëse dhe një kopje të PDF-ve me llogaritjen tënde të vizatuar.

Nëse ke bërë llogaritje sasish në programe të tjera, lexo më pas [Të vish nga programe të tjera llogaritjeje](topic:coming-from). Disa gjëra funksionojnë ndryshe këtu.

## Ku funksionon

TakeoffCraft funksionon në shfletuesin tënd të internetit. Hap TakeoffCraft dhe ekrani është gati menjëherë; nuk ka asgjë për të instaluar.

- **PDF-të e tua qëndrojnë në kompjuterin tënd.** Hapen nga shfletuesi dhe nuk ngarkohen kurrë. Ruajtja është një shkarkim.
- Funksionon në Chrome, Edge, Firefox dhe Safari të tanishme. Shih [Shfletuesit dhe kompjuterët](common:browsers).
- Funksionon pa lidhje interneti pasi zgjedh {{ui:Save for offline}} në shiritin e aplikacionit dhe shfaq {{ui:Offline ready}}. Shih [Puna jashtë linje](common:offline).
- Ruajtja në cloud nuk është e disponueshme ende. Për aplikacion desktop, TakeoffCraft vjen në CadCraft Studio, me shtatë aplikacionet e tjera.

## Llogaritja jote e parë në dhjetë hapa

Ky udhëzues mat një lloj muri dhe ia cakton çmimin. Merr disa minuta me çdo planimetri që ke.

1. Zgjidh {{ui:Open plans}} te grupi {{ui:File}} i shiritit të veglave (ose shtyp {{key:Mod+O}}), zgjidh një ose më shumë PDF dhe zgjidh Hap. Mund t'i lësh PDF-të kudo në faqe.
   Fletët shfaqen majtas dhe fleta e parë hapet në mes.
2. Gjej shkallën e printuar të fletës te blloku i titullit ose nën titullin e vizatimit.
3. Hap listën {{ui:Preset}} te grupi {{ui:Scale}} dhe zgjidh atë shkallë, për shembull `1/4" = 1'-0"`.
   Shiriti në fund të fletës tani shkruan "Shkallë 1/4" = 1'-0"".
4. Zgjidh {{ui:Check}} (ose shtyp {{key:D}}) dhe kliko dy skajet e një përmase të printuar në vizatim.
   Leximi te shiriti i statusit në fund majtas duhet të përputhet me përmasën e printuar. Nëse nuk përputhet, shih [Vendos shkallën](topic:set-the-scale).
5. Te paneli {{ui:Items}} djathtas, zgjidh {{ui:New item}}, shkruaj një emër si `Interior wall type A`, lëre llojin te {{ui:Linear (length)}}, dhe zgjidh {{ui:Add}}.
6. Zgjidh {{ui:Linear}} te shiriti i veglave (ose shtyp {{key:L}}).
7. Kliko fillimin e një muri, pastaj çdo qoshe përgjatë tij. Kliko dy herë, shtyp {{key:Enter}} ose kliko me të djathtën për të përfunduar vijën.
   Vija vizatohet me ngjyrën e artikullit dhe gjatësia e saj shfaqet pranë artikullit.
8. Te redaktuesi i artikullit nën {{ui:Items}}, shkruaj `9'-0"` te {{ui:Height}}, `0.85` te {{ui:Material $/LF}} dhe `1.20` te {{ui:Labor $/LF}}.
   Tabela {{ui:Quantities}} në fund tregon gjatësinë, kostot e plota të materialit dhe punës, dhe {{ui:Job total}}.
9. Zgjidh {{ui:Save takeoff}} (ose shtyp {{key:Mod+S}}).
   Shfletuesi shkarkon një skedar `.takeoff.json`. Ai mban artikujt, shkallët dhe shenjat e tua, dhe hapet sërish mbi të njëjtat PDF.
10. Hap menynë {{ui:Export}} te shiriti i veglave dhe zgjidh {{ui:XLSX}} për të shkarkuar preventivin si fletë llogaritëse.

:::tip
Shtyp {{key:Esc}} për të ndaluar çfarëdo që po bën dhe për t'u kthyer te veglja {{ui:Select}}. {{key:Mod+Z}} zhbën çdo ndryshim.
:::

## Çfarë të lexosh më pas

- [Ekrani i TakeoffCraft](topic:workspace) emëron çdo pjesë të dritares.
- [Fillo një llogaritje dhe hap një grup planimetrish](topic:open-plan-set) trajton disa PDF dhe listën e fletëve.
- [Krijo artikuj llogaritjeje](topic:create-items) shpjegon llojet, njësitë, humbjen dhe normat.
- [Montimet dhe formulat](topic:assemblies) e kthen një matje në kolona, fletë dërrase e më shumë.
- [Tastiera dhe miu](topic:keyboard) liston çdo tast.
