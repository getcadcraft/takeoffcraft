---
title: Odoslanie balíka na ponuky
summary: E-mailom pošlite balík ponuky subdodávateľom, nechajte ich zadávať ceny na stránke bez účtu, ponechajte ceny utajené do času otvorenia a načítajte ich do listu vyrovnávania.
keywords: odoslať na ponuky, pozvánka, pozvánka na ponuku, uchádzač, subdodávateľ, pozvať, e-mail, žiadosť o cenu, utajené ponuky, otvorenie ponúk, deň ponúk, neskorá ponuka, termín, pripomienka, záznamy subdodávateľov, poistenie, kvalifikácia, csv, pripojiť, listy PDF
from: fb314b2c
---

{{ui:Export}} › {{ui:Balíky ponúk a vyrovnávanie…}} › {{ui:Odoslať na ponuky…}} pošle jeden balík vybraným ľuďom. Webová stránka každému pošle e-mail s odkazom; otvoria stránku, uvidia rozsah a zadajú cenu za každý riadok. Ceny vidíte v liste vyrovnávania, pripravené na porovnanie ([Balíky ponúk a vyrovnávanie ponúk](topic:bid-leveling)).

:::note
Odosielanie **zatiaľ nie je otvorené pre všetkých.** Kým sa funkcia testuje, funguje pre účty, ktoré tím CadCraft povolil; ak ten váš nie je, dialóg to uvedie. Stránka uchádzača funguje pre každú odoslanú pozvánku.
:::

## Pred odoslaním

- Potrebujete účet CadCraft s overenou e-mailovou adresou. TakeoffCraft v prehliadači vás požiada o **Pripojiť**: otvorí sa karta na getcadcraft.com, stlačíte Pripojiť a tá karta dostane prihlásenie platné 30 dní, len pre balíky ponúk, až do zatvorenia karty TakeoffCraft. Kedykoľvek ho môžete odstrániť na stránke zabezpečenia. Okno Studio zatiaľ odoslať nemôže.
- Každej položke priraďte číslo CSI: balík tvoria položky jednej divízie CSI ([Vytvorenie položiek merania](topic:create-items)).
- Nastavte mierku listov, na ktorých sú značky balíka, aby boli množstvá, ktoré uchádzači vidia, odmerané.

## Odoslanie balíka

1. Vyberte {{ui:Odoslať na ponuky…}} pod balíkom.
2. Vyplňte názov, projekt, voliteľnú správu a **termín** vo vašom časovom pásme.
3. Nechajte zaškrtnuté **Ponechať ceny utajené**, aby boli všetky ceny skryté až do **času otvorenia** (nie skôr ako termín), alebo ho odškrtnite, aby ste ceny videli, keď prichádzajú.
4. Nechajte zaškrtnuté políčko listov, aby sa odoslalo PDF listov, na ktorých sú značky balíka, s nakreslenými značkami. Vaše ceny sa v odoslanom nikdy nenachádzajú: len názvy položiek, čísla CSI, množstvá, jednotky a názvy listov.
5. Napíšte ľudí, ktorých pozývate, jedného na riadok, ako `Meno <meno@firma.com>` alebo len adresu, prípadne zaškrtnite ľudí zo svojich záznamov subdodávateľov. Naraz najviac 60, na balík 100.
6. Vyberte {{ui:Odoslať pozvánky}}. Každý dostane jeden jednoduchý e-mail s vaším menom a e-mailovou adresou, termínom a odkazom; odpovede idú k vám.

Dialóg vám povie, koľko ich bolo odoslaných, a pomenuje tých, ktorých vynechal: už pozvaní do tohto balíka, požiadali, aby nedostávali pozvánky na ponuky, neplatná adresa, alebo prekročený limit odosielania.

## Čo vidí uchádzač

Stránka na dlhom súkromnom odkaze, bez prihlasovania. Ukazuje, kto ho pozval, termín, či sú ceny utajené, vašu správu a PDF listov, potom každý riadok s jeho množstvom. Pri každom riadku zadá cenu alebo zaškrtne **Nezahrnuté** a môže pridať poznámku; poznámky pridáva k celému balíku a až 3 súbory (ponuku, rozsahový list, certifikát). Môže uložiť znova a zmeniť svoje ceny až do otvorenia, alebo **odmietnuť**, s políčkom na požiadanie, aby CadCraft už neposielal pozvánky na ponuky.

## Utajené ponuky a otvorenie

Pred časom otvorenia **nikto** nevidí cenu, poznámku ani súbor: ani vy v TakeoffCraft, ani na stránke Balíky ponúk. Vidíte, kto bol pozvaný a či odpovedal. V čase otvorenia sa všetky ponuky zobrazia naraz. Ponuka uložená po termíne sa prijme a označí **neskoro**; vyrovnávanie ju stále uvádza a neskorosť je len značka, nie rozhodnutie. Po otvorení uchádzač cenu nemôže zmeniť. Bez utajenia je ponuka po termíne konečná.

## Získanie cien

{{ui:Získať ceny}} sa opýta webu a každú odpoveď pridá do balíka ako ponuku označenú **web**. TakeoffCraft sa tiež ticho pýta zakaždým, keď otvoríte dialóg, kým je pripojený. Ponuka, ktorej uchádzač uložil novú verziu, sa aktualizuje na mieste; ponuku, ktorú ste upravili, si ponecháte tak, ako ste ju nechali, kým neodošlú novú verziu. Každé načítanie je jeden krok, ktorý {{key:Mod+Z}} vráti. Nezahrnuté riadky prídu ako rozsah, ktorý ponuka vynecháva, takže vyrovnávanie ich doplní na vaše vlastné náklady.

## Na webovej stránke

Váš účet má po odoslaní ďalšie dve stránky. **Balíky ponúk** zobrazuje, čo ste odoslali, kto odpovedal, neskoré ponuky a súbory, a umožňuje poslať pripomienku (nový odkaz; starý prestane fungovať), balík zatvoriť, znova otvoriť alebo zrušiť. **Subdodávatelia** uchováva záznam pre každú firmu: kontakty, odbory, kvalifikačné odpovede (roky na trhu, kapacita záruky, EMR, bezpečnostný záznam, odborová alebo otvorená prevádzka, referencie), dátumy platnosti licencie a poistenia, označené po uplynutí alebo do 30 dní, a ich minulé ponuky. Záznamy importujete a exportujete ako CSV: jeden riadok na kontakt so stĺpcami, ktoré export zobrazuje; firma, ktorú už máte, sa aktualizuje a nikdy sa neopakuje.

## Kto čo vidí a ako dlho

Ceny, poznámky a súbory uchádzača idú vám a tímu CadCraft, ktorý stránku prevádzkuje. Uchovávajú sa 24 mesiacov po termíne, súbory 180 dní; potom sa zmažú. E-mailová adresa uchádzača je tá, ktorú ste zadali; použije sa len na odoslanie pozvánky a prípadnej pripomienky k nej. Jedna adresa dostane najviac 3 pozvánky denne od všetkých dokopy a vy môžete odoslať až 200 denne.

## Ešte nie je hotové

Dodatky, oznámenia o zadaní, podpísaný list rozsahu pre každého uchádzača a automatické pripomienky pred vypršaním poistenia ešte nie sú hotové. Pozrite [Ešte nie je hotové](topic:not-built-yet).
