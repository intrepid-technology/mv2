import * as React from "react";

import { FormProvider, useForm } from "react-hook-form";

import { PlasmicFormContext } from "./plasmic/market_v_2/PlasmicFormContext";

function FormContext_(props, ref) {
  const formMethods = useForm({
    defaultValues: props.defaultValues,
    shouldUnregister: props.shouldUnregister,
  });
  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <PlasmicFormContext
        root={{ ref }}
        {...props}
        onSubmit={handleSubmit(props.onSubmit)}
      />
    </FormProvider>
  );
}

const FormContext = React.forwardRef(FormContext_);

export default FormContext;
