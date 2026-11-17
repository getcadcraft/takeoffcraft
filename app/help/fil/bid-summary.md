---
title: Bid summary at proposal
summary: Magdagdag ng labor burden, sales tax, overhead, profit at bond sa estimate, isulat ang mga inclusion at exclusion, at mag-download ng proposal PDF na ipapadala.
keywords: bid, labor burden, burden, payroll, proposal, quote, overhead, profit, markup, margin, sales tax, bond, inclusions, exclusions, terms, pirma, client, presyo
from: 3208a561
---

Ipinepresyo ng estimate ang iyong na-takeoff. Ginagawa itong presyo ng **bid summary**: nagdaragdag ito ng sales tax, overhead, profit at bond, at gumagawa ng **proposal PDF** na may iyong mga inclusion at exclusion.

Buksan ito mula sa {{ui:Export}} › {{ui:Bid summary & proposal…}}. Lahat ng nasa loob nito ay nase-save kasama ng takeoff, at maaaring i-undo ang bawat pagbabago.

## Ang mga markup

I-type ang percent sa alinman sa lima (iwanang 0 ang iba). Kinukuwenta ang mga ito sa sumusunod na pagkakasunod, bawat isa batay sa nasa itaas nito:

| Linya | Kinukuwenta bilang |
|---|---|
| Material, Labor | Ang mga kabuuan ng estimate (ang base bid kapag may [alternates](topic:bid-areas#alternates-base-bid-plus-adds-and-deducts) ang takeoff). |
| Labor burden | Burden % × labor: payroll tax, insurance at benefits sa sahod ng mga crew mo. |
| **Cost** | Material + labor + labor burden. |
| Sales tax sa material | Tax % × material. |
| Overhead | Overhead % × (cost + tax). |
| Profit | Profit % × (cost + tax + overhead). |
| Bond | Bond % × lahat ng nasa itaas. |
| **Bid** | Ang kabuuan ng mga linya. |

Bawat linya ay nira-round sa sentimo. Ipinapakita ng workbook ang parehong mga linya sa ilalim ng kabuuan ng worksheet na Estimate, na may live formulas. Nag-a-update ang summary habang nagta-type ka: pinipili ng {{key:Enter}} ang percent. Ang bawat alternate ay ipinapakita na may parehong markup sa sarili nitong gastos, para makita ng owner kung ano talaga ang nababago kapag tinanggal o idinagdag ito.

## Ang proposal

Punan kung ano ang dapat sabihin ng proposal:

- **Project** (pangalan ng takeoff kapag walang laman), **To** (ang client) at **From** (ang kumpanya mo).
- **Inclusions** at **Exclusions**: isa bawat linya; ayos lang ang gitling o bullet sa unahan.
- **Terms**: malayang teksto, gaya ng "Balido sa loob ng 30 araw."
- **Ilista ang mga item at dami**: ang scope, item by item, kasama ang mga dami at walang presyo. Alisin ang tsek para sa lump-sum na proposal.

Piliin ang {{ui:Proposal PDF}}. Ang PDF (`<takeoff> - proposal.pdf`) ay may petsa, ang price block na may bawat markup at ang bid, ang mga alternate, ang scope, ang mga inclusion at exclusion, ang mga terms, at mga linya para pirmahan at lagyan ng petsa. Kung may ilang dami na hindi nasukat (sheet na walang scale), sinasabi ito sa ilalim ng presyo.

## Sa mga export

Kapag may bid summary na ang takeoff, nagtatapos ang CSV dito at nakakakuha ang workbook ng worksheet na **Bid summary**, na may bawat linya, percent at halaga nito. Tingnan ang [Export the estimate](topic:export-estimate).
