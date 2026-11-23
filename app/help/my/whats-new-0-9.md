---
title: 0.9 တွင် အသစ်များ (ယခင်)
summary: အလျားများကို မီတာ၊ ဆင်တီမီတာ သို့မဟုတ် မီလီမီတာဖြင့် ဖတ်နိုင်ခြင်း၊ m2 ဖြင့် မက်ထရစ် ဧရိယာနှင့် နံရံဧရိယာ၊ 1:75 နှင့် 1:150 စကေး ကြိုတင်သတ်မှတ်ချက်များ၊ အလေးချိန်နှင့် အပူချိန် ယူနစ်များ၊ နည်းလမ်း ဆယ်ခုပါသော Arc၊ တိုက်ရိုက် ကာဆာများ၊ Follow နှင့် လူစာရင်း။
keywords: 0.9 အသစ်များ, ယခင် ထုတ်ဝေမှု, အသစ်များ, what's new, ထုတ်ဝေမှု မှတ်စု, changelog, 0.9, show lengths as, meters, centimeters, millimeters, metric, follow global, units, display units, m2, square meters, wall area, scale presets, 1:75, 1:150, weight, kilograms, kg, tonne, ton, lb, temperature, celsius, fahrenheit, arc, arc methods, 3-point arc, radius, live, cursors, follow, people list, class, tooltips, layout, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, count everything, legend, symbol legend, whole set, price memory, past jobs, last job, typical price, supplier, stock, lead time, backorder, order list, shortage, problems panel, assistant, languages, input devices, toolbar rows, dwg
from: f4322ba2
---

ဤသည်မှာ TakeoffCraft 0.9 တွင် 0.8.1 နှင့် နှိုင်းယှဉ်၍ ပြောင်းလဲခဲ့သည့်အချက်များ ဖြစ်ပါသည်။ ဤထုတ်ဝေမှုသည် ဤအက်ပ်အတွက် သေးငယ်သော ထုတ်ဝေမှု ဖြစ်ပါသည်- အလျားများကို မီတာ၊ ဆင်တီမီတာ သို့မဟုတ် မီလီမီတာဖြင့် ယခု ဖတ်နိုင်ပြီဖြစ်ပြီး ဧရိယာနှင့် စကေးများသည် မက်ထရစ်အလုပ်ကို မှန်ကန်စွာ လိုက်နာပါသည်။ Arc ဖြင့် ဆွဲနိုင်သော နည်းလမ်း ဆယ်ခု ရှိပါသည်။ တိုက်ရိုက် session များတွင် ဘယ်သူ ဘယ်မှာ ရှိနေသည်ကိုလည်း ပြသပါသည်။

## အသစ်

### အလျားများကို မီတာ၊ ဆင်တီမီတာ သို့မဟုတ် မီလီမီတာဖြင့် ဖတ်ခြင်း

- **Show lengths as.** {{ui:Settings}} › {{ui:TakeoffCraft}} တွင် {{ui:Follow Global}}၊ {{ui:Feet-inches}}၊ m၊ cm နှင့် mm တို့ပါသော {{ui:Show lengths as}} ရှိပါသည်။ {{ui:Follow Global}} သည် {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} တွင် ကြယ်ပွင့်ပြထားသော မက်ထရစ် အလျားယူနစ်ကို အသုံးပြုပြီး ဘယ်ယူနစ်ကိုမှ ကြယ်ပွင့်မပြထားလျှင် ပေ-လက်မ ကို အသုံးပြုပါသည်။ ၎င်းသည် စာရွက်ပေါ်၊ status bar နှင့် အကန့်များတွင် အလျားများ ဖတ်ပုံကို ပြောင်းလဲပေးပြီး၊ အမြင့်၊ အနက်၊ အထူနှင့် အဆင့်များပါ ပါဝင်ပါသည်။ height field တွင် ရိုက်ထည့်ထားသော ဂဏန်းတစ်ခုတည်းကို ပြထားသော ယူနစ်ဖြင့် ဖတ်ပါသည်။
- **Display only.** ပမာဏများ၊ ကုန်ကျစရိတ်များနှင့် ထုတ်ယူမှုများကို တိကျသော အလျားများမှ တွက်ချက်ပါသည်။ 1/16၊ 1/8 နှင့် 1/4 လက်မ ရွေးချယ်မှုသည် ပေ-လက်မ အတွက်သာ ပေါ်ပါသည်။ ကြည့်ရန် [Show lengths in meters](topic:show-lengths-in-meters)။
- **Weight units.** {{ui:Typed quantity (no drawing)}} အရာတစ်ခုသည် ယခု lb၊ TON၊ kg သို့မဟုတ် t ဖြင့် ဖြစ်နိုင်ပြီး ယူနစ်တစ်ခုချင်းစီအလိုက် ဈေးတပ်နိုင်ပါသည်။
- **Temperature.** အရာတိုင်းတွင် item editor ထဲတွင် ရွေးချယ်နိုင်သော {{ui:Temperature}} field ရှိပြီး ဒီဂရီ C သို့မဟုတ် F ဖြင့် ရိုက်ထည့်နိုင်ပါသည်။ {{ui:Settings}} › {{ui:TakeoffCraft}} ရှိ {{ui:Show temperatures as}} တွင် {{ui:Follow Global}}၊ °C သို့မဟုတ် °F ရှိပါသည်။

