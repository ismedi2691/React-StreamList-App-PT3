import React, { useState } from 'react';
import './EventList.css'; // Import CSS for styling

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            if (editIndex !== null) {
                // Update event
                const updatedEvents = events.map((event, index) =>
                    index === editIndex ? input : event
                );
                setEvents(updatedEvents);
                setEditIndex(null);
            } else {
                // Add new event
                setEvents([...events, input]);
            }
            setInput('');
        }
    };

    const handleEdit = (index) => {
        setInput(events[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
    };

    const handleComplete = (index) => {
        const updatedEvents = events.map((event, i) =>
            i === index ? `${event} (Completed)` : event
        );
        setEvents(updatedEvents);
    };

    return (
        <div>
            <h1>Your Events</h1>
            <form onSubmit={handleSubmit} className="event-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter event"
                    required
                />
                <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
            </form>

            <ul className="event-list">
                {events.map((event, index) => (
                    <li key={index} className="event-item">
                        <span className={event.includes('(Completed)') ? 'completed' : ''}>
                            {event}
                        </span>
                        <div className="event-buttons">
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleComplete(index)}>
                                {event.includes('(Completed)') ? 'Undo' : 'Complete'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;