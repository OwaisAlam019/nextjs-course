import Link from "next/link";
import classes from './Eventitem.module.css'
import buttonClasses from './button.module.css'
import DateIcon from '../icons/date-icon'
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from '../icons/arrow-right-icon'

function  EventItem({eventItem}){

    const {title, image,date,location,id} = eventItem
    const readableDate = new Date(date).toLocaleDateString('en-US',{
        day:'2-digit',
        month:'long',
        year:'numeric'
    })

    const formattedAddress = location.replace(',','\n')

    const exploreLink  = `/events/${id}`

    return (
        <li className={classes.item}>
            <img src={'/'+image}  alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <div>{title}</div>
                    <div className={classes.date}>
                        <DateIcon></DateIcon>
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Link className={buttonClasses.btn} href={exploreLink}>
                        <span> Explore Events </span>
                        <span className={classes.icon}>
                            <ArrowRightIcon/>
                        </span>  
                    </Link>
                </div>
            </div>
        </li>
    )

}

export default EventItem