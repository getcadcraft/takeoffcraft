---
title: Nxirr sasitë nga një model ndërtese
summary: Hap modelin IFC të arkitektit, shihe në 3D, zgjidh muret, dysheme, dyert dhe të tjerat sipas llojit, materialit, shtresës ose madhësisë, dhe sill numrat, gjatësitë, sipërfaqet dhe vëllimet e tyre në llogaritje. Një kopje më e re e modelit përditëson të njëjtat sasi.
keywords: model, llogaritje sasish nga modeli, pamje 3D, kliko një pjesë, gjej rreshtin, material, shtresë, shtresat e murit, gips, izolim, madhësitë e dyerve, madhësitë e dritareve, tabela e hapjeve, csv, 3d, bim, ifc, rvt, model ndërtese, sasi, muret, dyshemetë, dyert, dritaret, kolonat, dhomat, sipas llojit, sipas nivelit, përditësim, model më i ri, zhvillim projekti
from: 8c4c12c9
---

Nuk keni nevojë të prisni grupin e ardhshëm të vizatimeve. Kur arkitekti dërgon modelin e ndërtesës, hapeni këtu dhe merrni sasitë direkt prej tij. Modeli lexohet në kompjuterin tuaj; asgjë nuk dërgohet askund.

## Hapat

1. Zgjidhni {{ui:Model}} në shirit veglash dhe zgjidhni skedarin `.ifc` të modelit, ose hapeni me {{ui:Open plans}} si çdo skedar tjetër.
2. {{ui:Model takeoff}} hapet me një rresht për çdo kategori dhe lloj: muret sipas llojit të murit, dysheme sipas llojit të dyshemesë, dyert sipas llojit të derës, e kështu me radhë. Çdo rresht shfaq numrin e tij dhe në çfarë matet ajo kategori.
3. Vendosni {{ui:Group by}} te {{ui:Category}} për një total të shpejtë, ose te {{ui:Category, type and level}} për ta ndarë çdo lloj sipas katit.
4. Hiqni shenjën nga rreshtat që nuk doni. {{ui:Find}} e ngushton listën. Heqja e shenjës nga një rresht fsheh edhe pjesët e tij në figurën 3D.
5. Jepini modelit një {{ui:Model name}} që do ta mbani për gjithë punën, për shembull emrin e projektit.
6. Zgjidhni {{ui:Add to the takeoff}}. Çdo sasi bëhet sasi e shtypur në listën e artikujve. Emërtojeni, çmojeni dhe bashkangjitni montime si çdo artikull tjetër.

## Shikoni modelin në 3D

{{ui:Show the model in 3D}} vizaton modelin mbi tabelë, me një ngjyrë për çdo rresht (pika me ngjyrë pranë emrit të rreshtit). Tërhiqni për ta kthyer, mbani {{key:Shift}} dhe tërhiqni për ta lëvizur, përdorni rrotën për zmadhim, dhe zgjidhni {{ui:Fit}} ose {{ui:Reset}} për t'u kthyer.

- **Klikoni një pjesë** në figurë dhe rreshti i saj zgjidhet në tabelë, me të gjitha pjesët e atij rreshti të ndriçuara dhe pjesa tjetër e zbehur. Klikoni të njëjtën pjesë përsëri dhe, nëse ndodhet në disa rreshta (një mur te shtresat e tij), zgjidhet rreshti tjetër.
- **Klikoni një rresht** në tabelë për të ndriçuar pjesët e tij. Klikojeni përsëri, ose klikoni hapësirën bosh në figurë, për ta pastruar.
- Dhomat nuk vizatohen, sepse vëllimi i një dhome do të fshihte ndërtesën.
- Një model shumë i madh mban vetëm një kuti për disa pjesë, që të futet në memorie; paneli thotë sa janë. Numrat nuk ndryshojnë.

Nëse ky kompjuter nuk mund të vizatojë 3D, tabela funksionon si më parë.

## Grupoji sipas materialit, shtresës ose madhësisë

{{ui:Group by}} ka tre zgjedhje të tjera:

