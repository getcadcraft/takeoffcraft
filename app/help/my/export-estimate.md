---
title: Estimate နှင့် အမှတ်အသားပါ PDF ထုတ်ယူခြင်း
summary: Estimate ကို live formulas ပါသော XLSX workbook သို့မဟုတ် CSV အဖြစ် ဒေါင်းလုဒ်လုပ်ပြီး takeoff ဆွဲထားသော PDF မိတ္တူများ။
keywords: အဆိုပြုချက်, bid summary, export, xlsx, spreadsheet, workbook, csv, marked pdf, print takeoff, အစီရင်ခံစာ, မျှဝေခြင်း, ပို့ခြင်း, legend
from: 334f89c7
---

Exports များသည် ဒေါင်းလုဒ်များ ဖြစ်သည်။ ၎င်းတို့ကို သင့်ကွန်ပျူတာပေါ်တွင် takeoff နှင့် ဖွင့်ထားသော PDF များမှ ပြုလုပ်သည်; တစ်နေရာသို့မျှ မပို့ပါ။

## Spreadsheet အဖြစ် estimate (XLSX)

1. Toolbar ရှိ {{ui:ထုတ်ယူရန်}} menu ကို ဖွင့်ပြီး {{ui:XLSX}} ကို ရွေးပါ။
   သင့် browser က `(name).xlsx` ကို ဒေါင်းလုဒ်လုပ်သည်။ Status bar က "Exported (name).xlsx" ဟု ပြပြီး estimate မပြည့်စုံလျှင် သတိပေးချက် ထည့်သည်။
2. သင့် spreadsheet program တွင် ဖွင့်ပါ။

Workbook တွင် worksheet လေးခု ရှိပြီး သက်ဆိုင်သည့်အခါ အောက်ပါ အစီရင်ခံစာများ ထည့်သည်:

| Worksheet | ပါဝင်သည်များ |
|---|---|
| Estimate | Item နှင့် component တစ်ခုလျှင် row တစ်ခု: ပမာဏ၊ ဆုံးရှုံးမှု၊ ဆုံးရှုံးမှုပါသော ပမာဏ၊ နှုန်းများ၊ ပစ္စည်း၊ လုပ်အား၊ စုစုပေါင်း၊ notes။ အောက်ဆုံးတွင် job စုစုပေါင်း။ |
| By sheet | Item တစ်ခုစီ၏ sheet တစ်ခုစီပေါ် ပမာဏ၊ marks အရေအတွက်ပါ။ |
| Marks | Mark တိုင်း: sheet, item, type, quantity နှင့် detail (အပိုင်းအရှည်များ၊ gross နှင့် cut-out ဧရိယာများ၊ perimeter)။ |
| Scales | Scale သို့မဟုတ် marks ရှိသော sheet တစ်ခုစီ: ၎င်း၏ scale၊ ဘယ်လို သတ်မှတ်ခဲ့သည် (preset သို့မဟုတ် ဘယ် distance ဖြင့် calibrate), နှင့် feet per PDF unit။ |
| Takeoff summary | Item တစ်ခုစီ၏ ပမာဏ၊ CSI number၊ marks နှင့် sheets၊ ဈေးနှုန်းမပါ။ |
| Material list | Takeoff တစ်ခုလုံးမှ assembly အပိုင်းတိုင်းကို ပေါင်းထားသည် (item အများအပြားမှ တူညီသော အပိုင်းသည် တစ်ကြောင်းတည်း)၊ ဆုံးရှုံးမှုနှင့် ပစ္စည်းကုန်ကျစရိတ်၊ ထို အပိုင်းကို သုံးသော items များပါ။ |
| Quote request | Supplier သို့ ပို့ရန် material list: ဆုံးရှုံးမှုပါသော ပမာဏများ၊ unit-price column ဗလာ၊ ဈေးနှုန်း ရိုက်သည့်အခါ တိုးချဲ့ထားသော ပမာဏများနှင့် စုစုပေါင်း ဖြည့်ဝင်သည်။ |
| By division | Material, labor နှင့် total ကို CSI MasterFormat division အလိုက်၊ items တွင် {{ui:CSI number}} ရှိသောအခါ။ |

