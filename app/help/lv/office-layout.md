---
title: "Biroja izkārtojums: grupēšana, apakšsummas, virsraksts un galvenes no jūsu noklusējuma politikām"
summary: Ieslēdziet papildinājumu Noklusējuma politikas, un tāme, daudzumi pa lapām, eksporti un tas, ko lasa palīgs, izmantos jūsu biroja specifikāciju izkārtojumu, tādu pašu, kādu izmanto BimCraft specifikācijas.
keywords: biroja standarts, biroja izkārtojums, noklusējuma politikas, papildinājums, specifikācijas izkārtojums, grupēt pēc veida, grupēt pēc lapas, apakšsumma, kopsummas, virsraksts, lielie burti, tāmes izkārtojums, eksporta izkārtojums, iestatījumi
from: cfd2f30a
---

## Ko jūs darīsiet

Liksim TakeoffCraft tabulām izkārtojumu tādu, kādā jūsu birojs tās izdod, bez iestatīšanas katrā apjoma aprēķinā. Izkārtojumu iestata vienreiz, sadaļā Noklusējuma politikas, un tas attiecas uz katru lietotni šajā datorā: ko iestatāt BimCraft vai CadCraft, to izmanto TakeoffCraft, un otrādi.

## Soļi

1. Atveriet **Iestatījumi › Papildinājumi** un ieslēdziet **Noklusējuma politikas**. Sākotnēji tas ir izslēgts; ja tas ir izslēgts vai nekas nav iestatīts, TakeoffCraft darbojas tieši tāpat kā līdz šim.
2. Atveriet **Iestatījumi › Globāls › Noklusējuma politikas** un atrodiet **Specifikāciju izkārtojums (biroja standarts)**:

| Politika | Ko tā dara TakeoffCraft |
|---|---|
| Grupēt specifikācijas pēc | **Veids** grupē tāmi pēc vienuma veida (Lineārs, Laukums, Skaits, Tipizēts daudzums). **Līmenis** grupē daudzumus pa lapām pēc to lapas. **Telpa** un **Bez grupēšanas** abus neizmanto grupēšanai |
| Kopsummas specifikācijās | **Apakšsumma zem katras grupas un kopsumma** pievieno apakšsummu zem katras grupas. Objekta kopsumma vienmēr paliek |
| Specifikācijas nosaukums | Rindiņa virs tabulas, piemēram, `{schedule}: office layout` |
| Kolonnu galvenes | Kā ierakstīts, LIELIE BURTI vai Ar Lielajiem Sākumburtiem |

3. Aizveriet Iestatījumus. Tabulas uzreiz seko.

## Kas nosaka izkārtojumu

- **Daudzumi › Pēc vienuma** un **Pēc lapas**: grupu virsraksti, apakšsumma zem katras grupas, nosaukums un galvenes burtu lielums. Rindiņa zem nosaukuma norāda, kuras daļas jūsu biroja standarts iestatīja. Rindas ir tās pašas: jūs joprojām ierakstāt tajās likmes un atkritumus un noklikšķiniet uz skaitļiem, lai atlasītu to atzīmes. Komponents vai otrs nosacījums paliek zem sava vienuma.
- **Eksportētā tāme** (CSV un XLSX): tās pašas grupas un apakšsummas. Darbgrāmatā apakšsumma ir `SUBTOTAL` formula pār tās grupu, un arī objekta kopsumma ir formula, tātad neko nesaskaita divreiz.
- **Ko lasa palīgs**: `takeoff_estimate` un `takeoff_quantities` (pa lapām) pievieno bloku `layout` ar grupām, rindām un apakšsummām un norāda, kuras daļas birojs iestatīja.

## Kas paliek savs

- **Daudzumi › Pēc zonas** pati nosaka savu grupēšanu (pēc piedāvājuma zonas) un to saglabā.
- **Objekta kopsumma**, piedāvājuma kopsavilkuma uzcenojumi un alternatīvas netiek pārgrupētas.
- Grupēšana, kurai tabulā nav kolonnas, tiek izlaista: tāmei nav līmeņa, daudzumiem pa lapām nav veida.

## Noderīga informācija

- Politikas tiek glabātas šajā pārlūkprogrammā visām CadCraft lietotnēm un tiek pārnestas Noklusējuma politiku failā (**Saglabāt failā** / **Ielādēt no faila** tajā pašā vietā), tāpēc birojs var kopīgot vienu failu.
- Tāme, kas eksportēta kā CSV ar grupām, ir paredzēta lasīšanai. Lai atgrieztu tāmi kā cenu bibliotēku, eksportējiet to bez grupēšanas.
- BimCraft puse tam pašam standartam: specifikācijas, iestatījumi un eksporti. TakeoffCraft pagaidām nav savu politiku, tāpēc sadaļas Iestatījumi › TakeoffCraft nav Noklusējuma politiku.
