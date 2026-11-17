---
title: Umsebenzi womhlaba namaphoyinti okuphakama
summary: Maka amaphoyinti okuphakama esheshini lesayithi, uwanikeze i-CivilCraft ukuze kwakhiwe umphezulu nokumba nokugcwalisa, bese uthatha amanani okumba alula lapha.
keywords: umsebenzi womhlaba, ukumbiwa, ukumba, ukugcwalisa, ukumba nokugcwalisa, ukulinganisa umhlaba, ukuphakama kwamaphoyinti, ukuphakama, ikhonthuwa, umphezulu, ukuhlukaniswa, civilcraft, amaphoyinti, pnezd, umsele
from: a898e508
---

I-TakeoffCraft ilinganisa lokho okudwetshwe eshidini. Umsebenzi womhlaba udinga umphezulu womhlaba, ngakho wabelwana ne-CivilCraft, eyakha imiphezulu ngamaphoyinti, ilinganise izinga bese ibala ukumba, ukugcwalisa nokuthuthwa.

## Ukumbiwa okulula lapha

Ngesisekelo esimbiwe ngobujuqu obufanayo, into enendawo enobujuqu iyanele: ivolumu ingu-indawo × **ukujula**. Iphakethe lomkhandlu omkhulu [trade pack](topic:trade-packs) linento yokumba ngobuningi (ivolumu yomhlaba osemgodini, ivolumu ekhululekile nemithwalo yamalori) kanye nento yomsele wezinsiza (ukumba, ukubeka ngaphansi nokugcwalisa ngobude nobujuqu).

## Amaphoyinti okuphakama ye-CivilCraft

1. Setha isikali seshidi lesayithi.
2. Yenza into ye-**Ukubala**, njengo "Izinga lomhlaba elikhona", bese uchofoza ngamunye amaphoyinti okuphakama eshidini.
3. Khetha uphawu bese uthayipha {{ui:Ukuphakama}} kwi-panel ethi Uphawu olukhethiwe: `102.5`, `102'-6"` noma `31.24 m`. Ukuphakama okungaphansi kwe-zero nokuyi-zero kuyamukeleka.
4. Vula imenyu ethi {{ui:Thumela}} bese ukhetha {{ui:Ukuphakama kwamaphoyinti}}. Uthola ifayela lamaphoyinti (`.csv`) elinamakholomu i-Point, Northing, Easting, Elevation kanye ne-Description, umugqa owodwa ngephoyinti ngalinye elimakiwe eshidini elivuliwe.
5. Vula leli fayela ku-CivilCraft (bheka [Ngenisa amaphoyinti](app:civilcraft/import-points)). Yakha umphezulu ngamaphoyinti ([Akha umphezulu](app:civilcraft/build-surface)); kusukela lapho iqhathanisa imiphezulu bese inikeza ukumba nokugcwalisa ([Ivolumu](app:civilcraft/volumes)).

I-Northing ne-Easting yizixhumanisi zeshidi ngokwalo, ezibalwa ngamafidi kusukela ekhoneni lephepha ngesikali salo: izinkathazo nevolumu phakathi kwamaphoyinti ziyiqiniso, kodwa azisiyo izixhumanisi zokuhlola zesayithi lakho. Zihambise ziye ezixhumanisweni zesayithi ku-CivilCraft uma udinga lokho.

:::note
Amaphoyinti eshidi ezahlukene awabelani ngezixhumanisi, ngakho ukuthumela kuthatha ishidi elivuliwe kuphela. Ukuphakama kulondolozwa nge-takeoff futhi kuthuthwa ngokukopisha nokunamathisela.
:::

## Ukumba nokugcwalisa ku-CivilCraft

Umsebenzi womhlaba we-CivilCraft ubuyela njengezinto ezimbili ongazithengisa:

1. Ku-CivilCraft, linganisa amaphedi nezindlela zakho, bese ukhetha {{ui:Thumela ku-TakeoffCraft}} ngaphansi kwe-**Umsebenzi womhlaba** ([Ivolumu yomsebenzi womhlaba](app:civilcraft/volumes)). Ilondoloza ifayela lamanani (`.quantities.json`).
2. Ku-TakeoffCraft, vula ngo {{ui:Vula ukubala amanani}}, noma uyiphonse ku-app. Ukubala kwakho kuhlala kuvulekile: ifayela lengeza **Earthwork: cut** no **Earthwork: fill** njengo [typed quantities](topic:create-items#typed-quantities-no-drawing) ngamayunithi e-cubic yards (CY) uma iphrojekthi ingeyamafidi, noma ngama-cubic metres (m³) uma iphrojekthi ingeyamamitha. Kuyisinyathelo esisodwa: {{key:Mod+Z}} siyasihlehlisa.
3. Qamba kabusha, setha udoti, amarethi namakhomponenti njengoba ufisa.

Uma uklelo lushintsha, thumela futhi kusuka ku-CivilCraft bese uvula ifayela elisha: lawo mazinto amabili afanayo athola amanani amasha. Amagama awo, amarethi, udoti namakhomponenti kuhlala njengoba uwasethile. Uma iyunithi yephrojekthi yeshintsha, ibha yesimo iyasho lokho: hlola amarethi. Ifayela lephrojekthi ye-CivilCraft ehlukile lengeza amazinto amabili ayo.

Amanani angamavolumu omhlaba njengoba i-CivilCraft yawalinganisa (indlela yegridi): akukho ukuncipha noma ukukhula. Engeza lawo njengodoti, noma nge-fomula njenge `Q * 1.25` ukuze uthole ivolumu ekhululekile. Umhleli wento ukhombisa ukuthi ngayinye yavela phi nini; ikholomu yamanothi esilinganisweni nayo iyasho lokho.

:::note
Ifayela lamanani liyi-JSON elilula (`"format": "cadcraft-quantities"`), ngakho isikripthi noma enye iprogram ingalibhala nayo: igama le-app, iphrojekthi, nezinto ezinokhiye, igama, iyunithi nobuningi.
:::
