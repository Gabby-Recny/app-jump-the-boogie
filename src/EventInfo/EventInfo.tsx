import React, { useState } from "react";
import './EventInfo.css';
import eventImage from '../images/eventInfoImage.svg';
import organizerImage from '../images/organizer.svg'

const EventInfo = () => {
    const [ tags, setTags ] = useState(["Lorem", "Ipsum", "Bananas", "Brendan", "Glasses", "Plants", "Moon"]);

      const renderTags = () => {
        return tags.map((tag, i) => {
            return (
                <p className="tags">{tag}</p>
            )
        })

      }
    return (
        <>
        <img src={eventImage} alt='Woman dancing at an outdoor music festival' className="event-img"/>
        <section className="event-info-container">
            <h2>Event Info</h2>
            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
            <div className="organizer-info">
                <img src={organizerImage} alt='Cafe'/>
                <p>Organizer information</p>
            </div>
            <section className="location-date-info-container">
                <div>
                    <h3>Date & Time</h3>
                    <p>5 September, 2013 10:34 AM</p>
                </div>
                <div>
                    <h3>Location</h3>
                    <p>3859 Hello There Court Milwaukee, MI 23493245</p>
                </div>
            </section>
            <section>
                <h3>About Event</h3>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
                <table>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
                <h3>Tags</h3>
                <div className="tag-container">
                    {renderTags()}
                </div>
            </section>
        </section>
        </>
    )
}

export { EventInfo }