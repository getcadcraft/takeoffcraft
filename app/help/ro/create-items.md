---
title: Crearea articolelor de extragere de cantități
summary: Creați articole liniare, de arie și de numărare și setați unitatea lor, înălțimea sau adâncimea, pierderile și tarifele de materiale și de manoperă.
keywords: echipă, rată de producție, mărimea echipei, salariu, ore, ore-om, ore-echipă, zile-echipă, ore de manoperă, articol, articol nou, condiție, multi-condiție, măsoară și, mai multe tipuri, cameră, liniar, arie, numărare, unitate, înălțime, adâncime, pierderi, material, manoperă, tarif, culoare, cost
from: 7fa5effc
---

Un **articol** este un lucru pe care îl măsurați și îl evaluați: un tip de perete, o finisare de podea, un tavan, o ușă, un corp de iluminat. Fiecare marcaj pe care îl desenați aparține unui articol. Alte programe numesc acestea condiții.

Fiecare articol are un tip (și poate primi și alte tipuri de marcaje, vezi [Un articol, mai multe tipuri de marcaje](topic:create-items#one-item-several-kinds-of-marks)):

| Tip | Desenați | Raportează | Unități |
|---|---|---|---|
| Liniar | Trasee de puncte conectate | Lungime, număr de trasee și aria peretelui atunci când are o înălțime | LF sau m |
| Arie | Contururi închise, cu decupaje | Arie, perimetru, număr de arii | SF, SY, SQ, ac, ha sau m² |
| Numărare | Un clic pentru fiecare lucru | Câte sunt | EA |
| Cantitate introdusă | Nimic: introduceți cantitatea | Numărul introdus (sau unul adus din CivilCraft) | LS, EA, CY, m³, lb, TON, kg, t, LF, m, SF, SY, SQ, ac, ha sau m² |

## Cantități introduse (fără desen)

Unele lucruri dintr-un deviz nu se desenează niciodată: mobilizarea, autorizațiile, o rezervă pentru imprevizibile, un subcontract forfetar, debleul și rambleul calculate de CivilCraft. Faceți-le o **Cantitate introdusă**:

1. Alegeți {{ui:Articol nou}}, tastați un nume, selectați {{ui:Cantitate introdusă (fără desen)}} și alegeți {{ui:Adăugare}}.
2. În editorul articolului alegeți {{ui:UM}} (LS pentru o sumă forfetară) și tastați {{ui:Cantitate}}: `1`, `2.5` sau `1,250`.
3. Setați pierderile și tarifele ca pentru orice alt articol. Formulele unui articol compus folosesc `Q`, cantitatea, de exemplu `ceil(Q / 12)` încărcături de camion.

O cantitate introdusă nu primește marcaje și nu face niciodată devizul incomplet. Când extragerea are zone de ofertare, editorul are și {{ui:Zonă de ofertare}}: cantitatea se numără atunci în acea zonă, în variantele și în totalurile ei, exact ca un marcaj de acolo. Cantitățile aduse din alt program spun de unde provin, vezi [Săpătură și cote de nivel](topic:earthwork#cut-and-fill-from-civilcraft).

## Crearea unui articol

1. În panoul {{ui:Articole}} din dreapta, alegeți {{ui:Articol nou}}.
2. Tastați un nume, precum `Interior wall type A` sau `Carpet tile`.
3. Alegeți tipul: {{ui:Liniar (lungime)}}, {{ui:Arie}} sau {{ui:Numărare}}.
4. Alegeți {{ui:Adăugare}} (sau apăsați {{key:Enter}}).
   Articolul apare în listă cu propria culoare, devine articolul cu care desenați, iar editorul său se deschide sub listă. Bara de stare vă spune ce instrument să alegeți apoi.

Apăsați {{key:Esc}} în formular pentru a-l închide fără a adăuga un articol.

:::tip
Dacă alegeți întâi un instrument de măsurare, TakeoffCraft folosește ultimul articol de tipul potrivit sau deschide formularul {{ui:Articol nou}} cu tipul deja ales.
:::

## Alegerea articolului cu care desenați

Faceți clic pe un articol din listă. Acesta devine articolul la care se trec marcajele noi, iar marcajele lui sunt evidențiate pe fiecare foaie, în timp ce celelalte se estompează. Dacă foaia deschisă nu are niciunul dintre marcajele lui, TakeoffCraft sare la o foaie care are. Faceți din nou clic pe articol pentru a opri evidențierea; rămâne articolul cu care desenați.

Faceți clic pe un marcaj cu instrumentul {{ui:Selectare}} face și articolul lui cel curent.

## Configurarea articolului

Editorul articolului (**Articol: (nume)**) are aceste câmpuri. Fiecare se salvează când părăsiți câmpul sau apăsați {{key:Enter}}, iar fiecare modificare poate fi anulată.

| Câmp | Ce face |
|---|---|
| {{ui:Nume}} | Afișat în listă, în tabele și în exporturi. |
| {{ui:Tip}} | Liniar, Arie sau Numărare. Este blocat odată ce articolul are marcaje („Un articol cu marcaje își păstrează tipul”). |
| {{ui:Culoare}} | Culoarea marcajelor lui pe ecran și în PDF-ul marcat. |
| {{ui:UM}} | În ce unitate se raportează cantitatea: LF sau m pentru liniar; SF, SY, SQ, ac, ha sau m² pentru arie; EA pentru numărare. |
| {{ui:Măsoară și}} | Celelalte tipuri de marcaje pe care le primește articolul, fiecare cu propria unitate. Vezi mai jos. |
| {{ui:Înălțime}} (liniar) | O înălțime de perete. Articolul raportează atunci și aria peretelui (lungime × înălțime). Traseele care provin dintr-un model BimCraft își păstrează ușile și ferestrele: acestea sunt scoase o singură dată, iar articolul indică aria brută, golurile și aria netă. Un extras de cantități dintr-un proiect BimCraft care a ales o metodă de măsurare este măsurat și aici prin aceeași metodă (nota o numește, cu sursa ei, și spune că nu a fost verificată de un specialist în devize); metoda nu poate fi schimbată în TakeoffCraft. Cărămizile sau blocurile și mortarul dintr-un tip de perete sosesc ca două componente: unitățile de comandat și volumul de mortar. |
| {{ui:Adâncime}} (arie) | O adâncime sau grosime, folosită în formulele articolelor compuse (de exemplu volumul de beton). |
| {{ui:Pierderi %}} | Se adaugă la cantitate înainte de evaluare: 10 înseamnă cantitate × 1.10. |
| {{ui:Material $/LF}} | Costul materialului pe unitate. Eticheta urmează unitatea: $/SF, $/EA și așa mai departe. |
| {{ui:Manoperă $/LF}} | Costul manoperei pe unitate. |
| {{ui:Număr CSI}} | Numărul său CSI MasterFormat, ca `09 21 16` (sau doar diviziunea, `09`). Foaia de lucru a registrului pe diviziuni grupează costurile după el. Articolele din [pachetele pentru meserii](topic:trade-packs) îl au deja. |

Adâncimea și înălțimea acceptă picioare și țoli (`9'-0"`, `8' 6"`) sau picioare zecimale (`9`) pentru unități imperiale, și metri (`2.7`, `2700 mm`) pentru unități metrice. Tarifele acceptă sume precum `12.50` sau `$1,250`, cu până la patru zecimale. Vezi [Introducerea lungimilor, tarifelor și procentelor](topic:entry-formats).

Sub câmpuri, **Măsurat** arată totalurile pe care le pot folosi formulele articolului, cu literele lor: Lungime (L), Trasee (N), Aria peretelui (A) pentru liniar; Arie (A), Perimetru (P), Arii (N) pentru arie; Număr (N) pentru numărare.

## Un articol, mai multe tipuri de marcaje

Unele lucruri se măsoară în mai multe moduri: o cameră are o podea (o arie), o plintă de-a lungul pereților (o lungime) și uși (o numărare). În loc de trei articole, faceți unul singur:

1. Creați articolul cu tipul său principal, de exemplu un articol de arie `Room 101`.
2. Sub {{ui:Măsoară și}} din editorul lui, bifați {{ui:Liniar}}, {{ui:Numărare}} sau ambele. Fiecare primește o unitate alături.
3. Desenați cu orice instrument al cărui tip îl primește articolul: cu `Room 101` curent, {{ui:Arie}} desenează podeaua lui, {{ui:Liniar}} plinta lui și {{ui:Numărare}} ușile lui. TakeoffCraft nu cere alt articol.

Lista articolelor arată fiecare cantitate (`50.00 SF + 2 EA`). În tabelul cantităților, rândul articolului are cantitatea principală, iar fiecare alt tip primește un rând propriu dedesubt, de exemplu **Room 101 (numărare)**, cu propriile pierderi și tarife de materiale și de manoperă. Exporturile, tabelul pe foaie și legenda PDF-ului marcat le listează în același mod.

Câmpurile tipului principal rămân ale tipului principal: înălțimea sau adâncimea, panta, deducerile și forma 3D se aplică doar marcajelor lui. O rulare de plintă desenată pentru un articol de arie este măsurată simplu pe plan și apare plată în 3D. Formulele articolelor compuse folosesc totalurile tipului principal.

Un tip poate fi debifat doar cât timp articolul nu are marcaje de acel tip; ștergeți-le sau mutați-le întâi la alt articol din **Marcaj selectat**. Marcajele pot fi mutate la orice articol care primește tipul lor.

Mai jos se află {{ui:Articol compus}}: componente precum montanții sau scândurile, fiecare cu propria formulă și propriile tarife. Vezi [Articole compuse și formule](topic:assemblies).

La final, {{ui:Mutare în sus}} și {{ui:Mutare în jos}} schimbă locul articolului în listă și în exporturi, iar {{ui:Ștergere articol}} îl elimină împreună cu toate marcajele lui (după confirmare; puteți anula).

Articolele de arie au și **Pantă** (planuri de acoperiș măsurate pe înclinare: [Acoperișuri și pante](topic:roofs-and-slopes)) și **Deducere** (marcajele lor se scot din ariile altor articole: [Măsurarea ariilor](topic:measure-areas#back-outs-columns-shafts-and-openings-taken-out-of-several-items)). Articolele liniare au **Înclinare** (Nivel, Fronton, Șold sau vale) și, pentru fronton și șold, **Pantă**.

## Tarife în tabel

Puteți tasta și {{ui:Pierderi %}}, tarifele de material și de manoperă direct în tabelul {{ui:Cantități}} de jos ({{ui:Pe articole}}). Este aceeași setare ca în editor.

## Cum funcționează evaluarea

Pentru fiecare articol și fiecare componentă a unui articol compus:

1. **Cu pierderi** = cantitate × (1 + pierderi %).
2. **Material** = cu pierderi × material pe unitate, rotunjit la ban.
3. **Manoperă** = cu pierderi × manoperă pe unitate, rotunjit la ban.
4. **Total** = material + manoperă.

{{ui:Total lucrare}} adună fiecare articol și fiecare componentă. Un articol poate avea propriile tarife și, în același timp, un articol compus; ambele se numără, deci lăsați tarifele articolului la 0 când componentele poartă costul.

## Manoperă pe echipă

În loc de un tarif de manoperă pe unitate, manopera unui articol poate veni dintr-o echipă: cât produce pe oră, câți oameni sunt și cât câștigă fiecare. Sub {{ui:Manoperă pe echipă}} din editorul articolului, bifați {{ui:Evaluează manopera pe baza unei echipe}} și completați:

| Câmp | Exemplu |
|---|---|
| {{ui:Producție}} | `20` LF pe oră (în unitatea articolului) pentru toată echipa |
| {{ui:Mărimea echipei}} | `2` persoane |
| {{ui:Salariu $/oră fiecare}} | `45` |

TakeoffCraft calculează, din cantitatea cu pierderi:

- **ore-echipă** = cantitate ÷ producție (110 LF ÷ 20 = 5.5),
- **ore-om** = ore-echipă × mărimea echipei (11),
- **zile-echipă** = ore-echipă ÷ 8 (0.69),
- **manoperă** = ore-om × salariu ($495.00).

Editorul arată rezultatul și tariful la care ajunge ($4.50/LF). Tariful de manoperă al articolului devine apoi doar pentru citire, în editor și în tabel. Antetul tabelului {{ui:Cantități}} adaugă orele-om și zilele-echipă ale lucrării. Exporturile notează orele fiecărei echipe, iar în registru celula de manoperă este o formulă pe echipă (`ROUND(F2/20*2*45,2)`). Debifați căsuța pentru a reveni la un tarif pe unitate.

## Articole metrice

Alegeți m (liniar) sau m² (arie) ca unitate. Cantitățile, înălțimile și valorile formulelor sunt atunci în metri. Scara foii poate fi orice presetare sau calibrare; unitățile și scările sunt independente.

## Mai departe

- [Măsurarea traseelor liniare](topic:measure-linear)
- [Măsurarea ariilor cu decupaje](topic:measure-areas)
- [Numărarea manuală](topic:count-by-hand)
