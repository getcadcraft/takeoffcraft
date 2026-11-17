---
title: Uzunluq, dərəcə və faiz daxiletməsi
summary: Məsafələr, hündürlüklər, pul dərəcələri və itki faizləri üçün nə yaza bilərsiniz, nümunələr və TakeoffCraft-ın oxuya bilmədiyi daxiletmə üçün mesajlar.
keywords: daxiletmə, format, fut düym, kəsrlər, onluq fut, metrik, metrlər, millimetrlər, dərəcə, pul, dollar, faiz, itki, yazma
from: 215bbf4d
---

## Uzunluqlar

Kalibrləmədə **Real məsafə** üçün və element redaktorunda {{ui:Hündürlük}} və {{ui:Dərinlik}} üçün istifadə olunur.

| Yazırsınız | Mənası |
|---|---|
| `24'-0"` | 24 fut |
| `24'-6 1/2"` | 24 fut 6½ düym |
| `12' 6 1/2"` | 12 fut 6½ düym (tire əvəzinə boşluq) |
| `12'-6-1/2"` | 12 fut 6½ düym (hissələr arasında tirelər) |
| `24'` | 24 fut |
| `30"` | 30 düym |
| `6 1/2"` | 6½ düym |
| `3/4"` | ¾ düym |
| `24 ft 6 in` | 24 fut 6 düym (həmçinin `foot`, `feet`, `inch`, `inches`) |
| `24.5` | 24.5 standart vahiddə (aşağıya bax) |
| `24.5'` | 24.5 fut |
| `7.5 m` | 7.5 metr |
| `750 cm` | 750 santimetr |
| `7500 mm` | 7,500 millimetr |

- Sadə rəqəm kalibrləmədə və LF, SF və ya SY elementləri üçün **futdur**; m və ya m² elementləri üçün **metrdir**.
- Mətn redaktorlarından gələn əyri dırnaqlar və prime işarələri (′ ″ ’ ”) `'` və `"` kimi işləyir. İki apostrof `''` `"` sayılır.
- Vergüllər nəzərə alınmır: `1,200 mm` 1200 mm-dir.
- Kəsrlər hər iki tərəfdə tam ədədlər tələb edir: `6 1/2"` işləyir, `6.5 1/2"` işləmir.
- Sıfır və mənfi məsafələr qəbul edilmir.

Mesajlar:

- "Məsafə yazın, məsələn 24'-0" və ya 7.5 m." (sahə boşdur)
- "Sıfırdan böyük məsafə yazın."
- "Fut və düym istifadə edin (24'-6 1/2"), onluq fut, m, cm və ya mm." (naməlum vahid)
- "Bu məsafə oxuna bilmədi. 24'-6 1/2" və ya 24.5 yazmağa çalışın."

Elementin hündürlüyünü və ya dərinliyini silmək üçün sahəni boşaltın.

### Hesab-kitab

Hər uzunluq sahəsi və çəkmə zamanı yazı qutusu da `+`, `-`, `*`, `/` və mötərizələrlə hesablamanı qəbul edir:
`4+7/16` (standart vahiddə 4.4375 düym), `12'6" + 3/4"`, `(24'-0")/3` (8 fut), `2*450mm`.

- Uzunluğa yazılmış tire hələ də onun hissəsidir: `24'-6"` 24 fut 6 düymdür və `6-1/2` 6½-dir. Çıxmaq üçün tirenin ətrafına boşluq qoyun: `24' - 6"` 23'-6"-dır.
- Düz rəqəm uzunluğu ədəd kimi vurur və ya bölür; uzunluğa əlavə olunduqda standart vahiddə olur.
- `abs`, `round`, `ceil` və `floor` də işləyir. Oxunmayan hesablama səhvin harada olduğu göstərilməklə rədd edilir.

## Uzunluqlar necə göstərilir

Uzunluqlar fut, düym və on altıda bir kimi göstərilir: `12'-6 1/2"`, `0'-0 3/4"`. Dəyərlər göstərmək üçün ən yaxın 1/16 düymə yuvarlaqlaşdırılır; kəmiyyətlərin özləri yuvarlaqlaşdırılmır. Onluq dəyərlər iki onluq rəqəmlə və minlik ayırıcılarla göstərilir, məsələn `1,234.50 LF`.

## Dərəcələr (material və əmək vahid başına)

| Yazırsınız | Mənası |
|---|---|
| `12.5` | $12.50 |
| `$12.50` | $12.50 |
| `1,250` | $1,250.00 |
| `0.385` | $0.385 (dörd onluq rəqəmə qədər; daha çoxu yuvarlaqlaşdırılır) |
| (boş) | $0 |

Mesaj: "12.50 kimi məbləğ yazın." və ya "Bu məbləğ çox böyükdür." Mənfi dərəcələr qəbul edilmir.

Genişləndirilmiş məbləğlər (material, əmək, cəmlər) sentə qədər hesablanır: itki ilə miqdar × dərəcə, yarılar sıfırdan uzaqlaşdırılmaqla yuvarlaqlaşdırılır, tam olaraq elektron cədvəldəki `ROUND(x, 2)` kimi.

## İtki faizi

| Yazırsınız | Mənası |
|---|---|
| `10` | 10% |
| `7.5%` | 7.5% |
| (boş) | 0% |

İki onluq rəqəmə qədər, 0%-dən 1000%-ə qədər. Mesajlar: "10 və ya 7.5 kimi faiz yazın." və ya "1000%-dən çox itkiyə icazə verilmir."

## Adlar və vahidlər

- Element və komponent adları: 200 simvola qədər.
- Komponentin {{ui:Vahid}}-i: 20 simvola qədər istənilən mətn, məsələn `EA`, `vərəq`, `CY`, `gal`. Bu yalnız etiketdir; TakeoffCraft onu çevirmir.

## Düsturlar

Yığım düsturlarının öz qaydaları var: bax [Düstur dili](topic:formulas).
