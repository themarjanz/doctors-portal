import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Sarvice from './Sarvice';


const AvailableAppointment = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://ancient-peak-16242.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>  Available Appointsment on {format(date, 'PP')}</h4>
            <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Sarvice
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Sarvice>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;