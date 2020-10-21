import React, { useState } from "react";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import {Button,Card,CardActions,CardContent,Grid,Typography,} from "@material-ui/core";
import GoogleLogin from 'react-google-login';
import useStyles from "./styles";
import axios from 'axios';
import {Link} from 'react-router-dom'

function Login(props) {
const responseGoogle = response => {
    console.log(response.tokenObj.id_token);

    const body = { idToken: response.tokenObj.id_token, mode: 'web' };
    axios
      .post("http://dev-api.navgurukul.org/apiDocs/users/auth/google", body)
      .then((res) => {
        console.log(res, "respones")
        props.history.push('/Home')
      })

      .catch((err) => {
        console.log(err, "errorr");

      });


  }
  const classes = useStyles();
  const [isLogin, setLoginType] = useState(false);
  let message = (
    <span>
      Already have an account?{" "}
      <u onClick={() => setLoginType(true)}>Login here</u>
    </span>
  );
  if (isLogin) {
    message = (
      <span>
        New to Meraki? <u onClick={() => setLoginType(false)}>Sign Up here</u>
      </span>
    );
  }
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <LockOpenTwoToneIcon />
          </CardContent>
          <CardActions className={classes.cardContent}>
            <Button className={classes.button}>
              {isLogin ? <GoogleLogin

                clientId="34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={(renderProps) => (
                  <Button
                    onClick={renderProps.onClick}
                    className={classes.buttons}
                    variant="contained"
                    size="large"

                  >
                    Login with Google
                  </Button>
                )}

              /> : <GoogleLogin
                  clientId="34917283366-b806koktimo2pod1cjas8kn2lcpn7bse.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      variant="contained"
                      className={classes.buttons}
                      size="large"
                      color="primary"
                      >
                      Signup with Google
                    </Button>
                  )}
                />}
            </Button>

            <Typography className={classes.swap}>{message}</Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;






















