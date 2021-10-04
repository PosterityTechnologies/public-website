import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const ContactUsForm = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    comments: "",
  });

  const updateState = (data) => setForm({ ...form, ...data });

  return (
    <form
      className="form"
      noValidate
      autoComplete="off"
      action="https://posteritytechnologies.com/formtools/process.php"
      method="post"
    >
      <input type="hidden" name="form_tools_form_id" value="2" />
      <Grid container>
        <Grid container justify="center" item xs={12}>
          <Typography variant="h3">Contact Us</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl className="form-control">
            <TextField
              id="name"
              name="name"
              label="Name"
              autoComplete="off"
              value={form.name}
              onChange={(e) => updateState({ name: e.target.value })}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className="form-control">
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              autoComplete="off"
              value={form.email}
              onChange={(e) => updateState({ email: e.target.value })}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className="form-control">
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              autoComplete="off"
              value={form.phone}
              onChange={(e) => updateState({ phone: e.target.value })}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="service">Service</InputLabel>
            <Select
              labelId="service"
              name="service"
              native
              value={form.service}
              onChange={(e) => updateState({ service: e.target.value })}
            >
              <option aria-label="None" value=""></option>
              <option value="Medical Services">Medical Services</option>
              <option value="Staffing">Staffing</option>
              <option value="Government Contractors">
                Government Contractors
              </option>
              <option value="Other">Other (Please add info in Comments)</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className="form-control">
            <TextField
              id="comments"
              name="comments"
              label="Comments"
              multiline
              rows={5}
              autoComplete="off"
              value={form.comments}
              onChange={(e) => updateState({ comments: e.target.value })}
            />
          </FormControl>
        </Grid>
        <Grid container justify="center" item xs={12}>
          <FormControl className="form-control btnSubmit">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactUsForm;
