import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except Exception as e:
    print('fitz unavailable', e)
    fitz = None

try:
    from pypdf import PdfReader
except Exception as e:
    print('pypdf unavailable', e)
    PdfReader = None

for file in sys.argv[1:]:
    path = Path(file)
    print(f'===== {path} =====')
    if not path.exists():
        print('missing')
        continue

    if fitz is not None:
        try:
            doc = fitz.open(str(path))
            print('pages', len(doc))
            for i, page in enumerate(doc, 1):
                text = page.get_text()
                print(f'--- page {i} ---')
                print(text[:6000])
                print()
            continue
        except Exception as e:
            print('fitz failed', e)

    if PdfReader is not None:
        try:
            reader = PdfReader(str(path))
            print('pages', len(reader.pages))
            for i, page in enumerate(reader.pages[:3], 1):
                text = page.extract_text() or ''
                print(f'--- page {i} ---')
                print(text[:6000])
                print()
            continue
        except Exception as e:
            print('pypdf failed', e)

    print('no extractor available')
