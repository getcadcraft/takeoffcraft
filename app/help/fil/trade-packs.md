---
title: Mga trade pack
summary: Magdagdag ng libreng assemblies para sa isang trade sa iyong price library, alisin ang mga ito sa isang hakbang, at ibahagi ang sarili mong library bilang pack.
keywords: trade pack, pack, assemblies, templates, starter items, kuryente, drywall, framing, pintura, concrete, flooring, masonry, roofing, siding, karpintero, tubero, hvac, insulation, landscape, decking, general contractor, csi, masterformat, cc0, idagdag, alisin, ibahagi
from: d3c036be
---

Ang **trade pack** ay set ng mga handang item para sa isang trade: bawat isa ay may sariling unit, taas o lalim, waste at **assembly**, ang mga bahagi at formula na nagbabago ng sinukat na run, lawak o bilang tungo sa mga materyales. Halimbawa, ang drywall partition ay nagdadala ng track, stud, sheet, tornilyo, tape at compound.

Idinadagdag ang mga pack sa iyong [Library ng presyo](topic:price-library), at mula roon ay idinadagdag mo ang kanilang mga item sa anumang takeoff.

## Magdagdag ng pack

1. Buksan ang {{ui:Library}} sa itaas ng {{ui:Items}} panel, saka {{ui:Trade packs…}}.
2. Piliin ang {{ui:Units}}: imperial (LF, SF), metric (m, m²) o pareho. Nasa parehong sistema ang bawat assembly.
3. Piliin ang {{ui:Add}} sa tabi ng isang pack.

Lalabas ang mga item ng pack sa library, na may tag na pangalan ng pack. Para magamit ang mga ito, lagyan ng tsek sa library at piliin ang {{ui:Add to takeoff}}.

:::note
**Walang dalang presyo ang pack.** Ang mga item nito ay nagpapakita ng "set your rate" sa library. Ikaw ang nagtatakda ng rate: i-type ang mga ito sa library o sa item editor, o i-import ang iyong listahan ng presyo bilang CSV at gamitin ang {{ui:Update prices}}.
:::

Kung may item ka na nang may parehong pangalan at uri sa library mo, iiwan ng pack ang sa iyo. Kapag inulit mo ang pagdagdag ng pack, papalitan nito ang sarili nitong item ng bagong bersyon.

## Alisin ang pack

Sa {{ui:Trade packs…}}, piliin ang {{ui:Remove}} sa tabi ng pack na idinagdag mo, saka isa pang beses para kumpirmahin. Aalisin sa library sa isang hakbang ang bawat item na galing dito. Mananatili sa takeoff na iyon ang mga item na naidagdag mo na sa takeoff.

## Ano ang nasa pack

Piliin ang {{ui:Sources and details}} sa ilalim ng isang pack para makita kung saan isinulat ang bawat assembly: mga building code, standard at installation guide ng mga trade association. Sa library, itapat ang pointer sa isang item para mabasa ang mga source at assumption nito, gaya ng stud spacing o spread rate ng pintura. Suriin ang mga ito laban sa iyong trabaho at sa data sheet ng iyong mga produkto, at baguhin ang mga formula kung magkaiba (tingnan ang [Assemblies at formula](topic:assemblies)).

Minamarkahan ang bawat pack ng **Starter: hindi pa nasusuri ng estimator** hanggang masuri ito ng mga aktibong estimator.

Dala rin ng bawat item ang numero nitong CSI MasterFormat, gaya ng `09 21 16`.

## Ibahagi ang iyong library bilang pack

{{ui:Export as pack…}} sa library ay nagse-save nito bilang pack file (`.ccpack.json`) na maaaring idagdag ng sinuman sa pamamagitan ng {{ui:Open a pack file…}}. Bilang default, iniiwan nito ang mga item na galing sa mga pack na idinagdag mo, at walang dalang rate. Lagyan ng tsek ang {{ui:Include my rates as sample rates}} para maipadala rin ang iyong mga rate: may label ang mga ito ng rehiyon at petsang ibibigay mo, at ang sinumang magdaragdag ng pack ang pipili kung gagamitin ang mga ito.

Ang pack file ay plain data, hindi kailanman programa. Sinusuri ng TakeoffCraft ang bawat bahagi nito bago gamitin, at inaalis ang anumang hindi nito mabasa.