[Bid summary](topic:bid-summary) ရှိလျှင် Estimate worksheet သည် ၎င်း၏ markups (labor burden, sales tax, overhead, profit, bond နှင့် bid) ကို live formulas အဖြစ် အဆုံးသတ်သည်။

Estimate worksheet တွင် **live formulas** ရှိသည်: ဆုံးရှုံးမှုပါသော ပမာဏ၊ ဒဿမ ပြင်ဆင်ထားသော material နှင့် labor ပမာဏများ၊ row တစ်ခုစီ၏ စုစုပေါင်းနှင့် job စုစုပေါင်း။ Spreadsheet programs က ပြန်တွက်သဖြင့် spreadsheet တွင် နှုန်း သို့မဟုတ် waste ကို ပြောင်းလျှင် စုစုပေါင်းများ လိုက်ပြောင်းသည်။ TakeoffCraft တွက်ထားသော ဂဏန်းများကိုလည်း cells တွင် သိမ်းထားပြီး cent အထိ ကိုက်ညီသည်။

Notes column တွင် component တစ်ခုစီ၏ ပုံသေနည်း၊ ပုံသေနည်း error များ၊ scale မရှိသော sheet ပေါ်ရှိ marks၊ wall area နှင့် perimeter ကို စာရင်းပြုသည်။ တစ်ခုခု ချန်ထားလျှင် job စုစုပေါင်း row က "Incomplete: see the notes above" ဟု ပြောသည်။

Workbook ကို LibreOffice Calc တွင် စစ်ဆေးပြီး တူညီသော စုစုပေါင်းသို့ ပြန်တွက်သည်။ Excel တွင် မဖွင့်ရသေးပါ။ Column အလိုက် အသေးစိတ်ကို [Export columns](topic:export-columns) တွင် ကြည့်ပါ။

## CSV အဖြစ် estimate

{{ui:ထုတ်ယူရန်}} menu ကို ဖွင့်ပြီး {{ui:CSV}} ကို ရွေးပါ။ `(name).csv` ရမည်: Estimate worksheet နှင့် တူညီသော row နှင့် column များ၊ plain values (ပုံသေနည်းမပါ) နှင့် job စုစုပေါင်း။ အခြား estimating သို့မဟုတ် accounting system သို့ ကူးထည့်ရန် သုံးပါ။

CSV တွင် estimate တစ်ခုတည်းသာ ပါသည်; sheet အလိုက် ပမာဏများနှင့် mark စာရင်းအတွက် XLSX ကို သုံးပါ။ တူညီသော menu ရှိ {{ui:ပစ္စည်းစာရင်း}} က ပစ္စည်းစာရင်းကိုသာ ဝယ်ယူရန် CSV အဖြစ် သိမ်းသည်။

## Google Sheets ရှိ estimate

Quantities ဇယား အပေါ်ရှိ **Google Sheets အတွက် ကူးရန်** က estimate ကို tab-separated စာသားအဖြစ် clipboard သို့ ထည့်သည်၊ CSV နှင့် တူညီသော လိုင်းများဖြင့်။ Google Sheet တွင် A1 cell ကို နှိပ်ပြီး paste လုပ်ပါ။ TakeoffCraft သည် Google သို့ လက်မှတ်မထိုးပါ၊ ထိုနေရာသို့ ဘာမျှ မပို့ပါ။

## ဈေးနှုန်းပျောက်ခြင်းနှင့် estimate အတည်ပြုခြင်း

ပမာဏရှိပြီး နှုန်းမရှိသော လိုင်းသည် Notes တွင် **No rate** ဟု ပြပြီး ထုတ်ယူမှုက ၎င်းတို့ကို စုစုပေါင်းအောက်တွင် ရေတွက်သည်။ Estimate အတည်ပြုပြီးသောအခါ ထုတ်ယူမှုက ဘယ်သူ၊ ဘယ်အချိန်နှင့် ဘယ်စုစုပေါင်းအတွက် အတည်ပြုသည်ကို ဖော်ပြသည်။ [ဈေးနှုန်းပျောက်ခြင်းနှင့် estimate အတည်ပြုခြင်း](topic:sign-off-the-estimate) ကို ကြည့်ပါ။

## အမှတ်အသားပါ PDF

