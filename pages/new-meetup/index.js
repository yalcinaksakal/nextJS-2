//our-domain/new-meetup

import { useRouter } from "next/router";
import { useState } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Spinner from "../../components/ui/Spinner";

const NewMeetupPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState({ status: false, msg: "" });
  const addMeetupHandler = async meetupData => {
    setIsLoading({ status: true, msg: "Loading" });
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
    setIsLoading({ status: false, msg: "Succesfully added" });
    setTimeout(() => {
      setIsLoading({ status: false, msg: "ok" });
      router.push("/");
    }, 1000);
  };
  return isLoading.msg ? (
    <>
      <p>{isLoading.msg}</p>
      {isLoading.status && <Spinner />}
    </>
  ) : (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
};

export default NewMeetupPage;
