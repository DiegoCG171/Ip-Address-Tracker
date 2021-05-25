
import mapboxgl, { Map } from 'mapbox-gl';
import { FormEvent, useEffect, useRef, useState } from 'react';
import validator from 'validator';

import { useForm } from '../hooks/useForm'
import { ArrorIcon } from '../components/ArrorIcon';
import { getGeolocation } from '../helpers/getGeolocation';

mapboxgl.accessToken = 'pk.eyJ1IjoibnltZGllZ28iLCJhIjoiY2twMjg1OTRuMDFvczJyazE5cm1pYXBycSJ9.H6XgcK8xxFhvL0WJZtTTHQ';

const ipDataInitial = {
    ip: '',
    city: '',
    country: '',
    postalCode: '',
    timeZone: '',
    isp: ''
}

export const IpTrackerPage = () => {

    const { form, handleChange } = useForm({
        ip: ''
    });

    const mapContainer = useRef<HTMLDivElement>(null);
    const [, setMapState] = useState<Map>();

    const [initialPoint, setInitialPoint] = useState({
        lng: -122.078514,
        lat: 37.40599,
        zoom: 15
    });

    const [ipData, setIpData] = useState(ipDataInitial);


    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [initialPoint.lng, initialPoint.lat],
            zoom: initialPoint.zoom
        });
        const marker = new mapboxgl.Marker();

        marker.setLngLat([initialPoint.lng, initialPoint.lat]).addTo(map);
        setMapState(map);
    }, [initialPoint]);

    useEffect(() => {
        getGeolocation('')
                .then(data => {
                    setInitialPoint( d => ({
                        ...d,
                        lng: data.lng,
                        lat: data.lat
                    }));

                    setIpData({
                        ip: data.ip,
                        city: data.city,
                        country: data.country,
                        isp: data.isp,
                        postalCode: data.postalCode,
                        timeZone: data.timeZone
                    })
                })
    },[])


    const handleSubmit = (ev: FormEvent<HTMLButtonElement>) => {
        ev.preventDefault();

        if (validator.isIP(form.ip)) {
            getGeolocation(form.ip)
                .then(data => {
                    setInitialPoint({
                        ...initialPoint,
                        lng: data.lng,
                        lat: data.lat
                    });

                    setIpData({
                        ip: data.ip,
                        city: data.city,
                        country: data.country,
                        isp: data.isp,
                        postalCode: data.postalCode,
                        timeZone: data.timeZone
                    })
                })
        }

        setIpData(ipDataInitial);

    }


    return (
        <main>
            <div className='banner'>
                <h1 className='banner__title' >IP Address Tracker</h1>
                <form className='banner__form' >
                    <input
                        className='banner__input'
                        placeholder='Search for any IP address or domain '
                        type="text"
                        name='ip'
                        value={form.ip}
                        onChange={handleChange}
                    />
                    <button className='banner__button' onClick={handleSubmit} type='submit'>
                        <ArrorIcon />
                    </button>
                </form>
                {
                    ipData.ip !== '' &&
                    <ul className='banner__data-container' >
                        <li className='banner__data-item' >
                            <span className='data-item__title'>IP ADDRESS</span>
                            <p className='data-item__data' >{ipData.ip}</p>
                        </li>
                        <li className='banner__data-item' >
                            <span className='data-item__title'>LOCATION</span>
                            <p className='data-item__data' >{ipData.city}, {ipData.country} {ipData.postalCode}</p>
                        </li>
                        <li className='banner__data-item' >
                            <span className='data-item__title'>TIMEZONE</span>
                            <p className='data-item__data' >UTC{ipData.timeZone}</p>
                        </li>
                        <li className='banner__data-item' >
                            <span className='data-item__title'>ISP</span>
                            <p className='data-item__data' >{ipData.isp}</p>
                        </li>
                    </ul>
                }
            </div>
            <div
                id='map'
                ref={mapContainer}
                className='map'
            />
        </main>
    )
}