1. အမှတ်အသားများ ဆွဲလိုသော PDF များကို ဖွင့်ပါ။
2. {{ui:ထုတ်ယူရန်}} menu ကို ဖွင့်ပြီး {{ui:အမှတ်အသားပါသော PDF}} ကို ရွေးပါ။
   "Writing the marked PDF…" ပေါ်လာပြီး သင့် browser က PDF တစ်ခုစီအတွက် `(PDF name) (takeoff).pdf` ဟု အမည်ပေးထားသော file ကို ဒေါင်းလုဒ်လုပ်သည်။

မိတ္တူတွင်:

- Runs များကို item ၏ အရောင်ဖြင့် မျဉ်းများအဖြစ် ဆွဲသည်၊
- ဧရိယာများကို ပေါ့ပါးစွာ ဖြည့်ပြီး solid outline ရှိသည်၊ cut-outs များကို ဖွင့်ထားသည်၊
- Counts များသည် အစက်များ ဖြစ်သည်၊
- Marks ရှိသော စာမျက်နှာတိုင်းတွင် အောက်ဘယ်ထောင့်၌ အညွှန်းငယ်တစ်ခု ရှိသည်: item တစ်ခုစီ၏ အရောင်၊ အမည်နှင့် ထို စာမျက်နှာရှိ ပမာဏ။

မူရင်း PDF များကို မပြောင်းပါ။

မှတ်ချက်များ:

- ဖွင့်ထားသော PDF များကိုသာ ရေးသည်။ ဖွင့်မထားသော PDF များပေါ်ရှိ marks များသည် စုစုပေါင်းတွင် ရှိနေသော်လည်း မဆွဲပါ; ထို PDF များကို အရင်ဖွင့်ပါ။
- Legend ရှိ အမည်များသည် standard PDF font ကို သုံးသည်။ ပြ၍မရသော စာလုံးများကို "?" ဟု ပုံနှိပ်သည်။
- Encrypted PDF ကို marks ဖြင့် မိတ္တူမကူးနိုင်ပါ: "ဤ PDF သည် password ဖြင့် ကာကွယ်ထားသော သို့မဟုတ် encrypted ဖြစ်သဖြင့် marked မိတ္တူ မရေးနိုင်ပါ။ Takeoff ကိုယ်တိုင်မှာ ပြဿနာမရှိပါ; ဆန့်ကျင်ဘက် spreadsheet ကို ထုတ်ယူပါ။"
- Tab တစ်ခုတွင် ပထမ {{ui:အမှတ်အသားပါသော PDF}} က PDF writer ကို ဖွင့်သည်။ Offline တွင် app bar တွင် {{ui:အော့ဖ်လိုင်း အဆင်သင့်}} ပြသမှသာ ရှိသည်; [Working offline](common:offline) ကို ကြည့်ပါ။

:::chromium
Marked PDF အများအပြား ရှိလျှင် Chrome နှင့် Edge က ဤ site သည် file အများအပြား ဒေါင်းလုဒ်လုပ်ခွင့်ရှိ/မရှိ တစ်ကြိမ် မေးနိုင်သည်။ Allow ကို ရွေးပါ၊ မဟုတ်လျှင် ပထမ file တစ်ခုသာ ရမည်။
:::

## ထုတ်ယူစရာ မရှိပါလား?

- {{ui:XLSX}} နှင့် {{ui:CSV}} သည် item အနည်းဆုံး တစ်ခု လိုသည်: "ထုတ်ယူစရာ မရှိသေးပါ: item တစ်ခု ဖန်တီးပြီး ဆွဲပါ။"
- {{ui:အမှတ်အသားပါသော PDF}} သည် ဖွင့်ထားသော PDF ပေါ် marks လိုသည်: "ဖွင့်ထားသော PDF များပေါ် marks မရှိသေးပါ။"

## takeoff ကိုလည်း သိမ်းပါ

ထုတ်ယူမှုသည် အစီရင်ခံစာ ဖြစ်သည်။ နောက်ပိုင်း takeoff ကို ဆက်လုပ်လိုပါက {{ui:takeoff သိမ်းရန်}} ကိုလည်း ရွေးပါ: [Save and reopen a takeoff](topic:save-and-reopen) ကို ကြည့်ပါ။

Overhead, profit, tax နှင့် bond ထည့်ပြီး အဆိုပြုချက် ပို့လိုပါက [Bid summary and proposal](topic:bid-summary) ကို ကြည့်ပါ။
