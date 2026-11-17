---
title: AI 어시스턴트와 함께 TakeoffCraft 사용하기
summary: 직접 준비한 AI 어시스턴트나 스크립트가 물량 산출의 수량과 견적을 읽고, 항목과 표시를 추가하고, DWG 또는 DXF에서 개수와 길이를 세고, 내보내도록 허용합니다. 권한, CadCraft Studio를 통한 연결, 활동 기록을 설명합니다.
keywords: AI, 어시스턴트, 에이전트, MCP, Model Context Protocol, 스크립트, 자동화, 수량, 견적, 권한, 연결 끊기, 활동
from: 7fa62ec6
---

## 학습 내용

AI 어시스턴트(또는 직접 작성한 스크립트)가 TakeoffCraft와 함께 작업하도록 설정하는 방법과, 어시스턴트가 건드릴 수 있는 범위를 정하는 방법을 설명합니다.

TakeoffCraft에는 **자체 AI가 없으며** 아무것도 외부로 보내지 않습니다. 어시스턴트는 직접 준비해야 합니다. Model Context Protocol(MCP)을 사용하는 프로그램이면 무엇이든 가능합니다. TakeoffCraft는 어시스턴트에 도구만 제공하며, 어떤 도구를 제공할지는 사용자가 선택합니다.

## 켜기

1. {{ui:Settings}} 창을 엽니다(앱 막대의 톱니바퀴 또는 {{key:Mod+,}}). 그런 다음 {{ui:TakeoffCraft}} 탭으로 이동합니다.
2. {{ui:Assistants}} 아래에서 **AI 어시스턴트와 스크립트가 TakeoffCraft 사용 허용**을 선택합니다. 선택하기 전까지는 꺼져 있습니다.
3. 허용할 작업을 정합니다. **읽기**는 기본으로 선택되어 있습니다. **편집**, **저장** 또는 **내보내기**는 필요할 때만 선택합니다.

선택하지 않은 권한 밖의 도구는 어시스턴트에 제공되지 않습니다. 어시스턴트가 그래도 요청하면 TakeoffCraft가 거부하고 활동 기록에 남깁니다. 스위치를 끄면 모든 연결이 즉시 끊어집니다. {{ui:Reset TakeoffCraft settings}}를 실행해도 스위치가 꺼집니다.

## 어시스턴트 연결

어시스턴트는 컴퓨터의 **CadCraft Studio**를 통해 연결됩니다. Studio는 이 컴퓨터에서만 접근할 수 있는 작은 서버를 실행하며, Studio가 시작할 때마다 새로 만드는 토큰으로 보호됩니다. Studio에서 {{ui:Connect an assistant}} 항목을 선택하고, 주소와 토큰을 어시스턴트에 복사합니다(붙여넣을 정확한 설정은 Studio가 표시합니다). 토큰은 절대 공유하지 마십시오.

:::note
브라우저 탭은 어시스턴트를 위한 연결을 열 수 없습니다. 브라우저 앱에서는 컴퓨터의 CadCraft Studio를 사용하기 전까지 스위치가 아무 효과도 없습니다.
:::

## 계속 직접 관리하기

- **모든 변경은 실행 취소 한 단계입니다.** 어시스턴트의 이름이 붙은 이름으로 기록됩니다(예: "Assistant: …"). {{key:Mod+Z}} 키를 누르면 어시스턴트의 마지막 변경 전체가 취소됩니다.
- **연결 여부를 알 수 있습니다.** 연결되어 있는 동안 앱 막대의 버튼에 어시스턴트 이름이 표시됩니다. 버튼을 누르면 어시스턴트가 할 수 있는 작업을 보거나 **연결 끊기**를 할 수 있습니다.
- **활동.** {{ui:Settings}} › {{ui:TakeoffCraft}} › {{ui:Assistants}} › {{ui:Activity}}에서 모든 호출을 확인할 수 있습니다. 시각, 도구, 완료 또는 거부 여부가 나열됩니다. {{ui:Save the log}} 항목을 선택하면 사본이 보관됩니다.

## 어시스턴트가 요청할 수 있는 작업