### မက်ထရစ် အလုပ်အတွက် ဧရိယာများနှင့် စကေးများ

- **Areas in m2 on the drawing.** မက်ထရစ် item ဖြင့် တိုင်းထားသော ဧရိယာသည် ယခု ဇယားတွင်သာမက drawing tag နှင့် mark အကန့်တွင်ပါ SF အစား m2 ဟု ပြပါသည်။ စည်းမျဉ်းမှာ item ကို မက်ထရစ်ဖြင့် ဈေးတပ်ထားခြင်း သို့မဟုတ် အလျားများကို m၊ cm သို့မဟုတ် mm ဖြင့် ပြထားခြင်းဖြစ်လျှင် m2 ဖြစ်ပြီး၊ မဟုတ်လျှင် SF ဖြစ်ပါသည်။
- **Wall area.** အမြင့်ပါသော linear item သည် Items list တွင် နံရံဧရိယာ (အလျား ၍ အမြင့်) ကိုလည်း ပြပြီး by-item quantities ဇယား အောက်တွင် မှတ်ချက်အတန်းအဖြစ်လည်း ပြပါသည်။
- **Scale presets 1:75 and 1:150.** ၎င်းတို့သည် {{ui:Scale}} အုပ်စုရှိ {{ui:Preset}} list တွင် ရှိပြီး ယခု စကေး ၃၂ ခု ရှိပါသည်။ ကြည့်ရန် [Scale presets](topic:scale-presets)။

### နည်းလမ်း ဆယ်ခုပါသော Arc

- {{ui:Arc}} ဖွင့်ထားစဉ် (toolbar ခလုတ် သို့မဟုတ် {{key:R}}) sheet bar တွင် {{ui:Arc method}} ဘောက်စ် ပေါ်လာပါသည်- 3-Point၊ Start, Center, End၊ Start, Center, Angle၊ Start, Center, Length၊ Start, End, Angle၊ Start, End, Direction၊ Start, End, Radius၊ Center, Start, End၊ Center, Start, Angle နှင့် Center, Start, Length။ Angle၊ length၊ radius နှင့် direction တို့ကို နှိပ်ခြင်း သို့မဟုတ် ရိုက်ထည့်ခြင်းဖြင့် လုပ်နိုင်ပါသည်။ linear run များ၊ ဧရိယာများနှင့် cut-out များတွင် အလုပ်လုပ်ပါသည်။ 0.9 မတိုင်မီ သိမ်းထားသော ဖိုင်များလည်း အတူတူ ဖွင့်ပါသည်။ ကြည့်ရန် [Draw arcs with ten methods](topic:draw-arcs-ten-methods)။

### အတူတကွ လုပ်ဆောင်ခြင်း

