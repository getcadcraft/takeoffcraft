---
title: Įkelti žymų sąrašą kaip kiekius
summary: Iš pastato modelio eksportuotas žymų sąrašas (CSV) tampa tipizuotais kiekiais kiekių skaičiavime, po vieną kiekvienai žymai, todėl modelio skaičiai ir plotai atsiduria šalia to, ką jūs išmatavote.
keywords: žymos, žymų sąrašas, pastato modelis, bimcraft, ifc, kiekiai, csv, sąrašas, importas, tipizuotas kiekis
from: a60c19b6
---

{{ui:Žymos}} įrankių juostoje įkelia žymų sąrašą, kurį BimCraft išsaugojo kaip CSV failą. Kiekviena skirtinga žyma tampa tipizuotu kiekiu – tokio pat tipo, kokiu tampa CivilCraft iškasos ir pilties kiekiai.

1. BimCraft sukurkite norimą žymų sąrašą ir įrašykite jį kaip CSV.
2. Pasirinkite {{ui:Žymos}} ir pasirinkite failą.
3. Nurodykite, kuris stulpelis įvardija eilutę ({{ui:Eilutę įvardinti pagal}}, dažniausiai žyma), o kuris laiko skaičių ({{ui:Kiekis iš}}). Su {{ui:Skaičiuoti eilutes}} kiekviena eilutė skaičiuojama kaip vienas.
4. Pasirinkite vienetą. Ilgis milimetrais tampa metrais, jei {{ui:Dauginti iš}} 0.001.
5. {{ui:Pridėti kiekius}}.

Eilutės su ta pačia žyma sudedamos. Langelis, kuris nėra skaičius, praleidžiamas ir suskaičiuojamas santraukoje. Pakartotinai įkėlus tą patį sąrašą, atnaujinami jau turimi kiekiai, o ne pridedami nauji; jų pavadinimai, įkainiai ir atliekos lieka jūsų.

## Verta žinoti

Tipizuotas kiekis nėra išmatuojamas lape, todėl žymų neturi. Niekas niekur nesiunčiama; failas čia tik nuskaitomas.
