const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="bg-c-tertiary h-8 text-white flex items-center justify-center">
      <p className="text-xs">© {getYear} Siroter-Le-Delicieux-Cafe</p>
    </div>
  );
};

export default Footer;
