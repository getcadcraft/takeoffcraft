---
title: TakeoffCraft hajmlaringizdan nimalarni oʻrgangani
summary: TakeoffCraft Avtosanash bilan tasdiqlagan simvollaringizni, shartlar toʻplamlaringizni, eng koʻp ishlatgan yigʻmalaringizni va har bir sahifada takrorlagan naqshlaringizni saqlaydi — hammasi hajmning oʻz faylida. Koʻring, ishlating, oʻchiring.
keywords: oʻrganish, oʻrganilgan, oʻrganish, yordamchi, eslab qolish, simvollar, shablonlar, oxirgi ish bilan bir xil, oxirgi ish, shartlar toʻplami, shartlar, qayta ishlatish, yigʻmalar, eng koʻp ishlatilgan, takliflar, har bir sahifada takrorlash, har bir sahifa, sarlavha bloki, naqsh, tozalash, unutish, maxfiylik
from: 54d99e99
---

TakeoffCraft siz bilan qancha koʻp hajm qilsangiz, shuncha tez ishlaydi. U **faqat siz qabul qilgan narsalardan** oʻrganadi:

- [Avtosanash](topic:auto-count) bilan belgilab, soʻng qoʻshgan simvollaringizdan,
- saqlagan shartlar toʻplamlaringizdan,
- ishlatgan yigʻmalaringizdan (ish uchun bir marta),
- har bir sahifada takrorlagan belgilar naqshlaringizdan.

