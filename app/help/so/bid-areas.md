---
title: Aagga tartanka
summary: Calaamadaha ku calaamee dhisme, dabaq ama marxalad, tiriso hal aag markiiba, oo akhri tirooyinka iyo kharashka aag kasta.
keywords: ku dar ikhtiyaar, ka jar ikhtiyaar, qiimaha aasaasiga, ikhtiyaarrada, aagga tartanka, aag, dhisme, dabaq, heer, marxalad, gobol, ikhtiyaar, kala qaybin, dabaqa caadiga ah, wadar yar, aagga
from: 64f3d41c
---

Aagga tartanka waa qayb shaqada ah oo aad qiimayso gaar ahaan: dhisme, dabaq, marxalad, dhinac. Calaamad kasta waxay ku jiri kartaa hal aag tartan. Tirooyinka iyo qiyaasta ayaa markaas la akhrin karaa aag kasta, wadar-yar oo u gaar ah kasta, halka wadarta shaqada ay tahay wadarta wax walba.

## Samee aag tartan

1. Dhanka sare ee panel-ka {{ui:Items}}, fur liiska {{ui:Bid area}}.
2. Dooro **New bid area…**, ku qor magac sida "Building A" ama "Level 2", oo dooro **Make it**.
   Aagga cusub ayaa noqda midka hadda jira. Bar-ka xaaladda wuxuu leeyahay "New marks go in (name). Marks in other bid areas are dimmed." (Calaamadaha cusub waxay galayaan (magac). Calaamadaha aagagga kale waa la dhumiyay.)

## Taxan dhul aag gudahiisa

Intii aagga tartanka ah ee liiska lagu doortay, calaamad cusub kasta waxay galaysaa aagga: khadadka, bedadka, goobaha, tirooyinka, calaamadaha {{ui:Auto count}} ku daro, iyo waxa aad ku dhajiso. Calaamadaha aagagga kale, iyo kuwa aan aag lahayn, waa la dhumiyay xaashida si aad u aragto waxa haysa meesha.

Dooro **No bid area** liiska si aad u taxato aan aag lahayn; markaas waxba ma dhumo.

:::tip
Dabaqyada caadiga ah: taxan Level 2, dooro calaamadaha ({{key:Mod+A}} xaashida), koobiyee, dooro Level 3 liiska ka dibna dhaji. Nuqulada waxay galayaan Level 3. Marka dabaqyadu isku mid yihiin oo aadan u baahnayn inay kala go'aan, [kooxda caadiga ah](topic:typical-groups) waxay tirisaa hal dabaq dhowr jeer.
:::

## Calaamadaha u wareeji aag kale

Dooro hal calaamad ama dhowr ({{key:Shift}} + guji, ama {{key:Mod+A}}). Hoosta **Calaamadda la doortay** (ama **Calaamadaha la doortay**), dooro aagga goobta {{ui:Bid area}}. Bar-ka xaaladda wuxuu leeyahay "3 marks moved to Level 2." (3 calaamadood waa loo wareejiyay Level 2.) Waa hal tallaabo oo dib u celin ah.

## Magac beddel, dalbo ama tirtir

Dooro **Maamul aagagga tartanka…** liiska. Ku qor magac si aad u beddesho, isticmaal fallaadhaha si aad u beddesho kala horaynta (miisaska iyo buug-shaqada ayaa raacaya), ama tirtir mid bada kaarka. Tirtirida aagga tartanka waxay ilaalisaa calaamadeeda: markaas waxay ku jiraan aan aag lahayn. {{key:Mod+Z}} wuxuu dib u celiyaa isbeddel kasta.

## Akhri tirooyinka aag kasta

Miiska {{ui:Quantities}}, dooro {{ui:By area}} (wuxuu muuqdaa marka takeoff-ku leeyahay aag tartan). Aag kasta wuxuu ku liistaa walxaha uu haysto, tirada, unugga iyo wadarta, ka dibna safka wadar-yarta. Calaamadaha aan aag lahayn waxay ku dambeeyaan, oo waxay ku muuqdaan sida **No bid area**. Guji safka walxa si walxa u iftiimo oo aagga uu noqdo midka hadda jira.

Isku-dhisyada aag kasta waxaa lagu xisaabiyaa wadarta aagga gaarka ah. Qaacido wareegta sida `ceil(L / 4)` ayaa suurtogal ka dhigta in aagagga wada jira ay wax yar ka badan yihiin wadarta shaqada oo dhan, sida ay dhici lahayd marka shaqadu la qiimeeyo aag-aag.

## Ikhtiyaarrada: qiimaha aasaasiga oo lagu daro ama laga jaro

Aagga tartanka wuxuu noqon karaa **ikhtiyaar**: shaqo uu milkiiluhu u sii dari karo tartanka, ama ka saari karo. Ku **Maamul aagagga tartanka…**, aag kasta wuxuu leeyahay liis dhinaca magaciisa:

| Doorasho | Waxa uu sameeyo |
|---|---|
| {{ui:Base bid}} | Tartanka, sida caadiga ah. |
| {{ui:Add alternate}} | Qiimo gaar ah oo **laga reebay qiimaha aasaasiga**: ku kordhin roodhka, canopy dheeraad ah. |
| {{ui:Deduct alternate}} | Tartanka gudihiisa, oo loo soo jeedinayaa sida jarid: "delete the canopy" (tirtir canopy-ga). |

Shaqada ikhtiyaarka tiri aagga tartankeeda sida aag kasta. Marka takeoff-ku leeyahay ikhtiyaar:

- Madhka miiska {{ui:Quantities}} wuxuu leeyahay **Base bid** halkii {{ui:Job total}}: takeoff-ka oo dhan oo aan lahayn ikhtiyaarrada lagu daro.
- {{ui:By area}} wuxuu ku dhammaadaa qiimaha aasaasiga iyo hal safka ikhtiyaar kasta: **+$300.00** ku darista, **−$1,050.00** jarista.
- Ikhtiyaar wuxuu qiimeeyaa oo keliya walxaha leh calaamado ku jira, iyo isku-dhisyadooda, si isku-dhis walxa kale aan u soo galin.

Dhoofinta, CSV-gu wuxuu ku dhammaadaa qiimaha aasaasiga iyo ikhtiyaarrada, buug-shaqadana waxay helaysaa xaashi **Alternates**: qiimaha aasaasiga, walxaha ikhtiyaar kasta iyo isbeddelkiisa, iyo qiimaha aasaasiga oo dhan marka ikhtiyaarrada lagu daro laga jaro.

## Dhoofinta

{{ui:XLSX}} wuxuu ku daraa xaashi **By bid area**: walxaha iyo qaybaha aag kasta oo leh tirada, tirada leh qashinka, agabka, shaqada iyo wadarta, wadar-yar aag kasta (qaacido `SUM`) iyo **All bid areas** ugu dambeeya. Xaashida **Marks** waxay helaysaa tiir **Bid area**. Takeoff aan lahayn aagag tartan wuu dhoofiyaa sida hore. Eeg [Tiirarka dhoofinta](topic:export-columns).

Aagagga tartanka waxay ku kaydsan yihiin faylka mashruuca oo calaamadaha la socda.
