---
title: Merjenje površin z odprtinami
summary: Začrtajte tla, stropove in plošče, izrežite v njih luknje, dodajte ukrivljene robove, kroge in okrogle odprtine ter preberite površino in obseg.
keywords: zapolnitev prostora, poplavna zapolnitev, vedro za barvo, klik v prostor, samodejna površina, povratni odbitek, back-out, steber, jašek, odbitek iz več postavk, površina, mnogokotnik, obris, kvadratni čevlji, sf, odprtina, luknja, odbitek, krožnica, okroglo, lok, obseg, tla, strop, plošča
from: 34648db7
---

Postavka površine meri zaprto površino. Vsak obris lahko ima izrezane luknje (jašek, steber, korito za rastline), njegovi robovi pa so lahko ravni ali ukrivljeni.

Preden začnete: list potrebuje merilo ([Nastavite merilo](topic:set-the-scale)), potrebujete pa postavko površine ([Ustvarite postavke predizmere](topic:create-items)).

## Začrtajte površino

1. Kliknite postavko površine pod {{ui:Postavke}}.
2. Izberite {{ui:Površina}} v orodni vrstici ali pritisnite {{key:A}}.
3. Kliknite vsak kot sobe ali plošče zaporedoma. Držite {{key:Shift}} za robove pod 0°, 45° in 90°.
   Od tretje točke naprej se obris zapolni, vrstica stanja pa prikaže „Površina“ in „obseg“. Okoli prve točke se pokaže majhen obroč.
4. Zaprite obris: kliknite prvo točko (znotraj njenega obroča), pritisnite {{key:Enter}}, dvakrat kliknite ali desno kliknite.
   Površina je lahko zapolnjena z barvo postavke, označena s kvadratnimi čevlji in postane izbrana oznaka.

{{key:Backspace}} odstrani zadnji kot; {{key:Esc}} zavrže obris.

Obris, ki se seka sam s seboj, je zavrnjen: „Obris se seka sam s seboj, zato bi bila površina napačna. Narišite ga znova brez presečišč.“ Lik v obliki osmice narišite kot dve površini.

## Ukrivljeni robovi

Med začrtovanjem vklopite način loka ({{ui:Lok}} ali {{key:R}}). Po kotu kliknite točko vzdolž krivulje, nato tam, kjer se krivulja konča. Če želite obris zapreti s krivuljo, naj bo zadnji klik na prvi točki. Površina in obseg uporabljata natančno krivuljo. Ponovno pritisnite {{key:R}} za ravne robove. Krivuljo kasneje spremenite tako, da izberete površino in povlečete okrogel ročaj na sredini loka. Glejte [Merjenje linijskih odsekov](topic:measure-linear#arcs-and-curved-walls).

## Krožnica

1. Pri postavki površine izberite {{ui:Krožnica}} ali pritisnite {{key:O}}.
2. Kliknite središče.
3. Kliknite poljubno točko na robu.
   Med premikanjem vrstica stanja prikazuje polmer in površino. Krog se doda kot oznaka površine z natančno površino in obsegom.

## Zapolnite prostor z enim klikom

Kadar so prostori narisani kot zaprte stene, {{ui:Prostor}} ({{key:B}}) z enim klikom odvzame tla:

1. Izberite postavko površine (na primer talno oblogo) in določite merilo listu.
2. Izberite {{ui:Prostor}} v skupini {{ui:Predizmere}} ali pritisnite {{key:B}}.
3. Kliknite znotraj prostora, na odprtih tleh (ne na črti ali oznaki).

TakeoffCraft prebere črte lista, poišče prostor okoli klika in ga začrta vzdolž notranjih ploskev sten, kot površino trenutne postavke. Vrata do širine **4'-0"** se štejejo kot zaprta, zato obris poteka naravnost čez vhod; **Nastavitve › TakeoffCraft › Zapolnitev prostora zapre odprtine do** spremeni to širino (od 3'-0" do 8'-0"). Imena prostorov, pohištvo in oprema v prostoru ne delajo lukenj.

Zavrne se, z razlogom:

- klik je na črti („To je na črti“);
- prostor ni zaprt: odprtina, širša od nastavitve, pusti, da se zunanja črta izteče do roba lista. Povečajte nastavitev ali ta prostor začrtajte ročno z {{ui:Površina}};
- prostor je zelo majhen (simbol, ne prostor).

Ko so vrata širša od nastavitve, zapolnitev steče v naslednji prostor in začrta oba skupaj: razveljavite ({{key:Mod+Z}}), povečajte nastavitev in kliknite znova. Obris preverite kot vsako površino: povlecite njegove kote, da ga popravite. Skenirani list deluje enako, vendar morajo biti njegove črte dovolj temne; zelo svetla siva črta morda ne ustavi zapolnitve.

## Izrežite luknjo v površino