- **See each other's cursors.** Live session တွင် လူတစ်ဦးစီ၏ pointer သည် ၎င်းတို့၏ နာမည်နှင့် အရောင်ဖြင့် စာရွက်ပေါ်တွင် ပြပြီး ရွေးထားသော mark များပတ်လည်တွင် မျဉ်းကြောင်းပြ box ပါပါသည်။ အခြား စာရွက်တွင် ရှိသူများကို ထိုစာရွက်၏ နာမည်ဖြင့် စာရင်းပြုထားပါသည်။ ကြည့်ရန် [Work live with others](topic:work-live)။
- **Follow a person, and the people list.** Live session ရှိ {{ui:People}} ခလုတ်သည် လူတစ်ဦးစီကို သုံးနေသော ကိရိယာ၊ ရှိနေသော စာရွက်နှင့် နောက်ဆုံး ပြင်ဆင်ခဲ့သည့်အချိန်ဖြင့် စာရင်းပြုပါသည်။ {{ui:Follow}} သည် သင့်အမြင်ကို သူတို့နှင့်အတူ ရွှေ့ပေးပြီး host က {{ui:Ask everyone to follow me}} ကို အသုံးပြုနိုင်ပါသည်။ ကြည့်ရန် [Follow a teammate in a Live session](topic:follow-a-teammate)။

## အက်ပ်အားလုံးတွင်

- **Tooltips and the start tip.** Hover စာသားသည် Bootstrap tooltip ဖြစ်ပြီး start tip ကို ပိတ်နိုင်ပါသည်။
- **Scrolling tab strips.** အကန့် tab strip သည် မကိုက်ညီလျှင် ဖြတ်တောက်မခံဘဲ scroll လုပ်ပါသည်။
- **Tab titles.** browser tab တွင် `<document> - TakeoffCraft | CadCraft` ဟု ဖတ်ရပါသည်။
- **Layout.** {{ui:Settings}} ရှိ layout list သည် ရွေးထားသော layout ကို ပြသည့် drop-down ဖြစ်ပါသည်။
- **Language.** သင်ရွေးသော ဘာသာစကားသည် ယခု New၊ Open နှင့် Save ကဲ့သို့ စာမျက်နှာ ကိုယ်တိုင် ပရင့်ထုတ်သော စကားလုံးများထိ ရောက်ပါသည်။ အင်္ဂလိပ်မှတစ်ပါး ဘာသာစကားများသည် မူလဘာသာစကား ဖတ်ရှုသူတစ်ဦးက စစ်ဆေးမပြီးမချင်း စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်ပါသည်။

## ဝန်ခံချက် ကန့်သတ်ချက်များ

- အလျားပြသမှု၊ အလေးချိန်နှင့် အပူချိန် ယူနစ်များနှင့် ပရီဆက်အသစ်များကို test များနှင့် စာမျက်နှာပေါ်တွင် စစ်ဆေးပြီးဖြစ်သည်။ ယူနစ်အားလုံးရှိ အကန့်အားလုံးကို လက်ဖြင့် မစစ်ဆေးရသေးပါ။
- လူစာရင်းကို ဆရာနှင့် ကျောင်းသားအစစ်အမှန်များဖြင့် လက်ဖြင့် မစစ်ဆေးရသေးပါ။
- အင်္ဂလိပ်မှတစ်ပါး ဘာသာစကားများသည် စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်ပါသည်။
- Windows installer များကို code-sign မလုပ်ထားပါ (နောက်ထပ် အချက်အလက်၊ ထို့နောက် ဆက်လုပ်ရန်)။ macOS disk image ကို notarize မလုပ်ထားပါ (right-click၊ ထို့နောက် {{ui:Open}})။

## အရင်: 0.8 နှင့် 0.8.1

ဤသည်မှာ TakeoffCraft 0.8 (2026-11-01 တွင် ထုတ်ဝေ) နှင့် 0.8.1 (2026-11-02) တို့တွင် 0.7 နှင့် နှိုင်းယှဉ်၍ ပြောင်းလဲချက်များ ဖြစ်ပါသည်။ သင်္ကေတ legend ကို စာရွက်အစုတစ်ခုလုံးတွင် တစ်ပြိုင်နက် ရေတွက်နိုင်ပြီး၊ ပရောဂျက်အသစ်ကို သင်၏ အတိတ်ပရောဂျက်များ၏ ဈေးနှုန်းများမှ စတင်နိုင်ပြီး၊ ပမာဏကို ပေးသွင်းသူ၏ လက်ကျန်နှင့် စစ်ဆေးနိုင်ပါသည်။ 0.8.1 သည် ပြင်ဆင်ချက် ထုတ်ဝေမှု ဖြစ်ပါသည်။

### အသစ်

