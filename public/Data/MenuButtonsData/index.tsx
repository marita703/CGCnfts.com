interface MenuItem {
  label: string;
  href: string;
  value: string;
}

const menuButtons: MenuItem[] = [
  { label: "HOME", href: "/", value: "Home" },
  { label: "ABOUT", href: "/about", value: "About" },
  {label: "JOBS", href: "https://www.cgc.xyz/get-hired", value: "Jobs"},
  { label: "MEMBERSHIP", href: "/join-the-club", value: "Membership" },
  { label: "CONTACT", href: "/contact", value: "Contact" },
];

export default menuButtons;
