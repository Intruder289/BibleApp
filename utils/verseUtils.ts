import genesisData from '../data/genesis.json';

interface Verse {
  text: string;
  reference: string;
}

export function getRandomVerse(): Verse {
  // Get all chapters
  const chapters = genesisData.Genesis;
  const chapterNumbers = Object.keys(chapters);
  
  // Get a random chapter
  const randomChapterNum = chapterNumbers[Math.floor(Math.random() * chapterNumbers.length)];
  const chapter = chapters[randomChapterNum];
  
  // Get all verses from the chapter
  const verseNumbers = Object.keys(chapter.verses);
  const randomVerseNum = verseNumbers[Math.floor(Math.random() * verseNumbers.length)];
  
  return {
    text: chapter.verses[randomVerseNum],
    reference: `Mwanzo ${randomChapterNum}:${randomVerseNum}`
  };
}
