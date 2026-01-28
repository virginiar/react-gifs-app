import { GiftList } from "./gifs/components/GiftList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" />

      {/* Búsquedas previas */}
      <PreviousSearches searches={["Goku", "Dragon Ball Z"]} />

      {/* Gifs */}
      <GiftList gifs={mockGifs} />
    </>
  );
};
