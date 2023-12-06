import CommunityCard from "./CommunityCard"
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'


const Community = () => {
  return (
    <section className="flex flex-col items-center mb-24 px-36">
        <div className="community">
            <h2 className="text-center text-3xl font-medium ">Manage your entire community in a single system</h2>
            <p className="text-gray-500 text-center">Who is Nexcent suitable for?</p>
        </div>
        <div className="flex mt-14 gap-x-4">
            <CommunityCard src={icon1} title='Membership Organisations' desc='Our membership management software provides full automation of membership renewals and payments'/>
            <CommunityCard src={icon2} title='National Associations' desc='Our membership management software provides full automation of membership renewals and payments'/>
            <CommunityCard src={icon3} title='Clubs And Groups' desc='Our membership management software provides full automation of membership renewals and payments'/>
        </div>
    </section>
  )
}

export default Community
