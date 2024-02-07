import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

type FormFields = {
  name: string;
  email: string;
  password: string;
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  margin-bottom: 5px;
  color: var(--font-color);
  font-weight: 500;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;

  width: 100%;
  font-size: 16px;

  background-color: whitesmoke;
  color: var(--font-color);

  &:focus {
    outline: 2px solid black;
  }

  &[type="submit"] {
    cursor: pointer;
    outline: none;
    background-color: var(--highlight-color);
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Error = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: tomato;
`;

function isValueTypeOfEmail(textShouldBeCheck: string): boolean {
  if (textShouldBeCheck.includes("@")) {
    return true;
  }
  return false;
}

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      setError("root", { message: "Server Error" });
    }
  };

  return (
    <Wrapper>
      <Title>Create Account</Title>
      <Title>SmartLab</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name", { required: "Name is required!" })}
          placeholder="Name"
          autoComplete="off"
        />
        {errors.name && <Error>{errors.name.message}</Error>}
        <Input
          {...register("email", {
            required: "Email is required!",
            validate: (value) => {
              if (isValueTypeOfEmail(value)) {
                return true;
              }
              return "Email must include '@'";
            },
          })}
          type="text"
          placeholder="Email"
          autoComplete="off"
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Input
          {...register("password", { required: "Password is required!" })}
          placeholder="Password"
          autoComplete="off"
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Input
          type="submit"
          value={isSubmitting ? "Loading..." : "Create Account"}
        />
        {errors.root && <Error>{errors.root.message}</Error>}
      </Form>
    </Wrapper>
  );
}
