import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { GetPopularMovies } from '../movie';

interface QueryProps {
  children: React.ReactNode;
}
type QueryContextValue = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
const QueryCtxdeafultvalue: QueryContextValue = {
  query: 'naruto',
  setQuery: (state) => {},
};
export const QueryCtx = createContext(QueryCtxdeafultvalue);
export default function QueryCtxProvider({ children }: QueryProps) {
  const [query, setQuery] = useState(QueryCtxdeafultvalue.query);
  useCallback(() => {
    console.log(query);
  }, [query]);
  return (
    <>
      <QueryCtx.Provider value={{ query, setQuery }}>
        {children}
      </QueryCtx.Provider>
    </>
  );
}