**စာရွက်အစုတွင် အားလုံး ရေတွက်ခြင်း**

- **Box the legend once.** Toolbar ရှိ {{ui:Count everything}} သည် သင်္ကေတ legend ကို ဖတ်ပါသည်- သင်္ကေတများနှင့် ၎င်းတို့ဘေးတွင် ပုံနှိပ်ထားသော နာမည်များပတ်လည် box ဆွဲပါ။ သင်္ကေတတစ်ခုစီကို ပုံနှင့် နာမည်ဖြင့် စာရင်းပြုပြီး နာမည်သည် item ၏ နာမည် ဖြစ်လာပါသည်။ မလိုချင်သည်များကို ဖြုတ်ပြီး {{ui:Count on N sheets}} ကို ရွေးပါ။ ရှာဖွေနေသော စာရွက်ကို bar က ပြပြီး {{ui:Cancel}} က run ကို ရပ်ပြီး စာမျက်နှာသည် ဆက်သုံးနိုင်နေပါသည်။
- **Every sheet in one run.** သင်္ကေတတစ်ခုစီကို ဖွင့်ထားသော စာရွက်တိုင်းတွင် ရေတွက်ပါသည်။ အခြား စကေးဖြင့် ဆွဲထားသော စာရွက်ကို ထိုစကေးဖြင့် ရှာပြီး၊ သင်္ကေတများကို မည်သည့် right angle ဖြင့် လှည့်ထားသည်ဖြစ်စေ တွေ့ပါသည်။ legend ကိုယ်တိုင်၏ သင်္ကေတများကို ၎င်း၏ စာရွက်တွင် မရေတွက်ပါ။
- **Review before anything is added.** စုစုပေါင်းတစ်ခုစီတွင် စာရွက်တစ်ခုစီအလိုက် link ("E-103: 4") ရှိပြီး ထိုစာရွက်သို့ သွားပါသည်။ find တစ်ခုပေါ်ရှိ box ကို နှိပ်ပါက ထည့်မည်မဟုတ်ပါ၊ နောက်တစ်ကြိမ် နှိပ်ပါက ပြန်ထည့်ပါသည်။ match level (50% မှ 100%) သည် တွေ့ထားသည်များကို စစ်ထုတ်သာ ပြုပြီး ထပ်မံရှာဖွေခြင်း မရှိပါ။
- **One undo step.** {{ui:Add N marks}} သည် သင်္ကေတတစ်ခုလျှင် count item တစ်ခုနှင့် find တိုင်းတွင် mark ပြုလုပ်ပါသည်။ သင်၏ count item ဖြစ်ပြီးသား နာမည်ကို ပြန်သုံးပါသည်။ {{key:Ctrl+Z}} သည် item နှင့် mark အားလုံးကို ပြန်ယူပါသည်။ သင်လက်ခံသည့်အရာများသည် {{ui:Learned}} သို့လည်း ရောက်ပါသည်။
- **Symbols at any angle.** ရေတွက်ခြင်းမပြုမီ {{ui:Symbols at any angle}} ကို ရွေးပါက right angle မဟုတ်သော angle ဖြင့် လှည့်ထားသည့် သင်္ကေတများကိုလည်း ရှာပါသည်။ ထို့နောက် ရှာဖွေမှုသည် သင်္ကေတတစ်ခုစီကို ၁၅ ဒီဂရီ တိုင်း လှည့်ပါသည်၊ အဝိုင်းမဟုတ်သော သင်္ကေတသည် ၆ ဆအထိ ပိုကြာနိုင်ပါသည်။
- **What it is.** သင်၏ စာရွက်များပေါ်ရှိ ရိုးရိုး သင်္ကေတ ကိုက်ညီမှုဖြစ်ပြီး trained model မပါဝင်ပါ၊ ဘာတစ်ခုမျှ သင့်ကွန်ပျူတာမှ မထွက်ပါ။ စာရွက် 200 ရှိ လုပ်ဆောင်ထားသော စမ်းသပ်ပုံစံတွင် Chrome (မြန်သော desktop) ၌ အစမှအဆုံး 9.4 စက္ကန့် ကြာခဲ့ပါသည်၊ အမှန်တကယ် plan set များသည် ပိုနှေးပါလိမ့်မည်။ ကြည့်ရန် [Count everything in the set](topic:count-everything)။

