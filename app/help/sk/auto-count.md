---
title: Automatické spočítanie symbolu
summary: Označte jeden symbol, nechajte TakeoffCraft nájsť ostatné na tomto liste alebo na všetkých otvorených listoch, zhody skontrolujte posúvačom a pridajte ich naraz.
keywords: ľubovoľný uhol, otočený, iná mierka, rôzna mierka, automatický počet, automatické počítanie, vyhľadávanie symbolov, nájsť symboly, vzor, šablóna, zhoda, rozpoznať, nástroj počítania
from: fa68a6c1
---

{{ui:Automatický počet}} nájde každú kópiu symbolu, keď ohraničíte jeden. Potom skontrolujete zhody na liste a pridáte tie, ktoré prijmete, ako značky počtu. Je to pomocník, nie záruka: vždy skontrolujte zhody pred pridaním.

## Hľadanie symbolov

1. Vytvorte alebo kliknite na položku počtu pod {{ui:Položky}}.
2. Otvorte list, na ktorom sa symbol nachádza.
3. Na paneli nástrojov zvoľte {{ui:Automatický počet}} alebo stlačte {{key:S}}.
   Nad listom sa zobrazí lišta: "Potiahnite rámček okolo jedného symbolu na tomto liste."
4. Ak chcete hľadať na všetkých otvorených listoch, nie len na tomto, zaškrtnite {{ui:Hľadať vo všetkých otvorených listoch}}.
5. Priblížte, aby bol symbol dobre vidieť, potom potiahnite rámček tesne okolo jednej jeho kópie. Zahrňte celý symbol; prázdny papier okolo sa orezáva.
   Lišta zobrazí "Hľadanie…" s ukazovateľom priebehu a tlačidlom {{ui:Zrušiť}}. Stránka zostáva odozvná: môžete priblížiť, posúvať a prechádzať medzi listami. Výber iného nástroja alebo stlačenie {{key:Esc}} hľadanie zruší.
6. Po skončení sa zhody zobrazia na liste ako rámčeky vo farbe položky a lišta zobrazí súhrn, napríklad "22 zhôd, 19 na pridanie (3 už spočítané). Kliknutím na rámček ho odmietnete alebo obnovíte."

V {{ui:Automatický počet}} ťahanie po liste kreslí rámček namiesto posúvania. Na posúvanie podržte {{key:Space}} a ťahajte, alebo ťahajte stredným tlačidlom.

## Kontrola zhôd

- **Kliknite na rámček**, ak ho chcete odmietnuť. Odmietnutý rámček je prerušovaný a prečiarknutý. Kliknutím naň znova ho obnovíte.
- **Posuňte posúvač {{ui:Zhoda}}** (od 50 % do 95 %, začína na 75 %). Vyššia hodnota zobrazí len tesné zhody; nižšia zobrazí uvoľnenejšie. Posúvač len filtruje, čo sa našlo; nehľadá znova.
- **Už spočítané**: zhody na mieste, kde už je značka počtu tejto položky, sa na začiatku odmietnu, takže nič nepočítate dvakrát.
- **Ďalšie listy**: keď ste hľadali na všetkých otvorených listoch, prechádzajte medzi nimi zoznamom listov alebo klávesom {{key:PageDown}} a skontrolujte každý. Súhrn uvádza, koľko listov má zhody.

## Pridanie

Zvoľte {{ui:Pridať}}. Tlačidlo uvádza počet, napríklad "Pridať 19 značiek".
Značky počtu sa pridajú do stredu každého prijatého rámčeka: "Pridaných 19 značiek počtu do položky "Dvojzásuvka". Ctrl+Z ich odstráni všetky."

Celá dávka je jeden krok späť, takže jedno {{key:Mod+Z}} ju odstráni.

Ak chcete kontrolu zahodiť bez pridania čohokoľvek, zvoľte {{ui:Zahodiť}} alebo stlačte {{key:Esc}}. Výber iného nástroja ju tiež zahodí.

## Čo nájde a čo prehliadne

TakeoffCraft porovnáva výkres ako pixely so symbolom, ktorý ste ohraničili.

- Nájde symbol otočený o 0°, 90°, 180° a 270°. Ak ho chcete nájsť aj pod ľubovoľným uhlom, pred kreslením rámčeka zaškrtnite na lište automatického počtu {{ui:Ľubovoľný uhol (pomalšie)}}: skúša každých 15°, potom každý nález spresní na stupeň a pol. Trvá to asi šesťkrát dlhšie. Nenájde zrkadlený symbol (pokiaľ nevyzerá zrkadlene rovnako).
- Keď je zaškrtnuté {{ui:Hľadať vo všetkých otvorených listoch}}, list v inej mierke sa hľadá vo veľkosti, akú tam symbol má: svietidlo nakreslené v mierke na pôdoryse 1/8" je polovičné oproti pôdorysu 1/4" a stále sa nájde. Takýto list sa hľadá aj vo veľkosti samotného rámčeka, pre označenia a symboly vytlačené v jednej veľkosti na každom liste. To vyžaduje mierku na oboch listoch; list bez mierky sa hľadá len vo veľkosti rámčeka.
- Veľmi podobné symboly sa môžu zhodovať navzájom: dvojzásuvka a štvorzásuvka alebo dve označenia svietidiel, ktoré sa líšia jedným písmenom. Zvyšujte posúvač, kým nezostanú len správne, a zvyšok odmietnite ručne.
- Symbol prekrytý inými čiarami, šráfovaním alebo textom dosiahne nižšie skóre a môže potrebovať nižšie nastavenie posúvača.
- Veľmi malé rámčeky sa odmietnu: "Tento rámček je príliš malý. Nakreslite ho okolo celého symbolu." Prázdny rámček sa tiež odmietne: "Tento rámček je takmer prázdny. Nakreslite ho okolo symbolu."
- List, ktorý by bol pri veľkosti potrebnej pre tento symbol veľmi veľký, sa preskočí a súhrn uvádza: "1 list bol príliš veľký na hľadanie pri tejto veľkosti symbolu." Ohraničte väčší symbol alebo spočítajte ten list ručne.

Ak sa nič nenájde, stavový riadok hovorí: "Žiadne zhody. Znížte posúvač zhody alebo ohraničte symbol tesnejšie."

## Rýchlosť a prehliadače

Hľadanie beží na pozadí v samostatnom pracovnom procese, takže stránka zostáva odozvná a kedykoľvek ho môžete zrušiť. Každý list sa najprv vykreslí v pracovnej veľkosti priamo na stránke, čo môže na chvíľu zastaviť veľmi veľký list. Beží v aktuálnych prehliadačoch Chrome, Edge, Firefox a Safari. Hľadanie na mnohých listoch trvá dlhšie; ukazovateľ priebehu sa posúva list po liste. Offline funguje automatický počet vtedy, keď lišta aplikácie zobrazuje {{ui:Pripravené offline}}: {{ui:Uložiť na offline použitie}} uchová aj pracovný proces. Pozrite [Práca offline](common:offline).
