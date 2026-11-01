---
title: Mga file na binubuksan at sine-save ng TakeoffCraft
summary: Mga PDF na pumapasok, takeoff project file, spreadsheet at marked PDF na lumalabas - ano ang laman ng bawat isa, saan ito napupunta, at ano ang nagbabago online, offline at sa pagitan ng mga browser.
keywords: mga file, format, pdf, takeoff.json, project file, xlsx, csv, marked pdf, i-download, i-save, buksan, offline
from: 1bf9be65
---

## Ang mga binubuksan nito

| File | Paano | Mga tala |
|---|---|---|
| PDF (`.pdf`) | {{ui:Open plans}}, {{key:Mod+O}}, o i-drop sa page | Marami nang sabay. Ang bawat page ay nagiging sheet. |
| Takeoff project (`.takeoff.json`) | {{ui:Open takeoff}}, o i-drop sa page | Ang iyong mga item, scale at mark. Puwede mo itong i-drop kasama ng mga PDF nito. |

Nilalaktawan ang ibang file na i-drop sa page, at sinasabi ito ng status bar.

- **Ang mga PDF na may password** ay hindi nabubuksan: "(name) ay may password. Buksan ang kopyang walang password."
- **Ang parehong PDF nang dalawang beses** ay binubuksan nang isang beses lang: "Bukas na ang (name)." Kinikilala ng TakeoffCraft ang mga file ayon sa laman nito, hindi ayon sa pangalan.
- **Ang mga scanned na PDF** ay nabubuksan at nasusukat tulad ng iba; hindi kailangan ng TakeoffCraft ang text sa PDF.
- **Malalaking set ng plano**: bawat PDF ay binabasa nang buo kapag binuksan (para ma-fingerprint), kaya ang napakalaking file ay tumatagal nang kaunti. Iginuguhit ang mga thumbnail isa-isa habang nag-scroll ka.

## Ang mga sine-save nito

Ang bawat save ay isang download. Walang isinusulat pabalik sa iyong mga PDF.

| Pipiliin mo | Makukuha mo | Ano ang laman |
|---|---|---|
| {{ui:Save takeoff}} | `(name).takeoff.json` | Mga item, assembly, rate, sheet scale at bawat mark, nakatali sa bawat PDF ayon sa laman nito. Walang PDF page. |
| {{ui:XLSX}} | `(name).xlsx` | Apat na worksheet: Estimate (may live formula), By sheet, Marks, Scales. |
| {{ui:CSV}} | `(name).csv` | Ang estimate bilang plain values, isang row bawat item at component. |
| {{ui:Marked PDF}} | `(PDF name) (takeoff).pdf` | Kopya ng bawat bukas na PDF na may mark, kasama ang takeoff na iginuhit sa mga page nito at legend. Isang file bawat PDF. |

Kinukuha ang pangalan mula sa unang PDF na binuksan mo sa takeoff na ito. Wala pang kahon para sa pagpapalit ng pangalan: palitan ang pangalan ng na-download na file kung gusto mo ng ibang pangalan.

Tingnan ang [I-export ang estimate at isang marked PDF](topic:export-estimate) at [Mga column ng export](topic:export-columns).

## Saan napupunta ang mga download

Sine-save ito ng iyong browser kung saan nito sine-save ang bawat download, kadalasan sa Downloads folder. Hanapin ito sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}}. Kung nakatakda ang browser mo na magtanong kung saan isi-save ang bawat file, magtatanong ito.

:::chromium
Ang {{ui:Marked PDF}} na may ilang marked PDF ay nagda-download ng ilang file nang sabay. Maaaring magtanong ang Chrome at Edge nang isang beses kung puwede ng site na ito mag-download ng maraming file. Piliin ang Payagan.
:::

:::safari
Sine-save ng Safari sa Downloads maliban kung binago mo ang download location sa Safari Settings, sa ilalim ng General.
:::

## Bakit magkahiwalay ang project file at ang mga PDF

Ang file na `.takeoff.json` ay naglalaman lamang ng iyong takeoff. Muli nitong hinahanap ang mga PDF nito ayon sa laman ng mga ito (fingerprint ng bawat file), kaya:

