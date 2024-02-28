import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import isValueTypeOfEmail, {
  Form,
  Error,
  ErrorBottom,
  Input,
  Switcher,
  Title,
  Wrapper,
} from "../components/auth-component";

type FormFields = {
  name: string;
  email: string;
  password: string;
  passwordForCheck: string;
};

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(credentials.user, { displayName: data.name });
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError("root", { message: error.message });
      }
    }
  };

  return (
    <Wrapper>
      <Title>Create Account</Title>
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
          type="password"
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Input
          type="submit"
          value={isSubmitting ? "Loading..." : "Create Account"}
        />
        {errors.root && <ErrorBottom>{errors.root.message}</ErrorBottom>}
      </Form>
      <Switcher>
        Already have an account? <Link to="/login">Log in &rarr;</Link>
      </Switcher>
    </Wrapper>
  );
}
