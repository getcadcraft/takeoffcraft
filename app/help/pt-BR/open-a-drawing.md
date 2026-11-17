---
title: Abrir um desenho DWG ou DXF
summary: Abra um arquivo de desenho como folhas (espaço modelo e cada layout), comece com a escala que o desenho informa, mostre ou oculte suas camadas e traga desenhos vinculados.
keywords: dwg, dxf, cad, desenho, abrir um desenho, layouts, espaço modelo, espaço papel, folhas, unidades, insunits, escala da viewport, xref, desenho vinculado, camadas, congeladas, sem pdf, plotar, sem plotar
from: d8c3f504
---

TakeoffCraft abre um desenho DWG ou DXF como abre um PDF: você não precisa plotá-lo em PDF antes. A contagem feita a partir do próprio desenho é exata, porque o desenho sabe o que é cada objeto. Veja [Contar a partir de um desenho](topic:count-from-a-drawing).

## Abrir o desenho

1. Escolha {{ui:Open plans}} no grupo {{ui:File}}, ou pressione {{key:Mod+O}}.
2. Selecione o arquivo DWG ou DXF. Você pode selecionar vários, e PDFs junto com eles.
3. Escolha Abrir.

Você também pode soltar arquivos de desenho no TakeoffCraft, como PDFs. Nada é enviado: o navegador lê o arquivo no seu computador.

O TakeoffCraft lê DWG do AutoCAD 2000 a 2018 e DXF ASCII do R12 a 2018. Ele recusa um DXF binário (salve como ASCII, ou como DWG) e um arquivo que não seja nenhum dos dois, e informa o motivo. Um arquivo danificado abre com o que pôde ser lido, e uma mensagem avisa isso; suas contagens podem estar incompletas.

## Folhas

- **Model** é o espaço modelo do desenho. (Modelo)
- **Cada layout** (guia de espaço papel) é uma folha, nomeada pela sua guia, na ordem das guias. Um layout mostra o modelo por meio das suas viewports, como é plotado.

Zoom, pan, snap nas próprias linhas do desenho, marcas, notas, {{ui:Calibrate}} e o restante funcionam como em um PDF. As folhas de um desenho são salvas no levantamento pelo nome do arquivo e por uma impressão digital do conteúdo, como um PDF: abra o mesmo arquivo de novo e as marcas estarão nas suas folhas.

## A escala

Uma folha começa com a escala que o desenho informa:

- **Um layout** adota a escala da sua maior viewport. Uma escala como 1/2" = 1'-0" recebe o nome da predefinida correspondente; qualquer outra aparece como "Da viewport do desenho: 1" = 2.5'". Se um layout tiver viewports em outras escalas, a maior define a escala da folha: confira as outras com {{ui:Check}}.
- **Modelo** adota as unidades do desenho (polegadas, milímetros, pés…) como escala: "Unidades do desenho (polegadas)".
- **Um desenho sem unidades** (o desenho nunca informou se uma unidade é polegada ou milímetro) não tem escala: a folha mostra "Sem escala", e medir nela é recusado, como em um PDF sem escala. A contagem não precisa de escala. Defina uma com {{ui:Calibrate}}.

{{ui:Calibrate}}, {{ui:Check}} e a lista {{ui:Preset}} alteram a escala a qualquer momento e prevalecem sobre a do desenho. A lista de predefinidas fica desativada em Modelo, que não tem tamanho de papel.

## Camadas

{{ui:Layers}} na barra da folha lista as camadas do desenho com quantos objetos cada uma tem nesta folha. Camadas que o arquivo desligou ou congelou começam ocultas. Desmarque uma camada para ocultá-la, ou marque uma oculta para exibi-la: a folha é desenhada de novo, e o que está oculto fica fora das contagens e dos objetos oferecidos a {{ui:Measure drawing}}, a menos que você peça para contar também as camadas ocultas. {{ui:Show all}} mostra todas as camadas; {{ui:Back to the file's layers}} desfaz suas alterações. As escolhas de camadas pertencem a esta sessão, não ao arquivo do levantamento.

## Desenhos vinculados (xrefs)

Um desenho que vincula outros desenhos os mostra onde estão inseridos. O TakeoffCraft encontra um desenho vinculado entre os **arquivos abertos**, pelo nome do arquivo: abra o desenho principal e o vinculado juntos (ou um após o outro). Até lá, a barra de status informa quantos desenhos vinculados não foram encontrados, o que eles desenham está ausente, e as contagens indicam isso.

## Limites

- Objetos que o TakeoffCraft não consegue ler ou posicionar (objetos proxy, classes desconhecidas) são listados na janela de contagem por tipo; nunca são descartados sem aviso.
- Desenhos muito grandes são desenhados em partes, e as contagens param em um limite, com aviso. Abra um PDF plotado desse desenho.
- Um desenho é desenhado em preto e em suas próprias cores, escurecidas para papel branco. Tabelas de estilo de plotagem e atribuições de caneta não são aplicadas.
