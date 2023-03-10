export function isPositiveInteger(n: any) {
  return n >>> 0 === parseFloat(n);
}

export function buildTitle(text: string) {
  return text + ' | NetHub';
}

export function capitalizeFirstLetter(str?: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getDomain = (link: string | null) => {
  if (link === null) return undefined;

  const url = new URL(link);
  const domain = url.hostname.replace('www.', '');
  return domain;
};

/* eslint-disable prettier/prettier */
/* eslint-disable */
const sanEmojis = [
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ðĢ',
  'ð',
  'ð',
  'ðŦ',
  'ðĐ',
  'ðĨš',
  'ðĒ',
  'ð­',
  'ðģ',
  'ðĨķ',
  'ðĨĩ',
  'ðą',
  'ðĻ',
  'ð°',
  'ðĨ',
  'ð',
  'ðĪĨ',
  'ðķ',
  'ðŽ',
  'ð',
  'ðĶ',
  'ð§',
  'ðŪ',
  'ðē',
  'ðĪ',
  'ðĪ',
  'ð',
  'â ïļ',
  'ð',
  'ðŋ',
  'ð',
  'ðŪ',
  'ðĪ·',
  'ð·',
  'ðŪ',
  'ð',
  'ð',
  'ð',
  'ðĶ§',
  'ðĶ',
  'ð',
  'ð',
  'ð§',
  'ðĻ',
  'ðŋ',
  'âĒïļ',
  'âĢïļ',
  'ð',
  'ð·',
  'ðĩ',
  'ð',
  'ð­',
  'ð§',
  'ðĪŠ',
];

export function randomSadEmoji(): string {
  return sanEmojis[getRandomInt(0, sanEmojis.length)];
}
