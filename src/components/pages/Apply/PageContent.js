import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccentIcon, { TYPES as IconTypes } from "components/common/AccentIcon";
import WithLayout from "components/common/WithLayout";

// form
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const leftSide = (
  <div className="accent-left">
    <AccentIcon type={IconTypes.CIRCLES} cssClass="icon1" />
    <AccentIcon type={IconTypes.LINE} cssClass="icon2" />
  </div>
);

const rightSide = (
  <div className="accent-right">
    <AccentIcon type={IconTypes.SQUARE} cssClass="icon1" />
    <AccentIcon type={IconTypes.DOTS} cssClass="icon2" />
  </div>
);

const PageContent = () => {
  const [form, setForm] = React.useState({
    hearaboutus: "",
    other: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    loantype: "",
    desiredfundingamount: "",
    scenario: "",
  });

  const updateState = (data) => setForm({ ...form, ...data });

  return (
    <WithLayout leftSide={leftSide} rightSide={rightSide}>
      <section className="main-section">
        <Grid container>
          <Grid container justify="center" alignItems="center" item xs={12}>
            <form
              className="form"
              noValidate
              autoComplete="off"
              action="https://posteritytechnologies.com/formtools/process.php"
              method="post"
            >
              <input type="hidden" name="form_tools_form_id" value="3" />
              <Grid item xs={12}>
                <Typography variant="h1">Apply</Typography>
              </Grid>
              <Grid container direction="column">
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid container justify="center" item xs={12}>
                <FormControl className="form-control">
                  <InputLabel id="hearaboutus">
                    How Did You Hear About Us?
                  </InputLabel>
                  <Select
                    labelId="hearaboutus"
                    native
                    value={form.hearaboutus}
                    onChange={(e) =>
                      updateState({ hearaboutus: e.target.value })
                    }
                  >
                    <option aria-label="None" value="">
                      Select an option...
                    </option>
                    <option value="Website">Website</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
                {form.hearaboutus && form.hearaboutus.indexOf("Other") > -1 && (
                  <FormControl className="form-control">
                    <TextField
                      id="other"
                      label="Where else did you hear about us?"
                      autoComplete="off"
                      value={form.other}
                      onChange={(e) =>
                        updateState({
                          other: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                )}
                <input
                  type="hidden"
                  name="hearaboutus"
                  value={
                    form.hearaboutus === "Other"
                      ? `Other - ${form.other}`
                      : form.hearaboutus
                  }
                  onChange={() => {}}
                />
                <FormControl className="form-control">
                  <TextField
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    autoComplete="off"
                    value={form.firstname}
                    onChange={(e) => updateState({ firstname: e.target.value })}
                  />
                </FormControl>
                <FormControl className="form-control">
                  <TextField
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    autoComplete="off"
                    value={form.lastname}
                    onChange={(e) => updateState({ lastname: e.target.value })}
                  />
                </FormControl>
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
                {/* <FormControl className="form-control">
                  <InputLabel id="loantype">Loan Type</InputLabel>
                  <Select
                    labelId="loantype"
                    name="loantype"
                    native
                    value={form.loantype}
                    onChange={(e) => updateState({ loantype: e.target.value })}
                  >
                    <option aria-label="None" value="">
                      Select an option...
                    </option>
                    <option value="Medical Services">Medical Services</option>
                    <option value="Staffing">Staffing</option>
                    <option value="Government Contractors">
                      Government Contractors
                    </option>
                    <option value="Other">
                      Other (Please add info in Scenario)
                    </option>
                  </Select>
                </FormControl> */}
                {/* <FormControl className="form-control">
                  <TextField
                    id="fundingamount"
                    name="desiredfundingamount"
                    label="Desired Funding Amount"
                    autoComplete="off"
                    value={form.desiredfundingamount}
                    onChange={(e) =>
                      updateState({ desiredfundingamount: e.target.value })
                    }
                  />
                </FormControl> */}
                <FormControl className="form-control">
                  <TextField
                    id="scenario"
                    name="scenario"
                    label="Scenario"
                    multiline
                    rows={3}
                    autoComplete="off"
                    value={form.scenario}
                    onChange={(e) => updateState({ scenario: e.target.value })}
                  />
                </FormControl>
                <FormControl className="form-control btnSubmit">
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </FormControl>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </section>
    </WithLayout>
  );
};

export default PageContent;
