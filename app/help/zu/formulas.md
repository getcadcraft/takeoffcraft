---
title: Ulimi lwesifomula
summary: Imithetho yezifomula zamanani zokuhlanganiswa: okuguquguqukayo, abasebenzi, imisebenzi, ukuzungeza nemilayezo yamaphutha ngayinye.
keywords: ifomula, isakhiwo, incazelo, imisebenzi, ceil, floor, round, min, max, abs, okuguquguqukayo, abasebenzi, ukubala
from: 4da14575
---

Izingxenye zokuhlanganiswa zithola inani lazo kusuka ku-ifomula. Ifomula yisisho sezibalo esincane esisebenza ngamanani aseshweni elilinganisiwe lento. Bheka [Ukuhlanganiswa nezifomula](topic:assemblies) ukuze uthole izibonelo.

## Okuguquguqukayo

| Uhlobo lwento | Okuguquguqukayo | Incazelo |
|---|---|---|
| Okomugqa | `L` | Ubude bonke |
| Okomugqa | `H` | Ukuphakama kwento |
| Okomugqa | `A` | Indawo yodonga, L × H, ngaphandle kwezimbobo zemigqa enazo (ukubala okuvela ku-BimCraft). Uma lokho kubala kubiza indlela yokulinganisa, `A` ilinganiswa yiyo: izimbobo ezingakhulu kunosayizi omncane wale ndlela ziyahlala, futhi lokho indlela ekukhishayo lapho odonga behlangana kuyasuswa. Inothi ngaphansi kwento libiza indlela |
| Okomugqa | `N` | Inani lemigqa |
| Indawo | `A` | Indawo esele yonke (imiphetho ngaphandle kwezikhishiwe) |
| Indawo | `P` | Umjikelo wonke, kuhlanganise nemiphetho yezikhishiwe |
| Indawo | `H` | Ukujula noma ukuqina kwento |
| Indawo | `N` | Inani lezindawo |
| Ukubala | `N` | Inani |

- Okuguquguqukayo kusezinyunithini zento: bheka [Iyunithi](topic:units).
- Uhlamvu oluncane nolukhulu kuyefana: `l` ingu `L`.
- Okuguquguqukayo kohlobo lwento yayo kuphela kuyasebenza. `P` kwento yomugqa inikeza `"P" ayisilinganiso esitholakala lapha. Sebenzisa L, H, A, N.`
- Ukuphakama noma ukujula okungenalutho kungu-0.

## Abasebenzi

| Bhala | Incazelo |
|---|---|
| `+` | Engeza |
| `-` noma `−` | Khipha, noma inani elingaphansi kuka-zero |
| `*` noma `×` | Phindaphinda |
| `/` noma `÷` | Hlukanisa |
| `( )` | Hlanganisa |

Ukuphindaphinda nokuhlukanisa kwenziwa ngaphambi kokungeza nokukhipha: `L * 2 + 4` ingu (L × 2) + 4. Sebenzisa amabhulaketi uma ungaqiniseki.

Izinombolo zingaba namadesimali (`1.333`, `.5`) nezinkomba (`1e3` = 1000). Izikhala ziyanganakwa.

## Imisebenzi

| Umsebenzi | Umphumela | Isibonelo |
|---|---|---|
| `ceil(x)` | Zungeza uye enombolweni ephelele | `ceil(67.5)` = 68 |
| `floor(x)` | Zungeza ehla kunombolo ephelele | `floor(67.5)` = 67 |
| `round(x)` | Zungeza kunombolo ephelele eseduze, amasiqingatha akhishwa kude no-zero | `round(2.5)` = 3 |
| `round(x, d)` | Zungeza kumadesimali d (0 kuya ku-10) | `round(3.14159, 2)` = 3.14 |
| `min(a, b, …)` | Inani elincane kakhulu | `min(N, 10)` |
| `max(a, b, …)` | Inani elikhulu kakhulu | `max(1, ceil(N / 12))` |
| `abs(x)` | Inani ngaphandle kophawu lwalo | `abs(-3)` = 3 |

`ceil` no `floor` ziyanganaka umsindo omncane wokuzungeza wekhompyutha, ngakho inani okufanele libe ngu-1 alikaze lizungezwe libe ngu-2.

## Amaphutha

Ifomula engafundeki noma engabalwa ibonisa iphutha layo ngaphansi kwensimu, futhi ingxenye ayifakwa emasamba aphelele (ikhanda elithi {{ui:Amanani}} lithi "Akuphelele"). Imilayezo:

| Umlayezo | Ukulungisa |
|---|---|
| Faka ifomula, njenge-L noma ceil(L / 1.333) + 1. | Ifomula ayinalutho. |
| "X" ayisilinganiso esitholakala lapha. Sebenzisa … | Sebenzisa enye yezinguquguquko ezidweshiwe. |
| "X" ayisisebenzi lapha. Sebenzisa ceil, floor, round, min, max, abs. | Sebenzisa esinye salezo zimisebenzi. |
| "#" ayivunyelwe kuma-ifomula. | Susa lolo hlamvu (amayunithi, `%`, `$` no `=` akuvunyelwe). |
| Kukhona ")" eyeqile. / Kukhona ")" ngaphandle kwe-"(". | Linganisa amabhulaketi. |
| Kukhona inani eliphuthile ngaphambi kwe-")". | Okufana ne `max(1, )`: faka inani. |
| Ifomula iphela kusenesikhathi. | Okufana ne `L *`: yiqedele. |
| Okungalindelekile "…". Ingabe umsebenzi uyeqile? | Amanani amabili eceleni, njenge `2L`: bhala `2 * L`. |
| ceil() ithatha inani elingu-1. | Nikeza umsebenzi inani elifanele lamanani. |
| round(x, digits) idinga izinombolo ezigcwele ezisuka ku-0 kuya ku-10. | Sebenzisa inombolo ephelele yamadesimali. |
| Ifomula ihlukanisa ngo-zero. | Ngokuvamile H ingu-0: setha ukuphakama noma ukujula kwento. |
| Ifomula ayinikezi inombolo. | Umphumela mkhulu kakhulu ukuze ube yinombolo. |
| Leyo fomula inde kakhulu (izinhlamvu ezingu-500 kuphela). | Yifushanise. |

## Ephephile ngokwakhiwa

Ifomula ingenza izibalo kuphela ngokuguquguquka nemisebenzi engenhla. Ayikwazi ukusebenzisa ikhodi noma ukufunda okunye, ngakho ifomula ephrojekthini othumelwe yona ayinabungozi.
