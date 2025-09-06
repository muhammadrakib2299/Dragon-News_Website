import SocialLogin from "../SocialLogin";
import SocialPlatform from "../SocialPlatform";

function RightNavbar() {
  return (
    <div>
      <section className="my-5">
        <SocialLogin></SocialLogin>
      </section>

      <section className="my-5">
        <SocialPlatform></SocialPlatform>
      </section>
    </div>
  );
}

export default RightNavbar;
