import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const password=watch('password')
  return (
    <div>
      <form
        className="container border border-dark border-3 mt-5  p-5 w-50"
        onSubmit={handleSubmit(submitHandler)}
      >
        {/* first name */}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("firstName", {
              required: "first name is required",
              minLength: {
                value: 2,
                message: "Minimum length should be of 2 characters",
              },
              maxLength: {
                value: 40,
                message: "Maximum 40 characters are allowed",
              },
            })}
          />
          {errors.firstName && (
            <div id="emailHelp" class="form-text text-danger">
              {errors.firstName.message}
            </div>
          )}
        </div>

        {/* last name */}

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("lastName", {
              required: "last name is required",
              minLength: {
                value: 2,
                message: "Minimum length should be of 2 characters",
              },
              maxLength: {
                value: 40,
                message: "Maximum 40 characters are allowed",
              },
            })}
          />
          {errors.lastName && (
            <div id="emailHelp" class="form-text text-danger">
              {errors.lastName.message}
            </div>
          )}
        </div>

        {/* confirm Password */}

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            email
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message:'Invalid email address'
              },
            })}
          />
          {errors.email && (
            <div id="emailHelp" class="form-text text-danger">
              {errors.email.message}
            </div>
          )}
        </div>

        {/* password */}

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            password
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("password", {
              required: "password is required",
              pattern: {
                value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                message:
                  " password should have minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number ",
              },
            })}
          />
          {errors.password && (
            <div id="emailHelp" class="form-text text-danger">
              {errors.password.message}
            </div>
          )}
        </div>

        {/* confirm Password */}

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Confirm password
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("confirmPassword", {
              required: "confirm password is required",
              validate:(value)=>value===password || 'Password and confirm password is not same'
            })}
          />
          {errors.confirmPassword && (
            <div id="emailHelp" class="form-text text-danger">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
