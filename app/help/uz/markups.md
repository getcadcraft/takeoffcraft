---
title: Izohlar, bulutlar va ajratmalar
summary: Varaqlardagi savollar va oʻzgarishlarni izohlar, qayta koʻrib chiqish bulutlari va ajratmalar bilan belgilang, ularning har birini ochiq, javob berilgan yoki yopiq deb kuzating va belgilangan PDF da yuboring.
keywords: belgilash, belgilashlar, izoh, sharh, savol, rfi, bulut, qayta koʻrib chiqish buluti, ajratma, holat, ochiq, javob berilgan, yopiq, koʻrib chiqish, belgilashlar roʻyxati
from: 2b395c13
---

Belgilashlar hajmlarni hisoblash paytida eslab qolish yoki soʻrash kerak boʻlgan narsalar uchun: "poydevor turini tasdiqlang", oʻzgargan devor atrofidagi qayta koʻrib chiqish buluti, rejadagi ajratilgan izoh. Ular varaqda holat bilan turadi, bir joyda roʻyxatga olinadi va belgilangan PDF da chop etiladi. Ular **hech qachon hisobga olinmaydi**: miqdor ham, narx ham yoʻq.

## Yangisini qoʻshish

Varaq ustidagi panelda {{ui:Markup}} ni oching va tanlang:

| Belgilash | Qanday |
|---|---|
| {{ui:Note}} | Qayerga borishini bosing, izohni yozing, {{ui:Add}} ni tanlang. U yuqorida birinchi qatori yonida yumaloq pin sifatida koʻrinadi. |
| {{ui:Cloud}} | Bir burchakni, soʻng qarama-qarshi burchakni bosing va izoh yozing (yoki boʻsh qoldiring). Qutining atrofida tishli qayta koʻrib chiqish buluti chiziladi. |
| {{ui:Highlight}} | Ikki burchakni bosing: shaffof sariq quti, xohlasangiz izoh bilan. |

Birinchi burchakdan keyin {{key:Esc}} bekor qiladi. Asbob keyingisi uchun yoqilgan qoladi; {{key:V}} {{ui:Select}} ga qaytaradi.

## Holat va tahrirlash

Belgilashni {{ui:Select}} bilan bosib tanlang. Oʻng panelda **Belgilash** koʻrinadi: uning turi va varaqi, **Holat** — Ochiq, Javob berilgan yoki Yopiq — hamda matni, uni oʻzgartirish mumkin. {{key:Delete}} (yoki {{ui:Delete}}) uni olib tashlaydi; {{key:Mod+Z}} uni qaytaradi.

Izoh pinining rangi ochiq boʻlganda toʻq sariq, javob berilgach koʻk, yopilganda kulrang boʻladi; yopilgan bulut kulrang boʻladi.

## Roʻyxat

Oʻng paneldagi **Belgilashlar** hajmlar hisobining har bir belgilashini holati bilan sanab chiqadi va nechtasi hali ochiqligini koʻrsatadi. Faqat hal etilmaganlarni koʻrish uchun **Faqat ochiqlari** ni belgilang. Qatorni bosing: u oʻsha belgilash turgan varaqqa oʻtadi va uni tanlaydi.

## Ulashish

- {{ui:Marked PDF}} ularni sahifalarda chizadi: ajratmalar, bulutlar va pinlar, har biri holatini bosh harflarda (OCHIQ, JAVOB BERILGAN, YOPIQ) va matnini koʻrsatuvchi quti bilan. Belgilashlari bor, lekin hajm belgilari boʻlmagan sahifa ham kiritiladi.
- {{ui:XLSX}} **Belgilashlar** varaqini qoʻshadi: varaq, tur, holat va matn, har biri bir qatorda.
- Ular `.takeoff.json` faylida va [ichida hajm boʻlgan PDF](topic:save-and-reopen#keep-the-takeoff-inside-the-pdf) da saqlanadi.
