---
title: Stillingar TakeoffCraft
summary: Sýndu tommur niður í 1/16, 1/8 eða 1/4, byrjaðu nýja liði með úrgangshlutfalli, veldu hvar renna sjálfvirkrar talningar byrjar, smelltu á línur teikningarinnar eða í 45° án þess að halda Shift, stilltu hversu breið hurð fylling rýmis lokar, og veldu hornvísi 3D-athugunarsýnarinnar.
keywords: stillingar, kjörstillingar, valkostir, nákvæmni, brot, tommur, námundun, úrgangur, sjálfgefinn úrgangur, sjálfvirk talning, þröskuldur, samsvörun, renna, smella, 45, horn, shift, útsýniskubbur, áskerfistákn, hornvísir, 3d
from: bca3f0ed
---

Opnaðu {{ui:Settings}} með gírnum í forritastikunni eða {{key:Mod+,}}. Fyrsti flipinn, {{ui:TakeoffCraft}}, geymir stillingarnar sem tilheyra þessu forriti; {{ui:General}} geymir þær sem öll CadCraft-forrit deila (þema, spjöld, tækjastika). Stillingar TakeoffCraft eru aðeins í forritinu: þú breytir þeim hér, og þessi vafri man þær. {{ui:Endurstilla stillingar TakeoffCraft}} setur þær aftur í upphafsstöðu.

## Fet og tommur

Sýndu lengdir að næsta **1/16"** (upphafsgildi), **1/8"** eða **1/4"**. Þetta breytir því hvernig lengdir lesast á blaðinu, í spjöldunum, í magntölunum og í stöðustikunni.

Aðeins birtingin er námunduð. Magntölur, kostnaður og útflutningur eru reiknaðir út frá nákvæmum lengdum, og útflutningurinn sýnir alltaf 1/16".

## Úrgangur til að byrja með

Úrgangshlutfallið sem hver nýr liður byrjar með: 0% (upphafsgildi), 2%, 3%, 5%, 7.5%, 10%, 15% eða 20%. Þú getur samt slegið inn annan úrgang fyrir hvern lið, í ritlinum fyrir liðinn eða beint í magntöflunni. Liðir sem þú átt nú þegar halda sínum eigin úrgangi.

## Sjálfvirk talning: hvar samsvörunarrennan byrjar

Hvar renna {{ui:Match}} situr þegar [sjálfvirk talning](topic:auto-count) leit lýkur, frá 50% til 95%; 75% er upphafsgildið. Lægra býður upp á fleiri líkar sem þú getur hafnað; hærra býður upp á færri. Þú getur samt fært rennuna meðan á hverri yfirferð stendur.

## Smella á línur teikningarinnar

Kveikt í upphafi. Meðan þú mælir eða kvarðar smellur punktur nálægt línu PDF-skjalsins á endann hennar, miðpunkt, skurðpunkt eða næsta punkt á henni. {{key:F3}} og {{ui:Snap}} í stöðustikunni kveikja og slökkva líka á því. Meira: [Smelltu á línur teikningarinnar](topic:snap-to-the-drawing).

## Fylling rýmis: hversu breitt op hún lokar

{{ui:Room fill closes openings up to}} stillir hversu breitt hurðarop eða bil verkfærið {{ui:Room}} telur lokað: 3'-0" til 8'-0", 4'-0" í upphafi. Breiðara en breiðasta hurðin þín lætur herbergi renna inn í það næsta; mjórra en hurð skilur herbergið eftir opið. Sjá [Fylla herbergi með einum smelli](topic:measure-areas#fill-a-room-with-one-click).

## Smella í 45° án þess að halda Shift

Slökkt í upphafi. Þegar það er kveikt fara línur, útlínur, útskurðir og dregin horn í 0°, 45°, 90° eða 135° frá síðasta punkti án þess að halda {{key:Shift}}; haltu {{key:Shift}} til að smella í hvaða horni sem er. Stöðustikan segir þá „Smellir í 45°; Shift frjálsar hornið“. Punkturinn sem þú smellir á bogaferli og hringir eru aldrei smelltir; endi bogans er það.

## Stærð talningarmerkis

Hversu stórir talningarpunktarnir eru: {{ui:Extra small}}, {{ui:Small}}, {{ui:Medium}} (upphafsgildið: stærðin sem punktarnir höfðu alltaf) eða {{ui:Large}}. Stærðin helst á skjánum við öll aðdráttarstig, og PDF-skjalið með merkjunum teiknar hvern punkt í sömu stærð á pappír, hver sem blaðstærðin er, þannig að PDF við 100% lítur út eins og skjárinn. Meira: [Telja með hendi](topic:count-by-hand#dot-size-on-screen-and-in-the-pdf).

## Hornvísir

Eingöngu fyrir [3D-athugunarsýnina](topic:check-in-3d): {{ui:View cube}} (upphafsgildið: teningur efst til hægri sem þú smellir á, dregur og snýrð), {{ui:Axis icon}} (lítið X, Y, Z-merki neðst til hægri) eða {{ui:None}}. Það breytist strax og er geymt í þessum vafra. Flata blaðið sýnir aldrei neitt af þessu.

## Slóðatól: stærsta bilið sem það tengir

{{ui:Slóðatól: stærsta bil til að tengja}} er hversu langt tvö línuendar geta verið í sundur og samt talist ein slóð, í PDF-punktum (0.05 til 60; 1.5 í upphafi). Línur teikningar stoppa oft örlítið stutt hver frá annarri. Stærra tengir meira; minna heldur línunum aðskildum. {{key:[}} og {{key:]}} breyta því meðan þú velur, og þessi reitur fylgir. Sjá [Veldu línurnar](topic:pick-the-lines).