Bu oʻz varaqlaringizda oddiy moslashtirish — Avtosanash bajaradigan qidiruvning oʻzi. Bu oʻrgatilgan model emas. Oʻrgangan hamma narsa **shu hajmning faylida** (`.takeoff.json`) saqlanadi va hech qayerga yuborilmaydi. Keyingi ishga olib oʻtish uchun [Oxirgi ish bilan bir xil](topic:what-it-learned#same-as-last-job) dan foydalaning.

Hammasini koʻrish uchun asboblar panelidagi {{ui:Oʻrganilgan}} ni tanlang (lampochka belgisi, {{ui:Avtosanash}} yonida).

## Simvollar

Avtosanash bilan simvolni belgilab, {{ui:Qoʻshish}} ni tanlasangiz, belgilagan simvolingiz qabul qilgan moslik darajasi bilan saqlanadi.

- {{ui:Oʻrganilgan}} da {{ui:Shu varaqdan topish}} yoki {{ui:Har bir varaqdan topish}} ni tanlang. Odatdagi Avtosanash koʻrib chiqish oynasi ochiladi: qutini chiqarib tashlash uchun bosing, surgichni siljiting, soʻng ularni qoʻshing. Siz buni qilmaguncha hech narsa qoʻshilmaydi.
- Oʻrganilgan simvoli hali yoʻq varaqni ochganingizda, yuqoridagi panel uning uchun {{ui:Topish …}} ni taklif qiladi. {{ui:Hozir emas}} shu varaq uchun uni yashiradi.
- Hajmda shu nomdagi element boʻlmasa, belgilarni qoʻshish elementni ham qoʻshadi (bitta ortga qaytarish qadami).
- Shu elementning simvolini yana qoʻshsangiz, u tanish simvol hisoblanadi; boshqacha koʻrinishdagi simvol ikkinchi simvol sifatida saqlanadi.
- Avtosanash kabi, simvol burchak ostida va boshqa masshtabdagi varaqlarda ham topiladi.

## Shartlar toʻplamlari

Toʻplam hajmning shartlarini (birliklari, stavkalari, chiqindisi va yigʻmalari bilan elementlar) belgilarsiz saqlaydi.

1. {{ui:Oʻrganilgan}} da {{ui:Shu hajm shartlarini toʻplam sifatida saqlash…}} ni tanlang va unga nom bering. Bir xil nomli toʻplam almashtiriladi.
2. Toʻplam bor hajmda {{ui:Qoʻshish}} unda hali yoʻq shartlarni qoʻshadi. Bir xil nom va turdagi shartlar oʻzgartirilmaydi. Bu bitta ortga qaytarish qadami.

## Oxirgi ish bilan bir xil

Oxirgi ishingiz faylida u oʻrgangan narsalar bor. Yangi ishni shundan boshlash uchun:

1. Yangi rejalarni oching, soʻng {{ui:Oʻrganilgan}} › {{ui:Oxirgi ish bilan bir xil…}} ni tanlang.
2. Oxirgi ishning `.takeoff.json` faylini tanlang.
3. Nimalarni olib kirishni belgilang: uning shartlarini (faqat bu hajmda yoʻqlarini) va oʻrgangan narsalarini (simvollar, toʻplamlar, yigʻmalar, naqshlar). Soʻng {{ui:Olib kirish}}.

Shartlari shu ish nomi bilan toʻplam sifatida ham saqlanadi. Belgilari va miqdorlari oʻz faylida qoladi. Hammasi bitta ortga qaytarish qadami.

## Eng koʻp ishlatiladigan yigʻmalar

Yigʻmaga ega element, miqdori boʻlsa va hajmni saqlasangiz, u ish uchun bir marta ishlatilgan hisoblanadi. Ish — bu hajm olingan rejalar toʻplami, shuning uchun bir xil hajmni qayta saqlash ikki marta sanalmaydi. {{ui:Eng koʻp ishlatiladigan yigʻmalar}} ostidagi roʻyxat eng koʻp ishlatganlaringizni birinchi qoʻyadi. Bu hajmda allaqachon boʻlganlarni chiqarib tashlaydi. {{ui:Qoʻshish}} uni oxirgi marta ishlatganingizdek, barcha qismlari bilan qoʻshadi.

## Har bir sahifada takrorlash

Toʻplamning har bir sahifasida bir xil boʻladigan belgilar uchun, masalan sarlavha blokini sanash yoki odatiy detal:

1. Bir varaqdagi belgilarni tanlang ([Belgilarni tanlash](topic:copy-paste#select-the-marks)).
2. {{ui:Oʻrganilgan}} da {{ui:Tanlangan belgilarni har bir sahifada takrorlash…}} ni tanlang, naqshga nom bering va tasdiqlang.

Ular ochiq boshqa har bir sahifaga **bir xil oʻlchamdagi** sahifalarga, bir xil joyga, bitta ortga qaytarish qadamida qoʻyiladi. Yoʻllar va maydonlar faqat bir xil masshtabli sahifalarga tushadi; sanashlar bu oʻlchamdagi istalgan sahifaga tushadi. Ularga ega boʻlgan sahifa oʻtkazib yuboriladi. Naqsh saqlanadi, shuning uchun keyin ochadigan sahifalaringiz panelda taklif oladi yoki roʻyxatdagi {{ui:Har bir sahifada takrorlash}} dan foydalanishingiz mumkin.

## Koʻrish va oʻchirish

Oʻrgangan hamma narsa {{ui:Oʻrganilgan}} da roʻyxatlanadi. Savat belgisi bitta narsani oʻchiradi. {{ui:Hammasini tozalash}} oʻrgangan hamma narsani oʻchiradi va elementlar hamda belgilaringizga tegmaydi. Ikkalasini ham hajmni yopguncha bekor qilish mumkin va ikkalasi ham hajm bilan birga saqlanadi.

Bitta hajmda oʻrganishni toʻxtatish uchun {{ui:Shu hajmdan oʻrganish}} ni oʻchiring. Yangi narsa oʻrganilmaydi, roʻyxatdagilar siz ularni oʻchirguncha qoladi.

## Bilib qoʻyish uchun

- TakeoffCraft'ning eski versiyalari oʻrgangan narsalari bor faylni odatdagidek ochadi. Ular bu qismni eʼtiborsiz qoldiradi va faylni qayta saqlasa, uni tashlab yuboradi.
- Oʻrgangan simvol siz belgilagan narsaning kichik rasmi boʻlib, faylda saqlanadi (har biri bir necha kilobayt).
- Oʻrgangan simvollar Avtosanash kabi qidiriladi, shuning uchun oʻsha cheklovlar qoʻllanadi: [Simvolni avtosanash](topic:auto-count).
