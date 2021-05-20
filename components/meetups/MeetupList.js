import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.length ? (
        props.meetups.map(meetup => (
          <MeetupItem
            key={meetup._id}
            id={meetup._id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            isFav={meetup.isFav}
          />
        ))
      ) : (
        <p>No meetups added yet.</p>
      )}
    </ul>
  );
}

export default MeetupList;
