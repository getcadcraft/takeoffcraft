---
title: Paket takliflari va taklif tenglashtirish
summary: Smetani savdo boʻyicha paketlarga boʻling, har bir paketning doirasini subpudratchilarga yuboring, qaytib kelgan takliflarni bir xil doirada solishtiring va tanlangan taklifni paketning narxi sifatida ishlating.
keywords: taklif tenglashtirish, tenglashtirish, taklif paketi, subpudratchi, subtaklif, doira, toʻldirgich, savdo, CSI boʻlimi, takliflarni solishtirish, past taklif, taklif jadvali, taklif beruvchi, shartnoma berish, tanlangan taklif, taklifdan foydalanish, subpudratchi narxi
from: 856b3088
---

Bosh pudratchi har bir savdoning doirasini subpudratchilarga yuboradi va qaytgan narxlarni solishtiradi. TakeoffCraft ikkalasini ham hajmlarni hisoblashdan bajaradi: {{ui:Eksport}} › {{ui:Taklif paketlari va tenglashtirish…}} ni oching.

## Paketlar

Har bir ishlatiladigan CSI boʻlimi uchun bitta paket bor (elementning {{ui:CSI raqami}} ning birinchi ikki raqami, qarang: [Hajm elementlarini yaratish](topic:create-items)). Raqamsiz elementlar oʻz paketini hosil qiladi. Har bir paket oʻz elementlarini, belgilari turgan varaqlar sonini va bizning oʻz xarajatimizni koʻrsatadi (asosiy taklifdan material va ish haqi, belgilashlardan oldin).

Subpudratchiga yuboriladigan narsani yuklab olish uchun {{ui:Doira CSV}} ni tanlang: har bir element uning CSI raqami, miqdori, birligi va turgan varaqlari bilan. Unda narxlar yoʻq. Material yetkazib beruvchilar uchun ish kitobining narx soʻrovi qismlar roʻyxatini saqlaydi (qarang: [Smetani eksport qilish](topic:export-estimate)).

## Takliflarni kiritish

1. Paket ostidagi boʻsh qatorga taklif beruvchining nomi va taklif summasini kiriting, soʻng {{ui:Taklifni qoʻshish}} ni tanlang.
2. Agar taklif doiraning bir qismini chetda qoldirsa, uning {{ui:Chetda qoldi}} roʻyxatini oching va oʻsha elementlarni belgilang.
3. Nom yoki summani tuzatish uchun jadvalda ustiga yozing; × tugmasi taklifni olib tashlaydi.

Har bir oʻzgarish {{key:Mod+Z}} qaytaradigan bir bosqich, takliflar esa hajmlarni hisoblash bilan birga saqlanadi.

## Takliflar qanday tenglashtiriladi

Takliflar kamdan-kam hollarda bir xil doirani qamraydi. Tenglashtirish har bir chetda qolgan elementni **toʻldirgich** bilan — bizning oʻz xarajatimizda — toʻldiradi, shunda har bir taklif butun paket boʻyicha solishtiriladi:

**Tenglashtirilgan = taklif + toʻldirgichlar**

Eng past tenglashtirilgan taklif **Past** deb belgilanadi; teng boʻlsa, avval kiritilgani. **Bizning xarajatimizga nisbatan** — tenglashtirilgan taklif minus paketning bizning oʻz xarajatimiz: manfiy boʻlsa, u xarajatdan past degani. Eng past koʻringan taklif yoʻqolgan doirasi hisobga olinganda yutqazishi mumkin.

Ish kitobiga takliflari boʻlgan har bir paket bilan **Taklif tenglashtirish** varagi qoʻshiladi: bizning smeta, har bir taklif, uning toʻldirgichlari, tenglashtirilgan jami va farq, jonli formulalar sifatida, hamda har bir taklif nimani chetda qoldirgani.

## Taklifni paketning narxi sifatida ishlatish

Taklifda {{ui:Qoʻllash}} ni tanlang — u smetangizda butun paketning narxi boʻladi: paketning oʻz narxlari (elementlar, ularning ikkinchi shartlari va yigʻma qismlari) loyihaning umumiy jamidan chiqadi, elementlar esa havola uchun oʻz stavkalaringiz bilan miqdor sifatida qoladi va bitta qator, **Tanlangan taklif**, taklif summasini olib yuradi. Taklif chetda qoldirgan elementlar oʻz xarajatimizda qoladi — tenglashtirish buni allaqachon toʻldirgich sifatida hisobga olgan. Boshqa taklifni tanlang yoki xuddi shu taklifni qayta tanlab uni qaytarib oling; har biri {{key:Mod+Z}} bekor qiladigan bir bosqich.

Taklif xulosasida subtaklif xarajat ichida bitta qator: umumiy xarajatlar, foyda va kafolat ularga boshqa har qanday xarajat kabi ustiga qoʻshiladi; savdo soligʻi (faqat materialga) va ish haqi yuki (ish haqiga) esa qoʻshilmaydi. Ish kitobining Smeta varagi tanlangan taklifni oʻz qatori sifatida olib yuradi va belgilashlar bloki uni jonli formulalar bilan qoʻshadi. Material roʻyxatida shartnoma berilgan paketning materiali chiqarib tashlanadi, chunki uni subpudratchi taʼminlaydi.

Muqobil hisob maydonidagi paket qayta narxlanmaydi: muqobillar va hisob maydonlarining oraliq jamilari hali ham oʻz narxlaringizni ishlatadi.

## Elektron pochta orqali qaytgan takliflar

Takliflarni qoʻlda kiritish shart emas. Paket ostidagi {{ui:Taklif uchun yuborish…}} har bir subpudratchiga havola yuboradi — u yerda ular har bir qator uchun narx kiritadi; {{ui:Narxlarni olish}} ular yuborganlarini shu jadvalga tortib oladi. Qarang: [Paketni taklif uchun yuborish](topic:bid-invitations).

:::note
Takliflarni qoʻlda kiritish ham ishlaydi, qoʻlda kiritilgan taklif va saytdan kelgan taklif yonma-yon turadi. Saytdan qaytgan takliflar **veb** (yoki topshirish muddatidan keyin kelgan boʻlsa **veb, kechikkan**) deb belgilanadi; ularning narxi faqat taklif beruvchi yangi versiya yuborganda oʻzgaradi, shuning uchun ularga qilgan oʻz tahrirlaringiz shu paytgacha saqlanadi.
:::
