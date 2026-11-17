---
title: မြေလုပ်ငန်းနှင့် မြေပြင်အမြင့် အမှတ်များ
summary: Site plan ပေါ်တွင် မြေပြင်အမြင့် အမှတ်များ အမှတ်အသားပြုပြီး surface နှင့် cut and fill အတွက် CivilCraft သို့ ပေးပို့ပါ၊ ရိုးရှင်းသော တူးဖော်မှု ပမာဏများကို ဤနေရာတွင် ယူပါ။
keywords: မြေလုပ်ငန်း, တူးဖော်ခြင်း, ဖြတ်, ဖြည့်, ဖြတ်နှင့်ဖြည့်, မြေပြင်ညှိခြင်း, မြေပြင်အမြင့် အမှတ်, အမြင့်များ, topo, surface, triangulation, civilcraft, အမှတ်များ, pnezd, ကျင်း
from: a898e508
---

TakeoffCraft သည် စာရွက်ပေါ်တွင် ဆွဲထားသည်များကို တိုင်းတာသည်။ မြေလုပ်ငန်းသည် မြေပြင် surface လိုအပ်သောကြောင့် CivilCraft နှင့် မျှဝေသည်။ CivilCraft သည် အမှတ်များမှ surface တည်ဆောက်ပြီး ညှိကာ cut and fill နှင့် haul ကို တွက်ချက်သည်။

## ဤနေရာတွင် ရိုးရှင်းသော တူးဖော်ခြင်း

တစ်ခုတည်းသော အနက်အထိ တူးထားသော ခြေရာအတွက် **depth** ပါသော area item တစ်ခု လုံလောက်သည်- ထုထည်သည် area × depth ဖြစ်သည်။ General contractor [trade pack](topic:trade-packs) တွင် bulk excavation item (bank volume, loose volume နှင့် truck loads) နှင့် utility trench item (အရှည်နှင့် အနက်အလိုက် excavation, bedding နှင့် backfill) ပါသည်။

## CivilCraft အတွက် မြေပြင်အမြင့် အမှတ်များ

1. စာရွက်၏ scale ကို သတ်မှတ်ပါ။
2. **Count** item တစ်ခု ဖန်တီးပါ၊ ဥပမာ "ရှိပြီးသား မြေပြင်အဆင့်" ဟု အမည်ပေးပြီး စာရွက်ပေါ်ရှိ မြေပြင်အမြင့် အမှတ်တိုင်းကို နှိပ်ပါ။
3. ရွေးထားသော အမှတ်အသားကို ရွေးပြီး ရွေးထားသော အမှတ်အသား panel တွင် {{ui:မြေပြင်အမြင့်}} ကို ရိုက်ပါ- `102.5`, `102'-6"` သို့မဟုတ် `31.24 m`။ အနုတ်နှင့် သုည အမြင့်များ ရပါသည်။
4. {{ui:ထုတ်ယူရန်}} menu ကို ဖွင့်ပြီး {{ui:မြေပြင်အမြင့် အမှတ်များ}} ကို ရွေးပါ။ Point, Northing, Easting, Elevation နှင့် Description ပါသော points file (`.csv`) ရမည်၊ ဖွင့်ထားသော စာရွက်ပေါ်ရှိ အမှတ်အသားပါ point တစ်ခုလျှင် row တစ်ခု။
5. ထို file ကို CivilCraft တွင် ဖွင့်ပါ (see [Import points](app:civilcraft/import-points))။ ၎င်းသည် အမှတ်များမှ surface တည်ဆောက်ပြီး ([Build a surface](app:civilcraft/build-surface)) ထို့နောက် surface များကို နှိုင်းယှဉ်ကာ cut and fill ပေးသည် ([Volumes](app:civilcraft/volumes))။

Northing နှင့် easting တို့သည် စာရွက်၏ ကိုယ်ပိုင် coordinates ဖြစ်ပြီး စာမျက်နှာ ထောင့်မှ ၎င်း၏ scale အတိုင်း feet ဖြင့် တိုင်းထားသည်- အမှတ်များကြား အကွာအဝေးနှင့် ထုထည်များ မှန်ကန်သော်လည်း ၎င်းတို့သည် သင့်ဆိုဒ်၏ survey coordinates မဟုတ်ပါ။ လိုအပ်သောအခါ CivilCraft တွင် ဆိုဒ်၏ coordinates သို့ ရွှေ့ပါ။

