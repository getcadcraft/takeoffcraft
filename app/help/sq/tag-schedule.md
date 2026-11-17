---
title: Sillni një tabelë etiketash si sasi
summary: Një tabelë etiketash e eksportuar nga modeli i ndërtesës (CSV) bëhet sasi të tipizuara në llogaritje, një për çdo etiketë, kështu që numrat dhe sipërfaqet e modelit qëndrojnë pranë asaj që matët ju.
keywords: etiketa, tabelë etiketash, model ndërtese, bimcraft, ifc, sasi, csv, tabelë, import, sasi e tipizuar
from: a60c19b6
---

{{ui:Etiketat}} në shiritin e veglave sjell një tabelë etiketash që BimCraft e ka ruajtur si skedar CSV. Çdo etiketë e veçantë bëhet një sasi e tipizuar, e të njëjtit lloj me prerjen dhe mbushjen e CivilCraft.

1. Në BimCraft, bëni tabelën e etiketave që dëshironi dhe ruajeni si CSV.
2. Zgjidhni {{ui:Etiketat}} dhe zgjidhni skedarin.
3. Thoni cila kolonë emëron rreshtin ({{ui:Emëro rreshtin sipas}}, zakonisht etiketa) dhe cila mban numrin ({{ui:Sasia nga}}). Me {{ui:Numëro rreshtat}} çdo rresht numërohet si një.
4. Zgjidhni njësinë. Një gjatësi në milimetra bëhet metra me {{ui:Shumëzo me}} 0.001.
5. {{ui:Shto sasitë}}.

Rreshtat me të njëjtën etiketë mblidhen. Një qelizë që nuk është numër lihet jashtë dhe numërohet në përmbledhje. Sjellja përsëri e së njëjtës tabelë përditëson sasitë që keni tashmë në vend që të shtojë të tjera; emrat, normat dhe humbjet e tyre mbeten të juajat.

## Gjëra që duhen ditur

Një sasi e tipizuar nuk matet në një fletë, kështu që nuk ka shenja. Asgjë nuk dërgohet askund; skedari lexohet këtu.
