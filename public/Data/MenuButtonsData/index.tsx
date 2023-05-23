interface MenuItem {
  label: string;
  href: string;
  value: string;
}

const menuButtons: MenuItem[] = [
  { label: "HOME", href: "/", value: "Home" },
  { label: "ABOUT", href: "/about", value: "About" },
  { label: "CONTACT", href: "/contact", value: "Contact" },
  { label: "MEMBERSHIP", href: "/membership", value: "Membership" },
];

export default menuButtons;
