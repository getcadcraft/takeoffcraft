---
title: TakeoffCraft-ı AI köməkçi ilə işlədin
summary: Öz AI köməkçinizə və ya skriptinizə hesablamanın miqdarlarını və smetasını oxutun, elementlər və işarələr əlavə etmək, DWG və ya DXF üzərində saymaq və ölçmək, ixrac etmək üçün icazə verin: icazələr, CadCraft Studio ilə qoşulma və fəaliyyət jurnalı.
keywords: ai, köməkçi, agent, mcp, model context protocol, skript, avtomatlaşdırma, miqdarlar, smeta, icazələr, bağlantını kəsin, fəaliyyət
from: 7fa62ec6
---

## Nə öyrənəcəksiniz

AI köməkçi (və ya yazdığınız skript) ilə TakeoffCraft üzərində necə işləmək olar və onun nəyə toxuna biləcəyini necə müəyyən etmək olar.

TakeoffCraft-ın **öz AI-ı yoxdur** və heç nəyi heç yerə göndərmir. Köməkçini siz gətirirsiniz: Model Context Protocol (MCP) dəstəkləyən istənilən proqram. TakeoffCraft ona yalnız alətlər verir, hansını seçməyi isə siz müəyyən edirsiniz.

## Açın

1. {{ui:Parametrlər}} (tətbiq panelindəki dişli və ya {{key:Mod+,}}) açın və {{ui:TakeoffCraft}} sekmesinə keçin.
2. **{{ui:Köməkçilər}}** altında **AI köməkçilərin və skriptlərin TakeoffCraft-dan istifadəsinə icazə verin** qutusunu işarələyin. Siz bunu etmədikcə o, söndürülüdür.
3. Nəyi edə biləcəyini seçin: **Oxu** başlanğıcda işarələnib; **Redaktə**, **Saxla** və ya **{{ui:İxrac}}** yalnız lazım olduqda işarələyin.

İşarələmədiyiniz icazələrə aid alətlər köməkçiyə təklif olunmur. Köməkçi yenə də belə bir alət istəsə, TakeoffCraft onu rədd edir və bunu fəaliyyət jurnalına yazır. Açarı söndürmək bütün qoşulmaları dərhal dayandırır; {{ui:TakeoffCraft parametrlərini sıfırlayın}} onu da söndürür.

## Köməkçinizi qoşun

Köməkçilər kompüterinizdə **CadCraft Studio** vasitəsilə qoşulur: Studio yalnız bu kompüterin çata biləcəyi kiçik bir server işlədir və bu server hər başlayanda Studio-nun yaratdığı token ilə qorunur. Studio-da {{ui:Köməkçi qoşun}} seçin və ünvanı və tokeni köməkçinizə kopyalayın (Studio yapışdırmaq üçün dəqiq parametrləri göstərir). Tokeni heç vaxt paylaşmayın.

:::note
Brauzer sekmesi köməkçi üçün bağlantı aça bilməz: brauzer tətbiqlərində açar siz kompüterinizdəki CadCraft Studio-nu istifadə etmədikcə təsir etmir.
:::

## Nəzarəti əlinizdə saxlayırsınız

- **Hər dəyişiklik bir geri qaytarma addımıdır**, köməkçinin adı ilə etiketlənir (məsələn, "Köməkçi: …"). {{key:Mod+Z}} köməkçinin son dəyişikliyini bütövlükdə geri qaytarır.
- **Bağlı olduğunu bilirsiniz.** Tətbiq panelindəki düymə qoşulu olduğu müddətdə köməkçinin adını göstərir; nəyə icazəsi olduğunu görmək və ya onu **Bağlantını kəsin** üçün klikləyin.
- **Fəaliyyət.** {{ui:Parametrlər}} › {{ui:TakeoffCraft}} › {{ui:Köməkçilər}} › {{ui:Fəaliyyət}} hər çağırışı siyahılayır: nə vaxt, hansı alət, icra olundu və ya rədd edildi. {{ui:Jurnalı saxla}} bir nüsxəsini saxlayır.

## Köməkçi nə istəyə bilər

