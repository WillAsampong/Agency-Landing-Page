import Achievements from "./Achievements Section/Achievements"
import Calender from "./Calender/Calender"
import CommunityUpdates from "./Community Updates Section/CommunityUpdates"
import Customers from "./Customers Section/Customers"
import Unlock from "./Unlock Section/Unlock"


const Body = () => {
  return (
    <section>
        <Unlock />
        <Achievements />
        <Calender />
        <Customers />
        <CommunityUpdates />
    </section>
  )
}

export default Body
