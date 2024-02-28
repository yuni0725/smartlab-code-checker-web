import { signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import isValueTypeOfEmail, {
  Error,
  ErrorBottom,
  Input,
  Title,
  Wrapper,
  Form,
} from "../components/auth-component";
import { Switcher } from "./../components/auth-component";

type FormFields = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError("root", { message: error.message });
      }
    }
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          type="password"
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Input type="submit" value={isSubmitting ? "Loading..." : "Login"} />
      </Form>
      {errors.root && <ErrorBottom>{errors.root.message}</ErrorBottom>}
      <Switcher>
        Don't have an account?{" "}
        <Link to="/create-account">Create one &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
