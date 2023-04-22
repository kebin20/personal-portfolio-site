function NavItem({ onClick, href, className, children }) {
  return (
    <li>
      <a onClick={onClick} href={`#${href}`} className={className} aria-label="menu links">
        {children}
      </a>
    </li>
  );
}
export default NavItem;
