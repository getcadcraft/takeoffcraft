---
title: Verificarea extragerii în 3D
summary: Vedeți pereții, planșeele și numărările foii deschise stând pe desen, orbitați în jurul lor și faceți clic pe unul pentru a-i selecta marcajul.
keywords: png, imagine, poză, captură de ecran, suprapunere, etaje, niveluri, elevație, glb, gltf, export 3d, grosime perete, înălțime de bază, deschidere, cap de ușă, 3d, trei d, verificare, vizualizare, pereți, înălțime perete, planșeu, adâncime, volum, orbitare, model, selectare, izometric, perspectivă
from: fb16b4f7
---

Vizualizarea 3D este o verificare, nu un al doilea desen: așează extragerea foii pe ecran, ridicată chiar pe foaie, astfel încât un perete lipsă, o placă dublată sau o numărare rătăcită se vede dintr-o privire.

Înainte de a începe: foaia are nevoie de o scară ([Setarea scării](topic:set-the-scale)). Înălțimile și adâncimile cer picioare reale, deci pe o foaie fără scară {{ui:3D}} o spune și rămâne pe foaia plană.

## Deschiderea vizualizării 3D

1. Afișați foaia pe care vreți s-o verificați.
2. Alegeți {{ui:3D}} din bara care arată numele și scara foii sau apăsați {{key:3}}.
   Prima dată, vizualizarea 3D durează o clipă până se încarcă. Foaia este desenată pe sol, iar extragerea stă pe ea în culoarea fiecărui articol.
3. Ca să reveniți, alegeți din nou {{ui:3D}}, {{ui:Înapoi la foaie}} sau apăsați {{key:3}}. Alegerea unui instrument de desenare (Liniar, Arie, Numărare și altele) de asemenea revine, deoarece marcajele se desenează pe foaia plană.

Vizualizarea arată foaia pe ecran; schimbați foaia din lista foilor sau cu {{key:PageDown}} și {{key:PageUp}}, iar vizualizarea 3D o urmează. Ca să vedeți mai multe etaje deodată, suprapuneți-le (mai jos).

## Ce vedeți

| Marcaj | În 3D |
|---|---|
| Tronson liniar, articol cu înălțime | Un perete de acea înălțime de-a lungul tronsonului. Tronsoanele curbe urmează curba. |
| Tronson liniar, articol fără înălțime | O linie pe foaie. Dați articolului o înălțime sub **Articol** ca s-o ridicați. |
| Arie, articol cu adâncime | O placă de adâncimea aceea, cu decupajele deschise. |
| Arie, articol fără adâncime | O placă subțire de 2" ca să rămână vizibilă. |
| Numărare | O mică stâlpișoară pe fiecare punct numărat. |

Înălțimea este câmpul {{ui:Înălțime}} al articolului liniar, iar adâncimea câmpul {{ui:Adâncime}} al articolului de arie, sub **Articol** (vezi [Crearea articolelor de extragere](topic:create-items)). Schimbați-l și vizualizarea 3D se actualizează imediat. Nota de sub numele foii spune ce conține foaia, de exemplu „Această foaie în 3D: 2 pereți, 1 placă, 3 numărări”, și câte tronsoane sau arii nu au înălțime sau adâncime. Clicurile trec prin ea către vizualizare.

Cifrele nu se schimbă în 3D: aria unui perete este lungimea exactă înmulțită cu înălțimea, iar volumul unei plăci este aria netă (conturul minus decupajele, curbele exacte) înmulțită cu adâncimea. Curbele sunt desenate ca bucăți scurte drepte doar pe ecran.

## Privirea în jur

| Acțiune | Ce face |
|---|---|
| Trageți, sau trageți cu butonul din mijloc | Orbitează în jurul extragerii. |
| {{key:Shift}} + tragere, sau tragere cu butonul din dreapta | Panoramează. |
| Rotița mouse-ului | Mărește și micșorează la indicator. |
| Glisare cu două degete pe touchpad | Orbitează ({{key:Shift}} panoramează). Un ciupit mărește. |
| {{ui:Izometric}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Spate}}, {{ui:Stânga}}, {{ui:Dreapta}}, {{ui:Jos}} | Vederi standard, încadrate pe extragere. Vizualizarea 3D se deschide în {{ui:Izometric}}. |
| {{ui:Perspectivă}} | Perspectivă pornită sau oprită (paralelă când este oprită). |
| {{ui:Zoom extinderi}} sau {{key:F}} | Întreaga foaie. |
| {{ui:Foaie}} | Arată sau ascunde desenul de pe sol. |
| Cubul de vizualizare, sus dreapta | Faceți clic pe o față, muchie sau colț ca să priviți de acolo; trageți-l ca să orbitați; trageți inelul busolei ca să-l rotiți; butonul casă revine la {{ui:Izometric}}. |

