import React ,{useEffect}from "react";
import { useCookies } from "react-cookie";
import Head from "next/head";
import Button from "@mui/material/Button";
import Link from "next/link";
import TextField from "@mui/material/TextField";


import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Checkbox from "@mui/material/Checkbox";
import { Formik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import Image from "next/image";
import ReactTypingEffect from "react-typing-effect";









function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginapifunction = async (values) => {
    console.log(values);
  };
 


  return (
    <>
      <Head>
        <title>Login | Moover</title>
      </Head>
    
      <div
        className={`relative overflow-hidden h-screen flex items-center  bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat bg-static bg-fixed signup`}
      >
     

        <div className="container-sk">
          <div className=" rotate-border  bg-white w-full mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3   p-1  ">
            <div className="z-10 rounded-lg bg-[url('/bg1.jpg')]  bg-center bg-cover bg-no-repeat bg-static bg-fixed    w-full h-full">
            <div className="md:p-14 p-5  rounded-lg backdrop-blur-xl bg-white/50">
            <div className="flex justify-center w-full select-none pointer-events-none">
                <Image
                  placeholder="blur"
                  src="/logo.png"
                  width={200}
                  height={200}
                  alt="Logo"
                  blurDataURL="/logo.png"
                  className="object-contain h-full w-1/2 "
                />
              </div>

              <Formik
                enableReinitialize
                initialValues={{
                  email: "",
                  password: "",
                  remember: "false",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Please enter your email.";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }

                  if (!values.password) {
                    errors.password = "Please enter your password.";
                  } else if (values.password?.length < 4) {
                    errors.password =
                      "Password should be more than 4 characters.";
                  }
                  return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                  loginapifunction(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,

                  /* and other goodies */
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 md:space-y-6 "
                  >
                    <div className="py-5 h-20">
                      <ReactTypingEffect
                        speed={100}
                        eraseSpeed={10}
                        eraseDelay={10000}
                        className="text-center font-display text-primary  tracking-wider lg:text-xl md:text-base  text-lg "
                        text={[
                          "Great to see you again! Let's sign in and connect.",
                        ]}
                      />
                    </div>

                    <div>
                      <TextField
                        id="input-with-icon-textfield"
                        label="Email"
                        size="large"
                        variant="outlined"
                        className="noring w-full "
                        placeholder="example@email.com"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        InputLabelProps={{
                            style: { color: '#5B177B',fontWeight:"bold", },
                          }}
                        InputProps={{
                      
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon className="text-2xl text-primary " />
                            </InputAdornment>
                          ),
                        }}
                        inputProps={{
                          autoComplete: "off",

                          form: {
                            autoComplete: "off",
                          },
                          style: {
                            height: "35px",
                            background:"none",
                         
                          },
                        }}
                      />
                      <p className="text-xs ml-3 text-red-700 mt-1">
                        {errors.email && touched.email && errors.email}
                      </p>
                      <FormControl
                        variant="outlined"
                        size="large"
                        className="w-full mt-5 "
                      >
                       <InputLabel
    htmlFor="outlined-adornment-password"
    style={{ color: '#5B177B', fontWeight: 'bold' }}
  >
                          Password
                        </InputLabel>
                        <OutlinedInput
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="***************"
                          inputProps={{
                            autoComplete: "new-password",

                            style: {
                              height: "35px",
                              background:"none",
                          
                            },
                          }}
                          id="outlined-adornment-password"
                          className="noring"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff className="text-primary" />
                                ) : (
                                  <Visibility className="text-primary" />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <KeyIcon className="text-2xl text-primary" />
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <p className="text-xs ml-3 text-red-700 mt-1">
                        {errors.password && touched.password && errors.password}
                      </p>

                      <div className="mt-2">
                        <FormControlLabel
                          name="remember"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.remember}
                          control={<Checkbox defaultChecked />}
                          label="Remember Password"
                        />
                      </div>
                      <Button
                        variant="text"
                        type="submit"
                        disabled={isLoading}
                        className="mt-10 w-full capitalize px-4 py-3 text-lg text-white font-bold bg-primary hover:bg-primary2 hover:shadow-xl duration-300 "
                      >
                        Sign in
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
