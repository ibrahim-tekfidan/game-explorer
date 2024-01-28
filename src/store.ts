import { create } from 'zustand';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGameQuery: () => void;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (ordering: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setGameQuery: () => set(store => ({ gameQuery: {} })),
  setSearchText: searchText =>
    set(store => ({ gameQuery: { ...store.gameQuery, search: searchText } })),
  setGenreId: genreId =>
    set(store => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: platformId =>
    set(store => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: ordering =>
    set(store => ({ gameQuery: { ...store.gameQuery, ordering } })),
}));

export default useGameQueryStore;
