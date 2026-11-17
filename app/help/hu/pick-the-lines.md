---
title: A PDF vonalainak kijelölése
summary: Kattintson egy vektoros PDF vonalára a teljes összefüggő útvonal megméréséhez, vagy egy zárt körvonal belsejébe a területéhez; a réstűrés látható, és szegmensenként egy visszavonás van.
keywords: útvonal, kijelölés, vonalak, összefüggő, teljes szakasz, nyomkövetés, körvonal, kerület, rés, tűrés, áthidalás, szegmensek, tab, vektor, terület vonalakból, p
from: c22526ae
---

Vektoros PDF-en a falak és az élek valódi vonalak. Az {{ui:Útvonal}} ({{key:P}}) úgy veszi őket, ahogy meg vannak rajzolva: egy kattintás a vonalra az ahhoz kapcsolódó mindent méri, végétől végéig, így nem kell a falat sarkról sarokra végigkattintania. A lapnak méretarány kell hozzá. A szkennelt lapon nincsenek kijelölhető vonalak; ott használja a [Linear](topic:measure-linear) vagy az [Area](topic:measure-areas) mérést.

## Útvonal vagy körvonal kijelölése

1. Válassza az {{ui:Útvonal}} lehetőséget. A mutató alatti vonal körvonalat kap, a többi útvonal, amely rajzolható lenne, vékonyan látszik.
2. Kattintson egy vonalra: a teljes összefüggő útvonal kijelölődik. Az eszköztár alatti sáv megadja a szegmenseit, a hosszát, a réstűrést és azt, hány rést hidaltak át. Az útvonal, amely visszatér a kezdőpontjához, zárt, és a kerületét is jelzi.
3. Vagy kattintson egy zárt körvonal belsejébe, a vonalaktól távol: a körvonal, amely a pont körül van, területként kerül kijelölésre. A legkisebb jön először; a {{key:Tab}} a következő, nagyobb körvonalat próbálja ki.
4. Nyomja meg az {{key:Enter}} billentyűt (vagy kattintson jobb gombbal, vagy kétszer kattintson) a jelölések hozzáadásához. A kijelölt útvonal egy **Linear** tétel jelölése lesz, a körvonal egy **Area** tétel jelölése: az aktív tétel, ha az ilyen fajtájú, különben a legutóbbi ilyen fajtájú tétel. Ha nincs ilyen, megnyílik az új tétel űrlapja, és addig nem adódik hozzá semmi, amíg újra meg nem nyomja az {{key:Enter}} billentyűt. Mindent, amit kijelölt, egy visszavonási lépésben ad hozzá.

## A réstűrés

A rajzolók kis hiányokat hagynak ott, ahol a vonalaknak találkozniuk kellene. Két vonal akkor kapcsolódik, ha a végeik közelebb vannak egymáshoz, mint a **réstűrés**. A lapon 1,5 pontnál kezdődik (a lap méretarányában láb és hüvelyk szerint mutatva), és egy ilyen szélességű szaggatott gyűrű követi a mutatót, és minden kijelölt útvonal végpontján ott ül. Minden áthidalt hiány narancssárgán van bekarikázva a kijelölt útvonalon, és a sáv számolja őket.

A {{key:]}} szélesíti a tűrést, a {{key:[}} szűkíti. Egy kijelölt útvonal azonnal újra összekapcsolódik az új tűréssel. Elágazásnál az útvonal egyenesen megy tovább, azon az irányon, amely a legkevésbé hajlik, és az ágat elhagyja.

## Billentyűk

| Billentyű vagy művelet | Mit tesz |
|---|---|
| Kattintás | Kijelöli a mutató alatti útvonalat, vagy az azt körülvevő körvonalat. |
| {{key:Shift}} + kattintás | Egy újabb útvonalat vagy körvonalat ad a kijelöltekhez. |
| {{key:Tab}} | A mutató alatti következő útvonalat próbálja, vagy a következő nagyobb körvonalat. |
| {{key:Backspace}} vagy {{key:Mod+Z}} | Leveszi az utoljára kijelölt útvonal utolsó szegmensét, egyszerre egy szegmenst. Ha nem marad szegmens, az útvonal eltűnik. Ha nincs semmi kijelölve, a {{key:Mod+Z}} a szokásos visszavonás. |
| {{key:[}} és {{key:]}} | Szűkebb és szélesebb réstűrés. |
| {{key:Enter}} | A jelölések hozzáadása. |
| {{key:Esc}} | A kijelöltek törlése. |

## Jó tudni

- A rajz egy íve rövid egyenes darabok láncolata, így a hossza kissé rövidebb a valódi ívnél. Pontos ívhez mérje a rajz saját fájlját ([Mérés rajzból](topic:measure-from-a-drawing)).
- Az áthidalt rés egyenes átugrásként számít, ezért a zárt körvonal kerülete is tartalmazza.
- Csak a lap saját útvonalainak vonalai és kitöltései számítanak vonalnak. A betűkként rajzolt szöveg és a képek nem.
