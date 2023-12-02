// import { TextField, Typography, useTheme } from "@mui/material";
// import { getIn } from "formik";

// const TextFieldContainer = (props) => {
//   const theme = useTheme();
//   // const [field, meta] = useField(props);
//   const { formik, name, type, label, placeholder, inputProps } = props;
//   return (
//     // <Field
//     //   name={name}
//     //   render={({ field, form }) => {
//     //     return (
//     <>
//       <Typography
//         variant="subtitle1"
//         color={theme.palette.text.secondary}
//         sx={{ pb: 0.5 }}
//       >
//         {label}
//       </Typography>
//       <TextField
//         variant="outlined"
//         size="small"
//         type={type ? type : "text"}
//         name={name}
//         value={getIn(formik.values, name)}
//         onChange={formik.handleChange}
//         placeholder={placeholder}
//         fullWidth
//         onBlur={formik.handleBlur}
//         error={
//           getIn(formik.touched, name) && Boolean(getIn(formik.errors, name))
//         }
//         helperText={getIn(formik.touched, name) && getIn(formik.errors, name)}
//         sx={{
//           "& input[type=number]": {
//             MozAppearance: "textfield",
//           },
//           "& input[type=number]::-webkit-outer-spin-button": {
//             WebkitAppearance: "none",
//             margin: 0,
//           },
//           "& input[type=number]::-webkit-inner-spin-button": {
//             WebkitAppearance: "none",
//             margin: 0,
//           },
//         }}
//       />
//     </>
//     //     );
//     //   }}
//     // ></Field>
//   );
// };

// export default TextFieldContainer;








{/* <TextFieldContainer
              name={"email"}
              placeholder={"Enter Protocol Number"}
              label={"Protocol Number"}
              formik={adminFormik}
        /> */}





        // const adminInitialValues = useMemo(()=>{
        //     const admins = adminsData?.admin;
        //     return{
        //       firstName: admins?.fullName ? admins?.fullName.split(' ')[0] : "",
        //       lastName: admins?.fullName ? admins?.fullName.split(' ')[1] : "", 
        //       phone_number: admins?.phone_number ? admins?.phone_number : "",
        //       company_name: admins?.company_name ? admins?.company_name : "",
        //       profession: admins?.profession ? admins?.profession : "",
        //       email: admins?.email ? admins?.email: ""
        //     }
        //   })
        
        
        //   const adminFormik = useFormik({
        //     validateOnMount: true,
        //     initialValues: adminInitialValues,
        //     validationSchema: adminDetValidation,
        //     enableReinitialize: true,
        //     onSubmit: (values) => {
        //       return values;
        //     },
        //   });