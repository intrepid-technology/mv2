import * as React from "react";

import { PlasmicCardSignUp } from "./plasmic/market_v_2/PlasmicCardSignUp";

function CardSignUp_(props, ref) {
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState(null)

  const handleContinue = () => {
    console.log({email, password})
  }

  return (
    <PlasmicCardSignUp
      formHomeSignUp={{ ref }}
      {...props}
      email={{
        value: email,
        onChange: e => setEmail(e.target.value)
      }}
      password={{
        type: 'password',
        value: password,
        onChange: e => setPassword(e.target.value)
      }}
      continueButton={{
        onClick: (e) => handleContinue(e)
      }}
    />
  );
}

const CardSignUp = React.forwardRef(CardSignUp_);

export default CardSignUp;
