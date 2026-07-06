import re
from pathlib import Path
raw = Path(r"c:\Users\Owner\Downloads\index (2).html").read_text(encoding="utf-8")
css = re.search(r"(?s)<style>(.*?)</style>", raw).group(1).strip()
html = re.sub(r"(?s)<style>.*?</style>", '<link rel="stylesheet" href="css/styles.css">', raw)
html = re.sub(r"(?s)<script>\s*// --- Gallery filter tabs ---.*?</script>", '<script src="js/main.js"></script>', html)
Path(r"c:\Users\Owner\midlands-bedrooms-kitchens\index.html").write_text(html, encoding="utf-8", newline="\n")
Path(r"c:\Users\Owner\midlands-bedrooms-kitchens\css\styles.css").write_text(css, encoding="utf-8", newline="\n")
print("ok")
