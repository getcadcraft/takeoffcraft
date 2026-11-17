---
title: Nota, awan dan serlahan
summary: Tandakan soalan dan perubahan pada lembaran dengan nota, awan semakan dan serlahan, jejaki setiap satu sebagai terbuka, dijawab atau ditutup, dan hantarkannya dalam PDF ditanda.
keywords: markup, penanda, nota, ulasan, soalan, rfi, awan, awan semakan, serlahan, status, terbuka, dijawab, ditutup, semakan, senarai markup
from: 2b395c13
---

Markup ialah untuk perkara yang perlu anda ingat atau tanyakan semasa mengambil takeoff: "sahkan jenis asas", awan semakan di sekeliling dinding yang diubah, atau nota yang diserlahkan pada pelan. Ia berada di atas lembaran dengan status, disenaraikan di satu tempat, dan dicetak dalam PDF ditanda. Ia **tidak pernah dikira**: tiada kuantiti, tiada kos.

## Tambah satu

Buka {{ui:Markup}} pada bar di atas lembaran dan pilih:

| Markup | Cara |
|---|---|
| {{ui:Nota}} | Klik di tempat ia hendak pergi, taip nota, pilih {{ui:Tambah}}. Ia dipaparkan sebagai pin bulat dengan baris pertamanya di sebelah. |
| {{ui:Awan}} | Klik satu sudut, kemudian sudut bertentangan, dan taip nota (atau biarkan kosong). Awan semakan berlekuk dilukis di sekeliling kotak. |
| {{ui:Serlahan}} | Klik dua sudut: kotak kuning lut sinar, dengan nota jika anda mahu. |

{{key:Esc}} selepas sudut pertama membatalkannya. Alat kekal aktif untuk yang seterusnya; {{key:V}} kembali ke {{ui:Pilih}}.

## Status dan penyuntingan

Klik markup dengan {{ui:Pilih}} untuk memilihnya. Panel kanan memaparkan **Markup**: jenis dan lembarannya, **Status**nya — Terbuka, Dijawab atau Ditutup — dan teksnya, yang boleh anda ubah. {{key:Delete}} (atau {{ui:Padam}}) mengalih keluarnya; {{key:Mod+Z}} mengembalikannya.

Pin nota berwarna jingga semasa terbuka, biru apabila dijawab dan kelabu apabila ditutup; awan yang ditutup bertukar kelabu.

## Senarai

**Markup** dalam panel kanan menyenaraikan setiap markup takeoff dengan statusnya, dan menyatakan berapa banyak yang masih terbuka. Tandakan **Terbuka sahaja** untuk melihat apa yang masih perlu diselesaikan. Klik satu baris untuk pergi ke lembarannya dan memilihnya.

## Kongsi

- {{ui:PDF ditanda}} melukisnya pada halaman: serlahan, awan dan pin, setiap satu dengan kotak yang memberi statusnya dalam huruf besar (TERBUKA, DIJAWAB, DITUTUP) dan teksnya. Halaman yang mempunyai markup tetapi tiada tanda takeoff juga disertakan.
- {{ui:XLSX}} menambah lembaran kerja **Markup**: lembaran, jenis, status dan teks, satu baris setiap satu.
- Ia disimpan dalam `.takeoff.json` dan dalam [PDF dengan takeoff di dalamnya](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf).
