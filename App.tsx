import { Home } from './src/screens/Home';
import { QueryClient , QueryClientProvider} from "@tanstack/react-query";



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 20000,
      onError: alert,
      retry: false,
      initialDataUpdatedAt: 0,
    },
  },
});

export default function App() {  
  return (
    <QueryClientProvider client={queryClient}>
      <Home/>
    </QueryClientProvider>
  );
}
