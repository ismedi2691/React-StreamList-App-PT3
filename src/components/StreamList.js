import React, { useState } from 'react';
import './StreamList.css'; // Import CSS for styling

const StreamList = ({ onAddMovie, onAddToCart }) => {
   
    const [streamList, setStreamList] = useState([
        { id: 1, img: 'https://m.media-amazon.com/images/I/41Ix1vMUK7L._h1_.png', alt: 'Netflix' },
        { id: 2, img: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc', alt: 'YouTubeTV' },
        { id: 3, img: 'https://play-lh.googleusercontent.com/1XBAZjSOWaVM7UDFKvzuMR-WRoR5gCnsYrw17_ihHLcJKT9Qc7hXptHwWQ3Bf83mry4=w240-h480-rw', alt: 'AppleTV+' },
        { id: 4, img: 'https://downloadr2.apkmirror.com/wp-content/uploads/2020/07/78/5f0f12ace90fc.png', alt: 'Peacock' },
        { id: 5, img: 'https://play-lh.googleusercontent.com/5wVn4qP4EIQV4BU2nzx2oDGeyDFU3Id2zlchCDNpqEGzyZssojerAql5ybq5RS59Ve0y', alt: 'Disney+' },
        { id: 6, img: 'https://play-lh.googleusercontent.com/lH3MWp-oZRi39j_XcWqKOtnv7fyLNmH35agp_pR-TdjQLkuEP77HK5_yI9KwKIKI4U01', alt: 'Hulu' },
        { id: 7, img: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8', alt: 'HBO Max' },
        { id: 8, img: 'https://store-images.s-microsoft.com/image/apps.49860.14618985536919905.3e754390-a812-43d7-87fc-335159cd867b.9f1b702c-2a8b-4fdc-b65b-8a6c4e49b55f', alt: 'Prime Video' },
        { id: 9, img: 'https://play-lh.googleusercontent.com/oi4GE8ulxHp4Y2xVzKu_WAMrgE4Jj4Kbdd7hAWLeoZTsMtC5bYTd2xcYhlvMk69pTFY', alt: 'Paramount+' },
    ]);
    const [selectedEvent] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [draggedItem, setDraggedItem] = useState(null);


    const handleDragStart = (index) => {
        setDraggedItem(index);
    };

    const handleDrop = (index) => {
        const updatedList = [...streamList];
        const [removed] = updatedList.splice(draggedItem, 1);
        updatedList.splice(index, 0, removed);
        setStreamList(updatedList);
        setDraggedItem(null);
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    /*Drag an Drop (edit) button*/
    return (

        <div className="streamlist-container"> 
            <h1>Your Streaming List</h1>
           {selectedEvent && <div className="event-message">{selectedEvent}</div>}

            <div className="live-stream-grid">
                {streamList.map((item, index) => (
                    <div
                        key={item.id}
                        className="stream-item-card"
                        draggable={isEditing}
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleDrop(index)}
                    >
                        <img src={item.img} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StreamList;