**အတိတ်ပရောဂျက်များမှ ဈေးနှုန်း မှတ်ဉာဏ်**

- **TakeoffCraft remembers your rates.** ပမာဏကို သိမ်းသည့်အခါ အသုံးပြုထားသော ဈေးတပ်ထားသော item တစ်ခုစီကို နာမည်နှင့် အမျိုးအစားဖြင့် မှတ်ထားပါသည်- ပစ္စည်းနှုန်း၊ လုပ်အားနှုန်း၊ waste နှင့် ယူနစ်။ နာမည်တစ်ခုစီအတွက် နောက်ဆုံး ပရောဂျက် 12 ခုကို ထားပါသည်။ ၎င်းကို ဤကွန်ပျူတာပေါ်တွင် ဈေးနှုန်း Library ဘေးတွင် သိမ်းထားပြီး ပမာဏဖိုင်အတွင်း ဘယ်တော့မှ မထည့်ပါ၊ ဘယ်သို့မျှ ပို့ခြင်း မရှိပါ။
- **Start a new takeoff from it.** Toolbar ရှိ {{ui:Prices}} သည် item တစ်ခုစီအတွက် နောက်ဆုံး ပရောဂျက်၏ နှုန်းများ၊ typical နှုန်းများနှင့် အပိုင်းအခြားကို ပြပါသည်။ {{ui:Use last}} သို့မဟုတ် {{ui:Use typical}} သည် item တစ်ခုကို ဈေးတပ်ပေးပြီး {{ui:Price N unpriced items from memory}} သည် ဈေးမရှိသော item အားလုံးကို ဖြည့်ပေးပါသည်။ အသုံးပြုမှုတိုင်းသည် undo step တစ်ခု ဖြစ်ပါသည်။
- **Older work.** {{ui:Learn from a past takeoff…}} သည် သိမ်းထားသော ပမာဏ (.json) ၏ ဈေးတပ်ထားသော item များကို မှတ်ထားပါသည်။
- **See it, change it, forget it.** {{ui:Everything remembered}} သည် နာမည်အားလုံးကို စာရင်းပြုပါသည်၊ အမှိုက်ပုံး ခလုတ်သည် နာမည်တစ်ခုကို မေ့စေပြီး {{ui:Clear all prices}} သည် အားလုံးကို မေ့စေပါသည်။ ရပ်ရန် {{ui:Remember my prices when I save a takeoff}} ကို ပိတ်ပါ။ တစ်ခုချင်းစီ (each) အတွက် ဈေးကို ပေ တစ်ခုလျှင် item တွင် ဘယ်တော့မှ မထည့်ပါ။ ကြည့်ရန် [Price memory from your past jobs](topic:price-memory)။

**ပေးသွင်းသူ လက်ကျန်နှင့် ပို့ဆောင်ချိန်များ**

- **Check against a supplier's list.** Toolbar ရှိ {{ui:Supply}} သည် ပေးသွင်းသူ၏ လက်ကျန်စာရင်း ({{ui:Add a supplier file…}}) ကို CSV သို့မဟုတ် spreadsheet အဖြစ် ယူပြီး ပမာဏကို waste နှင့်အတူ ၎င်းနှင့် စစ်ဆေးပါသည်။ ဖိုင် 5 ခုအထိ သိမ်းထားပါသည်။ ဘာမျှ မပို့ပါ၊ ပေးသွင်းသူကို ဘာမျှ မမေးပါ- ဖိုင်ကို သင်ယူလာရပါမည်။
- **What it says.** လိုနေသော item များ ပထမဆုံး ပေါ်ပါသည်- "Short by 120 EA"၊ "Lead time 21 days"၊ "On backorder"၊ "Unit differs"၊ "No stock figure" သို့မဟုတ် "In stock"။ {{ui:Longest wait wanted (days)}} သည် 14 မှ စတင်ပါသည်။
- **Order list.** {{ui:Order list (CSV)}} သည် လိုနေသော item များကို လိုအပ်သော ပမာဏ၊ ပေးသွင်းသူနှင့် ပို့ဆောင်ချိန်ဖြင့် ဒေါင်းလုဒ် လုပ်ပေးပါသည်။
- **Prices into the Library.** ဖိုင်တွင် ဈေးများ ပါလျှင် {{ui:Prices into the Library}} သည် နာမည်နှင့် ယူနစ် တူသော Library entry တိုင်း၏ ပစ္စည်းဈေးကို သတ်မှတ်ပေးပါသည်။ ပမာဏထဲသို့ ယူရန် Library မှ reprice လုပ်ပါ။
- **In the Problems panel.** လိုနေမှုသည် သတိပေးချက်ဖြစ်ပြီး ကြာသော စောင့်ဆိုင်းမှုသည် မှတ်ချက်ဖြစ်ပါသည်၊ "Supplier stock" အောက်တွင် ရှိပါသည်။ အကြောင်းပြချက်ဖြင့် တစ်ခုကို လက်ခံနိုင်ပြီး အကြောင်းပြချက်သည် ပမာဏတွင် သိမ်းထားပါသည်။ ကြည့်ရန် [Check supplier stock and lead times](topic:supplier-stock)။

