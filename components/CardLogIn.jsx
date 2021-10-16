import * as React from "react";

import { PlasmicCardLogIn } from "./plasmic/market_v_2/PlasmicCardLogIn";

function CardLogIn_(props, ref) {
  const [email, setEmail] = React.useState(null)
  const [password, setPassword] = React.useState(null)

  const handleContinue = () => {
    console.log({email, password})
  }

  return (
    <PlasmicCardLogIn
      formLogin={{ ref }}
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

const CardLogIn = React.forwardRef(CardLogIn_);

export default CardLogIn;
