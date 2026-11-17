---
title: Ruaj dhe rihap një llogari
summary: Ruaje llogarinë si projekt .takeoff.json, rihape me të njëjtat PDF, dhe çfarë ndodh kur një PDF mungon ose ka ndryshuar.
keywords: llogari brenda pdf, ngul, bashkëngjitje, ruaj, hap, rihap, projekt, takeoff.json, vazhdo, PDF i rishikuar, PDF i ndryshuar, PDF që mungon, kopje rezervë, ruajtje automatike, rikthe, rrëzim
from: bd5080a6
---

Një llogari ruhet si një skedar i vogël projekti, `(name).takeoff.json`. Ai mban artikujt, montimet, normat, shkallën e çdo fletë dhe çdo shenjë. Ai **nuk** mban PDF-të; i gjen përsëri sipas përmbajtjes së tyre.

## Ruaj

1. Zgjidh {{ui:Ruaj llogaritjen}} te grupi {{ui:Skedari}}, ose shtyp {{key:Mod+S}}.
   Shfletuesi yt shkarkon `(name).takeoff.json`. Shiriti i statusit thotë "U ruajt (name).takeoff.json. Hapet përsëri mbi të njëjtat PDF (përputhen sipas përmbajtjes)."
2. Vendose skedarin pranë PDF-ve të punës, që të qëndrojnë bashkë.

Çdo ruajtje shkarkon një skedar të ri. Shfletuesi mund ta emërtojë të dytin `(name) (1).takeoff.json`; mbaje më të riun.

Emri vjen nga PDF-ja e parë që hape në këtë llogari.

:::note
{{ui:Ruaj llogaritjen}} është akoma i vetmi mënyrë për ta mbajtur llogarinë si skedar. Ndërkohë që punon, TakeoffCraft mban gjithashtu një kopje rikthimi në këtë shfletues (shih më poshtë), dhe ruajtja në cloud nuk është e disponueshme ende. Nëse provon të mbyllësh skedën me ndryshime të paruajtura, shfletuesi pyet nëse do të largohesh.
:::

## Mbaje llogarinë brenda PDF-së

{{ui:Eksporto}} › {{ui:PDF me llogaritjen brenda}} shkarkon një kopje të çdo PDF të hapur, e emërtuar si `Plans (with takeoff).pdf`, që mban të gjithë llogarinë si bashkëngjitje: artikujt, shenjat, shkallët, zonat e ofertës, gjithçka që mban `.takeoff.json`. Faqet e saj nuk preken, kështu që duket dhe printohet si origjinali, dhe lexuesit e tjerë PDF e listojnë llogarinë te bashkëngjitjet e tyre.

Hape atë PDF në TakeoffCraft (çdo mënyrë që hap PDF-të) dhe ai pyet **Ky PDF ka brenda një llogari**: zgjidh {{ui:Hap llogaritjen}} për ta rikthyer, ose {{ui:Vetëm PDF-në}} për të hapur vetëm vizatimin. Kopja përfaqëson PDF-në nga e cila u krijua, kështu që një `.takeoff.json` i ruajtur nga njëra hapet në të dyja.

Me disa PDF, çdo kopje mban të gjithë llogarinë; hapi të gjitha së bashku. Ruajtja përsëri nga një kopje zëvendëson llogarinë brenda saj, nuk shton një të dytë. `.takeoff.json` është akoma skedari që duhet mbajtur: është i vogël, dhe është ai që shkruajnë ruajtja automatike dhe aplikacioni desktop.

## Nëse skeda ose shfletuesi ndalon

Disa sekonda pas çdo ndryshimi, TakeoffCraft mban një kopje të llogarisë në hapësirën e ruajtjes të këtij shfletuesi, bashkë me PDF-të e saj kur arrijnë deri në 64 MB ose më pak. Asgjë nuk ngarkohet. Kur ruan llogarinë, fillon një të re ose hap një projekt tjetër, kopja fshihet.

