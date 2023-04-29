import SItemcl from './SingleItemTemplate.module.css'

function SingleItem(props) {
    return (
      <div>
        <div className={SItemcl.StdListItemContainer}>
            <div className={SItemcl.StdListItem}>
                <p>{props.Title}</p>
                <p>{props.Address}</p>
                <p>{props.Description}</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default SingleItem;