**AI assistant များ**

- **Tools for all three.** {{ui:Settings}} တွင် assistant ခွင့်ပြုထားသည့်အခါ assistant သည် legend ကို ဖတ်နိုင် (`legend_open`)၊ ရေတွက်မှုကို လုပ်နိုင် (`legend_count_start`၊ ထို့နောက် `legend_count_status` နှင့် `legend_count_result`) နှင့် ထည့်နိုင် (`legend_count_add`၊ ၎င်းက ဦးစွာ preview ပြနိုင်) ပါသည်။ မှတ်ထားသော ဈေးနှုန်းများကို ဖတ်နိုင် (`prices_list`) နှင့် ၎င်းတို့မှ item များကို ဈေးတပ်နိုင် (`prices_apply`၊ ၎င်းက ဦးစွာ preview ပြနိုင်) ပါသည်၊ ပေးသွင်းသူ စစ်ဆေးချက်ကိုလည်း ဖတ်နိုင် (`supply_check`) ပါသည်။ ပေးသွင်းသူဖိုင် ထည့်ခြင်းမှာ သင့်အလုပ်ဖြစ်ဆဲ ဖြစ်ပါသည်။ ကြည့်ရန် [Use TakeoffCraft with AI assistants](topic:use-with-ai-assistants)။

**အက်ပ်အားလုံးတွင်**

- **Languages.** ဘာသာစကား ၅၄ မျိုး စုစုပေါင်း ရှိပြီး ၁၀ မျိုးသည် အသစ် ဖြစ်ပါသည် (Lithuanian၊ Latvian၊ Bosnian၊ Marathi၊ Telugu၊ Albanian၊ Afrikaans၊ Filipino၊ Swahili နှင့် Uzbek)။ အင်္ဂလိပ်မှတစ်ပါး ဘာသာစကားများသည် မူလဘာသာစကား ဖတ်ရှုသူတစ်ဦးက စစ်ဆေးမပြီးမချင်း စက်ဖြင့် ပြုလုပ်ထားသော မူကြမ်းများ ဖြစ်ပါသည်။
- **Input devices.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} သည် trackpad၊ mouse ၏ ဘေးခလုတ်များ၊ pen၊ 3D mouse၊ game controller သို့မဟုတ် MIDI controller တို့ ဘာလုပ်မည်ကို အက်ပ်တိုင်း သို့မဟုတ် တစ်ခုအတွက် သတ်မှတ်ပါသည်။ ကြည့်ရန် [Use a trackpad, 3D mouse or controller](common:input-devices)။
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} တွင် {{ui:Wrap}} (စတင်ချက်)၊ {{ui:2 rows}} နှင့် {{ui:1 row}} ရှိပါသည်၊ မကိုက်ညီသော အုပ်စုများသည် ဘေးတိုက် scroll လုပ်ပါသည်။ ကြည့်ရန် [Arrange the panels](common:arrange-panels)။
- **Problems panel.** အကန့်ဘုံ သတိပေးချက်နှင့် မှတ်ချက်များတွင် ယခု အထက်ပါ ပေးသွင်းသူ လက်ကျန် စစ်ဆေးချက်ကို အခြားစစ်ဆေးချက်များနှင့်အတူ ပါဝင်ပါသည်။
- **Add-ons.** Add-on များသည် သင့်အကောင့် စာရင်းကို လိုက်ပါသည်။ ကြည့်ရန် [Add-ons and your account list](common:addons-basics)။
- **Connect your AI.** CadCraft Studio သည် hub ဖြစ်ပါသည်- assistant ကို တစ်ကြိမ်ချိတ်ဆက်ပြီး ရှစ်ခု အက်ပ်အားလုံးအတွက် သုံးနိုင်ပါသည်။ Studio တွင် ကိုယ်ပိုင် AI မရှိပါ။

