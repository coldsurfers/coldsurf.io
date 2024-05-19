import EventList from './(ui)/EventList'
import { posters } from './(ui)/data'

export default function Home() {
  return <EventList posters={posters} />
}
