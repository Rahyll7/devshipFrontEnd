import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData,postData } from "./Store/action";
import { connect } from 'react-redux';


const App = (props) => {
  let inputValues = {
    firstName: "",
    lastName: "",
    password: "",
    cofirmPassword: "",
  };

  const [data, setData] = useState(inputValues);

  const navigate = useNavigate();

  useEffect(() => {
   props.getData()
}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/SignInpage");
    let array = {
      firstName: inputValues.firstName,
      lastName:inputValues.lastName,
      password:inputValues.password,
      confirmPassword:inputValues.cofirmPassword
  };
  props.addPositionList(array).then((res) => {
    if (res?.data?.status == 200) {
        alert("sucessful")
    } else {
      alert("unsucessful")
    }
});
  };

  const renderInputFields = () => {
    return (
      <>
        <h1>Sign Up form</h1>
        <br></br>
        <label>
          First Name<span>*</span>:
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Your First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <br></br>
        <label>
          Last Name<span>*</span>:
        </label>
        <input
          type="text"
          name="LastName"
          placeholder="Enter Your Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
        <br></br>
        <label>
          Password<span>*</span>:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your password"
          value={data.password}
          onChange={handleChange}
        />
        <br></br>
        <label>
          Confirm Password<span>*</span>:
        </label>
        <input
          type="password"
          name="cofirmPassword"
          placeholder="Enter Your password"
          value={data.cofirmPassword}
          onChange={handleChange}
        />
        <br></br>
        <button onClick={handleSubmit}>Sign Up</button>
      </>
    );
  };

  return <>{renderInputFields()}</>;
};


const mapStateToProps = (state) => ({
  getData: state.reducer.getData,

});

const mapDispatchToProps = {
  getData: getData,  
};



// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