| Alət | İcazə | Nə edir |
|---|---|---|
| `app_info`, `sheets_list` | Oxu | Açıq hesablama, onun PDF-ləri və vərəqləri, hər vərəqin miqyası və işarələri |
| `items_list` | Oxu | Elementlər, onların vahidləri, dərəcələri və yığım düsturları |
| `takeoff_quantities` | Oxu | Element və ya vərəq üzrə miqdarlar; miqyası olmayan vərəqlərdəki işarələr siyahıya salınır, heç vaxt sıfır kimi sayılmır |
| `takeoff_estimate` | Oxu | TakeoffCraft-ın hesabladığı qiymətli smeta, cəmləri ilə |
| `takeoff_export` | İxrac | TakeoffCraft-ın öz CSV və ya XLSX ixracı |
| `items_add` | Redaktə | Vahidləri, dərəcələri və itkisi ilə elementlər əlavə edir |
| `marks_add` | Redaktə | Vərəqdə xətt boyları, sahələr və saylar ölçür. Uzunluqlar və sahələr yalnız miqyası olan vərəqdə, miqyassız vərəqdə heç vaxt |
| `cad_sheets`, `cad_catalog`, `cad_count` | Oxu | Açdığınız DWG və ya DXF üzrə: onun vərəqləri və miqyasları, nəyin sayıla biləcəyi (bloklar, qatlar və növlər, mətnlər) və dəqiq saylar, {{ui:CAD sayı}} düyməsinin hazırladığı kimi ([Çertyoj üzrə say](topic:count-from-a-drawing)) |
| `cad_count_add` | Redaktə | Çertyojda sayır və tapılan hər obyektə say işarəsi qoyur, bir addımda; yenidən saymaq yalnız yeni olanı əlavə edir |
| `cad_measure` | Redaktə | Çertyojun öz xətlərindən, qövslərindən, polixətlərindən və ştrixlamalarından xətti və ya sahə elementini ölçür, {{ui:Çertyojdan ölçü}} düyməsinin etdiyi kimi ([Çertyojdan ölçmə](topic:measure-from-a-drawing)); yalnız miqyası olan vərəqdə |
| `usd_export` | İxrac | Miqyaslı vərəqin ölçülmüş xətt boylarını, sahələrini və saylarını USD formatında 3D yoxlama modeli kimi (`.usdz`, `.usda` və ya `.usdc`), 3D yoxlama görünüşündə {{ui:USD paketi (.usdz)}} düyməsinin yazdığı kimi ([3D yoxlama görünüşünü USD kimi ixrac edin](topic:usd)) |

**Redaktə** işarələnəndə köməkçi elementlər və işarələr əlavə edir (hər çağırış bir geri qaytarma addımıdır); artıq mövcud olan işarələri hərəkət etdirə, dəyişə və ya silə bilmir.

Eyni miqdarlar və smeta TakeoffCraft-ı açmadan da əlçatandır: CadCraft MCP serveri seçdiyiniz qovluqda `.takeoff.json` faylını açır (`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`), `cadcraft info Job.takeoff.json` isə onları komanda sətrində çap edir. O, DWG və ya DXF-i vərəqləri üzrə yeni hesablama kimi açır (TakeoffCraft-ın onları miqyaslandırdığı kimi çertyojdan miqyaslanır), eyni `cad_*` alətləri ilə üzərində sayır və ölçür, elementlər əlavə edir və hesablamanı saxlayır (`takeoff_save`); `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` komanda sətrindən sayır.

## Bir şey işləmirsə

- **Köməkçi heç bir TakeoffCraft alətini görmür:** bu pəncərədə açarın yandırıldığını və pəncərənin Studio-da açıq olduğunu yoxlayın.
- **"İxrac icazəsi tələb olunur":** {{ui:Köməkçilər}} altında **İxrac** işarələyin, sonra yenidən soruşun.
- **"401" və ya "token" xətaları:** token dəyişib (Studio yenidən başladılıb və ya {{ui:Yeni token}}). Yeni tokeni köməkçinin parametrlərinə kopyalayın.

## Həmçinin bax

- [AI köməkçilər üçün ssenarilər](common:assistants-recipes): hər biri çağırdığı alətlərlə işlənmiş nümunələr.
