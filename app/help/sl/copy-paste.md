---
title: Kopiranje, prilepljanje in podvajanje oznak
summary: Kopirajte oznake s postavkami, prilepite jih tja, kamor kliknete, ali na isto mesto na drugem listu, podvojite, izrežite, izbrišite in izberite vse, vsako z enim korakom razveljavitve.
keywords: kopiraj, prilepi, izreži, podvoji, prilepi na isto mesto, odložišče, izberi vse, prekliči izbor, več oznak, tipična etaža, ponovi, isti načrt, drug list, kopiraj postavko, podvoji postavko
from: e20e9024
---

Skupina {{ui:Edit}} na orodni vrstici vsebuje {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} in {{ui:Paste}}. Njen meni {{ui:More}} ima ostalo, vsako s svojo tipko: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} in {{ui:Select none}}. Vsak od njih je en korak razveljavitve s {{key:Mod+Z}}.

## Izberite oznake

1. Izberite {{ui:Select}} ({{key:V}}) in kliknite oznako.
2. Držite {{key:Shift}} in kliknite še oznake, da jih dodate. {{key:Shift}} + klik na izbrano oznako jo spet odstrani iz izbora.
3. Ali pritisnite {{key:Mod+A}} ({{ui:Select all}}), da izberete vse oznake na odprtem listu.

Pri več izbranih oznakah desna plošča prikaže **Izbrane oznake**: koliko je vsake postavke, z {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} in {{ui:Delete marks}}. Ročice oglišč se prikažejo samo, ko je izbrana ena oznaka. {{key:Esc}} ({{ui:Select none}}) počisti izbor.

## Kopirajte in prilepite, kamor kliknete

1. Izberite oznake in pritisnite {{key:Mod+C}} ({{ui:Copy}}). Oznake se kopirajo s svojimi postavkami, vključno s sestavom posamezne postavke, odpadkom in stroški.
2. Pojdite na list, kamor jih želite (lahko je isti list).
3. Pritisnite {{key:Mod+V}} ({{ui:Paste}}). Črtkana kopija sledi kazalcu.
4. Kliknite, kamor naj gre. Sredina kopiranih oznak pristane na kazalcu.

{{key:Esc}} prekliče in ne doda ničesar. Prilepljene oznake so potem izbrane, zato jih {{key:Delete}} ali {{key:Mod+Z}} spet odstrani.

V isti predizmeri gredo prilepljene oznake na **iste postavke**, njihove količine se torej prištejejo tem postavkam. V drugi predizmeri (drugi zavihek ali po {{ui:New}}) se uporabi postavka z istim imenom in vrsto; sicer se postavka doda s svojim sestavom. Če je ime zasedeno s postavko druge vrste, se dodana postavka imenuje „(ime) (kopija)“.

Prilepljene oznake gredo v območje ponudbe, izbrano na vrhu plošče {{ui:Items}} (ali v nobenega). Glejte [Območja ponudbe](topic:bid-areas).

## Prilepi na isto mesto

{{key:Mod+Shift+V}} ({{ui:Paste in place}}) postavi kopijo na točno isto mesto na odprtem listu, po njenem položaju na strani. Uporabite za tipično etažo: izmerite 2. nivo, kopirajte, odprite 3. nivo in prilepite na isto mesto.

Prilepi na isto mesto potrebuje list **iste velikosti** kot tistega, iz katerega ste kopirali. Na listu druge velikosti TakeoffCraft to sporoči in ničesar ne prilepi; namesto tega uporabite {{ui:Paste}} in kliknite. Na listu, iz katerega ste kopirali, kopija pristane na vrhu izvirnikov.

## Merilo mora ustrezati

Dolžine in površine so odvisne od merila lista. Odsek, ki meri 10' pri 1/4" = 1'-0", bi na listu pri 1/8" = 1'-0" meril 20'. Zato TakeoffCraft prilepi odseke in površine samo na list z **istim merilom** kot list, iz katerega so prišli, in to jasno pove, kadar ni tako:

- Odprt list še nima merila: najprej mu ga določite ([Nastavitev merila](topic:set-the-scale)), nato prilepite.
- Odprt list ima drugo merilo: sporočilo navede obe merili. Prilepite na list z istim merilom.
- Štetja ne potrebujejo merila: kopirana štetja se prilepijo kamorkoli.

## Podvajanje

{{key:Mod+D}} ({{ui:Duplicate}}) kopira izbrane oznake in takoj postavi kopijo na kazalec; kliknite, kamor naj gre. Ničesar se ne doda, dokler ne kliknete, in {{key:Esc}} ne pusti ničesar. Podvajanje ne spremeni tega, kar {{ui:Paste}} prilepi.

## Izrezovanje in brisanje

- {{key:Mod+X}} ({{ui:Cut}}) kopira izbrane oznake in jih izbriše. Prilepite jih tja, kamor sodijo, ali razveljavite izrezovanje.
- {{key:Delete}} ali {{key:Backspace}} ({{ui:Delete}}) izbriše izbrane oznake, ne da bi jih kopirale.

## Kopiranje postavke

Urejevalnik postavk (pod **Postavke**) se konča z:

- {{ui:Copy item}}: kopira postavko s sestavom, odpadkom in stroški, brez oznak. {{ui:Paste}} nato doda njeno kopijo tej predizmeri ali drugi.
- {{ui:Duplicate item}}: takoj doda kopijo z imenom „(ime) (kopija)“.

:::tip
Kopija ostane na tem računalniku: hrani se v tem zavihku in v shrambi brskalnika, tako da jo lahko prilepi drug zavihek TakeoffCraft. Ničesar se ne naloži, sistemsko odložišče pa se ne uporablja, zato oznak ne morete prilepiti v druge programe.
:::

:::note
Kopija prihaja z enega lista naenkrat. Oznake se prilepijo take, kakršne so: obračanje ali zrcaljenje kopije še ni na voljo.
:::
