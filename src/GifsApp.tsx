import { GiftList } from "./gifs/components/GiftList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GiftList gifs={gifs} />
    </>
  );
};
