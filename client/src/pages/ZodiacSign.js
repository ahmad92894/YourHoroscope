import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_HOROSCOPE } from "../utils/queries";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

function ZodiacSign() {
  const { sign } = useParams();
  console.log('SIGN', sign);
  const { loading, data } = useQuery(QUERY_SINGLE_HOROSCOPE, {
    variables: { sign: sign },
  });
  const horoscope = data?.horoscope || {};
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "100px" }}>
      
      <h1>    <strong>Sign:</strong>                {horoscope.sign}</h1>
      <h1>    <strong>Birthday:</strong>            {horoscope.birthday}</h1>
      <h1>    <strong>Element:</strong>             {horoscope.element}</h1>
      <h1>    <strong>Symbol:</strong>              {horoscope.symbol}</h1>
      <h1>    <strong>Background:</strong>          {horoscope.background}</h1>
      <h1>    <strong>Personality Traits:</strong>  {horoscope.personality_traits}</h1>
      <h1>    <strong>Most Compatible:</strong>     {horoscope.most_compatible}</h1>
      <h1>    <strong>Todays Horoscope:</strong>    {horoscope.todays_horoscope}</h1>
    </div>
  );
}
export default ZodiacSign;




