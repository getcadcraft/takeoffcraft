---
title: "A disposición da oficina: agrupación, subtotais, título e epígrafes segundo as súas Políticas predeterminadas"
summary: Active o complemento Políticas predeterminadas e faga que o orzamento, as cantidades por folla, as exportacións e o que lee un asistente tomen a disposición de cadros da súa oficina, a mesma que toman os cadros de BimCraft.
keywords: estándar da oficina, disposición da oficina, políticas predeterminadas, complemento, disposición de cadro, agrupar por tipo, agrupar por folla, subtotal, totais, título, epígrafes, maiúsculas, disposición do orzamento, disposición da exportación, configuración
from: cfd2f30a
---

## O que vai facer

Faga que TakeoffCraft dispoña as súas táboas como as emite a oficina, sen configuralo en cada medición. A disposición defínese unha vez, en Políticas predeterminadas, e vale para todas as aplicacións deste ordenador: o que define en BimCraft ou en CadCraft é o que usa TakeoffCraft, e o inverso.

## Pasos

1. Abra **Configuración › Complementos** e active **Políticas predeterminadas**. Está desactivado ata que o faga; con el desactivado, ou sen nada definido, TakeoffCraft é exactamente como era.
2. Abra **Configuración › Global › Políticas predeterminadas** e localice **Disposición de cadro (estándar da oficina)**:

| Política | Que fai en TakeoffCraft |
|---|---|
| Agrupar cadros por | **Tipo** agrupa o orzamento por tipo de elemento (Lineal, Área, Contaxe, Cantidade tipificada). **Nivel** agrupa as cantidades por folla segundo a súa folla. **Cuarto** e **Sen agrupación** deixan ambas sen agrupar |
| Totais nos cadros | **Un subtotal baixo cada grupo e un total** engade un subtotal baixo cada grupo. O total da obra mantense sempre |
| Título do cadro | Unha liña sobre a táboa, por exemplo `{schedule}: disposición da oficina` |
| Epígrafes de columna | Tal como se escriben, EN MAIÚSCULAS ou Con Maiúsculas Iniciais |

3. Peche Configuración. As táboas seguen de inmediato.

## Que a toma

- **Cantidades › Por elemento** e **Por folla**: epígrafes de grupo, un subtotal baixo cada grupo, o título e o formato dos epígrafes. Unha liña baixo o título indica que partes fixo o estándar da súa oficina. As filas son as mesmas: segue escribindo tarifas e desperdicio nelas e pulsando as cifras para seleccionar as súas marcas. Un compoñente ou unha segunda condición queda baixo o seu elemento.
- **O orzamento exportado** (CSV e XLSX): os mesmos grupos e subtotais. No libro de cálculo un subtotal é unha fórmula `SUBTOTAL` sobre o seu grupo, e o total da obra tamén o é, así que nada se conta dúas veces.
- **O que lee un asistente**: `takeoff_estimate` e `takeoff_quantities` (por folla) engaden un bloque `layout` cos grupos, as filas e os subtotais, e indican que partes fixo a oficina.

## O que conserva o seu

- **Cantidades › Por área** indica a súa propia agrupación (por área de oferta) e a conserva.
- O **total da obra**, os recargos do resumo de oferta e as alternativas non se reagrupan.
- Unha agrupación para a que a táboa non ten columna omítese: o orzamento non ten nivel, e as cantidades por folla non teñen tipo.

## Cousas que convén saber

- As políticas gárdanse neste navegador para todas as aplicacións de CadCraft e viaxan no ficheiro de Políticas predeterminadas (**Gardar nun ficheiro** / **Cargar desde un ficheiro** no mesmo lugar), así que unha oficina comparte un só ficheiro.
- Un orzamento exportado como CSV con grupos é para ler. Para traelo de volta como biblioteca de prezos, expórtao sen agrupación.
- A parte de BimCraft deste mesmo estándar: cadros, configuracións e exportacións. TakeoffCraft aínda non ten políticas propias, así que non hai sección de Políticas predeterminadas en Configuración › TakeoffCraft.
