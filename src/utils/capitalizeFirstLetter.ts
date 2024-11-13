export default function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase();
}
