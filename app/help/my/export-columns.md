---
title: Export ကော်လံများ
summary: XLSX နှင့် CSV ၏ worksheet နှင့် column တိုင်း၊ Estimate worksheet တွင် ပါသော ပုံသေနည်းများ။
keywords: export, ကော်လံများ, xlsx, csv, worksheet, estimate sheet, by sheet, marks, scales, ပုံသေနည်းများ, ကွင်းများ
from: fed07851
---

## Estimate (XLSX worksheet နှင့် CSV)

Item တစ်ခုလျှင် row တစ်ခု၊ ၎င်း၏ assembly ၏ component တစ်ခုလျှင် row တစ်ခု (အဝင်ဆွဲထား)။ ထို့နောက် ဗလာ row တစ်ခုနှင့် job စုစုပေါင်း။

| Column | အကြောင်းအရာ | XLSX တွင် |
|---|---|---|
| A Item | Item အမည် (စီးထား) သို့မဟုတ် component အမည် (အဝင်ဆွဲထား) | စာသား |
| B Type | Linear, Area, Count သို့မဟုတ် Component | စာသား |
| C Unit | LF, m, SF, SY, m², EA သို့မဟုတ် component ၏ unit | စာသား |
| D Quantity | တိုင်းထားသော စုစုပေါင်း သို့မဟုတ် ပုံသေနည်း ရလဒ် | ဂဏန်း |
| E Waste % | ဆုံးရှုံးမှု | ရာခိုင်နှုန်း (0.10 = 10%) |
| F Qty with waste | Quantity × (1 + waste) | ပုံသေနည်း `D*(1+E)` |
| G Material per unit | ပစ္စည်း နှုန်း | ဂဏန်း |
| H Labor per unit | လုပ်အား နှုန်း | ဂဏန်း |
| I Material | တိုးချဲ့ထားသော ပစ္စည်း | ပုံသေနည်း `ROUND(F*G,2)` |
| J Labor | တိုးချဲ့ထားသော လုပ်အား | ပုံသေနည်း `ROUND(F*H,2)` |
| K Total | Material + labor | ပုံသေနည်း `I+J` |
| L Notes | အသုံးပြုထားသော ပုံသေနည်း, ပုံသေနည်း error, scale မရှိသော sheet ပေါ်ရှိ marks, wall area, perimeter | စာသား |

Job စုစုပေါင်း row: ထိုအပေါ်ရှိ row အားလုံးတွင် ကော်လံ I, J နှင့် K ၏ `SUM`၊ တစ်ခုခု ချန်ထားလျှင် Notes တွင် "Incomplete: see the notes above"။

ပုံသေနည်း error ရှိသော row တွင် ပမာဏ သို့မဟုတ် ငွေပမာဏ မရှိပါ၊ ၎င်း၏ note တွင် error ကို ပြသည်။ Header row ကို ပိတ်ထားသည်။

CSV တွင် ကော်လံများ တူညီသော်လည်း plain values ဖြစ်သည်၊ Waste % သည် ရာခိုင်နှုန်း ဂဏန်း (10% အတွက် 10) ဖြစ်ပြီး ငွေသည် ဒေါ်လာ ဒဿမနှစ်နေရာဖြင့်။ Spreadsheet က ပုံသေနည်းဟု ထင်နိုင်သော စာသား (`=`, `+`, `-` သို့မဟုတ် `@` ဖြင့် စသည်) ရှေ့တွင် `'` ထည့်ထားသဖြင့် စာသားအဖြစ် ဆက်ရှိသည်။

## By sheet (XLSX သာ)

| Column | အကြောင်းအရာ |
|---|---|
| Sheet | Sheet အမည် (ဖွင့်မထားလျှင် PDF အမည်ပါ) |
| Item | Item အမည် |
| Quantity | ထို sheet ပေါ်ရှိ item ၏ ပမာဏ၊ ၎င်း၏ unit ဖြင့် |
| Unit | Item ၏ unit |
| Marks | Marks အရေအတွက် |

## Marks (XLSX သာ)

Mark တစ်ခုလျှင် row တစ်ခု။

| Column | အကြောင်းအရာ |
|---|---|
| Sheet | Sheet အမည် |
| Item | Item အမည် |
| Type | Linear, Area သို့မဟုတ် Count |
| Quantity | Length, net area, သို့မဟုတ် 1 |
| Unit | LF သို့မဟုတ် m; SF, SY သို့မဟုတ် m²; EA |
| Detail | Linear: အပိုင်း အရှည်များ၊ ဖယ်ရှားထားသော အပိုင်းများကို "(deduct)" ဟု မှတ်ထား၊ နှင့် "deducts (length) of (length) drawn"။ Area: cut-out ရှိလျှင် gross နှင့် cut-out ဧရိယာများ၊ နှင့် perimeter။ Scale မရှိသော marks အတွက် "Sheet has no scale"။ |
| Bid area | Bid area ရှိသော takeoff တွင်သာ- mark ၏ ဧရိယာ၊ သို့မဟုတ် "No bid area" |

## By bid area (XLSX သာ၊ takeoff တွင် bid area ရှိသောအခါ)

| Column | အကြောင်းအရာ |
|---|---|
| Bid area | ဧရိယာ၏ အမည်၊ သို့မဟုတ် "No bid area" |
| Item | Item၊ သို့မဟုတ် ၎င်းအောက်ရှိ အဝင်ဆွဲထားသော component |
| Unit | Item သို့မဟုတ် component ၏ unit |
| Quantity | ထို ဧရိယာတွင် တိုင်းထားသည် (components: ဧရိယာ၏ စုစုပေါင်းပေါ်ရှိ ပုံသေနည်း) |
| Qty with waste | Quantity × (1 + waste) |
| Material, Labor, Total | Estimate ကဲ့သို့ cent အထိ တိုးချဲ့ထားသည် |
| Notes | Estimate ကဲ့သို့ ပုံသေနည်း၊ error နှင့် scale မရှိသော marks |

ဧရိယာတစ်ခုစီသည် "(name) subtotal" row ဖြင့် အဆုံးသတ်ပြီး ၎င်း၏ costs များသည် row များပေါ်ရှိ `SUM` ပုံသေနည်းများ ဖြစ်သည်; နောက်ဆုံး row **All bid areas** က subtotals များကို ပေါင်းသည်။ **Marks** worksheet တွင် ယခု ကော်လံ ခုနစ်ခု ရှိပြီး **Bid area** ပါဝင်သည်။

## Scales (XLSX သာ)

Scale သို့မဟုတ် marks ရှိသော sheet တစ်ခုလျှင် row တစ်ခု။

| Column | အကြောင်းအရာ |
|---|---|
| Sheet | Sheet အမည် |
| Scale | Preset ၏ အမည်၊ သို့မဟုတ် calibrate လုပ်ထားသော scale၊ သို့မဟုတ် "No scale" |
| How | "Preset"၊ သို့မဟုတ် "Calibrated on (the distance you typed)" |
| Feet per PDF unit | TakeoffCraft သုံးသော scale factor အတိအကျ |

## File အမည်များ

- `(name).xlsx` နှင့် `(name).csv`၊ အမည်သည် takeoff တွင် ပထမဆုံး ဖွင့်ထားသော PDF မှ ရသည်။
- CSV သည် UTF-8 byte order mark နှင့် Windows line endings ဖြင့်ဖြစ်ပြီး platform တိုင်းရှိ spreadsheet program များက ဖတ်နိုင်သည်။
