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
      {/* <code>
        <pre>{JSON.stringify(horoscope, null, 2)}</pre>
      </code> */}

      <dl className="d-flex flex-column">
        <dt className="mr-3">
          <strong>Sign:</strong>
        </dt>
        <dd>
          {horoscope.sign}
          </dd>
        </dl>
      <dl>
        <dt className="mr-3">
          <strong>Birthday:</strong>
        </dt>
         <dd>
          {horoscope.birthday}
          </dd>
        </dl>
      <dl>
        <dt className="mr-3">
          <strong>Element:</strong>
        </dt>
          <dd>
            {horoscope.element}
            </dd>
          </dl>
      <dl>
        <dt className="mr-3">
          <strong>Symbol:</strong>
        </dt>
          <dd>
            {horoscope.symbol}
            </dd>
          </dl>
      <dl>
        <dt className="mr-3">
          <strong>Background:</strong>
        </dt>
         <dd>
          {horoscope.background}
          </dd>
        </dl>
      <dl>
        <dt className="mr-3">
          <strong>Personality Traits:</strong>
        </dt>
         <dd>
          {horoscope.personality_traits}
          </dd>
        </dl>
      <dl>
        <dt className="mr-3">
          <strong>Most Compatible:</strong>
        </dt>
        <dd>
          {horoscope.most_compatible}
          </dd>
        </dl>
      <dl>
        <dt className="mr-3">
          <strong>Todays Horoscope:</strong>
        </dt>
        <dd>
          {horoscope.todays_horoscope}
          </dd>
        </dl>
    </div>
  );
}
export default ZodiacSign;