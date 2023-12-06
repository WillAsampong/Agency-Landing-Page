import icon7 from '../../../assets/icon7.png'
import icon8 from '../../../assets/icon8.png'

const Achievements = () => {
  return (
    <div className="flex px-36 py-16 gap-x-10 bg-[#F5F7FA] justify-between mb-12">
        <div className="section-heading flex flex-col gap-y-2">
            <h2 className="text-3xl font-medium leading-snug">Helping a local <br /> <span className="text-primary">business reinvent itself</span></h2>
            <p className="text-sm">We reached here with our hard work and dedication</p>
        </div>
        <div className="counts flex flex-col basis-1/2 gap-6 p-4">
            <div className="row-1 flex justify-around">
                <div className="members flex gap-x-2">
                    <div className="icon">
                        <img src={icon8} alt="" />
                    </div>
                    <div className="number-label">
                        <span className="text-2xl">2,245,341</span>
                        <p className="text-neutralGray text-sm">Members</p>
                    </div>
                </div>
                <div className="clubs flex gap-x-2">
                    <div className="icon">
                        <img src={icon7} alt="" />
                    </div>
                    <div className="number-label">
                        <span className="text-2xl">46,328</span>
                        <p className="text-neutralGray text-sm">Clubs</p>
                    </div>
                </div>
            </div>
            <div className="rows-2 flex justify-around">
                <div className="event-bookings flex gap-x-2">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H30C29.4696 30 28.9609 29.7893 28.5858 29.4142C28.2107 29.0391 28 28.5304 28 28V18C28 16.9391 27.5786 15.9217 26.8284 15.1716C26.0783 14.4214 25.0609 14 24 14C22.9391 14 21.9217 14.4214 21.1716 15.1716C20.4214 15.9217 20 16.9391 20 18V36L15.2 29.6C14.8274 29.1032 14.3443 28.7 13.7889 28.4223C13.2334 28.1446 12.621 28 12 28H11.132C9.402 28 8 29.402 8 31.132C8 31.7 8.154 32.258 8.446 32.744L14 42M24 8V6V8ZM36 20H38H36ZM10 20H12H10ZM14.686 10.686L13.272 9.272L14.686 10.686ZM33.314 10.686L34.728 9.272L33.314 10.686Z" fill="#4CAF4F"/>
                        <path d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H30C29.4696 30 28.9609 29.7893 28.5858 29.4142C28.2107 29.0391 28 28.5304 28 28V18C28 16.9391 27.5786 15.9217 26.8284 15.1716C26.0783 14.4214 25.0609 14 24 14V14C22.9391 14 21.9217 14.4214 21.1716 15.1716C20.4214 15.9217 20 16.9391 20 18V36L15.2 29.6C14.8274 29.1032 14.3443 28.7 13.7889 28.4223C13.2334 28.1446 12.621 28 12 28H11.132C9.402 28 8 29.402 8 31.132C8 31.7 8.154 32.258 8.446 32.744L14 42M24 8V6M36 20H38M10 20H12M14.686 10.686L13.272 9.272M33.314 10.686L34.728 9.272" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="number-label">
                        <span className="text-2xl">828,867</span>
                        <p className="text-neutralGray">Event Bookings</p>
                    </div>
                </div>
                <div className="payments flex gap-x-2">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M5.5 16.5V17H6H42H42.5V16.5V14.25C42.5 13.1228 42.0522 12.0418 41.2552 11.2448C40.4582 10.4478 39.3772 10 38.25 10H9.75C8.62283 10 7.54183 10.4478 6.7448 11.2448C5.94777 12.0418 5.5 13.1228 5.5 14.25V16.5ZM42.5 19.5V19H42H6H5.5V19.5V33.75C5.5 34.8772 5.94777 35.9582 6.7448 36.7552C7.54183 37.5522 8.62283 38 9.75 38H38.25C39.3772 38 40.4582 37.5522 41.2552 36.7552C42.0522 35.9582 42.5 34.8772 42.5 33.75V19.5ZM3.5 14.25C3.5 12.5924 4.15848 11.0027 5.33058 9.83058C6.50268 8.65848 8.0924 8 9.75 8H38.25C39.9076 8 41.4973 8.65848 42.6694 9.83058C43.8415 11.0027 44.5 12.5924 44.5 14.25V33.75C44.5 35.4076 43.8415 36.9973 42.6694 38.1694C41.4973 39.3415 39.9076 40 38.25 40H9.75C8.0924 40 6.50268 39.3415 5.33058 38.1694C4.15848 36.9973 3.5 35.4076 3.5 33.75V14.25ZM31.5 29H36C36.2652 29 36.5196 29.1054 36.7071 29.2929C36.8946 29.4804 37 29.7348 37 30C37 30.2652 36.8946 30.5196 36.7071 30.7071C36.5196 30.8946 36.2652 31 36 31H31.5C31.2348 31 30.9804 30.8946 30.7929 30.7071C30.6054 30.5196 30.5 30.2652 30.5 30C30.5 29.7348 30.6054 29.4804 30.7929 29.2929C30.9804 29.1054 31.2348 29 31.5 29Z" fill="#4CAF4F" stroke="#4CAF4F"/>
                        </svg>
                    </div>
                    <div className="number-label">
                        <span className="text-2xl">1,926,436</span>
                        <p className="text-neutralGray text-sm">Payments</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements
