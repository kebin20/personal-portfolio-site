function NavItem({ onClick, href, className, children }) {
  return (
    <li>
      <a onClick={onClick} href={`#${href}`} className={className}>
        {children}
      </a>
    </li>
  );
}
export default NavItem;
