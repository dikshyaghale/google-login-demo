import { gapi } from "gapi-script";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "382686270035-tgb29g583kuejlb6avn0bp5421935vit.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log("SUCCESS response", response);
  };
  const onFailure = (response) => {
    console.log("FAILED", response);
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        responseType="id_token"
      />
    </div>
  );
}
export default App;
