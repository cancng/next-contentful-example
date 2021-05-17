export default function getReadingTime(
  text: string,
  wpm: number = 200
): string {
  const splitted = text.split(' ').length || 0;
  return Math.ceil(splitted / wpm).toFixed();
}
