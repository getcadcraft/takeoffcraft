---
title: Riešenie problémov
summary: Príznaky, príčiny a riešenia hlásení a prekvapení, na ktoré môžete v TakeoffCraft naraziť, citované tak, ako ich aplikácia zobrazuje.
keywords: problémy, chyby, nefunguje, oprava, pomoc, odmietnuté, nemeria, žiadna mierka, chýbajúce značky, export zlyhal, offline, dotyk
from: cd319c9b
---

TakeoffCraft vysvetľuje väčšinu odmietnutí na stavovom riadku v dolnej časti okna. Nájdite správu nižšie.

## Otváranie súborov

| Správa alebo príznak | Príčina | Riešenie |
|---|---|---|
| Čítačku PDF sa nepodarilo načítať. Obnovte stránku a skúste to znova. | Čítačka PDF aplikácie sa nenačítala, zvyčajne preto, že ste offline a aplikácia nebola nikdy uložená na použitie offline. | Pripojte sa a obnovte stránku. Potom vyberte {{ui:Uložiť na offline použitie}} a počkajte na {{ui:Pripravené offline}}; pozri [Práca offline](common:offline). |
| (name) je chránený heslom. Otvorte nechránenú kópiu. | PDF na otvorenie vyžaduje heslo. | Požiadajte o nechránenú kópiu alebo odstráňte heslo v PDF programe, ktorému dôverujete. |
| (name) sa nedal prečítať ako PDF (…) | Súbor je poškodený alebo nie je naozaj PDF. | Stiahnite ho znova alebo ho znova uložte z programu, ktorý ho vytvoril. |
| (name) je už otvorený. | Rovnaké PDF (rovnaký obsah) je otvorené. | Nič netreba robiť. |
| TakeoffCraft otvára PDF a projekty .takeoff.json. Preskočené: … | Iné typy súborov boli vynechané. | Najprv prevedte výkresy do PDF. |
| Pri pustení súborov sa nič nedeje | Súbory boli pustené mimo okna prehliadača alebo prehliadač otvoril PDF na novej karte. | Pustite ich na samotnú stránku TakeoffCraft; rámček "Pustite PDF alebo .takeoff.json" ukazuje, kedy to bude fungovať. |
| Otváranie veľkej sady trvá dlho | Každé PDF sa na identifikáciu prečíta celé. | Počkajte, kým zmizne správa "Otváranie (name)…". Náhľady sa dopĺňajú pri posúvaní. |

## Meranie

