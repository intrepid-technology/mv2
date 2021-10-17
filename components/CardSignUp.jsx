import { useRouter } from "next/router";
import * as React from "react";
import useCreateUser from "../hooks/useCreateUser";
import { PlasmicCardSignUp } from "./plasmic/market_v_2/PlasmicCardSignUp";

function CardSignUp_(props, ref) {
  const router = useRouter();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleContinue = async () => {
    console.log({ email, password });
    createUserMutation.mutate();
  };

  const createUserMutation = useCreateUser({
    email,
    password,
  });

  if (createUserMutation.isSuccess) {
    router.push("/log-in");
  }

  if (createUserMutation.isError) {
    console.log(createUserMutation.error.message);
  }

  return (
    <PlasmicCardSignUp
      formHomeSignUp={{ ref }}
      {...props}
      email={{
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }}
      password={{
        type: "password",
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }}
      continueButton={{
        onClick: (e) => handleContinue(e),
      }}
    />
  );
}

const CardSignUp = React.forwardRef(CardSignUp_);

export default CardSignUp;
