import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_HOROSCOPE } from "../utils/queries";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

function ZodiacSign() {
  const { zodiacsign } = useParams();
  console.log(zodiacsign);
  const { loading, data } = useQuery(QUERY_SINGLE_HOROSCOPE, {
    variables: { sign: zodiacsign },
  });
  const horoscope = data?.horoscope || {};
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      hello zodiac sign
      <h1>{horoscope.Sign}</h1>
      <h1>{horoscope.Birthday}</h1>
      <h1>{horoscope.Element}</h1>
      <h1>{horoscope.Symbol}</h1>
      <h1>{horoscope.Background}</h1>
      <h1>{horoscope.Personality_Traits}</h1>
      <h1>{horoscope.Most_Compatible}</h1>
    </div>
  );
}

export default ZodiacSign;
