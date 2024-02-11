
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const [title, setTitle] = useState('Form');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState(" ");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

useEffect(()=>{
  (async function fetchData(){
    const titleResponse = await fetch("http://localhost:4000/getInitialInfo");
    let title = await titleResponse.json();
    setTitle(title.title);
  })();
}, []);

  const onSubmit = async (data)=>{
    if(password !== confirmPassword){
      setErrorMsg('Password and confirm password do not match.')
      return;
    }
    try {
        let req = {};
        req['first_name'] = data.firstName;
        req['last_name'] = data.lastName;
        req['email'] = data.email;
        req['password'] = data.password;

        const response = await fetch('http://localhost:4000/createUser',
        {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req),
          });
       
        if (response.ok) {
          const responseData = await response.json();
          console.log('Response:', responseData);
          reset();
          setIsSubmitSuccess(true);
        } else {
          const errorData = await response.json();
          console.log('Error:', errorData.message);
          setErrorMsg(errorData.message); 
          setSuccessMessage('')
        }
      } catch (error) {
        console.error('Fetch error:', error);
        setErrorMsg('An error occurred while processing your request.'); 
        setSuccessMessage('');
      }
  }

  const onSubmitEmp = async (data)=>{
    try {
        let req = {};
        req['emp_name'] = "Vikk";
        req['role'] = "Manager";
        req['dob'] = 15/11/1998;

        const response = await fetch('http://localhost:4000/setEmpInfo',
        {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req),
          });
        if (response.ok) {
          const responseData = await response.json();
          console.log('Response:', responseData);
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
  }

  return (
    <div className="registrationform">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <label>First Name</label>
          <input type="text" id="text" {...register("firstName", { required: true })} />
          {errors.firstName && <p className="show_error">First name is required.</p>}
        </div>

        <div className="form_group">
          <label>Last Name</label>
          <input type="text" id="text" {...register("lastName")}/>
        </div>

        <div className="form_group">
          <label>email</label>
          <input type="email" id="email" {...register("email",{ required: true })} />
          {errors.email && <p className="show_error">email id is required.</p>}
        </div>

        <div className="form_group">
          <label>Password</label>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} {...register("password")}/>
          
        </div>

        <div className="form_group">
          <label>Confirm Password</label>
          <input  type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} {...register("confirm_password")}/>
        </div>
       
        <div>
         <button >Submit</button>
        </div>

      </form>
      {isSubmitSuccess && (<div style={{color:'green'}}>Submitted Successfully...</div>)}
      {errorMsg && (<div style={{color:'red'}}>{errorMsg}</div>)}
    </div>
  );
}

export default Register;
