---
title: Gamitin ang TakeoffCraft kasama ng AI assistant
summary: Hayaan ang sarili mong AI assistant o script na basahin ang dami at estimate ng takeoff, magdagdag ng item at marka, magbilang at sumukat sa DWG o DXF, at mag-export: mga pahintulot, pagkonekta sa pamamagitan ng CadCraft Studio, at log ng aktibidad.
keywords: ai, assistant, agent, mcp, model context protocol, script, awtomasyon, dami, estimate, pahintulot, idiskonekta, aktibidad
from: 7fa62ec6
---

## Ano ang matututunan mo

Paano payagan ang AI assistant (o script na isinulat mo) na gumana sa TakeoffCraft, at paano magpasya kung ano ang puwede nitong galawin.

Walang sariling AI ang TakeoffCraft at wala itong ipinapadalang kahit saan. Ikaw ang magdadala ng assistant: anumang program na nagsasalita ng Model Context Protocol (MCP). Binibigyan lang ng TakeoffCraft ito ng mga tool, at ikaw ang pumipili kung alin.

## I-on ito

1. Buksan ang {{ui:Mga setting}} (ang gear sa app bar, o {{key:Mod+,}}) at pumunta sa tab na {{ui:TakeoffCraft}}.
2. Sa ilalim ng {{ui:Mga Assistant}}, lagyan ng tsek ang **Payagan ang mga AI assistant at script na gamitin ang TakeoffCraft**. Naka-off ito hanggang gawin mo iyon.
3. Piliin kung ano ang puwede nitong gawin: naka-tsek na ang **Basahin** sa simula; lagyan ng tsek ang **I-edit**, **I-save** o **I-export** kapag kailangan mo lang ang mga iyon.

Ang mga tool na lampas sa mga pahintulot na itinsek mo ay hindi iaalok sa assistant, at kung humingi pa rin ito ng isa, tinatanggihan ito ng TakeoffCraft at isinusulat sa log ng {{ui:Aktibidad}}. Ang pag-off ng switch ay agad na nagtatapos sa bawat koneksyon; ino-off din ito ng {{ui:I-reset ang mga setting ng TakeoffCraft}}.

## Ikonekta ang iyong assistant

Kumokonekta ang mga assistant sa pamamagitan ng **CadCraft Studio** sa iyong computer: nagpapatakbo ang Studio ng maliit na server na tanging ang computer na ito ang makaaabot, at pinoprotektahan ito ng token na ginagawa nito tuwing magsisimula. Sa Studio, piliin ang {{ui:Ikonekta ang assistant}} at kopyahin ang address at token sa iyong assistant (ipinapakita ng Studio ang eksaktong setting na ipi-paste). Huwag kailanman ibahagi ang token.

:::note
Hindi makapagbubukas ng koneksyon para sa assistant ang browser tab: sa mga app sa browser, walang epekto ang switch hanggang gamitin mo ang CadCraft Studio sa iyong computer.
:::

## Ikaw pa rin ang may kontrol

- **Bawat pagbabago ay isang undo step**, may label na pangalan ng assistant (halimbawa "Assistant: …"). {{key:Mod+Z}} binabawi ang huling pagbabago ng assistant nang buo.
- **Alam mo kung may nakakonekta.** May button sa app bar na nagpapangalan sa assistant habang nakakonekta ito; i-click ito para makita kung ano ang puwede nitong gawin, o para **I-disconnect** ito.
- **Aktibidad.** {{ui:Mga setting}} › {{ui:TakeoffCraft}} › {{ui:Mga Assistant}} › {{ui:Aktibidad}} ay naglilista ng bawat tawag: kailan, aling tool, natapos o tinanggihan. Iniingatan ng {{ui:I-save ang log}} ang isang kopya.

## Ano ang maaaring hilingin ng assistant

| Tool | Pahintulot | Ano ang ginagawa nito |
|---|---|---|
| `app_info`, `sheets_list` | Basahin | Ang takeoff na bukas, ang mga PDF at sheet nito, ang scale at mga marka ng bawat sheet |
| `items_list` | Basahin | Ang mga item kasama ang kanilang unit, rate at formula ng assembly |
| `takeoff_quantities` | Basahin | Dami kada item o kada sheet; ang mga marka sa sheet na walang scale ay nakalista, hindi binibilang bilang zero |
| `takeoff_estimate` | Basahin | Ang presyadong estimate gaya ng kinakalkula ng TakeoffCraft, kasama ang kabuuan nito |
| `takeoff_export` | I-export | Ang sariling CSV o XLSX export ng TakeoffCraft |
| `items_add` | I-edit | Nagdadagdag ng mga item kasama ang kanilang unit, rate at waste |
| `marks_add` | I-edit | Sumusukat ng linya, lawak at bilang sa isang sheet. Haba at lawak lang sa sheet na may scale, hindi kailanman sa sheet na walang scale |
| `cad_sheets`, `cad_catalog`, `cad_count` | Basahin | Sa DWG o DXF na binuksan mo: ang mga sheet at scale nito, ano ang puwedeng bilangin (block, layer at uri, teksto), at eksaktong bilang, gaya ng ginagawa ng {{ui:CAD count}} ([Bilangin mula sa drawing](topic:count-from-a-drawing)) |
| `cad_count_add` | I-edit | Nagbibilang sa drawing at naglalagay ng count mark sa bawat nahanap na object, sa isang hakbang; ang pagbilang ulit ay nagdadagdag lang ng bago |
| `cad_measure` | I-edit | Sumusukat ng linear o area item mula sa sariling linya, arko, polyline at hatch ng drawing, gaya ng ginagawa ng {{ui:Sukatin ang drawing}} ([Sukatin mula sa drawing](topic:measure-from-a-drawing)); sa sheet na may scale lang |
| `usd_export` | I-export | Ang mga sinukat na linya, lawak at bilang ng sheet na may scale bilang 3D check model sa USD (`.usdz`, `.usda` o `.usdc`), gaya ng isinusulat ng {{ui:USD package (.usdz)}} sa 3D check view ([I-export ang 3D check view bilang USD](topic:usd)) |

Kapag naka-tsek ang **I-edit**, nagdadagdag ang assistant ng mga item at marka (bawat tawag ay isang undo step); hindi nito maililipat, mababago o mabubura ang mga markang naroon na.

Ang parehong dami at estimate ay makukuha nang hindi binubuksan ang TakeoffCraft: binubuksan ng CadCraft MCP server ang file na `.takeoff.json` sa folder na ibibigay mo (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), at ipinapakita ng `cadcraft info Job.takeoff.json` ang mga ito sa command line. Binubuksan din nito ang DWG o DXF bilang bagong takeoff sa mga sheet nito (may scale mula sa drawing gaya ng pag-scale ng TakeoffCraft), nagbibilang at sumusukat dito gamit ang parehong `cad_*` tool, nagdadagdag ng item at nagse-save ng takeoff (`takeoff_save`); ang `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` ay nagbibilang mula sa command line.

## Kung may hindi gumana

- **Walang nakikitang tool ng TakeoffCraft ang assistant:** tiyakin na naka-on ang switch sa window na ito, at bukas ang window sa Studio.
- **"needs the export permission":** lagyan ng tsek ang **I-export** sa ilalim ng {{ui:Mga Assistant}}, saka subukan ulit.
- **Mga error na "401" o "token":** nagbago ang token (nag-restart ang Studio, o {{ui:Bagong token}}). Kopyahin ang bago sa mga setting ng assistant.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang gawa, bawat isa kasama ang mga tool na tinatawag nito.
