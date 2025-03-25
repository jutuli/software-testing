let morseAlphabet = [
  { letter: '1', morseCode: '.----' },
  { letter: '2', morseCode: '..---' },
  { letter: '3', morseCode: '...--' },
  { letter: '4', morseCode: '....-' },
  { letter: '5', morseCode: '.....' },
  { letter: '6', morseCode: '-....' },
  { letter: '7', morseCode: '--...' },
  { letter: '8', morseCode: '---..' },
  { letter: '9', morseCode: '----.' },
  { letter: '0', morseCode: '-----' },
  { letter: ' ', morseCode: '    ' },
  { letter: 'A', morseCode: '.-' },
  { letter: 'B', morseCode: '-...' },
  { letter: 'C', morseCode: '-.-.' },
  { letter: 'D', morseCode: '-..' },
  { letter: 'E', morseCode: '.' },
  { letter: 'F', morseCode: '..-.' },
  { letter: 'G', morseCode: '--.' },
  { letter: 'H', morseCode: '....' },
  { letter: 'I', morseCode: '..' },
  { letter: 'J', morseCode: '.---' },
  { letter: 'K', morseCode: '-.-' },
  { letter: 'L', morseCode: '.-..' },
  { letter: 'M', morseCode: '--' },
  { letter: 'N', morseCode: '-.' },
  { letter: 'O', morseCode: '---' },
  { letter: 'P', morseCode: '.--.' },
  { letter: 'Q', morseCode: '--.-' },
  { letter: 'R', morseCode: '.-.' },
  { letter: 'S', morseCode: '...' },
  { letter: 'T', morseCode: '-' },
  { letter: 'U', morseCode: '..-' },
  { letter: 'V', morseCode: '...-' },
  { letter: 'W', morseCode: '.--' },
  { letter: 'X', morseCode: '-..-' },
  { letter: 'Y', morseCode: '-.--' },
  { letter: 'Z', morseCode: '--..' },
];

// Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann.
export function translateToMorse(text: string): string | undefined {
  if (typeof text !== 'string') {
    return undefined;
  }
  // Output-Variable initialisieren
  let morseOutput: string = '';
  // Für jeden Character im Text in Großbuchstaben wird überprüft, ob es im morseAlphabet ein passendes Element gibt
  for (let i = 0; i < text.length; i++) {
    const character = text.charAt(i).toUpperCase();
    const morseMatch: string =
      morseAlphabet.find((element) => element.letter === character)
        ?.morseCode || '';
    //  das gefundene Element wird dem morseOutput hinzugefügt
    morseOutput += morseMatch + ' ';
  }
  return morseOutput;
}
