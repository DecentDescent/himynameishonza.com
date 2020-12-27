export function dateFormater(date) {
  const d = new Date(date);
  return d.getDate();
}

export function monthFormater(date, type) {
  const month = new Array(
    "Ledna",
    "Února",
    "Března",
    "Dubna",
    "Května",
    "Června",
    "Července",
    "Srpna",
    "Září",
    "Října",
    "Listopadu",
    "Prosince"
  );

  const shortMonth = new Array(
    "Led",
    "Úno",
    "Bře",
    "Dub",
    "Kvě",
    "Čer",
    "Čvc",
    "Srp",
    "Zář",
    "Říj",
    "List",
    "Pro"
  );

  const d = new Date(date);
  const yearString = d.getFullYear().toString();
  return type === "short"
    ? shortMonth[d.getMonth()] + " " + yearString.slice(2)
    : month[d.getMonth()] + " " + yearString;
}

export function readingTime(data) {
  let wordCount = 0;
  let humanTime;
  let finalTime;

  data.forEach(function (block) {
    block.children.forEach(function (paragraphs) {
      wordCount = wordCount + paragraphs.text.split(" ").length;
    });
  });
  humanTime = Math.round(wordCount / 150);

  if (humanTime < 2) {
    finalTime = "Čtení na minutu";
  }

  if (humanTime > 1 && humanTime < 5) {
    finalTime = "Čtení na " + humanTime + " minuty";
  }

  if (humanTime > 4) {
    finalTime = "Čtení na " + humanTime + " minut";
  }

  return finalTime;
}
