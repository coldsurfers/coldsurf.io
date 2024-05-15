import GigPosterList from './(ui)/GigPosterList'
import { posters } from './(ui)/data'

export default function Home() {
  return <GigPosterList posters={posters} />
}
