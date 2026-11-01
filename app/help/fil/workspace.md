---
title: Ang screen ng TakeoffCraft
summary: Paglilibot sa window ayon sa pangalang nakikita sa screen - ang toolbar, ang listahan ng sheet, ang sheet, ang panel na Items, ang talahanayang Quantities at ang status bar.
keywords: screen, layout, ribbon, project browser, toolbox, info box, toolbar, mga panel, listahan ng sheet, items panel, quantities, status bar, paglilibot, interface
from: ab1115e0
---

Pinupuno ng TakeoffCraft ang browser window sa ilalim ng app bar ng CadCraft. Mula sa itaas pababa at mula kaliwa pakanan:

| Bahagi | Saan | Para saan |
|---|---|---|
| App bar | Pinakataas | Ang pangalan ng app, ang bersyon, {{ui:About TakeoffCraft}} (Tungkol sa TakeoffCraft), {{ui:Help}} ({{key:F1}}), {{ui:Save for offline}}, {{ui:Settings}} ({{key:Mod+,}}), ang button na {{ui:Full screen}} at ang switch ng tema na {{ui:Paper}} / {{ui:Model}}. |
| Toolbar | Sa ilalim ng app bar | Bawat command, nakapangkat: {{ui:File}}, {{ui:Export}}, {{ui:Scale}}, {{ui:Takeoff}}, {{ui:Edit}}, {{ui:View}}. |
| Sheets | Kaliwa | Bawat page ng bawat bukas na PDF, may thumbnail, scale nito at bilang ng mark. |
| The sheet | Gitna | Ang bukas na page. Dito ka sumusukat. |
| Items | Kanan | Ang mga takeoff item mo, ang mga setting ng napiling item, at ang napiling mark. |
| Quantities | Ibaba | Mga dami at gastos ayon sa item o sheet, at ang job total. |
| Status bar | Pinakababa | Ang live na sukat, mga mensahe, ang hint na 45°, at ang zoom. |

## Ang toolbar

I-hover ang anumang button para makita kung ano ang ginagawa nito at ang key nito.

| Pangkat | Mga button |
|---|---|
| {{ui:File}} | {{ui:New}} (walang laman na takeoff), {{ui:Open PDFs}} ({{key:Mod+O}}), {{ui:Open takeoff}} (isang project na `.takeoff.json`), {{ui:Save takeoff}} ({{key:Mod+S}}) |
| {{ui:Export}} | Isang menu: {{ui:XLSX}}, {{ui:CSV}}, {{ui:Marked PDF}} |
| {{ui:Scale}} | {{ui:Calibrate}} ({{key:K}}), {{ui:Check}} ({{key:D}}), at ang listahang {{ui:Preset}} |
| {{ui:Takeoff}} | {{ui:Select}} ({{key:V}}), {{ui:Linear}} ({{key:L}}), {{ui:Area}} ({{key:A}}), {{ui:Circle}} ({{key:O}}), {{ui:Arc}} ({{key:R}}, isang on/off switch), {{ui:Deduct}} ({{key:E}}, isang on/off switch), {{ui:Cut-out}} ({{key:X}}), {{ui:Count}} ({{key:C}}), {{ui:Auto count}} ({{key:S}}) |
| {{ui:Edit}} | {{ui:Undo}} ({{key:Mod+Z}}), {{ui:Redo}} ({{key:Mod+Y}}), {{ui:Copy}} ({{key:Mod+C}}), {{ui:Paste}} ({{key:Mod+V}}), at {{ui:More}}: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}}, {{ui:Select none}} |
| {{ui:View}} | {{ui:Fit page}} ({{key:F}}), {{ui:Fit width}} ({{key:W}}) |

Nakikitang pinindot ang tool na ginagamit mo. Nananatiling pinindot ang mga button na {{ui:Arc}} at {{ui:Deduct}} habang naka-on ang mga ito.

## Mga sheet (kaliwa)

