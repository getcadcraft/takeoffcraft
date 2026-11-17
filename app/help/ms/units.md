---
title: Unit
summary: Unit yang boleh dilaporkan oleh item, unit yang digunakan oleh pembolehubah formulanya, dan cara unit imperial dan metrik bercampur.
keywords: unit, lf, sf, sy, sq, ela persegi, kotak bumbung, ekar, hektar, meter, meter persegi, ea, setiap, metrik, imperial, penukaran, unit lalai
from: b7bf0528
---

## Unit item

| Jenis item | Unit | Nama |
|---|---|---|
| Linear | LF | kaki linear (lalai) |
| Linear | m | meter |
| Area | SF | kaki persegi (lalai) |
| Area | SY | ela persegi |
| Area | SQ | kotak bumbung (100 kaki persegi) |
| Area | ac | ekar |
| Area | m² | meter persegi |
| Area | ha | hektar |
| Count | EA | setiap |

Tukarnya dengan {{ui:Unit}} dalam penyunting item pada bila-bila masa, walaupun selepas mengukur; kuantiti ditukar serta-merta.

Senarai {{ui:Unit}} menunjukkan unit yang dihidupkan dalam {{ui:Settings}} › {{ui:General}} › {{ui:Units}}, dan sentiasa unit item itu sendiri. Item baharu bermula dalam unit panjang atau luas yang dibintangkan di situ, apabila ia ialah salah satu unit item; jika tidak, dalam LF atau SF. Lihat [Unit, nilai yang ditaip dan senarai unit](common:unit-lists).

## Unit pembolehubah formula

| Unit item | L, P, H | A |
|---|---|---|
| LF | kaki | kaki persegi (luas dinding) |
| m | meter | meter persegi (luas dinding) |
| SF | kaki | kaki persegi |
| SY | kaki | ela persegi |
| SQ | kaki | kotak |
| ac | kaki | ekar |
| m² | meter | meter persegi |
| ha | meter | hektar |

Untuk item SY, `A` dalam ela persegi manakala `P` dan `H` kekal dalam kaki. Isipadu daripada item SY ialah `A * 9 * H / 27` ela padu; menggunakan SF untuk papak adalah lebih mudah.

## Di mana unit ditetapkan

Sesetengah bacaan sentiasa menggunakan kaki:

- bacaan langsung dalam bar status semasa melukis (kaki-inci, SF),
- **Penanda dipilih** (kaki-inci, LF dan SF),
- hasil semakan (kaki-inci, dengan kaki perpuluhan dan meter),
- panjang segmen dan perimeter dalam helaian Marks bagi hamparan (kaki-inci).

Jumlah item, jadual {{ui:Quantities}}, formula dan helaian Estimate menggunakan unit item itu sendiri.

## Skala dan unit adalah berasingan

Skala helaian memberitahu saiz lukisan; unit item memberitahu cara melaporkannya. Lukisan metrik pada `1:100` boleh diukur dalam LF, dan lukisan imperial dalam m². Penentukuran menerima sebarang unit: `24'-6"`, `7.5 m`, `7500 mm`.

## Kejituan

TakeoffCraft mengukur dengan tepat daripada titik yang anda klik, termasuk panjang lengkok dan luas sebenar, dan tidak membundarkan kuantiti. Paparan membundarkan panjang kepada 1/16 inci dan nilai perpuluhan kepada dua tempat. Wang hanya dibundarkan pada jumlah lanjutan, kepada sen.
