import { useEffect } from "react";
import styled from "styled-components";

const SigninPage = ({ loginDataOnChange, handleLogin, setIsSignInfoValid, signinInfo, isSignInfoValid }) => {
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsSignInfoValid(signinInfo.email.includes("@") && signinInfo.password.length >= 5);
    }, 500);

    return () => clearTimeout(identifier);
  }, [signinInfo]);

  return (
    <Container>
      <div className="inner__container">
        <div className="inner__container__left">
          <div className="left__container">
            <h2>Login</h2>
            <h4>Get access to your Orders,Wishlist and Recommendations</h4>
          </div>
        </div>
        <div className="inner__container__right">
          <div className="right__container">
            <form onSubmit={handleLogin}>
              <div className="inner__container__right__email">
                <label for="email"> Email</label>
                <input id="email" type="email" placeholder="johndoe@xyz.com" required onChange={loginDataOnChange} />
              </div>
              <div className="inner__container__right__password">
                <label for="password"> Password </label>
                <input id="password" type="password" placeholder="***********" required onChange={loginDataOnChange} />
              </div>
              <SigninButton disabled={!isSignInfoValid} type="submit">
                {" "}
                Signin{" "}
              </SigninButton>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SigninPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-height: 85vh;
  max-width: 80vw;
  padding: 2rem 0;
  margin: 0 auto;

  .inner__container {
    max-width: 60vw;
    margin: 0 auto;

    min-height: 30rem;
    display: flex;

    .inner__container__left {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;
      .left__container {
        h2 {
          font-size: 3rem;
          padding-bottom: 1rem;
        }
      }
    }
    .inner__container__right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .right__container form {
        display: flex;
        gap: 1rem;
        height: 20rem;
        flex-direction: column;
        width: 25rem;

        .btn__login {
          font-size: 1rem;
          color: white;
          background-color: #de006f;
          padding: 1rem 1rem;
          border: 0;
          width: 100%;
          cursor: pointer;
          border-radius: 3px;
        }
        .inner__container__right__email {
          display: flex;
          flex-direction: column;

          input {
            padding: 0.6rem 0;
            font-size: 1rem;
            border: none;
            width: 100%;

            &:focus {
              outline: none;
              border-bottom: 2px solid lightblue;
            }
          }
        }
        .inner__container__right__password {
          display: flex;
          flex-direction: column;
          input {
            padding: 0.6rem 0;
            font-size: 1rem;
            border: none;
            &:focus {
              outline: none;
              border-bottom: 2px solid lightblue;
            }
          }
        }
      }
    }
  }

  /* MEDIA QUERY - TABLET*/

  @media (min-width: 481px) and (max-width: 768px) {
    .inner__container {
      flex-direction: column;
      gap: 1rem;
      max-width: 100vw;
      margin: 0;
    }
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
    .inner__container {
      max-width: 100vw;
      margin: 0;
      flex-direction: column;
      gap: 1rem;

      .inner__container__right {
        .right__container form {
          width: 100%;
          .inner__container__right__email,
          .inner__container__right__password {
            width: 100%;
            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

const SigninButton = styled.button`
  font-size: 1rem;
  color: white;
  background-color: ${props => (props.disabled ? "#ccc" : "#de006f")};
  padding: 1rem 1rem;
  border: 0;
  width: 100%;
  cursor: pointer;
  border-radius: 3px;

  /* MEDIA QUERY - TABLET*/

  @media (min-width: 481px) and (max-width: 768px) {
  }

  /* MEDIA QUERY - MOBILE*/
  @media (max-width: 480px) {
  }
`;