- Hindi mahalaga kung papalitan ng pangalan o ililipat ang isang PDF.
- Ang PDF na binago o na-save muli ng ibang program ay ituturing na ibang file, kahit magkapareho ang pangalan.
- Ang mga mark sa mga PDF na hindi bukas ay binibilang pa rin sa mga kabuuan.

Tingnan ang [I-save at buksan muli ang takeoff](topic:save-and-reopen).

## Online at offline

Ang iyong mga PDF at takeoff ay hindi kailanman umaalis sa iyong computer, online man o offline. Ang koneksyon ay mahalaga lamang sa pag-load ng mismong TakeoffCraft.

Para magtrabaho nang walang koneksyon, i-save muna ang app habang online ka:

1. Piliin ang {{ui:Save for offline}} sa app bar sa itaas.
   Nagbibilang pataas ang button, "Saving 12 of 40", habang nagse-save ito.
2. Hintayin ang {{ui:Offline ready}}.

Ang pag-save ng TakeoffCraft ay nagtatago sa iyong browser ng app, ng help na ito, ng PDF reader, ng PDF writer na ginagamit ng {{ui:Marked PDF}}, at ng auto count worker, mga 6 MB. Kapag sinabi nang {{ui:Offline ready}}, gumagana na ang lahat offline: pagbubukas ng PDF, pagsukat, {{ui:Auto count}}, {{ui:Save takeoff}}, {{ui:XLSX}}, {{ui:CSV}} at {{ui:Marked PDF}}.

| Ang nakasulat sa button | Ibig sabihin |
|---|---|
| {{ui:Save for offline}} | Hindi pa nase-save sa browser na ito. Piliin ito para mag-save. |
| Nagse-save (n) sa (m) | Nagse-save na ngayon. |
| {{ui:Offline ready}} | Na-save na. Piliin ito para sa {{ui:Save again (get the newest version)}} o {{ui:Remove the offline copy}}. |
| {{ui:Could not save}} | May ilang file na hindi na-download. Tingnan ang koneksyon mo at piliin ulit. |
| {{ui:Offline not available}} | Hindi kayang panatilihin ng window ng browser na ito ang offline copy (hinaharangan ito ng private window at ilang managed computer). |

Higit pa rito, kasama kung gaano katagal tatagal ang na-save na kopya sa bawat browser: [Pagtatrabaho offline](common:offline).

:::offline
Offline ka. Kung nakalagay sa app bar ang {{ui:Offline ready}}, gumagana ang lahat. Kung hindi, ang mga bahaging hindi pa na-load ng TakeoffCraft sa tab na ito (ang PDF writer para sa {{ui:Marked PDF}}, ang auto count worker) ay hindi mao-load ngayon, at hihinto ang {{ui:Marked PDF}} sa "Hindi maisulat ang marked PDF". Ligtas ang iyong takeoff sa alinmang kaso: {{ui:Save takeoff}}, {{ui:XLSX}} at {{ui:CSV}} ay hindi nangangailangan ng koneksyon. Huwag i-reload ang tab hangga't wala kang koneksyon.
:::

:::online
Online ka. Bago ang site visit o flight, piliin ang {{ui:Save for offline}} at hintayin ang {{ui:Offline ready}}.
:::

## Spreadsheets

Ang XLSX ay may live formula, kaya nire-recalculate ng spreadsheet program ang estimate kapag binuksan ang file, at pinananatili itong tama kapag binago mo ang rate o waste doon. Nasuri na ang workbook sa LibreOffice Calc, na nag-recalculate ng bawat kabuuan sa parehong sentimo. Hindi pa ito nabubuksan sa Excel.

Ang CSV ay plain values na may byte order mark, kaya tama ang pagbasa ng mga spreadsheet program sa mga karakter gaya ng m².

## Desktop at cloud

:::desktop
Mula sa 0.5, ang desktop app ay CadCraft Studio: TakeoffCraft at ang iba pang pitong app sa iisang install. Walang hiwalay na installer para sa TakeoffCraft.
:::

Hindi pa available ang cloud saving. Panatilihin ang iyong mga file na `.takeoff.json` kasama ng mga PDF ng trabaho, at i-backup ang mga ito tulad ng ibang file. Tingnan ang [Saan napupunta ang iyong mga file](common:your-files).
