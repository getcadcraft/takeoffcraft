---
title: Abrir um desenho DWG ou DXF
summary: Abra um ficheiro de desenho como folhas (espaço modelo e cada layout), comece com a escala que o desenho indica, mostre ou oculte as suas camadas e traga os desenhos referenciados.
keywords: dwg, dxf, cad, desenho, abrir um desenho, layouts, espaço modelo, espaço papel, folhas, unidades, insunits, escala do viewport, xref, desenho referenciado, camadas, congelada, sem pdf, imprimir, sem imprimir
from: d8c3f504
---

O TakeoffCraft abre um desenho DWG ou DXF da mesma forma que abre um PDF: não é preciso imprimi-lo antes para PDF. A contagem feita a partir do próprio desenho é exata, porque o desenho sabe o que é cada objeto. Ver [Contar a partir de um desenho](topic:count-from-a-drawing).

## Abrir o desenho

1. Escolha {{ui:Abrir plantas}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}.
2. Selecione o ficheiro DWG ou DXF. Pode selecionar vários, e PDF juntamente com eles.
3. Escolha Abrir.

Também pode largar ficheiros de desenho no TakeoffCraft, como os PDF. Nada é enviado: o navegador lê o ficheiro no seu computador.

O TakeoffCraft lê DWG desde o AutoCAD 2000 até ao 2018 e DXF ASCII desde o R12 até ao 2018. Recusa um DXF binário (guarde-o como ASCII, ou como DWG) e um ficheiro que não seja nenhum dos dois, e diz porquê. Um ficheiro danificado abre com o que foi possível ler, e uma mensagem indica-o; as suas contagens podem estar incompletas.

## Folhas

- **Modelo** é o espaço modelo do desenho.
- **Cada layout** (separador do espaço papel) é uma folha, com o nome do seu separador, pela ordem dos separadores. Um layout mostra o modelo através dos seus viewports, tal como seria impresso.

O zoom, deslocar a vista, o snap aos próprios traços do desenho, as marcas, as notas, {{ui:Calibrar}} e o resto funcionam como num PDF. As folhas de um desenho são guardadas na medição pelo nome do ficheiro e por uma impressão digital do seu conteúdo, como um PDF: abra novamente o mesmo ficheiro e as marcas estão nas suas folhas.

## A escala

Uma folha começa com a escala que o desenho indica:

- **Um layout** toma a escala do seu maior viewport. Uma escala como 1/2" = 1'-0" é indicada pela predefinição a que corresponde; qualquer outra é apresentada como "Do viewport do desenho: 1" = 2.5'". Se um layout tiver viewports noutras escalas, a maior define a escala da folha: verifique as outras com {{ui:Verificar}}.
- **Modelo** toma as unidades do desenho (polegadas, milímetros, pés…) como escala, "Unidades do desenho (polegadas)".
- **Um desenho sem unidades** (o desenho nunca indicou se uma unidade é uma polegada ou um milímetro) não tem escala: a folha diz "Sem escala", e medir nela é recusado, como num PDF sem escala. Contar não precisa de escala. Dê-lhe uma com {{ui:Calibrar}}.

{{ui:Calibrar}}, {{ui:Verificar}} e a lista {{ui:Predefinida}} alteram a escala a qualquer momento e têm prioridade sobre a do desenho. A lista de predefinições está desativada em Modelo, que não tem formato de papel.

## Camadas

{{ui:Camadas}} na barra da folha lista as camadas do desenho com o número de objetos que cada uma tem nesta folha. As camadas que o ficheiro desligou ou congelou começam ocultas. Desmarque uma camada para a ocultar, ou marque uma oculta para a mostrar: a folha volta a desenhar-se, e o que estiver oculto fica de fora das contagens e dos objetos oferecidos a {{ui:Medir desenho}}, a menos que peça para contar também as camadas ocultas. {{ui:Mostrar todas}} mostra todas as camadas; {{ui:Voltar às camadas do ficheiro}} desfaz as suas alterações. As escolhas de camadas pertencem a esta sessão, não ao ficheiro da medição.

## Desenhos referenciados (xrefs)

Um desenho que referencia outros desenhos mostra-os onde estão inseridos. O TakeoffCraft encontra um desenho referenciado entre os **ficheiros abertos**, pelo nome do ficheiro: abra o desenho principal e o desenho referenciado em conjunto (ou um a seguir ao outro). Até lá, a barra de estado indica quantos desenhos referenciados não foram encontrados, e que o que desenhavam fica em falta; as contagens assinalam-no.

## Limites

- Os objetos que o TakeoffCraft não consegue ler ou colocar (objetos proxy, classes desconhecidas) são listados na janela de contagem por tipo; nunca são descartados sem aviso.
- Os desenhos muito grandes são desenhados em parte, e as contagens param num limite, indicando-o. Abra antes uma impressão PDF deste desenho.
- Um desenho é desenhado a preto e nas suas próprias cores, escurecidas para papel branco. As tabelas de estilos de impressão e as atribuições de canetas não se aplicam.
