export function eee(text) {
  return text.replaceAll(/[аеиоуыэюя]/g, "ё").replaceAll(/[АЕИОУЫЭЮЯ]/g, "Ё");
}

