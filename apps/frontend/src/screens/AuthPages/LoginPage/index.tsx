import { PagesEndponts } from "@enums/pagesEndpoints";
import { ServiceNames } from "@enums/serviceNames";
import { Form } from "@forms/Form";
import { Input } from "@forms/Input";
import { InputPassword } from "@forms/InputPassword";
import { Label } from "@forms/Label";
import { useForm } from "@hooks/form/use-form";
import { useNavigateOnSuccess } from "@hooks/navigation/use-navigate-on-success";
import { authService } from "@services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui/Button";
import { FC, useMemo } from "react";
import { Link } from "react-router";

export const LoginPage: FC = () => {
  const initialState = useMemo(() => {
    return {
      email: "",
      password: "",
    };
  }, []);
  const { loginUser } = authService(ServiceNames.AUTH);

  const { isSuccess, mutate: loginMutation } = useMutation({
    mutationFn: loginUser,
  });

  const handleLogin = () => {
    loginMutation(formState);
  };

  const { formState, handleChange, handleSubmit } = useForm(
    initialState,
    handleLogin
  );

  useNavigateOnSuccess(isSuccess, PagesEndponts.HOME);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Form className="mt-40 flex flex-col gap-6" handleSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Label>Email</Label>
          <Input
            name="email"
            handleChange={handleChange}
            className="border rounded-md border-primary focus:border-primary"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Password</Label>
          <InputPassword
            name="password"
            handleChange={handleChange}
            className="border rounded-md border-primary focus:border-primary"
          />
          <Link className="text-xs text-right" to={PagesEndponts.REGISTER}>
            Dont have an account? Register it!
          </Link>
        </div>
        <Button type="submit" className="bg-primary rounded-md text-white">
          Login
        </Button>
      </Form>
    </div>
  );
};
