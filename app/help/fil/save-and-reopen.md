---
title: I-save at buksan ulit ang takeoff
summary: I-save ang takeoff bilang .takeoff.json na project, buksan ulit ito kasama ang parehong PDF, at kung ano ang mangyayari kapag may nawawala o nagbagong PDF.
keywords: takeoff sa loob ng pdf, embed, attachment, i-save, buksan, buksan ulit, project, takeoff.json, ipagpatuloy, magpatuloy, binagong pdf, nagbagong pdf, nawawalang pdf, backup, autosave, mabawi, crash
from: bd5080a6
---

Naka-save ang takeoff bilang maliit na project file, `(name).takeoff.json`. Hawak nito ang iyong mga item, assembly, rate, scale ng bawat sheet at bawat marka. **Hindi** nito hawak ang mga PDF; hinahanap nito ulit ang mga ito ayon sa kanilang nilalaman.

## I-save

1. Piliin ang {{ui:I-save ang takeoff}} sa grupong {{ui:File}}, o pindutin ang {{key:Mod+S}}.
   Dina-download ng browser mo ang `(name).takeoff.json`. Sinasabi ng status bar ang "Na-save ang (name).takeoff.json. Magbubukas ito ulit sa ibabaw ng parehong PDF (tinutugma sila ayon sa kanilang nilalaman)."
2. Ilipat ang file sa tabi ng mga PDF ng job, para magkasama ang dalawa.

Bawat save ay nagda-download ng bagong file. Maaaring pangalanan ng browser mo ang pangalawa bilang `(name) (1).takeoff.json`; itago ang pinakabago.

Ang pangalan ay galing sa unang PDF na binuksan mo sa takeoff na ito.

:::note
Ang {{ui:I-save ang takeoff}} pa rin ang tanging paraan para itago ang takeoff bilang file. Habang nagtatrabaho ka, nag-iingat din ang TakeoffCraft ng recovery copy sa browser na ito (tingnan sa ibaba), at hindi pa available ang cloud saving. Kung susubukan mong isara ang tab na may hindi naka-save na pagbabago, tatanungin ka ng browser kung aalis ka.
:::

## Panatilihin ang takeoff sa loob ng PDF

{{ui:I-export}} › {{ui:PDF na may takeoff sa loob}} ay nagda-download ng kopya ng bawat bukas na PDF, na pinangalanang gaya ng `Plans (with takeoff).pdf`, na may dalang buong takeoff bilang attachment: mga item, marka, scale, bid area, lahat ng hawak ng `.takeoff.json`. Hindi ginagalaw ang mga page nito, kaya magmumukha at mag-p-print itong gaya ng orihinal, at ililista ng ibang PDF reader ang takeoff sa ilalim ng kanilang mga attachment.

Buksan ang PDF na iyon sa TakeoffCraft (sa alinmang paraan ng pagbubukas ng PDF) at tatanungin ka nito ng **May takeoff sa loob ang PDF na ito**: piliin ang {{ui:Buksan ang takeoff}} para makuha ito, o {{ui:PDF lang}} para buksan lang ang drawing. Ang kopya ay kumakatawan sa PDF na pinanggalingan nito, kaya ang `.takeoff.json` na naka-save mula sa alinman ay bumubukas sa dalawa.

Kapag maraming PDF, dala ng bawat kopya ang buong takeoff; buksan silang magkasama. Ang pag-save ulit mula sa kopya ay pumapalit sa takeoff sa loob nito, hindi nagdadagdag ng pangalawa. Ang `.takeoff.json` pa rin ang file na dapat itago: maliit ito, at ito ang isinusulat ng autosave at ng desktop app.

## Kung huminto ang tab o ang browser

Ilang segundo pagkatapos ng bawat pagbabago, nag-iingat ang TakeoffCraft ng kopya ng takeoff sa sariling storage ng browser na ito, kasama ang mga PDF nito kapag umabot ang kabuuan ng 64 MB o mas kaunti. Walang ina-upload. Kapag na-save mo ang takeoff, nagsimula ng bago, o nagbukas ng ibang project, mawawala ang kopya.

