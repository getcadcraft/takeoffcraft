---
title: Kontrollo stokun e furnizuesit dhe kohët e pritjes
summary: Shtoni listën e stokut të një furnizuesi (CSV ose fletëllogaritës) dhe TakeoffCraft kontrollon ndaj saj atë që kërkon llogaritja, me humbjen: sa ka në stok dhe sa zgjat pritja. Mungesat dhe pritjet e gjata shfaqen te panelin e Problemeve.
keywords: furnizues, stok, në stok, kohë pritjeje, disponueshmëri, mungesë, porosi e mbetur, lista e porosisë, csv, sku, shitës, materiale, furnizimi, probleme
from: f11160fb
---

{{ui:Furnizimi}} në shiritin e veglave (kamioni) kontrollon atë që kërkon llogaritja juaj ndaj listës së stokut të një furnizuesi. Rreshtat e furnizuesit që kanë rëndësi mbahen në skedarin e vetë llogaritjes. Asgjë nuk dërgohet askund dhe asnjë furnizues nuk pyetet: ju sillni skedarin.

## Skedari

Një skedar CSV me rresht titujsh. Duhet një kolonë emri ose SKU dhe një kolonë stoku ose kohe pritjeje. Këta tituj njihen (në çdo renditje, pa dallim shkronjash): Item, Name, Description ose Product; SKU, Part ose Item #; In stock, On hand, Available ose Quantity; Lead time ose Delivery days; Unit ose UOM; Price ose Cost; Supplier ose Vendor.

- Stoku mund të jetë një numër (1,200), "In stock" ose "Out of stock".
- Një kohë pritjeje mund të jetë "5 days", "2 weeks", "2-3 weeks" (përdoret më e gjata), "3 months", "same day" ose "backorder". Një numër i thjeshtë është në njësinë e titullit (ditë, përveç nëse titulli thotë javë ose muaj).
- Skedarët e Excel nuk lexohen: ruajeni fletën si CSV së pari.

## Kontrolloni llogaritjen

1. Zgjidhni {{ui:Furnizimi}}, pastaj {{ui:Shto një skedar furnizuesi…}} dhe zgjidhni CSV-në. Shtoni më shumë se një: deri në pesë skedarë, gjithsej 2,000 rreshta të mbajtur, ata që përputhen me artikujt tuaj së pari.
2. Çdo artikull, kusht i dytë dhe pjesë montimi me sasi përputhet me një rresht sipas emrit, ose sipas SKU-së në emrin e tij. Një emër i ngjashëm (një brenda tjetrit) përdoret kur nuk ka një të saktë, dhe kjo thuhet.
3. Nën {{ui:Çfarë kërkon llogaritja}}, më të shkurtrat dalin të parat: "Short by 120 EA", "Lead time 21 days", "On backorder", "Unit differs", "No stock figure" ose "In stock". Nevoja përfshin humbjen. Një njësi furnizuesi që nuk është ajo e vlerësimit (një ton kundrejt një këmbe) raportohet dhe nuk krahasohet kurrë. Çdo rresht ka {{ui:Përzgjidh zërin}}, që ju çon te artikulli.
4. Vendosni {{ui:Afati më i gjatë i pranueshëm (ditë)}} (parazgjedhur 14). Një artikull që nuk është në stok dhe pret më gjatë se kaq shënohet, dhe përmbledhja emëron pritjen më të gjatë që ka rëndësi.
5. {{ui:Lista e porosisë (CSV)}} shkarkon artikujt e shkurtër me sasinë që mungon, furnizuesin dhe kohën e pritjes. {{ui:Lëre jashtë}} heq një nevojë nga kontrolli (është një hap zhbërjeje).

## Skedarët e fletëllogaritësit dhe Biblioteka e çmimeve

Lista e një furnizuesi mund të jetë një fletëllogaritës Excel (.xlsx) po aq sa një CSV: lexohet fleta e parë, me të njëjtat emra kolonash. Formulat nuk ekzekutohen; lexohet vlera që mban skedari.

Pasi shtohet një skedar me çmime, {{ui:Çmimet në Bibliotekë}} në dialog vendos çmimin e materialit të çdo hyrjeje të [Bibliotekës](topic:price-library) që skedari e çmon: të njëjtin emër dhe një njësi që është e njëjta (ose nuk është thënë). Puna, humbja, lartësia dhe montimet mbeten ashtu si janë, dhe shënimi i hyrjes thotë nga cili skedar erdhi çmimi. Një hyrje në metra nuk çmohet nga një listë në këmbë, dhe një hyrje pa emër të përputhshëm lihet vetëm; rreshti i statusit thotë sa u kapërcyen për shkak të njësisë. Rivlerësoni nga Biblioteka për t'i sjellë çmimet e reja në këtë llogaritje.

## Në panelin e Problemeve

Një mungesë është një paralajmërim dhe një pritje e gjatë është një shënim, në panelin e përbashkët të Problemeve ("Stoku i furnizuesit"), kështu që qëndrojnë bashkë me çdo kontroll tjetër. Mund të pranoni një nga ato me një arsye, dhe pranimi ruhet në llogaritje.

## Me asistentin tuaj

Nëse lejoni asistentë te Cilësimet, ata mund ta lexojnë kontrollin (supply_check). Shtimi i një skedari furnizuesi mbetet detyrë juaja.

## Gjëra që duhen ditur

Shifrat e stokut janë aq të përditësuara sa është skedari që shtoni. Shtojeni përsëri skedarin për ta rifreskuar: një skedar me të njëjtin emër zëvendëson të mëparshmin.
