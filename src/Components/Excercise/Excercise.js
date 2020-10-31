import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Form } from "react-final-form";
import { TextField } from "@material-ui/core";
import composeValidators from "../../composeValidators";
import { useDispatch } from "react-redux";
import { addToList } from "../../actions/formActions";
import store from "../../store";
import "./Excercise.css";

function Exercise() {
  const dispatch = useDispatch();
  const REGEX_VALID_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const isValidEmail = (value) => {
    if (value && REGEX_VALID_EMAIL) {
      return value;
    }
  };
  const handleSubmit = () => {
    const user = {
      name: name,
      email: email,
    };
    dispatch(addToList(user));
    setName("");
    setEmail("");
  };

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const userList = store.getState().form.userList;

  return (
    <Grid className="exercise container" container spacing={3}>
      <Grid item xs={6}>
        <Form
          onSubmit={handleSubmit}
          render={({ form, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader title="Form" />
                  <CardContent>Please fill out this form.</CardContent>
                  <CardActions>
                    <div>
                      <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        type="text"
                        id="outlined-error-helper-text"
                        label="Name"
                        placeholder="..."
                        variant="outlined"
                      />
                      &nbsp;&nbsp;
                      <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-error-helper-text"
                        label="Email"
                        placeholder="Required"
                        variant="outlined"
                        required
                        type="email"
                        validate={composeValidators(isValidEmail)}
                      />
                    </div>
                    <Button disabled={!email} variant="contained" type="submit">
                      Submit
                    </Button>
                  </CardActions>
                </Card>
              </form>
            );
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <Card>
          <CardHeader title="Submitted Form" />
          <CardContent>
            {userList.map((obj, index) => (
              <div key={index}>
                <br />
                <Typography>
                  <strong>Full Name: {obj.name}</strong>
                </Typography>
                <Typography>
                  <strong>Email: {obj.email}</strong>
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Exercise;