### 0.8.1 တွင် ပြင်ဆင်ချက်များ

- **DWG classes section.** DWG ဖိုင်၏ classes အပိုင်းကို မှားသော အမျိုးအစားအဖြစ် ဖတ်ခဲ့ပါသည်။ ၎င်းကို TakeoffCraft နှင့် အခြား အက်ပ်လေးခုတွင် ပြင်ပြီးဖြစ်ပါသည်။
- **Studio can change language while it runs.** မတိုင်မီက Studio နှင့် ၎င်း၏ packed edition များသည် အင်္ဂလိပ်သာ ဖြစ်ပါသည်။ ၎င်းကို desktop build တွင် ပလက်ဖောင်းတိုင်းပေါ်တွင် စမ်းသပ်ပြီးမဖြစ်သေးပါ၊ ဘာသာစကား မပြောင်းပါက ကျွန်ုပ်တို့ကို အသိပေးပါ။

### ဤဗားရှင်းတွင် မပါသေးသည်များ

- **Not code-signed.** Windows က သတိပေးနိုင်ပြီး Mac တွင် ပထမဆုံး အကြိမ်၌ right-click ပြုလုပ်ပြီး {{ui:Open}} ကို ရွေးပါ။ store build များ (Microsoft Store၊ Google Play၊ App Store) သည် ရပ်ဆိုင်းထားပြီး iPad နှင့် iPhone build ကို 0.8.1 အတွက် ပြန်မတည်ဆောက်ခဲ့ပါ။
- **Studio updates.** Windows installer နှင့် Linux package များသည် တစ်ရက်လျှင် တစ်ကြိမ် စစ်ဆေးပြီး ဦးစွာ မေးပါသည်။ portable zip သည် ပြောပြသာ ဖြစ်ပြီး macOS နှင့် APK သည် ကိုယ်တိုင် မွမ်းမံပါ။ 0.8 macOS .dmg သည် ထုတ်ဝေမှုကို လိုက်ပါသည်။
- **Connect your AI.** Studio အတွင်း တစ်ချက်နှိပ်ချိတ်ဆက်ခြင်း၊ browser အတွက် hosted connector၊ Studio အတွင်း ကိုယ်ပိုင် API key နှင့် ထုတ်ဝေထားသော MCP package တို့ကို ဤဗားရှင်းတွင် မကတိပေးပါ။
- **Count everything.** legend ထဲရှိ နည်းတူ ဆွဲထားသော သင်္ကေတများ လိုအပ်ပြီး နံရံ သို့မဟုတ် ရှည်လျားသော မျဉ်းတစ်ခုဖြတ်သွားသော သင်္ကေတကို လွတ်သွားနိုင်ပါသည်။ ထင်ပေါ်ထားသော သင်္ကေတများကို ရှာမတွေ့ပါ၊ စကေးမပါသော စာရွက်သည် legend ၏ အရွယ်အစားဖြင့် ရှာဖွေပါသည်။ နောက်ကျန်များကို မယုံမီ ပထမ စာရွက်ပေါ်ရှိ တွေ့ချက်များကို စစ်ဆေးပါ။
- **Supplier stock.** လက်ကျန်ကိန်းဂဏန်းများသည် သင်ထည့်သော ဖိုင်ကဲ့သို့သာ လက်ရှိဖြစ်ပါသည်။ စစ်ဆေးချက်သည် ပေးသွင်းသူကို ဘယ်တော့မှ မမေးပါ။
- **Languages.** Tamil ၏ app bar သည် ကျော်လွန်နေပါသည်။

အခြားအရာအားလုံးကို [Not built yet](topic:not-built-yet) တွင် ကြည့်ပါ။ ယခင် ထုတ်ဝေမှုအတွက် [What's new in 0.7](topic:whats-new-0-7) ကို ကြည့်ပါ။
