import PropTypes from 'prop-types'


const CommunityCard = ({ src, title, desc }) => {
  return (
    <div className='flex flex-col items-center gap-y-4 py-4 px-10 rounded-md shadow-md'>
        <div className="card-icon">
            <img src={src} alt="" />
        </div>
        <h3 className='text-2xl font-medium text-center'>{title}</h3>
        <p className="desc text-center text-sm text-neutralGray leading-snug">{desc}</p>
    </div>
  )
}

CommunityCard.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default CommunityCard
