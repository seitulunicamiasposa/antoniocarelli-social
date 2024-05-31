import { createContext } from 'react'
import {Post} from '../types/commontypes';

export interface IAppContext {
    jsonTweet: Post[] | undefined;
    setJsonTweet: (args: Post[]) => void
}

export const AppContext = createContext<IAppContext | null>(null);
