---
title: Loenda joonisest
summary: Loenda plokke, kihi objekte või teksti otse DWG-st või DXF-ist: täpselt, pesastatud plokid, dünaamilise ploki variandid ja plokimassiivid käsitletud, ühe tagasivõtmise sammuga.
keywords: loenda joonisest, cad-loendus, plokkide loendus, loenda plokke, sisestus, plokinimi, pesastatud plokid, dünaamiline plokk, variant, minsert, massiiv, kiht, objektitüüp, ringid, tekst, atribuut, silt, peidetud kihid, täpne loendus, kuidas, uksed, armatuurid
from: 5060e24e
---

{{ui:CAD-loendus}} lehe ribal (käsk **Loenda joonisest** teistes menüüstiilides) loeb, mida DWG või DXF ütleb, et seal on. Kui {{ui:Automaatne loendus}} otsib sümboli pilti ja võib ühe vahele jätta või valesti leida, siis see loeb objekte: iga nimega `DOOR-36` ploki sisestus on üks uks. Ava esmalt joonis: [Ava DWG või DXF joonis](topic:open-a-drawing).

## Loenda plokk

1. Ava joonise leht. {{ui:CAD-loendus}} on lehe ribal.
2. Vali see. Aken loetleb plokid ja nende arvu. Otsi nime järgi ja vali üks.
3. Kontrolli loendi all olevat rida: "22 leitud, 22 lisada."
4. Jaotises {{ui:Lisa kirjesse}} vali loenduskirje või jäta {{ui:Uus loenduskirje}} ja anna nimi.
5. Vali lisamisnupp, mis nimetab arvu: {{ui:Lisa 22 märki}}. Märgid ilmuvad ploki sisestuspunktidesse ja kirje kogus on loendus.

See on üks tagasivõtmise samm: {{key:Mod+Z}} võtab märgid (ja uue kirje) koos ära. Eelarve, tabel ja märgitud PDF käsitlevad kirjet nagu iga teist loenduskirjet.

### Mida loetakse

- **Iga plokinime sisestus**, olenemata mõõtkavast ja nurgast, mudeliruumis või paberiruumis. Plokinimed ei arvesta suurtähti.
- **Plokimassiivid** (MINSERT): iga koopia massiivis loetakse üheks.
- **Pesastatud plokid.** Teise ploki sees paigutatud plokk loetakse igal tasemel. Loend ütleb "6 teiste plokkide sees"; eemalda linnuke {{ui:Loenda ka plokke teiste plokkide sees}}, et lugeda ainult joonisesse otse paigutatud sisestusi.
- **Dünaamilised plokid.** Dünaamiline plokk loetakse oma nime all, mitte anonüümsete koopiate (`*U12`) all, mida fail hoiab. Selle olekud on loetletud eraldi ("Üks 12, Kaks 4"): vali olek, et lugeda ainult neid, või {{ui:Kõik variandid}}. Kui fail ei ütle, mis olekut koopia näitab, loetletakse need kui "(olekut ei teata)".
- **Kihifilter.** Plokk mitmel kihil: vali üks jaotises {{ui:Kihil}}.

### Mida ei loeta

- **Peidetud kihid.** Objekt kihil, mis on failis välja lülitatud või külmutatud (või mille sa peitsid jaotises {{ui:Kihid}}), jäetakse välja ja rida ütleb, mitu: "3 peidetud kihil, välja jäetud". Märgi linnuke {{ui:Loenda need ka}}, et need kaasata.
- **Lingitud joonised, mis ei ole avatud**, ei lähe loendusse; aken ütleb seda.
- **Täpselt teise samalaadse peale laotud objektid** loetakse kahena (need on kaks objekti) ja aken ütleb seda: tavaliselt on see joonistamisviga, mis väärib vaatamist.

## Mida see leht näitab või kogu joonis

- **Mida see leht näitab** loeb objekte, mida leht näitab: paigutusel mudeli objektid selle vaateakendes (kiht, mis on vaateaknas külmutatud, sinna ei lähe) pluss paigutuse enda omad.
- **Kogu joonis, iga objekt üks kord** loeb mudeliruumi üks kord, märgid lehel Mudel, ega loe seda, mida mitu paigutust uuesti näitavad.

Paigutuse näidatava ja mudeli näidatava loendamine annab samade objektide puhul sama arvu; ära lisa mõlemat ühele kirjele.

## Loenda loendusi uuesti

Sama ploki loendamine sama kirjega lisab ainult uue: "22 juba loendatud." Iga märk tähistab ühte objekti.

## Kihi ja tüübi järgi

{{ui:Kihi ja tüübi järgi}} vali kiht ja objektitüüp (ringid, polüjooned, täidised…): "kõik ringid kihil E-LITE". Märgi linnuke {{ui:Loenda ka plokkide sees olevaid objekte}}, et kaasata need, mis on plokkide definitsioonides, igal kohal, kuhu plokk paigutatakse.

## Teksti järgi

{{ui:Teksti järgi}} kirjuta tekst, näiteks `A3`, ja ütle, kas see on täpselt selline, sisaldab seda või on terve sõna. Tekstiobjektid, mitmejuhtmelised tekstid ja plokkide **atribuudi väärtused** loetakse kõik (silt-atribuut `ITEM = A3` leitakse); vali {{ui:Atribuudis}}, et lugeda ainult ühte atribuuti. Kõige sagedamad tekstid on loetletud klõpsatavana.

## Millal kasutada Automaatset loendust

Kasuta {{ui:Automaatne loendus}} PDF-ide puhul ja joonise sümbolite puhul, mis ei ole plokid (vabalt joonistatud või lõhutud). Joonistatud plokkidena loenda need siin.