- **Ang Search sheets** ay nagsasala ng listahan ayon sa pangalan ng sheet, pangalan ng file o page label.
- Bawat sheet ay may thumbnail (iginuguhit habang nag-scroll), pangalan nito, at alinman sa scale nito o **No scale**.
- Nasa kanang bahagi ng bawat row ang bilang ng mark ng sheet. Kapag may naka-highlight na item, ang bilang ng mga mark ng item na iyon sa sheet ang ipinapakita.
- I-click ang sheet para buksan ito. Ang {{key:PageDown}} at {{key:PageUp}} ay lumilipat sa susunod at nakaraang sheet sa listahan.
- Kapag sumasaklaw ang takeoff sa mga PDF na hindi bukas, may tala sa ilalim ng listahan na nagpapangalan sa mga ito. Tingnan ang [I-save at buksan muli ang takeoff](topic:save-and-reopen).

Galing sa PDF ang mga pangalan ng sheet: ang page label na gaya ng `A-101` ay nagiging pangalan ng sheet. Ang page na walang label ay pinangalanan ayon sa file at numero ng page, gaya ng "Plans, page 3". Kapag maraming PDF ang bukas, ipinapakita rin ng mga sheet na may label ang pangalan ng file.

## Ang sheet (gitna)

- Ipinapakita ng bar sa ilalim ng sheet ang pangalan at scale nito, o "Wala pang scale: pumili ng preset o i-calibrate". Ang mga button nito: {{ui:MarkupCraft}} (kapag kayang tanggapin ng app na iyon ang PDF; tingnan ang [Simulan ang takeoff at magbukas ng plan set](topic:open-plan-set)), {{ui:Compare}} (mas lumang bersyon ng sheet sa ibabaw ng isang ito: [Ihambing ang binagong sheet](topic:compare-revisions)), "(n) na susuriin" (mga minarkahang mark, kapag mayroon), at {{ui:3D}} (ang [3D check view](topic:check-in-3d)).
- Bago magbukas ng kahit anong PDF, may maikling gabay na may limang hakbang sa gitna.
- Nag-zoom ang wheel sa kinaroroonan ng pointer. I-drag para mag-pan. Tingnan ang [Keyboard at mouse](topic:keyboard).
- Habang ginagamit mo ang {{ui:Auto count}}, may lalabas na bar na may mga kontrol nito sa itaas ng sheet.

## Items (kanan)

Sa itaas, ang listahang {{ui:Bid area}}: ang gusali, palapag o phase kung saan pumupunta ang mga bagong mark ([Mga bid area](topic:bid-areas)).

- Ang {{ui:New item}} ay nagbubukas ng maliit na form: isang pangalan, isang uri ({{ui:Linear (length)}}, {{ui:Area}} o {{ui:Count}}), at {{ui:Add}}.
- Ipinapakita ng listahan ang kulay, icon ng uri, pangalan at dami ng bawat item. I-click ang item para gumuhit gamit ito at i-highlight ang mga mark nito sa bawat sheet. I-click itong muli para itigil ang highlighting.
- Sa ilalim ng listahan, ang **Item: (name)** ay ang item editor: pangalan, uri, kulay, unit, taas o lalim, waste, rate ng materyal at labor, ang mga nasukat na halaga, at ang {{ui:Assembly}}. Tingnan ang [Gumawa ng takeoff item](topic:create-items).
- Lumalabas ang **Selected mark** kapag pumili ka ng mark: aling item ito kabilang, ang sheet nito, mga sukat nito, at mga button gaya ng {{ui:Add a cut-out}} at {{ui:Delete mark}}. Kapag maraming mark ang napili, nagiging **Selected marks** ito: ilang mark ng bawat item, at ang {{ui:Copy}}, {{ui:Duplicate}}, {{ui:Cut}} at {{ui:Delete marks}}.
- Nagtatapos ang item editor sa {{ui:Copy item}} at {{ui:Duplicate item}}: isang item na kasama ang assembly at gastos nito, nang walang mark. Tingnan ang [Kopyahin, i-paste at i-duplicate ang mga mark](topic:copy-paste).

## Quantities (ibaba)

