import Container from "@/components/Container";
import FormWrap from "@/components/FormWrap";
import RegisterForm from "./RegisterForm";
import { getCurrentuser } from "@/actions/getCurrentUser";

const Register = async () => {
  const currentUser = await getCurrentuser();

  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default Register;