- {{ui:Category and material}}: një mur, dysheme ose çati e ndërtuar me shtresa i jep çdo shtrese materialin e vet rresht, kështu që gipsi, montantët dhe izolimi mund të çmohen veç e veç. Një pjesë e ndërtesës me një material merr rreshtin e atij materiali, dhe një pjesë pa asnjë merr një rresht të quajtur "Pa material të emërtuar".
- {{ui:Category and layer}}: e njëjta gjë, me trashësinë e shtresës në rresht ("Izolim, 100 mm").
- {{ui:Category, type and door or window size}}: dyert dhe dritaret ndahen sipas gjerësisë dhe lartësisë së tyre (për shembull 3'-0" × 6'-8" ose 914 × 2,032 mm).

Për një shtresë, sipërfaqja është vetë faqja e murit (ose sipërfaqja në plan ose sipërfaqja e dyshemesë ose çatisë), dhe vëllimi është kjo sipërfaqe shumëzuar me trashësinë e shtresës. Shënimi i rreshtit thotë sa numra erdhën nga një shtresë. Shtresat e një muri mblidhen në vëllimin që modeli e deklaron për të.

## Ruani rreshtat ose hapjet si CSV

{{ui:Save rows as CSV}} ruan rreshtat që keni zgjedhur, me njësitë në çdo kokë, për një fletëllogaritëse. {{ui:Save openings schedule as CSV}} (vetëm kur modeli ka dyer ose dritare) ruan çdo derë dhe dritare sipas llojit, nivelit dhe madhësisë, me numrin e saj.

## Çfarë matet

| Kategoria | Sasitë |
|---|---|
| Muret | numri, gjatësia, sipërfaqja e murit (një faqe, hapjet hiqen), vëllimi |
| Dysheme, soletë, tavane dhe mbulesa të tjera | numri, sipërfaqja në plan, vëllimi |
| Çati | numri, sipërfaqja në plan, sipërfaqja e çatisë, vëllimi |
| Themele | numri, sipërfaqja në plan, vëllimi |
| Kolona, trare dhe elemente | numri, gjatësia përgjatë elementit, vëllimi |
| Parmakë, tuba, kanale dhe linja kabllore | numri, gjatësia |
| Shkallë | numri, vëllimi |
| Dhomat | numri, sipërfaqja e dyshemesë, vëllimi |
| Dyer, dritare dhe gjithçka tjetër | numri |

Kur autori i modelit ka deklaruar një sasi në skedar, përdoret ai numër. Përndryshe numri matet nga forma e elementit. Çdo sasi mban një shënim që thotë cila nga të dyja, dhe sa elemente dhanë një numër.

:::note
Gjatësia e një muri e matur nga forma e tij shkon nga njëri skaj në tjetrin, kështu që dy mure që mbivendosen në një qoshe përfshijnë të dyja qoshen. Një vëllim kërkon formë të mbyllur: një element me formë jo të mbyllur numërohet dhe nuk jep vëllim. Një element muri i lakuar ose me qoshe matet si gjysma e të gjitha faqeve të tij vertikale, dhe shënimi i tij e thotë këtë.
:::

## Kur arrin një model më i ri

Hapni skedarin më të ri dhe shkruani të njëjtin {{ui:Model name}}. Përpara se të shtoni ndonjë gjë, paneli thotë sa sasi janë të reja, sa kanë ndryshuar dhe nga çfarë në çfarë, dhe cilat sasi nga kopja e mëparshme nuk janë më në model. Zgjidhni {{ui:Add to the takeoff}}: sasitë e ndryshuara marrin numrat e rinj, ndërsa emrat, tarifat, humbjet dhe montimet tuaja mbeten. Sasitë që nuk janë më në model mbajnë numrat e vjetër; hiqini vetë nëse projektimi i ka hequr.

Emrat e llojit dhe nivelit janë mënyra si njihet një sasi. Nëse arkitekti ndryshon emrin e një lloji muri, ai vjen si sasi e re, dhe e vjetra listohet si e zhdukur.

## Skedarët që lexohen

Skedarë IFC (IFC2x3, IFC4 dhe IFC4.3). Një skedar IFC me rrugë, binarë ose ura sjell akoma sasitë e infrastrukturës drejtpërdrejt, si më parë.

TakeoffCraft nuk lexon skedarë `.rvt` në këtë version. Nëse arkitekti punon në Revit, kërkojini një eksport IFC të modelit (File, Export, IFC) dhe hapeni atë.

Një model mund të sjellë deri 500 sasi në një herë. Nëse ka më shumë, hiqni shenjën nga rreshtat ose grupoje sipas kategorisë.
