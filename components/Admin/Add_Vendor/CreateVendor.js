import React, { useState } from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import VerifiedIcon from '@mui/icons-material/Verified';
export default function CreateVendor() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="border-2 flex justify-center">
      <div className="lg:w-1/2 w-full">
        <Formik
          enableReinitialize
          initialValues={{
            first_name: "",
            last_name: "",
            number: "",
            email: "",
            trade_license_number: "",
            street: "",
            city_id: "",
            state_id: "",
            country_id: "",
            area_id: "",
            type: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.first_name) {
              errors.first_name = "Please enter your first name.";
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex md:justify-between md:flex-row flex-col gap-4">
                <div className="w-full">
                  <TextField
                    id="input-with-icon-textfield"
                    label="First Name"
                    size="small"
                    variant="outlined"
                    className="noring w-full "
                    placeholder="John"
                    name="first_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                    InputLabelProps={{
                      style: { color: "#5B177B", fontWeight: "bold" },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon className="text-2xl text-primary " />
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      autoComplete: "off",

                      form: {
                        autoComplete: "off",
                      },
                      style: {
                        height: "24px",
                        background: "none",
                      },
                    }}
                  />
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.first_name &&
                      touched.first_name &&
                      errors.first_name}
                  </p>
                </div>
                <div className="w-full">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Last Name"
                    size="small"
                    variant="outlined"
                    className="noring w-full "
                    placeholder="Wick"
                    name="last_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                    InputLabelProps={{
                      style: { color: "#5B177B", fontWeight: "bold" },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon className="text-2xl text-primary " />
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      autoComplete: "off",

                      form: {
                        autoComplete: "off",
                      },
                      style: {
                        height: "24px",
                        background: "none",
                      },
                    }}
                  />
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.last_name && touched.last_name && errors.last_name}
                  </p>
                </div>
              </div>
              <div className="flex md:justify-between md:flex-row flex-col gap-4">
                <div className="w-full">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Email"
                    size="small"
                    variant="outlined"
                    className="noring w-full "
                    placeholder="admin@email.com"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    InputLabelProps={{
                      style: { color: "#5B177B", fontWeight: "bold" },
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
                        height: "24px",
                        background: "none",
                      },
                    }}
                  />
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <div className="w-full">
                  <TextField
                    id="input-with-icon-textfield"
                    label="Phone Number"
                    size="small"
                    variant="outlined"
                    className="noring w-full "
                    placeholder="123 456"
                    name="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                    InputLabelProps={{
                      style: { color: "#5B177B", fontWeight: "bold" },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon className="text-2xl text-primary " />
                        </InputAdornment>
                      ),
                    }}
                    inputProps={{
                      autoComplete: "off",

                      form: {
                        autoComplete: "off",
                      },
                      style: {
                        height: "24px",
                        background: "none",
                      },
                    }}
                  />
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.number && touched.number && errors.number}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <TextField
                  id="input-with-icon-textfield"
                  label="Trade Licence"
                  size="small"
                  variant="outlined"
                  className="noring w-full "
                  placeholder="1234 5678"
                  name="trade_license_number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.trade_license_number}
                  InputLabelProps={{
                    style: { color: "#5B177B", fontWeight: "bold" },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VerifiedIcon className="text-2xl text-primary " />
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{
                    autoComplete: "off",

                    form: {
                      autoComplete: "off",
                    },
                    style: {
                      height: "24px",
                      background: "none",
                    },
                  }}
                />
                <p className="text-xs ml-3 text-red-700 mt-1">
                  {errors.trade_license_number && touched.trade_license_number && errors.trade_license_number}
                </p>
              </div>

              <div className="flex md:justify-between md:flex-row flex-col gap-4">
                <FormControl fullWidth size="small"    InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon className="text-2xl text-primary " />
                      </InputAdornment>
                    ),
                  }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#5B177B", fontWeight: "bold" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country_id}
                
                    label="Country"
                    name="country_id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.country_id &&
                      touched.country_id &&
                      errors.country_id}
                  </p>
                </FormControl>{" "}
                <FormControl fullWidth size="small">
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#5B177B", fontWeight: "bold" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country_id}
                    
                    label="Country"
                    name="country_id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.country_id &&
                      touched.country_id &&
                      errors.country_id}
                  </p>
                </FormControl>
              </div>
              <div className="flex md:justify-between md:flex-row flex-col gap-4">
                <FormControl fullWidth size="small"    InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon className="text-2xl text-primary " />
                      </InputAdornment>
                    ),
                  }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#5B177B", fontWeight: "bold" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country_id}
                
                    label="Country"
                    name="country_id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.country_id &&
                      touched.country_id &&
                      errors.country_id}
                  </p>
                </FormControl>{" "}
                <FormControl fullWidth size="small">
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#5B177B", fontWeight: "bold" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country_id}
                    
                    label="Country"
                    name="country_id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.country_id &&
                      touched.country_id &&
                      errors.country_id}
                  </p>
                </FormControl>
              </div>
              <div className="flex md:justify-between md:flex-row flex-col gap-4">
                <FormControl fullWidth size="small"    InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon className="text-2xl text-primary " />
                      </InputAdornment>
                    ),
                  }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#5B177B", fontWeight: "bold" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country_id}
                
                    label="Country"
                    name="country_id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.country_id &&
                      touched.country_id &&
                      errors.country_id}
                  </p>
                </FormControl>{" "}
                <FormControl fullWidth size="small">
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ color: "#5B177B", fontWeight: "bold" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.country_id}
                    
                    label="Country"
                    name="country_id"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <p className="text-xs ml-3 text-red-700 mt-1">
                    {errors.country_id &&
                      touched.country_id &&
                      errors.country_id}
                  </p>
                </FormControl>
              </div>
         
              <Button
                variant="text"
                type="submit"
                disabled={isLoading}
                className="mt-10 w-full capitalize px-4 py-3 text-lg text-white font-bold bg-primary hover:bg-primary2 hover:shadow-xl duration-300 "
              >
                Sign in
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
