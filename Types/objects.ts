function printName(person: { first: string; last: string }) {}

printName({ first: "woody", last: "lucas" });

interface Credits {
  producer: string;
  writer: string;
}

type SongType = {
  title: string;
  artist: string;
  numStreams: number;
  credits: Credits;
};
function calculatePayout(): SongType {
  return {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12973321,
    credits: {
      producer: "Phil Spector",
      writer: "Alex North",
    },
  };
}
