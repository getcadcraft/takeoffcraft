---
title: Usporedba revidiranog lista i prijenos predmjera
summary: Postavite stari list preko revizije, poravnajte ih, pogledajte što se promijenilo i prenesite predmjer na novi list s oznakama za provjeru.
keywords: revizija, revidirano, usporedi, preklapanje, staro, novo, promjene, dopuna, izmjena, ponovno izdanje, prijenos predmjera, prijenos, poravnaj, označeno, provjeri
from: 3a1d9fe0
---

Kad se list ponovno izda, ne morate ga ponovno predmjeriti. Otvorite stari PDF i novi, usporedite dva lista i prenesite predmjer. TakeoffCraft označava svaku oznaku na kojoj se crtež promijenio, pa provjerite te oznake, a ostale zadržite.

## Usporedba

1. Otvorite oba PDF-a: stari skup i revidirani ({{ui:Otvori nacrte}}; mogu biti u jednoj datoteci ili u više njih).
2. Prikažite **novi** list.
3. Odaberite {{ui:Usporedi}} na traci lista ispod crteža.
4. Odaberite stari list na popisu. TakeoffCraft predlaže list s istim brojem u drugom PDF-u ili istu stranicu. Odaberite **Usporedi**.

Stari crtež sada leži preko novoga u crvenoj boji. Gdje se slažu, crvene linije su na crnima; gdje se razlikuju, vidite samo crvene linije (uklonjeno) i samo crne linije (dodano). Traka na dnu lista sadrži korake u nastavku; {{key:Esc}} ili {{ui:Zatvori}} završava usporedbu.

## Poravnanje

Ponovno izdani listovi često su ispisani malo pomaknuto: pomaknuti na stranici ili u nešto drugačijoj veličini. Ako crveni crtež ne leži na crnom, odaberite **Poravnaj po dvije točke** i kliknite četiri puta:

1. točku na starom (crvenom) crtežu, primjerice središte stupa ili kut zgrade,
2. istu točku na novom (crnom) crtežu,
3. drugu točku na crvenom crtežu, daleko od prve,
4. istu točku na crnom crtežu.

Crveni crtež se pomiče, okreće i skalira na crni. Statusna traka kaže koliko je novi crtež veći („veličina × 1.000“ kad je isti). Zumirajte za odabir točaka: što bliže kliknete, bolje je poklapanje.

## Pronalaženje promjena

Odaberite **Pronađi promjene**. TakeoffCraft uspoređuje tintu dvaju crteža: tinta samo na starom listu postaje crvena, tinta samo na novom listu postaje plava, a statusna traka ih broji. Linije koje su se pomaknule za dlaku (ponovni ispis) ne broje se kao promjene.

Također pregledava svaku oznaku na starom listu i broji one koje se nalaze tamo gdje se crtež promijenio:

- dionicu ili površinu kad se crtež promijenio na jednom od njezinih krajeva ili kutova, ili duž barem otprilike šestine njezine duljine;
- brojanu oznaku kad se nešto promijenilo odmah pored nje.

## Prijenos predmjera

Odaberite **Prijenesi predmjer ovdje**. Svaka oznaka sa starog lista premješta se na novi, kroz poravnanje, u jednom koraku poništavanja. Oznake uz promjenu su označene: nacrtane su s narančastim obrubom, a traka lista pokazuje „(n) za provjeru“.

Ako novi list nije imao mjerilo, preuzima mjerilo starog lista (prilagođeno kad su crteži morali biti skalirani da se poklope). Ako je već imao drugo mjerilo, TakeoffCraft prvo pita: premještene oznake mjere se u mjerilu novoga lista.

## Provjera označenih oznaka

1. Odaberite „(n) za provjeru“ na traci lista. Prikaz se zumira na sljedeću označenu oznaku i odabire je; njezin panel kaže zašto je označena.
2. Ispravite oznaku ako se crtež promijenio ispod nje (povucite njezine kutove, dodajte ili izbrišite oznake ili je ponovno izmjerite).
3. U njezinu panelu odaberite **Provjereno**. Oznaka se uklanja, a broj na traci lista se smanjuje.

Oznake se spremaju s predmjerom, pa ih možete provjeriti kasnije.

:::note
Usporedba radi jednako na vektorskim PDF-ovima i na skeniranim crtežima, jer uspoređuje ono što je nacrtano. Skenirani crtež koji je iskošen ili rastegnut može se poklapati samo približno dvjema točkama; tada više oznaka provjerite očima.
:::
