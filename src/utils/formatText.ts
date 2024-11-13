export default function formatText(text: string | undefined) {
  switch (text) {
    case 'rwd':
      return 'Rear Wheel Drive';
    case '4wd':
      return 'All Wheel Drive';
    case 'awd':
      return 'All Wheel Drive';
    case 'fwd':
      return 'Front Wheel Drive';
    case 'a':
      return 'Automatic';
    case 'm':
      return 'Manual';
    default:
      return undefined;
  }
}
