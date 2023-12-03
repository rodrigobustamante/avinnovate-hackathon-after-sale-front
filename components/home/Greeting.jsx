"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { Title } from "../shared/Title";

const Greeting = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Title name={`Welcome again, ${user.fullName}!`} />;
  }

  return <Title name={"Welcome!"} />;
};

export default Greeting;