- {{ui:By item}} ay naglilista ng bawat item at ng mga component ng assembly nito, kasama ang dami, waste, rate at pinalawak na gastos. Puwede mong i-type nang direkta sa talahanayan ang waste at rate.
- {{ui:By sheet}} ay naglilista ng dami ng bawat item sa bawat sheet.
- Lumalabas ang babalang nagsisimula sa **Hindi kumpleto:** kapag may naiwan sa mga kabuuan.
- {{ui:Job total}} ay nasa kanan ng header.
- Ang arrow button sa pinakakanan ay nagtatago o nagpapakita ng talahanayan para mabigyan ng mas maluwag na espasyo ang sheet.

Tingnan ang [Basahin ang quantities at ang estimate](topic:read-quantities).

## Status bar (ibaba)

Mula kaliwa pakanan: ang live na sukat habang gumuguhit ka (haba, area, radius o resulta ng check), ang kahon na {{ui:Type}} habang nagta-type ka ng haba, mga mensahe mula sa TakeoffCraft, ang paalalang "Shift: nagsi-snap sa 45°" (o "Nagsi-snap sa 45°; pinalalaya ng Shift ang anggulo" kapag naka-on iyon sa [Settings](topic:settings)), ang button na {{ui:Snap}} (nagsi-snap sa mga linya ng drawing, naka-on kapag naka-highlight; {{key:F3}}), at ang porsyento ng zoom.

:::tip
Basahin ang status bar kapag may hindi nangyari. Doon ipinapaliwanag ng TakeoffCraft kung bakit tinanggihan nito ang isang click, halimbawa "Wala pang scale ang sheet na ito".
:::

## Iba pang layout

Ang lahat ng nasa itaas ay ang layout na {{ui:CadCraft classic}}, ang panimula. Ang {{ui:Settings}} ({{key:Mod+,}}) › {{ui:Global}} › {{ui:Layout}} ay nag-aalok ng dalawa pa; pareho ang mga tool at key sa lahat ng tatlo, at ang muling pagpili sa {{ui:CadCraft classic}} ay ibinabalik ang bawat kontrol sa dating lugar nito.

| Layout | Sa TakeoffCraft |
|---|---|
| {{ui:Ribbon and project browser}} | Ang {{ui:Takeoff ribbon}} sa itaas ([Mga menu, key at mouse](topic:menus-keys-and-mouse)), isang bar para sa tumatakbong tool, isang tab para sa bawat sheet na binuksan mo (ang Model at mga layout ng drawing ay sheet din) na may mga preset ng scale at {{ui:Fit page}} sa ilalim ng sheet. Ang kaliwang panel ay may {{ui:Properties}} (ang napiling item, note o mark) sa ibabaw ng {{ui:Takeoff browser}}: {{ui:Sheets}} (i-click para buksan sa tab), {{ui:Conditions}} (i-click para gumuhit gamit ito) at {{ui:Estimate}} (kabuuan ng bawat item at ng job); ang mga thumbnail ang pangalawang tab nito. |
| {{ui:Toolbox and info box}} | Ang toolbar sa ibabaw ng sheet, isang info box na may {{ui:Bid area}}, ang tumatakbong tool o ang pagpili, at ang sheet bar, isang hanay ng mga takeoff tool sa kaliwa, isang tab para sa bawat sheet, at {{ui:Snap}} at zoom sa ilalim ng sheet. |

Habang bukas ang [3D check view](topic:check-in-3d), umaatras ang mga tab ng sheet at ang bar sa ilalim ng sheet; isara ang 3D view para muling sumukat. Sa telepono, laging ang phone layout ang tumatakbo.

## Full screen at mga tema

Ang button na {{ui:Full screen}} sa app bar, o ang {{key:Ctrl+Shift+F}} (Control sa lahat ng platform, pati sa Mac), ay nagpapalipat-lipat sa normal, full screen, at full screen na nakatago ang mga bar. Kapag nakatago ang mga bar, ilipat ang pointer sa itaas na gilid para ipakitang muli ang mga ito.

{{ui:Paper}} ang light theme at {{ui:Model}} ang dark. Sa {{ui:Model}}, ibinabaligtad ang drawing (mga light na linya sa dark) sa screen lamang; hindi kailanman binabago ang mga export.
