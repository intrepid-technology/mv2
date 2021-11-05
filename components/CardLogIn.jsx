import { useRouter } from "next/router";
import * as React from "react";
import useLogin from "../hooks/useLogin";
import useProviderAuth from "../hooks/useProviderAuth";
import { PlasmicCardLogIn } from "./plasmic/market_v_2/PlasmicCardLogIn";

function CardLogIn_(props, ref) {
  const router = useRouter();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [provider, setProvider] = React.useState(null);

  const handleContinue = () => {
    console.log({ email, password });
    loginMutation.mutate();
  };

  const loginMutation = useLogin({
    email,
    password,
  });

  const handleProviderAuth = (e, provider) => {
    setProvider(provider);
    providerAuthMutation.mutate();
  };

  const providerAuthMutation = useProviderAuth({ provider });

  if (loginMutation.isSuccess) {
    router.push("/");
  }

  if (loginMutation.isError) {
    console.log(loginMutation.error.message);
  }

  return (
    <PlasmicCardLogIn
      formLogin={{ ref }}
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
      loginGoogleConnect={{
        onClick: (e) => handleProviderAuth(e, "google"),
      }}
    />
  );
}

const CardLogIn = React.forwardRef(CardLogIn_);

export default CardLogIn;
