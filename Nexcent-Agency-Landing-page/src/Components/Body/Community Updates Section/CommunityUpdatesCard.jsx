import PropTypes from 'prop-types'


const CommunityUpdatesCard = ({ src, text }) => {
  return (
    <div className="relative">
        <div className="update-container">
            <img src={src} alt="" />
        </div>
        <div className="content rounded-md shadow-md p-4 w-2/3 absolute top-1/2 translate-y-14 left-1/2 bg-white -translate-x-1/2">
            <p className='text-neutralGray text-sm text-center font-semibold'>{text}</p>
            <div className="button flex gap-x-2 items-center justify-center">
                <span className="text-primary font-semibold">Readmore</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
                <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

CommunityUpdatesCard.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string,
}

export default CommunityUpdatesCard
