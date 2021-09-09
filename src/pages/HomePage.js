import React, {useState, useEffect} from 'react'
import "../css/grids.css"
import "../css/utilities.css"

import Slider from '../components/Slider'
import axios from 'axios';
import CompanyButton from '../components/CompanyButton'
import {useHistory} from 'react-router-dom';


export default function HomePage() {

    const [bannerDetails, setBannerDetails] = useState([{Title:"", Subtitle:"", ImageUrl:""}])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true)
        fetchBannerDetails()
        setIsLoading(false)
    },[])

    async function fetchBannerDetails(){
        await axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
          .then(response => (setBannerDetails(response.data.Details)))
          .catch(function (error) {
            if (error.response) {
                setIsError(true);}})
    }

    function navigateContactUs(){
        history.push("/contact-us")
    }

    return (
        <div>
            <section className="caroselle">
                {isError ? <div className="error-cover"><p>Error while loading data</p></div> : 
                isLoading ? <div><h1>Loading...</h1></div> : <Slider bannerDetails={bannerDetails}/>}
                
                
            </section>

            <section className="office grid-half site-wide-margin">
                <div className="office-img-top office-img">
                    {/* <img src="/static/media/office2.c1d102ce.jpg" alt="" ></img> */}
                </div>
                <div className="office-info">
                    <h5 className="home-title">Justo Petentium te vix, scripta regione urbanitas</h5>
                    <p>venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur vehicula turpis quis mollis. Nullam rutrum cursus nisl at pulvinar. Aliquam at vulputate sem. Nullam eleifend ante nec justo interdum, eu commodo urna cursus. Praesent quam nisi, imperdiet eget nisl nec, pretium accumsan nisl. Ut tempor tempus ex sit amet posuere. Duis neque erat, iaculis eu pharetra a, condimentum id risus. In nec dui a justo efficitur accumsan. </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Consectetur vehicula turpis quis mollis</li>
                        <li>Ut tempor tempus ex sit </li>
                        <li>Nullam rutrum cursus nisl at pulvinar. Aliquam at vulputate sem.</li>
                    </ul>
                    <CompanyButton title="Learn more" isDark={true} isFullWidth={true} isAlwaysFullWidth={false}/>
                </div>
                <div className="office-img-bot office-img">
                    {/* <img src="/static/media/office2.c1d102ce.jpg" alt="" /> */}
                    {/* <img class="imgLogo" alt="facebook-icon" /> */}
                </div>
            </section>
            


            <section className="no-hat ">
                <div className="site-wide-margin grid-half no-hat-container">
                    <div className="no-hat-info">
                        <h3 className="h3">Justo Petentium te vix, scripta regione urbanitas</h3>
                        <p>Curabitur lectus nisi, feugiat ac volutpat nec, elementum non neque. Aliquam ipsum magna, tristique sit amet arcu a, sollicitudin rhoncus mi. Fusce sit amet tellus auctor, tristique purus quis, elementum orci. Ut finibus ligula auctor tincidunt scelerisque. Integer malesuada sed libero in venenatis.</p>
                        <CompanyButton title="Log in" isDark={false} isFullWidth={true} isAlwaysFullWidth={false}/>
                    </div>
                    <div className="placeholder">

                    </div>
                </div>
            </section>


            <section className="site-wide-margin">
                <div className="text-center">
                    <h2 className="h2">Justo Petentium te vix, scripta regione urbanitas</h2>
                    <h3 className="h3"><b>Lorem ipsum dolor sit amet, consectetur</b></h3>
                </div>
                <div className="flow-over">
                    <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur vehicula turpis quis mollis. Nullam rutrum cursus nisl at pulvinar. Aliquam at vulputate sem. Nullam eleifend ante nec justo interdum, eu commodo urna cursus. Praesent quam nisi, imperdiet eget nisl nec, pretium accumsan nisl. Ut tempor tempus ex sit amet posuere. Duis neque erat, iaculis eu pharetra a, condimentum id risus. In nec dui a justo efficitur accumsan.</b><br></br><br></br>Curabitur lectus nisi, feugiat ac volutpat nec, elementum non neque. Aliquam ipsum magna, tristique sit amet arcu a, sollicitudin rhoncus mi. Fusce sit amet tellus auctor, tristique purus quis, elementum orci. Ut finibus ligula auctor tincidunt scelerisque. Integer malesuada sed libero in venenatis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur vehicula turpis quis mollis. Nullam rutrum cursus nisl at pulvinar. Aliquam at vulputate sem. Nullam eleifend ante nec justo interdum, eu commodo urna cursus. Praesent quam nisi, imperdiet eget nisl nec, pretium accumsan nisl. Ut tempor tempus ex sit amet posuere. Duis neque erat, iaculis eu pharetra a, condimentum id risus. In nec dui a justo efficitur accumsan. <br></br><br></br>Curabitur lectus nisi, feugiat ac volutpat nec, elementum non neque. Aliquam ipsum magna, tristique sit amet arcu a, sollicitudin rhoncus mi. Fusce sit amet tellus auctor, tristique purus quis, elementum orci. Ut finibus ligula auctor tincidunt scelerisque. Integer malesuada sed libero in venenatis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur vehicula turpis quis mollis. Nullam rutrum cursus nisl at pulvinar. Aliquam at vulputate sem. Nullam eleifend ante nec justo interdum, eu commodo urna cursus. Praesent quam nisi, imperdiet eget nisl nec, pretium accumsan nisl. Ut tempor tempus ex sit amet posuere. Duis neque erat, iaculis eu pharetra a, condimentum id risus. In nec dui a justo efficitur accumsan. Curabitur lectus nisi, feugiat ac volutpat nec, elementum non neque. Aliquam ipsum magna, tristique sit amet arcu a, sollicitudin rhoncus mi. Fusce sit amet tellus auctor, tristique purus quis, elementum orci. Ut finibus ligula auctor tincidunt scelerisque. Integer malesuada sed libero in venenatis.</p>
                </div>
                <div className="text-center">
                    <CompanyButton title="Contact us" isDark={true} isFullWidth={true} isAlwaysFullWidth={false} clicked={()=>navigateContactUs()}/>
                </div>
                
            </section>


        </div>
    )
}