Nëse skeda rrëzohet, shfletuesi ose kompjuteri ndalon, ose del me ndryshime të paruajtura, herën tjetër që hap TakeoffCraft pyet **Rikthe punën tënde?** dhe liston llogarinë sipas emrit. Zgjidh **Rikthe** për ta marrë përsëri: artikujt, shenjat dhe shkallët kthehen, dhe PDF-të e tyre hapen përsëri nëse ishin ruajtur. Shiriti i statusit thotë "U rikthye (name). Nuk është ruajtur ende në skedar: Ruaj llogaritjen e mban." Kur PDF-të ishin shumë të mëdha për t'u ruajtur, hapi përsëri; shenjat shfaqen në fletët e tyre. Më shumë: [Rikthe punën tënde](common:recover).

## Rihap

1. Hap TakeoffCraft.
2. Lësho skedarin `.takeoff.json` dhe PDF-të e tij së bashku në faqe. Ose zgjidh {{ui:Hap planimetritë}} për PDF-të dhe {{ui:Hap llogaritjen}} për projektin, në çdo renditje.
   Shiriti i statusit thotë "U hap (name): 12 artikuj, 340 shenja." Çdo fletë rikthen shkallën e saj dhe shenjat shfaqen në fletët e tyre.

Renditja e PDF-ve nuk ka rëndësi, as emrat apo dosjet e tyre. TakeoffCraft njeh çdo PDF me një gjurmë të përmbajtjes së saj.

Nëse hap një projekt ndërkohë që llogaria aktuale ka ndryshime të paruajtura, TakeoffCraft pyet së pari: **Anulo**, **Hiq ndryshimet**, ose **Ruaj llogaritjen më parë**. Hapja e një projekti zëvendëson artikujt dhe shenjat aktuale; PDF-të që janë tashmë të hapura mbeten të hapura.

## Kur mungon një PDF

Nëse e hap projektin pa të gjitha PDF-të e tij, shiriti i statusit shton "Hap PDF-të e tij për të parë shenjat (listuar nën Fletët)." Nën listën e fletëve, një shënim thotë:

"Kjo llogari mbulon edhe PDF-të që nuk janë të hapura. Sasitë e tyre numërohen; hapi për të parë dhe redaktuar shenjat e tyre:"

dhe pas kësaj emrat e skedarëve dhe madhësitë. Shenjat e tyre akoma numërohen në çdo total dhe eksport, me shkallët me të cilat u matën. Hap ato PDF për të parë dhe redaktuar shenjat.

## Kur një PDF ka ndryshuar

Një PDF që është rishikuar, ose vetëm ruajtur përsëri nga një program tjetër, ka përmbajtje të ndryshme, pra është një **skedar tjetër** për TakeoffCraft, edhe me të njëjtin emër. Te shënimi nën listën e fletëve, një skedar i tillë thotë "një skedar me këtë emër është i hapur, por përmbajtja e tij ndryshon".

- Shenjat mbeten të lidhura me versionin e vjetër. Vazhdojnë të numërohen, në pozicionet dhe shkallët e vjetra.
- PDF-ja e rishikuar hapet si fletë të reja, pa shkallë dhe pa shenja.

Për ta zhvendosur llogarinë në rishikim, hap të dyja PDF-të dhe përdor {{ui:Krahaso}} te fleta e re: [Krahaso një fletë të rishikuar dhe zhvendos llogarinë](topic:compare-revisions).

## Skedar i dëmtuar ose i huaj

TakeoffCraft kontrollon çdo skedar projekti para se ta përdorë. Mesazhe që mund të shohësh:

- "(file) nuk është projekt TakeoffCraft (nuk është JSON i vlefshëm)."
- "Ky nuk është skedar projekti TakeoffCraft."
- "Ky projekt u ruajt nga një TakeoffCraft më i ri. Hape atje."
- "3 shenja u dëmtuan dhe u lanë jashtë." (pjesa tjetër hapet)

## Historiku i zhbërjeve

Historiku i zhbërjeve fillon nga e para kur hap një projekt. Ruajtja nuk e pastron.
