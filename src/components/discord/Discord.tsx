
import axios from 'axios';
import { useEffect, useState } from 'react'
import './Discord.scss'

type ResponseType = {
    tag: string;
    status: string;
    image: string,
    activity_name: string;
    activity_state: string;
}

function Discord() {

    const [data, setData] = useState<ResponseType>()

    useEffect(() => {
        (async () => {
            const response = await fetch('https://discord-api.rebbo.cloud/discordPresence')
            const data = await response.json();

            setData(data);

        })();
    }, [])

    const statusColor = [
        { status: 'online', color: '#43b581' },
        { status: 'idle', color: '#faa61a' },
        { status: 'dnd', color: '#f04747' },
        { status: 'offline', color: '#b4b4b4' }
    ]

    return (
        <div className='discord-status'>
            <p className='discord-section-text'>DISCORD PROFILE</p>
            <div className='discord-status-box'>
                <div className='status-image'>
                    <img src={data?.image} alt="rebbo.png" />
                    <div style={{ backgroundColor: statusColor.find(x => x.status === data?.status)?.color }}>
                    </div>
                </div>
                <div className='status-text'>
                    <p className='status-tag'>{data?.tag}</p>
                    <p className='activity-text'>Playing {data?.activity_name}</p>
                    <p className='activity-text'>{data?.activity_state}</p>
                </div>
            </div>
        </div>
    )
}

export default Discord