| 도구 | 권한 | 기능 |
|---|---|---|
| `app_info`, `sheets_list` | 읽기 | 열려 있는 물량 산출, 그 PDF와 시트, 각 시트의 축척과 표시 |
| `items_list` | 읽기 | 단위, 단가, 복합 단가 수식이 포함된 항목 |
| `takeoff_quantities` | 읽기 | 항목별 또는 시트별 수량. 축척이 없는 시트의 표시는 목록에 나오며 0으로 세지 않습니다 |
| `takeoff_estimate` | 읽기 | TakeoffCraft가 계산한 단가 견적과 합계 |
| `takeoff_export` | 내보내기 | TakeoffCraft 자체의 CSV 또는 XLSX 내보내기 |
| `items_add` | 편집 | 단위, 단가, 할증이 포함된 항목 추가 |
| `marks_add` | 편집 | 시트에서 연속 길이, 면적, 개수 측정. 길이와 면적은 축척이 있는 시트에서만 가능하며 축척이 없는 시트에서는 불가능 |
| `cad_sheets`, `cad_catalog`, `cad_count` | 읽기 | 열어 둔 DWG 또는 DXF에서 시트와 축척, 셀 수 있는 항목(블록, 도면층과 유형, 문자), 정확한 개수. {{ui:CAD count}} 기능이 만드는 것과 같은 방식입니다([도면에서 세기](topic:count-from-a-drawing)) |
| `cad_count_add` | 편집 | 도면에서 세고 찾은 객체마다 개수 표시를 한 단계로 추가. 다시 세면 새로 찾은 것만 추가 |
| `cad_measure` | 편집 | 도면 자체의 선, 호, 폴리선, 해치에서 선형 또는 면적 항목을 측정. {{ui:Measure drawing}} 기능 방식 그대로입니다([도면에서 측정](topic:measure-from-a-drawing)). 축척이 있는 시트에서만 가능 |
| `usd_export` | 내보내기 | 축척이 있는 시트의 측정된 연속 길이, 면적, 개수를 USD(`.usdz`, `.usda` 또는 `.usdc`) 3D 검사 모델로 내보냅니다. 3D 검사 보기의 {{ui:USD package (.usdz)}} 기능이 쓰는 방식 그대로입니다([3D 검사 보기를 USD로 내보내기](topic:usd)) |

**편집**을 선택하면 어시스턴트는 항목과 표시를 추가할 수 있습니다(호출 한 번이 실행 취소 한 단계). 이미 있는 표시는 옮기거나 바꾸거나 삭제할 수 없습니다.

TakeoffCraft 없이도 같은 수량과 견적을 볼 수 있습니다. CadCraft MCP 서버는 지정한 폴더의 `.takeoff.json` 파일을 엽니다(`takeoff_open`, `takeoff_quantities`, `takeoff_estimate`, `takeoff_export`). `cadcraft info Job.takeoff.json` 명령은 명령줄에 이를 출력합니다. 또한 DWG 또는 DXF를 시트별로 새 물량 산출로 열 수 있으며(TakeoffCraft가 축척하는 방식 그대로 도면에서 축척을 적용), 같은 `cad_*` 도구로 세기와 측정을 하고, 항목을 추가하고, 물량 산출을 저장할 수 있습니다(`takeoff_save`). `cadcraft count plan.dwg --block SHELF-18X48 --sheet K-101` 명령은 명령줄에서 개수를 셉니다.

## 문제 해결

- **어시스턴트에 TakeoffCraft 도구가 보이지 않습니다:** 이 창에서 스위치가 켜져 있는지, 그리고 Studio에서 창이 열려 있는지 확인합니다.
- **"내보내기 권한이 필요합니다":** {{ui:Assistants}} 아래에서 **내보내기**를 선택한 다음 다시 요청합니다.
- **"401" 또는 "token" 오류:** 토큰이 바뀌었습니다(Studio를 다시 시작했거나 {{ui:New token}} 항목을 사용함). 새 토큰을 어시스턴트 설정에 복사합니다.

## 함께 보기

- [AI 어시스턴트 레시피](common:assistants-recipes): 도구 호출과 함께 나오는 실제 작업 예시입니다.