Colțul arată un cub de vizualizare, o mică pictogramă cu axele X, Y, Z sau nimic: alegeți în {{ui:Setări}}, pe fila TakeoffCraft, sub **Indicator de colț** ([Setările TakeoffCraft](topic:settings)). Foaia plană nu are indicator de colț.

:::touch
Un deget orbitează; două degete ciupesc pentru mărire și se mută pentru panoramare. O atingere selectează.
:::

## Pereți cu grosime, bază și deschideri

Un articol liniar cu înălțime stă ca o fâșie subțire. Ca să-l vedeți ca pe un perete real, dați articolului forma sa sub **În 3D** în setările lui:

- **Grosimea peretelui** (8", 0.2 m): peretele devine un solid, centrat pe linia desenată, cu colțuri retezate la 45°.
- **Înălțimea de bază**: peretele începe atât de sus față de podea (o cornișă, un rând de dulapuri suspendate). Articolele de arie o au și ele: un tavan la 9'-0".
- **Înălțimea deschiderii**: un segment scăzut (o ușă, [Scăderea unei părți dintr-un tronson](topic:measure-linear#deduct-a-part-of-a-run)) păstrează peretele deasupra acelei înălțimi, astfel încât o ușă se vede ca ușă. Fără ea, un segment scăzut lasă un gol până sus.

Acestea modelează doar vizualizarea 3D: cantitățile (lungimea, aria peretelui, costurile) rămân cum erau.

## Suprapunerea etajelor

1. Deschideți PDF-urile fiecărui etaj.
2. În vizualizarea 3D, alegeți {{ui:Niveluri…}} și scrieți cota fiecărui etaj, de exemplu `0` pentru parter și `12'` pentru următorul. Un câmp gol lasă o foaie afară.
3. Alegeți {{ui:Suprapunere}}. Fiecare foaie cu un nivel își arată extragerea la înălțimea ei; foaia de pe ecran stă sub propriul etaj, celelalte sunt conturate. Nota spune câte etaje sunt suprapuse.

Foile se aliniază după locul lor pe pagină, deci funcționează pentru planuri de etaj trasate la fel (aceeași dimensiune și poziție a foii). O foaie cu nivel, dar fără scară, este lăsată afară, iar nota o spune. Alegeți din nou {{ui:Suprapunere}} pentru o singură foaie pe rând. Nivelurile sunt salvate împreună cu extragerea.

## Salvarea vizualizării 3D ca imagine

Alegeți {{ui:PNG}} din bara 3D pentru o imagine a vizualizării așa cum este pe ecran (`… 3D.png`); {{key:Shift}} + clic pe {{ui:PNG}} o face de două ori mai mare (`… 3D@2x.png`), pentru tipar.

## Salvarea vizualizării 3D ca model

Alegeți {{ui:GLB}} din bara 3D. Primiți un fișier `.glb` (glTF, binar) cu ce arată vizualizarea (etajul de pe ecran sau fiecare etaj suprapus), pe care îl deschid alte programe 3D: un obiect pentru fiecare marcaj, numit după articolul său, în culoarea articolului, în metri, cu Y în sus. Foaia în sine și conturele nu sunt incluse.

## Selectarea unui marcaj din 3D

Faceți clic pe un perete, o placă, o bară sau o stâlpișoară. Marcajul său devine marcajul selectat, exact ca și cum l-ați fi făcut clic pe foaie: apare sub **Marcaj selectat**, articolul său devine cel curent, iar bara de stare dă lungimea și înălțimea lui, sau aria, adâncimea și cubic yards. {{key:Shift}} + clic adaugă marcaje la selecție sau le scoate. {{key:Delete}} șterge marcajele selectate, iar {{key:Mod+Z}} le readuce; {{key:Esc}} nu selectează nimic. Înapoi pe foaie, aceleași marcaje rămân selectate.

:::tip
Desenul urmează tema: în Model, foaia de pe sol devine întunecată, ca vizualizarea plană.
:::
