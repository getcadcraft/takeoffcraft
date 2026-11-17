---
title: Linganisa imigqa emide
summary: Thatha izindonga, imipayipi, ukugcina nobunye ubude njengemigqa emide, ngezigaba eziqondile, amajika kanye nokuncamelana kwe-Shift ye-45-degree.
keywords: umugqa, ubude, umugqa omude, polyline, izindonga, lf, linear feet, ijika, igobolondo, 45 degrees, ortho, snap, izigaba, polylength, khipha, ukuvuleka, umnyango, igebe, thayipha, othayiphiwe, izixhumanisi, ibanga, ibanga eliqondile, polar
from: c669deff
---

Into ye-linear ilinganisa ubude. Umugqa ngamunye uyinketho yamaphoyinti: izigaba eziqondile, namajika lapho uvula imodi yejika. Into eyodwa ingaba nemigqa emingi kunoma yimuphi umbilo wamashidi.

Ngaphambi kokuqala: ishidi kudingeka isikali ([Setha isikali](topic:set-the-scale)) futhi udinga into ye-linear ([Dala izinto zokubala](topic:create-items)).

Ku-PDF yevekthaza, izicofo zakho zincamelana nemigqa yomdwebo: amaphethelo, izinkomba nezindawo lapho zihlangana ([Ukuncamelana nemigqa yomdwebo](topic:snap-to-the-drawing); {{key:F3}} iyakuvala).

## Dweba umugqa

1. Cofa into ye-linear ngaphansi kwe-{{ui:Items}}.
2. Khetha {{ui:Linear}} ebhareni yamathuluzi, noma cindezela {{key:L}}.
3. Cofa ukuqala komugqa.
4. Cofa ikhona ngalinye ngokulandelana.
   Ibha yesimo ibonisa "Ubude" (umugqa kuze kube sekugcineni, kuya ekhesini) kanye "nesegimenti" (isegimenti oyidwebayo), ngama-feet namaduma.
5. Qeda umugqa: cofa kabili iphoyinti lokugcina, cindezela {{key:Enter}}, noma cofa ngesokudla.
   Umugqa udwetshwa ngombala wento bese uba yimaki ekhethiwe. Ubude bento ohlwini lwe-{{ui:Items}} nasethebhuleni le-{{ui:Quantities}} buyanda.

Ithuluzi lihlala ku-{{ui:Linear}}, ngakho ungaqala omunye umugqa ngokushesha. Cindezela {{key:Esc}} ukubuyela ku-{{ui:Select}}.

Ngenkathi udweba:

- {{key:Backspace}} (noma {{key:Delete}}) isusa iphoyinti lokugcina.
- {{key:Esc}} ilahla umugqa ongaqedile.
- Ukudonsa kushelelisa ishidi, nevili lisondeza, ngaphandle kokwengeza amaphoyinti.

:::mac
Ku-trackpad ye-Mac, ukucofa ngesokudla kuyi-two-finger click (vula i-secondary click ku-System Settings, ngaphansi kwe-Trackpad). I-TakeoffCraft ifunda inkinobho yesibili kuphela, ngakho i-Control-click ingathathwa njengokucofa okuvamile futhi yengeze iphoyinti. Ukucofa kabili noma {{key:Enter}} kuqeda njalo.
:::

