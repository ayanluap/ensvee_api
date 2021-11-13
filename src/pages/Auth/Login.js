import { Grid, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalStore';
import { Box } from '@mui/system';

import grpPic from '../../assets/grpPic.svg';
import Btn from '../../components/Btn';

const validate = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email!')
    .max(255)
    .required('Required Field'),
  password: Yup.string()
    .min(8, 'Password should have atleast 8 characters!')
    .max(255)
    .required('Required Field'),
});

const Login = () => {
  const theme = useTheme();

  const { loginAction } = useContext(GlobalContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validate,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      const formData = { ...values };
      formData['email'] = values['email'];
      formData['password'] = values['password'];

      loginAction(formData);
    },
  });

  return (
    <Grid container spacing={0} className="fullVh">
      <Grid item md={6} xs={12} p={10}>
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          Sign In
        </Typography>
        <Typography variant="subtitle1" style={{}}>
          Welcome, we missed you!
        </Typography>

        <form onSubmit={formik.handleSubmit} className="form__content">
          <TextField
            id="email"
            type="email"
            label="Your Email"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            placeholder="jondoe@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.errors.email}
          />
          <TextField
            id="password"
            type="password"
            label="password"
            placeholder="Enter Your Password"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.errors.password}
          />
          {/* <Link
            to="/account/forgot-password"
            style={{ display: 'block', textAlign: 'right' }}
            className="link text-small"
          >
            forgot password?
          </Link> */}

          <LoadingButton
            // onClick={handleClick}
            // loading={loading}
            loadingPosition="end"
            variant="contained"
            color="warning"
            style={{ width: '100%' }}
            type="submit"
            size="large"
          >
            sign in
          </LoadingButton>
        </form>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        style={{ background: theme.palette.dark }}
        p={10}
      >
        <Typography variant="h4" style={{ fontWeight: 'bold' }}>
          Natus Vincere
        </Typography>
        <Typography variant="subtitle1" style={{}}>
          Online team management
        </Typography>
        <Box textAlign="center">
          <img src={grpPic} alt="grp" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
