import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

const NavLink = ({ href, exact, children, ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " activeNav";
  }

  return (
    <Link href={href} legacyBehavior>
      <a {...props}>{children}</a>
    </Link>
  );
};
export default NavLink;
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};
