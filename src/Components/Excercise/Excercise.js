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
import { addToList, clearList } from "../../actions/formActions";
import store from "../../store";
import "./Excercise.css";

function Exercise() {
  const dispatch = useDispatch();
  
  const REGEX_VALID_EMAIL = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@↵(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/;
  const isValidEmail = (value) => {
    if (value && value.match(REGEX_VALID_EMAIL)) {
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
  const [, forceUpdate] = React.useState(0);
  const userList = store.getState().form.userList;

  const handleList = () => {
    dispatch(clearList());
    forceUpdate(n => !n)
  };


  return (
    <Grid className="exercise container" container spacing={3}>
      <Grid item xs={6}>
        <Form
          onSubmit={handleSubmit}
          render={({ form, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader class="title" title="Form" />
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
                    <Button
                      color="primary"
                      disabled={!email}
                      variant="contained"
                      type="submit"
                    >
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
        <Card class="scroll">
          <CardHeader class="title" title="Submitted Form" />
          <CardContent>
          <Button
            padding={10}
            color="secondary"
            disabled={userList.length === 0}
            variant="contained"
            onClick={handleList}
          >
            Clear List
          </Button>
            {userList.map((obj, index) => (
              <div key={index}>
                <br />
                <Typography>
                  <strong>Full Name: </strong>
                  {obj.name}
                </Typography>
                <Typography>
                  <strong>Email: </strong>
                  {obj.email}
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