| Správa alebo príznak | Príčina | Riešenie |
|---|---|---|
| Najprv otvorte PDF. | Nie je otvorený žiadny list. | Otvorte PDF. |
| Tento list zatiaľ nemá mierku, takže sa nedá merať. Najprv vyberte predvoľbu mierky alebo kalibrujte (počty fungujú aj bez nej). | Nástroje lineárne, plocha, kružnica a výrez potrebujú mierku. | [Nastavte mierku](topic:set-the-scale). |
| Najprv vytvorte lineárnu položku (pomenujte ju pod položkami), potom kliknite na list. | Neexistuje položka tohto typu. | Vyplňte formulár {{ui:Nová položka}}, ktorý sa otvoril, a vyberte {{ui:Pridať}}. |
| Najprv vyberte položku na odmeranie (panel Položky). | Aktuálna položka bola zmazaná. | Kliknite na položku pod {{ui:Položky}}. |
| Úsek potrebuje aspoň dva body. | Dokončili ste po jednom kliku. | Kliknite aspoň na dva body. |
| Plocha potrebuje aspoň tri body. | Príliš málo rohov. | Kliknite aspoň na tri rohy. |
| Obrys sa pretína sám so sebou, takže jeho plocha by bola nesprávna. Nakreslite ho znova bez pretínania. | Tvar osmičky. | Nakreslite ho ako dve plochy alebo obíďte okraj v poradí. |
| Tieto body neohraničujú žiadnu plochu. | Všetky body sú na jednej čiare. | Kliknite na rohy, ktoré ohraničujú priestor. |
| Najprv vyberte značku plochy (nástroj Výber), potom zvoľte Výrez a nakreslite otvor vnútri nej. | {{ui:Výrez}} potrebuje vybranú plochu. | Stlačte {{key:V}}, kliknite na plochu a potom {{key:X}}. |
| Výrez musí byť celý vnútri plochy. | Otvor pretína alebo presahuje obrys. | Nakreslite otvor vnútri plochy. |
| Výrezy sa nemôžu prekrývať. | Dva otvory sa prekrývajú. | Nakreslite jeden otvor okolo oboch alebo ich nechajte oddelené. |
| … Bod bol vrátený späť. | Presunutý roh by spôsobil, že sa obrys pretne sám so sebou, alebo by otvor vyšiel von. | Presuňte na miesto, ktoré udrží tvar platný. |
| Kliknite na bod na obvode kružnice, ďaleko od jej stredu. | Druhé kliknutie bolo príliš blízko stredu. | Kliknite ďalej. |
| Kliky posúvajú list namiesto pridávania bodov | Ukazovateľ sa pohol viac než pár pixelov, kým bolo tlačidlo stlačené; to sa počíta ako ťahanie. | Klikajte bez pohybu, najmä na touchpade. |
| Shift nechytá na 45° | Umiestňujete bod na oblúk alebo kreslíte kružnicu. | Prichytenie na 45° platí len pre priame úseky. |
| Body skáču na blízku čiaru | {{ui:Prichytávanie}} na čiary výkresu je zapnuté. | Priblížte, aby ste klikali medzi čiarami, alebo stlačte {{key:F3}} a vypnite prichytávanie. |
| Nezobrazuje sa žiadna značka prichytenia | Prichytávanie je vypnuté, list je sken alebo nástroj nechytá (Počet, Automatický počet, vkladanie). | Stlačte {{key:F3}}; na skene nie sú žiadne čiary, na ktoré by sa dalo prichytiť. |
| Dĺžka je nesprávna | Mierka je nesprávna (často preškálované PDF s predvoľbou). | Použite {{ui:Kontrola}} na známu kótu a potom {{ui:Kalibrovať}}. |

## Mierka

| Správa alebo príznak | Príčina | Riešenie |
|---|---|---|
| Vyberte dva body, ktoré sú od seba ďalej. | Kalibračné body sú takmer na sebe. | Kalibrujte na dlhšej kóte. |
| Správa v dialógu kalibrácie, napríklad "Tú vzdialenosť nebolo možné prečítať" | Vzdialenosť je v tvare, ktorý TakeoffCraft nedokáže prečítať. | Pozri [Zadávanie dĺžky, sadzby a percent](topic:entry-formats). |
| Tento list zatiaľ nemá mierku, takže nie je čo kontrolovať. Skalibrujte ho alebo vyberte predvoľbu. | {{ui:Kontrola}} na liste bez mierky. | Najprv nastavte mierku. |
| Zoznam {{ui:Predvoľba}} je sivý | Nie je otvorený žiadny list. | Otvorte PDF. |

## Množstvá a vzorce

