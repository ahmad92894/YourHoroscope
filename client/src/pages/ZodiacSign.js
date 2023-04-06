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
    <div>
      {/* <code>
        <pre>{JSON.stringify(horoscope, null, 2)}</pre>
      </code> */}
      hello zodiac sign
      <h1>{horoscope.sign}</h1>
      <h1>{horoscope.birthday}</h1>
      <h1>{horoscope.element}</h1>
      <h1>{horoscope.symbol}</h1>
      <h1>{horoscope.background}</h1>
      <h1>{horoscope.personality_traits}</h1>
      <h1>{horoscope.most_compatible}</h1>
    </div>
  );
}
export default ZodiacSign;
