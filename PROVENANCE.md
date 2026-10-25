# Where TakeoffCraft's code comes from

TakeoffCraft is our own code, under the Apache License 2.0. We do not copy code from other projects. Where one of our files
follows another project's published algorithm closely, its SPDX line names both licenses and THIRD_PARTY.md credits
it. The libraries TakeoffCraft uses are listed, with their licenses, in THIRD_PARTY.md; all of them are permissive.

## How copyleft tools are used

Some programs under the GPL, LGPL or MPL are useful references: they read the same file formats. We use them **only
as black boxes in our tests**: we run them on files and compare what they report with what our code reads or
writes. They are never shipped in this repository or in any edition, never linked into the app, and their source
code is never read or copied. When the specification is wrong or silent, the answer is found by experiment on real
files and written down in a comment ("Spec gap: …").

## Our engines

### DWG (cc-dwg, `dwg/`)

Our own DWG reader, written clean-room from the Open Design Alliance's published *Open Design Specification for .dwg files*,
version 5.4.1. The files that decode or encode the format name the chapters they follow. Test oracles, run as programs only: LibreDWG's `dwgread` and
`dwg2dxf` (GPL-3.0), libdxfrw's `dwg2dxf` (GPL-2.0), the ODA File Converter, and ezdxf (MIT) to read their DXF output. Comments
that name one of them record what it reported when it read a file, nothing more.

### DXF

Read and written by our own code from Autodesk's published DXF reference (group codes). ezdxf (MIT) checks our
files in the tests.

### 3D kernel (`m3d/`)

ModelCraft's own geometry kernel, shared as an identical copy by the apps that have a 3D view.