1. Izberite {{ui:Izberi}} ({{key:V}}) in kliknite površino. Pokažejo se kvadratni ročaji na njenih kotih.
2. Izberite {{ui:Odprtina}} v orodni vrstici (ali pritisnite {{key:X}}) ali {{ui:Dodaj odprtino}} pod **Izbrana oznaka**.
3. Kliknite kote luknje znotraj površine. Način loka deluje tudi tukaj.
4. Zaprite jo kot površino: kliknite njeno prvo točko, pritisnite {{key:Enter}}, dvakrat kliknite ali desno kliknite.
   Luknja ostane nezapolnjena, vrstica stanja pa pravi: „Odprtina dodana. Narišite drugo ali pritisnite Esc.“
5. Narišite več lukenj v isti površini ali pritisnite {{key:Esc}}.

Za okroglo luknjo izberite {{ui:Dodaj okroglo odprtino}} pod **Izbrana oznaka**, kliknite njeno središče in nato točko na njenem robu.

Odprtina mora biti v celoti znotraj površine in se ne sme prekrivati z drugo odprtino. Sicer jo TakeoffCraft zavrne: „Odprtina mora biti v celoti znotraj površine.“ ali „Odprtine se ne smejo prekrivati med seboj.“

Za odstranitev zadnje luknje izberite {{ui:Odstrani zadnjo odprtino}}.

## Povratni odbitki: stebri, jaški in odprtine, odvzete od več postavk

Odprtina pripada eni oznaki površine. **Povratni odbitek** se nariše enkrat in se odvzame od vsake površine, ki jo prekriva, za postavke, ki jih izberete: stebre narišete enkrat, odvzamejo pa se s talne obloge, stropa in plošče hkrati.

1. Ustvarite postavko površine zanje, na primer „Stebri“.
2. V njenih nastavitvah postavke označite **Povratni odbitek: njegove oznake odvzamejo svojo površino drugim postavkam**. Pojavi se seznam vaših drugih postavk površine, vse označene: odznačite tiste, ki jih povratni odbitki ne smejo zadeti (na primer barvo sten).
3. Predizmero stebrov naredite z {{ui:Površina}} ali {{ui:Krožnica}}, kot običajno. Vsak je narisan črtkano.

Vsaka oznaka površine označene postavke na istem listu izgubi del, ki ga pokrije povratni odbitek: celoten povratni odbitek, kadar je znotraj, le prekrivajoči del, kadar prečka rob, in nič znotraj odprtine. Ploščica izbrane površine prikaže **Povratni odbitki** in preostalo površino. Količina postavke, njene formule sestavov, stroški, 3D pregled in izvoz uporabljajo preostalo površino; opombe ocene povedo, koliko so povratni odbitki odvzeli. Sama postavka povratnega odbitka šteje svojo površino (pustite njene stroške na nič, če je ne cenite).

Povratni odbitek mora biti **konveksen**: pravokotnik, krog ali kateri koli obris brez notranjega kota. TakeoffCraft zavrne risbo, ki ni taka: L-jašek narišite kot dva povratna odbitka. Povratni odbitki ne morejo imeti odprtin, dva povratna odbitka, ki se prekrivata, pa se štejeta oba.

Obseg (`P`) se ne spremeni: povratni odbitki odvzamejo le površino.

## Preberite površino

Izberite površino. **Izbrana oznaka** prikaže:

| Vrstica | Pomen |
|---|---|
| Površina | Neto površina: obris minus odprtine. To šteje postavka. |
| Obris | Bruto površina znotraj obrisa (prikazana, kadar so odprtine). |
| Odprtine | Koliko lukenj je in njihova skupna površina. |
| Obseg | Dolžina robu obrisa, **plus** robovi vseh odprtin („z odprtinami“). |

Obseg namensko vključuje robove odprtin, na primer za robove opažev ali podlago, ki teče tudi okoli luknje. Če potrebujete samo zunanji rob, odprtin ne dodajajte v to postavko ali izmerite zunanji rob kot linijski odsek.

Enota ({{ui:Enota}}) postavke določa, kako se poroča skupni seštevek: SF, SY ali m². Plošča **Izbrana oznaka** in vrstica stanja vedno prikažeta kvadratne čevlje.

## Popravite površino

- **Premaknite kot**: izberite površino in povlecite ročaj kota (tudi luknje imajo ročaje). Če bi nova oblika sekla samo sebe ali potisnila luknjo ven, se kot vrne: „Točka je bila vrnjena.“
- **Premaknite v drugo postavko**: izberite drugo postavko površine v seznamu **Postavka** pod **Izbrana oznaka**.
- **Izbrišite**: {{key:Delete}}, {{ui:Izbriši}} v meniju {{ui:Več}} orodne vrstice ali {{ui:Izbriši oznako}}.

## Globina za prostornine

Postavki površine dodajte {{ui:Globina}} (na primer `0'-4"` za ploščo) in v komponenti sestava uporabite `A * H / 27` za kubične jarde. Glejte [Sestavi in formule](topic:assemblies).
