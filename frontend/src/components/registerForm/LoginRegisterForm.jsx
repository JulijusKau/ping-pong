import {
  StyledInput,
  StyledLoginRegisterButton,
  StyledMainForm,
  StyledRegisterLink,
} from "./StyledLoginRegisterForm";

export const LoginRegisterForm = ({
  buttonName,
  isLoginForm,
  onChange,
  onSubmit,
}) => {
  return (
    <StyledMainForm onSubmit={onSubmit}>
      <StyledInput
        name="username"
        type="text"
        placeholder="Username"
        required
        onChange={onChange}
      />
      <StyledInput
        name="password"
        type="password"
        placeholder="*********"
        required
        onChange={onChange}
      />
      <StyledLoginRegisterButton>{buttonName}</StyledLoginRegisterButton>
      {isLoginForm ? (
        <StyledRegisterLink to="/register">
          No account? Register here.
        </StyledRegisterLink>
      ) : (
        <StyledRegisterLink to="/login">
          Already have an account? Login here.
        </StyledRegisterLink>
      )}
    </StyledMainForm>
  );
};
