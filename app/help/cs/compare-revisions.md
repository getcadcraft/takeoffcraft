---
title: Porovnání upraveného listu a přesun výkazu
summary: Položte starý list přes jeho revizi, srovnejte je, uvidíte, co se změnilo, a přesuňte výkaz na nový list, přičemž značky k ověření budou označeny.
keywords: revize, revidovaný, porovnání, překryv, starý, nový, změny, dodatek, bulletin, znovu vydání, přesun výkazu, přenos, přenést, zarovnat, označené, kontrola
from: 3a1d9fe0
---

Když je list znovu vydán, nemusíte ho měřit znovu. Otevřete staré PDF i nové, porovnejte oba listy a přesuňte výkaz. TakeoffCraft označí každou značku, kde se výkres změnil, takže zkontrolujete ty a ostatní ponecháte.

## Porovnání

1. Otevřete obě PDF: starou sadu i upravenou ({{ui:Otevřít plány}}; mohou být v jednom souboru nebo ve více).
2. Zobrazte **nový** list.
3. Zvolte {{ui:Porovnat}} na liště listu pod výkresem.
4. Vyberte starý list v seznamu. TakeoffCraft navrhne list se stejným číslem v druhém PDF, nebo stejnou stránku. Zvolte **Porovnat**.

Starý výkres nyní leží přes nový červeně. Kde se oba shodují, červené čáry leží na černých; kde se liší, vidíte jen červené čáry (odstraněné) a jen černé čáry (přidané). Pruh na dolní straně listu obsahuje kroky níže; {{key:Esc}} nebo {{ui:Zavřít}} porovnávání ukončí.

## Zarovnání

Znovu vydané listy bývají vytištěny mírně posunuté: přesunuté na stránce nebo v jiné velikosti. Pokud červený výkres neleží na černém, zvolte **Zarovnat podle dvou bodů** a klikněte čtyřikrát:

1. bod na starém (červeném) výkresu, například střed sloupu nebo roh budovy,
2. stejný bod na novém (černém) výkresu,
3. druhý bod na červeném výkresu, daleko od prvního,
4. stejný bod na černém výkresu.

Červený výkres se přesune, otočí a změní měřítko tak, aby seděl na černý. Stavový řádek ukazuje, kolikrát je nový výkres větší („velikost × 1.000“, pokud je stejný). Pro výběr bodů přibližte: čím přesněji kliknete, tím lepší shoda.

## Najít změny

Zvolte **Najít změny**. TakeoffCraft porovnává kresbu obou výkresů: kresba jen na starém listu se změní na červenou, kresba jen na novém na modrou, a stavový řádek je spočítá. Čáry posunuté o vlásek (opětovné vykreslení) se nepočítají jako změny.

Také prochází každou značku na starém listu a počítá ty, které leží tam, kde se výkres změnil:

- úsek nebo plocha, pokud se výkres změnil na jednom z jejich konců nebo rohů, nebo podél alespoň asi šestiny jejich délky;
- počet, pokud se cokoli změnilo bezprostředně vedle něj.

## Přesun výkazu

Zvolte **Přesunout výkaz sem**. Každá značka na starém listu se přesune na nový přes zarovnání, v jednom kroku zpět. Ty, které leží vedle změny, se označí: vykreslí se s oranžovou září a lišta listu ukáže „(n) ke kontrole“.

Pokud nový list neměl měřítko, převezme měřítko starého listu (upravené, pokud se výkresy kvůli zarovnání museli zvětšit nebo zmenšit). Pokud již má jiné měřítko, TakeoffCraft se nejprve zeptá: přesunuté značky se měří v měřítku nového listu.

## Kontrola označených značek

1. Zvolte „(n) ke kontrole“ na liště listu. Přiblíží se k další označené značce a vybere ji; její panel uvádí, proč je označena.
2. Opravte značku, pokud se pod ní výkres změnil (přetáhněte její rohy, přidejte nebo smažte značky, nebo ji znovu odeberte).
3. Zvolte **Zkontrolováno** v jejím panelu. Označení zmizí a počet na liště listu klesne.

Označení se ukládají spolu s výkazem, takže je můžete zkontrolovat později.

:::note
Porovnávání funguje na vektorových PDF i na skenech, protože porovnává to, co je nakresleno. Sken, který je zešikmený nebo roztažený, může zarovnat jen přibližně dvěma body; pak zkontrolujte další značky okem.
:::
