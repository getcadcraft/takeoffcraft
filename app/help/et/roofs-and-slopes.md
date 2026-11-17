---
title: Katused ja kallded
summary: Anna alale kalle, et mõõta katuse pinda plaanilt, ning mõõda vaalud, orud ja viilud nende kalde järgi.
keywords: katus, kalle, kaldetegur, tõus, ulatus, 6:12, viil, vaalu, org, katusetöö, ruudud, kaldega pindala, tegelik pikkus, plaanipindala
from: 38225b60
---

Katuseplaan näitab iga katusetasandit lamedana, nagu seda ülevalt vaadatakse. Katus ise on suurem: tasand kaldega 6:12 on umbes 12% rohkem pinda kui plaanil ja selle kaldus servad on pikemad, kui need paistavad. Anna kirjele selle kalle ja TakeoffCraft mõõdab kalde järgi.

## Kalde sisestamine

Kalle on tõus 12 ulatuse kohta, nagu katuseplaani kalde sümbolitel. Sisesta see kujul `6:12`, `6/12` või lihtsalt `6`; toimib ka muu ulatus (`4:10` on 4,8:12). Nurk töötab kraadimärgiga: `26.57°`. Tühi või `0` on lame.

## Katuse pinnad

1. Tee katusematerjalile alaline kirje või ava olemasolev.
2. Sisesta selle seadetes **Kalle**, näiteks `6:12`.
3. Joonista iga katusetasand plaanil välja tööriistaga {{ui:Pindala}}, nagu tavaliselt.

Iga tasand loeb oma plaanipindala korrutatuna kaldeteguriga: √(1 + (tõus ÷ 12)²), 1,118 kaldel 6:12 ja 1,414 kaldel 12:12. Vali tasand, et näha selle **Pindala** (kaldel), **Plaanipindala** ja **Kaldetegur**.

Teistsuguse kaldega tasandid: vali tasand ja sisesta selle paneelis oma **Kalle**. Jäta tühjaks, et kasutada kirje oma. Kolmemõõtmeline kontrollvaade, koostud (`A` on kaldel pindala), kulud ja eksport kasutavad kõik kaldel pindala. Mahaarvamised kaldega tasandil, näiteks katuseaknad, arvestatakse sama kaldega.

Ümbermõõt (`P`) jääb plaani ümbermõõduks. Mõõda räästad, viilud, vaalud ja orud lõikudena (allpool).

## Viilud, vaalud ja orud

1. Tee lineaarne kirje, näiteks „Viilu serv“ või „Vaalud“.
2. Sea selle **Kalle** väärtuseks **Viil** (kaldus serv, nagu viilul) või **Vaalu või org** (joon, kus kaks tasandit kohtuvad) ning sisesta katusetasandite **Kalle**.
3. Joonista lõigud plaanile tööriistaga {{ui:Lineaarne}}.

Viil loetakse plaanipikkuse ja kaldetegura korrutisena. Vaalu või org kulgeb plaanil 45° nurga all kahe sama kaldega tasandi vahel, seega selle tegelik pikkus on plaanipikkus korrutatuna √(1 + (tõus ÷ 12)² ÷ 2) võrra: 1,061 kaldel 6:12, 1,225 kaldel 12:12.

Üks lõik võib neid segada. Vali see: iga segment oma paneelis on kaldeloendiga — **Kirje oma** (kirje seade), **Tasand**, **Viil** või **Vaalu või org** — ning selle pikkus kaldel. Lõigu enda **Kalle** paneelis asendab kirje oma kõigi selle segmentide jaoks. Paneel näitab ka **Plaanipikkust** ning lehel olevad sildid näitavad pikkusi kaldel.

Mahaarvamised töötavad endiselt: mahaarvatud segment ei loe midagi, kaldega ega ilma.

:::note
Vaalud ja orud eeldavad, et mõlemal tasandil on sama kalle. Erineva kaldega tasandite puhul mõõda vaalu tegelikku pikkust mujal või joonista see viiluna samaväärse kaldega.
:::
