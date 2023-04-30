import SItemcl from './SingleItemTemplate.module.css'
import { Link } from 'react-router-dom';

function SingleItem(props) {
    return (
      <div>
        <div className={SItemcl.StdListItemContainer}>
            <div className={SItemcl.StdListItem}>
                <p className={SItemcl.businessName}>{props.Title}</p>
                <p className={SItemcl.businessAddress}>{props.Address}</p>
                <p className={SItemcl.businessDescription}>{props.Description}</p>
                <img src={props.ItemImage}  alt=''/>
                <div className={SItemcl.mapsContainer}>
                    <iframe className={SItemcl.maps}
                        title = {props.GMaps}
                        src= {props.GMaps}
                        style={{border: "0"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
                <Link className={SItemcl.businessLink} to={props.WbSite} target='_blank'>Website</Link>
            </div>
        </div>
      </div>
    );
  }
  
  export default SingleItem;