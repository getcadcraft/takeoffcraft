---
title: Incidències, revisions i registre de canvis del dibuix
summary: Mantén un únic historial d'incidències amb el model de l'arquitecte. Importa les incidències, registra instruccions d'obra, plànols de taller i models enllaçats contra una incidència, i llegeix el registre de canvis del dibuix.
keywords: incidència, revisió, revisions, registre de canvis, registre de canvis del dibuix, registre de plànols, instrucció d'obra, plànol de taller, model enllaçat, licitació, construcció, historial d'incidències, quadre d'amidaments, amidament
from: 8d8f6e68
---

## Què hi fareu

Treballeu amb el mateix historial d'incidències que la resta de l'equip. Veureu quins fulls s'han emès a quina revisió, i registrareu el que passa a obra contra la incidència a què pertany.

## Passos

1. Obriu **Incidències i revisions**.
2. Trieu **Llegeix un historial d'incidències** i seleccioneu el fitxer `.issues.json` desat des de BimCraft o una altra aplicació. Les seves incidències i registres s'afegeixen als vostres. No se'n reemplaça res.
3. Trieu **Afegeix un registre** per a una instrucció d'obra, un plànol de taller, un conjunt de marques, un model enllaçat o una nota. Seleccioneu la incidència a què pertany i el seu estat. Un fitxer que trieu es registra pel seu nom, mida i SHA-256; el fitxer es queda on és.
4. **Registre de canvis del dibuix** mostra una fila per a cada full i una columna per a cada incidència. Una revisió entre parèntesis s'ha tornat a emetre sense canvis.
5. **Baixa el registre de canvis (CSV)** desa les incidències, la taula de fulls i els registres. **Desa l'historial d'incidències** escriu un fitxer que la resta d'aplicacions poden llegir.

## Bona cosa de saber

- **Registra una incidència** emet els vostres fulls mesurats, per exemple amb un quadre d'amidaments. **Canvis des de** indica després quins fulls s'han tornat a mesurar després d'aquella incidència.
- L'historial es desa al fitxer d'amidament. Cada canvi es pot desfer amb un pas de Desfés.
- Llegir el mateix fitxer dues vegades no afegeix res dues vegades. Quan dues còpies tenen el mateix registre, es conserva la més nova.
