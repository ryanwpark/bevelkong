// import { ReactComponent as GitHub } from '../assets/github.svg';
// import { ReactComponent as LinkedIn } from '../assets/linkedin.png';

const Links = () => {
  return (
    <div
      id="Links"
      className="fixed flex flex-row items-start text-yellow-500 space-x-2 justify-between p-4 right-0 w-4rem h-30"
    >
      <a
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin" style={{ fontSize: "4rem" }} />
      </a>
      <a
        href="https://github.com/ryanwpark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-github" style={{ fontSize: "4rem" }} />
      </a>
    </div>
  );
};

export default Links;
