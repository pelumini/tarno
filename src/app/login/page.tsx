import Container from "@/components/Container";
import FormWrap from "@/components/FormWrap";
import LoginForm from "./LoginForm";
import { getCurrentuser } from "@/actions/getCurrentUser";

const Login = async () => {
  const currentUser = await getCurrentuser();

  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Login;