| Správa alebo príznak | Príčina | Riešenie |
|---|---|---|
| Neúplné: … (nie je v súčtoch) | Chyba vzorca alebo značky na listoch bez mierky. | Pozri [Čítanie množstiev a odhadu](topic:read-quantities#the-incomplete-warning). |
| +(n) bez mierky vedľa položky | Niektoré jej značky sú na listoch bez mierky. | Dajte týmto listom mierku. |
| Chyba vzorca: … | Vzorec sa nedá vypočítať. | Pozri [Jazyk vzorcov](topic:formulas#errors). |
| Táto položka má značky, takže jej typ sa nedá zmeniť. | Typ je uzamknutý, keď existujú značky. | Vytvorte novú položku iného typu a značky nakreslite znova s ňou. |
| Položka potrebuje názov. | Pole názvu bolo vyprázdnené. | Napíšte názov. |
| Zadajte sumu ako 12.50. / Zadajte percento ako 10 alebo 7.5. | Sadzbu alebo odpad nebolo možné prečítať. | Pozri [Zadávanie dĺžky, sadzby a percent](topic:entry-formats). |
| Súčet sa zdvojnásobil | Položka má vlastné sadzby a komponenty, ktoré nesú rovnaké náklady. | Nastavte vlastné sadzby položky na 0, keď komponenty nesú náklady. |
| Značky tejto položky sú na PDF, ktoré nie sú otvorené. | Kliknuli ste na položku, ktorej všetky značky sú na PDF, ktoré ste ešte neotvorili. | Otvorte tie PDF; ich názvy sú uvedené pod {{ui:Listy}}. |

## Automatický počet

| Správa alebo príznak | Príčina | Riešenie |
|---|---|---|
| Toto okno je príliš malé. Nakreslite ho okolo celého symbolu. | Okno je malinké. | Priblížte a ohraničte celý symbol. |
| Toto okno je takmer prázdne. Nakreslite ho okolo symbolu. | Okno obsahuje len papier. | Ohraničte samotný symbol. |
| Žiadne zhody. Znížte posuvník {{ui:Zhoda}} alebo ohraničte symbol tesnejšie. | Nič nedosiahlo dostatočné skóre. | Ohraničte symbol tesne alebo posuňte posuvník {{ui:Zhoda}} nižšie. |
| Príliš veľa zhôd vrátane nesprávnych symbolov | Podobné symboly majú skóre blízko skutočného. | Zvýšte posuvník {{ui:Zhoda}} a kliknutím na nesprávne okná ich odmietnite. |
| Zhody chýbajú na iných listoch | Tie listy kreslia symbol inou veľkosťou alebo pod uhlom, ktorý nie je krokom 90°. | Prehľadajte tie listy oknom nakresleným tam alebo spočítajte ručne. |
| (n) listov bolo príliš veľkých na prehľadávanie pri tejto veľkosti symbolu. | List by bol pri pracovnej veľkosti príliš veľký. | Ohraničte väčší symbol alebo spočítajte ten list ručne. |
| Hľadanie zlyhalo: … | Hľadanie na pozadí sa zastavilo. | Skúste znova; ak sa to opakuje, obnovte stránku (najprv uložte). Offline funguje len vtedy, keď lišta aplikácie zobrazuje {{ui:Pripravené offline}}. |
| Ťahanie kreslí okno namiesto posúvania | Tak funguje {{ui:Automatický počet}}. | Podržte {{key:Space}} a ťahajte, alebo ťahajte stredným tlačidlom. |

## Ukladanie a export

| Správa alebo príznak | Príčina | Riešenie |
|---|---|---|
| Zatiaľ nie je čo exportovať: vytvorte položku a odmerajte ju. | Nie sú žiadne položky. | Najprv vytvorte položku. |
| Na otvorených PDF zatiaľ nie sú značky. | {{ui:Označené PDF}} nemá na čo kresliť na otvorených PDF. | Otvorte PDF, ktoré majú značky. |
| Toto PDF je chránené heslom alebo zašifrované, takže označenú kópiu nie je možné zapísať. … | PDF je zašifrované. | Exportujte {{ui:XLSX}} namiesto toho alebo použite nezašifrovanú kópiu PDF (potom potrebuje vlastný výkaz výmer, lebo je to iný súbor). |
| Označené PDF sa nepodarilo zapísať: … | Často: ste offline a aplikácia nebola uložená na použitie offline, takže chýba zapisovač PDF. | Pripojte sa na internet a znova vyberte {{ui:Označené PDF}}. Aby ste tomu predišli, vyberte {{ui:Uložiť na offline použitie}} a počkajte na {{ui:Pripravené offline}}. |
| Stiahlo sa len jedno označené PDF | Prehliadač zablokoval viaceré sťahovania naraz. | Povoľte viaceré sťahovania pre tento web a exportujte znova. |
| (file) nie je projekt TakeoffCraft (nie je to platný JSON). / Toto nie je súbor projektu TakeoffCraft. | Zlý súbor alebo poškodený. | Vyberte súbor `.takeoff.json`. |
| Tento projekt uložil novší TakeoffCraft. Otvorte ho tam. | Súbor pochádza z novšej verzie. | Otvorte ho v novšej verzii. |
| (n) značiek bolo poškodených a vynechaných. | Časť súboru bola poškodená alebo upravená ručne. | Zvyšok sa otvoril. Nakreslite chýbajúce značky znova alebo otvorte staršiu kópiu. |
| Značky chýbajú po opätovnom otvorení | PDF nie sú otvorené alebo sa jedno z nich zmenilo. | Pozri [Uloženie a opätovné otvorenie výkazu výmer](topic:save-and-reopen#when-a-pdf-has-changed). |
| Prehliadač sa pýta "Opustiť stránku?" | Existujú neuložené zmeny. | Zostaňte a uložte pomocou {{key:Mod+S}}. |

## Klávesy a myš

| Príznak | Príčina | Riešenie |
|---|---|---|
| Klávesy písmen nerobia nič | Kurzor je v poli (hľadanie, editor položky, tabuľka). | Kliknite na list alebo stlačte {{key:Tab}} mimo poľa. |
| Koliesko priblíži namiesto posúvania | Koliesko vždy priblíži list. | Ťahajte na posun. |
| Celá stránka sa zväčšila alebo zmenšila | Zoom prehliadača ({{key:Mod+Plus}} alebo {{key:Mod+Minus}}). | Stlačte {{key:Mod+0}}. Priblížte list kolieskom alebo samotnými {{key:Plus}} a {{key:Minus}}. |
| Značka zmizla po stlačení Backspace | Backspace zmaže vybranú značku, keď nekreslíte. | {{key:Mod+Z}} ju vráti späť. |
| Pravé kliknutie na Macu nedokončí | Control-klik sa prijíma ako bežný klik. | Použite klik dvoma prstami so zapnutým sekundárnym klikom alebo stlačte {{key:Enter}}. |

## Dotykové obrazovky

Na dotykovej obrazovke:

- **Ťuknutie** umiestni bod (alebo vyberie značku pomocou {{ui:Select}}). Ťahanie jedným prstom posúva.
- **Dva prsty** štipnutím priblížia okolo bodu medzi nimi a posúvajú, keď sa pohybujú spolu. Položenie druhého prsta zruší to, čo začal prvý, takže štipnutie nikdy nezanechá bod.
- **Dokončite** úsek alebo obrys **dlhým stlačením** (pravý klik), **dvojitým ťuknutím** alebo {{ui:Finish}} na lište dole na liste. Na tej istej lište sú {{ui:Back}} (vezme posledný bod späť) a {{ui:Cancel}}. Plochy sa uzavrú aj ťuknutím na prvý bod.
- Prsty majú väčšie cieľové oblasti: body sa prichytávajú, uzatvárajú a vyberajú z väčšej vzdialenosti a rohové úchyty sú väčšie.

Zadávanie dĺžok potrebuje klávesnicu; klávesnica na obrazovke funguje, keď je pole {{ui:Type}} aktívne.

Na tablete klávesnica a myš alebo touchpad robia prácu s výkazom výmer oveľa jednoduchšou.

## Práca offline

| Tlačidlo alebo príznak | Príčina | Riešenie |
|---|---|---|
| {{ui:Could not save}} | Niektoré súbory aplikácie sa nestiahli pri ukladaní na offline použitie. | Skontrolujte pripojenie a vyberte tlačidlo znova. |
| {{ui:Offline not available}} | Súkromné okná a niektoré spravované počítače blokujú offline kópie. | Použite bežné okno alebo iný prehliadač. |
| "Ukladanie…" sa nikdy nespustí | Ste offline; ukladanie potrebuje pripojenie. | Ukladajte, keď ste online. |
| Aplikácia je po aktualizácii stará | Offline kópia pochádza z predchádzajúceho dňa. | Online vyberte {{ui:Offline ready}}, potom {{ui:Save again (get the newest version)}}. |
| Chcete späť miesto | Offline kópia má približne 6 MB. | Vyberte {{ui:Offline ready}}, potom {{ui:Remove the offline copy}}. |

Pozri [Práca offline](common:offline).

## Stále to nejde

Obnovte stránku, ak aplikácia prestane reagovať. Váš výkaz výmer sa pri obnovení stratí, pokiaľ ste ho neuložili, takže ak môžete, najprv uložte pomocou {{key:Mod+S}}. S otázkami k prehliadaču pozri [Prehliadače a počítače](common:browsers).
