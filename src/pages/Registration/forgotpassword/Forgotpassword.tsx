const ForgotPassword = () => {
  return (
    <>
      <main className="flex justify-center  container">
        <form action="" className="w-full lg:w-1/2">
          <h2 className="text-center">Password Recovery</h2>
          <label htmlFor="forgotpassword_email">
            Enter Email:
            <input
              type="email"
              name="forgotpassword_email"
              id="forgotpassword_email"
              required
            />
          </label>
          <input
            type="submit"
            value={"Continue"}
            className="text-backgroundcolor bg-primary my-5"
          />
        </form>
      </main>
    </>
  );
};
export default ForgotPassword;