:::touch
Kusikrini sokuthinta, thinta ukubeka amaphoyinti, donsa ngomunwe owodwa ukushelelisa, bese uhlanganisa ngamabili ukusondeza. Qeda ngokucindezela isikhathi eside, ngokuthinta kabili, noma ngo-{{ui:Finish}} ebhareni engaphansi kwesheet ({{ui:Back}} ibuyisa iphoyinti lokugcina). Bona [Ukuxazulula izinkinga](topic:troubleshooting#touch-screens).
:::

## Imigqa eqondile ngezinyathelo ze-45°

Bamba {{key:Shift}} lapho ubeka iphoyinti. Isegimenti esisuka ephointini lokugcina siyancamelana nendlela eseduze ka-0°, 45°, 90° noma 135°, sigcine ubude obudonsiwe kuwo. Ibha yesimo iyakukhumbuza: "Shift ncamelanisa ibe ngu-45°".

Emodini yejika kusebenza lapho ijika liphela: i-chord yejika iya ezinyathelweni ze-45° kusukela lapho liqala. Iphoyinti ocofa kulo ejikeni alikaze lincamelaniswe.

## Amajika nezindonga ezijikelezayo

1. Ngenkathi udweba umugqa, beka iphoyinti lapho ijika liqala.
2. Vula imodi yejika: khetha {{ui:Arc}} ebhareni yamathuluzi noma cindezela {{key:R}}. Inkinobho ihlala icindezelwe.
3. Cofa noma iliphi iphoyinti ejikeni, phakathi kwalo.
   Ibha yesimo yengeza "(arc: click where it ends)" futhi isibonelo siyagoba ngephoyinti lakho.
4. Cofa lapho ijika liphela.
   Ijika lengezwa. Ubude balo buyubude beJika eliphelele, hhayi uchungechunge lwamachord amafushane.
5. Cofa iphoyinti elilandelayo ejikeni elilandelayo nokuphela kwalo ukuze uqhubeke udweba amajika, noma cindezela {{key:R}} futhi ubuyele kumasegimenti aqondile.

{{key:Backspace}} noma {{key:Esc}} kuqala zilahla iphoyinti elilindile ejikeni; cindezela futhi ukuze ususe amaphoyinti njengejwayelekile.

## Thayipha ubude nezixhumanisi

Emva kwephoyinti lokuqala, ungathayipha lapho elilandelayo lizoya khona esikhundleni sokucofa. Thayipha inombolo, `@` noma `#`: ibhokisi le-{{ui:Type}} livula ebhareni yesimo ngalokho okuthayiphile. Cindezela {{key:Enter}} ukubeka iphoyinti; ibhokisi lihlala livulekile elilandelayo.

| Type | The next point goes |
|---|---|
| `12'6"` | 12'-6" kusuka ephointini lokugcina, ngasepointer (yibheka indlela, bese uthayipha ubude) |
| `12'6"<45` | 12'-6" ku-45°, ibalwa ngokuphambene nokuzungeza kusukela ngakwesokunene kwesikrini (`<90` iya phezulu, `<-90` iya phansi) |
| `@6',-4'` | 6' ngakwesokunene nango-4' ngaphansi kwephoyinti lokugcina |
| `6',4'` (noma `#6',4'`) | 6' ngakwesokunene nango-4' phezulu kusuka ephointini lokuqala lalo mugqa |

Ubude buthayiphwa njengakho konke ku-TakeoffCraft ([Amafomethi okufaka](topic:entry-formats)): `12'-6 1/2"`, `12.5` (ngama-feet), `30"`, `3.2 m`. "Ngakwesokunene" nokuthi "phezulu" kusho njengoba ubona ishidi, ngisho nalapho ikhasi le-PDF liphendulwe.

{{key:Enter}} ebhokisini elingenalutho iqeda umugqa, njengoba iqeda esheetini; {{key:Esc}} ivala ibhokisi futhi igcine umugqa uqhubeka. Amaphoyinti athayiphiwe adlula ezimisweni ezifanayo nezicofo: ukukhipha, amajika nokuvala indawo, konke kuyasebenza. Ibhokisi elifanayo lisebenza ku-{{ui:Area}} nase-{{ui:Cut-out}}; emva kwesikhungo sesiyingi lithatha irediyasi.

## Khipha ingxenye yomugqa

Udonga oludlula umnyango noma ifasitele lesitolo lungadwetshwa ngqo bese kubalwa kuphela njengodonga: amasegimenti adlula ukuvuleka angu-**ukukhipha**. Adwetshwa ngamachashazi futhi amancane, futhi awabalwa.

Ngenkathi udweba:

1. Beka iphoyinti lapho ukuvuleka kuqala.
2. Khetha {{ui:Deduct}} ebhareni yamathuluzi noma cindezela {{key:E}}. Inkinobho ihlala icindezelwe futhi ibha yesimo ithi amasegimenti alandelayo ngukukhipha.
3. Cofa lapho ukuvuleka kuphela khona. Isegimenti lidwetshwa ngamachashazi; "Ubude" ebhareni yesimo alufaki.
4. Cindezela {{key:E}} futhi uqhubeke ngendlela yodonga.

Emva kokudweba: khetha umugqa. Ngaphansi kwe-**Selected mark**, isegimenti ngalinye linebhokisi le-{{ui:Deduct}}: likhethe ukuze ukhiphe leso segimenti, ulikhulule ukuze libalwe futhi. Lowo nalowo mshintsho uyisinyathelo sokuhlehlisa esisodwa.

Umugqa uhlala unesegimenti eyodwa ebalwayo. Ipaneli bese ibonisa **Deducts** (ubude obukhishiwe) no-**Drawn** (umugqa wonke); **Length**, inani lento, indawo yodonga kanye nezindleko zonke zisebenzisa ubude ngaphandle kokukhipha. Ukubuka kwe-3D kushiya igebe odongeni, i-PDF emakwe idweba okukhishiwe ngamachashazi, futhi ishidi elikhishiwe le-**Marks** liyakuhlanganisa.

Ukuhambisa iphoyinti kugcina ukukhipha. Ukungeza noma ukususa amaphoyinti (ngokudweba umugqa kabusha) kuqala ngaphandle kwawo.

## Bheka imininingwane yomugqa

Khetha {{ui:Select}} ({{key:V}}) bese ucofa umugqa. **Selected mark** ngakwesokunene ibonisa:

- into eyiphethe (khetha enye into ye-linear ohlwini ukuze uyihambisele lapho),
- ishidi,
- **Length** ngama-feet namaduma nangama-LF,
- inani lama-**Segments**, kanye ne-**Wall area** uma into inobude,
- ubude besegimenti ngalinye, kune "(arc)" ngemva kwamajika, nebhokisi layo le-{{ui:Deduct}}.

Esheetini, isegimenti ngalinye somugqa okhethiwe libhalwe ubude bayo.

## Lungisa umugqa

- **Hambisa iphoyinti**: khetha umugqa, bese udonsa esinye sezibambo zawo ezisikwele. Bamba {{key:Shift}} ukuze uncamelanise isegimenti oyihambisayo ibe ngu-45°. Ijika ligcina ukugoba kwalo.
- **Goba ijika**: umugqa okhethiwe ubonisa isibambo esijikelezayo maphakathi nejika ngalinye. Donsa: ijika lidlula lapho uyilethe khona, ngakho liyagoba kakhulu, kancane, noma ngenye indlela. Uma udonselwe emgqeni oqondile phakathi kwamaphethelo alo, liba yisegimenti eliqondile. {{key:Mod+Z}} iyahlehlisa ("Bend arc").
- **Susa umugqa**: khetha bese ucindezela {{key:Delete}}, khetha {{ui:Delete}} ebhareni yamathuluzi ngaphansi kwe-{{ui:More}}, noma {{ui:Delete mark}} ephaneli.
- **Hlehlisa**: {{key:Mod+Z}}; phinda nge-{{key:Mod+Y}}.

Awukwazi ukufaka iphoyinti phakathi komugqa okwamanje. Susa umugqa bese uwudweba kabusha.

## Indawo yodonga

Nika into ye-linear {{ui:Height}} (isibonelo `9'-0"`). Iyabe ibika **Wall area (A)** = ubude × ukuphakama, ngama-SF (noma m² ngento ye-metric), futhi indawo yodonga iya ekholomini yamanothi okuthumela kwe-spreadsheet. Yisebenzise kuma-assemblies ebhodi, upende noma i-insulation: bona [Inhlanganisela nezifomula](topic:assemblies).
