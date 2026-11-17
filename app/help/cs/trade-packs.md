---
title: Oborové balíky
summary: Přidejte do cenové knihovny bezplatné sestavy pro obor, odeberte je jedním krokem a sdílejte vlastní knihovnu jako balík.
keywords: oborový balík, balík, sestavy, šablony, počáteční položky, elektroinstalace, sádrokarton, kostrukce, malba, beton, podlahy, zdivo, krytina, obklad, tesařství, instalatérství, vzduchotechnika, izolace, zahradní úpravy, terasy, generální dodavatel, csi, masterformat, cc0, přidat, odebrat, sdílet
from: d3c036be
---

**Oborový balík** je sada hotových položek pro jeden obor: každá s jednotkou, výškou nebo hloubkou, odpadem a svou **sestavou**, tedy díly a vzorci, které změřený úsek, plochu nebo počet převedou na materiály. Sádrokartonová příčka například přinese svůj profil, sloupky, desky, šrouby, pásku a tmel.

Balíky se přidávají do vaší [cenové knihovny](topic:price-library) a odtud pak přidáte jejich položky do libovolného výkazu výměr.

## Přidání balíku

1. Otevřete {{ui:Knihovna}} nahoře v panelu {{ui:Položky}}, pak {{ui:Oborové balíky…}}.
2. Zvolte {{ui:Jednotky}}: imperiální (LF, SF), metrické (m, m²) nebo obojí. Každá sestava je v obou soustavách.
3. Zvolte {{ui:Přidat}} vedle balíku.

Položky balíku se objeví v knihovně, označené názvem balíku. Chcete-li je použít, zaškrtněte je v knihovně a zvolte {{ui:Přidat do výkazu}}.

:::note
**Balík nepřináší ceny.** Jeho položky v knihovně ukazují "nastavte sazbu". Sazby jsou vaše: zapište je do knihovny nebo do editoru položky, nebo importujte svůj ceník jako CSV a použijte {{ui:Aktualizovat ceny}}.
:::

Pokud už ve vaší knihovně máte položku se stejným názvem a typem, balík ji ponechá beze změny. Přidání balíku znovu nahradí jeho vlastní položky novou verzí.

## Odebrání balíku

V {{ui:Oborové balíky…}} zvolte {{ui:Odebrat}} vedle balíku, který jste přidali, a pak ještě jednou pro potvrzení. Všechny položky z něj opustí knihovnu jedním krokem. Položky, které jste už přidali do výkazu, v tom výkazu zůstanou.

## Co je v balíku

Pod balíkem zvolte {{ui:Zdroje a podrobnosti}} a uvidíte, podle čeho byla každá sestava napsána: stavební předpisy, normy a montážní příručky oborových sdružení. V knihovně podržte ukazatel nad položkou a přečtete si její zdroje a předpoklady, například rozteč sloupků nebo vydatnost barvy. Ověřte je podle své zakázky a technických listů výrobků a upravte vzorce tam, kde se liší (viz [Sestavy a vzorce](topic:assemblies)).

Každý balík je označen **Startovací: zatím neověřeno rozpočtářem**, dokud jej neprojdou praktičtí rozpočtáři.

Každá položka také nese své číslo CSI MasterFormat, například `09 21 16`.

## Sdílení vaší knihovny jako balíku

{{ui:Exportovat jako balík…}} v knihovně ji uloží jako soubor balíku (`.ccpack.json`), který může kdokoli přidat přes {{ui:Otevřít soubor balíku…}}. Ve výchozím nastavení vynechá položky, které pocházejí z balíků, jež jste přidali, a neobsahuje sazby. Zaškrtnutím {{ui:Zahrnout mé sazby jako ukázkové sazby}} odešlete i své sazby: odejdou označené regionem a datumem, který zadáte, a ten, kdo balík přidá, rozhodne, zda je použije.

Soubory balíků jsou jen data, nikdy ne programy. TakeoffCraft zkontroluje každou část souboru, než ji použije, a vynechá vše, co neumí přečíst.