:::note
မတူသော စာရွက်များမှ အမှတ်များသည် coordinates မမျှဝေသဖြင့် ထုတ်ယူမှုသည် ဖွင့်ထားသော စာရွက်တစ်ခုတည်းကိုသာ ယူသည်။ မြေပြင်အမြင့်များကို takeoff နှင့်အတူ သိမ်းဆည်းပြီး copy နှင့် paste ဖြင့် သယ်ဆောင်သည်။
:::

## CivilCraft မှ cut and fill

CivilCraft ၏ earthwork သည် ဈေးနှုန်းသတ်မှတ်နိုင်သော item နှစ်ခုအဖြစ် ပြန်လာသည်:

1. CivilCraft တွင် pad နှင့် corridor များကို grade လုပ်ပြီး **Earthwork** အောက်ရှိ {{ui:TakeoffCraft သို့ ပို့ရန်}} ကို ရွေးပါ ([Earthwork volumes](app:civilcraft/volumes))။ ၎င်းသည် quantities file (`.quantities.json`) တစ်ခု သိမ်းသည်။
2. TakeoffCraft တွင် {{ui:takeoff ဖွင့်ရန်}} ဖြင့် ဖွင့်ပါ၊ သို့မဟုတ် app ပေါ် ချပေးပါ။ သင့် takeoff ဖွင့်နေဆဲ ဖြစ်သည်- file သည် **Earthwork: cut** နှင့် **Earthwork: fill** ကို [typed quantities](topic:create-items#typed-quantities-no-drawing) အဖြစ် ထည့်သည်၊ feet project အတွက် cubic yards (CY)၊ metre project အတွက် cubic metres (m³)။ ၎င်းသည် အဆင့်တစ်ခုတည်း ဖြစ်သည်- {{key:Mod+Z}} ဖြင့် ပြန်ဖျက်နိုင်သည်။
3. အမည်ပြောင်းပါ၊ ဆုံးရှုံးမှု၊ နှုန်းများနှင့် assemblies များကို လိုသလို သတ်မှတ်ပါ။

Design ပြောင်းသောအခါ CivilCraft မှ ထပ်ပို့ပြီး အသစ်ဖွင့်ပါ- item နှစ်ခုတည်းသည် ပမာဏအသစ်ကို ရရှိသည်။ ၎င်းတို့၏ အမည်များ၊ နှုန်းများ၊ ဆုံးရှုံးမှုနှင့် assemblies များသည် သင်သတ်မှတ်ထားသည့်အတိုင်း ကျန်ရှိသည်။ Project ၏ unit ပြောင်းခဲ့လျှင် status bar က ပြောပြမည်- နှုန်းများကို စစ်ပါ။ အခြား CivilCraft project ၏ file သည် ကိုယ်ပိုင် item နှစ်ခု ထည့်သည်။

ပမာဏများသည် CivilCraft တိုင်းထားသည့်အတိုင်း bank volumes ဖြစ်သည် (grid method)- shrink သို့မဟုတ် swell မပါ။ ထိုတန်ဖိုးများကို waste အဖြစ် ထည့်ပါ၊ သို့မဟုတ် loose volume အတွက် `Q * 1.25` ကဲ့သို့ formula ဖြင့် သုံးပါ။ Item editor တွင် တစ်ခုစီ မည်သည်နေရာမှ၊ မည်သည့်အချိန်မှ ရသည်ကို ပြသည်၊ estimate ၏ notes column တွင်လည်း ဖော်ပြသည်။

:::note
Quantities file သည် ရိုးရိုး JSON ဖြစ်သည် (`"format": "cadcraft-quantities"`)၊ ထို့ကြောင့် script သို့မဟုတ် အခြား program တစ်ခုလည်း ရေးနိုင်သည်- app အမည်၊ project နှင့် key, အမည်, unit နှင့် quantity ပါသော items များ။
:::