Kung mag-crash ang tab, mag-shut down ang browser o computer, o umalis ka na may hindi naka-save na pagbabago, sa susunod na buksan mo ang TakeoffCraft, tatanungin ka nito ng **Bawiin ang iyong trabaho?** at ililista ang takeoff ayon sa pangalan. Piliin ang **Bawiin** para makuha ito: bumabalik ang mga item, marka at scale, at bumubukas ulit ang mga PDF nito kung naitago ang mga ito. Sinasabi ng status bar ang "Nabawi ang (name). Hindi pa ito naka-save sa file: iniingatan ito ng {{ui:I-save ang takeoff}}." Kapag masyadong malaki ang mga PDF para itago, buksan ulit ang mga ito; lilitaw ang mga marka sa mga sheet nila. Higit pa: [Bawiin ang iyong trabaho](common:recover).

## Buksan ulit

1. Buksan ang TakeoffCraft.
2. I-drop ang `.takeoff.json` na file at ang mga PDF nito sa page nang sabay. O piliin ang {{ui:Buksan ang plano}} para sa mga PDF at {{ui:Buksan ang takeoff}} para sa project, sa alinmang pagkakasunod.
   Sinasabi ng status bar ang "Nabuksan ang (name): 12 item, 340 marka." Nakukuha ng bawat sheet ang scale nito, at lumilitaw ang mga marka sa mga sheet nila.

Hindi mahalaga ang pagkakasunod ng mga PDF, pati ang kanilang pangalan ng file o folder. Kinikilala ng TakeoffCraft ang bawat PDF sa pamamagitan ng fingerprint ng nilalaman nito.

Kung magbubukas ka ng project habang may hindi naka-save na pagbabago ang kasalukuyang takeoff, magtatanong muna ang TakeoffCraft: **Kanselahin**, **Itapon ang mga pagbabago**, o **I-save muna ang takeoff**. Pinapalitan ng pagbubukas ng project ang kasalukuyang mga item at marka; ang mga PDF na bukas na ay mananatiling bukas.

## Kapag nawawala ang PDF

Kapag binuksan mo ang project nang wala ang lahat ng PDF nito, idinadagdag ng status bar ang "Buksan ang mga PDF nito para makita ang mga marka (nakalista sa ilalim ng Sheets)." Sa ilalim ng listahan ng sheets, may note na nagsasabing:

"Sakop din ng takeoff na ito ang mga PDF na hindi bukas. Nabibilang ang kanilang mga dami; buksan sila para makita at ma-edit ang kanilang mga marka:"

kasunod ang mga pangalan at laki ng file. Binibilang pa rin ang kanilang mga marka sa bawat total at export, gamit ang mga scale na pinagsukatan ng mga ito. Buksan ang mga PDF na iyon para makita at ma-edit ang mga marka.

## Kapag nagbago ang PDF

Ang PDF na binago, o basta na-save ulit ng ibang program, ay may ibang nilalaman, kaya **ibang file** ito para sa TakeoffCraft, kahit pareho ang pangalan. Sa note sa ilalim ng listahan ng sheets, sinasabi ng ganitong file na "may bukas na file na may ganitong pangalan, pero magkaiba ang nilalaman nito".

- Nananatiling nakakabit ang mga marka sa lumang bersyon. Patuloy silang binibilang, sa dati nilang posisyon at scale.
- Ang binagong PDF ay bumubukas bilang mga bagong sheet na walang scale at walang marka.

Para ilipat ang takeoff sa revision, buksan ang parehong PDF at gamitin ang {{ui:Ihambing}} sa bagong sheet: [Ihambing ang binagong sheet at ilipat ang takeoff](topic:compare-revisions).

## Sira o dayuhang file

Tinitingnan ng TakeoffCraft ang bawat project file bago ito gamitin. Mga mensaheng maaari mong makita:

- "(file) ay hindi TakeoffCraft project (hindi ito valid JSON)."
- "Hindi ito TakeoffCraft project file."
- "Ang project na ito ay na-save ng mas bagong TakeoffCraft. Buksan ito doon."
- "3 marka ang nasira at hindi isinama." (bubukas ang iba)

## Undo history

Nagsisimula ulit ang undo history kapag nagbukas ka ng project. Hindi nito nililinis ang history ang pag-save.
