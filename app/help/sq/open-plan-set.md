---
title: Fillo një llogaritje dhe hap një grup planimetrish
summary: Hap një ose disa PDF si grup planimetrish, gjej rrugën nëpër fletët dhe lëviz mes tyre.
keywords: hap, grup planimetrish, disa pdf, skedarë të shumtë, fletë, vizatime, etiketa faqesh, listë fletësh, navigo, lësho, dorëzim, hap në një aplikacion tjetër, shënim
from: ed434468
---

Një grup planimetrish shpesh është disa PDF: arkitekturore, strukturore, mekanike. TakeoffCraft i hap njëra pranë tjetrës si një listë të vetme fletësh, dhe një llogaritje mund t'i mbulojë të gjitha.

## Hap PDF-të

1. Zgjidh {{ui:Hap planimetritë}} te grupi {{ui:Skedari}}, ose shtyp {{key:Mod+O}}. (Stilet e tjera të menusë e quajnë {{ui:Hap PDF-et…}}.)
2. Te dritarja e skedarëve, zgjidh çdo PDF të grupit. Mbaj të shtypur {{pick:mac=Command|windows=Ctrl|linux=Ctrl}} për të zgjedhur disa, ose {{key:Shift}} për të zgjedhur një interval.
3. Zgjidh Hap.
   Një mesazh "Po hapet (emri)…" shfaqet ndërsa lexohet çdo skedar. Pastaj çdo faqe shfaqet te {{ui:Fletët}}, dhe hapet faqja e parë e PDF-së së parë të re.

Mund t'i tërheqësh PDF-et nga {{pick:mac=Finder|windows=Eksploruesi i skedarëve|linux=menaxheri juaj i skedarëve}} dhe t'i lësh kudo mbi TakeoffCraft. Një kornizë "Lësho PDF, vizatime DWG ose DXF, ose një .takeoff.json" shfaqet ndërsa tërheq.

Për të shtuar më vonë PDF të tjera, bëj të njëjtën gjë përsëri. PDF-të që janë hapur tashmë kapërcehen.

Ekrani i fillimit liston gjithashtu PDF-të dhe llogaritjet që hape së fundi, në shfletuesit që lejojnë një faqe të hapë përsëri një skedar (Chrome dhe Edge). Kliko një prej tyre për ta hapur; shfletuesi mund të kërkojë leje më parë. Shih [Skedarët e tu](common:your-files).

:::note
Asgjë nuk ngarkohet. Shfletuesi i lexon PDF-të në kompjuterin tënd, dhe ato zhduken nga TakeoffCraft kur mbyll skedën ose zgjedh {{ui:E re}}.
:::

## Vizatimet përkrah PDF-ve

{{ui:Hap planimetritë}} pranon gjithashtu vizatime DWG dhe DXF, vetëm ose bashkë me PDF-të: hapësira e modelit dhe paraqitjet e çdo vizatimi bëhen fletë në të njëjtën listë. Shih [Hap një vizatim DWG ose DXF](topic:open-a-drawing), pastaj [Numëro nga një vizatim](topic:count-from-a-drawing).

## Një PDF i dorëzuar nga një aplikacion tjetër

Një aplikacion tjetër i familjes mund të të japë PDF-në që ka hapur: hap TakeoffCraft në një skedë të re dhe PDF-ja hapet atje, sikur ta kishe lëshuar. Shiriti i statusit shkruan "U hap (emri), i dorëzuar nga (aplikacioni). Skedari origjinal është i pandryshuar." Asgjë nuk ngarkohet; skedari kalon nëpër hapësirën e ruajtjes së këtij shfletuesi dhe zhduket prej saj sapo hapet.

Nëse shiriti i statusit thotë se PDF-ja "nuk arriti", skeda priti shumë, ose PDF-ja ishte hapur tashmë në një skedë tjetër: hap me {{ui:Hap planimetritë}}.

Në drejtimin tjetër, kur MarkupCraft punon aty ku je dhe mund të pranojë një skedar, shiriti i fletës nën vizatim ka një buton {{ui:MarkupCraft}}: hap PDF-në e fletës në ekran në MarkupCraft, në një skedë të re, për ta rishikuar dhe shënuar.

## Gjej një fletë

- Lëviz listën {{ui:Fletët}} në të majtë dhe kliko një fletë.
- Shkruaj te **Kërko fletët**, lart në listë, për të filtruar sipas numrit të fletës, emrit të skedarit ose etiketës së faqes. Numëruesi pranë {{ui:Fletët}} shfaq "3 nga 40" ndërsa filtri është aktiv.
- Shtyp {{key:PageDown}} për fletën e radhës dhe {{key:PageUp}} për të mëparshmen. Ato ndjekin listën ashtu si është filtruar.

:::mac
Në një tastierë Mac pa tastet Page Up dhe Page Down, shtyp fn me shigjetën lart ose poshtë.
:::

## Si emërtohen fletët

- Një faqe që PDF-ja i jep një etiketë, si `A-101`, emërtohet me atë etiketë.
- Një faqe pa etiketë (ose me një etiketë që është vetëm numri i faqes) emërtohet "(emri i skedarit), faqja (n)".
- Me disa PDF të hapura, fletët me etiketë mbajnë edhe emrin e skedarit: "A-101 — Arkitekturore".

Emrat e fletëve nuk mund të shkruhen me dorë ende.

## Shiko rreth një fletë

- Rrotullo rrotëzën e miut për të zmadhuar te treguesi.
- Tërhiq me butonin e majtë ose të mesit për të lëvizur pamjen. Me {{ui:Numërim automatik}}, ose kur fillon te këndi i një shenje, mbaj {{key:Space}} ndërsa tërheq, ose tërhiq me butonin e mesit.
- Shtyp {{key:F}} ose zgjidh {{ui:Përshtat faqen}} për të parë tërë fletën; {{key:W}} ose {{ui:Përshtat gjerësinë}} e përshtat gjerësinë e saj.
- Shtyp {{key:Plus}} ose {{key:=}} për të zmadhuar dhe {{key:Minus}} për të zvogëluar, rreth mesit të pamjes.

Çdo fletë mban zmadhimin dhe pozicionin e vet për sa kohë është e hapur.

## Më tej

Para se të matësh një fletë, i duhet një shkallë: [Cakto shkallën](topic:set-the-scale).
