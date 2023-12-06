import image18 from '../../../assets/image 18.png'
import image19 from '../../../assets/image 19.png'
import image20 from '../../../assets/image 20.png'
import CommunityUpdatesCard from './CommunityUpdatesCard'

const CommunityUpdates = () => {
  return (
    <div className='px-36 mb-12'>
        <div className="community flex flex-col gap-y-2 pb-12 items-center px-40">
            <h2 className="text-3xl text-center">Caring is the new marketing</h2>
            <p className="text-center text-neutralGray text-sm">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.</p>
        </div>
        <div className="community-update-cards flex justify-between">
            <CommunityUpdatesCard src={image18} text='Creating Streamlined Safeguarding Processes with OneRen'/>
            <CommunityUpdatesCard src={image19} text='What are your safeguarding responsibilities and how can you manage them?'/>
            <CommunityUpdatesCard src={image20} text='Revamping the Membership Model with Triathlon Australia'/>
        </div>
    </div>
  )
}

export default CommunityUpdates
